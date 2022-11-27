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
  },
  args: {
    //variant: 'primary',
  }
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: StoryFn<GalleryImageType> = ({ ...args }, { argTypes }) =>
  html`
    <c-gallery-image
      gallery="1"
      alt="Hero Pain"
      src="/images/Hero-Paint-1-Light.jpg"
    >
    </c-gallery-image>
  `

export const GalleryImage = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args

