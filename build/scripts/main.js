/*
 *  Scripts - Main
 */

import '../_snowpack/pkg/@ungap/custom-elements.js'
import '../_snowpack/pkg/uce.js'

import '../_snowpack/pkg/glightbox/dist/css/glightbox.css.proxy.js'
import './components/CanvasNoise.js'
import './components/CanvasTransition.js'
import './components/GlitchImage.js'
import './components/Hero.js'
import './components/Loader.js'
import './components/Modal.js'
import './components/Squiggle.js'
import './components/SectionHeader.js'
import './components/ThemeSwitch.js'
import './components/TopBar.js'

import GLightbox from '../_snowpack/pkg/glightbox.js'
import ImagePreloader from '../_snowpack/pkg/image-preloader.js'
import Scrambler from '../_snowpack/pkg/scrambling-letters.js'

// import stickybits from 'stickybits'

function scramble() {

  setTimeout(() => {

    Scrambler({
      target: '[data-scrambler]',
      random: [1000, 1000],
      speed: 60
    })

  }, 1500)

}

function consoleLove() {

  const cl = [
    'background: #fff',
    'border-bottom: solid 1px black',
    'border-left: solid 1px black',
    'border-top: solid 1px black',
    'color: #666',
    'line-height: 35px',
    'padding: 10px 0px 10px 10px'
  ].join(';')

  const clh = [
    'background: #fff',
    'border-bottom: solid 1px black',
    'border-top: solid 1px black',
    'color: red',
    'line-height: 35px',
    'padding: 10px 5px 10px 0px',
    'width: 300px'
  ].join(';')

  const cle = [
    'background: #fff',
    'border-bottom: solid 1px black',
    'border-right: solid 1px black',
    'border-top: solid 1px black',
    'color: #666',
    'line-height: 35px',
    'padding: 10px 20px 10px 0px',
    'width: 300px'
  ].join(';')

  console.log(
    '%c Coded with %c ♥️ %c https://davidbwaters.com',
    cl,
    clh,
    cle
  )

}

function lightboxSetup() {

  GLightbox({
    selector: '*[data-glightbox]',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    openEffect: 'fade',
    closeEffect: 'fade',
    skin: 'dbw'
  })

}

const preloadingImages = [
  '/images/Loader.svg',
  '/images/Me-Dark.jpg',
  '/images/Me-Light.jpg',
  '/images/Hero-Paint-1-Dark.jpg',
  '/images/Hero-Paint-1-Light.jpg',
  '/images/Hero-Paint-2-Dark.jpg',
  '/images/Hero-Paint-2-Light.jpg',
  '/images/Noise-Clear.svg'
]

const preloader = new ImagePreloader()
const loader = document.querySelector('c-loader')

consoleLove()
lightboxSetup()

preloader
  .preload(...preloadingImages)
  .then(function(status) {

    loader.disable()
    scramble()

  })
