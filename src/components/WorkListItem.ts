d/*
 *  Components - Section Header
 */

import {
  LitElement,
  html
} from 'lit'

import { unsafeHTML } from 'lit/directives/unsafe-html.js'

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
      max-height: calc(130vh - 3rem);
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 1em;
    }

    @media (max-width:45em) {
      c-work-list-item:first-child {
        margin-top: 0rem;
      }
    }

    @media (min-height:35em) and (min-width:45em) {

      c-work-list-item {
        max-height: 130vh;
        max-width: calc(100% - 9rem);
        padding-bottom: 1.25em;
      }

    }

    @media (min-height:35em) and (min-width:80em) {

      c-work-list-item {
        max-width: 66rem;
      }

    }

    c-work-list-item:last-child {
      padding-bottom: 0rem;
    }

    .c-work-list__item-backdrop {
      background-color: var(--color-bg);
      display: block;
      height: 3rem;
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
      margin-top: -3rem;
      position: sticky;
      top: 3rem;
      z-index: 5;
    }

    @media (min-height:35em) and (min-width:45em) {

      .c-work-list__item-info {
        top: 0;
        z-index: 1;
      }

    }

    .c-work-list__item-info-inner {
      -webkit-backdrop-filter: blur(0.75rem);
      background-color: var(--color-bg-semi-transparent);
      backdrop-filter: blur(0.75rem);
      box-shadow: 0 0 0 1px var(--color-subtle-alternate);
      display: grid;
      gap: 0.3rem;
      overflow: hidden;
      padding-bottom: 1rem;
      padding-top: 1.1rem;
      transform: translate3d(0,0,0);
    }

    @media (min-width:35em) {

      .c-work-list__item-info-inner {
        gap: 0.4rem;
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
      }

    }

    .c-work-list__item-info-title,
    .c-work-list__item-info-taglist,
    .c-work-list__item-info-description {
      padding-left:  0.75rem;
      padding-right: 0.75rem;
    }


    @media (min-width:35em) {

      .c-work-list__item-info-title,
      .c-work-list__item-info-taglist,
      .c-work-list__item-info-description {
        padding-left:  1.5rem;
        padding-right: 1.5rem;
      }

    }

    .c-work-list__item-info-title {
      margin: 0 !important;
    }



    .c-work-list__item-info-taglist {
      display: none;
    }


    @media (min-width:15em) {

      .c-work-list__item-info-taglist {
        display: block;
      }

    }

    .c-work-list__item-info-description  p {
      margin: 0;
    }


    .c-work-list__item-info-description {
      line-height: 1.25;
    }

    .c-work-list__item-preview {
      background-color: var(--color-subtle-alternate);
      display: grid;
      grid-gap: 1px;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
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

    c-work-list-item:last-child .c-work-list__item-lower,
    c-work-list-item:last-child .c-work-list__item-lower-three {
      border-bottom: none;
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
      padding-top: .5rem;
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
        padding-left: calc((100% - 70em) / 2);
        padding-right: calc((100% - 70em) / 2);
        padding-top: .5rem;
      }

    }

    .c-media-grid__text-item,
    .c-media-grid__text-item-wide,
    .c-media-grid article {
      display: grid;
      font-family: var(--font-main-regular);
      text-align: left;
      overflow-y: auto;
    }

    .c-media-grid__text-item {
      align-content: start;
      background: var(--color-bg-semi-transparent-contrast);
      box-shadow: inset 0 0 0 1px var(--color-subtle-alternate);
      gap: 0rem;
      padding-bottom: 1rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-top: 1rem;
    }

    .c-media-grid__text-item:has(div) {
      gap: 1rem;
    }


    @media (min-width:45em) {

      .c-media-grid__text-item {
        gap: 1rem;
        padding-bottom: calc(3rem + 1vw);
        padding-left: calc(2rem + 1vw);
        padding-right: calc(2rem + 1vw);
        padding-top: calc(3rem + 1vw);
      }

    }

    .c-media-grid__text-item-wide,
    .c-media-grid article {
      align-content: center;
      gap: 0.25rem;
      padding-bottom: .75rem;
      padding-left: .5rem;
      padding-right: .5rem;
      padding-top: .75rem;
    }


    @media (min-width:45em) {

      .c-media-grid__text-item-wide,
      .c-media-grid article {
        grid-column: 1 / span 2;
        padding-bottom: calc(4rem + 1vw);
        padding-left: calc(2rem + 1vw);
        padding-right: calc(2rem + 1vw);
        padding-top: calc(3rem + 1vw);
      }

    }

    @media (min-width:55em) {

      .c-media-grid__text-item-wide,
      .c-media-grid article {
        padding-left: calc(((100% - 50rem) / 2) + 2rem);
        padding-right: calc(((100% - 50rem) / 2) + 2rem);
      }

    }
    @media (min-width:75em) {

      .c-media-grid__text-item-wide,
      .c-media-grid article {
        padding-bottom: 4rem;
        padding-top: 3rem;
      }

    }

    .c-media-grid__image-item {
      background-color: var(--color-muted);
      border: solid 1px var(--color-subtle-alternate);
      box-shadow: 0 0 0 1px rgba(120,120,120,.8);
      display: grid;
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

  @property({type: String})
  taglist = ''

  @property({type: String})
  caseStudy = null

  constructor() {

    super()

    if (this.querySelector('[slot="case-study"]')) {
      this.caseStudy = this.querySelector('[slot="case-study"]').innerHTML
      this.querySelector('[slot="case-study"]').innerHTML = ''
    }


    if (!document.querySelector('.work-list-styles')) {
      document.head.innerHTML += `
        <style class='work-list-styles'>
          ${this.styles}
        </style>
      `
    }


  }

  connectedCallback() {

    super.connectedCallback()

    this.taglist = JSON.parse(this.tags).join(', ')

  }

  firstUpdated() {


    if (!JSON.parse(this.hideModal)) {

      document.body.appendChild(this.querySelector('c-modal'))

    }

  }

  render() {

    return html`
      <div class="c-work-list__item-backdrop"></div>
      <div data-sticky class="c-work-list__item-info">
        <div class="c-work-list__item-info-inner">
          <h4 class="c-work-list__item-info-title u-h3">
            ${this.title}
          </h4>
          <div
            class="
              c-work-list__item-info-taglist
              u-text-title
            "
          >
            Techologies<span class="u-hidden@small"> Used</span>: ${this.taglist}
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
          <c-button
            href=${this.github}
            label=" Star on Github"
            icon="github"
            title=${this.title + ' Github Repo Link'}
          >
          </c-button>
        ` : ''}

        ${JSON.parse(this.hideModal) ? '' : html`
          <c-button
            data-modal-target="${this.slug}"
            data-modal-trigger-primary
            label= ${this.caseStudy ?
              "Show Case Study" :
              "Show More"
            }
            icon="expand"
          >
          </c-button>`
        }

        ${this.vsc ? html`
          <c-button
            href=${this.vsc}
            label=" View on VSC"
            icon="windows"
            title=${this.title + 'VSC Link'}
          >
          </c-button>
        ` : ''}

        ${this.npm ? html`
          <c-button
            href=${this.npm}
            label="Add on NPM"
            icon="npm"
            title=${this.title + 'NPM Module Link'}
          >
          </c-button>
        ` : ''}

        ${this.site ? html`
          <c-button
            href=${this.site}
            label="Visit Website"
            icon="plus"
            title=${this.title + 'Site Link'}
          >
          </c-button>
        ` : ''}

        ${JSON.parse(this.hideModal) ? '' : html`
          <c-modal
            data-modal-trigger="${this.slug}"
          >
            <c-section-header
              class="u-z-index-3"
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
                u-text-large-1
              "
            >
              ${
                this.description
                  ? html`
                    <article
                      class=${
                        'u-text-large-1 ' +
                        JSON.parse(this.wide)
                          ? 'c-media-grid__text-item-wide'
                          : 'c-media-grid__text-item'
                      }
                    >
                      <div>
                      ${
                        JSON.parse(this.description).map(item => unsafeHTML(`
                          <p> ${item} </p>
                        `)
                        )
                      }
                      </div>
                    </article>
                  `
                  : ''
              }
              ${
                this.querySelector('[slot="case-study"]')
                  ? unsafeHTML(

                    this.caseStudy
                  )
                  : ''
              }
              ${JSON.parse(this.images).map(item => html`
                <div class="c-media-grid__image-item">
                  <c-gallery-image
                    href="${item}"
                    src="${item}"
                    alt=${this.title + ' Screenshot'}
                    gallery=${this.gallery}
                  ></c-gallery-image>
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
