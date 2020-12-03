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
    families: ['work_sanslight', 'work_sansregular', 'work_sansmedium', 'work_sanssemibold', 'league_monoregular', 'syneextrabold', 'synebold', 'icons'],
    timeout: 4000
  },
  inactive: () => {
    handleFontLoadFailure();
  },
  active: () => {
    handleFontLoad();
  }
});

function handleFontLoad() {
  console.log('Webfonts loaded ...');
  const documentEl = document.documentElement;
  documentEl.dataset.fontsLoaded = 'true';
}

function handleFontLoadFailure() {
  console.log('Webfonts didn\'t load ...');
  const documentEl = document.documentElement;
  documentEl.dataset.fontsLoaded = 'false';
}

function handleElLoad() {
  const documentEl = document.documentElement;
  const count = documentEl.dataset.preloaded;
  documentEl.dataset.preloaded = count ? parseInt(count) + 1 : 1;

  if (count) {
    const loaderEl = document.querySelector('c-loader');

    if (loaderEl) {
      loaderEl.check();
    }
  }
}

render(html`

    <main class="u-transparent">

      <c-top-bar data-preload @load=${handleElLoad()}>
        <a
          slot="logo"
          href="/"
          title="Home"
        >
          <svg class="u-theme-fill" width="30" height="24">
            <title>David B. Waters Logo</title>
            <path
              d="M 6,0 V 24 H 0 V 0 Z m 24,12 v 6 l -6,6 V 12 Z M 18,0 v 18 l -6,6 V 0 Z m 12,0 v 6 l -6,6 V 0 Z"
            />
          </svg>
        </a>
        <a
          slot="link"
          href="mailto:mrdavidbwaters@gmail.com"
          title="Email"
        >
          <i class="c-icon c-icon--mail"></i>
        </a>
        <a
          slot="link"
          href="https://twitter.com/dbwatersdesigns"
          title="Twitter"
        >
          <i class="c-icon c-icon--twitter"></i>
        </a>
        <a
          slot="link"
          href="https://dribbble.com/dbwatersdesigns"
          title="Dribbble"
        >
          <i class="c-icon c-icon--dribbble"></i>
        </a>
        <a
          slot="link"
          href="https://github.com/davidbwaters"
          title="Github"
        >
          <i class="c-icon c-icon--github"></i>
        </a>
        <a
          slot="link"
          href="https://www.npmjs.com/~davidbwaters"
          title="NPM"
        >
          <i class="c-icon c-icon--npm"></i>
        </a>
      </c-top-bar>

      <c-hero
        class="u-bg-noise"
        @load=${handleElLoad()}
        data-preload
        id="hero"
      >
        <div slot="tagline">
          Artist & <br />
          Designer & <br />
          Developer
        </div>
        <div slot="name-stylized">DAVIDBWATERS</div>
        <div slot="heading">
          Building digital solutions to promote growth.
          <c-squiggle></c-squiggle>
        </div>
        <c-theme-switch slot="footer-box-left">
          <i class="c-icon c-icon--switch"></i>
        </c-theme-switch>
        <div slot="footer-content-left">
          <a
            class="c-icon c-icon--hand u-animation-wave u-text-large-2 u-margin-bottom-0"
            href="mailto:mrdavidbwaters@gmail.com"
            title="Get in Touch!"
          ></a>
          <span> Available Now! </span>
        </div>
        <div slot="footer-content-right">
          <a
            class="c-button"
            href="mailto:mrdavidbwaters@gmail.com"
          >
            Contact
          </a>
          <span>
            Start
            <span class="u-hidden@small">Your</span>
            Project!
          </span>
        </div>
        <div slot="footer-box-right">
          <a
            class="
              c-icon
              c-icon--arrow-down
            "
            href="#skills"
          ></a>
        </div>
        <hr slot="bottom" class="u-separator" />
      </c-hero>

      <section id="skills">
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
              alt="Elephant"
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
              alt="Lion"
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
              alt="Squirrel"
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
              alt="Camel"
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

      <section id="work">
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
                u-cursor-zoom-in"
              data-modal-target="modal-macos-modern"
            >
              <c-glitch-image
                src="images/Work/macOS Modern All.jpg"
                alt="macOS Modern Light Theme Screenshot"
                glitch=2
                width="800"
                height="600"
              >
              </c-glitch-image>
              <c-glitch-image
                src="images/Work/macOS Modern Dark 1.jpg"
                alt="macOS Modern Dark Theme Screenshot"
                class="
                  u-hidden@mobile
                "
                glitch=2
                width="800"
                height="600"
              >
              </c-glitch-image>
            </div>
            <div class="c-work-list__item-lower-three">
              <a
                class="c-button"
                href="https://github.com/davidbwaters/macos-modern-vscode-theme"
                title="macOS Modern Github Repo Link"
              >
                <i
                  class="
                    c-icon
                    c-icon--github
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
                  "
                ></i>
                Show More
              </button>

              <a
                class="c-button"
                href="https://marketplace.visualstudio.com/items?itemName=davidbwaters.macos-modern-theme"
                title="VSCode Market Link"
              >
                <i
                  class="
                    c-icon
                    c-icon--microsoft
                  "
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
                      alt="macOS Modern All Color Schemes"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/macOS Modern Light 1.jpg"
                      alt="macOS Modern Light 1"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/macOS Modern Dark 1.jpg"
                      alt="macOS Modern Dark 1"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/macOS Modern Light 2.jpg"
                      alt="macOS Modern Light 2"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/macOS Modern Dark 2.jpg"
                      alt="macOS Modern Dark 2"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/macOS Modern Icons.jpg"
                      alt="macOS Modern App Icons"
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
                  Limber Logic Brand Identity
                </h4>
                <div
                  class="
                  c-work-list__item-info-taglist
                  u-text-title"
                >
                  Techologies Used: Adobe Illustrator
                </div>
                <div
                  class="
                    c-work-list__item-info-description
                  "
                >
                  <p>
                    I created the brand identity for Limber
                    Logic, a digital product design company
                    in Charleston.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="
                c-work-list__item-preview
                u-cursor-zoom-in"
              data-modal-target="modal-limber-logic"
            >
              <c-glitch-image
                src="images/Work/Limber Logic Mockup Dark.jpg"
                alt="Limber Logic Logo Mockup Dark"
                glitch=2
                width="800"
                height="600"
              >
              </c-glitch-image>
              <c-glitch-image
                  src="images/Work/Limber Logic Both.svg"
                  alt="Limber Logic Logo Dark and Light Versions"
                  class="
                    u-hidden@mobile
                    u-bg-color-white
                  "
                  glitch=2
                  width="800"
                  height="600"
                >
              </c-glitch-image>
            </div>
            <div class="c-work-list__item-lower">

              <button
                class="c-button"
                data-modal-target="modal-limber-logic"
                data-modal-trigger-primary
              >
                <i
                  class="
                    c-icon
                    c-icon--expand
                  "
                ></i>
                Show More
              </button>

              <c-modal
                data-modal-trigger="modal-limber-logic"
              >
                <c-section-header
                  class="u-bg-noise u-z-index-3"
                >
                  <div slot="title">
                    Limber Logic Identity
                    <c-squiggle></c-squiggle>
                  </div>
                  <div slot="description" class="u-text-title">
                    Techologies Used: Adobe Illustrator
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
                      I created the brand identity for
                      Limber Logic, a digital product design
                      company in Charleston. I wanted the
                      branding to have a sleek, techy,
                      aesthetic.
                    </p>
                    <p>
                      Limber Logic was the collaboration of
                      my friend as Lead Developer and me as
                      Lead Designer. We worked on various
                      projects and I learned a lot in my
                      time there.
                    </p>
                  </article>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Limber Logic Light.jpg"
                      alt="Limber Logic Logo Light"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Limber Logic Dark.jpg"
                      alt="Limber Logic Logo Dark"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Limber Logic Mockup Dark.jpg"
                      alt="Limber Logic Mockup Dark"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Limber Logic Mockup Light.jpg"
                      alt="Limber Logic Mockup Light"
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
                alt="Map Dashboard in a Browser"
                glitch=2
                width="912"
                height="712"
              >
              </c-glitch-image>
              <c-glitch-image
                src="images/Work/Map Figma.jpg"
                alt="Map Dashboard in Figma"
                class="
                  u-hidden@mobile
                "
                glitch=2
                width="912"
                height="712"
              >
              </c-glitch-image>
            </div>

            <div class="c-work-list__item-lower">
              <button
                class="c-button c-button--block"
                data-modal-target="modal-map-dashboard"
                data-modal-trigger-primary
              >
                <i
                  class="
                    c-icon
                    c-icon--expand
                  "
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
                    class="c-media-grid__text-item-wide"
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
                src="images/Work/Personal Branding Mockup 1.jpg"
                alt="Personal Branding VHS Mockup"
                class="
                  u-hidden@mobile
                "
                glitch=2
                width="912"
                height="712"
              >
              </c-glitch-image>
              <c-glitch-image
                src="images/Work/Personal Branding All 2.jpg"
                alt="Personal Branding Logos Dark BG"
                glitch=2
                width="912"
                height="712"
              >
              </c-glitch-image>
            </div>

            <div class="c-work-list__item-lower">
              <button
                class="c-button c-button--block"
                data-modal-target="modal-logos"
                data-modal-trigger-primary
              >
                <i
                  class="
                    c-icon
                    c-icon--expand
                  "
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
                      src="images/Work/Personal Branding Mockup 1.jpg"
                      alt="Personal Branding VHS Mockup"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Personal Branding Mockup 2.jpg"
                      alt="Personal Branding Stamp Mockup"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Personal Branding All 1.jpg"
                      alt="All Personal Branding Logos Dark"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Personal Branding All 2.jpg"
                      alt="All Personal Branding Logos Light"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Personal Branding Logo Final.jpg"
                      alt="Selected Personal Branding Logo"
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
                      src="images/Work/Personal Branding Logo Alt 1.jpg"
                      alt="Personal Branding Alternate Logo 1"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Personal Branding Logo Alt 2.jpg"
                      alt="Personal Branding Alternate Logo 2"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Personal Branding Logo Alt 3.jpg"
                      alt="Personal Branding Alternate Logo 3"
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
                  Substructure ITCSS Framework
                </h4>
                <div
                  class="
                  c-work-list__item-info-taglist
                  u-text-title"
                >
                  Techologies Used: CSS/SASS, BEM, ITCSS, Lerna
                </div>
                <div
                  class="
                    c-work-list__item-info-description
                  "
                >
                  <p>
                    My modular CSS boilerplate inspired by
                    the work of Harry Roberts and others
                    with modern features sprinkled in.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="
                c-work-list__item-preview
                u-bg-color-muted"
            >
              <c-glitch-image
                src="images/Work/Substructure Text.svg"
                alt="Substructure Text Logo"
                class="
                  u-hidden@mobile
                  u-max-width-30
                "
                glitch=2
                width="800"
                height="600"
              >
              </c-glitch-image>
              <c-glitch-image
                src="images/Work/Substructure Shot.jpg"
                alt="Substructure Code Editor Screenshot"
                class="
                  u-max-width-30
                "
                glitch=2
                width="800"
                height="600"
              >
              </c-glitch-image>
            </div>
            <div class="c-work-list__item-lower">
              <a
                class="c-button"
                href="https://github.com/davidbwaters/substructure"
                title="Substructure Github Repo Link"
              >
                <i
                  class="
                  c-icon
                  c-icon--github
                "
                ></i>
                Star on Github
              </a>
              <a
                class="c-button"
                href="https://www.npmjs.com/settings/substructure/packages"
                title="Substructure NPM Link"
              >
                <i
                  class="
                  c-icon
                  c-icon--npm
                "
                ></i>
                NPM Packages
              </a>
            </div>
          </li>

          <li class="c-work-list__item">
            <div data-sticky class="c-work-list__item-info">
              <div class="c-work-list__item-info-inner">
                <h4 class="c-work-list__item-info-title">
                  Yippy Clipboard Manager
                </h4>
                <div
                  class="
                  c-work-list__item-info-taglist
                  u-text-title"
                >
                  Techologies Used: Figma, Adobe Illustrator
                </div>
                <div
                  class="
                    c-work-list__item-info-description
                  "
                >
                  <p>
                    I contributed app and UI icons to an
                    open-source clipboard manager for macOS
                    made by Matt Davidson.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="
                c-work-list__item-preview
                u-cursor-zoom-in"
              data-modal-target="modal-yippy"
            >
              <c-glitch-image
                src="images/Work/Yippy 1.jpg"
                alt="Yippy Icon for macOS Big Sur"
                glitch=2
                width="800"
                height="600"
              >
              </c-glitch-image>
              <c-glitch-image
                src="images/Work/Yippy Menu Bar.jpg"
                alt="Yippy Menu Bar Icon"
                class="
                  u-hidden@mobile
                "
                glitch=2
                width="800"
                height="600"
              >
              </c-glitch-image>
            </div>
            <div class="c-work-list__item-lower">
              <a
                class="c-button"
                href="https://github.com/mattDavo/Yippy"
                title="Yippy Github Repo Link"
              >
                <i
                  class="
                    c-icon
                    c-icon--github
                  "
                ></i>
                Star on Github
              </a>
              <button
                class="c-button"
                data-modal-target="modal-yippy"
                data-modal-trigger-primary
              >
                <i
                  class="
                    c-icon
                    c-icon--expand
                  "
                ></i>
                Show More
              </button>

              <c-modal
                data-modal-trigger="modal-yippy"
              >
                <c-section-header
                  class="u-bg-noise u-z-index-3"
                >
                  <div slot="title">
                    macOS Modern
                    <c-squiggle></c-squiggle>
                  </div>
                  <div slot="description" class="u-text-title">
                    Techologies Used: Figma, Adobe Illustrator
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
                      I contributed icons to an
                      open-source clipboard manager for
                      macOS made by Matt Davidson.
                    </p>
                    <p>
                      I created a menu bar icon and three
                      reversions of the app icon, included an
                      updated version for macOS Big Sur.
                      This project adheres to Apple's design
                      guidelines.
                    </p>
                  </article>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Yippy 1.jpg"
                      alt="Yippy Big Sur Icon"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Yippy Menu Bar.jpg"
                      alt="Yippy Menu Bar Icon"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Yippy 2.jpg"
                      alt="Yippy Updated Icon"
                    />
                  </div>
                  <div class="c-media-grid__image-item">
                    <img
                      class="c-media-grid__image"
                      src="images/Work/Yippy 3.jpg"
                      alt="Yippy Original Icon"
                    />
                  </div>
                </div>
              </c-modal>
            </div>
          </li>

          <!--
            <li class="c-work-list__item">
              <div data-sticky class="c-work-list__item-info">
                <div class="c-work-list__item-info-inner">
                  <h4 class="c-work-list__item-info-title">
                    Artwork
                  </h4>
                  <div
                    class="
                    c-work-list__item-info-taglist
                    u-text-title"
                  >
                    Techologies Used: Adobe Photoshop, Adobe Illustrator, Figma, Blender
                  </div>
                  <div
                    class="
                      c-work-list__item-info-description
                    "
                  >
                    <p>
                      Miscellaneous digital art.
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="
                  c-work-list__item-preview
                  u-cursor-zoom"
                data-modal-target="modal-artwork"
              >
                <c-glitch-image
                  src="images/Work/Art Me.jpg"
                  alt="Artwork Me"
                  class="
                    u-hidden@mobile
                    u-max-width-30
                  "
                  glitch=2
                  width="1024"
                  height="1024"
                >
                </c-glitch-image>
                <c-glitch-image
                  src="images/Work/Art Melted.jpg"
                  alt="Artwork Melted"
                  glitch=2
                  width="1024"
                  height="1024"
                >
                </c-glitch-image>
              </div>
              <div class="c-work-list__item-lower">
                <button
                  class="c-button"
                  data-modal-target="modal-artwork"
                  data-modal-trigger-primary
                >
                  <i
                    class="
                      c-icon
                      c-icon--expand
                    "
                  ></i>
                  Show More
                </button>

                <c-modal
                  data-modal-trigger="modal-artwork"
                >
                  <c-section-header
                    class="u-bg-noise u-z-index-3"
                  >
                    <div slot="title">
                      Artwork
                      <c-squiggle></c-squiggle>
                    </div>
                    <div slot="description" class="u-text-title">
                      Techologies Used: Adobe Photoshop,
                      Adobe Illustrator, Figma, Blender
                    </div>
                  </c-section-header>

                  <div
                    class="
                    c-media-grid
                    u-bg-pattern-diagonal-alternate
                  "
                  >
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Chuck 1.jpg"
                        alt="Artwork Charleston 1"
                      />
                    </div>
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Chuck 2.jpg"
                        alt="Artwork Charleston 2"
                      />
                    </div>
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Melted.jpg"
                        alt="Artwork Abstract Melted"
                      />
                    </div>
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Me.jpg"
                        alt="Artwork Me Abstract"
                      />
                    </div>
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Statue.jpg"
                        alt="Artwork Statue"
                      />
                    </div>
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Pyramids.jpg"
                        alt="Artwork Pyramics"
                      />
                    </div>
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Vapor.jpg"
                        alt="Artwork Vaporwave"
                      />
                    </div>
                    <div class="c-media-grid__image-item">
                      <img
                        class="c-media-grid__image"
                        src="images/Work/Art Church.jpg"
                        alt="Artwork Church"
                      />
                    </div>
                  </div>
                </c-modal>

              </div>
            </li>
          -->
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
              title="This Site's Github Repo Link"
            >here</a>.
            <br class="u-hidden@tablet">
            Stay tuned! It's still very much a
            work in progress.
          </small>
        </div>
      </footer>
    </main>

    <c-loader>
      <c-glitch-image
        src="images/Loader-Image.svg"
        active
        glitch=1
        width="100"
        height="100"
      >
      </c-glitch-image>
    </c-loader>
  `, document.body);