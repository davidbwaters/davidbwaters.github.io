/*
 *  Components - Canvas Transition
 */

//import { Sketch } from '../util/Sketch'
import when from 'once-defined'

when('uce-lib').then(({ define, css }) => {

  define('c-canvas-main', {
    styles: css`
      :host {
        display: block;
        position: absolute;
      }
    `,

    props: {
      theme: document.body.dataset.theme,
      darkImages: [
        '/images/Hero-Paint-1-Dark.jpg',
        '/images/Hero-Paint-2-Dark.jpg'
      ],
      lightImages: [
        '/images/Hero-Paint-1-Light.jpg',
        '/images/Hero-Paint-2-Light.jpg'
      ]
    },

    init() {


    },

    // attachShadow: { mode: 'open' },

    render() {

    }
  })

})
