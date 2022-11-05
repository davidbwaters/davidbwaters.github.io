import prettier from 'prettier/standalone';
import prettierBabel from 'prettier/parser-babel';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
  themes: {
    default: 'light',
    list: [
      { name: 'dark', class: 'theme-dark', color: '#222' },
      { name: 'light', class: 'theme-light', color: '#ddd' }
    ],
    onChange: ({name}) => {
      document.getElementById("storybook-preview-iframe").contentDocument.body.dataset.theme = name;
      document.getElementById("storybook-preview-iframe").contentDocument.dispatchEvent(

        new CustomEvent('themeChange', {

          detail: { theme: document.body.dataset.theme },
          bubbles: true,
          composed: true

        })

      );
      console.log(name)
    }
  },

  docs: {
    // Opt-out of inline rendering
    iframeHeight: '250px'
  },
}