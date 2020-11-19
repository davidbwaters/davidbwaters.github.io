/*
 *  Components - Top Bar
 */

import { LitElement, html, css } from 'lit-element'

export class TopBar extends LitElement {

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
      
      @media (min-height:35em) {

        :host {
          padding-bottom: 1.5rem;
          padding-top: 1.5rem;
        }

      }

      .c-top-bar__nav {
        display: grid;
        font-size: 125%;
        grid-auto-flow: column;
        grid-gap: .25rem;
        transform: translatex(0);
      }

      @media (min-width:45em) and (min-height:35em) {

        .c-top-bar__nav {
          grid-auto-flow: row;
          grid-gap: 0;
          transform: translatex(.25rem);
        }
        
      }
      
      ::slotted([slot="link"]) {
        padding: 0 .25rem;
        text-align: center;
        text-decoration: none;
      }
      
    `

  }

  render() {

    return html`
      <slot name="logo">
      </slot>
      <nav class="c-top-bar__nav">
        <slot name="link">
        </slot>
      </nav>
    `

  }

}
