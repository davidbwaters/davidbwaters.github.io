/*
 *  Scripts - Main
 */
import { html, render } from '../modules/lit-html.js';
import WebFont from '../modules/webfontloader.js'; // import stickybits from 'stickybits'

import { TopBar } from './components/TopBar.js';
import { Hero } from './components/Hero.js';
import { ThemeSwitch } from './components/ThemeSwitch.js';
import { Squiggle } from './components/Squiggle.js';
import { SectionHeader } from './components/SectionHeader.js';
import { GlitchImage } from './components/GlitchImage.js';
import { Modal } from './components/Modal.js';
import { Loader } from './components/Loader.js';
customElements.define('c-top-bar', TopBar);
customElements.define('c-hero', Hero);
customElements.define('c-theme-switch', ThemeSwitch);
customElements.define('c-squiggle', Squiggle);
customElements.define('c-section-header', SectionHeader);
customElements.define('c-glitch-image', GlitchImage);
customElements.define('c-modal', Modal);
customElements.define('c-loader', Loader);
WebFont.load({
  classes: false,
  custom: {
    families: ['gangster_grotesklight', 'gangster_groteskregular', 'league_monoregular', 'synebold', 'syneextrabold'],
    timeout: 4000
  }
});
render(html`
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
      <a
        slot="link"
        href="https://twitter.com/dbwatersdesigns"
      >
        <i class="c-icon c-icon--twitter"></i>
      </a>
      <a
        slot="link"
        href="https://dribbble.com/dbwatersdesigns"
      >
        <i class="c-icon c-icon--dribbble"></i>
      </a>
      <a slot="link" href="https://github.com/davidbwaters">
        <i class="c-icon c-icon--github"></i>
      </a>
      <a
        slot="link"
        href="https://www.npmjs.com/~davidbwaters"
      >
        <i class="c-icon c-icon--npm"></i>
      </a>
    </c-top-bar>

    <c-hero class="u-bg-noise">
      <div slot="tagline">
        Artist & <br />
        Designer & <br />
        Developer
      </div>
      <div slot="name-stylized">DAVIDBWATERS</div>
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
        <a
          class="c-icon c-icon--hand u-animation-wave u-text-large-2 u-margin-bottom-0"
          href="mailto:mrdavidbwaters@gmail.com"
        ></a>
        <span> Available Now! </span>
      </div>
      <div slot="footer-content-right">
        <a
          class="c-button"
          href="mailto:mrdavidbwaters@gmail.com"
          >Contact</a
        >
        <span>
          Start
          <span class="u-hidden@mobile">Your</span>
          Project!
        </span>
      </div>
      <div slot="footer-box-right">
        <i
          class="c-icon c-icon--arrow-down u-text-large-2"
        ></i>
      </div>
      <hr slot="bottom" class="u-separator" />
    </c-hero>

    <section>
      <c-section-header class="u-bg-noise">
        <div slot="title">
          Skills
          <c-squiggle></c-squiggle>
        </div>
        <div slot="description">
          Skills, tools of the trade, and technologies I
          enjoy working with.
        </div>
      </c-section-header>
      <ul class="c-skill-list">
        <li class="c-skill-list__skill">
          <img
            class="c-skill-list__image"
            src="images/Elephant.png"
            alt="elephant"
          />
          <div class="c-skill-list__text">
            <h4 class="c-skill-list__title u-text-title">
              Web Platform
            </h4>
            <span class="c-skill-list__gap"></span>
            <span class="c-skill-list__number u-text-title"
              >01</span
            >
            <span class="c-skill-list__description">
              Web Components, Applications, #UseThePlatform
            </span>
          </div>
        </li>
        <li class="c-skill-list__skill">
          <img
            class="c-skill-list__image"
            src="images/Lion.png"
            alt="elephant"
          />
          <div class="c-skill-list__text">
            <h4 class="c-skill-list__title u-text-title">
              Design
            </h4>
            <span class="c-skill-list__gap"></span>
            <span class="c-skill-list__number u-text-title"
              >02</span
            >
            <span class="c-skill-list__description">
              Figma, Sketch, Adobe CS**
            </span>
          </div>
        </li>
        <li class="c-skill-list__skill">
          <img
            class="c-skill-list__image"
            src="images/Squirrel.png"
            alt="elephant"
          />
          <div class="c-skill-list__text">
            <h4 class="c-skill-list__title u-text-title">
              Development
            </h4>
            <span class="c-skill-list__gap"></span>
            <span class="c-skill-list__number u-text-title"
              >03</span
            >
            <span class="c-skill-list__description">
              JS/ES*, Node.js, Jamstack
            </span>
          </div>
        </li>
        <li class="c-skill-list__skill">
          <img
            class="c-skill-list__image"
            src="images/Camel.png"
            alt="elephant"
          />
          <div class="c-skill-list__text">
            <h4 class="c-skill-list__title u-text-title">
              Consultation
            </h4>
            <span class="c-skill-list__gap"></span>
            <span class="c-skill-list__number u-text-title"
              >04</span
            >
            <span class="c-skill-list__description">
              Not sure where to start? I can help!
            </span>
          </div>
        </li>
      </ul>
      <hr class="u-separator-alternate c-hero__bottom" />
    </section>

    <section>
      <c-section-header class="u-bg-noise u-z-index-3">
        <div slot="title">
          Selected <br />
          Works
          <c-squiggle></c-squiggle>
        </div>
        <div slot="description">
          A curated list of projects worked on and things I
          built.
        </div>
      </c-section-header>

      <ul
        class="
        c-work-list
        u-bg-pattern-diagonal
      "
      >


        <li class="c-work-list__item">
          <div data-sticky class="c-work-list__item-info">
            <div class="c-work-list__item-info-inner">
              <h4 class="c-work-list__item-info-title">
                macOS Modern
              </h4>
              <div
                class="
                c-work-list__item-info-taglist 
                u-text-title"
              >
                Techologies Used: Frontend Development
              </div>
              <div
                class="
                  c-work-list__item-info-description
                "
              >
                <p>
                  A popular Visual Studio Code theme to match 
                  native macOS.
                </p>
              </div>
            </div>
          </div>

          <div
            class="
              c-work-list__item-preview 
              u-bg-color-muted
              u-padding-horizontal-2
              u-padding-vertical-1
              u-cursor-zoom-in"
            data-modal-target="modal-macos-modern"
          >
            <c-glitch-image
              src="images/Work/macOS Modern Light 1.jpg"
              class="
                u-max-width-30
              "
              alt="Logos Dark BG"
              width="800"
              height="600"
            >
            </c-glitch-image>
            <c-glitch-image
              src="images/Work/macOS Modern Dark 1.jpg"
              class="
                u-max-width-30 
                u-hidden@mobile
              "
              alt="Logos Dark BG"
              width="800"
              height="600"
            >
            </c-glitch-image>
          </div>
          <div class="c-work-list__item-lower-three">
            <a
              class="c-button"
              href="https://github.com/davidbwaters/macos-modern-vscode-theme"
              alt="Github Repo Link"
            >
              <i
                class="
                c-icon 
                c-icon--github 
                u-text-large-1
              "
              ></i>
              Star on Github
            </a>

            <button
              class="c-button"
              data-modal-target="modal-macos-modern"
              data-modal-trigger-primary
            >
              <i
                class="
                c-icon 
                c-icon--expand 
                u-text-large-1
              "
              ></i>
              Show More
            </button>

            <a
              class="c-button"
              href="https://marketplace.visualstudio.com/items?itemName=davidbwaters.macos-modern-theme"
              alt="VSCode Market Link"
            >
              <i
                class="c-icon c-icon--microsoft u-text-large-1"
              ></i>
              VSC Market Link
            </a>

            <c-modal
              data-modal-trigger="modal-macos-modern"
            >
              <c-section-header
                class="u-bg-noise u-z-index-3"
              >
                <div slot="title">
                  macOS Modern
                  <c-squiggle></c-squiggle>
                </div>
                <div slot="description" class="u-text-title">
                    Techologies Used: Frontend Development
                </div>
              </c-section-header>

              <div
                class="
                c-media-grid 
                u-bg-pattern-diagonal-alternate
              "
              >
                <article
                  class="c-media-grid__text-item-wide"
                >
                  <p>
                    I created the macOS Modern Visual Studio
                    Code theme to enable users to experience
                    the best code editor while maintaining a
                    native-like look and feel.
                  </p>
                  <p>
                    The theme includes multiple icon sets
                    and a matching light and dark app icon.
                  </p>
                  <p>
                    At the time of this writing, it has over
                    22 thousand installs.
                  </p>
                </article>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/macOS Modern All.jpg"
                    alt="macOS Modern All Themes Shot"
                  />
                </div>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/macOS Modern Light 1.jpg"
                    alt="macOS Modern Light Shot 1"
                  />
                </div>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/macOS Modern Dark 1.jpg"
                    alt="macOS Modern Light Shot 2"
                  />
                </div>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/macOS Modern Light 2.jpg"
                    alt="macOS Modern Dark Shot 1"
                  />
                </div>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/macOS Modern Dark 2.jpg"
                    alt="macOS Modern Dark Shot 2"
                  />
                </div>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/macOS Modern Icons.jpg"
                    alt="macOS Modern Dark Shot 2"
                  />
                </div>
              </div>
            </c-modal>
          </div>
        </li>

        <li class="c-work-list__item">
          <div data-sticky class="c-work-list__item-info">
            <div class="c-work-list__item-info-inner">
              <h4 class="c-work-list__item-info-title">
                Map Dashboard
              </h4>
              <div
                class="c-work-list__item-info-taglist u-text-title"
              >
                Techologies Used: Figma, Javascript, React
              </div>
              <div
                class="c-work-list__item-info-description"
              >
                <p>
                  UI created for an in-development web and 
                  mobile app for land developers.
                </p>
              </div>
            </div>
          </div>

          <div
            class="
              c-work-list__item-preview 
              u-cursor-zoom-in
            "
            data-modal-target="modal-map-dashboard"
          >
            <c-glitch-image
              src="images/Work/Map Browser.jpg"
              alt="Logos Light BG"
              glitch="1"
              width="912"
              height="712"
            >
            </c-glitch-image>
            <c-glitch-image
              src="images/Work/Map Figma.jpg"
              alt="Logos Light BG"
              glitch="1"
              width="912"
              height="712"
            >
            </c-glitch-image>
          </div>

          <div class="c-work-list__item-lower">
            <button
              class="c-button c-button--large c-button--block"
              data-modal-target="modal-map-dashboard"
              data-modal-trigger-primary
            >
              <i
                class="c-icon c-icon--expand u-text-large-1"
              ></i>
              Show More
            </button>

            <c-modal data-modal-trigger="modal-map-dashboard">
              <c-section-header
                class="u-bg-noise u-z-index-3"
              >
                <div slot="title">
                  Map Dashboard
                  <c-squiggle></c-squiggle>
                </div>
                <div slot="description" class="u-text-title">
                    Techologies Used: Figma, Javascript, React
                </div>
              </c-section-header>
              <div
                class="c-media-grid u-bg-pattern-diagonal-alternate"
              >
                <article
                  class="c-media-grid__text-item"
                >
                  <p>
                    These shots were created for an 
                    in-development web and mobile app
                    for land developers.
                  </p>
                  <p>
                    I was recruited to improve the overall
                    user experience and help design the map
                    interface. I used Figma to create 
                    wireframes, mockups, and a component
                    system.
                  </p>
                  <p>
                    I also helped the team refine the 
                    React-based frontend durning a sprint
                    before a deadline.
                  </p>
                </article>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/Map Browser.jpg"
                    alt="Map Dashboard in Browser"
                  />
                </div>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/Map Components.jpg"
                    alt="Map Dashboard Components"
                  />
                </div>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/Map Figma.jpg"
                    alt="Map Dashboard Figma Project"
                  />
                </div>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/Map Wireframe.jpg"
                    alt="Map Dashboard Mockup"
                  />
                </div>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/Map Mockup.jpg"
                    alt="Map Dashboard Mockup"
                  />
                </div>
              </div>
            </c-modal>
          </div>
        </li>
        
        <li class="c-work-list__item">
          <div></div>
          <div data-sticky class="c-work-list__item-info">
            <div class="c-work-list__item-info-inner">
              <h4 class="c-work-list__item-info-title">
                Personal Branding
              </h4>
              <div
                class="c-work-list__item-info-taglist u-text-title"
              >
                Techologies Used: Adobe Illustrator
              </div>
              <div
                class="c-work-list__item-info-description"
              >
                <p>
                  Collection of logo variations created as
                  part of a personal branding update.
                </p>
              </div>
            </div>
          </div>

          <div
            class="c-work-list__item-preview u-cursor-zoom-in"
            data-modal-target="modal-logos"
          >
            <c-glitch-image
              src="images/Work/Personal Branding All 1.jpg"
              alt="Logos Dark BG"
              glitch="2"
              width="912"
              height="712"
            >
            </c-glitch-image>
            <c-glitch-image
              src="images/Work/Personal Branding All 2.jpg"
              alt="Logos Light BG"
              glitch="2"
              width="912"
              height="712"
            >
            </c-glitch-image>
          </div>

          <div class="c-work-list__item-lower">
            <button
              class="c-button c-button--large c-button--block"
              data-modal-target="modal-logos"
              data-modal-trigger-primary
            >
              <i
                class="c-icon c-icon--expand u-text-large-1"
              ></i>
              Show More
            </button>

            <c-modal data-modal-trigger="modal-logos">
              <c-section-header
                class="u-bg-noise u-z-index-3"
              >
                <div slot="title">
                  Personal Branding
                  <c-squiggle></c-squiggle>
                </div>
                <div slot="description" class="u-text-title">
                    Techologies Used: Adobe Illustrator
                </div>
              </c-section-header>
              <div
                class="c-media-grid u-bg-pattern-diagonal-alternate"
              >
                <article
                  class="c-media-grid__text-item-wide"
                >
                  <p>
                    This is a collection of logo variations
                    created as part of a personal branding
                    update.
                  </p>
                  <p>
                    This project was a great exercise in
                    using the process of rapid iteration to
                    develop a final product.
                  </p>
                </article>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/Personal Branding All 1.jpg"
                    alt="Personal Branding Logos"
                  />
                </div>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/Personal Branding All 2.jpg"
                    alt="Personal Branding Logos"
                  />
                </div>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/Personal Branding Logo 1.jpg"
                    alt="Personal Branding Logo"
                  />
                  <span
                    class="c-media-grid__image-caption-alternate"
                  >
                    This was the version I ended up using.
                  </span>
                </div>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/Personal Branding Logo 2.jpg"
                    alt="Personal Branding Logo"
                  />
                </div>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/Personal Branding Logo 3.jpg"
                    alt="Personal Branding Logo"
                  />
                </div>
                <div class="c-media-grid__image-item">
                  <img
                    class="c-media-grid__image"
                    src="images/Work/Personal Branding Logo 4.jpg"
                    alt="Personal Branding Logo"
                  />
                </div>
              </div>
            </c-modal>
          </div>
        </li>

      </ul>
    </section>

    <footer class="c-page-footer u-bg-noise">
      <hr class="u-separator-alternate u-margin-0" />
      <div class="c-page-footer__upper u-text-large-1">
        Made with <3 by David B Waters in 2020.
      </div>
      <div class="c-page-footer__lower">
        <small class="u-text-bolder">
          This site's source code is freely available under
          the MIT license
          <a
            href="https://github.com/davidbwaters/davidbwaters.github.io"
            alt="repo link"
          >
            here
          </a>
          .
          <br />
          Stay tuned! It's still very much a
          work-in-progress.
        </small>
      </div>
    </footer>

    <c-loader>
      <c-glitch-image
        src="images/Loader-Image.svg"
        active
        glitch="1"
        width="100"
        height="100"
      >
      </c-glitch-image>
    </c-loader>
  `, document.body);