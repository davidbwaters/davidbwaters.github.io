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
    .c-gallery-image__image-wrapper {
      display: grid;
    }
    .c-gallery-image__image {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  `

  @property({type: String})
  gallery = ''

  @property({type: String})
  src = ''

  @property({type: String})
  alt = ''

  @property()
  onClick = (a) => {}

  render() {

    return html`
      <a
        class="
          c-gallery-image__image-wrapper
          u-height-90vh
          u-width-90vw
          u-display-inline-block
        "
        data-glightbox=""
        data-gallery=${this.gallery}
        href=${this.src}
        @click=${this.onClick}
      >
        <img
          class="c-gallery-image__image u-object-fit-cover u-height-fill"
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
