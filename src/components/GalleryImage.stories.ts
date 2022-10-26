import type { Meta, StoryFn } from '@storybook/web-components';
import {html} from 'lit'
import { CGalleryImage as GalleryImageType}  from './GalleryImage';
import './GalleryImage'

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'GalleryImage',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    //variant: {
    //  control: { type: 'select' },
    //  options: ['primary', 'secondary']
    //},
    size: {
      control: { type: 'select' },
      options: ['normal', 'large']
    },
    width: {
      control: { type: 'select' },
      options: ['auto', 'full'],
    },
    label: {
      control: {type: 'text'}
    },
    onClick: { action: 'onClick' },
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
    icon: 'plus',
    label: 'GalleryImage',
    size: 'normal',
    width: 'auto',
    onClick: () => {}
  }
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: StoryFn<GalleryImageType> = ({ ...args }, { argTypes }) =>
  html`
    <c-GalleryImage
      variant=${args.variant}
      label=${args.label ? args.label : 'GalleryImage'}
      size=${args.size}
      onclick=${args.onClick ? args.onClick : () => {}}
      width=${args.width}
      icon=${args.icon ? args.icon : ''}
    >
    </c-GalleryImage>
  `

export const GalleryImage = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args

