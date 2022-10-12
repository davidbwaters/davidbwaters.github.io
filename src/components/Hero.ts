/*
 *  Components - Hero
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

import gsap from "gsap";

@customElement('c-hero')

export class CHero extends LitElement {

  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      --hero-image-me-dark: url('/images/Me-Dark.jpg');
      --hero-image-me-light: url('/images/Me-Light.jpg');
      --hero-image-paint-1-dark: url('/images/Hero-Paint-1-Dark.jpg');
      --hero-image-paint-1-light: url('/images/Hero-Paint-1-Light.jpg');
      --hero-image-paint-2-dark: url('/images/Hero-Paint-2-Dark.jpg');
      --hero-image-paint-2-light: url('/images/Hero-Paint-2-Light.jpg');

      background-color: var(--color-bg);
      display: grid;
      grid-template-rows: 4fr auto 4.5rem;
      height: 100%;
      height: var(--doc-height);
      max-height: 100vh;
      min-height: 28rem;
      z-index: 2;
    }

    @media (min-width: 55em) {
      :host {
        grid-template-rows: 2.6fr auto 4.5rem;
        min-height: 30rem;
      }
    }

    @media (min-width: 75em) {
      :host {
        grid-template-rows: 2.25fr auto 4.5rem;
        min-height: 35rem;
      }
    }

    .c-hero__upper {
      align-content: center;
      border-bottom: solid 1px var(--color-accent);
      display: grid;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }

    .c-hero__upper::after {
      backface-visibility: hidden;
      background-image: linear-gradient(
          0deg,
          var(--color-opaque-overlay) 000%,
          var(--color-opaque-overlay) 050%,
          rgba(0, 0, 0, 0) 050.01%,
          rgba(0, 0, 0, 0) 100%
        ),
        linear-gradient(
          0deg,
          rgba(0, 0, 0, 0) 000%,
          rgba(0, 0, 0, 0.02) 030%,
          rgba(0, 0, 0, 0.02) 070%,
          rgba(0, 0, 0, 0) 100%
        );
      background-repeat: repeat, no-repeat;
      background-size: 100% 4px, 100% 20%;
      /* content: ''; */
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: 0;
    }

    ::slotted([slot='paint']) {
      backface-visibility: hidden;
      background-position: top left;
      background-size: cover;
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transition: all 0.25s;
      width: 100%;
    }

    .c-hero__tagline,
    .c-hero__name,
    .c-hero__location {
      position: relative;
      z-index: 1;
    }

    .c-hero__tagline {
      filter: url('#animate');
      font-family: var(--font-display), sans-serif;
      font-weight: var(--font-display-weight);
      font-size: clamp(1.0rem, 4.05vw, 3.5rem);
      line-height: 1.2;
      min-height: 0vw;
      max-width: 90vw;
      pointer-events: none;
      text-transform: uppercase;
      width: auto;
    }

    @media (min-height: 35em) {
      .c-hero__tagline {
        line-height: 1.25;
        margin-top: 1.5rem;
        max-width: 100vw;
        white-space: nowrap;
      }
    }

    .c-hero__tagline-main {
      position: relative;
      z-index: 1;
    }

    .c-hero__tagline-accent-1,
    .c-hero__tagline-accent-2,
    .c-hero__tagline-accent-3 {
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: var(--color-fg);
      opacity: 0.05;
      pointer-events: none;
      position: absolute;
      top: 0;
      z-index: 0;
    }

    .c-hero__tagline-accent-1 {
      animation: hero-tagline-accent-fade-in-1 0.5s 1s
        forwards;
      transform: translateY(0.4vw);
    }

    .c-hero__tagline-accent-2 {
      animation: hero-tagline-accent-fade-in-2 0.5s 1s
        forwards;
      transform: translateY(0.8vw);
    }

    .c-hero__tagline-accent-3 {
      animation: hero-tagline-accent-fade-in-3 0.5s 1s
        forwards;
      transform: translateY(1.2vw);
    }

    .c-hero__name,
    .c-hero__location {
      bottom: 0;
      display: block;
      font-family: var(--font-main-regular), sans-serif;
      font-size: 0.6rem;
      font-weight: var(--font-main-regular-weight);
      height: 0.6rem;
      letter-spacing: 0.1em;
      line-height: 1;
      padding-bottom: 1.25rem;
      position: absolute;
      text-transform: uppercase;
    }

    .c-hero__name {
      text-align: right;
      transform-origin: top left;
      padding-left: 1.5rem;
    }

    .c-hero__location {
      right: 0;
      text-align: left;
      transform-origin: top right;
      padding-right: 1.5rem;
    }

    @media (min-width: 45em) {
      .c-hero__name,
      .c-hero__location {
        font-size: 0.7rem;
        height: 0.7rem;
        padding-bottom: 0;
        padding-left: 1rem;
        padding-right: 1rem;
        width: 40vh;
      }

      .c-hero__name {
        left: 1.5rem;
        text-align: right;
        transform: rotate(90deg) translateY(-0.7rem)
          translateX(-100%);
        transform-origin: top left;
      }

      .c-hero__location {
        right: 1.5rem;
        text-align: left;
        transform: rotate(-90deg) translateY(-0.7rem)
          translateX(100%);
        transform-origin: top right;
      }
    }

    .c-hero__lower {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 5fr 4fr;
      min-height: calc(50vh - 2.25rem);
      overflow: hidden;
    }

    @media (min-width: 55em) {
      .c-hero__lower {
        grid-template-columns: 1fr 1fr 2fr;
        grid-template-rows: auto;
        min-height: 28vh;
      }
    }

    @media (min-width: 75em) {
      .c-hero__lower {
        grid-template-columns: 3fr 2fr 5fr;
        min-height: 30vh;
      }
    }

    .c-hero__me,
    .c-hero__me-dark,
    .c-hero__me-light {
      background-color: rgba(0,0,0,0.10);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
    }

    .c-hero__me {
      display: grid;
      grid-template-rows: 1fr;
      overflow: hidden;
      position: relative;
    }


    .c-hero__me-dark {
      background-image: url('/images/Me-Dark.jpg');
      background-size: cover;
      filter: hue-rotate(-2deg) url('#animate');;
      grid-column: 1;
      grid-row: 1;
      height: 100%;
      opacity: var(--theme-dark-opacity);
      transform: scale(1.025);
      width: 100%;
    }

    .c-hero__me-light {
      background-blend-mode: luminosity;
      background-color: var(--color-bg-primary);
      background-image: url('/images/Me-Light.jpg');
      filter: url('#animate');
      grid-column: 1;
      grid-row: 1;
      height: 100%;
      opacity: var(--theme-light-opacity);
      transform: scale(1.025);
      width: 100%;
    }

    .c-hero__name-stylized {
      border-left: solid 1px var(--color-accent);

      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      height: 100%;
      position: relative;
      text-align: center;
      width: 100%;
    }

    @media (min-width: 45em) {
      .c-hero__name-stylized {
        border-right: solid 1px var(--color-accent);
      }
    }

    .c-hero__name-stylized::before {
      background-color: var(--color-bg);
      content: '';
      height: 100%;
      opacity: 0.05;
      position: absolute;
      width: 100%;
      z-index: -1;
    }

    .c-hero__name-stylized-inner {

      background-image: linear-gradient(
        -45deg,
        var(--color-opaque) 0%,
        var(--color-opaque) 12.5%,
        transparent 12.51%,
        transparent 37.49%,
        var(--color-opaque) 37.5%,
        var(--color-opaque) 62.5%,
        transparent 62.51%,
        transparent 87.49%,
        var(--color-opaque) 87.5%,
        var(--color-opaque) 100%
      );
      background-position: 0 0;
      background-repeat: repeat;
      background-size: var(
          --bg-pattern-diagonal-tight-size
        )
        var(--bg-pattern-diagonal-tight-size);
      display: grid;
      filter: url('#animate');
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      height: 100%;
      justify-items: center;
      padding-bottom: var(--spacing-responsive-y);
      padding-left: var(--spacing-responsive-x);
      padding-right: var(--spacing-responsive-x);
      padding-top: var(--spacing-responsive-y);
    }

    .c-hero__name-stylized-letter {
      font-family: var(--font-accent), sans-serif;
      font-size: 0.8rem;
      font-weight: var(--font-accent-weight);
      margin-bottom: auto;
      margin-left: auto;
      margin-right: auto;
      margin-top: auto;
    }

    @media (min-width: 35em) {
      .c-hero__name-stylized-letter {
        font-size: 1rem;
      }
    }

    .c-hero__heading {
      align-content: center;
      border-top: solid 1px var(--color-accent);
      display: grid;
      filter: url('#animate');
      font-family: var(--font-heading), sans-serif;
      font-weight: var(--font-heading-weight);
      font-size: clamp(1.3rem, 2.4vw, 2.4rem);
      grid-column-end: 3;
      grid-column-start: 1;
      justify-content: center;
      line-height: 1;
      padding: 0 3.2rem;
    }

    @media (min-width: 35em) {
      .c-hero__heading {
        padding: 0 4rem 0 4rem;
      }
    }

    @media (min-width: 55em) {
      .c-hero__heading {
        border-top: none;
        grid-column-end: 4;
        grid-column-start: 3;
        padding: 0 4rem 0 3rem;
      }

      .c-hero__heading > * {
        line-height: 1.1;
      }
    }

    .c-hero__footer {
      border-top: solid 1px var(--color-accent);
      display: grid;
      grid-template-columns:
        3.2rem
        auto
        auto
        3.2rem;
      grid-template-rows: 1fr 0.5rem;
    }

    @media (min-width: 35em) {
      .c-hero__footer {
        grid-template-columns:
          4rem
          calc(50% - 4rem)
          calc(50% - 4rem)
          4rem;
      }
    }

    ::slotted([slot='footer-box-left']),
    ::slotted([slot='footer-content-left']),
    ::slotted([slot='footer-content-right']) {
      border-right: solid 1px var(--color-subtle);
    }

    ::slotted([slot='footer-content-left']),
    ::slotted([slot='footer-content-right']) {
      align-items: center;
      column-gap: 0.5rem;
      display: grid;
      font-family: var(--font-main-regular), sans-serif;
      font-size: 0.6rem;
      justify-content: center;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    @media (min-width: 35em) {
      ::slotted([slot='footer-content-left']),
      ::slotted([slot='footer-content-right']) {
        column-gap: 0.75rem;
        font-family: var(--font-main-light), sans-serif;
        font-size: 0.8rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }

    @media (min-width: 45em) {
      ::slotted([slot='footer-content-left']),
      ::slotted([slot='footer-content-right']) {
        column-gap: 1rem;
        font-size: 1rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
      }
    }

    ::slotted([slot='footer-content-left']) {
      grid-template-columns: auto 1fr;
    }

    ::slotted([slot='footer-content-right']) {
      grid-template-columns: auto 1fr;
    }

    @media (min-width: 45em) {
      ::slotted([slot='footer-content-right']) {
        grid-template-columns: auto 1fr;
      }
    }

    ::slotted([slot='footer-box-right']) {
      align-items: center;
      display: grid;
      font-size: 1.2rem;
      justify-content: center;
    }

    @media (min-width: 35em) {
      ::slotted([slot='footer-box-right']) {
        font-size: 1.33rem;
      }
    }

    ::slotted([slot='bottom']) {
      grid-column-start: 1;
      grid-column-end: 5;
      margin-bottom: 0;
      margin-top: 0;
    }

    /* Animations */

    @keyframes hero-paint {
      0% {
        opacity: 0.04;
      }
      10% {
        opacity: 0.04;
      }
      50% {
        opacity: 0.96;
      }
      60% {
        opacity: 0.96;
      }
      100% {
        opacity: 0.04;
      }
    }

    @keyframes hero-scanlines {
      0% {
        background-position: 0 0, 0 -100%;
      }
      50% {
        background-position: 0 0, 0 200%;
      }
      100% {
        background-position: 0 0, 0 200%;
      }
    }

    @keyframes hero-tagline-accent-fade-in-1 {
      0% {
        opacity: 0.04;
      }
      100% {
        opacity: 0.6;
      }
    }

    @keyframes hero-tagline-accent-fade-in-2 {
      0% {
        opacity: 0.04;
      }
      100% {
        opacity: 0.4;
      }
    }

    @keyframes hero-tagline-accent-fade-in-3 {
      0% {
        opacity: 0.04;
      }
      100% {
        opacity: 0.2;
      }
    }
  `

  @property({type: String})
  theme =  document.body.dataset.theme

  firstUpdated() {

    this._taglineSetup()
    this._nameStylizedSetup()

    this._transitionIn()

    this.addEventListener('themeChange', this.render)

  }


  _transitionIn() {

    let tl = gsap.timeline()

    const heroTarget:HTMLElement = this.shadowRoot.querySelector('.c-hero__lower')
    const heroTagline:HTMLElement = this.shadowRoot.querySelector('.c-hero__tagline')

    tl.from(
      heroTarget,
      {
        height: 0,
        minHeight: 0,
        opacity: 0,
        duration: 1,
        delay: 1.85,
        onComplete: () => {

          heroTarget.style.height = ''
          heroTarget.style.minHeight = ''

        }
      }
    )

    tl.from(
      heroTagline,
      {
        opacity: 0,
        duration: 2,
        delay: 1.75
      },
      0
    )

    tl.play()


  }

  _taglineSetup() {

    const tagline = this.querySelector(
      '[slot=tagline]'
    )

    const taglineHTML = tagline
      .innerHTML.replaceAll('  ', '')
      .replaceAll('\n', '')

    const taglineSplit = taglineHTML.split('<br>')

    const taglineMain = taglineSplit
      .map((value, index) => {

        const inner =
          '<span data-scrambler>' + value + '</span>'
        const isLast = taglineSplit.length - 1 === index

        return isLast ? inner : inner + '<br>'

      })
      .join('')

    const taglineAccentEls = [
      this.shadowRoot.querySelector(
        '.c-hero__tagline-accent-1'
      ),
      this.shadowRoot.querySelector(
        '.c-hero__tagline-accent-2'
      ),
      this.shadowRoot.querySelector(
        '.c-hero__tagline-accent-3'
      )
    ]

    tagline.innerHTML = taglineMain

    taglineAccentEls.map(el => {

      el.innerHTML = taglineHTML

    })

  }

  _nameStylizedSetup() {

    const name = this.querySelector(
      '[slot="name-stylized"]'
    )
      .innerHTML.replaceAll(' ', '')
      .replaceAll('\n', '')
      .split('')

    const nameEl = this.shadowRoot.querySelector(
      '.c-hero__name-stylized-inner'
    )

    nameEl.innerHTML = name
      .map(value => {

        const nameDiv =
          '<div class="c-hero__name-stylized-letter">' +
          value +
          '</div>'

        return nameDiv

      })
      .join('')

  }


  render() {

    this.theme = document.body.dataset.theme

    return html`
      <div class="c-hero__upper">
        <slot name="paint">
        </slot>
        <div class="c-hero__tagline">
          <div class="c-hero__tagline-main">
            <slot name="tagline"></slot>
          </div>
          <div class="c-hero__tagline-accent-1"></div>
          <div class="c-hero__tagline-accent-2"></div>
          <div class="c-hero__tagline-accent-3"></div>
        </div>
        <div class="c-hero__name">David B. Waters</div>
        <div class="c-hero__location">Oakland, CA</div>
      </div>
      <div class="c-hero__lower">
        <div class="
          c-hero__me js-hero-me
        ">
          <div class="c-hero__me-dark js-hero-me">
          </div>
          <div class="c-hero__me-light js-hero-me">
          </div>
        </div>
        <div class="
          c-hero__name-stylized
        ">
          <div class="
            c-hero__name-stylized-inner
          "></div>
        </div>
        <div class="c-hero__heading">
          <slot name="heading"></slot>
        </div>
      </div>
      <footer class="c-hero__footer">
        <slot name="footer-box-left"> </slot>
        <slot name="footer-content-left"> </slot>
        <slot name="footer-content-right"> </slot>
        <slot name="footer-box-right"> </slot>
        <slot name="bottom"> </slot>
      </footer>

      <svg
        class='u-morphing-animation'
        style="display: none;"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
        x="0px" y="0px"
        viewBox="0 0 200 120"
        overflow="scroll"
      >
        <!-- SVG Filter -->
        <filter id="animate" width="150%" height="150%">
          <!-- Generate Noise - fractalNoise/turbulent -->
          <feTurbulence type="fractalNoise" seed="77"
                        numOctaves="1" baseFrequency="0.01" />
          <!-- Cycle through Hue - Hue wheel allows for seamless loop  -->
          <feColorMatrix type="hueRotate" values="0">
            <animate attributeName="values"
                    values="0;360" dur="3s" repeatCount="indefinite" />
          </feColorMatrix>
          <!-- Extract alpha / filter colors -->
          <feColorMatrix type="matrix"
                        values="1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 0 1" />
          <!-- Optional Filters -->
          <!-- <feMorphology operator="dilate" radius="1" /> -->
          <!-- <feMorphology operator="erode" radius="1" /> -->
          <feGaussianBlur stdDeviation="0.5" />
          <!-- Apply Displacement Map -->
          <feDisplacementMap in="SourceGraphic" scale="6"
                            xChannelSelector="R", yChannelSelector="B" />
          <!-- Blending with Original -->
          <!-- <feBlend mode="soft-light" in2="SourceGraphic"/> -->
          <!-- <feComposite operator="in" in2="SourceGraphic"/> -->
        </filter>
        <!-- Object to be filtered -->
        <circle filter="url(#animate)" fill="#202020"
                cx="100" cy="60" r="50" />
        <!-- <rect filter="url(#animate)" fill="#202020"
                  x="50" y="10" width="100" height="100" /> -->
      </svg>
    `

  }
}

declare global {
  interface HTMLElementTagNameMap {
    "c-hero": CHero;
  }
}


