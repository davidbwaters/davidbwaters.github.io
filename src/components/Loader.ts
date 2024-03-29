/*
 *  Components - Loader
 */

import { LitElement, html, css } from "lit";

import { customElement, property } from "lit/decorators.js";

@customElement("c-loader")
export class CLoader extends LitElement {
  static styles = css`
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
      cursor: progress;
      display: grid;
      grid-template-columns: clamp(3rem, 4vw, 8rem);
      grid-template-rows: min-content;
      place-content: center;
      position: absolute;
    }
  `;

  disable() {
    const mainEl = document.querySelector("main");

    const mainIsTransparent = mainEl && mainEl.classList.contains("u-transparent");

    document.documentElement.style.position = "";

    if (mainIsTransparent) {
      mainEl.classList.remove("u-transparent");
    }


    setTimeout(() => {

      window.dispatchEvent(
        new CustomEvent("appLoaded", {
          detail: { theme: document.body.dataset.theme },
          bubbles: true,
          composed: true,
        })
      );
      if (window.location.hash === '') {
        window.scrollTo(0, 0)
      }

    }, 2800);

    setTimeout(() => {

      this.style.opacity = "0";
      this.style.pointerEvents = "none";

    }, 3200);

    setTimeout(() => {
      this.style.display = "none";
    }, 4000);
  }

  render() {
    return html` <slot> </slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "c-loader": CLoader;
  }
}
