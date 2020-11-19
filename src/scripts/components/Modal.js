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

    if (this.open && this._dialog) {

      this._dialog.showModal()

    }

  }

  _setClosed() {

    this._dialog.classList.add('is-closing')

    setTimeout( () => {

      this._dialog.classList.remove('is-opening')
      this.removeAttribute('open')
      this._dialog.close()
      this._triggerEl.classList.remove('is-expanded')
      console.log(this._duration)

    }, this._duration)

  }

  update() {

    super.update()

    this._setOpen()

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

    this._triggerEl = document.querySelector(
      triggerSelector
    )

    this._dialog = this.shadowRoot.querySelector('dialog')

    if (this._triggerEl) {

      this._triggerEl.addEventListener('click', (e) => {
        
        this._triggerEl.classList.add('is-expanded')
        
        this.setAttribute('open', '')

      })

    }

    this._setOpen()

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
