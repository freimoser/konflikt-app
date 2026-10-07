// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { getAllConflicts } from './src/data/categories/index.js';
import { methods } from './src/data/methods/index.js';
import { topics } from './src/data/topics/index.js';

// lastmod nur aus echten Inhaltsdaten (published/updated) – nie das Build-Datum, sonst ignoriert Google es.
const SITE = 'https://konfliktlotse.app';
const FIRST_RELEASE = '2026-08-03';
const lastmod = new Map();
for (const c of getAllConflicts()) {
  const d = c.updated || c.published || FIRST_RELEASE;
  lastmod.set(`${SITE}/konflikt/${c.category}/${c.slug}/`, d);
  lastmod.set(`${SITE}/ratgeber/${c.category}/${c.slug}/`, d);
}
for (const m of methods) lastmod.set(`${SITE}/methoden/${m.slug}/`, m.updated || m.published);
for (const t of topics) lastmod.set(`${SITE}/themen/${t.slug}/`, t.updated || t.published);

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
      serialize(item) {
        const d = lastmod.get(item.url);
        if (d) item.lastmod = new Date(`${d}T00:00:00Z`).toISOString();
        return item;
      },
    }),
  ],
});
