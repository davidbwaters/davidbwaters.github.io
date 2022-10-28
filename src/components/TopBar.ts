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
      height: 80px;
      padding-bottom: .5rem;
      padding-left: .75rem;
      padding-right: .75rem;
      padding-top: .5rem;
      place-content: center space-between;
      pointer-events: none;
      position: fixed;
      width: 100%;
      z-index: 9;
    }

    @media (min-width: 25em) {
      :host {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
      }
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
      grid-gap: .4em;
      transform: translatex(0);
    }

    @media (min-width: 25em) {

      .c-top-bar__nav {
        grid-gap: 0.5em;
      }

    }

    @media (min-width: 45em) and (min-height: 30em) {

      :host {
        align-items: start;
        place-content: start space-between;
      }
      .c-top-bar__nav {
        grid-auto-flow: row;
        grid-gap: .6em;
      }

    }

    ::slotted([slot='link']),
    ::slotted([slot='logo']) {
      pointer-events: all;
    }

    ::slotted([slot='link']) {
      display: grid;
      height: 1em;
      padding: .1em 0 0 0;
      text-align: center;
      text-decoration: none;
    }

    ::slotted([slot='logo']) {
      display: grid;
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

