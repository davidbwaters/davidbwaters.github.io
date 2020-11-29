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

      :host {
        --theme-switch-border: var(--color-subtle);
        --theme-switch-bg: var(--color-subtle);
        --theme-switch-switch-border: rgba(0, 0, 0, 0.8);
        --theme-switch-switch: white;

        align-items: center;
        border-right: solid 1px var(--theme-switch-border);
        display: grid;
        grid-auto-flow: column;
        grid-gap: 0.5rem;
        height: 100%;
        justify-content: center;
        justify-items: center;
        width: 100%;
      }

      .c-theme-switch__label {
        cursor: pointer;
        position: relative;
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
        display: block;
        height: 2rem;
        left: 0;
        width: 1rem;
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
        align-items: center;
        display: grid;
        font-size: 0.75rem;
        justify-content: right;
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
      </label>
      <slot></slot>
    `

  }

}
