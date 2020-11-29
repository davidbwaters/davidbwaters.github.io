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
        display: grid;
        grid-template-rows: 4fr 5fr 4.5rem;
        height: 100%;
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
        background-size: 100% auto;
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
        background-image: url('/images/Paint-Main-A-Dark.jpg');
        opacity: var(--theme-dark-opacity);
      }

      .c-hero__paint-dark::before {
        background-image: url('/images/Paint-Main-B-Dark.jpg');
      }

      .c-hero__paint-light {
        backface-visibility: hidden;
        background-image: url('/images/Paint-Main-A-Light.jpg');
        opacity: var(--theme-light-opacity);
      }

      .c-hero__paint-light::before {
        background-image: url('/images/Paint-Main-B-Light.jpg');
      }

      .c-hero__tagline,
      .c-hero__name,
      .c-hero__location {
        position: relative;
        z-index: 1;
      }

      .c-hero__tagline {
        font-family: 'syneextrabold';
        font-size: clamp(2.5rem, 6vw, 4.25rem);
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
        background-image: url('/images/Me-Dark.jpg');
        border-right: solid 1px var(--color-accent);
        position: relative;
      }

      .c-hero__me::before {
        background-blend-mode: luminosity;
        background-color: var(--color-bg-primary);
        background-image: url('/images/Me-Light.jpg');
        content: '';
        height: 100%;
        opacity: var(--theme-light-opacity);
        position: absolute;
        width: 100%;
      }

      .c-hero__name-stylized {
        background-image: linear-gradient(
          -45deg,
          var(--color-opaque) 0%,
          var(--color-opaque) 6.24%,
          transparent 6.25%,
          transparent 43.74%,
          var(--color-opaque) 43.75%,
          var(--color-opaque) 56.25%,
          transparent 56.26%,
          transparent 93.74%,
          var(--color-opaque) 93.75%,
          var(--color-opaque) 100%
        );
        background-position: 0 0;
        background-repeat: repeat;
        background-size: 0.275rem 0.275rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 100%;
        justify-items: center;
        padding-bottom: var(--spacing-responsive-y);
        padding-left: var(--spacing-responsive-x);
        padding-right: var(--spacing-responsive-x);
        padding-top: var(--spacing-responsive-y);
        text-align: center;
        width: 100%;
      }

      @media (min-width: 45em) {
        .c-hero__name-stylized {
          border-right: solid 1px var(--color-accent);
        }
      }

      .c-hero__name-stylized-letter {
        font-family: var(--font-accent);
        font-weight: var(--font-accent-weight);
        margin-bottom: auto;
        margin-left: auto;
        margin-right: auto;
        margin-top: auto;
      }

      .c-hero__heading {
        align-content: center;
        border-top: solid 1px var(--color-accent);
        display: grid;
        grid-column-end: 3;
        grid-column-start: 1;
        justify-content: center;
        padding-left: 2rem;
        padding-right: 2rem;
      }

      .c-hero__heading > * {
        font-size: clamp(1.75rem, 3vw, 2.25rem);
        line-height: 1;
        margin-bottom: 0;
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
        grid-template-columns: 4rem 1fr 1fr 4rem;
        grid-template-rows: 1fr 0.5rem;
      }

      ::slotted([slot='footer-box-left']),
      ::slotted([slot='footer-content-left']),
      ::slotted([slot='footer-content-right']) {
        border-right: solid 1px var(--color-subtle);
      }

      ::slotted([slot='footer-content-left']),
      ::slotted([slot='footer-content-right']) {
        align-items: center;
        column-gap: 1rem;
        display: grid;
        font-size: 0.75rem;
        grid-template-columns: auto 1fr;
        padding-left: 1rem;
        padding-right: 1rem;
      }

      @media (min-width: 45em) {
        ::slotted([slot='footer-content-left']),
        ::slotted([slot='footer-content-right']) {
          font-size: 1rem;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }
      }

      ::slotted([slot='footer-box-right']) {
        align-items: center;
        display: grid;
        justify-content: center;
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

  }

  firstUpdated() {

    this._taglineSetup()
    this._nameStylizedSetup()

    window.addEventListener('load', () => {

      Scrambler({
        target: '[data-scrambler]',
        random: [1000, 1000],
        speed: 60
      })

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
        <div class="c-hero__me"></div>
        <div class="c-hero__name-stylized"></div>
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
