/**
* Data
*/

import DirectusSDK from '@directus/sdk-js'
import when from 'once-defined'

import api from '../../config/api.js'

const { url, assets } = api
const sdk = new DirectusSDK(url)

when('uce-lib').then(({ define, css }) => {

  define('c-app', {
    styles: css`
      :host {
        display: block;
        height: 100%;
        opacity: 1;
        width: 100%;
        will-change: opacity;
      }
    `,

    init() {

    },

    bound: ['setLogo'],

    setLogo() {

      this.theme = document.body.dataset.theme

      this.data.logo = this.theme === 'dark'
        ? this.data.site.images.branding_light.image
        : this.data.site.images.branding_dark.image

      // console.log(this.data.logo)

      this.render()

      this.dispatchEvent(

        new CustomEvent('appLoaded', {

          detail: { theme: document.body.dataset.theme },
          bubbles: true,
          composed: true

        })

      )

    },

    async preload() {

      await this.getData()

      //console.log(this.data)

      this.setLogo()
      this.render()

      this.addEventListener('themeChange', this.setLogo)

    },

    data: {},

    formatData(o) {

      let obj = {
        text: {}
      }

      Object.keys(o).forEach(i => {

        // console.log(i)

        if (o[i] && o[i].icon) {

          if (!obj.images) {

            obj.images = {}

          }

          obj.images[o[i].name] = {}
          obj.images[o[i].name].image = assets +
            o[i].icon
          // obj.images[i].name = o[i].name

        }


        else if (o[i] && o[i].directus_files_id) {

          if (!obj.images) {

            obj.images = {}

          }

          if (
            o[i] &&
            o[i].directus_files_id
          ) {

            obj.images[i] =
              assets +
              o[i].directus_files_id

          }

          else if (
            o[i].filename_disk &&
            o[i].id
          ) {

            obj.images[i] =
              assets +
              o[i].id

          }

        }

        else if (o[i] && o[i].filename_disk) {

          if (!obj.images) {

            obj.images = {}

          }

          obj.images[i] = {}

          obj.images[i].image =
            assets + o[i].id

        }


        else if (o[i] && o[i].filename_disk) {

          if (!obj.images) {

            obj.images = {}

          }

          obj.images[i].image =
            assets + o[i].id

        }

        else if (
          o[i] &&
          o[i].length &&
          typeof o[i] !== 'string' &&
          o[i][0].filename_disk
        ) {

          if (!obj.images) {

            obj.images = {}

          }

          obj.images[i] = []

          let index = 0

          o[i].forEach(j => {

            if (
              o[i][index] &&
              o[i][index].filename_disk
            ) {

              obj.images[i][index] = {}

            }

            if (
              o[i][index] &&
              i === 'icons'
            ) {

              Object.keys(o[i]).forEach(j => {

                obj.images[i] = {}

                obj.images[i][o[i].name] = {}
                obj.images[i][o[i].name].image =
                  url + o[i].icon

              })

            }


            if (
              o[i][index] &&
              o[i][index].sort
            ) {

              obj.images[i][index].sort = o[i][index].sort

            }

            if (
              o[i][index] &&
              o[i][index].directus_files_id
            ) {

              obj.images[i][index].image =
                assets +
                o[i][index].directus_files_id

            }

            else if (
              o[i][index].filename_disk &&
              o[i][index].id
            ) {

              obj.images[i][index].image =
                assets +
                o[i][index].id

            }

            index++

          })

          console.log(i)
          console.log(o[i])

        }


        else if (
          o[i] &&
          typeof o[i] !== 'string' &&
          o[i][Object.keys(o[i])[0]] &&
          o[i][Object.keys(o[i])[0]].filename_disk
        ) {

          console.log(i)
          console.log(o[i])
          if (!obj.images) {

            obj.images = {}

          }

          obj.images[i] = {}

          Object.keys(o[i]).forEach(j => {

            if (
              o[i][j].filename_disk
            ) {

              obj.images[i][j] = {}

            }

            if (
              o[i][j].sort &&
              o[i][j].sort !== null
            ) {

              obj.images[i][j].sort = o[i][j].sort

            }

            if (
              o[i][j].directus_files_id
            ) {

              obj.images[i][j].image =
                assets +
                o[i][j].directus_files_id

            }

            else if (
              o[i][j].filename_disk &&
              o[i][j].id
            ) {

              obj.images[i][j].image =
                assets +
                o[i][j].id

            }

          })

        }

        else if (o[i]) {

          if (!obj.text) {

            obj.text = {}

          }

          obj.text[i] = o[i]

        }

      })

      // console.log(o)
      return obj

    },

    async getData() {

      let site = await sdk.items('site').read({
        fields: [
          '*.directus_files_id',
          '*.icon.*',
          '*.*'
        ]
      })

      let { siteId, ...siteData } = site.data
      siteData = this.formatData(siteData)
      this.data.site = siteData


      let icons = await sdk.items(
        'icons'
      ).read()

      let {
        iconsId, ...iconsData
      } = icons.data

      this.data.icons = []

      Object.keys(iconsData).forEach(i => {

        this.data.icons = this.formatData(iconsData)

      })


      let socialLinks = await sdk.items(
        'social_links'
      ).read({
        fields: [
          '*.directus_files_id',
          '*.icon.icon.directus_files_id'
        ],
        sort: 'sort'
      })

      let {
        socialLinksId, ...socialLinksData
      } = socialLinks.data

      this.data.socialLinks = []

      Object.keys(socialLinksData).forEach(i => {

        this.data.socialLinks =
          this.data.socialLinks.concat(
            socialLinksData[i]
          )

        this.data.socialLinks[i].icon =
          this.data.socialLinks[i].icon.icon

      })


      let home = await sdk.items('home').read({
        fields: [
          '*.*',
          '*.icon.*'
        ]
      })

      let { homeId, ...homeData } = home.data
      homeData = this.formatData(homeData)
      this.data.home = homeData


      let skills = await sdk.items('skills').read({
        fields: [
          '*.*',
          '*.icon.*'
        ]
      })

      let { skillsId, ...skillsData } = skills.data

      this.data.skills = []

      Object.keys(skillsData).forEach(i => {

        this.data.skills = this.data.skills.concat(
          this.formatData(
            skillsData[i]
          )
        )

      })


      let portfolioItems = await sdk.items('portfolio_items').read({
        fields: [
          '*',
          '*.directus_files_id'
        ]
      })

      let {
        portfolioItemsId, ...portfolioItemsData
      } = portfolioItems.data

      this.data.portfolioItems = []

      Object.keys(portfolioItemsData).forEach(i => {

        this.data.portfolioItems =
          this.data.portfolioItems.concat(
            this.formatData(
              portfolioItemsData[i]
            )
          )

      })

      console.log(skills)

    },

    render() {

      this.html`
        <main class="u-transparent">

          <c-top-bar>
            <a
              slot="logo"
              href="/"
              title="Home"
            >
              <object
                type="image/svg+xml"
                data=${this.data.logo}
                class="u-theme-fill" width="30" height="24"
              >
              </object>
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
            data-preload
            id="hero"
          >
            <div slot="paint">
              <img
                data-paint="dark-1"
                src="images/Hero-Paint-1-Dark.jpg"
                alt=""
              />
              <img
                data-paint="dark-2"
                src="images/Hero-Paint-2-Dark.jpg"
                alt=""
              />
              <img
                data-paint="light-1"
                src="images/Hero-Paint-1-Light.jpg"
                alt=""
              />
              <img
                data-paint="light-2"
                src="images/Hero-Paint-2-Light.jpg"
                alt=""
              />
            </div>
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
            <hr class="u-separator-alternate" />
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
                        u-text-title
                      "
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
                    src="images/Work/macOS-Modern-All.jpg"
                    alt="macOS Modern Light Theme Screenshot"
                    glitch=2
                    width="800"
                    height="600"
                  >
                  </c-glitch-image>
                  <c-glitch-image
                    src="images/Work/macOS-Modern-Dark-1.jpg"
                    alt="macOS Modern Dark Theme Screenshot"
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
                        <a
                          data-glightbox
                          data-gallery=1
                          href="images/Work/macOS-Modern-All.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/macOS-Modern-All.jpg"
                            alt="macOS Modern All Color Schemes"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=1
                          href="images/Work/macOS-Modern-Light-1.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/macOS-Modern-Light-1.jpg"
                            alt="macOS Modern Light 1"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=1
                          href="images/Work/macOS-Modern-Dark-1.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/macOS-Modern-Dark-1.jpg"
                            alt="macOS Modern Dark 1"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=1
                          href="images/Work/macOS-Modern-Light-2.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/macOS-Modern-Light-2.jpg"
                            alt="macOS Modern Light 2"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=1
                          href="images/Work/macOS-Modern-Dark-2.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/macOS-Modern-Dark-2.jpg"
                            alt="macOS Modern Dark 2"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=1
                          href="images/Work/macOS-Modern-Icons.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/macOS-Modern-Icons.jpg"
                            alt="macOS Modern App Icons"
                          />
                        </a>
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
                        u-text-title
                      "
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
                    src="images/Work/Limber-Logic-Mockup-1-Dark.jpg"
                    alt="Limber Logic Logo Mockup 1 Dark"
                    glitch=2
                    width="800"
                    height="600"
                  >
                  </c-glitch-image>
                  <c-glitch-image
                      src="images/Work/Limber-Logic-Both.svg"
                      alt="Limber Logic Logo Dark and Light Versions"

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
                        <a
                          data-glightbox
                          data-gallery=2
                          href="images/Work/Limber-Logic-Light.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Limber-Logic-Light.jpg"
                            alt="Limber Logic Logo Light"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=2
                          href="images/Work/Limber-Logic-Dark.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Limber-Logic-Dark.jpg"
                            alt="Limber Logic Logo Dark"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=2
                          href="images/Work/Limber-Logic-Mockup-1-Dark.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Limber-Logic-Mockup-1-Dark.jpg"
                            alt="Limber Logic Mockup Dark"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=2
                          href="images/Work/Limber-Logic-Mockup-1-Light.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Limber-Logic-Mockup-1-Light.jpg"
                            alt="Limber Logic Mockup Light"
                          />
                        </a>
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
                      class="
                        c-work-list__item-info-taglist u-text-title
                      "
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
                    src="images/Work/Map-Browser.jpg"
                    alt="Map Dashboard in a Browser"
                    glitch=2
                    width="912"
                    height="712"
                  >
                  </c-glitch-image>
                  <c-glitch-image
                    src="images/Work/Map-Figma.jpg"
                    alt="Map Dashboard in Figma"
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
                          React-based frontend during a sprint
                          before a deadline.
                        </p>
                      </article>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=3
                          href="images/Work/Map-Browser.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Map-Browser.jpg"
                            alt="Map Dashboard in Browser"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=3
                          href="images/Work/Map-Components.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Map-Components.jpg"
                            alt="Map Dashboard Components"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=3
                          href="images/Work/Map-Figma.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Map-Figma.jpg"
                            alt="Map Dashboard Figma Project"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=3
                          href="images/Work/Map-Wireframe.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Map-Wireframe.jpg"
                            alt="Map Dashboard Mockup"
                          />
                        </a>
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
                      class="
                        c-work-list__item-info-taglist u-text-title
                      "
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
                    src="images/Work/Personal-Branding-Mockup-1.jpg"
                    alt="Personal Branding VHS Mockup"
                    glitch=2
                    width="912"
                    height="712"
                  >
                  </c-glitch-image>
                  <c-glitch-image
                    src="images/Work/Personal-Branding-All-2.jpg"
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
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-Mockup-1.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Personal-Branding-Mockup-1.jpg"
                            alt="Personal Branding VHS Mockup"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-Mockup-2.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Personal-Branding-Mockup-2.jpg"
                            alt="Personal Branding Stamp Mockup"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-All-1.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Personal-Branding-All-1.jpg"
                            alt="All Personal Branding Logos Dark"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-All-2.jpg"
                        >
                        <img
                          class="c-media-grid__image"
                          src="images/Work/Personal-Branding-All-2.jpg"
                          alt="All Personal Branding Logos Light"
                        />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-Logo-Final.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Personal-Branding-Logo-Final.jpg"
                            alt="Selected Personal Branding Logo"
                          />
                        </a>
                        <span
                          class="c-media-grid__image-caption-alternate"
                        >
                          This was the version I ended up using.
                        </span>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-Logo-Alt-1.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Personal-Branding-Logo-Alt-1.jpg"
                            alt="Personal Branding Alternate Logo 1"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-Logo-Alt-2.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Personal-Branding-Logo-Alt-2.jpg"
                            alt="Personal Branding Alternate Logo 2"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-Logo-Alt-3.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Personal-Branding-Logo-Alt-3.jpg"
                            alt="Personal Branding Alternate Logo 3"
                          />
                        </a>
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
                        u-text-title
                      "
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
                    src="images/Work/Substructure-Text.svg"
                    alt="Substructure Text Logo"
                    class="
                      u-max-width-30
                    "
                    glitch=2
                    width="800"
                    height="600"
                  >
                  </c-glitch-image>
                  <c-glitch-image
                    src="images/Work/Substructure-Shot.jpg"
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
                        u-text-title
                      "
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
                    u-cursor-zoom-in
                  "
                  data-modal-target="modal-yippy"
                >
                  <c-glitch-image
                    src="images/Work/Yippy-1.jpg"
                    alt="Yippy Icon for macOS Big Sur"
                    glitch=2
                    width="800"
                    height="600"
                  >
                  </c-glitch-image>
                  <c-glitch-image
                    src="images/Work/Yippy-Menu-Bar.jpg"
                    alt="Yippy Menu Bar Icon"
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
                          src="images/Work/Yippy-1.jpg"
                          alt="Yippy Big Sur Icon"
                        />
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=5
                          href="images/Work/Yippy-Menu-Bar.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Yippy-Menu-Bar.jpg"
                            alt="Yippy Menu Bar Icon"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=5
                          href="images/Work/Yippy-2.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Yippy-2.jpg"
                            alt="Yippy Updated Icon"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=5
                          href="images/Work/Yippy-3.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Yippy-3.jpg"
                            alt="Yippy Original Icon"
                          />
                        </a>
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
                          u-text-title
                        "
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
                <br>
                Stay tuned! It's still very much a
                work in progress.
              </small>
            </div>
          </footer>


          <c-loader>
            <div class="u-bg-noise-heavy">
              <c-glitch-image
                src="images/Loader.svg"
                active
                glitch=1
                width="100"
                height="100"
              >
              </c-glitch-image>
            </div>
          </c-loader>

        </main>
      `

    }
  })

})
