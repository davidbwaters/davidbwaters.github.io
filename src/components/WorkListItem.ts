/*
 *  Components - Section Header
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


@customElement('c-work-list-item')

export class CWorkListItem extends LitElement {

  styles = `
    c-work-list-item  {
      box-shadow: 0 0 0 1px var(--color-subtle-alternate);
      display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 1rem;
    }

    @media (min-height:35em) and (min-width:45em) {

      c-work-list-item {
        max-width: calc(100% - 9rem);
        padding-bottom: 1.25rem;

      }

    }


    @media (min-height:35em) and (min-width:80em) {

      c-work-list-item {
        max-width: 72rem;
        padding-bottom: 1.25rem;

      }

    }

    @media (max-width:45em) {
      c-work-list-item:first-child {
        margin-top: 0rem;
      }
    }

    c-work-list-item:last-child {
      padding-bottom: 0rem;
    }


    .c-work-list__item-backdrop {
      background-color: var(--color-bg);
      display: block;
      height: 4.5rem;
      position: sticky;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    @media (min-height:35em) and (min-width:45em) {

      .c-work-list__item-backdrop::before {
        display: none;
      }

    }

    .c-work-list__item-info {
      margin-top: -4.5rem;
      position: sticky;
      top: 4.5rem;
      z-index: 5;
    }

    @media (min-height:35em) and (min-width:45em) {

      .c-work-list__item-info {
        margin-top: -4.5;
        top: 0;
        z-index: 1;
      }

    }

    .c-work-list__item-info-inner {
      background-color: var(--color-bg-opaque);
      backdrop-filter: blur(0.75rem);
      box-shadow: 0 0 0 1px var(--color-subtle-alternate);
      display: grid;
      gap: 0.3rem;
      padding-bottom: 1.25rem;
      padding-top: 1.25rem;
    }

    @media (min-width:45em) {

      .c-work-list__item-info-inner {
        gap: 0.4rem;
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
      }

    }

    .c-work-list__item-info-title {
      font-size: clamp(1.33rem, 3vw, 2rem);
      line-height: 1.1;
      margin: 0;
      padding-left:  1.5rem;
      padding-right: 1.5rem;
    }

    .c-work-list__item-info-description {
      font-size: .8rem;
      padding-left:  1.5rem;
      padding-right: 1.5rem;
    }


    @media (min-width:35em) {

      .c-work-list__item-info-description {
        font-size: 1em;
      }

    }

    @media (min-width:55em) {

      .c-work-list__item-info-description {
        font-size: 1.1em;
        max-width: 55rem;
      }

    }

    .c-work-list__item-info-description  p {
      margin: 0;
    }

    .c-work-list__item-info-taglist {
      padding-left:  1.5rem;
      padding-right: 1.5rem;
    }


    .c-work-list__item-preview {
      background-color: var(--color-subtle-alternate);
      display: grid;
      grid-gap: 1px;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      justify-items: center;
      overflow: hidden;
    }


    .c-work-list__item-lower,
    .c-work-list__item-lower-three {
      background-color: var(--color-bg);
      border-top:    solid 1px var(--color-subtle-alternate);
      border-bottom: solid 1px var(--color-subtle-alternate);
      display: grid;
      grid-auto-flow: row;
      grid-gap: .66rem;
      padding-bottom: calc(1.25rem + 2px);
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      padding-top: 1.25rem;
      position: relative;
      text-align: center;
      z-index: 0;
    }

    @media (min-width:25em) {

      .c-work-list__item-lower,
      .c-work-list__item-lower-three {
        grid-auto-flow: column;
      }

    }

    @media (min-width:35em) {

      .c-work-list__item-lower,
      .c-work-list__item-lower-three {
        grid-auto-columns: 1fr;
        grid-gap: 1rem;
      }

    }

    @media (min-width:55em) {

      .c-work-list__item-lower-three {
        grid-template-columns: 3fr 4fr 3fr;
        grid-auto-flow: column;
      }

    }

    .c-work-list__item:last-child .c-work-list__item-lower {
      border-bottom: none;
    }



    .c-media-grid {
      display: grid;
      grid-gap: .5rem;
      grid-template-columns: 1fr;
      padding-bottom: .5rem;
      padding-left: .5rem;
      padding-right: .5rem;
      padding-top: 1rem;
    }

    @media (min-width:45em) {

      .c-media-grid {
        grid-template-columns: 1fr 1fr;
        padding-bottom: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: .5rem;
      }

    }


    @media (min-width:75em) {

      .c-media-grid {
        grid-template-columns: 1fr 1fr;
        padding-left: calc((100% - 70em) / 2);
        padding-right: calc((100% - 70em) / 2);
        padding-top: .5rem;
      }

    }

    .c-media-grid__text-item,
    .c-media-grid__text-item-wide {
      align-content: center;
      display: grid;
      font-family: var(--font-main-regular);
      font-size: 1.1rem;
      padding-bottom: 1.5rem;
      padding-left: 2rem;
      padding-top: 1.5rem;
      text-align: left;
      overflow-y: auto;
    }

    .c-media-grid__text-item {
      padding-right: 2.5rem;
    }


    .c-media-grid__text-item-wide {
      padding-right: 2rem;
    }

    @media (min-width:45em) {

      .c-media-grid__text-item-wide {
        font-size: 1.3rem;
        grid-column: 1 / span 2;
        padding-bottom: 3rem;
        padding-top: 3rem;
      }

    }

    @media (min-width:55em) {

      .c-media-grid__text-item-wide {
        padding-left: calc(((100% - 50rem) / 2) + 2rem);
        padding-right: calc(((100% - 50rem) / 2) + 2rem);
      }

    }

    .c-media-grid__image-item {
      align-content: center;
      background-color: var(--color-muted);
      border: solid 1px var(--color-subtle-alternate);
      box-shadow: 0 0 0 1px rgba(120,120,120,.8);
      display: grid;
      justify-items: center;
      position: relative;
    }

    .c-media-grid__image {
      width: 100%;
    }

    .c-media-grid__image-caption,
    .c-media-grid__image-caption-alternate {
      background-color: rgba(100,100,100,.6);
      border-radius: 4px;
      bottom: 1rem;
      color: white;
      font-family: var(--font-main-regular);
      font-size: .66rem;
      line-height: 1.1;
      padding-bottom: .3rem;
      padding-left: .3rem;
      padding-right: .3rem;
      padding-top: .3rem;
      position: absolute;
    }

    .c-media-grid__image-caption {
      background-color: rgba(200,200,200,.15);
      box-shadow: 0 0 0 1px rgba(200,200,200,.225);
      color: white;
    }

    .c-media-grid__image-caption-alternate {
      background-color: rgba(100,100,100,.05);
      box-shadow: 0 0 0 1px rgba(100,100,100,.15);
      color: black;
    }

  `

  @property({type: String})
  previewImages = '[]'

  @property({type: String})
  images = '[]'

  @property({type: String})
  glitch = '["6", "6"]'

  @property({type: String})
  tags = '[]'

  @property({type: String})
  previewWidth = '800'

  @property({type: String})
  previewHeight = '600'

  @property({type: String})
  title = ''

  @property({type: String})
  slug = ''

  @property({type: String})
  gallery = '0'

  @property({type: String})
  description = ''

  @property({type: String})
  shortDescription = ''

  @property({type: String})
  github = null

  @property({type: String})
  vsc = null

  @property({type: String})
  npm = null

  @property({type: String})
  site = null

  @property({type: String})
  threeButton = 'false'

  @property({type: String})
  hideModal = 'false'

  @property({type: String})
  wide = 'false'

  taglist

  firstUpdated() {

    this.taglist = JSON.parse(this.tags).join(', ')

    if (!JSON.parse(this.hideModal)) {

      document.body.appendChild(this.querySelector('c-modal'))

    }

    if (!document.querySelector('.work-list-styles')) {
      document.head.innerHTML += `
        <style class='work-list-styles'>
          ${this.styles}
        </style>
      `
    }

  }

  render() {

    return html`
      <div class="c-work-list__item-backdrop"></div>
      <div data-sticky class="c-work-list__item-info">
        <div class="c-work-list__item-info-inner">
          <h4 class="c-work-list__item-info-title">
            ${this.title}
          </h4>
          <div
            class="
              c-work-list__item-info-taglist
              u-text-title
            "
          >
            Techologies Used: ${this.taglist}
          </div>
          <div
            class="
              c-work-list__item-info-description
            "
          >
            <p>
              ${this.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <div
        class="
          c-work-list__item-preview
          ${JSON.parse(this.hideModal) ? '' : 'u-cursor-zoom-in'}"
        data-modal-target="${this.slug}"
      >
        ${
          JSON.parse(this.previewImages).map((item, index) => html`

            <c-glitch-image data-cursor-target
              src="${item}"
              alt=${this.title + ' Screenshot'}
              glitch=${(this.glitch && JSON.parse(this.glitch)[index]) || '2'}
              width=${this.previewWidth}
              height=${this.previewHeight}
            >
            </c-glitch-image>
          `

          )
        }
      </div>
      <div class="${

        JSON.parse(this.threeButton) ? 'c-work-list__item-lower-three' : 'c-work-list__item-lower'
      }">
        ${this.github ? html`
          <a
            class="c-button"
            href=${this.github}
            title=${this.title + ' Github Repo Link'}
          >
            <i
              class="
                c-icon
                c-icon--github
              "
            ></i>
            Star on Github
          </a>
        ` : ''}

        ${JSON.parse(this.hideModal) ? '' : html`
          <button
            class="c-button"
            data-modal-target="${this.slug}"
            data-modal-trigger-primary
          >
            <i
              class="
                c-icon
                c-icon--expand
              "
            ></i>
            Show More
          </button>`
        }

        ${this.vsc ? html`
          <a
            class="c-button"
            href="${this.vsc}"
            title=${this.title + 'VSC Link'}
          >
            <i
              class="
                c-icon
                c-icon--microsoft
              "
            ></i>
            View on VSC
          </a>
        ` : ''}

        ${this.npm ? html`
          <a
            class="c-button"
            href="${this.npm}"
            title=${this.title + 'NPM Module Link'}
          >
            <i
              class="
                c-icon
                c-icon--npm
              "
            ></i>
            Add on NPM
          </a>
        ` : ''}

        ${this.site ? html`
          <a
            class="c-button"
            href="${this.site}"
            title=${this.title + 'Site Link'}
          >
            <i
              class="
                c-icon
                c-icon--plus
              "
            ></i>
            Visit Website
          </a>
        ` : ''}

        ${JSON.parse(this.hideModal) ? '' : html`
          <c-modal
            data-modal-trigger="${this.slug}"
          >
            <c-section-header
              class="u-bg-noise u-z-index-3"
            >
              <div slot="title">
                ${this.title}
                <c-squiggle></c-squiggle>
              </div>
              <div slot="description" class="u-text-title">
                  Techologies Used: ${this.taglist}
              </div>
            </c-section-header>

            <div
              class="
              c-media-grid
              u-bg-pattern-diagonal-alternate
            "
            >
              <article
                class=${ JSON.parse(this.wide)
                  ? 'c-media-grid__text-item-wide'
                  : 'c-media-grid__text-item'
              }
              >
                ${JSON.parse(this.description).map(item => {
                  html`<p> ${item} </p>`
                })}
              </article>
              ${JSON.parse(this.images).map(item => html`
                <div class="c-media-grid__image-item">
                  <a
                    data-glightbox
                    data-gallery=${this.gallery}
                    href="${item}"
                  >
                    <img
                      class="c-media-grid__image"
                      src="${item}"
                      alt=${this.title + ' Screenshot'}
                    />
                  </a>
                </div>
              `)}

            </div>
          </c-modal>
        `}

      </div>
    `

  }

  createRenderRoot() {
    return this;
  }

}



declare global {
  interface HTMLElementTagNameMap {
    "c-work-list-item": CWorkListItem;
  }
}
