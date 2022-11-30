import '../scripts/main'
import '../stylesheets/main.scss'
import type { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit'
import { CWorkListItem }  from '../components/WorkListItem';
import '../components/WorkListItem'
import '../components/GlitchImage'
import '../components/Modal'
import '../components/SectionHeader'

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'WorkListItem',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    //variant: {
    //  control: { type: 'select' },
    //  options: ['primary', 'secondary']
    //},
    title: {
      control: { type: 'text' },
    },
    tags: {
      control: { type: 'text' },
    },
    previewImage1: {
      control: { type: 'text' },
    },
    previewImage2: {
      control: { type: 'text' },
    },
    shortDescription: {
      control: { type: 'text' }
    },
    description: {
      control: { type: 'text' }
    },
    github: {
      control: { type: 'text' }
    },
    site: {
      control: { type: 'text' }
    },
    vsc: {
      control: { type: 'text' }
    },
    npm: {
      control: { type: 'text' }
    }
  },
  args: {
    //variant: 'primary',
    title: 'Title',
    tags: '["Node", "Javascript"]',
    previewImage1: '/images/Work/Fitbux-1.jpg',
    previewImage2: '/images/Work/Fitbux-2.jpg',
    images: `[
      "images/Work/Fitbux-1.jpg",
      "images/Work/Fitbux-2.jpg",
      "images/Work/Fitbux-3.jpg",
      "images/Work/Fitbux-4.jpg"
    ]`,
    shortDescription: 'This is a short description.',

    description: '["This is a description"]',
  }
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: StoryFn<CWorkListItem> = ({ ...args }) =>
  html`
    <c-work-list-item
      previewImages='[
        "${args.previewImage1}",
        "${args.previewImage2}"
      ]'
      images=${args.images}
      slug='slug'
      title=${args.title}
      tags='${args.tags}'
      description=${args.description}
      shortDescription=${args.shortDescription}
      github=${args.github}
      site=${args.site}
      npm=${args.npm}
      vsc=${args.vsc}
    ></c-work-list-item>

    >
    </c-work-list-item>
  `

export const WorkListItem = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args

