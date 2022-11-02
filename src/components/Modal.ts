/*
 *  Components - Modal
 */

import {
  LitElement,
  html,
  css
} from 'lit'

import {
  customElement,
  property
} from 'lit/decorators.js';

import dialogPolyfill from 'dialog-polyfill'
import { ScrollTrigger } from 'gsap/all';

@customElement('c-modal')

export class CModal extends LitElement {

  static styles = css`
    :host  {
      --modal-color-fg: var(--color-fg);
      --modal-color-bg: var(--color-bg);
      --modal-spacing: var(--spacing-size-2-base);
      --modal-transition-duration: 0.15s;
      --modal-trigger-transition-duration: 0.15s;

      position: absolute;
    }

    .c-modal__body {
      background-color: var(--modal-color-bg);
      border: none;
      box-sizing: border-box;
      color: var(--modal-color-fg);
      height: 100%;
      max-height: 100vh;
      left: 0;
      max-height: none;
      max-width: none;
      overflow-y: scroll;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      position: fixed;
      transition: var(--modal-transition-duration);
      top: 0;
      width: 100%;
      z-index: 9;
    }

    .c-modal__body:not([open]) {
      display: none;
      opacity: 0;
      pointer-events: none;
    }

    .c-modal__body.is-opening {
      display: block;
      opacity: 0;
      visibility: visible;
    }

    .c-modal__body.is-open {
      display: block;
      opacity: 1;
      pointer-events: initial;
    }

    .c-modal__body.is-closing {
      opacity: 0;
    }

    .c-modal__body.-is-closed {
      display: none;
      visibility: hidden;
    }

    .c-modal__content {
      position: absolute;
      width: 100%;
    }

    [name='close'],
    [name='back'] {
      display: block;
      position: fixed;
      top: var(--modal-spacing);
      z-index: 9;
    }

    [name='back'] {
      left: var(--modal-spacing);
    }

    [name='close'] {
      right: var(--modal-spacing);
    }

    @media (min-width:45em) {

      [name='back'] {
        left: var(--modal-spacing);
        top: var(--modal-spacing);
      }

      [name='close'] {
        right: var(--modal-spacing);
        top: var(--modal-spacing);
      }

    }
  `

  @property({type: Boolean})

  open = false

  private _documentEl
  private _triggerData
  private _triggerEl
  private _triggerParent
  private _dialogEl
  private _triggerDuration
  private _modalDuration

  private _normalizer

  firstUpdated() {

    this._setup()

    this._normalizer = ScrollTrigger.normalizeScroll(true)

    dialogPolyfill.registerDialog(this._dialogEl)

    window.addEventListener(
      'click',
      e => {

        let target

        if (e.target instanceof Element) {

          target = e.target.closest(
            '[data-modal-target=' + this._triggerData + ']'
          )

        }

        if (target) {

          this.showModal()

        }

      },
      true
    )

    this.shadowRoot.addEventListener('click', e => {

      if (
        e.target instanceof Element && e.target.closest('[slot="back"]')
      ) {

        this.close()

      }

      if (
        e.target instanceof Element && e.target.closest('[slot="close"]')
      ) {

        this.close()

      }

    })

    this._dialogEl.classList.add('is-closed')

    this.open
      ? this.showModal()
      : this._dialogEl.classList.add('is-closed')

  }

  _setup() {

    const styles = window.getComputedStyle(this)

    this._documentEl = document.documentElement

    this._triggerData = this.dataset.modalTrigger

    this._triggerEl = document.querySelector(
      '[data-modal-target=' +
        this._triggerData +
        ']' +
        '[data-modal-trigger-primary]'
    )

    this._triggerParent = this._triggerEl.parentElement

    this._dialogEl = this.shadowRoot.querySelector('dialog')

    this._triggerDuration =
      parseFloat(
        styles.getPropertyValue(
          '--modal-trigger-transition-duration'
        )
      ) * 1000

    this._modalDuration =
      parseFloat(
        styles.getPropertyValue(
          '--modal-transition-duration'
        )
      ) * 1000


    this._dialogEl.addEventListener('close', (event) => {

      this._handleClose()

    })

    const closeButton = this.shadowRoot.querySelector('.js-close')

    closeButton.setAttribute('slot','close')
    this.appendChild(
      closeButton
    )

    const backButton = this.shadowRoot.querySelector('.js-back')
    backButton.setAttribute('slot','back')
    this.appendChild(
      backButton
    )

  }

  close() {

    this._handleClose()
    this._normalizer.enable()

  }

  _open() {

    this._triggerEl.setAttribute('isExpanded', true)
    this._triggerEl.parentNode.parentNode.classList.add('u-z-index-9')
    this._triggerParent.style.zIndex = '9'

    setTimeout(() => {

      this.setAttribute('open', '')
      this._dialogEl.classList.remove('is-closed')
      this._dialogEl.classList.add('is-opening')
      this._documentEl.style.overflow = 'hidden'
      this._dialogEl.classList.remove('is-opening')
      this._dialogEl.classList.add('is-open')

    }, this._triggerDuration)

    this._normalizer.kill()

  }

  showModal() {

    this._open()

  }

  _handleClose() {

    this.removeAttribute('open')

    this._dialogEl.classList.remove('is-open')
    this._dialogEl.classList.add('is-closing')

    setTimeout(() => {

      this._documentEl.style.overflow = ''
      this._dialogEl.classList.remove('is-closing')
      this._dialogEl.classList.add('is-closed')
      this._triggerEl.removeAttribute('isExpanded')

      setTimeout(() => {

        this._triggerParent.style.zIndex = ''
        this._triggerEl.parentNode.parentNode.classList.remove('u-z-index-9')
      }, this._triggerDuration)

    }, this._modalDuration)

  }

  render() {

    return html`
      <dialog class="c-modal__body">
        <button class="c-icon-button c-icon-button--back js-back">
          <i></i>
        </button>
        <button class="c-icon-button c-icon-button--close js-close">
          <i></i>
        </button>
        <slot name="back"></slot>
        <slot name="close"></slot>
        <section class="c-modal__content">
          <slot> </slot>
        </section>
      </dialog>
    `

  }

}

declare global {
  interface HTMLElementTagNameMap {
    "c-modal": CModal;
  }
}
