/*
 *  Components - Modal
 */

import dialogPolyfill from 'dialog-polyfill'
import when from 'once-defined'

when('uce-lib').then(({ define, render, html, svg, css }) => {

  define('c-modal', {

    styles: css`
      :host  {
        --modal-color-fg: var(--color-fg);
        --modal-color-bg: var(--color-bg);
        --modal-spacing: 1.5rem;
        --modal-button-color-fg: var(--color-fg);
        --modal-button-color-bg: var(--color-bg);
        --modal-button-color-border: var(--color-fg);
        --modal-button-color-shadow: var(
          --color-opaque
        );
        --modal-button-color-shadow-hover: var(
          --color-opaque-alternate
        );
        --modal-button-font: var(--font-main-regular);
        --modal-button-font-weight: normal;
        --modal-button-size: 2.8rem;
        --modal-button-thickness: 1.5px;
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

      .c-modal__back-button,
      .c-modal__back-button:focus,
      .c-modal__close-button,
      .c-modal__close-button:focus {
        border: solid 1px
          var(--modal-button-color-border);
        outline: none;
      }

      .c-modal__back-button,
      .c-modal__close-button {
        align-items: center;
        background-color: var(
          --modal-button-color-bg
        );
        color: inherit;
        cursor: pointer;
        display: grid;
        font-family: var(--modal-button-font);
        font-weight: var(--modal-button-font-weight);
        grid-template-columns: var(
          --modal-button-size
        );
        grid-template-rows: var(--modal-button-size);
        letter-spacing: 0.025em;
        padding-bottom: calc(var(--modal-spacing) / 3);
        padding-top: calc(var(--modal-spacing) / 3);
        position: sticky;
        top: calc(var(--modal-spacing) / 2);
        text-transform: uppercase;
        transition-duration: var(
          --modal-transition-duration
        );
        z-index: 9;
      }

      .c-modal__back-button:active,
      .c-modal__close-button:active {
        transform: translateY(2px);
      }

      .c-modal__back-button:hover,
      .c-modal__close-button:hover {
        box-shadow: 0 0 1px 1px
          var(--modal-button-color-shadow-hover);
      }

      .c-modal__back-button {
        border-radius: 100%;
        float: left;
        justify-items: center;
        margin-left: calc(var(--modal-spacing) / 2);
        width: calc(
          var(--modal-button-size) +
          (var(--modal-spacing) / 3 * 2)
        );
      }

      .c-modal__back-button i {
        font-family: 'icons';
        font-size: 1.6em;
        font-style: normal;
        left: .025em;
        position: relative;
        text-transform: none;
      }

      .c-modal__close-button {
        display: none;
        font-size: 0.7rem;
        float: right;
        margin-right: calc(var(--modal-spacing) / 2);
        margin-top: calc(var(--modal-spacing) / 2);
        padding-left: calc(var(--modal-spacing) / 3);
        padding-right: calc(var(--modal-spacing) / 3);
      }

      @media (min-width: 45em) {

        .c-modal__close-button {
          grid-gap: 0.25rem;
          grid-template-columns:var(
            --modal-button-size
          );
        }

      }

      .c-modal__close-button span {
        display: none;
      }

      @media (min-width: 45em) {

        .c-modal__close-button span {
          display: inline-block;
          margin-top: 1px;
        }

      }

      .c-modal__close-button i {
        height: var(--modal-button-size);
        position: relative;
        text-align: center;
      }

      .c-modal__close-button i::before,
      .c-modal__close-button i::after {
        background-color: var(
          --modal-button-color-fg
        );
        content: '';
        height: 100%;
        margin: auto;
        position: absolute;
        transform-origin: center;
        width: var(--modal-button-thickness);
      }

      .c-modal__close-button i::before {
        transform: rotate(-45deg);
      }

      .c-modal__close-button i::after {
        transform: rotate(45deg);
      }

      .c-modal__content {
        position: absolute;
        width: 100%;
      }
    `,

    props: {

      open: { type: Boolean, attribute: true }

    },

    init() {

      this.open = false

      this.render()

      this._setup()

      dialogPolyfill.registerDialog(this._dialogEl)

      window.addEventListener(
        'click',
        e => {

          const target = e.target.closest(
            '[data-modal-target=' + this._triggerData + ']'
          )

          if (target) {

            this.showModal()

          }

        },
        true
      )

      this.shadowRoot.addEventListener('click', e => {

        if (e.target.closest('.c-modal__back-button')) {

          this.close()

        }

        if (e.target.closest('.c-modal__close-button')) {

          this.close()

        }

      })

      //this._dialogEl.addEventListener('close', () => {

      //this._handleClose()

      //})

      this._dialogEl.classList.add('is-closed')

      this.open
        ? this.showModal()
        : this._dialogEl.classList.add('is-closed')

    },

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

      this._closeButtonEl = this._dialogEl.querySelector(
        '.c-modal__close-button'
      )

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

    },

    close() {

      this._handleClose()

    },

    _open() {

      this._triggerEl.classList.add('is-expanded')
      this._triggerParent.style.zIndex = '9'

      setTimeout(() => {

        this.setAttribute('open', '')
        // this._dialogEl.showModal()
        this._dialogEl.classList.remove('is-closed')
        this._dialogEl.classList.add('is-opening')
        this._documentEl.style.overflow = 'hidden'
        this._dialogEl.classList.remove('is-opening')
        this._dialogEl.classList.add('is-open')

      }, this._triggerDuration)

    },

    showModal() {

      this._open()

    },

    _handleClose() {

      this.removeAttribute('open')

      this._dialogEl.classList.remove('is-open')
      this._dialogEl.classList.add('is-closing')

      setTimeout(() => {

        this._documentEl.style.overflow = ''
        this._dialogEl.classList.remove('is-closing')
        this._dialogEl.classList.add('is-closed')
        this._triggerEl.classList.remove('is-expanded')

        setTimeout(() => {

          this._triggerParent.style.zIndex = ''

        }, this._triggerDuration)

      }, this._modalDuration)

    },

    attachShadow: { mode: 'open' },

    render() {

      this.html`
        <style>
          ${this.styles}
        </style>
        <dialog class="c-modal__body">
          <button class="c-modal__back-button">
            <i>l</i>
          </button>
          <button class="c-modal__close-button">
            <i></i>
          </button>
          <section class="c-modal__content">
            <slot> </slot>
          </section>
        </dialog>
      `

    }

  })

})
