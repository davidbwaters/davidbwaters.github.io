/*
 *  Components - Hero
 */

import { LitElement, html, css } from 'lit-element'
import Scrambler from 'scrambling-letters'

export class Hero extends LitElement {

  static get styles() {

    return css`
      * {
        box-sizing: border-box;
      }

      :host {
        --hero-image-me-dark:       url(
          '/images/Me-Dark.jpg'
        );
        --hero-image-me-light: url(
          '/images/Me-Light.jpg'
        );
        --hero-image-paint-1-dark: url(
          '/images/Hero-Paint-1-Dark.jpg'
        );
        --hero-image-paint-1-light: url(
          '/images/Hero-Paint-1-Light.jpg'
        );
        --hero-image-paint-2-dark: url(
          '/images/Hero-Paint-2-Dark.jpg'
        );
        --hero-image-paint-2-light: url(
          '/images/Hero-Paint-2-Light.jpg'
        );
        --hero-image-noise: url(
          '/images/Noise-Clear.svg'
        );

        display: grid;
        grid-template-rows: 4fr 5fr 4.5rem;
        height: 100%;
        max-height: 100%;
        min-height: 30rem;
      }

      @media (min-width: 45em) {
        :host {
          grid-template-rows: 2fr 1fr 4.5rem;
          min-height: 30rem;
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
        content: '';
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 0;
      }

      .c-hero__paint-dark,
      .c-hero__paint-light,
      .c-hero__paint-dark::before,
      .c-hero__paint-light::before {
        backface-visibility: hidden;
        background-position: top left;
        background-size: cover;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transition: all 0.25s;
        width: 100%;
      }

      .c-hero__paint-dark::before,
      .c-hero__paint-light::before {
        animation: hero-paint 6s infinite;
        content: '';
      }

      .c-hero__paint-dark {
        background-image: var(--hero-image-paint-1-dark);
        opacity: var(--theme-dark-opacity);
      }

      .c-hero__paint-dark::before {
        background-image: var(--hero-image-paint-2-dark);
      }

      .c-hero__paint-light {
        backface-visibility: hidden;
        background-image: var(--hero-image-paint-1-light);
        opacity: var(--theme-light-opacity);
      }

      .c-hero__paint-light::before {
        background-image: var(--hero-image-paint-1-light);
      }

      .c-hero__tagline,
      .c-hero__name,
      .c-hero__location {
        position: relative;
        z-index: 1;
      }

      .c-hero__tagline {
        font-family: 'syneextrabold';
        font-size: clamp(1.5rem, 7vw, 4.25rem);
        line-height: 1.05;
        text-transform: uppercase;
        width: auto;
      }

      @media (min-height: 35em) {

        .c-hero__tagline {
          margin-top: 0.5rem;
          line-height: 1.1;
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
        font-family: var(--font-main-regular);
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
          transform: rotate(90deg) translateY(-0.6rem)
            translateX(-100%);
          transform-origin: top left;
        }

        .c-hero__location {
          right: 1.5rem;
          text-align: left;
          transform: rotate(-90deg) translateY(-0.6rem)
            translateX(100%);
          transform-origin: top right;
        }
      }

      .c-hero__lower {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 5fr 4fr;
      }

      @media (min-width: 45em) {
        .c-hero__lower {
          grid-template-columns: 1fr 1fr 2fr;
          grid-template-rows: auto;
        }
      }

      .c-hero__me,
      .c-hero__me::before {
        background-position: center;
        background-size: cover;
      }

      .c-hero__me {
        background-image: var(--hero-image-me-dark);
        border-right: solid 1px var(--color-accent);
        opacity: .9;
        position: relative;
      }

      .c-hero__me::before {
        background-blend-mode: luminosity;
        background-color: var(--color-bg-primary);
        background-image: var(--hero-image-me-light);
        content: '';
        height: 100%;
        opacity: var(--theme-light-opacity);
        position: absolute;
        width: 100%;
      }

      .c-hero__name-stylized {
        background-image: linear-gradient(
          -45deg,
          var(--color-opaque-heavy) 0%,
          var(--color-opaque-heavy) 6.24%,
          transparent               6.25%,
          transparent               43.74%,
          var(--color-opaque-heavy) 43.75%,
          var(--color-opaque-heavy) 56.25%,
          transparent               56.26%,
          transparent               93.74%,
          var(--color-opaque-heavy) 93.75%,
          var(--color-opaque-heavy) 100%
        );
        background-position: 0 0;
        background-repeat: repeat;
        background-size:
          var(--bg-pattern-diagonal-size)
          var(--bg-pattern-diagonal-size);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 100%;
        justify-items: center;
        padding-bottom: var(--spacing-responsive-y);
        padding-left: var(--spacing-responsive-x);
        padding-right: var(--spacing-responsive-x);
        padding-top: var(--spacing-responsive-y);
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
        opacity: .05;
        position: absolute;
        width: 100%;
        z-index: -1;
      }

      .c-hero__name-stylized-letter {
        font-family: var(--font-accent);
        font-size: .8rem;
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
        font-family: var(--font-heading);
        font-size: clamp(1.5rem, 3vw, 2.25rem);
        grid-column-end: 3;
        grid-column-start: 1;
        justify-content: center;
        line-height: 1;
        padding-left: 2rem;
        padding-right: 2rem;
      }

      ::slotted([slot='heading']) {
        max-width: 30rem;
      }

      @media (min-width: 45em) {
        .c-hero__heading {
          border-top: none;
          grid-column-end: 4;
          grid-column-start: 3;
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
            2.1rem;
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
        column-gap: .5rem;
        display: grid;
        font-family: var(--font-main-regular);
        font-size: 0.6rem;
        justify-content: center;
        padding-left: .5rem;
        padding-right: .5rem;
      }

      @media (min-width: 25em) {

        ::slotted([slot='footer-content-left']),
        ::slotted([slot='footer-content-right']) {
          column-gap: .75rem;
          font-family: var(--font-main-light);
          font-size: .8rem;
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

      .u-noise-overlay,
      .u-noise-heavy-overlay {
        overflow: hidden;
        position: relative;
      }

      .u-noise-overlay::after,
      .u-noise-heavy-overlay::after {
        animation: noise .4s infinite !important;
        backface-visibility: hidden !important;
        background-image: url(
          "/images/Noise-Clear.svg"
        ) !important;
        background-size: 400px auto !important;
        background-repeat: repeat !important;
        content: '' !important;
        height: 200% !important;
        left: -50% !important;

        position: absolute !important;
        top: -50% !important;
        width: 200% !important;
      }

      .u-noise-overlay::after {
        opacity: .2;
      }

      .u-noise-heavy-overlay::after {
        opacity: .5;
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

      @keyframes noise {
        0.00% { transform: translate(0, 0) }
        49.99% { transform: translate(0, 0) }
        50.00% { transform: translate(-10%, 10%) }
        99.99% { transform: translate(-10%, 10%) }
      }

    `

  }

  firstUpdated() {

    this._taglineSetup()
    this._nameStylizedSetup()

    window.addEventListener('load', () => {

    })

  }

  _scramble() {

    Scrambler({
      target: '[data-scrambler]',
      random: [1000, 1000],
      speed: 60
    })

  }
  _taglineSetup() {

    const taglineHTML = this.querySelector('[slot=tagline]')
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

    this.innerHTML +=
      '<div slot="tagline-main">' + taglineMain + '</div>'

    taglineAccentEls.map(el => {

      el.innerHTML = taglineHTML

    })

  }

  _nameStylizedSetup() {

    const name = this.querySelector('[slot="name-stylized"')
      .innerHTML.replaceAll(' ', '')
      .replaceAll('\n', '')
      .split('')

    const nameStylizedEl = this.shadowRoot.querySelector(
      '.c-hero__name-stylized'
    )

    nameStylizedEl.innerHTML = name
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

    return html`
      <div class="c-hero__upper">
        <div class="c-hero__paint-dark"></div>
        <div class="c-hero__paint-light"></div>
        <div class="c-hero__tagline">
          <div class="c-hero__tagline-main">
            <slot name="tagline-main"></slot>
          </div>
          <div class="c-hero__tagline-accent-1"></div>
          <div class="c-hero__tagline-accent-2"></div>
          <div class="c-hero__tagline-accent-3"></div>
        </div>
        <div class="c-hero__name">David B. Waters</div>
        <div class="c-hero__location">Charleston, SC</div>
      </div>
      <div class="c-hero__lower">
        <div class="
          c-hero__me
          u-noise-heavy-overlay
        "></div>
        <div class="
          c-hero__name-stylized
          u-noise-overlay
        "></div>
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
    `

  }

}