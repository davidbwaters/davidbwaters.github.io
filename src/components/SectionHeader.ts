/*
 *  Components - Section Header
 */

import {
  LitElement,
  html,
  css
} from 'lit'

import {
  customElement
} from 'lit/decorators.js';


@customElement('c-section-header')

export class CSectionHeader extends LitElement {

  static styles = css`
    :host  {
      --section-header-title-font: var(--font-display);
      --section-header-title-font-weight: var(--font-display-weight);

      background: var(--color-bg);
      box-shadow: var(--shadow-md);
      display: block;
      position: relative;
      text-align: center;
      will-change: transform, opacity;
      z-index: 8;
    }

    ::slotted([slot='title']),
    ::slotted([slot='description']) {
      box-sizing: border-box;
      display: block;
    }

    ::slotted([slot='title']) {
      display: grid;
      filter: url('#animate');
      font-family: var(--section-header-title-font), sans-serif !important;
      font-size: 1.5rem;
      font-size: clamp(1.2rem, 1rem + 2vw, 2.8rem);
      font-weight: var(--section-header-title-font-weight) !important;
      line-height: 1.25;
      margin: 0;
      overflow: hidden;
      padding-bottom: 2rem;
      padding-left: .5rem;
      padding-right: .5rem;
      padding-top: 2.5rem;
      place-content: center;
      text-transform: uppercase;
    }

    @media (min-width: 16em) {

      ::slotted([slot='title']) {
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1.25px;
        -webkit-text-stroke-color: var(--color-fg);
      }

    }


    @media (min-width: 25em) {

      ::slotted([slot='title']) {
        padding-bottom: calc(4vw + 2rem);
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: calc(4vw + 3rem);
      }
    }

    ::slotted([slot='description']) {
      box-shadow: 0 0 0 1px var(--color-subtle-alternate);
      font-size: .9em;
      padding-bottom: 1.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 1.5rem;
    }


    @media (min-width: 45em) {
      ::slotted([slot='description']) {
        font-size: 1em;
      }
    }
  `

  render() {

    return html`
      <slot name="title"> </slot>
      <slot name="description"> </slot>
    `

  }

}

declare global {
  interface HTMLElementTagNameMap {
    "c-section-header": CSectionHeader;
  }
}
