import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import 'sass'


// https://astro.build/config
export default defineConfig({
  integrations: [lit()],
  vite: {
    ssr: {
      noExternal: [ 'ogl' ]
    }
  },

  outDir: 'build'
});