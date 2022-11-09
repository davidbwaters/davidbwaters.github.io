/*
 *  Components - Icon
 */

import { html, unsafeCSS, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('c-icon')

export class CIcon extends LitElement {

  static styles = unsafeCSS`
    .c-icon {
      display: grid;
      grid-template-rows: 100%;
      height: calc(1em - 0.28em);
      place-items: start;
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
      height: 1em;
      mask-position: 50% 50%;
      mask-repeat: no-repeat;
      mask-size: contain;
      text-transform: none !important;
      transform: translatey(-14%);
      transition: none;
      width: 1em;
      mask: var(--svg-icon);
    }

  `

  @property()
  icon:
    'arrow-down' | 'expand' | 'github' |'plus' |'wave' | 'arrow-left' | 'mail' |
    'theme' | 'windows' | 'dribbble' |'npm' | 'twitter' | 'expand' | 'wave-alt'
    = 'expand'

  render() {

    return html`
      <i class='c-icon' style='--svg-icon: var(--svg-${this.icon})'></i>
    `;

  }

};
