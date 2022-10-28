/*
 *  Scripts - Main
 */

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GLightbox from "glightbox";
import ImagePreloader from "image-preloader";
import Scrambler from "scrambling-letters";

import "glightbox/dist/css/glightbox.css";
import "../stylesheets/main.scss"

const preloadingImages = [
  "/images/Loader.svg",
  "/images/Me-Dark.jpg",
  "/images/Me-Light.jpg",
  "/images/Hero-Paint-1-Dark.jpg",
  "/images/Hero-Paint-1-Light.jpg",
  "/images/Hero-Paint-2-Dark.jpg",
  "/images/Hero-Paint-2-Light.jpg",
  "/images/Noise-Clear.svg",
];

const preloader = new ImagePreloader();


function scramble() {
  setTimeout(() => {
    Scrambler({
      target: "[data-scrambler]",
      random: [1500, 1500],
      speed: 60,
    });
  }, 1500);
}

function consoleLove() {
  const cl = [
    "background: #fff",
    "border-bottom: solid 1px black",
    "border-left: solid 1px black",
    "border-top: solid 1px black",
    "color: #666",
    "line-height: 35px",
    "padding: 10px 0px 10px 10px",
  ].join(";");

  const clh = [
    "background: #fff",
    "border-bottom: solid 1px black",
    "border-top: solid 1px black",
    "color: red",
    "line-height: 35px",
    "padding: 10px 5px 10px 0px",
    "width: 300px",
  ].join(";");

  const cle = [
    "background: #fff",
    "border-bottom: solid 1px black",
    "border-right: solid 1px black",
    "border-top: solid 1px black",
    "color: #666",
    "line-height: 35px",
    "padding: 10px 20px 10px 0px",
    "width: 300px",
  ].join(";");

  console.log("%c Coded with %c ♥️ %c https://davidbwaters.com", cl, clh, cle);
}

function lightboxSetup() {
  GLightbox({
    selector: "*[data-glightbox]",
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    openEffect: "fade",
    closeEffect: "fade",
    skin: "dbw",
  });
}

function documentHeight() {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};


function setTheme() {

  const isDark =
    window.matchMedia('(prefers-color-scheme: dark)').matches ||
    document.body.classList.contains('theme-dark')

  document.body.dataset.theme = isDark ? 'dark' : 'light'

  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', function(e) {
      document.body.dataset.theme =
        document.body.dataset.theme === 'light'
        ? 'dark'
        : 'light'


      window.dispatchEvent(

        new CustomEvent('themeChange', {

          detail: { theme: document.body.dataset.theme },
          bubbles: true,
          composed: true

        })

      )
      console.log('change')
    })

}

function setReveals() {

  const revealContainers = document.querySelectorAll(".js-reveal");

  revealContainers.forEach((container) => {
    let targets = Array.from(container.querySelectorAll(".js-reveal-inner"));

    if (!targets.length) {
      targets = [container];
    }

    //let image = container.querySelector('img')

    let tl = gsap.timeline({
      scrollTrigger: {
        scroller: document.body,
        trigger: container,
        toggleActions: "restart none none reset",
        start: "top bottom",
        end: "+=10",
      },
    });

    // tl.set(targets, { autoAlpha: 1 })

    tl.from(targets, {
      y: 120,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
      stagger: 0.1,
      scaleY: 1.4,
      ease: "Power2.out",
      onComplete: () => {
        //ScrollTrigger.refresh();
      },
    });
  });

  const revealFadeContainers = document.querySelectorAll(".js-reveal-fade");

  revealFadeContainers.forEach((container:HTMLElement) => {

    gsap.set(container, {
      transformOrigin: "top center",
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        scroller: document.body,
        trigger: container,
        toggleActions: "restart none none reset",
        start: "top bottom",
        end: "+=10",
      },
    });

    tl.from(container, {
      opacity: 0,
      scaleY: 1.4,
      duration: 0.5,
      delay: 0.1,
      stagger: 0.1,
      ease: "Power2.out",
      onComplete: () => {
      },
    });


  });

}

function setFilterAnimation() {
  const filters = [
    document.querySelector('svg feColorMatrix')
  ]
  filters.push(
    document.querySelector('c-hero').shadowRoot
      .querySelector('svg feColorMatrix')
  )
  console.log(filters[0])

  gsap.to(
    filters,
    {
      attr:{values: 360},
      repeat: -1,
      duration: 3
    }

  )

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  setTimeout(() => {
    if (isSafari) {
      console.log(document.querySelector('.u-morphing-animation'))
      document.body.removeChild(document
        .querySelector('.u-morphing-animation'))
      document.querySelector('c-hero').shadowRoot.removeChild(
        document.querySelector('c-hero').shadowRoot
          .querySelector('.u-morphing-animation')
      )

    }
  }, 200)


}

function setHeroScroll() {
  const hero = document.querySelector("c-hero")
  const noise = document.querySelector("c-canvas-noise")

  if (hero && noise){
    const heroTrigger = hero.shadowRoot && hero
      .shadowRoot.querySelector(".c-hero__upper");

    let heroTl = gsap.timeline({
      scrollTrigger: {
        scroller: document.body,
        trigger: heroTrigger,
        start: "0%",
        end: "+=150%",
        scrub: true,
        toggleActions: "restart none none reset",
      },
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });
    heroTl.to(
      noise,
      {
        "--opacity-noise": 0.6
      },
      0
    );

  }
}

window.addEventListener("resize", documentHeight);

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.normalizeScroll(true);

window.addEventListener("DOMContentLoaded", () => {

  documentHeight();
  ScrollTrigger.refresh()

  setReveals()
  setHeroScroll()
  setFilterAnimation()

  setTimeout(

    setTheme, 200

  )

  window.dispatchEvent(
    new CustomEvent("appLoaded", {
      detail: { theme: document.body.dataset.theme },
      bubbles: true,
      composed: true,
    })
  );

  preloader.preload(...preloadingImages).then(function (status) {
    preload().then(() => {
      let loader = document.querySelector("c-loader");

      if (loader) {
        loader.disable();
        scramble();
      }

      consoleLove();
      lightboxSetup();
    });
  });


});



async function preload() {
  //await this.getData()

  //console.log(this.data)

}
