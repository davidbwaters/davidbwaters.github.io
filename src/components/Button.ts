/*
 *  Components - Button
 */

import { html, LitElement, PropertyValueMap } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'


@customElement('c-button')

export class CButton extends LitElement {

  @property ({
    converter: (value) => {
      return 'c-button--' + value
    }
  })
  variant = 'c-button--primary'

  @property({
    converter: (value) => {
      return 'c-button--' + value
    }
  })
  size = 'medium'

  @property()
  label = 'Label'

  @property()
  width = ''

  @property()
  onClick = null

  @property()
  icon: IconType["icon"] | 'none'= ''

  @property()
  href = null

  @property()
  title = ''

  @property({
    converter: (value) => {
      return value ? 'is-expanded' : ''
    }
  })
  isExpanded = ''

  protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (this.size !== 'c-button--large' && this.size !== 'c-button--small') {
      this.size = 'c-button--medium'
    }

    if (this.width && (
      this.width === 'full' || this.width === 'fill'
    )) {
      this.width = '100%'
    }
    if (this.width) {
      this.style.setProperty('--button-width', this.width)
    }
    else {
      this.style.setProperty('--button-width', 'auto')
    }

  }

  render() {

    return this.href
    ? html`
      <a
        class=${['c-button', this.size, this.variant, this.isExpanded].join(' ')}
        @click=${this.onclick}
        .href=${this.href}
        title=${this.title}
      >
      ${
        this.icon && this.icon !== 'none'
          ? html`<c-icon icon=${this.icon}></c-icon>`
          : ''
      }
        <span>${this.label}</span>
      </a>
    `

    : html`
      <button
        class=${['c-button', this.size, this.variant, this.isExpanded].join(' ')}
        @click=${this.onclick}
      >
      ${
        this.icon && this.icon !== 'none'
          ? html`<c-icon icon=${this.icon}></c-icon>`
          : ''
      }
        <span>${this.label}</span>
      </button>
    `;

  }

  protected createRenderRoot() {
    return this;
  }
};

declare global {
  interface HTMLElementTagNameMap {
    "c-button": CButton;
  }
}
