/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/'},
  },
  plugins: [
//    ['@snowpack/plugin-optimize'],
    ['@snowpack/plugin-sass', {
      includePaths: [
        __dirname + '/node_modules'
      ]
    }],
    ['@snowpack/plugin-webpack', {
      outputPattern: {
        css: 'main.css',
        js: 'main.js',
        assets: ''
      }
    }]
  ],
  routes: [],
  optimize: {},
  packageOptions: {},
  devOptions: {},
  buildOptions: {},
};
