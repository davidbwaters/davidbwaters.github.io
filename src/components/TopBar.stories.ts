import type { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';

import { CTopBar } from'./TopBar';
import './TopBar';
import './Icon'

export default {
  title: 'Top Bar',
} as Meta;

const Template: StoryFn<CTopBar> = ({ ...args }) =>
  html`
    <c-top-bar class="u-position-relative">
      <a
        slot="logo"
        title="Home"
      >
        <svg class="u-wrapper-full"  viewBox="0 0 48 48">
          <use href="images/logo.svg#img"></use>
        </svg>
      </a>
      <a
        slot="link"
        title="Email"
      >
        <c-icon icon="mail"></c-icon>
      </a>
      <a
        slot="link"
        title="Twitter"
      >
        <c-icon icon="twitter"></c-icon>
      </a>
      <a
        slot="link"
        title="Dribbble"
      >
        <c-icon icon="dribbble"></c-icon>
      </a>
      <a
        slot="link"
        title="Github"
      >
        <c-icon icon="github"></c-icon>
      </a>
      <a
        slot="link"
        title="NPM"
      >
        <c-icon icon="npm"></c-icon>
      </a>
    </c-top-bar>
  `

export const TopBar = Template.bind({});
TopBar.args = {
};
