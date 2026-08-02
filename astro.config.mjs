// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://freemoser.github.io',
  base: '/konflikt-app',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
