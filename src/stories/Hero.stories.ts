import '../scripts/main'
import '../stylesheets/main.scss'
import type { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { CHero } from'../components/Hero';
import '../components/Hero';
import '../components/Loader';
import '../components/CanvasMain'
import '../components/Icon'
import '../components/ThemeSwitch'

export default {
  title: 'Hero',
} as Meta;

const Template: StoryFn<CHero> = () =>
  html`
		<c-loader>

			<div style="display: grid;min-height: 100vh;grid-template-columns: clamp(3rem, 4vw, 8rem);grid-template-rows: min-content;place-content: center;">
        <svg class="c-logo u-theme-fill" width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>Artboard</title>
          <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Logo" transform="translate(0.000000, 5.000000)" fill="currentColor" fill-rule="nonzero">
                  <path d="M9.6,0 L9.6,38.4 L0,38.4 L0,0 L9.6,0 Z M48,19.2 L48,28.8 L38.4,38.4 L38.4,19.2 L48,19.2 Z M28.8,0 L28.8,28.8 L19.2,38.4 L19.2,0 L28.8,0 Z M48,0 L48,9.6 L38.4,19.2 L38.4,0 L48,0 Z"></path>
              </g>
          </g>
        </svg>
      </div>
		</c-loader>
    <c-hero style="--vw: .85vw">
      <c-canvas-main slot="paint"></c-canvas-main>

			<h1 slot="tagline" class="js-text-plane">
				Multidisciplinary <br />
				Designer & Frontend <br />
				Developer
			</h1>
			<div slot="name-stylized">DAVIDBWATERS</div>
			<h2 slot="heading" class="js-text-plane">
				Building digital solutions to promote growth.
				<c-squiggle></c-squiggle>
			</h2>
			<c-theme-switch slot="footer-box-left" data-cursor-target>
				<c-icon icon="theme"></c-icon>
			</c-theme-switch>
			<div slot="footer-content-left">
				<a
					class="u-animation-wave u-text-large-1 u-margin-bottom-0"
					href="mailto:mrdavidbwaters@gmail.com"
					title="Get in Touch!"
				>
          <c-icon icon="wave"></c-icon>
        </a>
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
  `

export const Hero = Template.bind({});
Hero.args = {
};
