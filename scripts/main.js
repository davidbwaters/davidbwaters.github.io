/*
 *  Scripts - Main
 */
import { html, render } from '../modules/lit-html.js';
import WebFont from '../modules/webfontloader.js';
import Scrambler from '../modules/scrambling-letters.js';
import { TopBar } from './components/TopBar.js';
import { ThemeSwitch } from './components/ThemeSwitch.js';
import { Squiggle } from './components/Squiggle.js';
customElements.define('c-top-bar', TopBar);
customElements.define('c-theme-switch', ThemeSwitch);
customElements.define('c-squiggle', Squiggle);
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
    <div class="c-hero">
      <div class="c-hero__upper">
        <div class="c-hero__paint-dark"></div>
        <div class="c-hero__paint-light"></div>
        <div class="c-hero__tagline">
          <div class="c-hero__tagline-main">
            <span  data-scrambler="true">
              Artist & 
            </span><br/>
            <span  data-scrambler="true">
              Designer & 
            </span><br/>
            <span  data-scrambler="true">
              Developer
            </span>
          </div>
          <div class="c-hero__tagline-accent-1">
            Artist & <br/>
            Designer & <br/>
            Developer
          </div>
          <div class="c-hero__tagline-accent-2">
            Artist & <br/>
            Designer & <br/>
            Developer
          </div>
          <div class="c-hero__tagline-accent-3">
            Artist & <br/>
            Designer & <br/>
            Developer
          </div>
        </div>
        <div class="c-hero__name">David B. Waters</div>
        <div class="c-hero__location">Charleston, SC</div>
      </div>
      <div class="c-hero__lower u-overlay-noise ">
        <div class="c-hero__me"></div>
        <div class="c-hero__name-stylized u-bg-pattern-diagonal">
          <div class="c-hero__name-stylized-letter">
            D
          </div>
          <div class="c-hero__name-stylized-letter">
            A
          </div>
          <div class="c-hero__name-stylized-letter">
            V
          </div>
          <div class="c-hero__name-stylized-letter">
            I
          </div>
          <div class="c-hero__name-stylized-letter">
            D
          </div>
          <div class="c-hero__name-stylized-letter">
            B
          </div>
          <div class="c-hero__name-stylized-letter">
            W
          </div>
          <div class="c-hero__name-stylized-letter">
            A
          </div>
          <div class="c-hero__name-stylized-letter">
            T
          </div>
          <div class="c-hero__name-stylized-letter">
            E
          </div>
          <div class="c-hero__name-stylized-letter">
            R
          </div>
          <div class="c-hero__name-stylized-letter">
            S
          </div>
        </div>
        <div class="c-hero__heading">
          <h2 class="u-text-huge">
            Building digital solutions to promote growth.
            <c-squiggle></c-squiggle>
          </h2>
        </div>
      </div>
      <footer class="c-hero__footer u-bg-noise">
        <c-theme-switch>
          <i class="c-icon c-icon--switch"></i>
        </c-theme-switch>
        <div class="c-hero__availability">
          <i class="c-icon c-icon--hand u-animation-wave"></i>
          <span>
            Available Now!
          </span>
        </div>
        <div class="c-hero__cta">
          <a class="c-button" href="mailto:mrdavidbwaters@gmail.com">Contact</a>
          <span>Start Your Project!</span>
        </div>
        <div class="c-hero__arrow">
        </div>
        <hr class="u-separator-primary c-hero__bottom">
      </footer>
    </div>
  `, document.body);
Scrambler({
  target: '[data-scrambler]',
  random: [1000, 1000],
  speed: 60
});