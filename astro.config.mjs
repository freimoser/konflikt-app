// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { getAllConflicts } from './src/data/categories/index.js';
import { methods } from './src/data/methods/index.js';
import { topics } from './src/data/topics/index.js';
import { categories } from './src/data/categories/index.js';
import { execSync } from 'node:child_process';

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

// Übersichten und statische Seiten: neuester enthaltener Inhalt bzw. letzte Git-Änderung der Quelldateien.
// (In GitHub Actions braucht das die volle Historie: checkout mit fetch-depth: 0.)
const gitDate = (...files) => {
  try {
    return execSync(`git log -1 --format=%cs -- ${files.map(f => `"${f}"`).join(' ')}`, { encoding: 'utf8' }).trim() || null;
  } catch { return null; }
};
const maxDate = (...dates) => dates.filter(Boolean).sort().at(-1) || null;
const conflictDates = getAllConflicts().map(c => c.updated || c.published || FIRST_RELEASE);
const methodDates = methods.map(m => m.updated || m.published);
const topicDates = topics.map(t => t.updated || t.published);
const allDates = [...conflictDates, ...methodDates, ...topicDates];
const setIfMissing = (path, date) => { if (date && !lastmod.has(`${SITE}${path}`)) lastmod.set(`${SITE}${path}`, date); };

setIfMissing('/', maxDate(...allDates, gitDate('src/pages/index.astro')));
setIfMissing('/konflikt/', maxDate(...conflictDates, gitDate('src/pages/konflikt/index.astro')));
setIfMissing('/ratgeber/', maxDate(...conflictDates, gitDate('src/pages/ratgeber/index.astro')));
for (const cat of categories) {
  const catDates = getAllConflicts().filter(c => c.category === cat.id).map(c => c.updated || c.published || FIRST_RELEASE);
  const hubDate = gitDate(`src/data/hubs/${cat.id}.js`, `src/data/categories/${cat.id}.js`);
  setIfMissing(`/konflikt/${cat.id}/`, maxDate(...catDates, hubDate));
  setIfMissing(`/ratgeber/${cat.id}/`, maxDate(...catDates, hubDate));
}
setIfMissing('/methoden/', maxDate(...methodDates));
setIfMissing('/themen/', maxDate(...topicDates));
const vorlagenDate = gitDate('src/data/vorlagen.js', 'src/pages/vorlagen');
setIfMissing('/vorlagen/', vorlagenDate);
for (const slug of ['gespraech-vorbereiten', 'familienrat-protokoll', 'wg-vereinbarung', 'vereinbarung-nach-streit']) setIfMissing(`/vorlagen/${slug}/`, vorlagenDate);
setIfMissing('/glossar/', gitDate('src/data/glossar.js', 'src/pages/glossar.astro'));
setIfMissing('/spiel/', gitDate('src/pages/spiel/index.astro'));
setIfMissing('/spiel/gespraechstrainer/', gitDate('src/data/trainer.js', 'src/pages/spiel/gespraechstrainer.astro'));
setIfMissing('/spiel/eskalations-check/', gitDate('src/pages/spiel/eskalations-check.astro'));
setIfMissing('/spiel/konflikttyp/', gitDate('src/data/quiz.js', 'src/pages/spiel/konflikttyp.astro'));
for (const page of ['ueber-uns', 'kontakt', 'hilfe-in-krisen']) setIfMissing(`/${page}/`, gitDate(`src/pages/${page}.astro`));

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
      filter: (page) => !/\/(impressum|datenschutz|suche)\/$/.test(page),
      serialize(item) {
        const d = lastmod.get(item.url);
        if (d) item.lastmod = new Date(`${d}T00:00:00Z`).toISOString();
        return item;
      },
    }),
  ],
});
