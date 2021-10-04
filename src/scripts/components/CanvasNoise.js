/*
 *  Components - Canvas Noise
 */

import { noise } from '../util/noise'
import when from 'once-defined'

when('uce-lib').then(({ define, css }) => {

  define('c-canvas-noise', {

    styles: css`
      :host {
        display: block;
        height: 100%;
        mix-blend-mode: hard-light;
        opacity: 0.8;
        pointer-events: none;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 12;
      }

      .c-canvas-noise__canvas {
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        width: 100%;
      }
    `,

    init() {

      this.render()

      const canvas = this.shadowRoot
        .querySelector('.c-canvas-noise__canvas')

      noise(canvas, 12)

    },

    attachShadow: { mode: 'open' },

    render() {

      this.html`
        <style>
          ${this.styles}
        </style>
        <canvas class="c-canvas-noise__canvas">
        </canvas>
      `

    }
  })

})
