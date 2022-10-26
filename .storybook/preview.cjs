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
    default: 'dark',
    list: [
      { name: 'dark', class: 'theme-dark', color: '#222' },
      { name: 'light', class: 'theme-light', color: '#ddd' }
    ],
    onChange: ({name}) => {
      document.getElementById("storybook-preview-iframe").contentDocument.body.dataset.theme = name;
      console.log(name)
    }
  },

  docs: {
    // Opt-out of inline rendering
    iframeHeight: '250px'
  },
}