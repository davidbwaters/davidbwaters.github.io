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
  `

  @property({type: String})
  gallery = ''

  @property({type: String})
  src = ''

  @property({type: String})
  alt = ''


  createRenderRoot() {
    return this;
  }

  render() {

    return html`
      <style>
        ${this.styles}
      </style>
      <a
        class="c-gallery-image__image"
        data-glightbox=""
        data-gallery=${this.gallery}
        href=${this.src}
      >
        <img
          class="c-gallery-image__image"
          src=${this.src}
          alt=${this.alt}
        >
      </a>
    `

  }

}



declare global {
  interface HTMLElementTagNameMap {
    "c-gallery-image": CGalleryImage;
  }
}
