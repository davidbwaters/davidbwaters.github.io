/*
 *  Components - Loader
 */

import { LitElement, html, css } from 'lit-element'

export class Loader extends LitElement {

  static get styles() {

    return css`
      
      :host {
        align-content: center;
        background-color: var(--loader-bg-color);
        background-image: var(--loader-bg-image);
        display: grid;
        grid-template-columns: 100px;
        grid-template-rows: min-content;
        height: 100vh;
        justify-content: center;
        position: fixed;
        top: 0;
        transition: opacity var(--transition-duration);
        width: 100vw;
        z-index: 9;
      }

    `

  }

  constructor() {

    super()

    window.addEventListener('load', () => {

      this.style.opacity = 0
      this.style.pointerEvents = 'none'

      setTimeout(() => {

        this.style.display = 'none'

      }, 4000)


    })

  }

  render() {

    return html`
      <slot>

      </slot>
    `

  }

}
