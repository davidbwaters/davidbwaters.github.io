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

      const documentHeight = () => {

        const doc = document.documentElement
        doc.style.setProperty('--doc-height', `${window.innerHeight}px`)

      }

      window.addEventListener('resize', documentHeight)

      documentHeight()

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
            scroller: document.body,
            trigger: container,
            toggleActions: 'restart none none reset',
            start: 'top bottom',
            end: '+=10'
          }
        })

        // tl.set(targets, { autoAlpha: 1 })

        tl.from(targets, {
          y: 120,
          opacity: 0,
          duration: 0.5,
          delay: 0,
          stagger: 0.1,
          scaleY: 1.4,
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

            scroller: document.body,
            trigger: container,
            toggleActions: 'restart none none reset',
            start: 'top bottom',
            end: '+=10'
          }
        })

        tl.from(container, {
          opacity: 0,
          scaleY: 1.4,
          duration: 0.5,
          delay: 0.1,
          stagger: 0.1,
          ease: 'Power2.out',
          onComplete: () => {

            container.style.transform = ''
            ScrollTrigger.refresh()

          }
        })

      })


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
                class="u-theme-fill" width="24" height="24"
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
            <c-section-header class="u-bg-noise u-z-index-7 js-reveal-inner">
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

              <c-work-list-item
                class='js-reveal-fade'
                title='Matrix'
                slug='Matrix'
                .gallery=${1}
                .tags=${['Figma', 'TypeScript', 'React', 'Frontend Development']}
                .previewImages=${[
                  'images/Work/Matrix-1.jpg',
                  'images/Work/Matrix-2.jpg'
                ]}
                .images=${[
                  'images/Work/Matrix-1.jpg',
                  'images/Work/Matrix-2.jpg',
                  'images/Work/Matrix-3.jpg',
                  'images/Work/Matrix-4.jpg',
                  'images/Work/Matrix-5.jpg',
                  'images/Work/Matrix-6.jpg'
                ]}
                site='http://mtx.gg'
                shortDescription='Revolutionizing the digital economy, one quest at a time.'
                .description=${[
                  `While working as Lead Designer at <a href='http://mtx.gg'>Matrix</a> in 2022, I was tasked with developing their branding and design system.`, `Using Figma and a design token based frontend, I also helped develop the designs into a React-based webapp.`
                ]}

                .wide=${true}
              ></c-work-list-item>

              <c-work-list-item
                class='js-reveal-fade'
                title='Fitbux'
                slug='Fitbux'
                .gallery=${2}
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
              ></c-work-list-item>


              <c-work-list-item
                class='js-reveal-fade'
                title='macOS Modern'
                slug='macOSModern'
                .gallery=${3}
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
                  `At the time of this writing, it has over 71 thousand installs.`
                ]}

                .wide=${true}
                github='https://github.com/davidbwaters/macos-modern-vscode-theme'
                vsc='https://marketplace.visualstudio.com/items?itemName=davidbwaters.macos-modern-theme'
                .threeButton=${true}
              ></c-work-list-item>


              <c-work-list-item
                class='js-reveal-fade'
                title='Limber Logic Brand Identity'
                slug='LimberLogic'
                .gallery=${4}
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
                  `Limber Logic was the collaboration of my friend as Lead Developer and me as Lead Designer. We worked on various projects and I learned a lot in my time there.`
                ]}
                .wide=${true}
              ></c-work-list-item>


              <c-work-list-item
                class='js-reveal-fade'
                title='Map Dashboard'
                slug='MapDashboard'
                .gallery=${5}
                .tags=${['Figma', 'Javascript', 'React', 'Frontend Development']}
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
              ></c-work-list-item>


              <c-work-list-item
                class='js-reveal-fade'
                title='Personal Branding'
                slug='PersonalBranding'
                .gallery=${6}
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
              ></c-work-list-item>


              <c-work-list-item
                class='js-reveal-fade'
                title='Substructure ITCSS Framework'
                slug='Substructure'
                .gallery=${7}
                .tags=${['CSS/SASS', 'BEM', 'ITCSS', 'Lerna', 'Frontend Development']}
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

              ></c-work-list-item>


              <c-work-list-item
                class='js-reveal-fade'
                title='Yippy Clipboard Manager'
                slug='Yippy'
                .gallery=${8}
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
              ></c-work-list-item>

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
          <div id="awwwards" class="c-awwwards"><a href="https://www.awwwards.com/sites/david-b-waters-designs" target="_blank"><svg width="53.08" height="171.358"><path class="js-color-bg" fill="white" d="M0 0h53.08v171.358H0z"></path><g class="js-color-text" fill="#342867"><path d="M20.047 153.665v-1.9h3.888v-4.093h-3.888v-1.9h10.231v1.9h-4.59v4.093h4.59v1.9zM29.898 142.236c-.331.565-.784.997-1.359 1.294s-1.222.446-1.944.446c-.721 0-1.369-.149-1.943-.446a3.316 3.316 0 0 1-1.36-1.294c-.331-.564-.497-1.232-.497-2.002s.166-1.438.497-2.002a3.316 3.316 0 0 1 1.36-1.294c.574-.297 1.223-.445 1.943-.445.723 0 1.369.148 1.944.445a3.307 3.307 0 0 1 1.359 1.294c.331.564.497 1.232.497 2.002s-.166 1.438-.497 2.002m-1.703-3.347c-.435-.33-.967-.496-1.601-.496-.633 0-1.166.166-1.601.496-.433.332-.649.78-.649 1.346 0 .564.217 1.013.649 1.345.435.331.968.497 1.601.497.634 0 1.166-.166 1.601-.497.435-.332.649-.78.649-1.345.001-.566-.214-1.014-.649-1.346M22.911 134.852v-1.813h1.186a3.335 3.335 0 0 1-.951-1.009 2.423 2.423 0 0 1-.352-1.271c0-.682.19-1.229.57-1.645.381-.413.932-.621 1.652-.621h5.262v1.812h-4.721c-.419 0-.727.096-.921.285-.195.19-.292.447-.292.769 0 .302.115.58.35.833.234.254.577.458 1.03.613.454.156.993.234 1.616.234h2.938v1.813h-7.367zM29.898 125.136a3.314 3.314 0 0 1-1.359 1.294c-.575.297-1.222.445-1.944.445-.721 0-1.369-.148-1.943-.445a3.322 3.322 0 0 1-1.36-1.294c-.331-.565-.497-1.232-.497-2.002 0-.771.166-1.438.497-2.003a3.313 3.313 0 0 1 1.36-1.293c.574-.297 1.223-.446 1.943-.446.723 0 1.369.149 1.944.446s1.028.728 1.359 1.293.497 1.232.497 2.003c.001.769-.166 1.436-.497 2.002m-1.703-3.347c-.435-.331-.967-.497-1.601-.497-.633 0-1.166.166-1.601.497-.433.331-.649.778-.649 1.345 0 .564.217 1.013.649 1.344.435.332.968.498 1.601.498.634 0 1.166-.166 1.601-.498.435-.331.649-.779.649-1.344.001-.567-.214-1.014-.649-1.345M22.911 117.75v-1.812h1.199c-.419-.265-.742-.586-.972-.966s-.345-.784-.345-1.213c0-.272.05-.569.146-.892l1.682.336a1.429 1.429 0 0 0-.205.76c0 .576.261 1.048.783 1.418.521.37 1.342.557 2.461.557h2.617v1.812h-7.366zM29.812 111.252c-.391.511-.857.851-1.403 1.016l-.776-1.446c.381-.138.68-.329.893-.577.215-.249.321-.544.321-.885a1.2 1.2 0 0 0-.168-.658c-.112-.175-.294-.263-.548-.263-.225 0-.406.105-.548.313-.142.21-.291.534-.446.973-.019.068-.058.17-.117.307-.224.565-.506 1.004-.848 1.315-.34.313-.779.467-1.314.467-.381 0-.727-.102-1.039-.306a2.185 2.185 0 0 1-.744-.84 2.554 2.554 0 0 1-.279-1.207c0-.497.105-.949.314-1.359.211-.408.506-.725.886-.949l.993 1.082c-.43.292-.644.686-.644 1.184a.84.84 0 0 0 .154.504.471.471 0 0 0 .401.212c.176 0 .338-.103.49-.307.15-.205.334-.604.547-1.199.205-.564.474-1.001.805-1.308.332-.308.756-.46 1.271-.46.721 0 1.299.229 1.732.687s.65 1.057.65 1.797c.001.759-.194 1.396-.583 1.907M35.481 17.006l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.782-14.969h3.713l2.673 10.276 2.525-10.276h3.445l2.524 10.276 2.674-10.276zM37.978 27.163c1.426 0 2.496 1.068 2.496 2.495 0 1.425-1.07 2.495-2.496 2.495-1.425 0-2.494-1.07-2.494-2.495-.001-1.427 1.069-2.495 2.494-2.495"></path></g></svg></a></div>
        </main>
      `

    }
  })

})
