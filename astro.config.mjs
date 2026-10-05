// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://konfliktlotse.app',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // noindex-Seiten gehören nicht in die Sitemap (Sitemap = Bitte um Indexierung).
      // Impressum: enthält eine Privatanschrift; Datenschutz: Standardtext ohne Suchnutzen.
      filter: (page) => !/\/(impressum|datenschutz)\/$/.test(page),
    }),
  ],
});
