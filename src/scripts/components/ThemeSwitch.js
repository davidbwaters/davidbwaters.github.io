/*
 *  Components - Theme Switch
 */

import { LitElement, html, css } from 'lit-element'

export class ThemeSwitch extends LitElement {

  static get styles() {

    return css`
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
        border-right: solid 1px var(--theme-switch-border);
        display: grid;
        height: 100%;
        width: 100%;
      }

      .c-theme-switch__label {
        align-items: center;
        column-gap: .4rem;
        cursor: pointer;
        display: grid;
        grid-auto-flow: column;
        justify-content: center;
        position: relative;
      }

      @media (min-width:35em) {

        .c-theme-switch__label {
          column-gap: .5rem;
        }

      }

      .c-theme-switch__input {
        position: absolute;
        height: 0;
        opacity: 0;
        width: 0;
      }

      .c-theme-switch__switch {
        background: var(--theme-switch-bg);
        border: solid var(--theme-switch-switch-border) 1px;
        height: 1.8rem;
        width: .9rem;
      }

      @media (min-width:35em) {

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
        font-size: 0.66rem;
      }

      @media (min-width:35em) {

        ::slotted(i) {
          font-size: 0.75rem;
        }

      }
    `

  }

  _handleChange() {

    const current = document.body.dataset.theme

    document.body.dataset.theme =
      current === 'dark' ? 'light' : 'dark'

  }

  render() {

    return html`
      <label class="c-theme-switch__label">
        <input
          type="checkbox"
          class="c-theme-switch__input"
          @change=${this._handleChange}
        />
        <span class="c-theme-switch__switch"></span>
        <slot></slot>
      </label>
      
    `

  }

}
