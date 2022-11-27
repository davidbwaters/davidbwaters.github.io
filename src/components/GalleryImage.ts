/*
 *  Components - Section Header
 */

import {
  LitElement,
  html
} from 'lit'

import {
  customElement,
  property
} from 'lit/decorators.js';


@customElement('c-gallery-image')

export class CGalleryImage extends LitElement {

  styles = `
    .c-gallery-image__image {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }

    .c-gallery-image__image-wrapper:nth-of-type(2) {
      display: none;
    }
  `

  @property({type: String})
  gallery = ''

  @property({type: String})
  src = ''

  @property({type: String})
  alt = ''

  render() {

    return html`
      <a
        class="c-gallery-image__image-wrapper u-width-fill u-height-fill"
        data-glightbox=""
        data-gallery=${this.gallery}
        href=${this.src}
      >
        <img
          class="c-gallery-image__image u-object-fit-cover u-width-fill u-height-fill"
          src=${this.src}
          alt=${this.alt}
        >
      </a>
    `
  }

  protected createRenderRoot() {
    return this;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "c-gallery-image": CGalleryImage;
  }
}
