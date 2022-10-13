/*
 *  Scripts - Main
 */

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GLightbox from "glightbox";
import ImagePreloader from "image-preloader";
import Scrambler from "scrambling-letters";

import "glightbox/dist/css/glightbox.css";


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

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

window.addEventListener("resize", documentHeight);

documentHeight();

gsap.registerPlugin(ScrollTrigger);




window.addEventListener("DOMContentLoaded", () => {

  ScrollTrigger.refresh()

  const heroTrigger = document
    .querySelector("c-hero")
    .shadowRoot.querySelector(".c-hero__upper");

  let heroTl = gsap.timeline({
    scrollTrigger: {
      scroller: document.body,
      trigger: heroTrigger,
      start: "0%",
      end: "+=150%",
      scrub: true,
      toggleActions: "restart none none reset",
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    },
  });


  heroTl.fromTo(
    document.querySelector("c-hero")
      .shadowRoot.querySelectorAll(".js-hero-me"),
    {
      backgroundSize: "100% auto"
    },
    {
      backgroundSize: "160% auto",
    },
    0
  );

  heroTl.to(
    document.querySelector("c-canvas-noise"),
    {
      "--opacity-noise": 0.6
    },
    0
  );


  const revealContainers = document.querySelectorAll(".js-reveal");

  revealContainers.forEach((container) => {
    let targets = container.querySelectorAll(".js-reveal-inner");

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
      delay: 0,
      stagger: 0.1,
      scaleY: 1.4,
      ease: "Power2.out",
      onComplete: () => {
        targets.forEach((item) => {
          item.style.transform = "";
        });
        ScrollTrigger.refresh();
      },
    });
  });

  const revealFadeContainers = document.querySelectorAll(".js-reveal-fade");

  revealFadeContainers.forEach((container) => {
    //let image = container.querySelector('img')
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
        container.style.transform = "";
        ScrollTrigger.refresh();
      },
    });


  });

  window.dispatchEvent(
    new CustomEvent("appLoaded", {
      detail: { theme: document.body.dataset.theme },
      bubbles: true,
      composed: true,
    })
  );

});


let app = document.querySelector(".c-app");

const setLogo = () => {
  let theme = document.body.dataset.theme;

  let logo = document.querySelector(".c-logo");

  logo.setAttribute(
    "data",
    theme === "dark" ? "images/Logo-Dark.svg" : "images/Logo-Light.svg"
  );
  // console.log(this.data.logo)

};

async function preload() {
  //await this.getData()

  //console.log(this.data)

  setLogo();

  app.addEventListener("themeChange", setLogo);
}

preloader.preload(...preloadingImages).then(function (status) {
  preload().then(() => {
    let loader = document.querySelector("c-loader");

    loader.disable();
    scramble();

    consoleLove();
    lightboxSetup();
  });
});
