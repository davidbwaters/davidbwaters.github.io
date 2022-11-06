/*
 *  Components - Theme Switch
 */

import {
  LitElement,
  html,
  css
} from 'lit'

import {
  customElement
} from 'lit/decorators.js';


@customElement('c-theme-switch')

export class CThemeSwitch extends LitElement {

  static styles = css`
    * {
      box-sizing: border-box;
    }

    *::selection {
      background-color: transparent;
    }

    :host {
      --theme-switch-border: var(--color-subtle);
      --theme-switch-bg: var(--color-subtle);
      --theme-switch-switch-border: rgba(0, 0, 0, 0.8);
      --theme-switch-switch: white;
      align-items: center;
      display: grid;
      height: 100%;
      width: 100%;
    }

    .c-theme-switch__wrapper {
      align-items: center;
      column-gap: var(--spacing-size-1);
      cursor: pointer;
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      position: relative;
    }

    .c-theme-switch__wrapper:nth-of-type(2) {
      display: none;
    }

    .c-theme-switch__input {
      position: absolute;
      height: 0;
      opacity: 0;
      width: 0;
    }

    .c-theme-switch__switch {
      background: var(--theme-switch-bg);
      border: solid var(--theme-switch-switch-border)
        1px;
      height: 1.8rem;
      width: 0.9rem;
    }

    @media (min-width: 35em) {

      .c-theme-switch__switch {
        height: 2rem;
        width: 1rem;
      }

    }

    .c-theme-switch__switch::before {
      background: white;
      content: '';
      display: block;
      height: 50%;
      transition: all 0.25s;
    }

    .c-theme-switch__input:checked
      + .c-theme-switch__switch::before {
      transform: translateY(100%);
    }

    ::slotted(i) {
      font-size: 0.9em;
    }

    @media (min-width: 35em) {

      ::slotted(i) {
        font-size: 1em;
      }

    }
  `

  handleChange() {

    const currentTheme = document.body.dataset.theme

    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

    document.body.dataset.theme = newTheme

    document.body.classList.remove('theme-' + currentTheme)
    document.body.classList.add('theme-' + newTheme)


    this.dispatchEvent(

      new CustomEvent('themeChange', {

        detail: { theme: document.body.dataset.theme },
        bubbles: true,
        composed: true

      })

    )

  }

  render() {

    return html`
      <label class="c-theme-switch__wrapper">
        <input
          type="checkbox"
          class="c-theme-switch__input"
          @change=${this.handleChange}
        />
        <span class="c-theme-switch__switch"></span>
        <slot></slot>
      </label>
    `

  }

}


declare global {
  interface HTMLElementTagNameMap {
    "c-theme-switch": CThemeSwitch;
  }
}
