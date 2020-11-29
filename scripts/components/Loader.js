/*
 *  Components - Loader
 */
import { LitElement, html, css } from '../../modules/lit-element.js';
export class Loader extends LitElement {
  static get styles() {
    return css`
      :host {
        --loader-color-bg: var(--color-bg);
        --loader-image-bg: url('images/Noise-Main-Solid.png');

        align-content: center;
        background-color: var(--loader-color-bg);
        background-image: var(--loader-image-bg);
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
    `;
  }

  constructor() {
    super();
    document.body.style.opacity = 0;
    window.addEventListener('load', () => {
      document.body.style.opacity = '';
      this.style.opacity = 0;
      this.style.pointerEvents = 'none';
      setTimeout(() => {
        this.style.display = 'none';
      }, 4000);
    });
  }

  render() {
    return html` <slot> </slot> `;
  }

}