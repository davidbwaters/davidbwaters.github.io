/*
 *  Components - Modal
 */
import { LitElement, html, css } from '../../modules/lit-element.js';
import dialogPolyfill from '../../modules/dialog-polyfill.js';
export class Modal extends LitElement {
  static get styles() {
    return css`
      :host {
        --modal-color-fg: var(--color-fg);
        --modal-color-bg: var(--color-bg);
        --modal-spacing: 1.5rem;
        --modal-close-button-color-fg: var(--color-fg);
        --modal-close-button-color-bg: var(--color-bg);
        --modal-close-button-color-border: var(--color-fg);
        --modal-close-button-color-shadow: var(
          --color-opaque
        );
        --modal-close-button-color-shadow-hover: var(
          --color-opaque-alternate
        );
        --modal-close-button-font: var(--font-main-regular);
        --modal-close-button-font-weight: normal;
        --modal-close-button-size: 1.2rem;
        --modal-close-button-thickness: 1.5px;
        --modal-transition-duration: 0.15s;
        --modal-trigger-transition-duration: 0.33s;

        position: absolute;
      }

      .c-modal__body {
        background-color: var(--modal-color-bg);
        border: none;
        box-sizing: border-box;
        color: var(--modal-color-fg);
        height: 100vh;
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
        width: 100vw;
        z-index: 9;
      }

      .c-modal__body:not([open]) {
        display: block;
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

      .c-modal__close-button,
      .c-modal__close-button:focus {
        border: solid 1px
          var(--modal-close-button-color-border);
        outline: none;
      }

      .c-modal__close-button {
        align-items: center;
        background-color: var(
          --modal-close-button-color-bg
        );
        color: inherit;
        cursor: pointer;
        display: grid;
        float: right;
        font-family: var(--modal-close-button-font);
        font-size: 0.7rem;
        font-weight: var(--modal-close-button-font-weight);
        grid-template-columns: var(
          --modal-close-button-size
        );
        grid-template-rows: var(--modal-close-button-size);
        letter-spacing: 0.025em;
        margin-right: calc(var(--modal-spacing) / 2);
        margin-top: calc(var(--modal-spacing) / 2);
        padding-bottom: calc(var(--modal-spacing) / 3);
        padding-left: calc(var(--modal-spacing) / 3);
        padding-right: calc(var(--modal-spacing) / 3);
        padding-top: calc(var(--modal-spacing) / 3);
        position: sticky;
        top: calc(var(--modal-spacing) / 2);
        text-transform: uppercase;
        transition-duration: var(
          --modal-transition-duration
        );
        z-index: 9;
      }

      @media (min-width: 45em) {
        .c-modal__close-button {
          grid-gap: 0.25rem;
          grid-template-columns: 1fr var(
              --modal-close-button-size
            );
        }
      }

      .c-modal__close-button:active {
        transform: translateY(2px);
      }

      .c-modal__close-button:hover {
        box-shadow: 0 0 1px 1px
          var(--modal-close-button-color-shadow-hover);
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
        height: var(--modal-close-button-size);
        position: relative;
        text-align: center;
      }

      .c-modal__close-button i::before,
      .c-modal__close-button i::after {
        background-color: var(
          --modal-close-button-color-fg
        );
        content: '';
        height: 100%;
        margin: auto;
        position: absolute;
        transform-origin: center;
        width: var(--modal-close-button-thickness);
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

  constructor() {
    super();
    this.open = false;
  }

  firstUpdated() {
    this._setup();

    dialogPolyfill.registerDialog(this._dialogEl);
    window.addEventListener('click', e => {
      const target = e.target.closest('[data-modal-target=' + this._triggerData + ']');

      if (target) {
        this.showModal();
      }
    }, true);
    this.shadowRoot.addEventListener('click', e => {
      if (e.target.closest('.c-modal__close-button')) {
        this.close();
      }
    });

    this._dialogEl.addEventListener('close', () => {
      this._handleClose();
    });

    this._dialogEl.classList.add('is-closed');

    this.open ? this.showModal() : this._dialogEl.classList.add('is-closed');
  }

  showModal() {
    this._open();
  }

  close() {
    this._dialogEl.close();
  }

  _setup() {
    const styles = window.getComputedStyle(this);
    this._documentEl = document.documentElement;
    this._triggerData = this.dataset.modalTrigger;
    this._triggerEl = document.querySelector('[data-modal-target=' + this._triggerData + ']' + '[data-modal-trigger-primary]');
    this._triggerParent = this._triggerEl.parentElement;
    this._dialogEl = this.shadowRoot.querySelector('dialog');
    this._closeButtonEl = this._dialogEl.querySelector('.c-modal__close-button');
    this._triggerDuration = parseFloat(styles.getPropertyValue('--modal-trigger-transition-duration')) * 1000;
    this._modalDuration = parseFloat(styles.getPropertyValue('--modal-transition-duration')) * 1000;
  }

  _open() {
    this._triggerEl.classList.add('is-expanded');

    this._triggerParent.style.zIndex = '9';
    setTimeout(() => {
      this.setAttribute('open', '');

      this._dialogEl.showModal();

      this._dialogEl.classList.remove('is-closed');

      this._dialogEl.classList.add('is-opening');

      this._documentEl.style.overflow = 'hidden';

      this._dialogEl.classList.remove('is-opening');

      this._dialogEl.classList.add('is-open');
    }, this._triggerDuration);
  }

  _handleClose() {
    this.removeAttribute('open');

    this._dialogEl.classList.remove('is-open');

    this._dialogEl.classList.add('is-closing');

    setTimeout(() => {
      this._documentEl.style.overflow = '';

      this._dialogEl.classList.remove('is-closing');

      this._dialogEl.classList.add('is-closed');

      this._triggerEl.classList.remove('is-expanded');

      setTimeout(() => {
        this._triggerParent.style.zIndex = '';
      }, this._triggerDuration);
    }, this._modalDuration);
  }

  render() {
    return html`
      <dialog class="c-modal__body">
        <button class="c-modal__close-button">
          <span> Close </span>
          <i></i>
        </button>
        <section class="c-modal__content">
          <slot> </slot>
        </section>
      </dialog>
    `;
  }

}