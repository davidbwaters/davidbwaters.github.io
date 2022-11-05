import type { Meta, StoryFn } from '@storybook/web-components';
import {html} from 'lit'
import { CGalleryImage as GalleryImageType}  from './GalleryImage';
import './GalleryImage'
import { useArgs } from '@storybook/client-api';
import GLightbox from "glightbox";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'GalleryImage',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    //variant: {
    //  control: { type: 'select' },
    //  options: ['primary', 'secondary']
    //}
  },
  args: {
    //variant: 'primary',
    //src: 'images/Hero-Paint-1-Light.jpg'
    //}
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: StoryFn<GalleryImageType> = ({ ...args }, { argTypes }) => {

  const [_, updateArgs] = useArgs();

  const handle = (e, f) => {
  // inside this function I am updating arguments, but you can call it
  // anywhere according to your demand, the key solution here is using `useArgs()`
  // As you see I am updating list of options with new state here
    updateArgs({ ...args, options: e });

    setTimeout(() => {
      window.lightbox.close()
      window.lightbox.setElements([{
        'href': args.src
      }])
      window.lightbox.reload()
      console.log( window.lightbox.getActiveSlide());
    }, 200)

  };
  return html`
    <div class="
      u-width-fill
      u-height-100vh
      u-display-grid
      u-position-absolute
      u-inset-0
      u-padding-top-4
    ">
      <c-gallery-image
        gallery="1"
        src="images/Hero-Paint-1-Light.jpg"
        alt=${args.alt}
        class="u-margin-horizontal-auto u-display-block"
        @click=${handle}
      >
      </c-gallery-image>
      <div class="u-width-90vw u-padding-vertical-4 u-inset-0 u-margin-horizontal-auto">

        <code>
          &#60;c-gallery-image
            gallery="1"
            src="images/Hero-Paint-1-Light.jpg"
            alt=""
          &#62;
          &#60;/c-gallery-image&#62;
        </code>
      </div>
    </div>
  `
}

export const GalleryImage = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args

GalleryImage.parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
}