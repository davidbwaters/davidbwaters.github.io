/*
 *  Components - Cursor
 */

import {
  LitElement,
  html,
  css
} from 'lit'

import {
  customElement
} from 'lit/decorators.js';

import { gsap } from 'gsap'

import { querySelectorAllDeep } from 'query-selector-shadow-dom';

@customElement('c-cursor')

export class CCursor extends LitElement {
  static styles = css`
    :host {
      --cursor-size: 2.5rem;

      -webkit-backdrop-filter: saturate(0) invert() contrast(3) brightness(.75);
      backdrop-filter: saturate(0) invert() contrast(3) brightness(.75);
      border: solid 1px rgba(255,255,255,.5);
      border-radius: var(--cursor-size);
      display: var(--cursor-display);
      height: var(--cursor-size);
      left: calc(var(--cursor-size) / 2 * -1);
      pointer-events: none;
      position: fixed;
      top: calc(var(--cursor-size) / 2 * -1);
      width: var(--cursor-size);
      will-change: transform, opacity;
      z-index: 999;
    }

    .c-cursor__inner {
      border-radius: var(--cursor-size);
      border-style: solid;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      will-change: transform, background-color, border-color;
    }

    @media (max-width: 768px) {

      :host {
        display: none;
      }

    }
  `

  position = {
    currentX: 0,
    currentY: 0,
    cursorX: 0,
    cursorY: 0
  }


  private _targets = []

  private _activeTarget

  private _speed = 0.2;

  private _set = gsap.quickSetter(this, 'css')

  private _enterStyles = {
    borderWidth: '1px',
    duration: 0.5,
    scale: 2
  }

  private _leaveStyles = {
    borderWidth: '2px',
    duration: 0.5,
    scale: 1
  }

  private _delta = 1.0 - Math.pow(
    1.0 - this._speed,
    gsap.ticker.deltaRatio()
  )

  constructor() {

    super()

    this.setViewport()

    this.position.cursorX =
      this.position.currentX

    this.position.cursorY =
      this.position.currentY

    window.addEventListener(
      'resize', () => {

        setTimeout(() => {

          this.refresh()

        }, 4000)

      }
    )

    this.render()

    this._set = gsap.quickSetter(this, 'css')

    const isTouch =
    'ontouchstart' in document.documentElement

    if (isTouch === true) {

      this.style.setProperty(
        '--cursor-display', 'none'
      )

    }
    else {

      this.style.setProperty(
        '--cursor-display', 'block'
      )

    }

    document.addEventListener('mousemove', e => {

      if( e.x !== 0 ) {
        this.position.cursorX = e.x
      }

      if( e.y !== 0 ) {
        this.position.cursorY = e.y
      }

      //console.log(this.position)

    })

    gsap.ticker.add(() => {

      this._delta = 1.0 - Math.pow(
        1.0 - this._speed,
        gsap.ticker.deltaRatio()
      )

      this.position.currentX +=
      (this.position.cursorX - this.position.currentX) *
      this._delta

      this.position.currentY +=
      (this.position.cursorY - this.position.currentY) *
      this._delta


      this._set({
        x: this.position.currentX,
        y: this.position.currentY
      })

      if (
        this._activeTarget &&
        (
          this._activeTarget.dataset.cursorMagnetic === 'true' ||
          this._activeTarget.parentElement.dataset.cursorMagnetic === 'true'
        )
      ) {

        const rect = this._activeTarget
          .getBoundingClientRect()

        const magnetMovement = 5

        let magneticX =
        (
          (
            rect.x +
            (rect.width / 2) -
            this.position.cursorX
          )
        ) / -2

        if (magneticX > 0) {

          magneticX = Math.min(
            magneticX, magnetMovement
          )

        }
        else {

          magneticX = Math.max(
            magneticX, -1 * magnetMovement
          )

        }

        let magneticY =
        (
          (
            rect.y +
            (rect.height / 2) -
            this.position.cursorY
          )
        ) / -2

        if (magneticY > 0) {

          magneticY = Math.min(
            magneticY, magnetMovement
          )

        }
        else {

          magneticY = Math.max(
            magneticY, -1 * magnetMovement
          )

        }
        gsap.to(
          this._activeTarget, {
            x: magneticX,
            y: magneticY,
            duration: 0.3
          }
        )

      }

    })


    gsap.to(
      this,
      this._leaveStyles
    )

    setTimeout(() => {

      this.refresh()

    }, 2000)

  }

  setViewport() {

    this.position.currentX = window.innerWidth / 2
    this.position.currentY = window.innerHeight / 2

  }

  handleEnter(e) {

    gsap.to(
      this,
      this._enterStyles
    )

    this._activeTarget = e.target

  }

  handleLeave(e) {

    gsap.to(
      this,
      this._leaveStyles
    )

    gsap.to(
      e.target, {
        x: 0,
        y: 0
      }
    )

    this._activeTarget = null

  }

  refresh() {

    if (this._targets) {

      this._targets.forEach(el => {

        el.element.removeEventListener(
          'mouseenter', this.handleEnter
        )

        el.element.removeEventListener(
          'mouseleave', this.handleLeave
        )

      })

    }

    this._targets = []

    const magneticTargetEls =
      querySelectorAllDeep(
        'c-button, .c-toggle__label, [data-cursor-magnetic="true"]'
      )




    const normalTargetEls =
      querySelectorAllDeep(
        'a, button, [data-cursor-target]'
      )


    magneticTargetEls.forEach((el:HTMLElement) => {

      el.dataset.cursorMagnetic = 'true'

    })

    const targetEls = [
      ...magneticTargetEls, ...normalTargetEls
    ]

    targetEls.forEach(el => {

      this._targets = this._targets.concat(
        [{
          'element': el
        }]
      )

    })

    if (this._targets) {

      this._targets.forEach(el => {

        el.element.addEventListener(
          'mouseenter', this.handleEnter.bind(this)
        )

        el.element.addEventListener(
          'mouseleave', this.handleLeave.bind(this)
        )

      })

    }

  }

  render() {
    return html``
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "c-cursor": CCursor;
  }
}
