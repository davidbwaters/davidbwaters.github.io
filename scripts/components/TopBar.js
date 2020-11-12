/*
 *  Components - Top Bar
 */
import { LitElement, html, css } from '../../modules/lit-element.js';
export class TopBar extends LitElement {
  static get styles() {
    return css`
      
      :host {
        display: flex;
        justify-content: space-between;
        max-height: 72px;
        padding: 1.5rem;
        position: fixed;
        width: 100%;
        z-index: 2;
      }
      
      .c-top-bar__nav {
        display: flex;
        font-size: 125%;
        transform: translatex(.25rem);
      }

      @media (min-width:45em) {

        .c-top-bar__nav {
          flex-direction: column;
          transform: translatex(0);
        }
        
      }

      ::slotted([slot="logo"]) {
        height: 100%;
        width: 2rem;
      }
      
      ::slotted([slot="link"]) {
        padding: 0 .25rem;
        text-align: center;
        text-decoration: none;
        width: 1.75rem;
      }

      @media (min-width:45em) {

        ::slotted([slot="link"]) {
          padding: 0;
          width: auto;
        }
        
      }
      
    `;
  }

  render() {
    return html`
      <slot name="logo">
      </slot>
      <nav class="c-top-bar__nav">
        <slot name="link">
        </slot>
      </nav>
    `;
  }

}