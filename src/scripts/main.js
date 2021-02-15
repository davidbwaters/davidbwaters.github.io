/*
 *  Scripts - Main
 */

import 'uce'
<<<<<<< Updated upstream
import '@ungap/custom-elements'
=======

import GLightbox from 'glightbox'
import ImagePreloader from 'image-preloader'
import Scrambler from 'scrambling-letters'

>>>>>>> Stashed changes
import 'glightbox/dist/css/glightbox.css'

import './App'
import './components/CanvasNoise'
import './components/CanvasTransition'
import './components/GlitchImage'
import './components/Hero'
import './components/Loader'
import './components/Modal'
import './components/Squiggle'
import './components/SectionHeader'
import './components/ThemeSwitch'
import './components/TopBar'

<<<<<<< Updated upstream
import GLightbox from 'glightbox'
import ImagePreloader from 'image-preloader'
import Scrambler from 'scrambling-letters'

// import stickybits from 'stickybits'

function scramble() {
=======
function scramble() {

  setTimeout(() => {
>>>>>>> Stashed changes

  setTimeout(() => {
    Scrambler({
      target: '[data-scrambler]',
      random: [1000, 1000],
      speed: 60
    })
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
    'padding: 10px 0px 10px 10px',
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
    cl, clh, cle
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

<<<<<<< Updated upstream
  const modals = document.querySelectorAll('c-modal')

=======
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
preloader.preload(
  ...preloadingImages
).then(function(status){

  loader.disable()
  scramble()

})
=======
preloader
  .preload(...preloadingImages)
  .then(function(status) {

    let app = document.querySelector('c-app')

    console.log(app.preload)

    app.preload().then(() => {

      loader.disable()
      scramble()

    })

  })
>>>>>>> Stashed changes
