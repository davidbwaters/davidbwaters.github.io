/*
 *  Components - Canvas Transition
 */

import { Sketch } from '../util/Sketch'
import when from 'once-defined'

when('uce-lib').then(({define, css}) => {

  define('c-canvas-transition', {

    styles: css`
      :host {
        display: block;
        position: absolute;
      }
    `,

    init() {

      this.render()

      const slider = this.shadowRoot
        .querySelector('.c-canvas-transition__slider')

      let sketch = new Sketch(slider, {
        duration: 2,
        debug: true,
        easing: 'easeOut',
        uniforms: {
          width: {value: 0.5, type:'f', min:0, max:10},
          scaleX: {value: 40, type:'f', min:0.1, max:60},
          scaleY: {value: 40, type:'f', min:0.1, max:60},
          // border: {value: 1, type:'f', min:0., max:1},
        },
        fragment: `
          uniform float time;
          uniform float progress;
          uniform sampler2D texture1;
          uniform sampler2D texture2;
          uniform vec4 resolution;
          varying vec2 vUv;
          varying vec4 vPosition;
          void main()	{
            vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
            vec2 p = newUV;
            float x = progress;
            vec4 f = mix(
              texture2D(texture1, p),
              texture2D(texture2, p),
              x);
            gl_FragColor = f;
          }
        `
      })

    },

    attachShadow: {mode: 'open'},

    render() {

      this.html`
        <style>
          ${this.styles}
        </style>
        <div class="c-canvas-transition__wrapper">
          <div
            class="c-canvas-transition__slider"
            data-images='[
              "/images/Hero-Paint-1-Dark.jpg",
              "/images/Hero-Paint-2-Dark.jpg"
            ]'
            data-displacement=""
          >
          </div>
        </div>
      `
    }

  })

})
