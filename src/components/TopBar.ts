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
      display: grid;
      grid-template-columns: min-content min-content;
      max-height: 72px;
      padding-bottom: 1rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 1rem;
      place-content: center space-between;
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
      grid-gap: 0rem;
      transform: translatex(0);
    }

    @media (min-width: 25em) {

      .c-top-bar__nav {
        grid-gap: 0.25rem;
      }

    }

    @media (min-width: 45em) and (min-height: 30em) {
      .c-top-bar__nav {
        grid-auto-flow: row;
        grid-gap: 0;
      }
    }

    ::slotted([slot='link']) {
      padding: 0 0rem;
      text-align: center;
      text-decoration: none;
      width: 1.5rem;
    }

    ::slotted([slot='logo']) {
      width: 1.4rem;
    }

    @media (min-width: 25em) {
      ::slotted([slot='logo']) {
        width: 1.75rem;
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

