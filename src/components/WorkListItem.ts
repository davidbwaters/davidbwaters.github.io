/*
 *  Components - Work List Item
 */

import {
  LitElement,
  html,
  css
} from 'lit'

import { unsafeHTML } from 'lit/directives/unsafe-html.js'

import {
  customElement,
  property
} from 'lit/decorators.js';


@customElement('c-work-list-item')

export class CWorkListItem extends LitElement {

  static styles = css`
    :host  {
      box-shadow: 0 0 0 1px var(--color-subtle-alternate);
      display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: 100%;
      max-height: calc(130vh - 3rem);
      margin-left: auto;
      margin-right: auto;
      margin-top: 1px;
      padding-bottom: 1em;
      position: relative;
    }

    @media (max-width:45em) {
      :host:first-child {
        margin-top: 0rem;
      }
    }

    @media (min-width:45em) {

      :host {
        max-height: 130vh;
        max-width: calc(100% - (((var(--spacing-size-2) * 2) + 1.75rem) * 2));
        padding-bottom: 1.25em;
      }

    }

    @media (min-width:80em) {

      :host {
        max-width: min(calc(100% - (((var(--spacing-size-2) * 2) + 1.75rem) * 2)), var(--wrapper-max));
      }

    }

    :host:last-child {
      padding-bottom: 0rem;
    }

    .c-work-list__item-backdrop {
      background-color: var(--color-bg);
      display: block;
      height: 3.5rem;
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
      margin-top: -3.5rem;
      position: sticky;
      top: 3.5rem;
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
      gap: var(--spacing-size-1);
      overflow: hidden;
      padding-bottom:  var(--spacing-size-2);
      padding-top:  var(--spacing-size-2);
      transform: translate3d(0,0,0);
    }

    .c-work-list__item-info-title,
    .c-work-list__item-info-taglist,
    .c-work-list__item-info-description {
      padding-left:   var(--spacing-size-2);
      padding-right:  var(--spacing-size-2);
    }


    @media (min-width:35em) {

      .c-work-list__item-info-title,
      .c-work-list__item-info-taglist,
      .c-work-list__item-info-description {
        padding-left:  1.5rem;
        padding-right: 1.5rem;
      }

    }

    .c-work-list__item-info-title,
    h4.c-work-list__item-info-title {
      font-family: var(--font-heading);
      font-weight: var(--font-weight-normal);
      font-size: calc(var(--text-size-large-1) * 1.2);
      line-height: 1;
      margin-bottom: 0 !important;
      margin-top: .2em;
    }

    .c-work-list__item-info-taglist {

      display: none;
      font-family: var(--font-mono);
      font-weight: var(--font-mono-weight);
      font-size: var(--text-size-small-2);
      text-transform: uppercase;;
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

    @media (min-width:35em) {

      .c-work-list__item-lower,
      .c-work-list__item-lower-three {

        grid-auto-columns: 1fr;
        grid-gap: 1rem;
        grid-auto-flow: column;
      }

    }

    @media (min-width:30em) {

      .c-work-list__item-lower,
      .c-work-list__item-lower-three {
        grid-auto-columns: 1fr;
        grid-gap: 1rem;
      }

    }

    :host:last-child .c-work-list__item-lower,
    :host:last-child .c-work-list__item-lower-three {
      border-bottom: none;
    }

    @media (min-width:48em) {

      .c-work-list__item-lower-three {
        grid-template-columns: 3fr 4fr 3fr;
        grid-auto-flow: column;
      }

    }

    .c-work-list__item:last-child .c-work-list__item-lower {
      border-bottom: none;
    }

    .u-cursor-zoom-in {
      cursor: zoom-in !important;
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

  @property({type: Boolean})
  hasCaseStudy = false

  constructor() {
    super()
    if (this.querySelector('[slot="case-study"]')) {
      this.hasCaseStudy = true
      this.caseStudy = this.querySelector('[slot="case-study"]').innerHTML
      this.querySelector('[slot="case-study"]').innerHTML = ''
    }

  }

  connectedCallback() {
    super.connectedCallback()

    this.taglist = JSON.parse(this.tags).join(', ')
  }

  firstUpdated() {

    if (!JSON.parse(this.hideModal)) {

      const modalEl = this.renderRoot.querySelector('c-modal')

      modalEl.dataset.modalTrigger = this.slug
      document.body.appendChild(modalEl)

      // console.log(this.hasCaseStudy)

    }

  }

  render() {

    return html`
      <div class="c-work-list__item-backdrop"></div>
      <div data-sticky class="c-work-list__item-info">
        <div class="c-work-list__item-info-inner">
          <h4 class="c-work-list__item-info-title u-text-large-2">
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
                u-margin-bottom-0
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
                this.hasCaseStudy
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


}



declare global {
  interface HTMLElementTagNameMap {
    "c-work-list-item": CWorkListItem;
  }
}
