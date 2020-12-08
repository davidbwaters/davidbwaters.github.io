/*
 *  Components - Loader
 */
import { LitElement, html, css } from '../../modules/lit-element.js';
export class Loader extends LitElement {
  static get styles() {
    return css`

      :host {
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

      :host {
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

    `;
  }

  constructor() {
    super();
    document.documentElement.style.position = 'fixed';
    this.check();
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes') {
          this.check();
        }
      });
    });
    observer.observe(document.documentElement, {
      attributes: true
    });
  }

  check() {
    const isPreloaded = document.documentElement.dataset.preloaded;

    if (isPreloaded) {
      this.disable();
    }
  }

  disable() {
    const mainEl = document.querySelector('main');
    const mainIsTransparent = mainEl.classList.contains('u-transparent');
    document.documentElement.style.position = '';

    if (mainIsTransparent) {
      mainEl.classList.remove('u-transparent');
    }

    setTimeout(() => {
      this.style.opacity = 0;
      this.style.pointerEvents = 'none';
    }, 800);
    setTimeout(() => {
      this.style.display = 'none';
    }, 2000);
  }

  render() {
    return html` <slot> </slot> `;
  }

}