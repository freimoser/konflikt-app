// SEO-Audit über den gebauten Stand (dist/): doppelte Titel/Descriptions, H1-Anzahl, Bilder ohne alt,
// kaputtes JSON-LD, verklebte Links („WortWort“ vor <a>), Längen und Seiten mit wenigen internen Links.
// Aufruf nach dem Build: `npm run audit:seo`. Exit 1 bei Befunden, damit er sich auch als Freigabe eignet.
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const files = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) files.push(p);
  }
})(DIST);

const decode = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const pages = {};
const inbound = {};
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const url = '/' + path.relative(DIST, file).replace(/index\.html$/, '');
  let ldErrors = 0;
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { ldErrors++; }
  }
  for (const href of new Set([...html.matchAll(/href="(\/[^"#?]*)/g)].map(m => m[1]))) {
    if (href !== url) inbound[href] = (inbound[href] || 0) + 1;
  }
  pages[url] = {
    noindex: /<meta name="robots" content="noindex/.test(html),
    title: decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || ''),
    desc: decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || ''),
    h1: (html.match(/<h1[\s>]/g) || []).length,
    noAlt: (html.match(/<img(?![^>]*\balt=)[^>]*>/g) || []).length,
    ldErrors,
    glued: (html.match(/[A-Za-zäöüÄÖÜß.?!:,;)“"]<a /g) || []).length,
  };
}

const indexable = Object.entries(pages).filter(([, p]) => !p.noindex);
const duplicates = key => {
  const seen = {};
  for (const [url, p] of indexable) (seen[p[key]] ??= []).push(url);
  return Object.values(seen).filter(urls => urls.length > 1);
};
const checks = {
  'Doppelte Titel': duplicates('title'),
  'Doppelte Descriptions': duplicates('desc'),
  'H1 ≠ 1': indexable.filter(([, p]) => p.h1 !== 1).map(([u]) => u),
  'Bilder ohne alt': indexable.filter(([, p]) => p.noAlt).map(([u]) => u),
  'JSON-LD nicht lesbar': indexable.filter(([, p]) => p.ldErrors).map(([u]) => u),
  'Verklebte Links': indexable.filter(([, p]) => p.glued).map(([u, p]) => `${u} (${p.glued})`),
  'Titel > 60 Zeichen': indexable.filter(([, p]) => p.title.length > 60).map(([u, p]) => `${u} (${p.title.length})`),
  'Description außerhalb 100–155': indexable
    .filter(([, p]) => p.desc.length < 100 || p.desc.length > 155)
    .map(([u, p]) => `${u} (${p.desc.length})`),
  'Weniger als 3 interne Links': indexable.filter(([u]) => (inbound[u] || 0) < 3).map(([u]) => `${u} (${inbound[u] || 0})`),
};

let problems = 0;
console.log(`SEO-Audit: ${indexable.length} indexierbare Seiten.`);
for (const [name, list] of Object.entries(checks)) {
  if (list.length) {
    problems += list.length;
    console.log(`  ✗ ${name}: ${list.map(x => (Array.isArray(x) ? x.join(' = ') : x)).join(', ')}`);
  }
}
if (problems) process.exit(1);
console.log('✓ Keine SEO-Befunde.');
