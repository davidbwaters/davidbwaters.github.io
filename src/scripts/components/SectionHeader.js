/*
 *  Components - Section Header
 */

import { LitElement, html, css } from 'lit-element'

export class SectionHeader extends LitElement {

  static get styles() {

    return css`
      :host {
        --title-font: var(--font-display);
        --title-font-weight: var(--font-display-weight);

        display: block;
        text-align: center;
      }

      ::slotted([slot="title"]) {
        box-sizing: border-box;
        display: block;
        font-size: 2.0736rem;
        font-size: clamp(2.0736rem, 32.832px + 0.108vw, 2.16rem);
        font-family: var(--title-font);
        font-weight: var(--title-font-weight);
        line-height: 1.25;
        padding-bottom: 3rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 4rem;
        text-transform: uppercase;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--color-fg);
      }

      @media (min-width:45em) {
        ::slotted([slot="title"]) {
          padding-left: 6rem;
          padding-right: 6rem;
        }
      }

      ::slotted([slot="description"]) {
        box-shadow: 0 0 0 1px var(
          --color-fg-subtle-alternate
        );
        padding-bottom: 1.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 1.5rem;
      }
    `

  }

  constructor() {

    super()


  }

  render() {

    return html`
      <slot name="title">
      </slot>
      <slot name="description">
      </slot>
    `

  }

}
