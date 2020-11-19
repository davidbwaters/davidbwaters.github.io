/*
 *  Components - Modal
 */

import { LitElement, html, css } from 'lit-element'

export class Modal extends LitElement {

  static get styles() {

    return css`
      :host {
        --modal-transition-duration: var(--transition-duration);
      }

      .c-modal__content {
        height: 100vh;
        left: 0;
        position: fixed;
        transition: all var(--modal-transition-duration);
        top: 0;
        width: 100vw;
        z-index: 9;
      }
      
      .c-modal__content:not([open]) {
        display: none;
        opacity: 0;
        visibility: hidden;
      }

      .c-modal__content.is-opening {
        display: block;
        opacity: 0;
        visibility: visible;
      }

      .c-modal__content.is-closing {
        opacity: 0;
      }
    `

  }

  static get properties() {

    return {
      open: { type: Boolean, attribute: true }
    }

  }

  constructor() {

    super()

    this.open = false

  }

  _setOpen() {

    this.setAttribute('open', '')

    this._triggerEl.classList.add('is-expanded')

    setTimeout(() => {

      this._dialog.classList.add('is-opening')
      this._dialog.showModal()
      this._dialog.classList.remove('is-opening')

    }, this._duration)

  }

  _setClosed() {

    this.removeAttribute('open')

    this._dialog.classList.add('is-closing')

    setTimeout(() => {

      this._dialog.close()

      this._dialog.classList.remove('is-closing')
      this._triggerEl.classList.remove('is-expanded')

    }, this._duration)

  }

  firstUpdated() {

    const target = this.dataset.modalTrigger

    const triggerSelector =
      '[data-modal-target=' + target + ']'

    const hostStyles = window.getComputedStyle(this)

    const durationSeconds = hostStyles.getPropertyValue(
      '--modal-transition-duration'
    )

    this._duration = parseFloat(durationSeconds) * 1000

    this._dialog = this.shadowRoot.querySelector('dialog')

    this._triggerEl = document.querySelector(
      triggerSelector
    )

    if (this._triggerEl) {

      this._triggerEl.addEventListener('click', (e) => {

        this._setOpen()

      })

    }

  }

  render() {

    return html`
      <dialog class="c-modal__content">
        <button 
          class="c-modal__close-button"
          @click=${this._setClosed}
        >
          X
        </button>
        <slot>

        </slot>
      </dialog>
    `

  }

}
