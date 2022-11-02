import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * Primary UI component for user interaction
 */
@customElement('c-icon')

export class CIcon extends LitElement {

  @property()
  icon:
    'arrow-down' | 'expand' | 'github' |'plus' |'wave' | 'arrow-left' | 'mail' |
    'theme' | 'windows' | 'dribbble' |'npm' | 'twitter' | 'expand' | 'wave-alt'
    = 'expand'

  render() {

    return html`
      <i class='c-icon c-icon--${this.icon}'></i>
    `;

  }

  protected createRenderRoot() {
    return this;
  }

};
