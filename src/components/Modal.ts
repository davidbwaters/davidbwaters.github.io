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
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import GLightbox from 'glightbox'

import { querySelectorDeep } from 'query-selector-shadow-dom';

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
      z-index: 10;
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
      z-index: 99;
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

  private _documentEl: HTMLElement;
  private _triggerData: string | undefined;
  private _triggerEl: HTMLElement;
  private _triggerParent: HTMLElement;
  private _dialogEl: HTMLDialogElement;
  private _triggerDuration: number | undefined;
  private _modalDuration: number | undefined;
  private _target!: Element;
  private _normalizer: Observer | undefined;

  constructor() {
    super()
    window.addEventListener('appLoaded', (() => {
      this._normalizer
      //this._normalizer = ScrollTrigger.normalizeScroll(true)
    }).bind(this))
    //ScrollTrigger.refresh();

  }

  firstUpdated() {

    this._setup()

    dialogPolyfill.registerDialog(this._dialogEl)

    let target

    window.addEventListener(
      'click',
      e => {
        if (e.target instanceof Element) {
          if (e.target.tagName === "c-work-list-item".toUpperCase()) {
            this._target = e.target
          }

          target = e.target

          //  console.log(e.target)

          if (target instanceof Element) {

            target = target.closest(
              '[data-modal-target=' + this._triggerData + ']'
            )

            if (e.target.tagName === 'c-work-list-item'.toUpperCase()) {
              target = e.target.shadowRoot.querySelector(
                '[data-modal-target=' + this._triggerData + ']'
              )
            }

          }

          if (target) {

            this.showModal()

          }
        }
      },
      true
    )

    this.shadowRoot && this.shadowRoot.addEventListener('click', e => {

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

  _popstate() {

    if ('#' + this._triggerData.toLowerCase() === window.location.hash.toLowerCase()) {
      setTimeout(() => {
        // console.log(document.querySelector('[slug=' + this._triggerData + ']').getBoundingClientRect().top)

        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        gsap.to(window, {duration: .66, scrollTo: document.querySelector('[slug=' + this._triggerData + ']')})

      }, 2000);

      this._open()
    }
    else if (window.location.hash === '') {
      this.close()
    }
    // console.log('#' + this._triggerData, window.location.hash)
  }

  updated() {

    this._triggerData = this.dataset.modalTrigger

    // console.log('#' + this._triggerData === window.location.hash)
  }

  _setup() {

    window.addEventListener('popstate', this._popstate.bind(this))
    const styles = window.getComputedStyle(this)

    const lightbox = GLightbox({
      selector: "*[data-glightbox]",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      openEffect: "fade",
      closeEffect: "fade",
      skin: "dbw",
    });

    this._documentEl = document.documentElement

    this._triggerData = this.dataset.modalTrigger

    this._triggerEl = querySelectorDeep(
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


    this._dialogEl.addEventListener('close', (event: any) => {

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

    this._popstate()
  }

  close() {

    this._handleClose()

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    gsap.to(window, {duration: 0.1, scrollTo: document.querySelector('[slug=' + this._triggerData + ']')})

    //this._normalizer.enable()
    window.addEventListener('appLoaded', (() => {
      //
    }).bind(this))

  }

  _handleClose() {

    this.removeAttribute('open')

    this._dialogEl.classList.remove('is-open')
    this._dialogEl.classList.add('is-closing')


    if ('#' + this._triggerData.toLowerCase() === window.location.hash.toLowerCase()) {
      history.pushState(
        '',
        document.title,
        window.location.pathname +
        window.location.search
      );
    }
    setTimeout(() => {

      this._documentEl.style.overflow = ''
      this._dialogEl.classList.remove('is-closing')
      this._dialogEl.classList.add('is-closed')
      this._triggerEl.removeAttribute('isExpanded')

      setTimeout(() => {

        this._triggerParent.style.zIndex = ''

        //  console.log(this._target)
        if (this._target) {
          this._target.classList.remove('u-z-index-9')
        }


      }, this._triggerDuration)

    }, this._modalDuration)

  }

  _open() {

    this._triggerEl.setAttribute('isExpanded', 'true')

    if (this._target) {
      this._target.classList.add('u-z-index-9')
    }

    this._triggerParent.style.zIndex = '9'

    if ('#' + this._triggerData.toLowerCase() !== window.location.hash.toLowerCase()) {
      // console.log(this._triggerData)
      // window.location.hash = this._triggerData

      history.pushState(
        '', document.title,
        window.location.pathname +
        window.location.search +
        '#' +
        this._triggerData
      );

    }

    setTimeout(() => {

      this.setAttribute('open', '')
      this._dialogEl.classList.remove('is-closed')
      this._dialogEl.classList.add('is-opening')
      this._documentEl.style.overflow = 'hidden'
      this._dialogEl.classList.remove('is-opening')
      this._dialogEl.classList.add('is-open')

    }, this._triggerDuration)

    this._normalizer && this._normalizer.kill()

  }

  showModal() {

    this._open()

  }


  render() {

    return html`
      <dialog class="c-modal__body">
        <button class="c-icon-button c-icon-button--arrow-left js-back">
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
