/*
 *  Components - Section Header
 */
import { LitElement, html, css } from '../../modules/lit-element.js';
export class SectionHeader extends LitElement {
  static get styles() {
    return css`
      :host {
        --title-font: var(--font-display);
        --title-font-weight: var(--font-display-weight);

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
        font-family: var(--title-font);
        font-weight: var(--title-font-weight);
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