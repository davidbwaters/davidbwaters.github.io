/*
 *  Components - Loader
 */

import { LitElement, html, css } from 'lit-element'

export class Loader extends LitElement {

  static get styles() {

    return css`
      :host {
        --loader-color-bg: var(--color-bg);
        --loader-image-bg: url('images/Noise-Main-Clear.svg');

        align-content: center;
        cursor: progress;
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

      :host::before {
        background-color: var(--loader-color-bg);
        background-image: var(--loader-image-bg);
        content: '';
        height: 100%;
        opacity: .33;
        position: absolute;
        width: 100%;
      }
    `

  }

  constructor() {

    super()

    window.addEventListener('load', () => {

      const mainEl = document.querySelector('main')

      const isTransparent = mainEl.classList.contains(
        'u-transparent'
      )

      if (isTransparent) {

        mainEl.classList.remove('u-transparent')

      }

      this.style.opacity = 0
      this.style.pointerEvents = 'none'

      setTimeout(() => {

        this.style.display = 'none'

      }, 4000)

    })

  }

  render() {

    return html` <slot> </slot> `

  }

}
