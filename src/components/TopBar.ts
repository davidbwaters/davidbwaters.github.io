/*
 *  Components - Top Bar
 */


import {
  LitElement,
  html,
  css
} from 'lit'

import {
  customElement
} from 'lit/decorators.js';


@customElement('c-top-bar')

export class CTopBar extends LitElement {

  static styles = css`

    :host {
      --top-bar-logo-size: 1.4rem;

      display: grid;
      grid-template-columns: min-content min-content;
      height:calc((var(--spacing-size-2) * 2) + var(--top-bar-logo-size));
      padding-left: var(--spacing-size-2);
      padding-right: var(--spacing-size-2);
      padding-bottom: var(--spacing-size-2);
      padding-top: var(--spacing-size-2);
      place-content: center space-between;
      place-items: center;
      pointer-events: none;
      position: fixed;
      width: 100%;
      z-index: 9;
    }

    @media (min-width: 30em) {
      :host {
        --top-bar-logo-size: 1.75rem;
      }
    }

    @media (min-width: 48em) and (min-height: 30em) {

      :host {
        align-items: start;
        place-content: start space-between;
      }

    }

    .c-top-bar__nav,
    ::slotted([slot='link']) {
      display: grid;
      grid-auto-flow: column;
      grid-gap: var(--spacing-size-1);
      transform: translatex(0);
    }

    @media (min-width: 48em) and (min-height: 30em) {

      .c-top-bar__nav,
      ::slotted([slot='link']) {
        grid-auto-flow: row;
      }

    }

    ::slotted([slot='logo']),
    ::slotted([slot='link']) {
      display: grid !important;
      pointer-events: all;
    }

    ::slotted([slot='logo']) {
      grid-template-rows: 100%;
      width: var(--top-bar-logo-size);
    }

    @media (min-width: 30em) {
      ::slotted([slot='logo']) {
        height: var(--top-bar-logo-size);
        width: var(--top-bar-logo-size);
      }
    }

    ::slotted([slot='link']) {
      font-size: 125%;
      grid-gap: calc(var(--spacing-size-1) * 1.5);
      height: 1em;
      padding: 0 0 0 0;
      text-align: center;
      text-decoration: none;
    }


    @media (min-width: 48em) {

      ::slotted([slot='link']) {
        width: var(--top-bar-logo-size);
      }
    }

  `

  render() {

    return html`
      <slot name="logo"> </slot>
      <nav class="c-top-bar__nav">
        <slot name="link"> </slot>
      </nav>
    `

  }

}

declare global {
  interface HTMLElementTagNameMap {
    "c-top-bar": CTopBar;
  }
}

