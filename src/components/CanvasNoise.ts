/*
 *  Components - Canvas Noise
 */

import { noise } from '../scripts/util/noise'

import {
  LitElement,
  html,
  css
} from 'lit'

import {
  customElement,
  property
} from 'lit/decorators.js';


@customElement('c-canvas-noise')

export class CCanvasNoise extends LitElement {

  static styles = css`
    :host {
      display: block;
      height: 100%;
      mix-blend-mode: hard-light;
      opacity: var(--opacity-noise);
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
  `

  constructor() {

    super()

    this.style.setProperty('--opacity-noise', '0.8')

  }

  firstUpdated(): void {


    if (this.renderRoot) {
      const canvas = this.renderRoot
        .querySelector('.c-canvas-noise__canvas')

      noise(canvas, 12)
    }

  }
  render() {

    return html`
      <canvas class="c-canvas-noise__canvas">
      </canvas>
    `;

  }

}

declare global {
  interface HTMLElementTagNameMap {
    "c-canvas-noise": CCanvasNoise;
  }
}
