#!/usr/bin/env node
// Prüft das gebaute dist/ auf kaputte interne Links, fehlende Canonicals
// und Sitemap-Einträge ohne Zielseite. Aufruf: npm run check (nach dem Build).
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname, resolve } from 'node:path';

const DIST = resolve('dist');
const SITE = 'https://konfliktlotse.app';

if (!existsSync(DIST)) {
  console.error('dist/ fehlt – zuerst `npm run build` ausführen.');
  process.exit(1);
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function targetExists(pathname) {
  const clean = decodeURIComponent(pathname.split('#')[0].split('?')[0]);
  const local = join(DIST, clean);
  if (clean.endsWith('/')) return existsSync(join(local, 'index.html'));
  if (existsSync(local) && statSync(local).isFile()) return true;
  return false;
}

const files = walk(DIST);
const htmlFiles = files.filter(f => f.endsWith('.html'));
const errors = [];
const warnings = [];
let linkCount = 0;
const fragmentChecks = [];
const seenTitles = new Map();
const seenHeads = new Map();

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const rel = '/' + relative(DIST, file).replace(/index\.html$/, '');
  const is404 = rel === '/404.html';

  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    let url = m[1];
    if (url.startsWith('#') && url.length > 1) { fragmentChecks.push({ from: rel, path: rel, frag: decodeURIComponent(url.slice(1)), url }); continue; }
    if (/^(mailto:|tel:|javascript:|data:|#)/.test(url)) continue;
    if (url.startsWith(SITE)) url = url.slice(SITE.length) || '/';
    if (/^https?:\/\//.test(url) || url.startsWith('//')) continue;
    linkCount++;
    const pathname = url.startsWith('/')
      ? url
      : '/' + relative(DIST, resolve(dirname(file), url.split('#')[0].split('?')[0]));
    const bare = pathname.split('#')[0].split('?')[0];
    if (!bare.endsWith('/') && !/\.[a-z0-9]+$/i.test(bare)) {
      warnings.push(`${rel}: Link ohne Trailing Slash → ${url}`);
    }
    if (!targetExists(pathname)) errors.push(`${rel}: kaputter Link → ${url}`);
    const frag = url.includes('#') ? decodeURIComponent(url.split('#')[1]) : '';
    if (frag && targetExists(pathname)) fragmentChecks.push({ from: rel, path: bare, frag, url });
  }

  if (!is404) {
    const canon = html.match(/<link rel="canonical" href="([^"]+)"/);
    if (!canon) errors.push(`${rel}: kein Canonical`);
    else if (canon[1].includes('?')) errors.push(`${rel}: Canonical mit Query → ${canon[1]}`);
    const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
    const descLen = desc.replace(/&amp;/g, '&').replace(/&#39;|&quot;/g, "'").length;
    if (descLen < 50) warnings.push(`${rel}: Meta-Description fehlt oder < 50 Zeichen`);
    else if (descLen > 155) warnings.push(`${rel}: Meta-Description ${descLen} Zeichen (Grenze 155)`);
    if (!/noindex/.test(html.match(/<meta name="robots" content="([^"]*)"/)?.[1] || '')) {
      const t = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
      if (seenTitles.has(t)) warnings.push(`${rel}: <title> doppelt mit ${seenTitles.get(t)}`);
      else seenTitles.set(t, rel);
      // Kannibalisierung: gleicher Titelanfang (vor „:“) auf zwei indexierbaren Seiten
      const tHead = t.split(/[:|]/)[0].trim().toLowerCase();
      if (seenHeads.has(tHead)) warnings.push(`${rel}: Titelanfang „${tHead}“ wie ${seenHeads.get(tHead)} (Kannibalisierung?)`);
      else seenHeads.set(tHead, rel);
    }
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
    const titleLen = title.replace(/&amp;/g, '&').replace(/&#39;|&quot;/g, "'").length;
    if (!title) errors.push(`${rel}: kein <title>`);
    else if (titleLen > 60) warnings.push(`${rel}: <title> ${titleLen} Zeichen (Google kürzt ab ~60)`);
    const mainHtml = (html.match(/<main[\s\S]*?<\/main>/) || [''])[0];
    const levels = [...mainHtml.matchAll(/<h([1-6])[\s>]/g)].map(m => Number(m[1]));
    for (let i = 1; i < levels.length; i++) {
      if (levels[i] > levels[i - 1] + 1) { warnings.push(`${rel}: Überschriften-Sprung h${levels[i - 1]} → h${levels[i]}`); break; }
    }
    const h1s = (html.match(/<h1[\s>]/g) || []).length;
    if (h1s !== 1) warnings.push(`${rel}: ${h1s} H1-Überschriften`);
  }
}

for (const sm of files.filter(f => /sitemap-\d+\.xml$/.test(f))) {
  const xml = readFileSync(sm, 'utf8');
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const path = m[1].replace(SITE, '') || '/';
    if (!targetExists(path)) errors.push(`Sitemap: Ziel fehlt → ${m[1]}`);
  }
}

// Sprungmarken: Ziel-ID muss auf der Zielseite existieren (brechen sonst still bei umformulierten Überschriften)
const idCache = new Map();
function idsOf(path) {
  if (!idCache.has(path)) {
    const f = path.endsWith('/') ? join(DIST, path, 'index.html') : join(DIST, path);
    const html = existsSync(f) ? readFileSync(f, 'utf8') : '';
    idCache.set(path, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1])));
  }
  return idCache.get(path);
}
// Ziele, die erst per JavaScript entstehen (Trainer-Bereichsfilter), ausnehmen
for (const f of fragmentChecks) {
  if (/^bereich-/.test(f.frag)) continue;
  if (!idsOf(f.path).has(f.frag)) errors.push(`${f.from}: Sprungmarke fehlt → ${f.url}`);
}

console.log(`Geprüft: ${htmlFiles.length} HTML-Seiten, ${linkCount} interne Links.`);
if (warnings.length) {
  console.log(`\n${warnings.length} Warnung(en):`);
  for (const w of warnings.slice(0, 40)) console.log('  ⚠ ' + w);
  if (warnings.length > 40) console.log(`  … und ${warnings.length - 40} weitere`);
}
if (errors.length) {
  console.error(`\n${errors.length} Fehler:`);
  for (const e of errors) console.error('  ✗ ' + e);
  process.exit(1);
}
console.log('\n✓ Keine kaputten internen Links.');
