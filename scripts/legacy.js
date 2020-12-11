(function () {
    'use strict';

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * True if the custom elements polyfill is in use.
     */
    const isCEPolyfill = typeof window !== 'undefined' &&
        window.customElements != null &&
        window.customElements.polyfillWrapFlushCallback !==
            undefined;
    /**
     * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
     * `container`.
     */
    const removeNodes = (container, start, end = null) => {
        while (start !== end) {
            const n = start.nextSibling;
            container.removeChild(start);
            start = n;
        }
    };

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * An expression marker with embedded unique key to avoid collision with
     * possible text in templates.
     */
    const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
    /**
     * An expression marker used text-positions, multi-binding attributes, and
     * attributes with markup-like text values.
     */
    const nodeMarker = `<!--${marker}-->`;
    const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
    /**
     * Suffix appended to all bound attribute names.
     */
    const boundAttributeSuffix = '$lit$';
    /**
     * An updatable Template that tracks the location of dynamic parts.
     */
    class Template {
        constructor(result, element) {
            this.parts = [];
            this.element = element;
            const nodesToRemove = [];
            const stack = [];
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
            const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
            // Keeps track of the last index associated with a part. We try to delete
            // unnecessary nodes, but we never want to associate two different parts
            // to the same index. They must have a constant node between.
            let lastPartIndex = 0;
            let index = -1;
            let partIndex = 0;
            const { strings, values: { length } } = result;
            while (partIndex < length) {
                const node = walker.nextNode();
                if (node === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    continue;
                }
                index++;
                if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                    if (node.hasAttributes()) {
                        const attributes = node.attributes;
                        const { length } = attributes;
                        // Per
                        // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                        // attributes are not guaranteed to be returned in document order.
                        // In particular, Edge/IE can return them out of order, so we cannot
                        // assume a correspondence between part index and attribute index.
                        let count = 0;
                        for (let i = 0; i < length; i++) {
                            if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                                count++;
                            }
                        }
                        while (count-- > 0) {
                            // Get the template literal section leading up to the first
                            // expression in this attribute
                            const stringForPart = strings[partIndex];
                            // Find the attribute name
                            const name = lastAttributeNameRegex.exec(stringForPart)[2];
                            // Find the corresponding attribute
                            // All bound attributes have had a suffix added in
                            // TemplateResult#getHTML to opt out of special attribute
                            // handling. To look up the attribute value we also need to add
                            // the suffix.
                            const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                            const attributeValue = node.getAttribute(attributeLookupName);
                            node.removeAttribute(attributeLookupName);
                            const statics = attributeValue.split(markerRegex);
                            this.parts.push({ type: 'attribute', index, name, strings: statics });
                            partIndex += statics.length - 1;
                        }
                    }
                    if (node.tagName === 'TEMPLATE') {
                        stack.push(node);
                        walker.currentNode = node.content;
                    }
                }
                else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                    const data = node.data;
                    if (data.indexOf(marker) >= 0) {
                        const parent = node.parentNode;
                        const strings = data.split(markerRegex);
                        const lastIndex = strings.length - 1;
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        for (let i = 0; i < lastIndex; i++) {
                            let insert;
                            let s = strings[i];
                            if (s === '') {
                                insert = createMarker();
                            }
                            else {
                                const match = lastAttributeNameRegex.exec(s);
                                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                    s = s.slice(0, match.index) + match[1] +
                                        match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                                }
                                insert = document.createTextNode(s);
                            }
                            parent.insertBefore(insert, node);
                            this.parts.push({ type: 'node', index: ++index });
                        }
                        // If there's no text, we must insert a comment to mark our place.
                        // Else, we can trust it will stick around after cloning.
                        if (strings[lastIndex] === '') {
                            parent.insertBefore(createMarker(), node);
                            nodesToRemove.push(node);
                        }
                        else {
                            node.data = strings[lastIndex];
                        }
                        // We have a part for each match found
                        partIndex += lastIndex;
                    }
                }
                else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                    if (node.data === marker) {
                        const parent = node.parentNode;
                        // Add a new marker node to be the startNode of the Part if any of
                        // the following are true:
                        //  * We don't have a previousSibling
                        //  * The previousSibling is already the start of a previous part
                        if (node.previousSibling === null || index === lastPartIndex) {
                            index++;
                            parent.insertBefore(createMarker(), node);
                        }
                        lastPartIndex = index;
                        this.parts.push({ type: 'node', index });
                        // If we don't have a nextSibling, keep this node so we have an end.
                        // Else, we can remove it to save future costs.
                        if (node.nextSibling === null) {
                            node.data = '';
                        }
                        else {
                            nodesToRemove.push(node);
                            index--;
                        }
                        partIndex++;
                    }
                    else {
                        let i = -1;
                        while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                            // Comment node has a binding marker inside, make an inactive part
                            // The binding won't work, but subsequent bindings will
                            // TODO (justinfagnani): consider whether it's even worth it to
                            // make bindings in comments work
                            this.parts.push({ type: 'node', index: -1 });
                            partIndex++;
                        }
                    }
                }
            }
            // Remove text binding nodes after the walk to not disturb the TreeWalker
            for (const n of nodesToRemove) {
                n.parentNode.removeChild(n);
            }
        }
    }
    const endsWith = (str, suffix) => {
        const index = str.length - suffix.length;
        return index >= 0 && str.slice(index) === suffix;
    };
    const isTemplatePartActive = (part) => part.index !== -1;
    // Allows `document.createComment('')` to be renamed for a
    // small manual size-savings.
    const createMarker = () => document.createComment('');
    /**
     * This regex extracts the attribute name preceding an attribute-position
     * expression. It does this by matching the syntax allowed for attributes
     * against the string literal directly preceding the expression, assuming that
     * the expression is in an attribute-value position.
     *
     * See attributes in the HTML spec:
     * https://www.w3.org/TR/html5/syntax.html#elements-attributes
     *
     * " \x09\x0a\x0c\x0d" are HTML space characters:
     * https://www.w3.org/TR/html5/infrastructure.html#space-characters
     *
     * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
     * space character except " ".
     *
     * So an attribute is:
     *  * The name: any character except a control character, space character, ('),
     *    ("), ">", "=", or "/"
     *  * Followed by zero or more space characters
     *  * Followed by "="
     *  * Followed by zero or more space characters
     *  * Followed by:
     *    * Any character except space, ('), ("), "<", ">", "=", (`), or
     *    * (") then any non-("), or
     *    * (') then any non-(')
     */
    const lastAttributeNameRegex = 
    // eslint-disable-next-line no-control-regex
    /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const directives = new WeakMap();
    const isDirective = (o) => {
        return typeof o === 'function' && directives.has(o);
    };

    /**
     * @license
     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * A sentinel value that signals that a value was handled by a directive and
     * should not be written to the DOM.
     */
    const noChange = {};
    /**
     * A sentinel value that signals a NodePart to fully clear its content.
     */
    const nothing = {};

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * An instance of a `Template` that can be attached to the DOM and updated
     * with new values.
     */
    class TemplateInstance {
        constructor(template, processor, options) {
            this.__parts = [];
            this.template = template;
            this.processor = processor;
            this.options = options;
        }
        update(values) {
            let i = 0;
            for (const part of this.__parts) {
                if (part !== undefined) {
                    part.setValue(values[i]);
                }
                i++;
            }
            for (const part of this.__parts) {
                if (part !== undefined) {
                    part.commit();
                }
            }
        }
        _clone() {
            // There are a number of steps in the lifecycle of a template instance's
            // DOM fragment:
            //  1. Clone - create the instance fragment
            //  2. Adopt - adopt into the main document
            //  3. Process - find part markers and create parts
            //  4. Upgrade - upgrade custom elements
            //  5. Update - set node, attribute, property, etc., values
            //  6. Connect - connect to the document. Optional and outside of this
            //     method.
            //
            // We have a few constraints on the ordering of these steps:
            //  * We need to upgrade before updating, so that property values will pass
            //    through any property setters.
            //  * We would like to process before upgrading so that we're sure that the
            //    cloned fragment is inert and not disturbed by self-modifying DOM.
            //  * We want custom elements to upgrade even in disconnected fragments.
            //
            // Given these constraints, with full custom elements support we would
            // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
            //
            // But Safari does not implement CustomElementRegistry#upgrade, so we
            // can not implement that order and still have upgrade-before-update and
            // upgrade disconnected fragments. So we instead sacrifice the
            // process-before-upgrade constraint, since in Custom Elements v1 elements
            // must not modify their light DOM in the constructor. We still have issues
            // when co-existing with CEv0 elements like Polymer 1, and with polyfills
            // that don't strictly adhere to the no-modification rule because shadow
            // DOM, which may be created in the constructor, is emulated by being placed
            // in the light DOM.
            //
            // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
            // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
            // in one step.
            //
            // The Custom Elements v1 polyfill supports upgrade(), so the order when
            // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
            // Connect.
            const fragment = isCEPolyfill ?
                this.template.element.content.cloneNode(true) :
                document.importNode(this.template.element.content, true);
            const stack = [];
            const parts = this.template.parts;
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
            const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
            let partIndex = 0;
            let nodeIndex = 0;
            let part;
            let node = walker.nextNode();
            // Loop through all the nodes and parts of a template
            while (partIndex < parts.length) {
                part = parts[partIndex];
                if (!isTemplatePartActive(part)) {
                    this.__parts.push(undefined);
                    partIndex++;
                    continue;
                }
                // Progress the tree walker until we find our next part's node.
                // Note that multiple parts may share the same node (attribute parts
                // on a single element), so this loop may not run at all.
                while (nodeIndex < part.index) {
                    nodeIndex++;
                    if (node.nodeName === 'TEMPLATE') {
                        stack.push(node);
                        walker.currentNode = node.content;
                    }
                    if ((node = walker.nextNode()) === null) {
                        // We've exhausted the content inside a nested template element.
                        // Because we still have parts (the outer for-loop), we know:
                        // - There is a template in the stack
                        // - The walker will find a nextNode outside the template
                        walker.currentNode = stack.pop();
                        node = walker.nextNode();
                    }
                }
                // We've arrived at our part's node.
                if (part.type === 'node') {
                    const part = this.processor.handleTextExpression(this.options);
                    part.insertAfterNode(node.previousSibling);
                    this.__parts.push(part);
                }
                else {
                    this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
                }
                partIndex++;
            }
            if (isCEPolyfill) {
                document.adoptNode(fragment);
                customElements.upgrade(fragment);
            }
            return fragment;
        }
    }

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * Our TrustedTypePolicy for HTML which is declared using the html template
     * tag function.
     *
     * That HTML is a developer-authored constant, and is parsed with innerHTML
     * before any untrusted expressions have been mixed in. Therefor it is
     * considered safe by construction.
     */
    const policy = window.trustedTypes &&
        trustedTypes.createPolicy('lit-html', { createHTML: (s) => s });
    const commentMarker = ` ${marker} `;
    /**
     * The return type of `html`, which holds a Template and the values from
     * interpolated expressions.
     */
    class TemplateResult {
        constructor(strings, values, type, processor) {
            this.strings = strings;
            this.values = values;
            this.type = type;
            this.processor = processor;
        }
        /**
         * Returns a string of HTML used to create a `<template>` element.
         */
        getHTML() {
            const l = this.strings.length - 1;
            let html = '';
            let isCommentBinding = false;
            for (let i = 0; i < l; i++) {
                const s = this.strings[i];
                // For each binding we want to determine the kind of marker to insert
                // into the template source before it's parsed by the browser's HTML
                // parser. The marker type is based on whether the expression is in an
                // attribute, text, or comment position.
                //   * For node-position bindings we insert a comment with the marker
                //     sentinel as its text content, like <!--{{lit-guid}}-->.
                //   * For attribute bindings we insert just the marker sentinel for the
                //     first binding, so that we support unquoted attribute bindings.
                //     Subsequent bindings can use a comment marker because multi-binding
                //     attributes must be quoted.
                //   * For comment bindings we insert just the marker sentinel so we don't
                //     close the comment.
                //
                // The following code scans the template source, but is *not* an HTML
                // parser. We don't need to track the tree structure of the HTML, only
                // whether a binding is inside a comment, and if not, if it appears to be
                // the first binding in an attribute.
                const commentOpen = s.lastIndexOf('<!--');
                // We're in comment position if we have a comment open with no following
                // comment close. Because <-- can appear in an attribute value there can
                // be false positives.
                isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                    s.indexOf('-->', commentOpen + 1) === -1;
                // Check to see if we have an attribute-like sequence preceding the
                // expression. This can match "name=value" like structures in text,
                // comments, and attribute values, so there can be false-positives.
                const attributeMatch = lastAttributeNameRegex.exec(s);
                if (attributeMatch === null) {
                    // We're only in this branch if we don't have a attribute-like
                    // preceding sequence. For comments, this guards against unusual
                    // attribute values like <div foo="<!--${'bar'}">. Cases like
                    // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                    // below.
                    html += s + (isCommentBinding ? commentMarker : nodeMarker);
                }
                else {
                    // For attributes we use just a marker sentinel, and also append a
                    // $lit$ suffix to the name to opt-out of attribute-specific parsing
                    // that IE and Edge do for style and certain SVG attributes.
                    html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                        attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] +
                        marker;
                }
            }
            html += this.strings[l];
            return html;
        }
        getTemplateElement() {
            const template = document.createElement('template');
            let value = this.getHTML();
            if (policy !== undefined) {
                // this is secure because `this.strings` is a TemplateStringsArray.
                // TODO: validate this when
                // https://github.com/tc39/proposal-array-is-template-object is
                // implemented.
                value = policy.createHTML(value);
            }
            template.innerHTML = value;
            return template;
        }
    }

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const isPrimitive = (value) => {
        return (value === null ||
            !(typeof value === 'object' || typeof value === 'function'));
    };
    const isIterable = (value) => {
        return Array.isArray(value) ||
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            !!(value && value[Symbol.iterator]);
    };
    /**
     * Writes attribute values to the DOM for a group of AttributeParts bound to a
     * single attribute. The value is only set once even if there are multiple parts
     * for an attribute.
     */
    class AttributeCommitter {
        constructor(element, name, strings) {
            this.dirty = true;
            this.element = element;
            this.name = name;
            this.strings = strings;
            this.parts = [];
            for (let i = 0; i < strings.length - 1; i++) {
                this.parts[i] = this._createPart();
            }
        }
        /**
         * Creates a single part. Override this to create a differnt type of part.
         */
        _createPart() {
            return new AttributePart(this);
        }
        _getValue() {
            const strings = this.strings;
            const l = strings.length - 1;
            const parts = this.parts;
            // If we're assigning an attribute via syntax like:
            //    attr="${foo}"  or  attr=${foo}
            // but not
            //    attr="${foo} ${bar}" or attr="${foo} baz"
            // then we don't want to coerce the attribute value into one long
            // string. Instead we want to just return the value itself directly,
            // so that sanitizeDOMValue can get the actual value rather than
            // String(value)
            // The exception is if v is an array, in which case we do want to smash
            // it together into a string without calling String() on the array.
            //
            // This also allows trusted values (when using TrustedTypes) being
            // assigned to DOM sinks without being stringified in the process.
            if (l === 1 && strings[0] === '' && strings[1] === '') {
                const v = parts[0].value;
                if (typeof v === 'symbol') {
                    return String(v);
                }
                if (typeof v === 'string' || !isIterable(v)) {
                    return v;
                }
            }
            let text = '';
            for (let i = 0; i < l; i++) {
                text += strings[i];
                const part = parts[i];
                if (part !== undefined) {
                    const v = part.value;
                    if (isPrimitive(v) || !isIterable(v)) {
                        text += typeof v === 'string' ? v : String(v);
                    }
                    else {
                        for (const t of v) {
                            text += typeof t === 'string' ? t : String(t);
                        }
                    }
                }
            }
            text += strings[l];
            return text;
        }
        commit() {
            if (this.dirty) {
                this.dirty = false;
                this.element.setAttribute(this.name, this._getValue());
            }
        }
    }
    /**
     * A Part that controls all or part of an attribute value.
     */
    class AttributePart {
        constructor(committer) {
            this.value = undefined;
            this.committer = committer;
        }
        setValue(value) {
            if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
                this.value = value;
                // If the value is a not a directive, dirty the committer so that it'll
                // call setAttribute. If the value is a directive, it'll dirty the
                // committer if it calls setValue().
                if (!isDirective(value)) {
                    this.committer.dirty = true;
                }
            }
        }
        commit() {
            while (isDirective(this.value)) {
                const directive = this.value;
                this.value = noChange;
                directive(this);
            }
            if (this.value === noChange) {
                return;
            }
            this.committer.commit();
        }
    }
    /**
     * A Part that controls a location within a Node tree. Like a Range, NodePart
     * has start and end locations and can set and update the Nodes between those
     * locations.
     *
     * NodeParts support several value types: primitives, Nodes, TemplateResults,
     * as well as arrays and iterables of those types.
     */
    class NodePart {
        constructor(options) {
            this.value = undefined;
            this.__pendingValue = undefined;
            this.options = options;
        }
        /**
         * Appends this part into a container.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        appendInto(container) {
            this.startNode = container.appendChild(createMarker());
            this.endNode = container.appendChild(createMarker());
        }
        /**
         * Inserts this part after the `ref` node (between `ref` and `ref`'s next
         * sibling). Both `ref` and its next sibling must be static, unchanging nodes
         * such as those that appear in a literal section of a template.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        insertAfterNode(ref) {
            this.startNode = ref;
            this.endNode = ref.nextSibling;
        }
        /**
         * Appends this part into a parent part.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        appendIntoPart(part) {
            part.__insert(this.startNode = createMarker());
            part.__insert(this.endNode = createMarker());
        }
        /**
         * Inserts this part after the `ref` part.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        insertAfterPart(ref) {
            ref.__insert(this.startNode = createMarker());
            this.endNode = ref.endNode;
            ref.endNode = this.startNode;
        }
        setValue(value) {
            this.__pendingValue = value;
        }
        commit() {
            if (this.startNode.parentNode === null) {
                return;
            }
            while (isDirective(this.__pendingValue)) {
                const directive = this.__pendingValue;
                this.__pendingValue = noChange;
                directive(this);
            }
            const value = this.__pendingValue;
            if (value === noChange) {
                return;
            }
            if (isPrimitive(value)) {
                if (value !== this.value) {
                    this.__commitText(value);
                }
            }
            else if (value instanceof TemplateResult) {
                this.__commitTemplateResult(value);
            }
            else if (value instanceof Node) {
                this.__commitNode(value);
            }
            else if (isIterable(value)) {
                this.__commitIterable(value);
            }
            else if (value === nothing) {
                this.value = nothing;
                this.clear();
            }
            else {
                // Fallback, will render the string representation
                this.__commitText(value);
            }
        }
        __insert(node) {
            this.endNode.parentNode.insertBefore(node, this.endNode);
        }
        __commitNode(value) {
            if (this.value === value) {
                return;
            }
            this.clear();
            this.__insert(value);
            this.value = value;
        }
        __commitText(value) {
            const node = this.startNode.nextSibling;
            value = value == null ? '' : value;
            // If `value` isn't already a string, we explicitly convert it here in case
            // it can't be implicitly converted - i.e. it's a symbol.
            const valueAsString = typeof value === 'string' ? value : String(value);
            if (node === this.endNode.previousSibling &&
                node.nodeType === 3 /* Node.TEXT_NODE */) {
                // If we only have a single text node between the markers, we can just
                // set its value, rather than replacing it.
                // TODO(justinfagnani): Can we just check if this.value is primitive?
                node.data = valueAsString;
            }
            else {
                this.__commitNode(document.createTextNode(valueAsString));
            }
            this.value = value;
        }
        __commitTemplateResult(value) {
            const template = this.options.templateFactory(value);
            if (this.value instanceof TemplateInstance &&
                this.value.template === template) {
                this.value.update(value.values);
            }
            else {
                // Make sure we propagate the template processor from the TemplateResult
                // so that we use its syntax extension, etc. The template factory comes
                // from the render function options so that it can control template
                // caching and preprocessing.
                const instance = new TemplateInstance(template, value.processor, this.options);
                const fragment = instance._clone();
                instance.update(value.values);
                this.__commitNode(fragment);
                this.value = instance;
            }
        }
        __commitIterable(value) {
            // For an Iterable, we create a new InstancePart per item, then set its
            // value to the item. This is a little bit of overhead for every item in
            // an Iterable, but it lets us recurse easily and efficiently update Arrays
            // of TemplateResults that will be commonly returned from expressions like:
            // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
            // If _value is an array, then the previous render was of an
            // iterable and _value will contain the NodeParts from the previous
            // render. If _value is not an array, clear this part and make a new
            // array for NodeParts.
            if (!Array.isArray(this.value)) {
                this.value = [];
                this.clear();
            }
            // Lets us keep track of how many items we stamped so we can clear leftover
            // items from a previous render
            const itemParts = this.value;
            let partIndex = 0;
            let itemPart;
            for (const item of value) {
                // Try to reuse an existing part
                itemPart = itemParts[partIndex];
                // If no existing part, create a new one
                if (itemPart === undefined) {
                    itemPart = new NodePart(this.options);
                    itemParts.push(itemPart);
                    if (partIndex === 0) {
                        itemPart.appendIntoPart(this);
                    }
                    else {
                        itemPart.insertAfterPart(itemParts[partIndex - 1]);
                    }
                }
                itemPart.setValue(item);
                itemPart.commit();
                partIndex++;
            }
            if (partIndex < itemParts.length) {
                // Truncate the parts array so _value reflects the current state
                itemParts.length = partIndex;
                this.clear(itemPart && itemPart.endNode);
            }
        }
        clear(startNode = this.startNode) {
            removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
        }
    }
    /**
     * Implements a boolean attribute, roughly as defined in the HTML
     * specification.
     *
     * If the value is truthy, then the attribute is present with a value of
     * ''. If the value is falsey, the attribute is removed.
     */
    class BooleanAttributePart {
        constructor(element, name, strings) {
            this.value = undefined;
            this.__pendingValue = undefined;
            if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
                throw new Error('Boolean attributes can only contain a single expression');
            }
            this.element = element;
            this.name = name;
            this.strings = strings;
        }
        setValue(value) {
            this.__pendingValue = value;
        }
        commit() {
            while (isDirective(this.__pendingValue)) {
                const directive = this.__pendingValue;
                this.__pendingValue = noChange;
                directive(this);
            }
            if (this.__pendingValue === noChange) {
                return;
            }
            const value = !!this.__pendingValue;
            if (this.value !== value) {
                if (value) {
                    this.element.setAttribute(this.name, '');
                }
                else {
                    this.element.removeAttribute(this.name);
                }
                this.value = value;
            }
            this.__pendingValue = noChange;
        }
    }
    /**
     * Sets attribute values for PropertyParts, so that the value is only set once
     * even if there are multiple parts for a property.
     *
     * If an expression controls the whole property value, then the value is simply
     * assigned to the property under control. If there are string literals or
     * multiple expressions, then the strings are expressions are interpolated into
     * a string first.
     */
    class PropertyCommitter extends AttributeCommitter {
        constructor(element, name, strings) {
            super(element, name, strings);
            this.single =
                (strings.length === 2 && strings[0] === '' && strings[1] === '');
        }
        _createPart() {
            return new PropertyPart(this);
        }
        _getValue() {
            if (this.single) {
                return this.parts[0].value;
            }
            return super._getValue();
        }
        commit() {
            if (this.dirty) {
                this.dirty = false;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.element[this.name] = this._getValue();
            }
        }
    }
    class PropertyPart extends AttributePart {
    }
    // Detect event listener options support. If the `capture` property is read
    // from the options object, then options are supported. If not, then the third
    // argument to add/removeEventListener is interpreted as the boolean capture
    // value so we should only pass the `capture` property.
    let eventOptionsSupported = false;
    // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
    // blocks right into the body of a module
    (() => {
        try {
            const options = {
                get capture() {
                    eventOptionsSupported = true;
                    return false;
                }
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            window.addEventListener('test', options, options);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            window.removeEventListener('test', options, options);
        }
        catch (_e) {
            // event options not supported
        }
    })();
    class EventPart {
        constructor(element, eventName, eventContext) {
            this.value = undefined;
            this.__pendingValue = undefined;
            this.element = element;
            this.eventName = eventName;
            this.eventContext = eventContext;
            this.__boundHandleEvent = (e) => this.handleEvent(e);
        }
        setValue(value) {
            this.__pendingValue = value;
        }
        commit() {
            while (isDirective(this.__pendingValue)) {
                const directive = this.__pendingValue;
                this.__pendingValue = noChange;
                directive(this);
            }
            if (this.__pendingValue === noChange) {
                return;
            }
            const newListener = this.__pendingValue;
            const oldListener = this.value;
            const shouldRemoveListener = newListener == null ||
                oldListener != null &&
                    (newListener.capture !== oldListener.capture ||
                        newListener.once !== oldListener.once ||
                        newListener.passive !== oldListener.passive);
            const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
            if (shouldRemoveListener) {
                this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
            }
            if (shouldAddListener) {
                this.__options = getOptions(newListener);
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
            }
            this.value = newListener;
            this.__pendingValue = noChange;
        }
        handleEvent(event) {
            if (typeof this.value === 'function') {
                this.value.call(this.eventContext || this.element, event);
            }
            else {
                this.value.handleEvent(event);
            }
        }
    }
    // We copy options because of the inconsistent behavior of browsers when reading
    // the third argument of add/removeEventListener. IE11 doesn't support options
    // at all. Chrome 41 only reads `capture` if the argument is an object.
    const getOptions = (o) => o &&
        (eventOptionsSupported ?
            { capture: o.capture, passive: o.passive, once: o.once } :
            o.capture);

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * The default TemplateFactory which caches Templates keyed on
     * result.type and result.strings.
     */
    function templateFactory(result) {
        let templateCache = templateCaches.get(result.type);
        if (templateCache === undefined) {
            templateCache = {
                stringsArray: new WeakMap(),
                keyString: new Map()
            };
            templateCaches.set(result.type, templateCache);
        }
        let template = templateCache.stringsArray.get(result.strings);
        if (template !== undefined) {
            return template;
        }
        // If the TemplateStringsArray is new, generate a key from the strings
        // This key is shared between all templates with identical content
        const key = result.strings.join(marker);
        // Check if we already have a Template for this key
        template = templateCache.keyString.get(key);
        if (template === undefined) {
            // If we have not seen this key before, create a new Template
            template = new Template(result, result.getTemplateElement());
            // Cache the Template for this key
            templateCache.keyString.set(key, template);
        }
        // Cache all future queries for this TemplateStringsArray
        templateCache.stringsArray.set(result.strings, template);
        return template;
    }
    const templateCaches = new Map();

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const parts = new WeakMap();
    /**
     * Renders a template result or other value to a container.
     *
     * To update a container with new values, reevaluate the template literal and
     * call `render` with the new result.
     *
     * @param result Any value renderable by NodePart - typically a TemplateResult
     *     created by evaluating a template tag like `html` or `svg`.
     * @param container A DOM parent to render to. The entire contents are either
     *     replaced, or efficiently updated if the same result type was previous
     *     rendered there.
     * @param options RenderOptions for the entire render tree rendered to this
     *     container. Render options must *not* change between renders to the same
     *     container, as those changes will not effect previously rendered DOM.
     */
    const render = (result, container, options) => {
        let part = parts.get(container);
        if (part === undefined) {
            removeNodes(container, container.firstChild);
            parts.set(container, part = new NodePart(Object.assign({ templateFactory }, options)));
            part.appendInto(container);
        }
        part.setValue(result);
        part.commit();
    };

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * Creates Parts when a template is instantiated.
     */
    class DefaultTemplateProcessor {
        /**
         * Create parts for an attribute-position binding, given the event, attribute
         * name, and string literals.
         *
         * @param element The element containing the binding
         * @param name  The attribute name
         * @param strings The string literals. There are always at least two strings,
         *   event for fully-controlled bindings with a single expression.
         */
        handleAttributeExpressions(element, name, strings, options) {
            const prefix = name[0];
            if (prefix === '.') {
                const committer = new PropertyCommitter(element, name.slice(1), strings);
                return committer.parts;
            }
            if (prefix === '@') {
                return [new EventPart(element, name.slice(1), options.eventContext)];
            }
            if (prefix === '?') {
                return [new BooleanAttributePart(element, name.slice(1), strings)];
            }
            const committer = new AttributeCommitter(element, name, strings);
            return committer.parts;
        }
        /**
         * Create parts for a text-position binding.
         * @param templateFactory
         */
        handleTextExpression(options) {
            return new NodePart(options);
        }
    }
    const defaultTemplateProcessor = new DefaultTemplateProcessor();

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    // IMPORTANT: do not change the property name or the assignment expression.
    // This line will be used in regexes to search for lit-html usage.
    // TODO(justinfagnani): inject version number at build time
    if (typeof window !== 'undefined') {
        (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.3.0');
    }
    /**
     * Interprets a template literal as an HTML template that can efficiently
     * render to and update a container.
     */
    const html = (strings, ...values) => new TemplateResult(strings, values, 'html', defaultTemplateProcessor);

    function createCommonjsModule(fn, basedir, module) {
    	return module = {
    		path: basedir,
    		exports: {},
    		require: function (path, base) {
    			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    		}
    	}, fn(module, module.exports), module.exports;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    var webfontloader = createCommonjsModule(function (module) {
    /* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return +new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document;}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild);}function v(a){a.parentNode&&a.parentNode.removeChild(a);}
    function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e]);}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e]);}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"");}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return !0;return !1}
    function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null);}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d();},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d();}):setTimeout(function(){e=!0;d();},0);u(a,"head",b);}
    function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f));};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")));},d||5E3);return f}return null}function B(){this.a=0;this.c=null;}function C(a){a.a++;return function(){a.a--;D(a);}}function E(a,b){a.c=b;D(a);}function D(a){0==a.a&&a.c&&(a.c(),a.c=null);}function F(a){this.a=a||"-";}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10));}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d);}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
    function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b}function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes;}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading");}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d);}K(a,"inactive");}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]();}function ja(){this.c={};}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c));}return d}function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f);}function N(a){u(a.c,"body",a.a);}function O(a){return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")}function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0;}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25);},function(){e();});}f();}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f);});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a);},function(){b.j(b.a);});};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
    O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m);}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10));}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this);};
    function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return !0;return !1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v);}function ma(a){setTimeout(p(function(){U(this);},a),50);}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a);},a),0);}function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c;}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this);};
    W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e);}K(b,"fontinactive",a);na(this);};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a));}function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0;}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a);};
    function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else {b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
    X=x?42<parseInt(x[1],10):xa?!1:!0;}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r);}for(h=0;h<l.length;h++)l[h].start();}},0);}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c);});}function ra(a,b){this.c=a;this.a=b;}
    ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k));}a(e);}else setTimeout(function(){b();},50);}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
    d]=function(){return c.a},b());}).id="__MonotypeAPIScript__"+d;}else a([]);};function sa(a,b){this.c=a;this.a=b;}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f);});};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||"";}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f));}}
    function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b}function ya(a){this.f=a;this.a=[];this.c={};}
    var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
    Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else {k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("");}}else k="";k&&g.push(k);}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
    g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d));}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]));}}function Ea(a,b){this.c=a;this.a=b;}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa);});};function Ga(a,b){this.c=a;this.a=b;}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0});}catch(l){}a(e);}},2E3):a([]);};function Ha(a,b){this.c=a;this.f=b;this.a=[];}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)));}a(d.a);},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([]);})):a([]);};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());
    });

    function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_nonIterableRest()}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_nonIterableSpread()}function _arrayWithoutHoles(r){if(Array.isArray(r)){for(var e=0,t=new Array(r.length);e<r.length;e++)t[e]=r[e];return t}}function _arrayWithHoles(r){if(Array.isArray(r))return r}function _iterableToArray(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}function _iterableToArrayLimit(r,e){var t=[],n=!0,a=!1,i=void 0;try{for(var o,l=r[Symbol.iterator]();!(n=(o=l.next()).done)&&(t.push(o.value),!e||t.length!==e);n=!0);}catch(r){a=!0,i=r;}finally{try{n||null==l.return||l.return();}finally{if(a)throw i}}return t}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function Scramble(r,e){return new Promise(function(t,n){if(void 0===r&&n("Target element is undefined"),"true"!==r.getAttribute("data-scramble-active")){e.beforeEach&&e.beforeEach(r),r.setAttribute("data-scramble-active","true"),r.classList.add("scrambling");var a,i=r.innerHTML,o=[],l=e.speed?e.speed:100,c=r.textContent.split(""),u=c,f=r.textContent.split(""),s=!1;isValidString(e.text)?a=defineEndText(e.text):r.getAttribute("data-scramble-text")&&""!==r.getAttribute("data-scramble-text")&&(a=defineEndText(r.getAttribute("data-scramble-text"))),a&&(s=!0,c=a.truth,f=a.newLetters,u=a.startText);var d=function(){if(u.map(function(e,t){return !(" \t\n\r\v".indexOf(e)>-1)&&(f[t]=randomChar(),!0===o[t]&&(f[t]=c[t]),r.textContent=f.join(""),!0)}),killCheck(f,c)){if(r.innerHTML=i,s){var n=r.children[0];n&&""!==n?n.textContent=f.join(""):r.textContent=f.join("");}clearInterval(b),r.setAttribute("data-scramble-active","false"),r.classList.remove("scrambling"),e.afterEach&&e.afterEach(r),t(r);}};!function(r){if(r&&isArray(r))for(var t=0;t<=r.length;t++)!function(r){setTimeout(function(){o[r]=!0;},randomTime(isObject(e),e.random,e.speed));}(t);}(u),d();var b=setInterval(function(){d();},l);}else n("Animation already triggered");})}function ScramblerSetup(r){if(!isValidArgType(r))return !1;var e=setArgs(r,isObject(r)),t=_toConsumableArray(isObject(e)?document.querySelectorAll(e.target):document.querySelectorAll(e)),n=[];if(t.forEach(function(r){var t=Scramble(r,e);n.push(t);}),!(n.length>0))return !1;e.beforeAll&&e.beforeAll(t),Promise.all(n).then(function(r){e.afterAll&&e.afterAll(r);}).catch(function(r){e.errorHandler&&e.errorHandler(r);});}var isObject=function(r){return !!r&&r.constructor===Object},isArray=function(r){return !!r&&r.constructor===Array},isBool=function(r){return "boolean"==typeof r},isFunction=function(r){return "function"==typeof r},isInteger=function(r){return Number.isInteger(r)},isValidString=function(r){return !(!r||""===r||!("string"==typeof r||r instanceof String))},isValidArgType=function(r){return !isArray(r)&&!isBool(r)&&"number"!=typeof r&&"function"!=typeof r&&void 0!==r},randomChar=function(r,e){var t=r||1,n=e||!1,a=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,t);return " \t\n\r\v".indexOf(a)<0&&!0!==n&&a},randomTime=function(r,e,t){var n=r||!1,a=t||100;if(n&&isArray(e)&&e.length>1){var i=_slicedToArray(e,2),o=i[0],l=i[1];if((t>=l||a>=l)&&(a=l-1),l-=a,o>l&&(o=l),isInteger(o)&&isInteger(l))return Math.floor(Math.random()*(l-o))+o}return Math.floor(1999*Math.random())+1e3},setArgs=function(r,e){var t=e||!1,n={target:"[data-scrambler]",random:[1e3,3e3],speed:100,text:!1,beforeEach:!1,afterEach:!1,beforeAll:!1,afterAll:!1,errorHandler:!1};return r&&t&&(n.target=void 0!==r.target?r.target:"[data-scrambler]",n.random=void 0!==r.random?r.random:[1e3,3e3],n.speed=void 0!==r.speed?r.speed:100,n.text=void 0!==r.text&&r.text,n.beforeEach=!(void 0===r.beforeEach||!isFunction(r.beforeEach))&&r.beforeEach,n.afterEach=!(void 0===r.afterEach||!isFunction(r.afterEach))&&r.afterEach,n.beforeAll=!(void 0===r.beforeAll||!isFunction(r.beforeAll))&&r.beforeAll,n.afterAll=!(void 0===r.afterAll||!isFunction(r.afterAll))&&r.afterAll,n.errorHandler=!(void 0===r.errorHandler||!isFunction(r.errorHandler))&&r.errorHandler),n},killCheck=function(r,e){return !(r.length!==e.length||!r.every(function(r,t){return r===e[t]}))},defineEndText=function(r){if(!r||void 0===r||!("string"==typeof r||r instanceof String))return !1;var e,t=r,n=t.split(""),a=t.split(""),i=[];return n.forEach(function(r,e){" \t\n\r\v".indexOf(n[e])>-1?i.push(" "):i.push(randomChar());}),e=i,{truth:n,newLetters:a,startText:e}},scrambler=function(){return ScramblerSetup}();

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
    /**
     * Removes the list of nodes from a Template safely. In addition to removing
     * nodes from the Template, the Template part indices are updated to match
     * the mutated Template DOM.
     *
     * As the template is walked the removal state is tracked and
     * part indices are adjusted as needed.
     *
     * div
     *   div#1 (remove) <-- start removing (removing node is div#1)
     *     div
     *       div#2 (remove)  <-- continue removing (removing node is still div#1)
     *         div
     * div <-- stop removing since previous sibling is the removing node (div#1,
     * removed 4 nodes)
     */
    function removeNodesFromTemplate(template, nodesToRemove) {
        const { element: { content }, parts } = template;
        const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
        let partIndex = nextActiveIndexInTemplateParts(parts);
        let part = parts[partIndex];
        let nodeIndex = -1;
        let removeCount = 0;
        const nodesToRemoveInTemplate = [];
        let currentRemovingNode = null;
        while (walker.nextNode()) {
            nodeIndex++;
            const node = walker.currentNode;
            // End removal if stepped past the removing node
            if (node.previousSibling === currentRemovingNode) {
                currentRemovingNode = null;
            }
            // A node to remove was found in the template
            if (nodesToRemove.has(node)) {
                nodesToRemoveInTemplate.push(node);
                // Track node we're removing
                if (currentRemovingNode === null) {
                    currentRemovingNode = node;
                }
            }
            // When removing, increment count by which to adjust subsequent part indices
            if (currentRemovingNode !== null) {
                removeCount++;
            }
            while (part !== undefined && part.index === nodeIndex) {
                // If part is in a removed node deactivate it by setting index to -1 or
                // adjust the index as needed.
                part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
                // go to the next active part.
                partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                part = parts[partIndex];
            }
        }
        nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
    }
    const countNodes = (node) => {
        let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
        const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
        while (walker.nextNode()) {
            count++;
        }
        return count;
    };
    const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
        for (let i = startIndex + 1; i < parts.length; i++) {
            const part = parts[i];
            if (isTemplatePartActive(part)) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Inserts the given node into the Template, optionally before the given
     * refNode. In addition to inserting the node into the Template, the Template
     * part indices are updated to match the mutated Template DOM.
     */
    function insertNodeIntoTemplate(template, node, refNode = null) {
        const { element: { content }, parts } = template;
        // If there's no refNode, then put node at end of template.
        // No part indices need to be shifted in this case.
        if (refNode === null || refNode === undefined) {
            content.appendChild(node);
            return;
        }
        const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
        let partIndex = nextActiveIndexInTemplateParts(parts);
        let insertCount = 0;
        let walkerIndex = -1;
        while (walker.nextNode()) {
            walkerIndex++;
            const walkerNode = walker.currentNode;
            if (walkerNode === refNode) {
                insertCount = countNodes(node);
                refNode.parentNode.insertBefore(node, refNode);
            }
            while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
                // If we've inserted the node, simply adjust all subsequent parts
                if (insertCount > 0) {
                    while (partIndex !== -1) {
                        parts[partIndex].index += insertCount;
                        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                    }
                    return;
                }
                partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            }
        }
    }

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    // Get a key to lookup in `templateCaches`.
    const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
    let compatibleShadyCSSVersion = true;
    if (typeof window.ShadyCSS === 'undefined') {
        compatibleShadyCSSVersion = false;
    }
    else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
        console.warn(`Incompatible ShadyCSS version detected. ` +
            `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
            `@webcomponents/shadycss@1.3.1.`);
        compatibleShadyCSSVersion = false;
    }
    /**
     * Template factory which scopes template DOM using ShadyCSS.
     * @param scopeName {string}
     */
    const shadyTemplateFactory = (scopeName) => (result) => {
        const cacheKey = getTemplateCacheKey(result.type, scopeName);
        let templateCache = templateCaches.get(cacheKey);
        if (templateCache === undefined) {
            templateCache = {
                stringsArray: new WeakMap(),
                keyString: new Map()
            };
            templateCaches.set(cacheKey, templateCache);
        }
        let template = templateCache.stringsArray.get(result.strings);
        if (template !== undefined) {
            return template;
        }
        const key = result.strings.join(marker);
        template = templateCache.keyString.get(key);
        if (template === undefined) {
            const element = result.getTemplateElement();
            if (compatibleShadyCSSVersion) {
                window.ShadyCSS.prepareTemplateDom(element, scopeName);
            }
            template = new Template(result, element);
            templateCache.keyString.set(key, template);
        }
        templateCache.stringsArray.set(result.strings, template);
        return template;
    };
    const TEMPLATE_TYPES = ['html', 'svg'];
    /**
     * Removes all style elements from Templates for the given scopeName.
     */
    const removeStylesFromLitTemplates = (scopeName) => {
        TEMPLATE_TYPES.forEach((type) => {
            const templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
            if (templates !== undefined) {
                templates.keyString.forEach((template) => {
                    const { element: { content } } = template;
                    // IE 11 doesn't support the iterable param Set constructor
                    const styles = new Set();
                    Array.from(content.querySelectorAll('style')).forEach((s) => {
                        styles.add(s);
                    });
                    removeNodesFromTemplate(template, styles);
                });
            }
        });
    };
    const shadyRenderSet = new Set();
    /**
     * For the given scope name, ensures that ShadyCSS style scoping is performed.
     * This is done just once per scope name so the fragment and template cannot
     * be modified.
     * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
     * to be scoped and appended to the document
     * (2) removes style elements from all lit-html Templates for this scope name.
     *
     * Note, <style> elements can only be placed into templates for the
     * initial rendering of the scope. If <style> elements are included in templates
     * dynamically rendered to the scope (after the first scope render), they will
     * not be scoped and the <style> will be left in the template and rendered
     * output.
     */
    const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
        shadyRenderSet.add(scopeName);
        // If `renderedDOM` is stamped from a Template, then we need to edit that
        // Template's underlying template element. Otherwise, we create one here
        // to give to ShadyCSS, which still requires one while scoping.
        const templateElement = !!template ? template.element : document.createElement('template');
        // Move styles out of rendered DOM and store.
        const styles = renderedDOM.querySelectorAll('style');
        const { length } = styles;
        // If there are no styles, skip unnecessary work
        if (length === 0) {
            // Ensure prepareTemplateStyles is called to support adding
            // styles via `prepareAdoptedCssText` since that requires that
            // `prepareTemplateStyles` is called.
            //
            // ShadyCSS will only update styles containing @apply in the template
            // given to `prepareTemplateStyles`. If no lit Template was given,
            // ShadyCSS will not be able to update uses of @apply in any relevant
            // template. However, this is not a problem because we only create the
            // template for the purpose of supporting `prepareAdoptedCssText`,
            // which doesn't support @apply at all.
            window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
            return;
        }
        const condensedStyle = document.createElement('style');
        // Collect styles into a single style. This helps us make sure ShadyCSS
        // manipulations will not prevent us from being able to fix up template
        // part indices.
        // NOTE: collecting styles is inefficient for browsers but ShadyCSS
        // currently does this anyway. When it does not, this should be changed.
        for (let i = 0; i < length; i++) {
            const style = styles[i];
            style.parentNode.removeChild(style);
            condensedStyle.textContent += style.textContent;
        }
        // Remove styles from nested templates in this scope.
        removeStylesFromLitTemplates(scopeName);
        // And then put the condensed style into the "root" template passed in as
        // `template`.
        const content = templateElement.content;
        if (!!template) {
            insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
        }
        else {
            content.insertBefore(condensedStyle, content.firstChild);
        }
        // Note, it's important that ShadyCSS gets the template that `lit-html`
        // will actually render so that it can update the style inside when
        // needed (e.g. @apply native Shadow DOM case).
        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        const style = content.querySelector('style');
        if (window.ShadyCSS.nativeShadow && style !== null) {
            // When in native Shadow DOM, ensure the style created by ShadyCSS is
            // included in initially rendered output (`renderedDOM`).
            renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
        }
        else if (!!template) {
            // When no style is left in the template, parts will be broken as a
            // result. To fix this, we put back the style node ShadyCSS removed
            // and then tell lit to remove that node from the template.
            // There can be no style in the template in 2 cases (1) when Shady DOM
            // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
            // is in use ShadyCSS removes the style if it contains no content.
            // NOTE, ShadyCSS creates its own style so we can safely add/remove
            // `condensedStyle` here.
            content.insertBefore(condensedStyle, content.firstChild);
            const removes = new Set();
            removes.add(condensedStyle);
            removeNodesFromTemplate(template, removes);
        }
    };
    /**
     * Extension to the standard `render` method which supports rendering
     * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
     * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
     * or when the webcomponentsjs
     * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
     *
     * Adds a `scopeName` option which is used to scope element DOM and stylesheets
     * when native ShadowDOM is unavailable. The `scopeName` will be added to
     * the class attribute of all rendered DOM. In addition, any style elements will
     * be automatically re-written with this `scopeName` selector and moved out
     * of the rendered DOM and into the document `<head>`.
     *
     * It is common to use this render method in conjunction with a custom element
     * which renders a shadowRoot. When this is done, typically the element's
     * `localName` should be used as the `scopeName`.
     *
     * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
     * custom properties (needed only on older browsers like IE11) and a shim for
     * a deprecated feature called `@apply` that supports applying a set of css
     * custom properties to a given location.
     *
     * Usage considerations:
     *
     * * Part values in `<style>` elements are only applied the first time a given
     * `scopeName` renders. Subsequent changes to parts in style elements will have
     * no effect. Because of this, parts in style elements should only be used for
     * values that will never change, for example parts that set scope-wide theme
     * values or parts which render shared style elements.
     *
     * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
     * custom element's `constructor` is not supported. Instead rendering should
     * either done asynchronously, for example at microtask timing (for example
     * `Promise.resolve()`), or be deferred until the first time the element's
     * `connectedCallback` runs.
     *
     * Usage considerations when using shimmed custom properties or `@apply`:
     *
     * * Whenever any dynamic changes are made which affect
     * css custom properties, `ShadyCSS.styleElement(element)` must be called
     * to update the element. There are two cases when this is needed:
     * (1) the element is connected to a new parent, (2) a class is added to the
     * element that causes it to match different custom properties.
     * To address the first case when rendering a custom element, `styleElement`
     * should be called in the element's `connectedCallback`.
     *
     * * Shimmed custom properties may only be defined either for an entire
     * shadowRoot (for example, in a `:host` rule) or via a rule that directly
     * matches an element with a shadowRoot. In other words, instead of flowing from
     * parent to child as do native css custom properties, shimmed custom properties
     * flow only from shadowRoots to nested shadowRoots.
     *
     * * When using `@apply` mixing css shorthand property names with
     * non-shorthand names (for example `border` and `border-width`) is not
     * supported.
     */
    const render$1 = (result, container, options) => {
        if (!options || typeof options !== 'object' || !options.scopeName) {
            throw new Error('The `scopeName` option is required.');
        }
        const scopeName = options.scopeName;
        const hasRendered = parts.has(container);
        const needsScoping = compatibleShadyCSSVersion &&
            container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
            !!container.host;
        // Handle first render to a scope specially...
        const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
        // On first scope render, render into a fragment; this cannot be a single
        // fragment that is reused since nested renders can occur synchronously.
        const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
        render(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
        // When performing first scope render,
        // (1) We've rendered into a fragment so that there's a chance to
        // `prepareTemplateStyles` before sub-elements hit the DOM
        // (which might cause them to render based on a common pattern of
        // rendering in a custom element's `connectedCallback`);
        // (2) Scope the template with ShadyCSS one time only for this scope.
        // (3) Render the fragment into the container and make sure the
        // container knows its `part` is the one we just rendered. This ensures
        // DOM will be re-used on subsequent renders.
        if (firstScopeRender) {
            const part = parts.get(renderContainer);
            parts.delete(renderContainer);
            // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
            // that should apply to `renderContainer` even if the rendered value is
            // not a TemplateInstance. However, it will only insert scoped styles
            // into the document if `prepareTemplateStyles` has already been called
            // for the given scope name.
            const template = part.value instanceof TemplateInstance ?
                part.value.template :
                undefined;
            prepareTemplateStyles(scopeName, renderContainer, template);
            removeNodes(container, container.firstChild);
            container.appendChild(renderContainer);
            parts.set(container, part);
        }
        // After elements have hit the DOM, update styling if this is the
        // initial render to this container.
        // This is needed whenever dynamic changes are made so it would be
        // safest to do every render; however, this would regress performance
        // so we leave it up to the user to call `ShadyCSS.styleElement`
        // for dynamic changes.
        if (!hasRendered && needsScoping) {
            window.ShadyCSS.styleElement(container.host);
        }
    };

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    var _a;
    /**
     * Use this module if you want to create your own base class extending
     * [[UpdatingElement]].
     * @packageDocumentation
     */
    /*
     * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
     * replaced at compile time by the munged name for object[property]. We cannot
     * alias this function, so we have to use a small shim that has the same
     * behavior when not compiling.
     */
    window.JSCompiler_renameProperty =
        (prop, _obj) => prop;
    const defaultConverter = {
        toAttribute(value, type) {
            switch (type) {
                case Boolean:
                    return value ? '' : null;
                case Object:
                case Array:
                    // if the value is `null` or `undefined` pass this through
                    // to allow removing/no change behavior.
                    return value == null ? value : JSON.stringify(value);
            }
            return value;
        },
        fromAttribute(value, type) {
            switch (type) {
                case Boolean:
                    return value !== null;
                case Number:
                    return value === null ? null : Number(value);
                case Object:
                case Array:
                    return JSON.parse(value);
            }
            return value;
        }
    };
    /**
     * Change function that returns true if `value` is different from `oldValue`.
     * This method is used as the default for a property's `hasChanged` function.
     */
    const notEqual = (value, old) => {
        // This ensures (old==NaN, value==NaN) always returns false
        return old !== value && (old === old || value === value);
    };
    const defaultPropertyDeclaration = {
        attribute: true,
        type: String,
        converter: defaultConverter,
        reflect: false,
        hasChanged: notEqual
    };
    const STATE_HAS_UPDATED = 1;
    const STATE_UPDATE_REQUESTED = 1 << 2;
    const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
    const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
    /**
     * The Closure JS Compiler doesn't currently have good support for static
     * property semantics where "this" is dynamic (e.g.
     * https://github.com/google/closure-compiler/issues/3177 and others) so we use
     * this hack to bypass any rewriting by the compiler.
     */
    const finalized = 'finalized';
    /**
     * Base element class which manages element properties and attributes. When
     * properties change, the `update` method is asynchronously called. This method
     * should be supplied by subclassers to render updates as desired.
     * @noInheritDoc
     */
    class UpdatingElement extends HTMLElement {
        constructor() {
            super();
            this.initialize();
        }
        /**
         * Returns a list of attributes corresponding to the registered properties.
         * @nocollapse
         */
        static get observedAttributes() {
            // note: piggy backing on this to ensure we're finalized.
            this.finalize();
            const attributes = [];
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            this._classProperties.forEach((v, p) => {
                const attr = this._attributeNameForProperty(p, v);
                if (attr !== undefined) {
                    this._attributeToPropertyMap.set(attr, p);
                    attributes.push(attr);
                }
            });
            return attributes;
        }
        /**
         * Ensures the private `_classProperties` property metadata is created.
         * In addition to `finalize` this is also called in `createProperty` to
         * ensure the `@property` decorator can add property metadata.
         */
        /** @nocollapse */
        static _ensureClassProperties() {
            // ensure private storage for property declarations.
            if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
                this._classProperties = new Map();
                // NOTE: Workaround IE11 not supporting Map constructor argument.
                const superProperties = Object.getPrototypeOf(this)._classProperties;
                if (superProperties !== undefined) {
                    superProperties.forEach((v, k) => this._classProperties.set(k, v));
                }
            }
        }
        /**
         * Creates a property accessor on the element prototype if one does not exist
         * and stores a PropertyDeclaration for the property with the given options.
         * The property setter calls the property's `hasChanged` property option
         * or uses a strict identity check to determine whether or not to request
         * an update.
         *
         * This method may be overridden to customize properties; however,
         * when doing so, it's important to call `super.createProperty` to ensure
         * the property is setup correctly. This method calls
         * `getPropertyDescriptor` internally to get a descriptor to install.
         * To customize what properties do when they are get or set, override
         * `getPropertyDescriptor`. To customize the options for a property,
         * implement `createProperty` like this:
         *
         * static createProperty(name, options) {
         *   options = Object.assign(options, {myOption: true});
         *   super.createProperty(name, options);
         * }
         *
         * @nocollapse
         */
        static createProperty(name, options = defaultPropertyDeclaration) {
            // Note, since this can be called by the `@property` decorator which
            // is called before `finalize`, we ensure storage exists for property
            // metadata.
            this._ensureClassProperties();
            this._classProperties.set(name, options);
            // Do not generate an accessor if the prototype already has one, since
            // it would be lost otherwise and that would never be the user's intention;
            // Instead, we expect users to call `requestUpdate` themselves from
            // user-defined accessors. Note that if the super has an accessor we will
            // still overwrite it
            if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
                return;
            }
            const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
            const descriptor = this.getPropertyDescriptor(name, key, options);
            if (descriptor !== undefined) {
                Object.defineProperty(this.prototype, name, descriptor);
            }
        }
        /**
         * Returns a property descriptor to be defined on the given named property.
         * If no descriptor is returned, the property will not become an accessor.
         * For example,
         *
         *   class MyElement extends LitElement {
         *     static getPropertyDescriptor(name, key, options) {
         *       const defaultDescriptor =
         *           super.getPropertyDescriptor(name, key, options);
         *       const setter = defaultDescriptor.set;
         *       return {
         *         get: defaultDescriptor.get,
         *         set(value) {
         *           setter.call(this, value);
         *           // custom action.
         *         },
         *         configurable: true,
         *         enumerable: true
         *       }
         *     }
         *   }
         *
         * @nocollapse
         */
        static getPropertyDescriptor(name, key, options) {
            return {
                // tslint:disable-next-line:no-any no symbol in index
                get() {
                    return this[key];
                },
                set(value) {
                    const oldValue = this[name];
                    this[key] = value;
                    this
                        .requestUpdateInternal(name, oldValue, options);
                },
                configurable: true,
                enumerable: true
            };
        }
        /**
         * Returns the property options associated with the given property.
         * These options are defined with a PropertyDeclaration via the `properties`
         * object or the `@property` decorator and are registered in
         * `createProperty(...)`.
         *
         * Note, this method should be considered "final" and not overridden. To
         * customize the options for a given property, override `createProperty`.
         *
         * @nocollapse
         * @final
         */
        static getPropertyOptions(name) {
            return this._classProperties && this._classProperties.get(name) ||
                defaultPropertyDeclaration;
        }
        /**
         * Creates property accessors for registered properties and ensures
         * any superclasses are also finalized.
         * @nocollapse
         */
        static finalize() {
            // finalize any superclasses
            const superCtor = Object.getPrototypeOf(this);
            if (!superCtor.hasOwnProperty(finalized)) {
                superCtor.finalize();
            }
            this[finalized] = true;
            this._ensureClassProperties();
            // initialize Map populated in observedAttributes
            this._attributeToPropertyMap = new Map();
            // make any properties
            // Note, only process "own" properties since this element will inherit
            // any properties defined on the superClass, and finalization ensures
            // the entire prototype chain is finalized.
            if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
                const props = this.properties;
                // support symbols in properties (IE11 does not support this)
                const propKeys = [
                    ...Object.getOwnPropertyNames(props),
                    ...(typeof Object.getOwnPropertySymbols === 'function') ?
                        Object.getOwnPropertySymbols(props) :
                        []
                ];
                // This for/of is ok because propKeys is an array
                for (const p of propKeys) {
                    // note, use of `any` is due to TypeSript lack of support for symbol in
                    // index types
                    // tslint:disable-next-line:no-any no symbol in index
                    this.createProperty(p, props[p]);
                }
            }
        }
        /**
         * Returns the property name for the given attribute `name`.
         * @nocollapse
         */
        static _attributeNameForProperty(name, options) {
            const attribute = options.attribute;
            return attribute === false ?
                undefined :
                (typeof attribute === 'string' ?
                    attribute :
                    (typeof name === 'string' ? name.toLowerCase() : undefined));
        }
        /**
         * Returns true if a property should request an update.
         * Called when a property value is set and uses the `hasChanged`
         * option for the property if present or a strict identity check.
         * @nocollapse
         */
        static _valueHasChanged(value, old, hasChanged = notEqual) {
            return hasChanged(value, old);
        }
        /**
         * Returns the property value for the given attribute value.
         * Called via the `attributeChangedCallback` and uses the property's
         * `converter` or `converter.fromAttribute` property option.
         * @nocollapse
         */
        static _propertyValueFromAttribute(value, options) {
            const type = options.type;
            const converter = options.converter || defaultConverter;
            const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
            return fromAttribute ? fromAttribute(value, type) : value;
        }
        /**
         * Returns the attribute value for the given property value. If this
         * returns undefined, the property will *not* be reflected to an attribute.
         * If this returns null, the attribute will be removed, otherwise the
         * attribute will be set to the value.
         * This uses the property's `reflect` and `type.toAttribute` property options.
         * @nocollapse
         */
        static _propertyValueToAttribute(value, options) {
            if (options.reflect === undefined) {
                return;
            }
            const type = options.type;
            const converter = options.converter;
            const toAttribute = converter && converter.toAttribute ||
                defaultConverter.toAttribute;
            return toAttribute(value, type);
        }
        /**
         * Performs element initialization. By default captures any pre-set values for
         * registered properties.
         */
        initialize() {
            this._updateState = 0;
            this._updatePromise =
                new Promise((res) => this._enableUpdatingResolver = res);
            this._changedProperties = new Map();
            this._saveInstanceProperties();
            // ensures first update will be caught by an early access of
            // `updateComplete`
            this.requestUpdateInternal();
        }
        /**
         * Fixes any properties set on the instance before upgrade time.
         * Otherwise these would shadow the accessor and break these properties.
         * The properties are stored in a Map which is played back after the
         * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
         * (<=41), properties created for native platform properties like (`id` or
         * `name`) may not have default values set in the element constructor. On
         * these browsers native properties appear on instances and therefore their
         * default value will overwrite any element default (e.g. if the element sets
         * this.id = 'id' in the constructor, the 'id' will become '' since this is
         * the native platform default).
         */
        _saveInstanceProperties() {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            this.constructor
                ._classProperties.forEach((_v, p) => {
                if (this.hasOwnProperty(p)) {
                    const value = this[p];
                    delete this[p];
                    if (!this._instanceProperties) {
                        this._instanceProperties = new Map();
                    }
                    this._instanceProperties.set(p, value);
                }
            });
        }
        /**
         * Applies previously saved instance properties.
         */
        _applyInstanceProperties() {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            // tslint:disable-next-line:no-any
            this._instanceProperties.forEach((v, p) => this[p] = v);
            this._instanceProperties = undefined;
        }
        connectedCallback() {
            // Ensure first connection completes an update. Updates cannot complete
            // before connection.
            this.enableUpdating();
        }
        enableUpdating() {
            if (this._enableUpdatingResolver !== undefined) {
                this._enableUpdatingResolver();
                this._enableUpdatingResolver = undefined;
            }
        }
        /**
         * Allows for `super.disconnectedCallback()` in extensions while
         * reserving the possibility of making non-breaking feature additions
         * when disconnecting at some point in the future.
         */
        disconnectedCallback() {
        }
        /**
         * Synchronizes property values when attributes change.
         */
        attributeChangedCallback(name, old, value) {
            if (old !== value) {
                this._attributeToProperty(name, value);
            }
        }
        _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
            const ctor = this.constructor;
            const attr = ctor._attributeNameForProperty(name, options);
            if (attr !== undefined) {
                const attrValue = ctor._propertyValueToAttribute(value, options);
                // an undefined value does not change the attribute.
                if (attrValue === undefined) {
                    return;
                }
                // Track if the property is being reflected to avoid
                // setting the property again via `attributeChangedCallback`. Note:
                // 1. this takes advantage of the fact that the callback is synchronous.
                // 2. will behave incorrectly if multiple attributes are in the reaction
                // stack at time of calling. However, since we process attributes
                // in `update` this should not be possible (or an extreme corner case
                // that we'd like to discover).
                // mark state reflecting
                this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
                if (attrValue == null) {
                    this.removeAttribute(attr);
                }
                else {
                    this.setAttribute(attr, attrValue);
                }
                // mark state not reflecting
                this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
            }
        }
        _attributeToProperty(name, value) {
            // Use tracking info to avoid deserializing attribute value if it was
            // just set from a property setter.
            if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
                return;
            }
            const ctor = this.constructor;
            // Note, hint this as an `AttributeMap` so closure clearly understands
            // the type; it has issues with tracking types through statics
            // tslint:disable-next-line:no-unnecessary-type-assertion
            const propName = ctor._attributeToPropertyMap.get(name);
            if (propName !== undefined) {
                const options = ctor.getPropertyOptions(propName);
                // mark state reflecting
                this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
                this[propName] =
                    // tslint:disable-next-line:no-any
                    ctor._propertyValueFromAttribute(value, options);
                // mark state not reflecting
                this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
            }
        }
        /**
         * This protected version of `requestUpdate` does not access or return the
         * `updateComplete` promise. This promise can be overridden and is therefore
         * not free to access.
         */
        requestUpdateInternal(name, oldValue, options) {
            let shouldRequestUpdate = true;
            // If we have a property key, perform property update steps.
            if (name !== undefined) {
                const ctor = this.constructor;
                options = options || ctor.getPropertyOptions(name);
                if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                    if (!this._changedProperties.has(name)) {
                        this._changedProperties.set(name, oldValue);
                    }
                    // Add to reflecting properties set.
                    // Note, it's important that every change has a chance to add the
                    // property to `_reflectingProperties`. This ensures setting
                    // attribute + property reflects correctly.
                    if (options.reflect === true &&
                        !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                        if (this._reflectingProperties === undefined) {
                            this._reflectingProperties = new Map();
                        }
                        this._reflectingProperties.set(name, options);
                    }
                }
                else {
                    // Abort the request if the property should not be considered changed.
                    shouldRequestUpdate = false;
                }
            }
            if (!this._hasRequestedUpdate && shouldRequestUpdate) {
                this._updatePromise = this._enqueueUpdate();
            }
        }
        /**
         * Requests an update which is processed asynchronously. This should
         * be called when an element should update based on some state not triggered
         * by setting a property. In this case, pass no arguments. It should also be
         * called when manually implementing a property setter. In this case, pass the
         * property `name` and `oldValue` to ensure that any configured property
         * options are honored. Returns the `updateComplete` Promise which is resolved
         * when the update completes.
         *
         * @param name {PropertyKey} (optional) name of requesting property
         * @param oldValue {any} (optional) old value of requesting property
         * @returns {Promise} A Promise that is resolved when the update completes.
         */
        requestUpdate(name, oldValue) {
            this.requestUpdateInternal(name, oldValue);
            return this.updateComplete;
        }
        /**
         * Sets up the element to asynchronously update.
         */
        async _enqueueUpdate() {
            this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
            try {
                // Ensure any previous update has resolved before updating.
                // This `await` also ensures that property changes are batched.
                await this._updatePromise;
            }
            catch (e) {
                // Ignore any previous errors. We only care that the previous cycle is
                // done. Any error should have been handled in the previous update.
            }
            const result = this.performUpdate();
            // If `performUpdate` returns a Promise, we await it. This is done to
            // enable coordinating updates with a scheduler. Note, the result is
            // checked to avoid delaying an additional microtask unless we need to.
            if (result != null) {
                await result;
            }
            return !this._hasRequestedUpdate;
        }
        get _hasRequestedUpdate() {
            return (this._updateState & STATE_UPDATE_REQUESTED);
        }
        get hasUpdated() {
            return (this._updateState & STATE_HAS_UPDATED);
        }
        /**
         * Performs an element update. Note, if an exception is thrown during the
         * update, `firstUpdated` and `updated` will not be called.
         *
         * You can override this method to change the timing of updates. If this
         * method is overridden, `super.performUpdate()` must be called.
         *
         * For instance, to schedule updates to occur just before the next frame:
         *
         * ```
         * protected async performUpdate(): Promise<unknown> {
         *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
         *   super.performUpdate();
         * }
         * ```
         */
        performUpdate() {
            // Abort any update if one is not pending when this is called.
            // This can happen if `performUpdate` is called early to "flush"
            // the update.
            if (!this._hasRequestedUpdate) {
                return;
            }
            // Mixin instance properties once, if they exist.
            if (this._instanceProperties) {
                this._applyInstanceProperties();
            }
            let shouldUpdate = false;
            const changedProperties = this._changedProperties;
            try {
                shouldUpdate = this.shouldUpdate(changedProperties);
                if (shouldUpdate) {
                    this.update(changedProperties);
                }
                else {
                    this._markUpdated();
                }
            }
            catch (e) {
                // Prevent `firstUpdated` and `updated` from running when there's an
                // update exception.
                shouldUpdate = false;
                // Ensure element can accept additional updates after an exception.
                this._markUpdated();
                throw e;
            }
            if (shouldUpdate) {
                if (!(this._updateState & STATE_HAS_UPDATED)) {
                    this._updateState = this._updateState | STATE_HAS_UPDATED;
                    this.firstUpdated(changedProperties);
                }
                this.updated(changedProperties);
            }
        }
        _markUpdated() {
            this._changedProperties = new Map();
            this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
        }
        /**
         * Returns a Promise that resolves when the element has completed updating.
         * The Promise value is a boolean that is `true` if the element completed the
         * update without triggering another update. The Promise result is `false` if
         * a property was set inside `updated()`. If the Promise is rejected, an
         * exception was thrown during the update.
         *
         * To await additional asynchronous work, override the `_getUpdateComplete`
         * method. For example, it is sometimes useful to await a rendered element
         * before fulfilling this Promise. To do this, first await
         * `super._getUpdateComplete()`, then any subsequent state.
         *
         * @returns {Promise} The Promise returns a boolean that indicates if the
         * update resolved without triggering another update.
         */
        get updateComplete() {
            return this._getUpdateComplete();
        }
        /**
         * Override point for the `updateComplete` promise.
         *
         * It is not safe to override the `updateComplete` getter directly due to a
         * limitation in TypeScript which means it is not possible to call a
         * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
         * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
         * This method should be overridden instead. For example:
         *
         *   class MyElement extends LitElement {
         *     async _getUpdateComplete() {
         *       await super._getUpdateComplete();
         *       await this._myChild.updateComplete;
         *     }
         *   }
         */
        _getUpdateComplete() {
            return this._updatePromise;
        }
        /**
         * Controls whether or not `update` should be called when the element requests
         * an update. By default, this method always returns `true`, but this can be
         * customized to control when to update.
         *
         * @param _changedProperties Map of changed properties with old values
         */
        shouldUpdate(_changedProperties) {
            return true;
        }
        /**
         * Updates the element. This method reflects property values to attributes.
         * It can be overridden to render and keep updated element DOM.
         * Setting properties inside this method will *not* trigger
         * another update.
         *
         * @param _changedProperties Map of changed properties with old values
         */
        update(_changedProperties) {
            if (this._reflectingProperties !== undefined &&
                this._reflectingProperties.size > 0) {
                // Use forEach so this works even if for/of loops are compiled to for
                // loops expecting arrays
                this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
                this._reflectingProperties = undefined;
            }
            this._markUpdated();
        }
        /**
         * Invoked whenever the element is updated. Implement to perform
         * post-updating tasks via DOM APIs, for example, focusing an element.
         *
         * Setting properties inside this method will trigger the element to update
         * again after this update cycle completes.
         *
         * @param _changedProperties Map of changed properties with old values
         */
        updated(_changedProperties) {
        }
        /**
         * Invoked when the element is first updated. Implement to perform one time
         * work on the element after update.
         *
         * Setting properties inside this method will trigger the element to update
         * again after this update cycle completes.
         *
         * @param _changedProperties Map of changed properties with old values
         */
        firstUpdated(_changedProperties) {
        }
    }
    _a = finalized;
    /**
     * Marks class as having finished creating properties.
     */
    UpdatingElement[_a] = true;

    /**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */
    /**
     * Whether the current browser supports `adoptedStyleSheets`.
     */
    const supportsAdoptingStyleSheets = (window.ShadowRoot) &&
        (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) &&
        ('adoptedStyleSheets' in Document.prototype) &&
        ('replace' in CSSStyleSheet.prototype);
    const constructionToken = Symbol();
    class CSSResult {
        constructor(cssText, safeToken) {
            if (safeToken !== constructionToken) {
                throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
            }
            this.cssText = cssText;
        }
        // Note, this is a getter so that it's lazy. In practice, this means
        // stylesheets are not created until the first element instance is made.
        get styleSheet() {
            if (this._styleSheet === undefined) {
                // Note, if `supportsAdoptingStyleSheets` is true then we assume
                // CSSStyleSheet is constructable.
                if (supportsAdoptingStyleSheets) {
                    this._styleSheet = new CSSStyleSheet();
                    this._styleSheet.replaceSync(this.cssText);
                }
                else {
                    this._styleSheet = null;
                }
            }
            return this._styleSheet;
        }
        toString() {
            return this.cssText;
        }
    }
    /**
     * Wrap a value for interpolation in a [[`css`]] tagged template literal.
     *
     * This is unsafe because untrusted CSS text can be used to phone home
     * or exfiltrate data to an attacker controlled site. Take care to only use
     * this with trusted input.
     */
    const unsafeCSS = (value) => {
        return new CSSResult(String(value), constructionToken);
    };
    const textFromCSSResult = (value) => {
        if (value instanceof CSSResult) {
            return value.cssText;
        }
        else if (typeof value === 'number') {
            return value;
        }
        else {
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
        }
    };
    /**
     * Template tag which which can be used with LitElement's [[LitElement.styles |
     * `styles`]] property to set element styles. For security reasons, only literal
     * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
     * may be used inside a template string part.
     */
    const css = (strings, ...values) => {
        const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
        return new CSSResult(cssText, constructionToken);
    };

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    // IMPORTANT: do not change the property name or the assignment expression.
    // This line will be used in regexes to search for LitElement usage.
    // TODO(justinfagnani): inject version number at build time
    (window['litElementVersions'] || (window['litElementVersions'] = []))
        .push('2.4.0');
    /**
     * Sentinal value used to avoid calling lit-html's render function when
     * subclasses do not implement `render`
     */
    const renderNotImplemented = {};
    /**
     * Base element class that manages element properties and attributes, and
     * renders a lit-html template.
     *
     * To define a component, subclass `LitElement` and implement a
     * `render` method to provide the component's template. Define properties
     * using the [[`properties`]] property or the [[`property`]] decorator.
     */
    class LitElement extends UpdatingElement {
        /**
         * Return the array of styles to apply to the element.
         * Override this method to integrate into a style management system.
         *
         * @nocollapse
         */
        static getStyles() {
            return this.styles;
        }
        /** @nocollapse */
        static _getUniqueStyles() {
            // Only gather styles once per class
            if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
                return;
            }
            // Take care not to call `this.getStyles()` multiple times since this
            // generates new CSSResults each time.
            // TODO(sorvell): Since we do not cache CSSResults by input, any
            // shared styles will generate new stylesheet objects, which is wasteful.
            // This should be addressed when a browser ships constructable
            // stylesheets.
            const userStyles = this.getStyles();
            if (Array.isArray(userStyles)) {
                // De-duplicate styles preserving the _last_ instance in the set.
                // This is a performance optimization to avoid duplicated styles that can
                // occur especially when composing via subclassing.
                // The last item is kept to try to preserve the cascade order with the
                // assumption that it's most important that last added styles override
                // previous styles.
                const addStyles = (styles, set) => styles.reduceRight((set, s) => 
                // Note: On IE set.add() does not return the set
                Array.isArray(s) ? addStyles(s, set) : (set.add(s), set), set);
                // Array.from does not work on Set in IE, otherwise return
                // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
                const set = addStyles(userStyles, new Set());
                const styles = [];
                set.forEach((v) => styles.unshift(v));
                this._styles = styles;
            }
            else {
                this._styles = userStyles === undefined ? [] : [userStyles];
            }
            // Ensure that there are no invalid CSSStyleSheet instances here. They are
            // invalid in two conditions.
            // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
            //     this is impossible to check except via .replaceSync or use
            // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
            //     false)
            this._styles = this._styles.map((s) => {
                if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
                    // Flatten the cssText from the passed constructible stylesheet (or
                    // undetectable non-constructible stylesheet). The user might have
                    // expected to update their stylesheets over time, but the alternative
                    // is a crash.
                    const cssText = Array.prototype.slice.call(s.cssRules)
                        .reduce((css, rule) => css + rule.cssText, '');
                    return unsafeCSS(cssText);
                }
                return s;
            });
        }
        /**
         * Performs element initialization. By default this calls
         * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
         * captures any pre-set values for registered properties.
         */
        initialize() {
            super.initialize();
            this.constructor._getUniqueStyles();
            this.renderRoot = this.createRenderRoot();
            // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
            // element's getRootNode(). While this could be done, we're choosing not to
            // support this now since it would require different logic around de-duping.
            if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
                this.adoptStyles();
            }
        }
        /**
         * Returns the node into which the element should render and by default
         * creates and returns an open shadowRoot. Implement to customize where the
         * element's DOM is rendered. For example, to render into the element's
         * childNodes, return `this`.
         * @returns {Element|DocumentFragment} Returns a node into which to render.
         */
        createRenderRoot() {
            return this.attachShadow({ mode: 'open' });
        }
        /**
         * Applies styling to the element shadowRoot using the [[`styles`]]
         * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
         * available and will fallback otherwise. When Shadow DOM is polyfilled,
         * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
         * is available but `adoptedStyleSheets` is not, styles are appended to the
         * end of the `shadowRoot` to [mimic spec
         * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
         */
        adoptStyles() {
            const styles = this.constructor._styles;
            if (styles.length === 0) {
                return;
            }
            // There are three separate cases here based on Shadow DOM support.
            // (1) shadowRoot polyfilled: use ShadyCSS
            // (2) shadowRoot.adoptedStyleSheets available: use it
            // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
            // rendering
            if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
                window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
            }
            else if (supportsAdoptingStyleSheets) {
                this.renderRoot.adoptedStyleSheets =
                    styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
            }
            else {
                // This must be done after rendering so the actual style insertion is done
                // in `update`.
                this._needsShimAdoptedStyleSheets = true;
            }
        }
        connectedCallback() {
            super.connectedCallback();
            // Note, first update/render handles styleElement so we only call this if
            // connected after first update.
            if (this.hasUpdated && window.ShadyCSS !== undefined) {
                window.ShadyCSS.styleElement(this);
            }
        }
        /**
         * Updates the element. This method reflects property values to attributes
         * and calls `render` to render DOM via lit-html. Setting properties inside
         * this method will *not* trigger another update.
         * @param _changedProperties Map of changed properties with old values
         */
        update(changedProperties) {
            // Setting properties in `render` should not trigger an update. Since
            // updates are allowed after super.update, it's important to call `render`
            // before that.
            const templateResult = this.render();
            super.update(changedProperties);
            // If render is not implemented by the component, don't call lit-html render
            if (templateResult !== renderNotImplemented) {
                this.constructor
                    .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
            }
            // When native Shadow DOM is used but adoptedStyles are not supported,
            // insert styling after rendering to ensure adoptedStyles have highest
            // priority.
            if (this._needsShimAdoptedStyleSheets) {
                this._needsShimAdoptedStyleSheets = false;
                this.constructor._styles.forEach((s) => {
                    const style = document.createElement('style');
                    style.textContent = s.cssText;
                    this.renderRoot.appendChild(style);
                });
            }
        }
        /**
         * Invoked on each update to perform rendering tasks. This method may return
         * any value renderable by lit-html's `NodePart` - typically a
         * `TemplateResult`. Setting properties inside this method will *not* trigger
         * the element to update.
         */
        render() {
            return renderNotImplemented;
        }
    }
    /**
     * Ensure this class is marked as `finalized` as an optimization ensuring
     * it will not needlessly try to `finalize`.
     *
     * Note this property name is a string to prevent breaking Closure JS Compiler
     * optimizations. See updating-element.ts for more information.
     */
    LitElement['finalized'] = true;
    /**
     * Reference to the underlying library method used to render the element's
     * DOM. By default, points to the `render` method from lit-html's shady-render
     * module.
     *
     * **Most users will never need to touch this property.**
     *
     * This  property should not be confused with the `render` instance method,
     * which should be overridden to define a template for the element.
     *
     * Advanced users creating a new base class based on LitElement can override
     * this property to point to a custom render method with a signature that
     * matches [shady-render's `render`
     * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
     *
     * @nocollapse
     */
    LitElement.render = render$1;

    /*
     *  Components - Top Bar
     */
    class TopBar extends LitElement {
      static get styles() {
        return css`
      :host {
        align-items: flex-start;
        display: grid;
        grid-template-columns: min-content min-content;
        justify-content: space-between;
        max-height: 72px;
        padding-bottom: 1rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 1rem;
        position: fixed;
        width: 100%;
        z-index: 9;
      }

      @media (min-height: 35em) {
        :host {
          padding-bottom: 1.5rem;
          padding-top: 1.5rem;
        }
      }

      .c-top-bar__nav {
        display: grid;
        font-size: 125%;
        grid-auto-flow: column;
        grid-gap: 0.25rem;
        transform: translatex(0);
      }

      @media (min-width: 45em) and (min-height: 35em) {
        .c-top-bar__nav {
          grid-auto-flow: row;
          grid-gap: 0;
          transform: translatex(0.25rem);
        }
      }

      ::slotted([slot='link']) {
        padding: 0 0.25rem;
        text-align: center;
        text-decoration: none;
      }
    `;
      }

      render() {
        return html`
      <slot name="logo"> </slot>
      <nav class="c-top-bar__nav">
        <slot name="link"> </slot>
      </nav>
    `;
      }

    }

    /*
     *  Components - Hero
     */
    class Hero extends LitElement {
      static get styles() {
        return css`
      * {
        box-sizing: border-box;
      }

      :host {
        --hero-image-me-dark:       url(
          '/images/Me-Dark.jpg'
        );
        --hero-image-me-light: url(
          '/images/Me-Light.jpg'
        );
        --hero-image-paint-1-dark: url(
          '/images/Hero-Paint-1-Dark.jpg'
        );
        --hero-image-paint-1-light: url(
          '/images/Hero-Paint-1-Light.jpg'
        );
        --hero-image-paint-2-dark: url(
          '/images/Hero-Paint-2-Dark.jpg'
        );
        --hero-image-paint-2-light: url(
          '/images/Hero-Paint-2-Light.jpg'
        );
        --hero-image-noise: url(
          '/images/Noise-Clear.svg'
        );

        display: grid;
        grid-template-rows: 4fr 5fr 4.5rem;
        height: 100%;
        max-height: 100%;
        min-height: 30rem;
      }

      @media (min-width: 45em) {
        :host {
          grid-template-rows: 2fr 1fr 4.5rem;
          min-height: 30rem;
        }
      }

      .c-hero__upper {
        align-content: center;
        border-bottom: solid 1px var(--color-accent);
        display: grid;
        justify-content: center;
        overflow: hidden;
        position: relative;
      }

      .c-hero__upper::after {
        backface-visibility: hidden;
        background-image: linear-gradient(
            0deg,
            var(--color-opaque-overlay) 000%,
            var(--color-opaque-overlay) 050%,
            rgba(0, 0, 0, 0) 050.01%,
            rgba(0, 0, 0, 0) 100%
          ),
          linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 000%,
            rgba(0, 0, 0, 0.02) 030%,
            rgba(0, 0, 0, 0.02) 070%,
            rgba(0, 0, 0, 0) 100%
          );
        background-repeat: repeat, no-repeat;
        background-size: 100% 4px, 100% 20%;
        content: '';
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 0;
      }

      .c-hero__paint-dark,
      .c-hero__paint-light,
      .c-hero__paint-dark::before,
      .c-hero__paint-light::before {
        backface-visibility: hidden;
        background-position: top left;
        background-size: cover;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transition: all 0.25s;
        width: 100%;
      }

      .c-hero__paint-dark::before,
      .c-hero__paint-light::before {
        animation: hero-paint 6s infinite;
        content: '';
      }

      .c-hero__paint-dark {
        background-image: var(--hero-image-paint-1-dark);
        opacity: var(--theme-dark-opacity);
      }

      .c-hero__paint-dark::before {
        background-image: var(--hero-image-paint-2-dark);
      }

      .c-hero__paint-light {
        backface-visibility: hidden;
        background-image: var(--hero-image-paint-1-light);
        opacity: var(--theme-light-opacity);
      }

      .c-hero__paint-light::before {
        background-image: var(--hero-image-paint-1-light);
      }

      .c-hero__tagline,
      .c-hero__name,
      .c-hero__location {
        position: relative;
        z-index: 1;
      }

      .c-hero__tagline {
        font-family: 'syneextrabold';
        font-size: clamp(1.5rem, 7vw, 4.25rem);
        line-height: 1.05;
        text-transform: uppercase;
        width: auto;
      }

      @media (min-height: 35em) {

        .c-hero__tagline {
          margin-top: 0.5rem;
          line-height: 1.1;
        }

      }

      .c-hero__tagline-main {
        position: relative;
        z-index: 1;
      }

      .c-hero__tagline-accent-1,
      .c-hero__tagline-accent-2,
      .c-hero__tagline-accent-3 {
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--color-fg);
        opacity: 0.05;
        position: absolute;
        top: 0;
        z-index: 0;
      }

      .c-hero__tagline-accent-1 {
        animation: hero-tagline-accent-fade-in-1 0.5s 1s
          forwards;
        transform: translateY(0.4vw);
      }

      .c-hero__tagline-accent-2 {
        animation: hero-tagline-accent-fade-in-2 0.5s 1s
          forwards;
        transform: translateY(0.8vw);
      }

      .c-hero__tagline-accent-3 {
        animation: hero-tagline-accent-fade-in-3 0.5s 1s
          forwards;
        transform: translateY(1.2vw);
      }

      .c-hero__name,
      .c-hero__location {
        bottom: 0;
        display: block;
        font-family: var(--font-main-regular);
        font-size: 0.6rem;
        font-weight: var(--font-main-regular-weight);
        height: 0.6rem;
        letter-spacing: 0.1em;
        line-height: 1;
        padding-bottom: 1.25rem;
        position: absolute;
        text-transform: uppercase;
      }

      .c-hero__name {
        text-align: right;
        transform-origin: top left;
        padding-left: 1.5rem;
      }

      .c-hero__location {
        right: 0;
        text-align: left;
        transform-origin: top right;
        padding-right: 1.5rem;
      }

      @media (min-width: 45em) {
        .c-hero__name,
        .c-hero__location {
          font-size: 0.7rem;
          height: 0.7rem;
          padding-bottom: 0;
          padding-left: 1rem;
          padding-right: 1rem;
          width: 40vh;
        }

        .c-hero__name {
          left: 1.5rem;
          text-align: right;
          transform: rotate(90deg) translateY(-0.6rem)
            translateX(-100%);
          transform-origin: top left;
        }

        .c-hero__location {
          right: 1.5rem;
          text-align: left;
          transform: rotate(-90deg) translateY(-0.6rem)
            translateX(100%);
          transform-origin: top right;
        }
      }

      .c-hero__lower {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 5fr 4fr;
      }

      @media (min-width: 45em) {
        .c-hero__lower {
          grid-template-columns: 1fr 1fr 2fr;
          grid-template-rows: auto;
        }
      }

      .c-hero__me,
      .c-hero__me::before {
        background-position: center;
        background-size: cover;
      }

      .c-hero__me {
        background-image: var(--hero-image-me-dark);
        border-right: solid 1px var(--color-accent);
        opacity: .9;
        position: relative;
      }

      .c-hero__me::before {
        background-blend-mode: luminosity;
        background-color: var(--color-bg-primary);
        background-image: var(--hero-image-me-light);
        content: '';
        height: 100%;
        opacity: var(--theme-light-opacity);
        position: absolute;
        width: 100%;
      }

      .c-hero__name-stylized {
        background-image: linear-gradient(
          -45deg,
          var(--color-opaque-heavy) 0%,
          var(--color-opaque-heavy) 6.24%,
          transparent               6.25%,
          transparent               43.74%,
          var(--color-opaque-heavy) 43.75%,
          var(--color-opaque-heavy) 56.25%,
          transparent               56.26%,
          transparent               93.74%,
          var(--color-opaque-heavy) 93.75%,
          var(--color-opaque-heavy) 100%
        );
        background-position: 0 0;
        background-repeat: repeat;
        background-size:
          var(--bg-pattern-diagonal-size)
          var(--bg-pattern-diagonal-size);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 100%;
        justify-items: center;
        padding-bottom: var(--spacing-responsive-y);
        padding-left: var(--spacing-responsive-x);
        padding-right: var(--spacing-responsive-x);
        padding-top: var(--spacing-responsive-y);
        position: relative;
        text-align: center;
        width: 100%;
      }

      @media (min-width: 45em) {
        .c-hero__name-stylized {
          border-right: solid 1px var(--color-accent);
        }
      }

      .c-hero__name-stylized::before {
        background-color: var(--color-bg);
        content: '';
        height: 100%;
        opacity: .05;
        position: absolute;
        width: 100%;
        z-index: -1;
      }

      .c-hero__name-stylized-letter {
        font-family: var(--font-accent);
        font-size: .8rem;
        font-weight: var(--font-accent-weight);
        margin-bottom: auto;
        margin-left: auto;
        margin-right: auto;
        margin-top: auto;
      }

      @media (min-width: 35em) {

        .c-hero__name-stylized-letter {
          font-size: 1rem;
        }

      }

      .c-hero__heading {
        align-content: center;
        border-top: solid 1px var(--color-accent);
        display: grid;
        font-family: var(--font-heading);
        font-size: clamp(1.5rem, 3vw, 2.25rem);
        grid-column-end: 3;
        grid-column-start: 1;
        justify-content: center;
        line-height: 1;
        padding-left: 2rem;
        padding-right: 2rem;
      }

      ::slotted([slot='heading']) {
        max-width: 30rem;
      }

      @media (min-width: 45em) {
        .c-hero__heading {
          border-top: none;
          grid-column-end: 4;
          grid-column-start: 3;
        }

        .c-hero__heading > * {
          line-height: 1.1;
        }
      }

      .c-hero__footer {
        border-top: solid 1px var(--color-accent);
        display: grid;
        grid-template-columns:
            3.2rem
            auto
            auto
            2.1rem;
        grid-template-rows: 1fr 0.5rem;
      }

      @media (min-width: 35em) {

        .c-hero__footer {
          grid-template-columns:
            4rem
            calc(50% - 4rem)
            calc(50% - 4rem)
            4rem;
        }

      }

      ::slotted([slot='footer-box-left']),
      ::slotted([slot='footer-content-left']),
      ::slotted([slot='footer-content-right']) {
        border-right: solid 1px var(--color-subtle);
      }

      ::slotted([slot='footer-content-left']),
      ::slotted([slot='footer-content-right']) {
        align-items: center;
        column-gap: .5rem;
        display: grid;
        font-family: var(--font-main-regular);
        font-size: 0.6rem;
        justify-content: center;
        padding-left: .5rem;
        padding-right: .5rem;
      }

      @media (min-width: 25em) {

        ::slotted([slot='footer-content-left']),
        ::slotted([slot='footer-content-right']) {
          column-gap: .75rem;
          font-family: var(--font-main-light);
          font-size: .8rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }

      @media (min-width: 45em) {

        ::slotted([slot='footer-content-left']),
        ::slotted([slot='footer-content-right']) {
          column-gap: 1rem;
          font-size: 1rem;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }

      }

      ::slotted([slot='footer-content-left']) {
        grid-template-columns: auto 1fr;
      }


      ::slotted([slot='footer-content-right']) {
        grid-template-columns: auto 1fr;
      }

      @media (min-width: 45em) {

        ::slotted([slot='footer-content-right']) {
          grid-template-columns: auto 1fr;
        }

      }

      ::slotted([slot='footer-box-right']) {
        align-items: center;
        display: grid;
        font-size: 1.2rem;
        justify-content: center;
      }

      @media (min-width: 35em) {

        ::slotted([slot='footer-box-right']) {
          font-size: 1.33rem;
        }

      }

      ::slotted([slot='bottom']) {
        grid-column-start: 1;
        grid-column-end: 5;
        margin-bottom: 0;
        margin-top: 0;
      }

      .u-noise-overlay,
      .u-noise-heavy-overlay {
        overflow: hidden;
        position: relative;
      }

      .u-noise-overlay::after,
      .u-noise-heavy-overlay::after {
        animation: noise .4s infinite !important;
        backface-visibility: hidden !important;
        background-image: url(
          "/images/Noise-Clear.svg"
        ) !important;
        background-size: 400px auto !important;
        background-repeat: repeat !important;
        content: '' !important;
        height: 200% !important;
        left: -50% !important;

        position: absolute !important;
        top: -50% !important;
        width: 200% !important;
      }

      .u-noise-overlay::after {
        opacity: .2;
      }

      .u-noise-heavy-overlay::after {
        opacity: .5;
      }


      /* Animations */

      @keyframes hero-paint {
        0% {
          opacity: 0.04;
        }
        10% {
          opacity: 0.04;
        }
        50% {
          opacity: 0.96;
        }
        60% {
          opacity: 0.96;
        }
        100% {
          opacity: 0.04;
        }
      }

      @keyframes hero-scanlines {
        0% {
          background-position: 0 0, 0 -100%;
        }
        50% {
          background-position: 0 0, 0 200%;
        }
        100% {
          background-position: 0 0, 0 200%;
        }
      }

      @keyframes hero-tagline-accent-fade-in-1 {
        0% {
          opacity: 0.04;
        }
        100% {
          opacity: 0.6;
        }
      }

      @keyframes hero-tagline-accent-fade-in-2 {
        0% {
          opacity: 0.04;
        }
        100% {
          opacity: 0.4;
        }
      }

      @keyframes hero-tagline-accent-fade-in-3 {
        0% {
          opacity: 0.04;
        }
        100% {
          opacity: 0.2;
        }
      }

      @keyframes noise {
        0.00% { transform: translate(0, 0) }
        49.99% { transform: translate(0, 0) }
        50.00% { transform: translate(-10%, 10%) }
        99.99% { transform: translate(-10%, 10%) }
      }

    `;
      }

      firstUpdated() {
        this._taglineSetup();

        this._nameStylizedSetup();

        window.addEventListener('load', () => {});
      }

      _scramble() {
        scrambler({
          target: '[data-scrambler]',
          random: [1000, 1000],
          speed: 60
        });
      }

      _taglineSetup() {
        const taglineHTML = this.querySelector('[slot=tagline]').innerHTML.replaceAll('  ', '').replaceAll('\n', '');
        const taglineSplit = taglineHTML.split('<br>');
        const taglineMain = taglineSplit.map((value, index) => {
          const inner = '<span data-scrambler>' + value + '</span>';
          const isLast = taglineSplit.length - 1 === index;
          return isLast ? inner : inner + '<br>';
        }).join('');
        const taglineAccentEls = [this.shadowRoot.querySelector('.c-hero__tagline-accent-1'), this.shadowRoot.querySelector('.c-hero__tagline-accent-2'), this.shadowRoot.querySelector('.c-hero__tagline-accent-3')];
        this.innerHTML += '<div slot="tagline-main">' + taglineMain + '</div>';
        taglineAccentEls.map(el => {
          el.innerHTML = taglineHTML;
        });
      }

      _nameStylizedSetup() {
        const name = this.querySelector('[slot="name-stylized"').innerHTML.replaceAll(' ', '').replaceAll('\n', '').split('');
        const nameStylizedEl = this.shadowRoot.querySelector('.c-hero__name-stylized');
        nameStylizedEl.innerHTML = name.map(value => {
          const nameDiv = '<div class="c-hero__name-stylized-letter">' + value + '</div>';
          return nameDiv;
        }).join('');
      }

      render() {
        return html`
      <div class="c-hero__upper">
        <div class="c-hero__paint-dark"></div>
        <div class="c-hero__paint-light"></div>
        <div class="c-hero__tagline">
          <div class="c-hero__tagline-main">
            <slot name="tagline-main"></slot>
          </div>
          <div class="c-hero__tagline-accent-1"></div>
          <div class="c-hero__tagline-accent-2"></div>
          <div class="c-hero__tagline-accent-3"></div>
        </div>
        <div class="c-hero__name">David B. Waters</div>
        <div class="c-hero__location">Charleston, SC</div>
      </div>
      <div class="c-hero__lower">
        <div class="
          c-hero__me
          u-noise-heavy-overlay
        "></div>
        <div class="
          c-hero__name-stylized
          u-noise-overlay
        "></div>
        <div class="c-hero__heading">
          <slot name="heading"></slot>
        </div>
      </div>
      <footer class="c-hero__footer">
        <slot name="footer-box-left"> </slot>
        <slot name="footer-content-left"> </slot>
        <slot name="footer-content-right"> </slot>
        <slot name="footer-box-right"> </slot>
        <slot name="bottom"> </slot>
      </footer>
    `;
      }

    }

    /*
     *  Components - Theme Switch
     */
    class ThemeSwitch extends LitElement {
      static get styles() {
        return css`
      * {
        box-sizing: border-box;
      }

      *::selection {
        background-color: transparent;
      }

      :host {
        --theme-switch-border: var(--color-subtle);
        --theme-switch-bg: var(--color-subtle);
        --theme-switch-switch-border: rgba(0, 0, 0, 0.8);
        --theme-switch-switch: white;

        align-items: center;
        border-right: solid 1px var(--theme-switch-border);
        display: grid;
        height: 100%;
        width: 100%;
      }

      .c-theme-switch__label {
        align-items: center;
        column-gap: .4rem;
        cursor: pointer;
        display: grid;
        grid-auto-flow: column;
        justify-content: center;
        position: relative;
      }

      @media (min-width:35em) {

        .c-theme-switch__label {
          column-gap: .5rem;
        }

      }

      .c-theme-switch__input {
        position: absolute;
        height: 0;
        opacity: 0;
        width: 0;
      }

      .c-theme-switch__switch {
        background: var(--theme-switch-bg);
        border: solid var(--theme-switch-switch-border) 1px;
        height: 1.8rem;
        width: .9rem;
      }

      @media (min-width:35em) {

        .c-theme-switch__switch {
          height: 2rem;
          width: 1rem;
        }

      }

      .c-theme-switch__switch::before {
        background: white;
        content: '';
        display: block;
        height: 50%;
        transition: all 0.25s;
      }

      .c-theme-switch__input:checked
        + .c-theme-switch__switch::before {
        transform: translateY(100%);
      }

      ::slotted(i) {
        font-size: 0.66rem;
      }

      @media (min-width:35em) {

        ::slotted(i) {
          font-size: 0.75rem;
        }

      }
    `;
      }

      _handleChange() {
        const current = document.body.dataset.theme;
        document.body.dataset.theme = current === 'dark' ? 'light' : 'dark';
      }

      render() {
        return html`
      <label class="c-theme-switch__label">
        <input
          type="checkbox"
          class="c-theme-switch__input"
          @change=${this._handleChange}
        />
        <span class="c-theme-switch__switch"></span>
        <slot></slot>
      </label>
      
    `;
      }

    }

    /*
     *  Components - Squiggle
     */
    class Squiggle extends LitElement {
      static get styles() {
        return css`
      :host {
        display: block;
        height: 0.5rem;
        line-height: 0;
        margin-top: 1rem;
      }

      .c-squiggle__svg {
        display: inline-block;
        fill: var(--color-accent);
      }
    `;
      }

      render() {
        return html`
      <svg
        class="c-squiggle__svg"
        height="8px"
        width="80px"
      >
        <path
          class="c-squiggle__path"
          d="m 42.476186,0.7481025 4.037372,2.70742 c 0.902472,0.61748 2.089934,0.61748 2.944907,0 l 4.037373,-2.70742 c 1.519952,-0.99747 3.46739,-0.99747 4.939843,0 l 4.037373,2.70742 c 0.902471,0.61748 2.089934,0.61748 2.944907,0 l 4.084871,-2.70742 c 1.472453,-0.99747 3.419892,-0.99747 4.939844,0 l 4.084871,2.70742 c 0.189994,0.14249 0.379988,0.23749 0.61748,0.28499 0.474985,0.14249 0.807475,0.52248 0.854973,1.04496 0,0.42749 -0.284991,0.80748 -0.712477,0.80748 h -0.142496 v 0 c -0.569982,-0.095 -1.092465,-0.33249 -1.56745,-0.66498 l -4.037373,-2.70742 c -0.902471,-0.61748 -2.089934,-0.61748 -2.944907,0 l -4.037372,2.70742 c -1.472454,0.99747 -3.46739,0.99747 -4.939844,0 l -3.989874,-2.75491 c -0.902471,-0.61748 -2.089934,-0.61748 -2.944907,0 l -4.037372,2.70741 c -1.472454,0.99747 -3.467391,0.99747 -4.939844,0 l -4.037373,-2.70741 c -0.902471,-0.61748 -2.089934,-0.61748 -2.944907,0 l -4.037372,2.70741 c -0.745083,0.50473 -1.621663,0.81336 -2.49891,0.80751 -4.86e-4,2.2e-4 -4.55e-4,1.6e-4 -4.23e-4,8e-5 -0.891255,0.0145 -1.790987,-0.23538 -2.548035,-0.74822 l -4.037373,-2.70741 c -0.902471,-0.61748 -2.089934,-0.61748 -2.944906,0 l -4.037373,2.70741 c -1.472453,0.99747 -3.46739,0.99747 -4.939844,0 l -4.0373723,-2.70741 c -0.902472,-0.61748 -2.089934,-0.61748 -2.944907,0 l -4.0373727,2.70741 c -0.664979,0.33249 -1.1874625,0.56999 -1.7574445,0.66498 C 0.474985,5.6523225 0.094997,5.3673325 0,4.9873425 v -0.14249 0 c 0.047499,-0.47499 0.379988,-0.90248 0.854973,-1.04497 0.2374925,-0.095 0.4274865,-0.18999 0.6174805,-0.28499 l 4.0373724,-2.70742 c 1.5199518,-0.99746 3.4673908,-0.99746 4.9398441,0 l 4.037373,2.70742 c 0.902471,0.61748 2.089934,0.61748 2.944907,0 l 4.037372,-2.70742 c 1.519952,-0.99746 3.467391,-0.99746 4.939844,0 l 4.037372,2.70742 c 0.513481,0.35133 1.151725,0.50276 1.73599,0.4543 0.463081,-0.0278 0.931741,-0.23584 1.316441,-0.51367 l 4.037373,-2.70742 c 1.519952,-0.99747 3.46739,-0.99747 4.939844,0 z"
        />
      </svg>
    `;
      }

    }

    /*
     *  Components - Section Header
     */
    class SectionHeader extends LitElement {
      static get styles() {
        return css`
      :host {
        --section-header-title-font: var(--font-display);
        --section-header-title-font-weight: var(--font-display-weight);

        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
        display: block;
        text-align: center;
      }

      ::slotted([slot='title']),
      ::slotted([slot='description']) {
        border-bottom: solid 1px
          var(--color-subtle-alternate);
        box-sizing: border-box;
        display: block;
      }

      ::slotted([slot='title']) {
        font-size: 1.4rem;
        font-family: var(--section-header-title-font);
        font-weight: var(--section-header-title-font-weight);
        line-height: 1.25;
        padding-bottom: 3rem;
        padding-left: .5rem;
        padding-right: .5rem;
        padding-top: 4rem;
        text-transform: uppercase;
      }

      @media (min-width: 16em) {

        ::slotted([slot='title']) {
          font-size: 1.5rem;
          padding-left: 1rem;
          padding-right: 1rem;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--color-fg);
        }
      }

      @media (min-width: 25em) {

        ::slotted([slot='title']) {
          font-size: 2.0736rem;
          font-size: clamp(
            2.0736rem,
            32.832px + 0.108vw,
            2.16rem
          );
        }

      }

      @media (min-width: 45em) {
        ::slotted([slot='title']) {
          padding-left: 6rem;
          padding-right: 6rem;
        }
      }

      ::slotted([slot='description']) {
        box-shadow: 0 0 0 1px var(--color-subtle-alternate);
        padding-bottom: 1.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 1.5rem;
      }
    `;
      }

      render() {
        return html`
      <slot name="title"> </slot>
      <slot name="description"> </slot>
    `;
      }

    }

    /*
     *  Components - Glitch Image
     */
    class GlitchImage extends LitElement {
      static get styles() {
        return css`
      :host {
        --glitch-image-height: 100%;
        --glitch-image-width: 100%;

        align-items: center;
        display: grid;
        min-height: 1px;
        width: 100%;
      }

      :host(.c-glitch-image--style-1) {
        --glitch-image-gap-horizontal: 0px;
        --glitch-image-gap-vertical: 0px;
        --glitch-image-time-anim: 2.25s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: none;
        --glitch-image-blend-mode-4: none;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: transparent;
        --glitch-image-blend-color-4: transparent;
        --glitch-image-blend-color-5: transparent;
      }

      :host(.c-glitch-image--style-2) {
        --glitch-image-gap-horizontal: 0px;
        --glitch-image-gap-vertical: 0px;
        --glitch-image-time-anim: 2s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: luminosity;
        --glitch-image-blend-mode-4: none;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: #95d6eb;
        --glitch-image-blend-color-4: transparent;
        --glitch-image-blend-color-5: #95d6eb;
      }

      :host(.c-glitch-image--style-3) {
        --glitch-image-gap-horizontal: 20px;
        --glitch-image-gap-vertical: 2px;
        --glitch-image-time-anim: 2.25s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: multiply;
        --glitch-image-blend-mode-4: none;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: #af4563;
        --glitch-image-blend-color-4: transparent;
        --glitch-image-blend-color-5: transparent;
      }

      :host(.c-glitch-image--style-4) {
        --glitch-image-gap-horizontal: 5px;
        --glitch-image-gap-vertical: 20px;
        --glitch-image-time-anim: 5s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: exclusion;
        --glitch-image-blend-mode-3: hard-light;
        --glitch-image-blend-mode-4: overlay;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: #52f1cd;
        --glitch-image-blend-color-3: #525df1;
        --glitch-image-blend-color-4: #f19b52;
        --glitch-image-blend-color-5: transparent;
      }

      :host(.c-glitch-image--style-5) {
        --glitch-image-gap-horizontal: 50px;
        --glitch-image-gap-vertical: 100px;
        --glitch-image-time-anim: 2.25s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: none;
        --glitch-image-blend-mode-4: overlay;
        --glitch-image-blend-mode-5: overlay;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: transparent;
        --glitch-image-blend-color-4: #000;
        --glitch-image-blend-color-5: #8d16f2;
      }

      :host(.c-glitch-image--style-6) {
        --glitch-image-gap-horizontal: 3px;
        --glitch-image-gap-vertical: 70px;
        --glitch-image-time-anim: 2.25s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: overlay;
        --glitch-image-blend-mode-4: none;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: rgba(
          255,
          255,
          255,
          0.2
        );
        --glitch-image-blend-color-4: transparent;
        --glitch-image-blend-color-5: transparent;
      }

      .c-glitch-image__inner {
        height: 1px;
        margin: 0 auto;
        max-width: 100%;
        min-height: 1px;
        overflow: hidden;
        padding-bottom: calc(
          100% / var(--glitch-aspect-ratio) - 1px
        );
        position: relative;
        width: var(--glitch-image-width);
      }

      .c-glitch-image__image {
        background-blend-mode: var(
          --glitch-image-blend-mode-1
        );
        background-color: var(--glitch-image-blend-color-1);
        background-image: var(--glitch-image);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: calc(
          100% + var(--glitch-image-gap-vertical) * 2
        );
        left: calc(-1 * var(--glitch-image-gap-horizontal));
        position: absolute;
        top: calc(var(--glitch-image-gap-vertical) * -1);
        transform: translate3d(0, 0, 0);
        width: calc(
          100% + var(--glitch-image-gap-horizontal) * 2
        );
      }

      .c-glitch-image__image:nth-child(2) {
        background-color: var(--glitch-image-blend-color-2);
        background-blend-mode: var(
          --glitch-image-blend-mode-2
        );
      }

      .c-glitch-image__image:nth-child(3) {
        background-color: var(--glitch-image-blend-color-3);
        background-blend-mode: var(
          --glitch-image-blend-mode-3
        );
      }

      .c-glitch-image__image:nth-child(4) {
        background-color: var(--glitch-image-blend-color-4);
        background-blend-mode: var(
          --glitch-image-blend-mode-4
        );
      }

      .c-glitch-image__image:nth-child(5) {
        background-color: var(--glitch-image-blend-color-5);
        background-blend-mode: var(
          --glitch-image-blend-mode-5
        );
      }

      .c-glitch-image__image:nth-child(n + 2) {
        opacity: 0;
      }

      .c-glitch-image__inner:hover
        .c-glitch-image__image:nth-child(n + 2),
      .c-glitch-image__image.is-glitching:nth-child(n + 2) {
        opacity: 1;
      }

      .c-glitch-image__inner:hover
        .c-glitch-image__image:nth-child(2),
      .c-glitch-image__image.is-glitching:nth-child(2) {
        transform: translate3d(
          var(--glitch-image-gap-horizontal),
          0,
          0
        );
        animation: glitch-anim-1-horizontal
          var(--glitch-image-time-anim) infinite linear
          alternate;
      }

      .c-glitch-image__inner:hover
        > .c-glitch-image__image:nth-child(3),
      .c-glitch-image__inner.is-glitching
        > .c-glitch-image__image:nth-child(3) {
        transform: translate3d(
          calc(-1 * var(--glitch-image-gap-horizontal)),
          0,
          0
        );
        animation: glitch-anim-2-horizontal
          var(--glitch-image-time-anim) infinite linear
          alternate;
      }

      .c-glitch-image__inner:hover
        > .c-glitch-image__image:nth-child(4),
      .c-glitch-image__inner.is-glitching
        > .c-glitch-image__image:nth-child(4) {
        transform: translate3d(
            0,
            calc(-1 * var(--glitch-image-gap-vertical)),
            0
          )
          scale3d(-1, -1, 1);
        animation: glitch-anim-3-horizontal
          var(--glitch-image-time-anim) infinite linear
          alternate;
      }

      /* Hover flash animation on last image */
      .c-glitch-image__inner:hover
        > .c-glitch-image__image:nth-child(5),
      .c-glitch-image__inner.is-glitching
        > .c-glitch-image__image:nth-child(5) {
        animation: glitch-anim-flash 0.5s steps(1, end)
          infinite;
      }

      @keyframes glitch-anim-1-horizontal {
        0% {
          -webkit-clip-path: polygon(
            0 2%,
            100% 2%,
            100% 5%,
            0 5%
          );
          clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
        }
        10% {
          -webkit-clip-path: polygon(
            0 15%,
            100% 15%,
            100% 15%,
            0 15%
          );
          clip-path: polygon(
            0 15%,
            100% 15%,
            100% 15%,
            0 15%
          );
        }
        20% {
          -webkit-clip-path: polygon(
            0 10%,
            100% 10%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 10%,
            100% 10%,
            100% 20%,
            0 20%
          );
        }
        30% {
          -webkit-clip-path: polygon(
            0 1%,
            100% 1%,
            100% 2%,
            0 2%
          );
          clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
        }
        40% {
          -webkit-clip-path: polygon(
            0 33%,
            100% 33%,
            100% 33%,
            0 33%
          );
          clip-path: polygon(
            0 33%,
            100% 33%,
            100% 33%,
            0 33%
          );
        }
        50% {
          -webkit-clip-path: polygon(
            0 44%,
            100% 44%,
            100% 44%,
            0 44%
          );
          clip-path: polygon(
            0 44%,
            100% 44%,
            100% 44%,
            0 44%
          );
        }
        60% {
          -webkit-clip-path: polygon(
            0 50%,
            100% 50%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 50%,
            100% 50%,
            100% 20%,
            0 20%
          );
        }
        70% {
          -webkit-clip-path: polygon(
            0 70%,
            100% 70%,
            100% 70%,
            0 70%
          );
          clip-path: polygon(
            0 70%,
            100% 70%,
            100% 70%,
            0 70%
          );
        }
        80% {
          -webkit-clip-path: polygon(
            0 80%,
            100% 80%,
            100% 80%,
            0 80%
          );
          clip-path: polygon(
            0 80%,
            100% 80%,
            100% 80%,
            0 80%
          );
        }
        90% {
          -webkit-clip-path: polygon(
            0 50%,
            100% 50%,
            100% 55%,
            0 55%
          );
          clip-path: polygon(
            0 50%,
            100% 50%,
            100% 55%,
            0 55%
          );
        }
        100% {
          -webkit-clip-path: polygon(
            0 70%,
            100% 70%,
            100% 80%,
            0 80%
          );
          clip-path: polygon(
            0 70%,
            100% 70%,
            100% 80%,
            0 80%
          );
        }
      }

      @keyframes glitch-anim-2-horizontal {
        0% {
          -webkit-clip-path: polygon(
            0 25%,
            100% 25%,
            100% 30%,
            0 30%
          );
          clip-path: polygon(
            0 25%,
            100% 25%,
            100% 30%,
            0 30%
          );
        }
        15% {
          -webkit-clip-path: polygon(
            0 3%,
            100% 3%,
            100% 3%,
            0 3%
          );
          clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
        }
        22% {
          -webkit-clip-path: polygon(
            0 5%,
            100% 5%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 5%,
            100% 5%,
            100% 20%,
            0 20%
          );
        }
        31% {
          -webkit-clip-path: polygon(
            0 20%,
            100% 20%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 20%,
            100% 20%,
            100% 20%,
            0 20%
          );
        }
        45% {
          -webkit-clip-path: polygon(
            0 40%,
            100% 40%,
            100% 40%,
            0 40%
          );
          clip-path: polygon(
            0 40%,
            100% 40%,
            100% 40%,
            0 40%
          );
        }
        51% {
          -webkit-clip-path: polygon(
            0 52%,
            100% 52%,
            100% 59%,
            0 59%
          );
          clip-path: polygon(
            0 52%,
            100% 52%,
            100% 59%,
            0 59%
          );
        }
        63% {
          -webkit-clip-path: polygon(
            0 60%,
            100% 60%,
            100% 60%,
            0 60%
          );
          clip-path: polygon(
            0 60%,
            100% 60%,
            100% 60%,
            0 60%
          );
        }
        76% {
          -webkit-clip-path: polygon(
            0 75%,
            100% 75%,
            100% 75%,
            0 75%
          );
          clip-path: polygon(
            0 75%,
            100% 75%,
            100% 75%,
            0 75%
          );
        }
        81% {
          -webkit-clip-path: polygon(
            0 65%,
            100% 65%,
            100% 40%,
            0 40%
          );
          clip-path: polygon(
            0 65%,
            100% 65%,
            100% 40%,
            0 40%
          );
        }
        94% {
          -webkit-clip-path: polygon(
            0 45%,
            100% 45%,
            100% 50%,
            0 50%
          );
          clip-path: polygon(
            0 45%,
            100% 45%,
            100% 50%,
            0 50%
          );
        }
        100% {
          -webkit-clip-path: polygon(
            0 14%,
            100% 14%,
            100% 33%,
            0 33%
          );
          clip-path: polygon(
            0 14%,
            100% 14%,
            100% 33%,
            0 33%
          );
        }
      }

      @keyframes glitch-anim-3-horizontal {
        0% {
          -webkit-clip-path: polygon(
            0 1%,
            100% 1%,
            100% 3%,
            0 3%
          );
          clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
        }
        5% {
          -webkit-clip-path: polygon(
            0 10%,
            100% 10%,
            100% 9%,
            0 9%
          );
          clip-path: polygon(
            0 10%,
            100% 10%,
            100% 9%,
            0 9%
          );
        }
        10% {
          -webkit-clip-path: polygon(
            0 5%,
            100% 5%,
            100% 6%,
            0 6%
          );
          clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
        }
        25% {
          -webkit-clip-path: polygon(
            0 20%,
            100% 20%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 20%,
            100% 20%,
            100% 20%,
            0 20%
          );
        }
        27% {
          -webkit-clip-path: polygon(
            0 10%,
            100% 10%,
            100% 10%,
            0 10%
          );
          clip-path: polygon(
            0 10%,
            100% 10%,
            100% 10%,
            0 10%
          );
        }
        30% {
          -webkit-clip-path: polygon(
            0 30%,
            100% 30%,
            100% 25%,
            0 25%
          );
          clip-path: polygon(
            0 30%,
            100% 30%,
            100% 25%,
            0 25%
          );
        }
        33% {
          -webkit-clip-path: polygon(
            0 15%,
            100% 15%,
            100% 16%,
            0 16%
          );
          clip-path: polygon(
            0 15%,
            100% 15%,
            100% 16%,
            0 16%
          );
        }
        37% {
          -webkit-clip-path: polygon(
            0 40%,
            100% 40%,
            100% 39%,
            0 39%
          );
          clip-path: polygon(
            0 40%,
            100% 40%,
            100% 39%,
            0 39%
          );
        }
        40% {
          -webkit-clip-path: polygon(
            0 20%,
            100% 20%,
            100% 21%,
            0 21%
          );
          clip-path: polygon(
            0 20%,
            100% 20%,
            100% 21%,
            0 21%
          );
        }
        45% {
          -webkit-clip-path: polygon(
            0 60%,
            100% 60%,
            100% 55%,
            0 55%
          );
          clip-path: polygon(
            0 60%,
            100% 60%,
            100% 55%,
            0 55%
          );
        }
        50% {
          -webkit-clip-path: polygon(
            0 30%,
            100% 30%,
            100% 31%,
            0 31%
          );
          clip-path: polygon(
            0 30%,
            100% 30%,
            100% 31%,
            0 31%
          );
        }
        53% {
          -webkit-clip-path: polygon(
            0 70%,
            100% 70%,
            100% 69%,
            0 69%
          );
          clip-path: polygon(
            0 70%,
            100% 70%,
            100% 69%,
            0 69%
          );
        }
        57% {
          -webkit-clip-path: polygon(
            0 40%,
            100% 40%,
            100% 41%,
            0 41%
          );
          clip-path: polygon(
            0 40%,
            100% 40%,
            100% 41%,
            0 41%
          );
        }
        60% {
          -webkit-clip-path: polygon(
            0 80%,
            100% 80%,
            100% 75%,
            0 75%
          );
          clip-path: polygon(
            0 80%,
            100% 80%,
            100% 75%,
            0 75%
          );
        }
        65% {
          -webkit-clip-path: polygon(
            0 50%,
            100% 50%,
            100% 51%,
            0 51%
          );
          clip-path: polygon(
            0 50%,
            100% 50%,
            100% 51%,
            0 51%
          );
        }
        70% {
          -webkit-clip-path: polygon(
            0 90%,
            100% 90%,
            100% 90%,
            0 90%
          );
          clip-path: polygon(
            0 90%,
            100% 90%,
            100% 90%,
            0 90%
          );
        }
        73% {
          -webkit-clip-path: polygon(
            0 60%,
            100% 60%,
            100% 60%,
            0 60%
          );
          clip-path: polygon(
            0 60%,
            100% 60%,
            100% 60%,
            0 60%
          );
        }
        80% {
          -webkit-clip-path: polygon(
            0 100%,
            100% 100%,
            100% 99%,
            0 99%
          );
          clip-path: polygon(
            0 100%,
            100% 100%,
            100% 99%,
            0 99%
          );
        }
        100% {
          -webkit-clip-path: polygon(
            0 70%,
            100% 70%,
            100% 71%,
            0 71%
          );
          clip-path: polygon(
            0 70%,
            100% 70%,
            100% 71%,
            0 71%
          );
        }
      }

      @keyframes glitch-anim-flash {
        0% {
          opacity: 0.2;
          transform: translate3d(
            var(--glitch-image-gap-horizontal),
            var(--glitch-image-gap-vertical),
            0
          );
        }
        33%,
        100% {
          opacity: 0;
          transform: translate3d(0, 0, 0);
        }
      }
    `;
      }

      static get properties() {
        return {
          glitch: {
            type: String,
            attribute: true
          },
          src: {
            type: String,
            attribute: true
          },
          active: {
            type: Boolean,
            attribute: true
          },
          aspectRatio: {
            type: Number
          },
          wrapper: {
            type: Object
          }
        };
      }

      constructor() {
        super();
        this.glitch = '1';
        this.active = false;
        this.aspectRatio = 1;
      }

      firstUpdated() {
        const hasWidth = this.hasAttribute('width');
        const hasHeight = this.hasAttribute('height');
        const hasDimensions = hasWidth && hasHeight;
        this._wrapper = this.shadowRoot.querySelector('.c-glitch-image__inner');

        if (this.active) {
          this._wrapper.querySelectorAll('.c-glitch-image__image').forEach(el => {
            el.classList.add('is-glitching');
          });
        }

        this.classList.add('c-glitch-image--style-' + this.glitch);

        if (hasDimensions) {
          const imgWidth = this.getAttribute('width');
          const imgHeight = this.getAttribute('height');
          this.aspectRatio = imgWidth / imgHeight;
        }

        this._wrapper.style.setProperty('--glitch-aspect-ratio', this.aspectRatio);

        this._wrapper.style.setProperty('--glitch-image', 'url("' + this.src + '")');
      }

      render() {
        return html`
      <div
        class="c-glitch-image__inner"
      >
        <div
          class="c-glitch-image__image"
        />
        </div>
        <div
          class="c-glitch-image__image"
        />
        </div>
        <div
          class="c-glitch-image__image"
        />
        </div>
        <div
          class="c-glitch-image__image"
        />
        </div>
        <div
          class="c-glitch-image__image"
        />
        </div>
      </div>
    `;
      }

    }

    // nb. This is for IE10 and lower _only_.
    var supportCustomEvent = window.CustomEvent;
    if (!supportCustomEvent || typeof supportCustomEvent === 'object') {
      supportCustomEvent = function CustomEvent(event, x) {
        x = x || {};
        var ev = document.createEvent('CustomEvent');
        ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);
        return ev;
      };
      supportCustomEvent.prototype = window.Event.prototype;
    }

    /**
     * Dispatches the passed event to both an "on<type>" handler as well as via the
     * normal dispatch operation. Does not bubble.
     *
     * @param {!EventTarget} target
     * @param {!Event} event
     * @return {boolean}
     */
    function safeDispatchEvent(target, event) {
      var check = 'on' + event.type.toLowerCase();
      if (typeof target[check] === 'function') {
        target[check](event);
      }
      return target.dispatchEvent(event);
    }

    /**
     * @param {Element} el to check for stacking context
     * @return {boolean} whether this el or its parents creates a stacking context
     */
    function createsStackingContext(el) {
      while (el && el !== document.body) {
        var s = window.getComputedStyle(el);
        var invalid = function(k, ok) {
          return !(s[k] === undefined || s[k] === ok);
        };

        if (s.opacity < 1 ||
            invalid('zIndex', 'auto') ||
            invalid('transform', 'none') ||
            invalid('mixBlendMode', 'normal') ||
            invalid('filter', 'none') ||
            invalid('perspective', 'none') ||
            s['isolation'] === 'isolate' ||
            s.position === 'fixed' ||
            s.webkitOverflowScrolling === 'touch') {
          return true;
        }
        el = el.parentElement;
      }
      return false;
    }

    /**
     * Finds the nearest <dialog> from the passed element.
     *
     * @param {Element} el to search from
     * @return {HTMLDialogElement} dialog found
     */
    function findNearestDialog(el) {
      while (el) {
        if (el.localName === 'dialog') {
          return /** @type {HTMLDialogElement} */ (el);
        }
        el = el.parentElement;
      }
      return null;
    }

    /**
     * Blur the specified element, as long as it's not the HTML body element.
     * This works around an IE9/10 bug - blurring the body causes Windows to
     * blur the whole application.
     *
     * @param {Element} el to blur
     */
    function safeBlur(el) {
      // Find the actual focused element when the active element is inside a shadow root
      while (el && el.shadowRoot && el.shadowRoot.activeElement) {
        el = el.shadowRoot.activeElement;
      }

      if (el && el.blur && el !== document.body) {
        el.blur();
      }
    }

    /**
     * @param {!NodeList} nodeList to search
     * @param {Node} node to find
     * @return {boolean} whether node is inside nodeList
     */
    function inNodeList(nodeList, node) {
      for (var i = 0; i < nodeList.length; ++i) {
        if (nodeList[i] === node) {
          return true;
        }
      }
      return false;
    }

    /**
     * @param {HTMLFormElement} el to check
     * @return {boolean} whether this form has method="dialog"
     */
    function isFormMethodDialog(el) {
      if (!el || !el.hasAttribute('method')) {
        return false;
      }
      return el.getAttribute('method').toLowerCase() === 'dialog';
    }

    /**
     * @param {!DocumentFragment|!Element} hostElement
     * @return {?Element}
     */
    function findFocusableElementWithin(hostElement) {
      // Note that this is 'any focusable area'. This list is probably not exhaustive, but the
      // alternative involves stepping through and trying to focus everything.
      var opts = ['button', 'input', 'keygen', 'select', 'textarea'];
      var query = opts.map(function(el) {
        return el + ':not([disabled])';
      });
      // TODO(samthor): tabindex values that are not numeric are not focusable.
      query.push('[tabindex]:not([disabled]):not([tabindex=""])');  // tabindex != "", not disabled
      var target = hostElement.querySelector(query.join(', '));

      if (!target && 'attachShadow' in Element.prototype) {
        // If we haven't found a focusable target, see if the host element contains an element
        // which has a shadowRoot.
        // Recursively search for the first focusable item in shadow roots.
        var elems = hostElement.querySelectorAll('*');
        for (var i = 0; i < elems.length; i++) {
          if (elems[i].tagName && elems[i].shadowRoot) {
            target = findFocusableElementWithin(elems[i].shadowRoot);
            if (target) {
              break;
            }
          }
        }
      }
      return target;
    }

    /**
     * Determines if an element is attached to the DOM.
     * @param {Element} element to check
     * @return {Boolean} whether the element is in DOM
     */
    function isConnected(element) {
      return element.isConnected || document.body.contains(element);
    }

    /**
     * @param {!Event} event
     */
    function findFormSubmitter(event) {
      if (event.submitter) {
        return event.submitter;
      }

      var form = event.target;
      if (!(form instanceof HTMLFormElement)) {
        return null;
      }

      var submitter = dialogPolyfill.formSubmitter;
      if (!submitter) {
        var target = event.target;
        var root = ('getRootNode' in target && target.getRootNode() || document);
        submitter = root.activeElement;
      }

      if (submitter.form !== form) {
        return null;
      }
      return submitter;
    }

    /**
     * @param {!Event} event
     */
    function maybeHandleSubmit(event) {
      if (event.defaultPrevented) {
        return;
      }
      var form = /** @type {!HTMLFormElement} */ (event.target);

      // We'd have a value if we clicked on an imagemap.
      var value = dialogPolyfill.useValue;
      var submitter = findFormSubmitter(event);
      if (value === null && submitter) {
        value = submitter.value;
      }

      // There should always be a dialog as this handler is added specifically on them, but check just
      // in case.
      var dialog = findNearestDialog(form);
      if (!dialog) {
        return;
      }

      // Prefer formmethod on the button.
      var formmethod = submitter && submitter.getAttribute('formmethod') || form.getAttribute('method');
      if (formmethod !== 'dialog') {
        return;
      }
      event.preventDefault();

      if (submitter) {
        dialog.close(value);
      } else {
        dialog.close();
      }
    }

    /**
     * @param {!HTMLDialogElement} dialog to upgrade
     * @constructor
     */
    function dialogPolyfillInfo(dialog) {
      this.dialog_ = dialog;
      this.replacedStyleTop_ = false;
      this.openAsModal_ = false;

      // Set a11y role. Browsers that support dialog implicitly know this already.
      if (!dialog.hasAttribute('role')) {
        dialog.setAttribute('role', 'dialog');
      }

      dialog.show = this.show.bind(this);
      dialog.showModal = this.showModal.bind(this);
      dialog.close = this.close.bind(this);

      dialog.addEventListener('submit', maybeHandleSubmit, false);

      if (!('returnValue' in dialog)) {
        dialog.returnValue = '';
      }

      if ('MutationObserver' in window) {
        var mo = new MutationObserver(this.maybeHideModal.bind(this));
        mo.observe(dialog, {attributes: true, attributeFilter: ['open']});
      } else {
        // IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
        // seem to fire even if the element was removed as part of a parent removal. Use the removed
        // events to force downgrade (useful if removed/immediately added).
        var removed = false;
        var cb = function() {
          removed ? this.downgradeModal() : this.maybeHideModal();
          removed = false;
        }.bind(this);
        var timeout;
        var delayModel = function(ev) {
          if (ev.target !== dialog) { return; }  // not for a child element
          var cand = 'DOMNodeRemoved';
          removed |= (ev.type.substr(0, cand.length) === cand);
          window.clearTimeout(timeout);
          timeout = window.setTimeout(cb, 0);
        };
        ['DOMAttrModified', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument'].forEach(function(name) {
          dialog.addEventListener(name, delayModel);
        });
      }
      // Note that the DOM is observed inside DialogManager while any dialog
      // is being displayed as a modal, to catch modal removal from the DOM.

      Object.defineProperty(dialog, 'open', {
        set: this.setOpen.bind(this),
        get: dialog.hasAttribute.bind(dialog, 'open')
      });

      this.backdrop_ = document.createElement('div');
      this.backdrop_.className = 'backdrop';
      this.backdrop_.addEventListener('mouseup'  , this.backdropMouseEvent_.bind(this));
      this.backdrop_.addEventListener('mousedown', this.backdropMouseEvent_.bind(this));
      this.backdrop_.addEventListener('click'    , this.backdropMouseEvent_.bind(this));
    }

    dialogPolyfillInfo.prototype = /** @type {HTMLDialogElement.prototype} */ ({

      get dialog() {
        return this.dialog_;
      },

      /**
       * Maybe remove this dialog from the modal top layer. This is called when
       * a modal dialog may no longer be tenable, e.g., when the dialog is no
       * longer open or is no longer part of the DOM.
       */
      maybeHideModal: function() {
        if (this.dialog_.hasAttribute('open') && isConnected(this.dialog_)) { return; }
        this.downgradeModal();
      },

      /**
       * Remove this dialog from the modal top layer, leaving it as a non-modal.
       */
      downgradeModal: function() {
        if (!this.openAsModal_) { return; }
        this.openAsModal_ = false;
        this.dialog_.style.zIndex = '';

        // This won't match the native <dialog> exactly because if the user set top on a centered
        // polyfill dialog, that top gets thrown away when the dialog is closed. Not sure it's
        // possible to polyfill this perfectly.
        if (this.replacedStyleTop_) {
          this.dialog_.style.top = '';
          this.replacedStyleTop_ = false;
        }

        // Clear the backdrop and remove from the manager.
        this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);
        dialogPolyfill.dm.removeDialog(this);
      },

      /**
       * @param {boolean} value whether to open or close this dialog
       */
      setOpen: function(value) {
        if (value) {
          this.dialog_.hasAttribute('open') || this.dialog_.setAttribute('open', '');
        } else {
          this.dialog_.removeAttribute('open');
          this.maybeHideModal();  // nb. redundant with MutationObserver
        }
      },

      /**
       * Handles mouse events ('mouseup', 'mousedown', 'click') on the fake .backdrop element, redirecting them as if
       * they were on the dialog itself.
       *
       * @param {!Event} e to redirect
       */
      backdropMouseEvent_: function(e) {
        if (!this.dialog_.hasAttribute('tabindex')) {
          // Clicking on the backdrop should move the implicit cursor, even if dialog cannot be
          // focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this
          // would not be needed - clicks would move the implicit cursor there.
          var fake = document.createElement('div');
          this.dialog_.insertBefore(fake, this.dialog_.firstChild);
          fake.tabIndex = -1;
          fake.focus();
          this.dialog_.removeChild(fake);
        } else {
          this.dialog_.focus();
        }

        var redirectedEvent = document.createEvent('MouseEvents');
        redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window,
            e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey,
            e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
        this.dialog_.dispatchEvent(redirectedEvent);
        e.stopPropagation();
      },

      /**
       * Focuses on the first focusable element within the dialog. This will always blur the current
       * focus, even if nothing within the dialog is found.
       */
      focus_: function() {
        // Find element with `autofocus` attribute, or fall back to the first form/tabindex control.
        var target = this.dialog_.querySelector('[autofocus]:not([disabled])');
        if (!target && this.dialog_.tabIndex >= 0) {
          target = this.dialog_;
        }
        if (!target) {
          target = findFocusableElementWithin(this.dialog_);
        }
        safeBlur(document.activeElement);
        target && target.focus();
      },

      /**
       * Sets the zIndex for the backdrop and dialog.
       *
       * @param {number} dialogZ
       * @param {number} backdropZ
       */
      updateZIndex: function(dialogZ, backdropZ) {
        if (dialogZ < backdropZ) {
          throw new Error('dialogZ should never be < backdropZ');
        }
        this.dialog_.style.zIndex = dialogZ;
        this.backdrop_.style.zIndex = backdropZ;
      },

      /**
       * Shows the dialog. If the dialog is already open, this does nothing.
       */
      show: function() {
        if (!this.dialog_.open) {
          this.setOpen(true);
          this.focus_();
        }
      },

      /**
       * Show this dialog modally.
       */
      showModal: function() {
        if (this.dialog_.hasAttribute('open')) {
          throw new Error('Failed to execute \'showModal\' on dialog: The element is already open, and therefore cannot be opened modally.');
        }
        if (!isConnected(this.dialog_)) {
          throw new Error('Failed to execute \'showModal\' on dialog: The element is not in a Document.');
        }
        if (!dialogPolyfill.dm.pushDialog(this)) {
          throw new Error('Failed to execute \'showModal\' on dialog: There are too many open modal dialogs.');
        }

        if (createsStackingContext(this.dialog_.parentElement)) {
          console.warn('A dialog is being shown inside a stacking context. ' +
              'This may cause it to be unusable. For more information, see this link: ' +
              'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');
        }

        this.setOpen(true);
        this.openAsModal_ = true;

        // Optionally center vertically, relative to the current viewport.
        if (dialogPolyfill.needsCentering(this.dialog_)) {
          dialogPolyfill.reposition(this.dialog_);
          this.replacedStyleTop_ = true;
        } else {
          this.replacedStyleTop_ = false;
        }

        // Insert backdrop.
        this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling);

        // Focus on whatever inside the dialog.
        this.focus_();
      },

      /**
       * Closes this HTMLDialogElement. This is optional vs clearing the open
       * attribute, however this fires a 'close' event.
       *
       * @param {string=} opt_returnValue to use as the returnValue
       */
      close: function(opt_returnValue) {
        if (!this.dialog_.hasAttribute('open')) {
          throw new Error('Failed to execute \'close\' on dialog: The element does not have an \'open\' attribute, and therefore cannot be closed.');
        }
        this.setOpen(false);

        // Leave returnValue untouched in case it was set directly on the element
        if (opt_returnValue !== undefined) {
          this.dialog_.returnValue = opt_returnValue;
        }

        // Triggering "close" event for any attached listeners on the <dialog>.
        var closeEvent = new supportCustomEvent('close', {
          bubbles: false,
          cancelable: false
        });
        safeDispatchEvent(this.dialog_, closeEvent);
      }

    });

    var dialogPolyfill = {};

    dialogPolyfill.reposition = function(element) {
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;
      element.style.top = Math.max(scrollTop, topValue) + 'px';
    };

    dialogPolyfill.isInlinePositionSetByStylesheet = function(element) {
      for (var i = 0; i < document.styleSheets.length; ++i) {
        var styleSheet = document.styleSheets[i];
        var cssRules = null;
        // Some browsers throw on cssRules.
        try {
          cssRules = styleSheet.cssRules;
        } catch (e) {}
        if (!cssRules) { continue; }
        for (var j = 0; j < cssRules.length; ++j) {
          var rule = cssRules[j];
          var selectedNodes = null;
          // Ignore errors on invalid selector texts.
          try {
            selectedNodes = document.querySelectorAll(rule.selectorText);
          } catch(e) {}
          if (!selectedNodes || !inNodeList(selectedNodes, element)) {
            continue;
          }
          var cssTop = rule.style.getPropertyValue('top');
          var cssBottom = rule.style.getPropertyValue('bottom');
          if ((cssTop && cssTop !== 'auto') || (cssBottom && cssBottom !== 'auto')) {
            return true;
          }
        }
      }
      return false;
    };

    dialogPolyfill.needsCentering = function(dialog) {
      var computedStyle = window.getComputedStyle(dialog);
      if (computedStyle.position !== 'absolute') {
        return false;
      }

      // We must determine whether the top/bottom specified value is non-auto.  In
      // WebKit/Blink, checking computedStyle.top == 'auto' is sufficient, but
      // Firefox returns the used value. So we do this crazy thing instead: check
      // the inline style and then go through CSS rules.
      if ((dialog.style.top !== 'auto' && dialog.style.top !== '') ||
          (dialog.style.bottom !== 'auto' && dialog.style.bottom !== '')) {
        return false;
      }
      return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
    };

    /**
     * @param {!Element} element to force upgrade
     */
    dialogPolyfill.forceRegisterDialog = function(element) {
      if (window.HTMLDialogElement || element.showModal) {
        console.warn('This browser already supports <dialog>, the polyfill ' +
            'may not work correctly', element);
      }
      if (element.localName !== 'dialog') {
        throw new Error('Failed to register dialog: The element is not a dialog.');
      }
      new dialogPolyfillInfo(/** @type {!HTMLDialogElement} */ (element));
    };

    /**
     * @param {!Element} element to upgrade, if necessary
     */
    dialogPolyfill.registerDialog = function(element) {
      if (!element.showModal) {
        dialogPolyfill.forceRegisterDialog(element);
      }
    };

    /**
     * @constructor
     */
    dialogPolyfill.DialogManager = function() {
      /** @type {!Array<!dialogPolyfillInfo>} */
      this.pendingDialogStack = [];

      var checkDOM = this.checkDOM_.bind(this);

      // The overlay is used to simulate how a modal dialog blocks the document.
      // The blocking dialog is positioned on top of the overlay, and the rest of
      // the dialogs on the pending dialog stack are positioned below it. In the
      // actual implementation, the modal dialog stacking is controlled by the
      // top layer, where z-index has no effect.
      this.overlay = document.createElement('div');
      this.overlay.className = '_dialog_overlay';
      this.overlay.addEventListener('click', function(e) {
        this.forwardTab_ = undefined;
        e.stopPropagation();
        checkDOM([]);  // sanity-check DOM
      }.bind(this));

      this.handleKey_ = this.handleKey_.bind(this);
      this.handleFocus_ = this.handleFocus_.bind(this);

      this.zIndexLow_ = 100000;
      this.zIndexHigh_ = 100000 + 150;

      this.forwardTab_ = undefined;

      if ('MutationObserver' in window) {
        this.mo_ = new MutationObserver(function(records) {
          var removed = [];
          records.forEach(function(rec) {
            for (var i = 0, c; c = rec.removedNodes[i]; ++i) {
              if (!(c instanceof Element)) {
                continue;
              } else if (c.localName === 'dialog') {
                removed.push(c);
              }
              removed = removed.concat(c.querySelectorAll('dialog'));
            }
          });
          removed.length && checkDOM(removed);
        });
      }
    };

    /**
     * Called on the first modal dialog being shown. Adds the overlay and related
     * handlers.
     */
    dialogPolyfill.DialogManager.prototype.blockDocument = function() {
      document.documentElement.addEventListener('focus', this.handleFocus_, true);
      document.addEventListener('keydown', this.handleKey_);
      this.mo_ && this.mo_.observe(document, {childList: true, subtree: true});
    };

    /**
     * Called on the first modal dialog being removed, i.e., when no more modal
     * dialogs are visible.
     */
    dialogPolyfill.DialogManager.prototype.unblockDocument = function() {
      document.documentElement.removeEventListener('focus', this.handleFocus_, true);
      document.removeEventListener('keydown', this.handleKey_);
      this.mo_ && this.mo_.disconnect();
    };

    /**
     * Updates the stacking of all known dialogs.
     */
    dialogPolyfill.DialogManager.prototype.updateStacking = function() {
      var zIndex = this.zIndexHigh_;

      for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
        dpi.updateZIndex(--zIndex, --zIndex);
        if (i === 0) {
          this.overlay.style.zIndex = --zIndex;
        }
      }

      // Make the overlay a sibling of the dialog itself.
      var last = this.pendingDialogStack[0];
      if (last) {
        var p = last.dialog.parentNode || document.body;
        p.appendChild(this.overlay);
      } else if (this.overlay.parentNode) {
        this.overlay.parentNode.removeChild(this.overlay);
      }
    };

    /**
     * @param {Element} candidate to check if contained or is the top-most modal dialog
     * @return {boolean} whether candidate is contained in top dialog
     */
    dialogPolyfill.DialogManager.prototype.containedByTopDialog_ = function(candidate) {
      while (candidate = findNearestDialog(candidate)) {
        for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
          if (dpi.dialog === candidate) {
            return i === 0;  // only valid if top-most
          }
        }
        candidate = candidate.parentElement;
      }
      return false;
    };

    dialogPolyfill.DialogManager.prototype.handleFocus_ = function(event) {
      var target = event.composedPath ? event.composedPath()[0] : event.target;

      if (this.containedByTopDialog_(target)) { return; }

      if (document.activeElement === document.documentElement) { return; }

      event.preventDefault();
      event.stopPropagation();
      safeBlur(/** @type {Element} */ (target));

      if (this.forwardTab_ === undefined) { return; }  // move focus only from a tab key

      var dpi = this.pendingDialogStack[0];
      var dialog = dpi.dialog;
      var position = dialog.compareDocumentPosition(target);
      if (position & Node.DOCUMENT_POSITION_PRECEDING) {
        if (this.forwardTab_) {
          // forward
          dpi.focus_();
        } else if (target !== document.documentElement) {
          // backwards if we're not already focused on <html>
          document.documentElement.focus();
        }
      }

      return false;
    };

    dialogPolyfill.DialogManager.prototype.handleKey_ = function(event) {
      this.forwardTab_ = undefined;
      if (event.keyCode === 27) {
        event.preventDefault();
        event.stopPropagation();
        var cancelEvent = new supportCustomEvent('cancel', {
          bubbles: false,
          cancelable: true
        });
        var dpi = this.pendingDialogStack[0];
        if (dpi && safeDispatchEvent(dpi.dialog, cancelEvent)) {
          dpi.dialog.close();
        }
      } else if (event.keyCode === 9) {
        this.forwardTab_ = !event.shiftKey;
      }
    };

    /**
     * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
     * removed and immediately readded don't stay modal, they become normal.
     *
     * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed
     */
    dialogPolyfill.DialogManager.prototype.checkDOM_ = function(removed) {
      // This operates on a clone because it may cause it to change. Each change also calls
      // updateStacking, which only actually needs to happen once. But who removes many modal dialogs
      // at a time?!
      var clone = this.pendingDialogStack.slice();
      clone.forEach(function(dpi) {
        if (removed.indexOf(dpi.dialog) !== -1) {
          dpi.downgradeModal();
        } else {
          dpi.maybeHideModal();
        }
      });
    };

    /**
     * @param {!dialogPolyfillInfo} dpi
     * @return {boolean} whether the dialog was allowed
     */
    dialogPolyfill.DialogManager.prototype.pushDialog = function(dpi) {
      var allowed = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;
      if (this.pendingDialogStack.length >= allowed) {
        return false;
      }
      if (this.pendingDialogStack.unshift(dpi) === 1) {
        this.blockDocument();
      }
      this.updateStacking();
      return true;
    };

    /**
     * @param {!dialogPolyfillInfo} dpi
     */
    dialogPolyfill.DialogManager.prototype.removeDialog = function(dpi) {
      var index = this.pendingDialogStack.indexOf(dpi);
      if (index === -1) { return; }

      this.pendingDialogStack.splice(index, 1);
      if (this.pendingDialogStack.length === 0) {
        this.unblockDocument();
      }
      this.updateStacking();
    };

    dialogPolyfill.dm = new dialogPolyfill.DialogManager();
    dialogPolyfill.formSubmitter = null;
    dialogPolyfill.useValue = null;

    /**
     * Installs global handlers, such as click listers and native method overrides. These are needed
     * even if a no dialog is registered, as they deal with <form method="dialog">.
     */
    if (window.HTMLDialogElement === undefined) {

      /**
       * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
       * one that returns the correct value.
       */
      var testForm = document.createElement('form');
      testForm.setAttribute('method', 'dialog');
      if (testForm.method !== 'dialog') {
        var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'method');
        if (methodDescriptor) {
          // nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
          // and don't bother to update the element.
          var realGet = methodDescriptor.get;
          methodDescriptor.get = function() {
            if (isFormMethodDialog(this)) {
              return 'dialog';
            }
            return realGet.call(this);
          };
          var realSet = methodDescriptor.set;
          /** @this {HTMLElement} */
          methodDescriptor.set = function(v) {
            if (typeof v === 'string' && v.toLowerCase() === 'dialog') {
              return this.setAttribute('method', v);
            }
            return realSet.call(this, v);
          };
          Object.defineProperty(HTMLFormElement.prototype, 'method', methodDescriptor);
        }
      }

      /**
       * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
       * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
       * document.activeElement.
       */
      document.addEventListener('click', function(ev) {
        dialogPolyfill.formSubmitter = null;
        dialogPolyfill.useValue = null;
        if (ev.defaultPrevented) { return; }  // e.g. a submit which prevents default submission

        var target = /** @type {Element} */ (ev.target);
        if ('composedPath' in ev) {
          var path = ev.composedPath();
          target = path.shift() || target;
        }
        if (!target || !isFormMethodDialog(target.form)) { return; }

        var valid = (target.type === 'submit' && ['button', 'input'].indexOf(target.localName) > -1);
        if (!valid) {
          if (!(target.localName === 'input' && target.type === 'image')) { return; }
          // this is a <input type="image">, which can submit forms
          dialogPolyfill.useValue = ev.offsetX + ',' + ev.offsetY;
        }

        var dialog = findNearestDialog(target);
        if (!dialog) { return; }

        dialogPolyfill.formSubmitter = target;

      }, false);

      /**
       * Global 'submit' handler. This handles submits of `method="dialog"` which are invalid, i.e.,
       * outside a dialog. They get prevented.
       */
      document.addEventListener('submit', function(ev) {
        var form = ev.target;
        var dialog = findNearestDialog(form);
        if (dialog) {
          return;  // ignore, handle there
        }

        var submitter = findFormSubmitter(ev);
        var formmethod = submitter && submitter.getAttribute('formmethod') || form.getAttribute('method');
        if (formmethod === 'dialog') {
          ev.preventDefault();
        }
      });

      /**
       * Replace the native HTMLFormElement.submit() method, as it won't fire the
       * submit event and give us a chance to respond.
       */
      var nativeFormSubmit = HTMLFormElement.prototype.submit;
      var replacementFormSubmit = function () {
        if (!isFormMethodDialog(this)) {
          return nativeFormSubmit.call(this);
        }
        var dialog = findNearestDialog(this);
        dialog && dialog.close();
      };
      HTMLFormElement.prototype.submit = replacementFormSubmit;
    }

    /*
     *  Components - Modal
     */
    class Modal extends LitElement {
      static get styles() {
        return css`
      :host {
        --modal-color-fg: var(--color-fg);
        --modal-color-bg: var(--color-bg);
        --modal-spacing: 1.5rem;
        --modal-button-color-fg: var(--color-fg);
        --modal-button-color-bg: var(--color-bg);
        --modal-button-color-border: var(--color-fg);
        --modal-button-color-shadow: var(
          --color-opaque
        );
        --modal-button-color-shadow-hover: var(
          --color-opaque-alternate
        );
        --modal-button-font: var(--font-main-regular);
        --modal-button-font-weight: normal;
        --modal-button-size: 1.2rem;
        --modal-button-thickness: 1.5px;
        --modal-transition-duration: 0.15s;
        --modal-trigger-transition-duration: 0.33s;

        position: absolute;
      }

      .c-modal__body {
        background-color: var(--modal-color-bg);
        border: none;
        box-sizing: border-box;
        color: var(--modal-color-fg);
        height: 100%;
        left: 0;
        max-height: none;
        max-width: none;
        overflow-y: scroll;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        position: fixed;
        transition: var(--modal-transition-duration);
        top: 0;
        width: 100%;
        z-index: 9;
      }

      .c-modal__body:not([open]) {
        display: none;
        opacity: 0;
        pointer-events: none;
      }

      .c-modal__body.is-opening {
        display: block;
        opacity: 0;
        visibility: visible;
      }

      .c-modal__body.is-open {
        display: block;
        opacity: 1;
        pointer-events: initial;
      }

      .c-modal__body.is-closing {
        opacity: 0;
      }

      .c-modal__body.-is-closed {
        display: none;
        visibility: hidden;
      }

      .c-modal__back-button,
      .c-modal__back-button:focus,
      .c-modal__close-button,
      .c-modal__close-button:focus {
        border: solid 1px
          var(--modal-button-color-border);
        outline: none;
      }

      .c-modal__back-button,
      .c-modal__close-button {
        align-items: center;
        background-color: var(
          --modal-button-color-bg
        );
        color: inherit;
        cursor: pointer;
        display: grid;
        font-family: var(--modal-button-font);
        font-size: 0.7rem;
        font-weight: var(--modal-button-font-weight);
        grid-template-columns: var(
          --modal-button-size
        );
        grid-template-rows: var(--modal-button-size);
        letter-spacing: 0.025em;
        padding-bottom: calc(var(--modal-spacing) / 3);
        padding-top: calc(var(--modal-spacing) / 3);
        position: sticky;
        top: calc(var(--modal-spacing) / 2);
        text-transform: uppercase;
        transition-duration: var(
          --modal-transition-duration
        );
        z-index: 9;
      }

      .c-modal__back-button:active,
      .c-modal__close-button:active {
        transform: translateY(2px);
      }

      .c-modal__back-button:hover,
      .c-modal__close-button:hover {
        box-shadow: 0 0 1px 1px
          var(--modal-button-color-shadow-hover);
      }

      .c-modal__back-button {
        border-radius: 100%;
        float: left;
        justify-items: center;
        margin-left: calc(var(--modal-spacing) / 2);
        width: calc(
          var(--modal-button-size) +
          (var(--modal-spacing) / 3 * 2)
        );
      }

      .c-modal__back-button i {
        font-family: 'icons';
        font-size: 1.4rem;
        font-style: normal;
        left: .025em;
        position: relative;
        text-transform: none;
      }

      .c-modal__close-button {
        float: right;
        margin-right: calc(var(--modal-spacing) / 2);
        margin-top: calc(var(--modal-spacing) / 2);
        padding-left: calc(var(--modal-spacing) / 3);
        padding-right: calc(var(--modal-spacing) / 3);
      }

      @media (min-width: 45em) {

        .c-modal__close-button {
          grid-gap: 0.25rem;
          grid-template-columns: 1fr var(
            --modal-button-size
          );
        }

      }

      .c-modal__close-button span {
        display: none;
      }

      @media (min-width: 45em) {

        .c-modal__close-button span {
          display: inline-block;
          margin-top: 1px;
        }

      }

      .c-modal__close-button i {
        height: var(--modal-button-size);
        position: relative;
        text-align: center;
      }

      .c-modal__close-button i::before,
      .c-modal__close-button i::after {
        background-color: var(
          --modal-button-color-fg
        );
        content: '';
        height: 100%;
        margin: auto;
        position: absolute;
        transform-origin: center;
        width: var(--modal-button-thickness);
      }

      .c-modal__close-button i::before {
        transform: rotate(-45deg);
      }

      .c-modal__close-button i::after {
        transform: rotate(45deg);
      }

      .c-modal__content {
        position: absolute;
        width: 100%;
      }
    `;
      }

      static get properties() {
        return {
          open: {
            type: Boolean,
            attribute: true
          }
        };
      }

      constructor() {
        super();
        this.open = false;
      }

      firstUpdated() {
        this._setup();

        dialogPolyfill.registerDialog(this._dialogEl);
        window.addEventListener('click', e => {
          const target = e.target.closest('[data-modal-target=' + this._triggerData + ']');

          if (target) {
            this.showModal();
          }
        }, true);
        this.shadowRoot.addEventListener('click', e => {
          if (e.target.closest('.c-modal__back-button')) {
            this.close();
          }

          if (e.target.closest('.c-modal__close-button')) {
            this.close();
          }
        });

        this._dialogEl.addEventListener('close', () => {
          this._handleClose();
        });

        this._dialogEl.classList.add('is-closed');

        this.open ? this.showModal() : this._dialogEl.classList.add('is-closed');
      }

      showModal() {
        this._open();
      }

      close() {
        this._dialogEl.close();
      }

      _setup() {
        const styles = window.getComputedStyle(this);
        this._documentEl = document.documentElement;
        this._triggerData = this.dataset.modalTrigger;
        this._triggerEl = document.querySelector('[data-modal-target=' + this._triggerData + ']' + '[data-modal-trigger-primary]');
        this._triggerParent = this._triggerEl.parentElement;
        this._dialogEl = this.shadowRoot.querySelector('dialog');
        this._closeButtonEl = this._dialogEl.querySelector('.c-modal__close-button');
        this._triggerDuration = parseFloat(styles.getPropertyValue('--modal-trigger-transition-duration')) * 1000;
        this._modalDuration = parseFloat(styles.getPropertyValue('--modal-transition-duration')) * 1000;
      }

      _open() {
        this._triggerEl.classList.add('is-expanded');

        this._triggerParent.style.zIndex = '9';
        setTimeout(() => {
          this.setAttribute('open', '');

          this._dialogEl.showModal();

          this._dialogEl.classList.remove('is-closed');

          this._dialogEl.classList.add('is-opening');

          this._documentEl.style.overflow = 'hidden';

          this._dialogEl.classList.remove('is-opening');

          this._dialogEl.classList.add('is-open');
        }, this._triggerDuration);
      }

      _handleClose() {
        this.removeAttribute('open');

        this._dialogEl.classList.remove('is-open');

        this._dialogEl.classList.add('is-closing');

        setTimeout(() => {
          this._documentEl.style.overflow = '';

          this._dialogEl.classList.remove('is-closing');

          this._dialogEl.classList.add('is-closed');

          this._triggerEl.classList.remove('is-expanded');

          setTimeout(() => {
            this._triggerParent.style.zIndex = '';
          }, this._triggerDuration);
        }, this._modalDuration);
      }

      render() {
        return html`
      <dialog class="c-modal__body">
        <button class="c-modal__back-button">
          <i>l</i>
        </button>
        <button class="c-modal__close-button">
          <span> Close </span>
          <i></i>
        </button>
        <section class="c-modal__content">
          <slot> </slot>
        </section>
      </dialog>
    `;
      }

    }

    /*
     *  Components - Loader
     */
    class Loader extends LitElement {
      static get styles() {
        return css`

      :host {
        --loader-color-bg: var(--color-bg);
      }

      :host,
      ::slotted(*) {
        height: 100vh;
        left: 0;
        top: 0;
        transition: opacity var(--transition-duration);
        width: 100%;
        z-index: 9;
      }

      :host {
        background-color: var(--loader-color-bg);
        position: fixed;
        height: 100%;
        width: 100%;
      }

      ::slotted(*) {
        align-content: center;
        cursor: progress;
        display: grid;
        grid-template-columns: 100px;
        grid-template-rows: min-content;
        justify-content: center;
        position: absolute;
      }

    `;
      }

      constructor() {
        super();
        document.documentElement.style.position = 'fixed';
        this.check();
        const observer = new MutationObserver(mutations => {
          mutations.forEach(mutation => {
            if (mutation.type === 'attributes') {
              this.check();
            }
          });
        });
        observer.observe(document.documentElement, {
          attributes: true
        });
      }

      check() {
        const isPreloaded = document.documentElement.dataset.preloaded;

        if (isPreloaded) {
          this.disable();
        }
      }

      disable() {
        const mainEl = document.querySelector('main');
        const mainIsTransparent = mainEl.classList.contains('u-transparent');
        document.documentElement.style.position = '';

        if (mainIsTransparent) {
          mainEl.classList.remove('u-transparent');
        }

        setTimeout(() => {
          this.style.opacity = 0;
          this.style.pointerEvents = 'none';
        }, 800);
        setTimeout(() => {
          this.style.display = 'none';
        }, 2000);
      }

      render() {
        return html` <slot> </slot> `;
      }

    }

    /*
     *  Scripts - Main
     */
    customElements.define('c-top-bar', TopBar);
    customElements.define('c-hero', Hero);
    customElements.define('c-theme-switch', ThemeSwitch);
    customElements.define('c-squiggle', Squiggle);
    customElements.define('c-section-header', SectionHeader);
    customElements.define('c-glitch-image', GlitchImage);
    customElements.define('c-modal', Modal);
    customElements.define('c-loader', Loader);
    const preloadingImages = ['/images/Loader.svg', '/images/Me-Dark.jpg', '/images/Me-Light.jpg', '/images/Hero-Paint-1-Dark.jpg', '/images/Hero-Paint-1-Light.jpg', '/images/Hero-Paint-2-Dark.jpg', '/images/Hero-Paint-2-Light.jpg', '/images/Noise-Clear.svg'];
    webfontloader.load({
      classes: false,
      custom: {
        families: ['work_sanslight', 'work_sansregular', 'work_sansmedium', 'work_sanssemibold', 'league_monoregular', 'syneextrabold', 'synebold', 'icons'],
        timeout: 4000
      },
      inactive: () => {
        handleFontPreloadFailure();
      },
      active: () => {
        handleFontPreload();
      }
    });

    function handleFontPreload() {
      console.log('Webfonts preloaded ...');
      const documentEl = document.documentElement;
      documentEl.dataset.fontsPreloaded = 'true';
    }

    function handleFontPreloadFailure() {
      console.log('Webfonts didn\'t load ...');
      const documentEl = document.documentElement;
      documentEl.dataset.fontsPreloaded = 'false';
    }

    function handleElPreload() {
      const documentEl = document.documentElement;
      const count = documentEl.dataset.elementsPreloaded;
      documentEl.dataset.elementsPreloaded = count ? parseInt(count) + 1 : 1;
    }

    function handleImagePreload() {
      const documentEl = document.documentElement;
      const count = documentEl.dataset.imagesPreloaded;
      documentEl.dataset.imagesPreloaded = count ? parseInt(count) + 1 : 1;
    }

    function setupPreloadImages() {
      const imageLinks = preloadingImages;
      imageLinks.forEach(link => {
        const image = new Image();
        image.addEventListener('load', () => {
          handleImagePreload();
        });
        image.src = link;
      });
    }

    function preloadElements() {
      const documentEl = document.documentElement;
      const preloadCount = document.querySelectorAll('[data-preload]').length;
      const preloadedCount = parseInt(documentEl.dataset.elementsPreloaded);
      const elsLoaded = preloadedCount === preloadCount;

      if (elsLoaded) {
        documentEl.dataset.elementsPreloaded = 'true';
        console.log('Elements preloaded ...');
      }
    }

    function preloadImages() {
      const documentEl = document.documentElement;
      const preloadCount = preloadingImages.length;
      const preloadedCount = parseInt(documentEl.dataset.imagesPreloaded);
      const imagesPreloaded = preloadedCount === preloadCount;

      if (imagesPreloaded) {
        documentEl.dataset.imagesPreloaded = 'true';
        console.log('Images preloaded ...');
      }
    }

    function observePreload() {
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type === 'attributes') {
            handlePreload();
          }
        });
      });
      observer.observe(document.documentElement, {
        attributes: true
      });
    }

    function handlePreload() {
      const documentEl = document.documentElement;
      const elsLoaded = documentEl.dataset.elementsPreloaded === 'true';
      const imagesLoaded = documentEl.dataset.imagesPreloaded === 'true';
      const fontsLoaded = documentEl.dataset.fontsPreloaded === 'true' || 'false';

      if (!elsLoaded) {
        preloadElements();
      }

      if (!imagesLoaded) {
        preloadImages();
      }

      if (elsLoaded && imagesLoaded && fontsLoaded) {
        delete documentEl.dataset.elementsPreloaded;
        delete documentEl.dataset.imagesPreloaded;
        delete documentEl.dataset.fontsPreloaded;
        documentEl.dataset.preloaded = true;
        setTimeout(() => {
          scramble();
        }, 250);
      }
    }

    function scramble() {
      scrambler({
        target: '[data-scrambler]',
        random: [1000, 1000],
        speed: 60
      });
    }

    setupPreloadImages();
    observePreload();
    render(html`

    <main class="u-transparent">

      <c-top-bar data-preload @load=${handleElPreload()}>
        <a
          slot="logo"
          href="/"
          title="Home"
        >
          <svg class="u-theme-fill" width="30" height="24">
            <title>David B. Waters Logo</title>
            <path
              d="M 6,0 V 24 H 0 V 0 Z m 24,12 v 6 l -6,6 V 12 Z M 18,0 v 18 l -6,6 V 0 Z m 12,0 v 6 l -6,6 V 0 Z"
            />
          </svg>
        </a>
        <a
          slot="link"
          href="mailto:mrdavidbwaters@gmail.com"
          title="Email"
        >
          <i class="c-icon c-icon--mail"></i>
        </a>
        <a
          slot="link"
          href="https://twitter.com/dbwatersdesigns"
          title="Twitter"
        >
          <i class="c-icon c-icon--twitter"></i>
        </a>
        <a
          slot="link"
          href="https://dribbble.com/dbwatersdesigns"
          title="Dribbble"
        >
          <i class="c-icon c-icon--dribbble"></i>
        </a>
        <a
          slot="link"
          href="https://github.com/davidbwaters"
          title="Github"
        >
          <i class="c-icon c-icon--github"></i>
        </a>
        <a
          slot="link"
          href="https://www.npmjs.com/~davidbwaters"
          title="NPM"
        >
          <i class="c-icon c-icon--npm"></i>
        </a>
      </c-top-bar>

      <c-hero
        class="u-bg-noise"
        @load=${handleElPreload()}
        data-preload
        id="hero"
      >
        <div slot="tagline">
          Artist & <br />
          Designer & <br />
          Developer
        </div>
        <div slot="name-stylized">DAVIDBWATERS</div>
        <div slot="heading">
          Building digital solutions to promote growth.
          <c-squiggle></c-squiggle>
        </div>
        <c-theme-switch slot="footer-box-left">
          <i class="c-icon c-icon--switch"></i>
        </c-theme-switch>
        <div slot="footer-content-left">
          <a
            class="c-icon c-icon--hand u-animation-wave u-text-large-2 u-margin-bottom-0"
            href="mailto:mrdavidbwaters@gmail.com"
            title="Get in Touch!"
          ></a>
          <span> Available Now! </span>
        </div>
        <div slot="footer-content-right">
          <a
            class="c-button"
            href="mailto:mrdavidbwaters@gmail.com"
          >
            Contact
          </a>
          <span>
            Start
            <span class="u-hidden@small">Your</span>
            Project!
          </span>
        </div>
        <div slot="footer-box-right">
          <a
            class="
              c-icon
              c-icon--arrow-down
            "
            href="#skills"
          ></a>
        </div>
        <hr slot="bottom" class="u-separator" />
      </c-hero>

      <section id="skills">
        <c-section-header class="u-bg-noise">
          <div slot="title">
            Skills
            <c-squiggle></c-squiggle>
          </div>
          <div slot="description">
            Skills, tools of the trade, and technologies I
            enjoy working with.
          </div>
        </c-section-header>
        <ul class="c-skill-list">
          <li class="c-skill-list__skill">
            <img
              class="c-skill-list__image"
              src="images/Elephant.png"
              alt="Elephant"
            />
            <div class="c-skill-list__text">
              <h4 class="c-skill-list__title u-text-title">
                Web Platform
              </h4>
              <span class="c-skill-list__gap"></span>
              <span class="c-skill-list__number u-text-title"
                >01</span
              >
              <span class="c-skill-list__description">
                Web Components, Applications, #UseThePlatform
              </span>
            </div>
          </li>
          <li class="c-skill-list__skill">
            <img
              class="c-skill-list__image"
              src="images/Lion.png"
              alt="Lion"
            />
            <div class="c-skill-list__text">
              <h4 class="c-skill-list__title u-text-title">
                Design
              </h4>
              <span class="c-skill-list__gap"></span>
              <span class="c-skill-list__number u-text-title"
                >02</span
              >
              <span class="c-skill-list__description">
                Figma, Sketch, Adobe CS**
              </span>
            </div>
          </li>
          <li class="c-skill-list__skill">
            <img
              class="c-skill-list__image"
              src="images/Squirrel.png"
              alt="Squirrel"
            />
            <div class="c-skill-list__text">
              <h4 class="c-skill-list__title u-text-title">
                Development
              </h4>
              <span class="c-skill-list__gap"></span>
              <span class="c-skill-list__number u-text-title"
                >03</span
              >
              <span class="c-skill-list__description">
                JS/ES*, Node.js, Jamstack
              </span>
            </div>
          </li>
          <li class="c-skill-list__skill">
            <img
              class="c-skill-list__image"
              src="images/Camel.png"
              alt="Camel"
            />
            <div class="c-skill-list__text">
              <h4 class="c-skill-list__title u-text-title">
                Consultation
              </h4>
              <span class="c-skill-list__gap"></span>
              <span class="c-skill-list__number u-text-title"
                >04</span
              >
              <span class="c-skill-list__description">
                Not sure where to start? I can help!
              </span>
            </div>
          </li>
        </ul>
        <hr class="u-separator-alternate c-hero__bottom" />
      </section>

      <section id="work">
        <c-section-header class="u-bg-noise u-z-index-3">
          <div slot="title">
            Selected <br />
            Works
            <c-squiggle></c-squiggle>
          </div>
          <div slot="description">
            A curated list of projects worked on and things I
            built.
          </div>
        </c-section-header>

        <ul
          class="
          c-work-list
          u-bg-pattern-diagonal
        "
        >

          <li class="c-work-list__item">
            <div data-sticky class="c-work-list__item-info">
              <div class="c-work-list__item-info-inner">
                <h4 class="c-work-list__item-info-title">
                  macOS Modern
                </h4>
                <div
                  class="
                    c-work-list__item-info-taglist
                    u-text-title
                  "
                >
                  Techologies Used: Frontend Development
                </div>
                <div
                  class="
                    c-work-list__item-info-description
                  "
                >
                  <p>
                    A popular Visual Studio Code theme to match
                    native macOS.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="
                c-work-list__item-preview
                u-cursor-zoom-in"
              data-modal-target="modal-macos-modern"
            >
              <c-glitch-image
                src="images/Work/macOS Modern All.jpg"
                alt="macOS Modern Light Theme Screenshot"
                glitch=2
                width="800"
                height="600"
              >
              </c-glitch-image>
              <c-glitch-image
                src="images/Work/macOS Modern Dark 1.jpg"
                alt="macOS Modern Dark Theme Screenshot"
                glitch=2
                width="800"
                height="600"
              >
              </c-glitch-image>
            </div>
            <div class="c-work-list__item-lower-three">
              <a
                class="c-button"
                href="https://github.com/davidbwaters/macos-modern-vscode-theme"
                title="macOS Modern Github Repo Link"
              >
                <i
                  class="
                    c-icon
                    c-icon--github
                  "
                ></i>
                Star on Github
              </a>

              <button
                class="c-button"
                data-modal-target="modal-macos-modern"
                data-modal-trigger-primary
              >
                <i
                  class="
                    c-icon
                    c-icon--expand
                  "
                ></i>
                Show More
              </button>

              <a
                class="c-button"
                href="https://marketplace.visualstudio.com/items?itemName=davidbwaters.macos-modern-theme"
                title="VSCode Market Link"
              >
                <i
                  class="
                    c-icon
                    c-icon--microsoft
                  "
                ></i>
                VSC Market Link
              </a>

              <c-modal
                data-modal-trigger="modal-macos-modern"
              >
                <c-section-header
                  class="u-bg-noise u-z-index-3"
                >
                  <div slot="title">
                    macOS Modern
                    <c-squiggle></c-squiggle>
                  </div>
                  <div slot="description" class="u-text-title">
                      Techologies Used: Frontend Development
                  </div>
                </c-section-header>

                <div
                  class="
                  c-media-grid
                  u-bg-pattern-diagonal-alternate
                "
                >
                  <article
                    class="c-media-grid__text-item-wide"
                  >
                    <p>
                      I created the macOS Modern Visual Studio
                      Code theme to enable users to experience
                      the best code editor while maintaining a
                      native-like look and feel.
                    </p>
                    <p>
                      The theme includes multiple icon sets
                      and a matching light and dark app icon.
                    </p>
                    <p>
                      At the time of this writing, it has over
                      22 thousand installs.
                    </p>
                  </article>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/macOS Modern All.jpg"
                      alt="macOS Modern All Color Schemes"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/macOS Modern Light 1.jpg"
                      alt="macOS Modern Light 1"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/macOS Modern Dark 1.jpg"
                      alt="macOS Modern Dark 1"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/macOS Modern Light 2.jpg"
                      alt="macOS Modern Light 2"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/macOS Modern Dark 2.jpg"
                      alt="macOS Modern Dark 2"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/macOS Modern Icons.jpg"
                      alt="macOS Modern App Icons"
                    />
                  </div>
                </div>
              </c-modal>
            </div>
          </li>

          <li class="c-work-list__item">
            <div data-sticky class="c-work-list__item-info">
              <div class="c-work-list__item-info-inner">
                <h4 class="c-work-list__item-info-title">
                  Limber Logic Brand Identity
                </h4>
                <div
                  class="
                    c-work-list__item-info-taglist
                    u-text-title
                  "
                >
                  Techologies Used: Adobe Illustrator
                </div>
                <div
                  class="
                    c-work-list__item-info-description
                  "
                >
                  <p>
                    I created the brand identity for Limber
                    Logic, a digital product design company
                    in Charleston.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="
                c-work-list__item-preview
                u-cursor-zoom-in"
              data-modal-target="modal-limber-logic"
            >
              <c-glitch-image
                src="images/Work/Limber Logic Mockup Dark.jpg"
                alt="Limber Logic Logo Mockup Dark"
                glitch=2
                width="800"
                height="600"
              >
              </c-glitch-image>
              <c-glitch-image
                  src="images/Work/Limber Logic Both.svg"
                  alt="Limber Logic Logo Dark and Light Versions"

                  glitch=2
                  width="800"
                  height="600"
                >
              </c-glitch-image>
            </div>
            <div class="c-work-list__item-lower">

              <button
                class="c-button"
                data-modal-target="modal-limber-logic"
                data-modal-trigger-primary
              >
                <i
                  class="
                    c-icon
                    c-icon--expand
                  "
                ></i>
                Show More
              </button>

              <c-modal
                data-modal-trigger="modal-limber-logic"
              >
                <c-section-header
                  class="u-bg-noise u-z-index-3"
                >
                  <div slot="title">
                    Limber Logic Identity
                    <c-squiggle></c-squiggle>
                  </div>
                  <div slot="description" class="u-text-title">
                    Techologies Used: Adobe Illustrator
                  </div>
                </c-section-header>

                <div
                  class="
                  c-media-grid
                  u-bg-pattern-diagonal-alternate
                "
                >
                  <article
                    class="c-media-grid__text-item-wide"
                  >
                    <p>
                      I created the brand identity for
                      Limber Logic, a digital product design
                      company in Charleston. I wanted the
                      branding to have a sleek, techy,
                      aesthetic.
                    </p>
                    <p>
                      Limber Logic was the collaboration of
                      my friend as Lead Developer and me as
                      Lead Designer. We worked on various
                      projects and I learned a lot in my
                      time there.
                    </p>
                  </article>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Limber Logic Light.jpg"
                      alt="Limber Logic Logo Light"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Limber Logic Dark.jpg"
                      alt="Limber Logic Logo Dark"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Limber Logic Mockup Dark.jpg"
                      alt="Limber Logic Mockup Dark"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Limber Logic Mockup Light.jpg"
                      alt="Limber Logic Mockup Light"
                    />
                  </div>
                </div>
              </c-modal>
            </div>
          </li>

          <li class="c-work-list__item">
            <div data-sticky class="c-work-list__item-info">
              <div class="c-work-list__item-info-inner">
                <h4 class="c-work-list__item-info-title">
                  Map Dashboard
                </h4>
                <div
                  class="
                    c-work-list__item-info-taglist u-text-title
                  "
                >
                  Techologies Used: Figma, Javascript, React
                </div>
                <div
                  class="c-work-list__item-info-description"
                >
                  <p>
                    UI created for an in-development web and
                    mobile app for land developers.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="
                c-work-list__item-preview
                u-cursor-zoom-in
              "
              data-modal-target="modal-map-dashboard"
            >
              <c-glitch-image
                src="images/Work/Map Browser.jpg"
                alt="Map Dashboard in a Browser"
                glitch=2
                width="912"
                height="712"
              >
              </c-glitch-image>
              <c-glitch-image
                src="images/Work/Map Figma.jpg"
                alt="Map Dashboard in Figma"
                glitch=2
                width="912"
                height="712"
              >
              </c-glitch-image>
            </div>

            <div class="c-work-list__item-lower">
              <button
                class="c-button c-button--block"
                data-modal-target="modal-map-dashboard"
                data-modal-trigger-primary
              >
                <i
                  class="
                    c-icon
                    c-icon--expand
                  "
                ></i>
                Show More
              </button>

              <c-modal data-modal-trigger="modal-map-dashboard">
                <c-section-header
                  class="u-bg-noise u-z-index-3"
                >
                  <div slot="title">
                    Map Dashboard
                    <c-squiggle></c-squiggle>
                  </div>
                  <div slot="description" class="u-text-title">
                      Techologies Used: Figma, Javascript, React
                  </div>
                </c-section-header>
                <div
                  class="c-media-grid u-bg-pattern-diagonal-alternate"
                >
                  <article
                    class="c-media-grid__text-item-wide"
                  >
                    <p>
                      These shots were created for an
                      in-development web and mobile app
                      for land developers.
                    </p>
                    <p>
                      I was recruited to improve the overall
                      user experience and help design the map
                      interface. I used Figma to create
                      wireframes, mockups, and a component
                      system.
                    </p>
                    <p>
                      I also helped the team refine the
                      React-based frontend during a sprint
                      before a deadline.
                    </p>
                  </article>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Map Browser.jpg"
                      alt="Map Dashboard in Browser"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Map Components.jpg"
                      alt="Map Dashboard Components"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Map Figma.jpg"
                      alt="Map Dashboard Figma Project"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Map Wireframe.jpg"
                      alt="Map Dashboard Mockup"
                    />
                  </div>
                </div>
              </c-modal>
            </div>
          </li>

          <li class="c-work-list__item">
            <div></div>
            <div data-sticky class="c-work-list__item-info">
              <div class="c-work-list__item-info-inner">
                <h4 class="c-work-list__item-info-title">
                  Personal Branding
                </h4>
                <div
                  class="
                    c-work-list__item-info-taglist u-text-title
                  "
                >
                  Techologies Used: Adobe Illustrator
                </div>
                <div
                  class="c-work-list__item-info-description"
                >
                  <p>
                    Collection of logo variations created as
                    part of a personal branding update.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="c-work-list__item-preview u-cursor-zoom-in"
              data-modal-target="modal-logos"
            >
              <c-glitch-image
                src="images/Work/Personal Branding Mockup 1.jpg"
                alt="Personal Branding VHS Mockup"
                glitch=2
                width="912"
                height="712"
              >
              </c-glitch-image>
              <c-glitch-image
                src="images/Work/Personal Branding All 2.jpg"
                alt="Personal Branding Logos Dark BG"
                glitch=2
                width="912"
                height="712"
              >
              </c-glitch-image>
            </div>

            <div class="c-work-list__item-lower">
              <button
                class="c-button c-button--block"
                data-modal-target="modal-logos"
                data-modal-trigger-primary
              >
                <i
                  class="
                    c-icon
                    c-icon--expand
                  "
                ></i>
                Show More
              </button>

              <c-modal data-modal-trigger="modal-logos">
                <c-section-header
                  class="u-bg-noise u-z-index-3"
                >
                  <div slot="title">
                    Personal Branding
                    <c-squiggle></c-squiggle>
                  </div>
                  <div slot="description" class="u-text-title">
                      Techologies Used: Adobe Illustrator
                  </div>
                </c-section-header>
                <div
                  class="c-media-grid u-bg-pattern-diagonal-alternate"
                >
                  <article
                    class="c-media-grid__text-item-wide"
                  >
                    <p>
                      This is a collection of logo variations
                      created as part of a personal branding
                      update.
                    </p>
                    <p>
                      This project was a great exercise in
                      using the process of rapid iteration to
                      develop a final product.
                    </p>
                  </article>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Personal Branding Mockup 1.jpg"
                      alt="Personal Branding VHS Mockup"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Personal Branding Mockup 2.jpg"
                      alt="Personal Branding Stamp Mockup"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Personal Branding All 1.jpg"
                      alt="All Personal Branding Logos Dark"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Personal Branding All 2.jpg"
                      alt="All Personal Branding Logos Light"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Personal Branding Logo Final.jpg"
                      alt="Selected Personal Branding Logo"
                    />
                    <span
                      class="c-media-grid__image-caption-alternate"
                    >
                      This was the version I ended up using.
                    </span>
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Personal Branding Logo Alt 1.jpg"
                      alt="Personal Branding Alternate Logo 1"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Personal Branding Logo Alt 2.jpg"
                      alt="Personal Branding Alternate Logo 2"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Personal Branding Logo Alt 3.jpg"
                      alt="Personal Branding Alternate Logo 3"
                    />
                  </div>
                </div>

              </c-modal>
            </div>
          </li>

          <li class="c-work-list__item">
            <div data-sticky class="c-work-list__item-info">
              <div class="c-work-list__item-info-inner">
                <h4 class="c-work-list__item-info-title">
                  Substructure ITCSS Framework
                </h4>
                <div
                  class="
                    c-work-list__item-info-taglist
                    u-text-title
                  "
                >
                  Techologies Used: CSS/SASS, BEM, ITCSS, Lerna
                </div>
                <div
                  class="
                    c-work-list__item-info-description
                  "
                >
                  <p>
                    My modular CSS boilerplate inspired by
                    the work of Harry Roberts and others
                    with modern features sprinkled in.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="
                c-work-list__item-preview
                u-bg-color-muted"
            >
              <c-glitch-image
                src="images/Work/Substructure Text.svg"
                alt="Substructure Text Logo"
                class="
                  u-max-width-30
                "
                glitch=2
                width="800"
                height="600"
              >
              </c-glitch-image>
              <c-glitch-image
                src="images/Work/Substructure Shot.jpg"
                alt="Substructure Code Editor Screenshot"
                class="
                  u-max-width-30
                "
                glitch=2
                width="800"
                height="600"
              >
              </c-glitch-image>
            </div>
            <div class="c-work-list__item-lower">
              <a
                class="c-button"
                href="https://github.com/davidbwaters/substructure"
                title="Substructure Github Repo Link"
              >
                <i
                  class="
                  c-icon
                  c-icon--github
                "
                ></i>
                Star on Github
              </a>
              <a
                class="c-button"
                href="https://www.npmjs.com/settings/substructure/packages"
                title="Substructure NPM Link"
              >
                <i
                  class="
                  c-icon
                  c-icon--npm
                "
                ></i>
                NPM Packages
              </a>
            </div>
          </li>

          <li class="c-work-list__item">
            <div data-sticky class="c-work-list__item-info">
              <div class="c-work-list__item-info-inner">
                <h4 class="c-work-list__item-info-title">
                  Yippy Clipboard Manager
                </h4>
                <div
                  class="
                    c-work-list__item-info-taglist
                    u-text-title
                  "
                >
                  Techologies Used: Figma, Adobe Illustrator
                </div>
                <div
                  class="
                    c-work-list__item-info-description
                  "
                >
                  <p>
                    I contributed app and UI icons to an
                    open-source clipboard manager for macOS
                    made by Matt Davidson.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="
                c-work-list__item-preview
                u-cursor-zoom-in"
              data-modal-target="modal-yippy"
            >
              <c-glitch-image
                src="images/Work/Yippy 1.jpg"
                alt="Yippy Icon for macOS Big Sur"
                glitch=2
                width="800"
                height="600"
              >
              </c-glitch-image>
              <c-glitch-image
                src="images/Work/Yippy Menu Bar.jpg"
                alt="Yippy Menu Bar Icon"
                glitch=2
                width="800"
                height="600"
              >
              </c-glitch-image>
            </div>
            <div class="c-work-list__item-lower">
              <a
                class="c-button"
                href="https://github.com/mattDavo/Yippy"
                title="Yippy Github Repo Link"
              >
                <i
                  class="
                    c-icon
                    c-icon--github
                  "
                ></i>
                Star on Github
              </a>
              <button
                class="c-button"
                data-modal-target="modal-yippy"
                data-modal-trigger-primary
              >
                <i
                  class="
                    c-icon
                    c-icon--expand
                  "
                ></i>
                Show More
              </button>

              <c-modal
                data-modal-trigger="modal-yippy"
              >
                <c-section-header
                  class="u-bg-noise u-z-index-3"
                >
                  <div slot="title">
                    macOS Modern
                    <c-squiggle></c-squiggle>
                  </div>
                  <div slot="description" class="u-text-title">
                    Techologies Used: Figma, Adobe Illustrator
                  </div>
                </c-section-header>

                <div
                  class="
                  c-media-grid
                  u-bg-pattern-diagonal-alternate
                "
                >
                  <article
                    class="c-media-grid__text-item-wide"
                  >
                    <p>
                      I contributed icons to an
                      open-source clipboard manager for
                      macOS made by Matt Davidson.
                    </p>
                    <p>
                      I created a menu bar icon and three
                      reversions of the app icon, included an
                      updated version for macOS Big Sur.
                      This project adheres to Apple's design
                      guidelines.
                    </p>
                  </article>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Yippy 1.jpg"
                      alt="Yippy Big Sur Icon"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Yippy Menu Bar.jpg"
                      alt="Yippy Menu Bar Icon"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Yippy 2.jpg"
                      alt="Yippy Updated Icon"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Yippy 3.jpg"
                      alt="Yippy Original Icon"
                    />
                  </div>
                </div>
              </c-modal>
            </div>
          </li>

          <!--
            <li class="c-work-list__item">
              <div data-sticky class="c-work-list__item-info">
                <div class="c-work-list__item-info-inner">
                  <h4 class="c-work-list__item-info-title">
                    Artwork
                  </h4>
                  <div
                    class="
                      c-work-list__item-info-taglist
                      u-text-title
                    "
                  >
                    Techologies Used: Adobe Photoshop, Adobe Illustrator, Figma, Blender
                  </div>
                  <div
                    class="
                      c-work-list__item-info-description
                    "
                  >
                    <p>
                      Miscellaneous digital art.
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="
                  c-work-list__item-preview
                  u-cursor-zoom"
                data-modal-target="modal-artwork"
              >
                <c-glitch-image
                  src="images/Work/Art Me.jpg"
                  alt="Artwork Me"
                  class="
                    u-max-width-30
                  "
                  glitch=2
                  width="1024"
                  height="1024"
                >
                </c-glitch-image>
                <c-glitch-image
                  src="images/Work/Art Melted.jpg"
                  alt="Artwork Melted"
                  glitch=2
                  width="1024"
                  height="1024"
                >
                </c-glitch-image>
              </div>
              <div class="c-work-list__item-lower">
                <button
                  class="c-button"
                  data-modal-target="modal-artwork"
                  data-modal-trigger-primary
                >
                  <i
                    class="
                      c-icon
                      c-icon--expand
                    "
                  ></i>
                  Show More
                </button>

                <c-modal
                  data-modal-trigger="modal-artwork"
                >
                  <c-section-header
                    class="u-bg-noise u-z-index-3"
                  >
                    <div slot="title">
                      Artwork
                      <c-squiggle></c-squiggle>
                    </div>
                    <div slot="description" class="u-text-title">
                      Techologies Used: Adobe Photoshop,
                      Adobe Illustrator, Figma, Blender
                    </div>
                  </c-section-header>

                  <div
                    class="
                    c-media-grid
                    u-bg-pattern-diagonal-alternate
                  "
                  >
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Chuck 1.jpg"
                        alt="Artwork Charleston 1"
                      />
                    </div>
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Chuck 2.jpg"
                        alt="Artwork Charleston 2"
                      />
                    </div>
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Melted.jpg"
                        alt="Artwork Abstract Melted"
                      />
                    </div>
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Me.jpg"
                        alt="Artwork Me Abstract"
                      />
                    </div>
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Statue.jpg"
                        alt="Artwork Statue"
                      />
                    </div>
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Pyramids.jpg"
                        alt="Artwork Pyramics"
                      />
                    </div>
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Vapor.jpg"
                        alt="Artwork Vaporwave"
                      />
                    </div>
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Church.jpg"
                        alt="Artwork Church"
                      />
                    </div>
                  </div>
                </c-modal>

              </div>
            </li>
          -->
        </ul>
      </section>

      <footer class="c-page-footer u-bg-noise">
        <hr class="u-separator-alternate u-margin-0" />
        <div class="c-page-footer__upper u-text-large-1">
          Made with <3 by David B Waters in 2020.
        </div>
        <div class="c-page-footer__lower">
          <small class="u-text-bolder">
            This site's source code is freely available under
            the MIT license
            <a
              href="https://github.com/davidbwaters/davidbwaters.github.io"
              title="This Site's Github Repo Link"
            >here</a>.
            <br>
            Stay tuned! It's still very much a
            work in progress.
          </small>
        </div>
      </footer>
    </main>

    <c-loader>
      <div class="u-bg-noise-heavy">
        <c-glitch-image
          src="images/Loader.svg"
          active
          glitch=1
          width="100"
          height="100"
        >
        </c-glitch-image>
      </div>
    </c-loader>
  `, document.body);

}());
