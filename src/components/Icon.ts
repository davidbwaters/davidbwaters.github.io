/*
 *  Components - Icon
 */

import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('c-icon')

export class CIcon extends LitElement {

  static styles = css`
    :host {
      --icon-size: 1em;
      display: inline-grid !important;
      height: var(--icon-size);
      place-content: center;
      width: var(--icon-size);
    }

    .c-icon {
      display: grid;
      grid-template-rows: 100%;
      height: calc(var(--icon-size) * 0.72);
      place-items: start;
      width: var(--icon-size);
    }

    .c-icon::before {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-mask: var(--svg-icon);
      -webkit-mask-position: 50% 50%;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-size: contain;
      background: currentColor;
      content: '';
      font-family: 'icons' !important;
      display: inline-grid !important;;
      font-style: normal !important;
      font-variant: normal !important;
      font-weight: normal !important;
      height: var(--icon-size);
      mask-position: 50% 50%;
      mask-repeat: no-repeat;
      mask-size: contain;
      text-transform: none !important;
      transform: translatey(-16%);
      transition: none;
      width: var(--icon-size);
      mask: var(--svg-icon);
    }

  `

  @property({reflect: true})
  icon:
    'arrow-down' | 'arrow-left' | 'dribbble' | 'expand' | 'folio' | 'github' |
    'location' | 'mail' | 'npm' | 'plus' |  'phone' | 'theme' | 'twitter' |
    'windows' | 'wave' | 'wave-alt'
    = 'expand'

  @property({reflect: true})
  size = '1em'

  firstUpdated(): void {
    this.style.setProperty('--svg-icon', 'var(--svg-${this.icon})')
    this.style.setProperty('--icon-size', this.size)
  }

  render() {

    return html`
      <i class='c-icon' style='--svg-icon: var(--svg-${this.icon})'></i>
    `;

  }

};
