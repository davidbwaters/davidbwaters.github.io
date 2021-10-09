/*
 *  Components - Section Header
 */

import when from 'once-defined'

when('uce-lib').then(({define, render, html, svg, css}) => {

  define('c-section-header', {

    styles: css`
      :host  {
        --section-header-title-font: var(--font-display);
        --section-header-title-font-weight: var(--font-display-weight);

        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
        display: block;
        text-align: center;
        will-change: transform, opacity;
      }

      ::slotted([slot='title']),
      ::slotted([slot='description']) {
        box-sizing: border-box;
        display: block;
      }

      ::slotted([slot='title']) {
        filter: url('#animate');
        font-size: 1.4rem;
        font-family: var(--section-header-title-font), sans-serif;
        font-weight: var(--section-header-title-font-weight);
        line-height: 1.25;
        padding-bottom: 4rem;
        padding-left: .5rem;
        padding-right: .5rem;
        padding-top: 5rem;
        text-transform: uppercase;
      }

      @media (min-width: 16em) {

        ::slotted([slot='title']) {
          font-size: 1.5rem;
          padding-left: 1rem;
          padding-right: 1rem;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--color-fg);
        }
      }

      @media (min-width: 25em) {

        ::slotted([slot='title']) {
          font-size: 2.0736rem;
          font-size: clamp(
            2.0736rem,
            9vw,
            2.4rem
          );
        }

      }

      @media (min-width: 45em) {
        ::slotted([slot='title']) {
          padding-left: 6rem;
          padding-right: 6rem;
        }
      }

      ::slotted([slot='description']) {
        border-bottom: solid 1px
          var(--color-subtle-alternate);
        box-shadow: 0 0 0 1px var(--color-subtle-alternate);
        padding-bottom: 1.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 1.5rem;
      }
    `,

    attachShadow: {mode: 'open'},

    render() {

      this.html`
        <style>
          ${this.styles}
        </style>
        <slot name="title"> </slot>
        <slot name="description"> </slot>
      `

    }

  })

})
