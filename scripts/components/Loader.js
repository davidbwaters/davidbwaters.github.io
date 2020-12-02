/*
 *  Components - Loader
 */
import { LitElement, html, css } from '../../modules/lit-element.js';
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
    `;
  }

  static get properties() {
    return {
      open: {
        type: Boolean,
        attribute: true
      }
    };
  }

  firstUpdated() {
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

  disable() {
    const mainEl = document.querySelector('main');
    const isTransparent = mainEl.classList.contains('u-transparent');

    if (isTransparent) {
      mainEl.classList.remove('u-transparent');
    }

    this.style.opacity = 0;
    this.style.pointerEvents = 'none';
    setTimeout(() => {
      this.style.display = 'none';
    }, 4000);
  }

  check() {
    const documentEl = document.documentElement;
    const preloadElCount = document.querySelectorAll('[data-preload]').length;
    const preloadedCount = parseInt(documentEl.dataset.preloaded);
    const elsLoaded = preloadedCount === preloadElCount;

    if (elsLoaded) {
      documentEl.dataset.preloaded = 'true';
      console.log('Elements preloaded ...');
    }

    const fontStatus = documentEl.dataset.fontsLoaded;
    const fontsLoaded = fontStatus === 'true' || 'false';

    if (elsLoaded && fontsLoaded) {
      this.disable();
    }
  }

  render() {
    return html` <slot> </slot> `;
  }

}