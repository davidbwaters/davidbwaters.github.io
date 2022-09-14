/**
* Data
*/

import DirectusSDK from '@directus/sdk-js'
import when from 'once-defined'

import api from '../../config/api.js'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import VanillaTilt from 'vanilla-tilt'

import './fancy'

const { url, assets } = api
const sdk = new DirectusSDK(url)


when('uce-lib').then(({ define, css }) => {

  define('c-app', {
    styles: css`
    `,

    init() {

      this.render()

      setTimeout(() => {

        let tiltElements = document.querySelectorAll('[data-tilt]')

        tiltElements = [
          ...tiltElements,
          ...document.querySelector('c-hero')
            .shadowRoot.querySelectorAll('[data-tilt]')
        ]

        VanillaTilt.init(tiltElements)

      }, 1000)

      gsap.registerPlugin(ScrollTrigger)


      let revealContainers = document.querySelectorAll('.js-reveal')

      revealContainers.forEach((container) => {

        let targets = container.querySelectorAll('.js-reveal-inner')

        if (!targets.length) {

          targets = [ container ]

        }

        //let image = container.querySelector('img')

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: 'restart none none reset',
            start: 'top bottom',
            end: '+=10',
          }
        })

        // tl.set(targets, { autoAlpha: 1 })

        tl.from(targets, {
          y: 120,
          opacity: 0,
          duration: 0.8,
          delay: 0,
          stagger: '0.25',
          scale: 1.1,
          ease: 'Power2.out',
          onComplete: () => {

            targets.forEach(item => {

              item.style.transform = ''

            })
            ScrollTrigger.refresh()

          }
        })

      })

      let revealFadeContainers = document.querySelectorAll('.js-reveal-fade')

      revealFadeContainers.forEach((container) => {

        //let image = container.querySelector('img')
        gsap.set(container, {
          transformOrigin: 'top center'
        })

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: 'restart none none reset',
            start: 'top bottom',
            end: '+=10'
          }
        })

        tl.from(container, {
          opacity: 0.25,
          scale: 1.1,
          duration: 0.8,
          delay: 0.2,
          stagger: '0.25',
          ease: 'Power2.out',
          onComplete: () => {

            container.style.transform = ''
            ScrollTrigger.refresh()

          }
        })

      })

      setTimeout(() => {

        ScrollTrigger.refresh()
        window.dispatchEvent(new Event('resize'))

      }, 4000)

    },

    bound: ['setLogo'],

    setLogo() {

      this.theme = document.body.dataset.theme

      this.data.logo = this.theme === 'dark'
        ? 'images/Logo-Dark.svg'
        : 'images/Logo-Light.svg'

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

      //await this.getData()

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
                data="${this.data.logo}"
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
              <div id="js-canvas-paint" class="js-canvas-paint"></div>
            </div>
            <div slot="tagline" class="js-text-plane">
              Multidisciplinary <br />
              Designer & Frontend <br />
              Developer
            </div>
            <div slot="name-stylized">DAVIDBWATERS</div>
            <div slot="heading" class="js-text-plane">
              Building digital solutions to promote growth.
              <c-squiggle></c-squiggle>
            </div>
            <c-theme-switch slot="footer-box-left" data-cursor-target>
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
            <c-section-header class="u-bg-noise js-reveal">
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
              <li class="c-skill-list__skill js-reveal">
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
              <li class="c-skill-list__skill js-reveal">
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
              <li class="c-skill-list__skill js-reveal">
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
              <li class="c-skill-list__skill js-reveal">
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

          <section id="work" class="js-reveal">
            <c-section-header class="u-bg-noise u-z-index-3 js-reveal-inner">
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

            <div
              class="
                c-work-list
                u-bg-pattern-diagonal
              "
            >

              <c-work-item
                class='js-reveal-fade'
                title='Fitbux'
                slug='Fitbux'
                .gallery=${1}
                .tags=${['Figma']}
                .previewImages=${[
                  'images/Work/Fitbux-1.jpg',
                  'images/Work/Fitbux-2.jpg'
                ]}
                .images=${[
                  'images/Work/Fitbux-1.jpg',
                  'images/Work/Fitbux-2.jpg',
                  'images/Work/Fitbux-3.jpg',
                  'images/Work/Fitbux-4.gif'
                ]}
                shortDescription='Providing gps for your money. Mobile and web app design.'
                .description=${[`While working for <a href="http://mainux.com">Mainux</a>, I helped create Fitbux's design system, UI, and branding
                  using Figma.  I was responsible for overhauling their current
                  branding and updating it to modern standards.`]}

                .wide=${true}
              ></c-work-item>

              <c-work-item
                class='js-reveal-fade'
                title='macOS Modern'
                slug='macOSModern'
                .gallery=${2}
                .tags=${['Frontend Development']}
                .previewImages=${[
                  'images/Work/macOS-Modern-All.jpg',
                  'images/Work/macOS-Modern-Dark-1.jpg'
                ]}
                .images=${[
                  'images/Work/macOS-Modern-All.jpg',
                  'images/Work/macOS-Modern-Light-1.jpg',
                  'images/Work/macOS-Modern-Light-2.jpg',
                  'images/Work/macOS-Modern-Dark-1.jpg',
                  'images/Work/macOS-Modern-Dark-2.jpg',
                  'images/Work/macOS-Modern-Icons.jpg'
                ]}
                shortDescription='A popular Visual Studio Code theme to match native macOS.'
                .description=${[
                  `I created the macOS Modern Visual Studio Code theme to enable users to experience the best code editor while maintaining a native-like look and feel.`,
                  `The theme includes multiple icon sets and a matching light and dark app icon.`,
                  `At the time of this writing, it has over 22 thousand installs.`
                ]}

                .wide=${true}
                github='https://github.com/davidbwaters/macos-modern-vscode-theme'
                vsc='https://marketplace.visualstudio.com/items?itemName=davidbwaters.macos-modern-theme'
                .threeButton=${true}
              ></c-work-item>


              <c-work-item
                class='js-reveal-fade'
                title='Limber Logic Brand Identity'
                slug='LimberLogic'
                .gallery=${3}
                .tags=${['Adobe Illustrator']}
                .previewImages=${[
                  'images/Work/Limber-Logic-Mockup-1-Dark.jpg',
                  'images/Work/Limber-Logic-Both.svg'
                ]}
                .images=${[
                  'images/Work/Limber-Logic-Dark.jpg',
                  'images/Work/Limber-Logic-Light.jpg',
                  'images/Work/Limber-Logic-Mockup-1-Dark.jpg',
                  'images/Work/Limber-Logic-Mockup-1-Light.jpg'
                ]}
                shortDescription='I created the brand identity for Limber Logic, a digital product design company in Charleston.'
                .description=${[
                  `I created the brand identity for Limber Logic, a digital product design company in Charleston. I wanted the branding to have a sleek, techy, aesthetic.`,
                  `Limber Logic was the collaboration of my friend as Lead Developer and me as Lead Designer. We worked on various projects and I learned a lot in my time there.`,
                ]}
                .wide=${true}
              ></c-work-item>


              <c-work-item
                class='js-reveal-fade'
                title='Map Dashboard'
                slug='MapDashboard'
                .gallery=${4}
                .tags=${['Figma', 'Javascript', 'React']}
                .previewImages=${[
                  'images/Work/Map-Browser.jpg',
                  'images/Work/Map-Figma.jpg'
                ]}
                .images=${[
                  'images/Work/Map-Browser.jpg',
                  'images/Work/Map-Components.jpg',
                  'images/Work/Map-Figma.jpg',
                  'images/Work/Map-Wireframe.jpg'
                ]}
                shortDescription='UI created for an in-development web and mobile app for land developers.'
                .description=${[
                  `These shots were created for an in-development web and mobile app for land developers.`,
                  `I was recruited to improve the overall user experience and help design the map interface. I used Figma to create wireframes, mockups, and a component system.`,
                  `I also helped the team refine the React-based frontend during a sprint before a deadline.`
                ]}
                .wide=${true}
              ></c-work-item>


              <c-work-item
                class='js-reveal-fade'
                title='Personal Branding'
                slug='PersonalBranding'
                .gallery=${5}
                .tags=${['Adobe Illustrator']}
                .previewImages=${[
                  'images/Work/Personal-Branding-Mockup-1.jpg',
                  'images/Work/Personal-Branding-All-2.jpg'
                ]}
                previewWidth='912'
                previewHeight='712'
                .images=${[
                  'images/Work/Personal-Branding-Mockup-1.jpg',
                  'images/Work/Personal-Branding-Mockup-2.jpg',
                  'images/Work/Personal-Branding-All-1.jpg',
                  'images/Work/Personal-Branding-All-2.jpg'
                ]}
                shortDescription='Collection of logo variations created as part of a personal branding update.'
                .description=${[
                  `This is a collection of logo variations created as part of a personal branding update.`,
                  `This project was a great exercise in using the process of rapid iteration to develop a final product.`
                ]}
                .wide=${true}
              ></c-work-item>


              <c-work-item
                class='js-reveal-fade'
                title='Substructure ITCSS Framework'
                slug='Substructure'
                .gallery=${6}
                .tags=${['CSS/SASS', 'BEM', 'ITCSS', 'Lerna']}
                .previewImages=${[
                  'images/Work/Substructure-Text.svg',
                  'images/Work/Substructure-Shot.jpg'
                ]}
                shortDescription='My modular CSS boilerplate inspired by the work of Harry Roberts and others with modern features sprinkled in.'
                .description=${[
                  `This is a collection of logo variations created as part of a personal branding update.`,
                  `This project was a great exercise in using the process of rapid iteration to develop a final product.`
                ]}
                .wide=${true}
                .hideModal=${true}
                github='https://github.com/davidbwaters/substructure'
                npm='https://www.npmjs.com/settings/substructure/packages'

              ></c-work-item>

              <c-work-item
                class='js-reveal-fade'
                title='Yippy Clipboard Manager'
                slug='Yippy'
                .gallery=${6}
                .tags=${['Figma', 'Adobe Illustrator']}
                .previewImages=${[
                  'images/Work/Yippy-1.jpg',
                  'images/Work/Yippy-Menu-Bar.jpg'
                ]}
                .images=${[
                  'images/Work/Yippy-1.jpg',
                  'images/Work/Yippy-Menu-Bar.jpg',
                  'images/Work/Yippy-2.jpg',
                  'images/Work/Yippy-3.jpg'
                ]}
                shortDescription='I contributed app and UI icons to an open-source clipboard manager for macOS made by Matt Davidson.'
                .description=${[
                  `I contributed icons to an open-source clipboard manager for macOS made by Matt Davidson.`,
                  `I created a menu bar icon and three revisions of the app icon, included an updated version for macOS Big Sur. This project adheres to Apple's design guidelines.`
                ]}
                .wide=${true}
                github='https://github.com/mattDavo/Yippy'
              ></c-work-item>

            </div>
          </section>


          <footer class="c-page-footer u-bg-noise js-reveal">
            <div class="c-footer__inner js-reveal-inner">
              <hr class="u-separator-alternate u-margin-0" />
              <div class="c-page-footer__upper u-text-large-1">
                Made with <3 by David B Waters in ${new Date().getFullYear()}.
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
            </div>
          </footer>


          <c-loader>
            <div class="u-bg-noise-heavy">
              <c-glitch-image data-cursor-target
                src="images/Loader.svg"
                active
                glitch=1
                width="100"
                height="100"
              >
              </c-glitch-image>
            </div>
          </c-loader>

          <c-cursor></c-cursor>
          <svg style="display: none;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
            id="morphing-animation" x="0px" y="0px" viewBox="0 0 200 120" overflow="scroll">
          <!-- SVG Filter -->
          <filter id="animate" width="150%" height="150%">
            <!-- Generate Noise - fractalNoise/turbulent -->
            <feTurbulence type="fractalNoise" seed="77"
                          numOctaves="1" baseFrequency="0.01" />
            <!-- Cycle through Hue - Hue wheel allows for seamless loop  -->
            <feColorMatrix type="hueRotate" values="0">
              <animate attributeName="values"
                      values="0;360" dur="3s" repeatCount="indefinite" />
            </feColorMatrix>
            <!-- Extract alpha / filter colors -->
            <feColorMatrix type="matrix"
                          values="1 0 0 0 0
                                  0 1 0 0 0
                                  0 0 1 0 0
                                  0 0 0 0 1" />
            <!-- Optional Filters -->
            <!-- <feMorphology operator="dilate" radius="1" /> -->
            <!-- <feMorphology operator="erode" radius="1" /> -->
            <feGaussianBlur stdDeviation="0.5" />
            <!-- Apply Displacement Map -->
            <feDisplacementMap in="SourceGraphic" scale="8"
                              xChannelSelector="R", yChannelSelector="B" />
            <!-- Blending with Original -->
            <!-- <feBlend mode="soft-light" in2="SourceGraphic"/> -->
            <!-- <feComposite operator="in" in2="SourceGraphic"/> -->
          </filter>
          <!-- Object to be filtered -->
          <circle filter="url(#animate)" fill="#202020"
                  cx="100" cy="60" r="50" />
          <!-- <rect filter="url(#animate)" fill="#202020"
                    x="50" y="10" width="100" height="100" /> -->
          </svg>
        </main>
      `

    }
  })

})
