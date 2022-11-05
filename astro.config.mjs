import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import 'sass';

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), compress()],
  vite: {
    ssr: {
    }
  },
  outDir: 'build'
});