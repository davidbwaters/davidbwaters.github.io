/*
 *  Scripts - Main
 */

import { html, render } from 'lit-html'
import WebFont from 'webfontloader'
import Scrambler from 'scrambling-letters'
import stickybits from 'stickybits'
import { TopBar } from './components/TopBar'
import { Hero } from './components/Hero'
import { ThemeSwitch } from './components/ThemeSwitch'
import { Squiggle } from './components/Squiggle'
import { GlitchImage } from './components/GlitchImage'
import { Modal } from './components/Modal'
import { Loader } from './components/Loader'

customElements.define('c-top-bar', TopBar)
customElements.define('c-hero', Hero)
customElements.define('c-theme-switch', ThemeSwitch)
customElements.define('c-squiggle', Squiggle)
customElements.define('c-glitch-image', GlitchImage)
customElements.define('c-modal', Modal)
customElements.define('c-loader', Loader)

WebFont.load({
  classes: false,
  custom: {
    families: [
      'gangster_grotesklight',
      'gangster_groteskregular',
      'league_monoregular',
      'synebold',
      'syneextrabold'
    ],
    timeout: 4000
  }
})

render(
  html`

    <c-top-bar>
      <a slot="logo" href="/">
        <svg class="u-theme-fill" width="30" height="24">
          <title>David B. Waters Logo</title>
          <path
            d="M 6,0 V 24 H 0 V 0 Z m 24,12 v 6 l -6,6 V 12 Z M 18,0 v 18 l -6,6 V 0 Z m 12,0 v 6 l -6,6 V 0 Z"
          />
        </svg>
      </a>
      <a slot="link" href="mailto:mrdavidbwaters@gmail.com">
        <i class="c-icon c-icon--mail"></i>
      </a>
      <a slot="link" href="https://twitter.com/dbwatersdesigns">
        <i class="c-icon c-icon--twitter"></i>
      </a>
      <a slot="link" href="https://dribbble.com/dbwatersdesigns">
        <i class="c-icon c-icon--dribbble"></i>
      </a>
      <a slot="link" href="https://github.com/davidbwaters">
        <i class="c-icon c-icon--github"></i>
      </a>
    </c-top-bar>

    <c-hero>
      <div slot="tagline">            
        Artist & <br>
        Designer & <br>
        Developer
      </div>
      <div slot="name-stylized">
        DAVIDBWATERS
      </div>
      <div slot="heading">
        <h2 class="u-text-large-3">
          Building digital solutions to promote growth.
          <c-squiggle></c-squiggle>
        </h2>
      </div>
      <c-theme-switch slot="footer-box-left">
        <i class="c-icon c-icon--switch"></i>
      </c-theme-switch>
      <div slot="footer-content-left">
        <a class="c-icon c-icon--hand u-animation-wave u-text-large-2 u-margin-bottom-0" href="mailto:mrdavidbwaters@gmail.com"></a>
        <span>
          Available Now!
        </span>
      </div>
      <div slot="footer-content-right">
      <a class="c-button" href="mailto:mrdavidbwaters@gmail.com">Contact</a>
        <span>
          Start 
          <span class="u-hidden@mobile">Your</span>
          Project!
        </span>
      </div>
      <div slot="footer-box-right">
        <i class="c-icon c-icon--arrow-down u-text-large-2"></i>
      </div>
      <hr slot="bottom" class="u-separator">
    </c-hero>
    
    <section>
      <header class="u-padding-top-6 u-padding-bottom-5 u-bg-noise u-text-align-center">
        <h3 class="u-text-large-4 u-text-display u-text-uppercase u-text-outline">
          Skills
        </h3>
        <c-squiggle></c-squiggle>
      </header>
      <div class="u-border-top-accent-alternate u-padding-vertical-3 u-padding-horizontal-3 u-text-align-center u-bg-noise">
        Skills, tools of the trade, and technologies I enjoy working with.
      </div>
      <ul class="c-skill-list">
        <li class="c-skill-list__skill">
          <img class="c-skill-list__image" src="images/Elephant.png" alt="elephant">
          <div class="c-skill-list__text">
            <h4 class="c-skill-list__title u-text-title">
              Web Platform
            </h4>
            <span class="c-skill-list__gap"></span>
            <span class="c-skill-list__number u-text-title">01</span>
            <span class="c-skill-list__description">
              Web Components, Applications, #UseThePlatform
            </span>
          </div>
        </li>
        <li class="c-skill-list__skill">
          <img class="c-skill-list__image" src="images/Lion.png" alt="elephant">
          <div class="c-skill-list__text">
            <h4 class="c-skill-list__title u-text-title">
              Design
            </h4>
            <span class="c-skill-list__gap"></span>
            <span class="c-skill-list__number u-text-title">02</span>
            <span class="c-skill-list__description">
              Figma, Sketch, Adobe CS**
            </span>
          </div>
        </li>
        <li class="c-skill-list__skill">
          <img class="c-skill-list__image" src="images/Squirrel.png" alt="elephant">
          <div class="c-skill-list__text">
            <h4 class="c-skill-list__title u-text-title">
              Development
            </h4>
            <span class="c-skill-list__gap"></span>
            <span class="c-skill-list__number u-text-title">03</span>
            <span class="c-skill-list__description">
              JS/ES*, Node.js, Jamstack
            </span>
          </div>
        </li>
        <li class="c-skill-list__skill">
          <img class="c-skill-list__image" src="images/Camel.png" alt="elephant">
          <div class="c-skill-list__text">
            <h4 class="c-skill-list__title u-text-title">
              Consultation
            </h4>
            <span class="c-skill-list__gap"></span>
            <span class="c-skill-list__number u-text-title">04</span>
            <span class="c-skill-list__description">
              Not sure where to start? I can help!
            </span>
          </div>
        </li>
      </ul>
      <hr class="u-separator-alternate c-hero__bottom">
    </section>

    <section>
      <header class="
        u-padding-top-6 
        u-padding-bottom-5 
        u-text-align-center 
        u-border-bottom-accent-alternate 
        u-bg-noise
        u-z-index-3
      ">
        <h3 class="u-text-large-4 u-text-display u-text-uppercase u-text-outline">
          Selected <br>
          Works
        </h3>
        <c-squiggle></c-squiggle>
      </header>
      <div class="u-padding-vertical-3 u-padding-horizontal-3 u-text-align-center u-bg-noise">
        A curated list of projects worked on and things I built.
      </div>
      <ul class="c-work-list u-bg-pattern-diagonal">
        <li class="c-work-list__item">
          <div data-sticky class="c-work-list__item-info">
            <div class="c-work-list__item-info-inner">
              <h4 class="c-work-list__item-info-title" >
                Personal Branding
              </h4>
              <div class="c-work-list__item-info-taglist u-text-title">
                Techologies: Adobe Illustrator
              </div>
              <div class="c-work-list__item-info-description">
                <p>
                  Item infomation and description.
                </p>
              </div>
            </div>
          </div>
          <div class="c-work-list__item-preview">
            <c-glitch-image 
              src="images/Work-DBW-Logos-1.png" 
              glitch=2 alt="Logos Dark BG"
              width=912
              height=712
            >
            </c-glitch-image>
            <c-glitch-image 
              src="images/Work-DBW-Logos-2.png" 
              glitch=2 alt="Logos Light BG"
              width=912
              height=712
            >
            </c-glitch-image>
          </div>
          <div class="c-work-list__item-lower">
            <button 
              class="c-button c-button--large c-button--block"
              data-modal-target="modal-logos"
            >
              Show More
            </button>
            <c-modal 
              data-modal-trigger="modal-logos"
            >
              <header class="
                u-padding-top-6 
                u-padding-bottom-5 
                u-text-align-center 
                u-border-bottom-accent-alternate 
                u-bg-noise
                u-z-index-3
              ">
                <h3 class="u-text-large-3">
                  Personal Branding
                </h3>
                <c-squiggle></c-squiggle>
              </header>
              <div class="c-media-grid">
                <div>
                  <img src="images/Work-DBW-Logos-1.png" alt="Personal Branding Logos">
                </div>
                <div>
                  <img src="images/Work-DBW-Logos-1.png" alt="Personal Branding Logos">
                </div>
                <div>
                  <img src="images/Work-DBW-Logos-1.png" alt="Personal Branding Logos">
                </div>
              </div>
            </c-modal>
          </div>
        </li>
        <li class="c-work-list__item">
          <div data-sticky class="c-work-list__item-info">
            <div class="c-work-list__item-info-inner">
              <h4 class="c-work-list__item-info-title" >Item One</h4>
              
              <div class="c-work-list__item-info-taglist u-text-title">
                Techologies: Adobe Illustrator
              </div>
              <div class="c-work-list__item-info-description">
                <p>
                  Item infomation and description.
                </p>
              </div>
            </div>
          </div>
          <div class="c-work-list__item-preview">
            <c-glitch-image 
              src="images/Work-DBW-Logos-1.png" 
              glitch=2 alt="Logos Dark BG"
              width=912
              height=712
            >
            </c-glitch-image>
            <c-glitch-image 
              src="images/Work-DBW-Logos-2.png" 
              glitch=2 alt="Logos Light BG"
              width=912
              height=712
            >
            </c-glitch-image>
          </div>
        </li>
      </ul>
    </section>

    <footer class="c-page-footer u-bg-noise">
      <hr class="u-separator-alternate u-margin-0">
      <div class="c-page-footer__upper u-text-large-1">
        Made with <3 by David B Waters in 2020.
      </div>
      <div class="c-page-footer__lower">
        <small class="u-text-bolder">
          This site's source code is freely available under the MIT license
          <a href="https://github.com/davidbwaters/davidbwaters.github.io" alt="repo link">
            here 
          </a>
          .
          <br/>
          Stay tuned! It's still very much a work-in-progress.
        </small>
      </div>
    </footer>

    <c-loader>
      <c-glitch-image
        src="images/Loader-Image.svg"
        active
        glitch=1
        width=100
        height=100
      >
      </c-glitch-image>
    </c-loader>
  `, document.body
)

window.addEventListener('load', () => {

  stickybits('[data-sticky]')

})
