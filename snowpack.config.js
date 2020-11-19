module.exports = {
  alias: {},
  buildOptions: {
    clean: true, 
    metaDir: 'meta',
    webModulesUrl: 'modules'
  },
  devOptions: {},
  install: [],
  installOptions: {
    namedExports: []
  },
  exclude: [
    '**/*.scss',
    '**/modules/*',
    '**/node_modules/*',
    '**/tests/*',
  ],
  mount: {
    src: '/',
    static: '/'
  },
  plugins: [
    '@snowpack/plugin-babel', 
    '@snowpack/plugin-dotenv',
    'legacy-bundle-snowpack-plugin',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'sass -I ./ src/stylesheets/main.scss:static/stylesheets/main.css --no-source-map',
        watch: '$1 --watch'
      }
    ]
  ]
}
