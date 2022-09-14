/*
 *  Components - Loader
 */

import when from 'once-defined'

when('uce-lib').then(({ define, render, html, svg, css }) => {

  define('c-loader', {

    styles: css`

      :host  {
        --loader-color-bg: var(--color-bg);
      }

      :host,
      ::slotted(*) {
        height: 100vh;
        left: 0;
        top: 0;
        transition: opacity var(--transition-duration);
        width: 100%;
        z-index: 9;
      }

      :host  {
        background-color: var(--loader-color-bg);
        position: fixed;
        height: 100%;
        width: 100%;
      }

      ::slotted(*) {
        align-content: center;
        cursor: progress;
        display: grid;
        grid-template-columns: 100px;
        grid-template-rows: min-content;
        justify-content: center;
        position: absolute;
      }

    `,

    init() {

      // document.documentElement.style.position = 'fixed'
      this.render()

    },

    disable() {

      const mainEl = document.querySelector('main')

      const mainIsTransparent = mainEl.classList.contains(
        'u-transparent'
      )

      document.documentElement.style.position = ''

      if (mainIsTransparent) {

        mainEl.classList.remove('u-transparent')

      }
      setTimeout(() => {

        this.style.opacity = 0
        this.style.pointerEvents = 'none'

      }, 2000)

      setTimeout(() => {

        this.style.display = 'none'

      }, 4000)

    },

    attachShadow: {mode: 'open'},

    render() {

      this.html`
        <style>
          ${this.styles}
        </style>
        <slot>
        </slot>
      `

    }

  })

})
