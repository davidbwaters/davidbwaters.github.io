import '../scripts/main'
import '../stylesheets/main.scss'
import type { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit'
import { CIcon }  from '../components/Icon';
import '../components/Icon'

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Icon',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [
        'none', 'arrow-down',  'expand',  'github', 'plus', 'wave',
        'arrow-left',  'mail', 'theme',  'windows',  'dribbble', 'twitter',
        'expand',  'npm'
      ],
    },
  },
  args: {
    //variant: 'primary',
    icon: 'plus'
  }
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: StoryFn<CIcon> = ({ ...args }) =>
  html`
    <c-Icon
      class=" u-text-large-3 u-margin-0"
      icon=${args.icon ? args.icon : ''}
    >
    </c-Icon>
  `

export const Icon = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args

