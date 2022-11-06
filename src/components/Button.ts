/*
 *  Components - Button
 */

import { html, css, LitElement, PropertyValueMap } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { CIcon as IconType } from './Icon'

@customElement('c-button')

export class CButton extends LitElement {

  static styles = css`

    :host {

      --button-height: 2.66rem;
      display: inline-grid;
      height: var(--button-height);
      grid-template-rows: 100%;
      width: var(--button-width);
    }


    c-button .c-button {
      height: 100%;
    }

    .c-button {
      align-content: center;
      align-items: start;
      background-color: var(--color-button-bg);
      border-color: var(--color-subtle-contrast);
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      box-shadow: 0 2px 0 var(--color-subtle);
      color: var(--color-button-fg);
      cursor: pointer;
      display: inline-grid;
      font-family: var(--font-main-regular), sans-serif;
      font-weight: var(--font-main-regular-weight);
      font-size: var(--text-size-small-1);
      grid-auto-flow: column;
      grid-gap: var(--spacing-size-1);
      grid-template-rows: 0.8em;
      height: var(--button-height);
      justify-content: center;
      letter-spacing: .05em;
      line-height: 1;
      padding-left: calc(var(--spacing-size-2) * .8);
      padding-right: calc(var(--spacing-size-2) * .8);
      text-decoration: none;
      text-transform: uppercase;
      transition:
        all var(--transition-duration);
      will-change: box-shadow, opacity;
    }

    @media (min-width:48em) {

      .c-button {
        font-size: .75em;
        letter-spacing: .1em;
        padding-left: var(--spacing-size-2);
        padding-right: var(--spacing-size-2);
      }

      .c-button:has(i) {
        padding-left: calc(var(--spacing-size-2) * 1.1);
        padding-right: calc(var(--spacing-size-2) * 1.1);
      }
    }

    .c-button:active {
      box-shadow: 0 0px 0 var(--color-subtle);
      transform: translateY(2px);
    }

    .c-button:focus {
      outline: none;
    }

    .c-button:hover {
      background-color: var(--color-button-bg-hover);
      border-color: var(--color-subtle-contrast);
    }

    .c-button.is-expanded {
      background-color: var(--color-button-bg);
      box-shadow:
        0 0 0 100vmax
        var(--color-button-bg);
      border-color: var(--color-button-bg);
      color: var(--color-button-bg);
      position: relative;
      z-index: 9;
    }

    .c-button i,
    .c-button c-icon {
      align-self: center;

      font-size: 1.5em;
    }

    .c-button i {
      font-size: 1.5em;
    }

    .c-button--large,
    c-button .c-button--large {
      font-size: var(--text-size-normal);
      height: calc(var(--button-height) * 1.1);

      & i {
        font-size: var(--text-size-large-1);
      }
    }

    .c-button--block {
      width: 100%;
    }

  `
  @property ({
    converter: (value) => {
      return 'c-button--' + value
    }
  })
  variant = 'c-button--primary'

  @property({
    converter: (value) => {
      return 'c-button--' + value
    }
  })
  size = 'medium'

  @property()
  label = 'Label'

  @property()
  width = ''

  @property()
  onClick = null

  @property()
  icon: IconType["icon"] | 'none' = 'none'

  @property()
  href = null

  @property()
  title = ''

  @property({
    converter: (value) => {
      return value ? 'is-expanded' : ''
    }
  })
  isExpanded = ''

  protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (this.size !== 'c-button--large' && this.size !== 'c-button--small') {
      this.size = 'c-button--medium'
    }

    if (this.width && (
      this.width === 'full' || this.width === 'fill'
    )) {
      this.width = '100%'
    }
    if (this.width) {
      this.style.setProperty('--button-width', this.width)
    }
    else {
      this.style.setProperty('--button-width', 'auto')
    }

  }

  render() {

    return this.href
    ? html`
      <a
        class=${['c-button', this.size, this.variant, this.isExpanded].join(' ')}
        @click=${this.onclick}
        .href=${this.href}
        title=${this.title}
      >
      ${
        this.icon && this.icon !== 'none'
          ? html`<c-icon icon=${this.icon}></c-icon>`
          : ''
      }
        <span>${this.label}</span>
      </a>
    `

    : html`
      <button
        class=${['c-button', this.size, this.variant, this.isExpanded].join(' ')}
        @click=${this.onclick}
      >
      ${
        this.icon && this.icon !== 'none'
          ? html`<c-icon icon=${this.icon}></c-icon>`
          : ''
      }
        <span>${this.label}</span>
      </button>
    `;

  }

};

declare global {
  interface HTMLElementTagNameMap {
    "c-button": CButton;
  }
}
