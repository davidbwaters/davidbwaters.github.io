/**
 * Snowpack Config
 */

const { join } = require('path')

module.exports = {
  mount: {
    config: { url: '/config/', static: true },
    data: { url: '/', static: true },
    public: { url: '/', static: true },
    src: { url: '/' }
  },
  plugins: [
    // ['@snowpack/plugin-optimize'],
    ['@snowpack/plugin-sass', {
      includePaths: [
        join(__dirname, '/node_modules')
      ]
    }]
  ],
  routes: [],
  optimize: {},
  packageOptions: {},
  devOptions: {},
  buildOptions: {}
}
