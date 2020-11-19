/*
 *  Components - Glitch Image
 */

import { LitElement, html, css } from 'lit-element'

export class GlitchImage extends LitElement {

  static get styles() {

    return css`
      :host {
        display: block;
        min-height: 1px;
        width: 100%;
      }

      .c-glitch-image {
        height: 1px;
        margin: 0 auto;
        max-width: 100%;
        min-height: 1px;
        overflow: hidden;
        padding-bottom: calc(
          100% / var(--glitch-aspect-ratio) - 1px
        );
        position: relative;
        width: var(--glitch-image-width);
      }

      .c-glitch-image--style-1 {
        --glitch-image-gap-horizontal: 20px;
        --glitch-image-gap-vertical: 2px;
        --glitch-image-time-anim: 2.25s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: none;
        --glitch-image-blend-mode-4: none;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: transparent;
        --glitch-image-blend-color-4: transparent;
        --glitch-image-blend-color-5: transparent;
      }

      .c-glitch-image--style-2 {
        --glitch-image-gap-horizontal: 5px;
        --glitch-image-gap-vertical: 10px;
        --glitch-image-time-anim: 2s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: luminosity;
        --glitch-image-blend-mode-4: none;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: #95D6EB;
        --glitch-image-blend-color-4: transparent;
        --glitch-image-blend-color-5: #95D6EB;
      }

      .c-glitch-image--style-3 {
        --glitch-image-gap-horizontal: 20px;
        --glitch-image-gap-vertical: 2px;
        --glitch-image-time-anim: 2.25s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: multiply;
        --glitch-image-blend-mode-4: none;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: #af4563;
        --glitch-image-blend-color-4: transparent;
        --glitch-image-blend-color-5: transparent;
      }

      .c-glitch-image--style-4 {
        --glitch-image-gap-horizontal: 5px;
        --glitch-image-gap-vertical: 20px;
        --glitch-image-time-anim: 5s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: exclusion;
        --glitch-image-blend-mode-3: hard-light;
        --glitch-image-blend-mode-4: overlay;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: #52f1cd;
        --glitch-image-blend-color-3: #525df1;
        --glitch-image-blend-color-4: #f19b52;
        --glitch-image-blend-color-5: transparent;
      }

      .c-glitch-image--style-5 {
        --glitch-image-gap-horizontal: 50px;
        --glitch-image-gap-vertical: 100px;
        --glitch-image-time-anim: 2.25s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: none;
        --glitch-image-blend-mode-4: overlay;
        --glitch-image-blend-mode-5: overlay;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: transparent;
        --glitch-image-blend-color-4: #000;
        --glitch-image-blend-color-5: #8d16f2;
      }

      .c-glitch-image--style-6 {
        --glitch-image-gap-horizontal: 3px;
        --glitch-image-gap-vertical: 70px;
        --glitch-image-time-anim: 2.25s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: overlay;
        --glitch-image-blend-mode-4: none;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: rgba(
          255,
          255,
          255,
          0.2
        );
        --glitch-image-blend-color-4: transparent;
        --glitch-image-blend-color-5: transparent;
      }

      .c-glitch-image__image {
        background-blend-mode: var(
          --glitch-image-blend-mode-1
        );
        background-color: var(--glitch-image-blend-color-1);
        background-image: var(--glitch-image);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: calc( 100% + var(--glitch-image-gap-vertical) * 2 );
        left: calc(-1 * var(--glitch-image-gap-horizontal));
        position: absolute;
        top: calc(
          var(--glitch-image-gap-vertical) * -1
        );
        transform: translate3d(0, 0, 0);
        width: calc(
          100% + var(--glitch-image-gap-horizontal) * 2
        );
      }

      .c-glitch-image__image:nth-child(2) {
        background-color: var(--glitch-image-blend-color-2);
        background-blend-mode: var(
          --glitch-image-blend-mode-2
        );
      }

      .c-glitch-image__image:nth-child(3) {
        background-color: var(--glitch-image-blend-color-3);
        background-blend-mode: var(
          --glitch-image-blend-mode-3
        );
      }

      .c-glitch-image__image:nth-child(4) {
        background-color: var(--glitch-image-blend-color-4);
        background-blend-mode: var(
          --glitch-image-blend-mode-4
        );
      }

      .c-glitch-image__image:nth-child(5) {
        background-color: var(--glitch-image-blend-color-5);
        background-blend-mode: var(
          --glitch-image-blend-mode-5
        );
      }

      .c-glitch-image__image:nth-child(n + 2) {
        opacity: 0;
      }

      .c-glitch-image:hover
        .c-glitch-image__image:nth-child(n + 2),
      .c-glitch-image.is-glitching
        .c-glitch-image__image:nth-child(n + 2) {
        opacity: 1;
      }

      .c-glitch-image:hover
        .c-glitch-image__image:nth-child(2),
      .c-glitch-image.is-glitching
        .c-glitch-image__image:nth-child(2) {
        transform: translate3d(
          var(--glitch-image-gap-horizontal),
          0,
          0
        );
        animation: glitch-anim-1-horizontal
          var(--glitch-image-time-anim) infinite linear
          alternate;
      }

      .c-glitch-image:hover
        > .c-glitch-image__image:nth-child(3),
      .c-glitch-image.is-glitching
        > .c-glitch-image__image:nth-child(3) {
        transform: translate3d(
          calc(-1 * var(--glitch-image-gap-horizontal)),
          0,
          0
        );
        animation: glitch-anim-2-horizontal
          var(--glitch-image-time-anim) infinite linear
          alternate;
      }

      .c-glitch-image:hover
        > .c-glitch-image__image:nth-child(4),
      .c-glitch-image.is-glitching
        > .c-glitch-image__image:nth-child(4) {
        transform: translate3d(
            0,
            calc(-1 * var(--glitch-image-gap-vertical)),
            0
          )
          scale3d(-1, -1, 1);
        animation: glitch-anim-3-horizontal
          var(--glitch-image-time-anim) infinite linear
          alternate;
      }

      /* Hover flash animation on last image */
      .c-glitch-image:hover
        > .c-glitch-image__image:nth-child(5),
      .c-glitch-image.is-glitching
        > .c-glitch-image__image:nth-child(5) {
        animation: glitch-anim-flash 0.5s steps(1, end)
          infinite;
      }

      @keyframes glitch-anim-1-horizontal {
        0% {
          -webkit-clip-path: polygon(
            0 2%,
            100% 2%,
            100% 5%,
            0 5%
          );
          clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
        }
        10% {
          -webkit-clip-path: polygon(
            0 15%,
            100% 15%,
            100% 15%,
            0 15%
          );
          clip-path: polygon(
            0 15%,
            100% 15%,
            100% 15%,
            0 15%
          );
        }
        20% {
          -webkit-clip-path: polygon(
            0 10%,
            100% 10%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 10%,
            100% 10%,
            100% 20%,
            0 20%
          );
        }
        30% {
          -webkit-clip-path: polygon(
            0 1%,
            100% 1%,
            100% 2%,
            0 2%
          );
          clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
        }
        40% {
          -webkit-clip-path: polygon(
            0 33%,
            100% 33%,
            100% 33%,
            0 33%
          );
          clip-path: polygon(
            0 33%,
            100% 33%,
            100% 33%,
            0 33%
          );
        }
        50% {
          -webkit-clip-path: polygon(
            0 44%,
            100% 44%,
            100% 44%,
            0 44%
          );
          clip-path: polygon(
            0 44%,
            100% 44%,
            100% 44%,
            0 44%
          );
        }
        60% {
          -webkit-clip-path: polygon(
            0 50%,
            100% 50%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 50%,
            100% 50%,
            100% 20%,
            0 20%
          );
        }
        70% {
          -webkit-clip-path: polygon(
            0 70%,
            100% 70%,
            100% 70%,
            0 70%
          );
          clip-path: polygon(
            0 70%,
            100% 70%,
            100% 70%,
            0 70%
          );
        }
        80% {
          -webkit-clip-path: polygon(
            0 80%,
            100% 80%,
            100% 80%,
            0 80%
          );
          clip-path: polygon(
            0 80%,
            100% 80%,
            100% 80%,
            0 80%
          );
        }
        90% {
          -webkit-clip-path: polygon(
            0 50%,
            100% 50%,
            100% 55%,
            0 55%
          );
          clip-path: polygon(
            0 50%,
            100% 50%,
            100% 55%,
            0 55%
          );
        }
        100% {
          -webkit-clip-path: polygon(
            0 70%,
            100% 70%,
            100% 80%,
            0 80%
          );
          clip-path: polygon(
            0 70%,
            100% 70%,
            100% 80%,
            0 80%
          );
        }
      }

      @keyframes glitch-anim-2-horizontal {
        0% {
          -webkit-clip-path: polygon(
            0 25%,
            100% 25%,
            100% 30%,
            0 30%
          );
          clip-path: polygon(
            0 25%,
            100% 25%,
            100% 30%,
            0 30%
          );
        }
        15% {
          -webkit-clip-path: polygon(
            0 3%,
            100% 3%,
            100% 3%,
            0 3%
          );
          clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
        }
        22% {
          -webkit-clip-path: polygon(
            0 5%,
            100% 5%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 5%,
            100% 5%,
            100% 20%,
            0 20%
          );
        }
        31% {
          -webkit-clip-path: polygon(
            0 20%,
            100% 20%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 20%,
            100% 20%,
            100% 20%,
            0 20%
          );
        }
        45% {
          -webkit-clip-path: polygon(
            0 40%,
            100% 40%,
            100% 40%,
            0 40%
          );
          clip-path: polygon(
            0 40%,
            100% 40%,
            100% 40%,
            0 40%
          );
        }
        51% {
          -webkit-clip-path: polygon(
            0 52%,
            100% 52%,
            100% 59%,
            0 59%
          );
          clip-path: polygon(
            0 52%,
            100% 52%,
            100% 59%,
            0 59%
          );
        }
        63% {
          -webkit-clip-path: polygon(
            0 60%,
            100% 60%,
            100% 60%,
            0 60%
          );
          clip-path: polygon(
            0 60%,
            100% 60%,
            100% 60%,
            0 60%
          );
        }
        76% {
          -webkit-clip-path: polygon(
            0 75%,
            100% 75%,
            100% 75%,
            0 75%
          );
          clip-path: polygon(
            0 75%,
            100% 75%,
            100% 75%,
            0 75%
          );
        }
        81% {
          -webkit-clip-path: polygon(
            0 65%,
            100% 65%,
            100% 40%,
            0 40%
          );
          clip-path: polygon(
            0 65%,
            100% 65%,
            100% 40%,
            0 40%
          );
        }
        94% {
          -webkit-clip-path: polygon(
            0 45%,
            100% 45%,
            100% 50%,
            0 50%
          );
          clip-path: polygon(
            0 45%,
            100% 45%,
            100% 50%,
            0 50%
          );
        }
        100% {
          -webkit-clip-path: polygon(
            0 14%,
            100% 14%,
            100% 33%,
            0 33%
          );
          clip-path: polygon(
            0 14%,
            100% 14%,
            100% 33%,
            0 33%
          );
        }
      }

      @keyframes glitch-anim-3-horizontal {
        0% {
          -webkit-clip-path: polygon(
            0 1%,
            100% 1%,
            100% 3%,
            0 3%
          );
          clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
        }
        5% {
          -webkit-clip-path: polygon(
            0 10%,
            100% 10%,
            100% 9%,
            0 9%
          );
          clip-path: polygon(
            0 10%,
            100% 10%,
            100% 9%,
            0 9%
          );
        }
        10% {
          -webkit-clip-path: polygon(
            0 5%,
            100% 5%,
            100% 6%,
            0 6%
          );
          clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
        }
        25% {
          -webkit-clip-path: polygon(
            0 20%,
            100% 20%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 20%,
            100% 20%,
            100% 20%,
            0 20%
          );
        }
        27% {
          -webkit-clip-path: polygon(
            0 10%,
            100% 10%,
            100% 10%,
            0 10%
          );
          clip-path: polygon(
            0 10%,
            100% 10%,
            100% 10%,
            0 10%
          );
        }
        30% {
          -webkit-clip-path: polygon(
            0 30%,
            100% 30%,
            100% 25%,
            0 25%
          );
          clip-path: polygon(
            0 30%,
            100% 30%,
            100% 25%,
            0 25%
          );
        }
        33% {
          -webkit-clip-path: polygon(
            0 15%,
            100% 15%,
            100% 16%,
            0 16%
          );
          clip-path: polygon(
            0 15%,
            100% 15%,
            100% 16%,
            0 16%
          );
        }
        37% {
          -webkit-clip-path: polygon(
            0 40%,
            100% 40%,
            100% 39%,
            0 39%
          );
          clip-path: polygon(
            0 40%,
            100% 40%,
            100% 39%,
            0 39%
          );
        }
        40% {
          -webkit-clip-path: polygon(
            0 20%,
            100% 20%,
            100% 21%,
            0 21%
          );
          clip-path: polygon(
            0 20%,
            100% 20%,
            100% 21%,
            0 21%
          );
        }
        45% {
          -webkit-clip-path: polygon(
            0 60%,
            100% 60%,
            100% 55%,
            0 55%
          );
          clip-path: polygon(
            0 60%,
            100% 60%,
            100% 55%,
            0 55%
          );
        }
        50% {
          -webkit-clip-path: polygon(
            0 30%,
            100% 30%,
            100% 31%,
            0 31%
          );
          clip-path: polygon(
            0 30%,
            100% 30%,
            100% 31%,
            0 31%
          );
        }
        53% {
          -webkit-clip-path: polygon(
            0 70%,
            100% 70%,
            100% 69%,
            0 69%
          );
          clip-path: polygon(
            0 70%,
            100% 70%,
            100% 69%,
            0 69%
          );
        }
        57% {
          -webkit-clip-path: polygon(
            0 40%,
            100% 40%,
            100% 41%,
            0 41%
          );
          clip-path: polygon(
            0 40%,
            100% 40%,
            100% 41%,
            0 41%
          );
        }
        60% {
          -webkit-clip-path: polygon(
            0 80%,
            100% 80%,
            100% 75%,
            0 75%
          );
          clip-path: polygon(
            0 80%,
            100% 80%,
            100% 75%,
            0 75%
          );
        }
        65% {
          -webkit-clip-path: polygon(
            0 50%,
            100% 50%,
            100% 51%,
            0 51%
          );
          clip-path: polygon(
            0 50%,
            100% 50%,
            100% 51%,
            0 51%
          );
        }
        70% {
          -webkit-clip-path: polygon(
            0 90%,
            100% 90%,
            100% 90%,
            0 90%
          );
          clip-path: polygon(
            0 90%,
            100% 90%,
            100% 90%,
            0 90%
          );
        }
        73% {
          -webkit-clip-path: polygon(
            0 60%,
            100% 60%,
            100% 60%,
            0 60%
          );
          clip-path: polygon(
            0 60%,
            100% 60%,
            100% 60%,
            0 60%
          );
        }
        80% {
          -webkit-clip-path: polygon(
            0 100%,
            100% 100%,
            100% 99%,
            0 99%
          );
          clip-path: polygon(
            0 100%,
            100% 100%,
            100% 99%,
            0 99%
          );
        }
        100% {
          -webkit-clip-path: polygon(
            0 70%,
            100% 70%,
            100% 71%,
            0 71%
          );
          clip-path: polygon(
            0 70%,
            100% 70%,
            100% 71%,
            0 71%
          );
        }
      }

      @keyframes glitch-anim-flash {
        0% {
          opacity: 0.2;
          transform: translate3d(
            var(--glitch-image-gap-horizontal),
            var(--glitch-image-gap-vertical),
            0
          );
        }
        33%,
        100% {
          opacity: 0;
          transform: translate3d(0, 0, 0);
        }
      }
    `

  }

  static get properties() {

    return {
      glitch: { type: String, attribute: true },
      src: { type: String, attribute: true },
      active: { type: Boolean, attribute: true },
      aspectRatio: { type: Number },
      wrapper: { type: Object }
    }

  }

  constructor() {

    super()

    this.glitch = '1'
    this.active = false
    this.aspectRatio = 1

  }

  firstUpdated() {

    const hasWidth = this.hasAttribute('width')
    const hasHeight = this.hasAttribute('height')
    const hasDimensions = hasWidth && hasHeight

    this.wrapper = this.shadowRoot.querySelector('.c-glitch-image')

    if (this.active) {

      this.wrapper.classList.add('is-glitching')

    }

    if (hasDimensions) {

      const imgWidth = this.getAttribute('width')
      const imgHeight = this.getAttribute('height')
      this.aspectRatio = imgWidth / imgHeight

    }

    this.wrapper.style.setProperty(
      '--glitch-aspect-ratio',
      this.aspectRatio
    )

    this.wrapper.style.setProperty(
      '--glitch-image',
      'url(' + this.src + ')'
    )

  }

  render() {

    return html`
      <div
        class="c-glitch-image c-glitch-image--style-${this.glitch}"
      >
        <div
          class="c-glitch-image__image"
        />
        </div>
        <div
          class="c-glitch-image__image"
        />
        </div>
        <div
          class="c-glitch-image__image"
        />
        </div>
        <div
          class="c-glitch-image__image"
        />
        </div>
        <div
          class="c-glitch-image__image"
        />
        </div>
      </div>
    `

  }

}
