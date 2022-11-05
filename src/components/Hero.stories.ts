import type { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';

import { CHero } from'./Hero';
import './Hero';
import './CanvasMain'
import './Icon'
import './ThemeSwitch'

export default {
  title: 'Hero',
} as Meta;

const Template: StoryFn<CHero> = ({ ...args }) =>
  html`
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
					class="u-animation-wave u-text-large-2 u-margin-bottom-0"
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
