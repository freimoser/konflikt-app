#!/usr/bin/env node
// Livegang-Prüfung gegen den Build (dist/). Blocker → Exit 1, Hinweise → nur Ausgabe.
// Prüft Fehlerklassen, nicht konkrete Altwerte. Aufruf: npm run check:launch (nach dem Build).
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const DIST = resolve(process.argv[2] || 'dist');
const SITE = 'https://konfliktlotse.app';
const blocker = [];
const hinweis = [];

if (!existsSync(DIST)) {
  console.error('dist/ fehlt – zuerst bauen.');
  process.exit(1);
}

const walk = (dir) => readdirSync(dir).flatMap(n => {
  const f = join(dir, n);
  return statSync(f).isDirectory() ? walk(f) : [f];
});
const read = (p) => readFileSync(p, 'utf8');
const files = walk(DIST);
const pages = files.filter(f => f.endsWith('.html')).map(file => ({
  file,
  route: ('/' + relative(DIST, file)).replace(/\/index\.html$/, '/').replace(/\.html$/, '') || '/',
}));
const page = (route) => pages.find(p => p.route === route);

// 1. Pflichtseiten und Impressumsangaben
for (const r of ['/impressum/', '/datenschutz/']) if (!page(r)) blocker.push(`Pflichtseite fehlt: ${r}`);
const imp = page('/impressum/') ? read(page('/impressum/').file) : '';
if (imp) {
  if (!/\b\d{5}\b/.test(imp)) blocker.push('Impressum: keine Postleitzahl gefunden.');
  if (!/stra(ss|ß)e|weg|platz|allee|gasse/i.test(imp)) blocker.push('Impressum: keine Straße gefunden.');
  if (!/mailto:[^"]+@/.test(imp)) blocker.push('Impressum: keine E-Mail-Adresse.');
  if (/§\s*5\s*TMG/.test(imp)) blocker.push('Impressum nennt veraltetes § 5 TMG statt § 5 DDG.');
}
for (const r of ['/impressum/', '/datenschutz/']) {
  const p = page(r);
  if (p && /\b(TODO|Lorem|Platzhalter)\b/i.test(read(p.file))) blocker.push(`${r}: enthält Platzhalter.`);
}

// 2. Canonical der Startseite zeigt auf die Live-Domain
const start = page('/') ? read(page('/').file) : '';
const canonical = start.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? '';
if (!canonical) blocker.push('Startseite hat kein Canonical.');
else if (/localhost|127\.0\.0\.1|\.pages\.dev|github\.io/.test(canonical) || !canonical.startsWith(SITE)) {
  blocker.push(`Canonical zeigt auf ${canonical} statt auf ${SITE}.`);
}

// 3. Sitemap gegen noindex – beide Richtungen
const smFile = files.find(f => /sitemap-0\.xml$/.test(f));
if (!smFile) blocker.push('sitemap-0.xml fehlt.');
else {
  const inSitemap = new Set([...read(smFile).matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1]).pathname));
  for (const p of pages) {
    if (p.route === '/404') continue;
    const noindex = /<meta name="robots" content="noindex/.test(read(p.file));
    if (noindex && inSitemap.has(p.route)) blocker.push(`${p.route}: steht in der Sitemap, trägt aber noindex.`);
    if (!noindex && !inSitemap.has(p.route)) blocker.push(`${p.route}: ist indexierbar, fehlt aber in der Sitemap.`);
  }
  // lastmod: gültig und nicht in der Zukunft (ein „springendes“ Build-Datum wäre wertlos)
  for (const m of read(smFile).matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) {
    const t = Date.parse(m[1]);
    if (Number.isNaN(t)) blocker.push(`Sitemap: ungültiges lastmod ${m[1]}`);
    else if (t > Date.now() + 86400000) blocker.push(`Sitemap: lastmod in der Zukunft ${m[1]}`);
  }
  for (const r of ['/impressum/', '/datenschutz/']) {
    if (page(r) && !/<meta name="robots" content="noindex/.test(read(page(r).file))) {
      blocker.push(`${r}: sollte noindex tragen (Privatanschrift/Standardtext).`);
    }
  }
}

// 4. robots.txt verweist auf die Sitemap der Live-Domain
const robots = existsSync(join(DIST, 'robots.txt')) ? read(join(DIST, 'robots.txt')) : '';
if (!new RegExp(`Sitemap:\\s*${SITE.replace(/\./g, '\\.')}/sitemap-index\\.xml`).test(robots)) {
  blocker.push('robots.txt verweist nicht auf die Sitemap der Live-Domain.');
}

// 5. Keine Test-Kennungen ausliefern (z. B. ca-pub-0000…)
for (const f of files.filter(f => /\.(html|txt|js)$/.test(f))) {
  if (/ca-pub-0{6,}/.test(read(f))) blocker.push(`Test-AdSense-Kennung im Build: ${relative(DIST, f)}`);
}

// 5b. Messung: Einbindung und Datenschutzerklärung müssen zusammenpassen
const htmlAll = pages.map(p => ({ route: p.route, html: read(p.file) }));
const ds = page('/datenschutz/') ? read(page('/datenschutz/').file) : '';
const usesCf = htmlAll.some(p => p.html.includes('static.cloudflareinsights.com/beacon'));
const usesGa = htmlAll.some(p => /googletagmanager\.com\/gtag\/js/.test(p.html));
if (usesCf !== /Cloudflare Web Analytics/.test(ds)) blocker.push(`Cloudflare Web Analytics ${usesCf ? 'eingebunden, aber nicht' : 'nicht eingebunden, aber'} in der Datenschutzerklärung beschrieben.`);
if (usesGa !== /Google Analytics \(nur mit Einwilligung\)/.test(ds)) blocker.push(`Google Analytics ${usesGa ? 'eingebunden, aber nicht' : 'nicht eingebunden, aber'} in der Datenschutzerklärung beschrieben.`);
for (const p of htmlAll) {
  if (/<script[^>]+src="https:\/\/www\.googletagmanager\.com/.test(p.html)) blocker.push(`${p.route}: GA-Script direkt eingebunden – darf erst nach Einwilligung geladen werden.`);
  if (/G-(0{6,}|TEST|X{6,})/.test(p.html) || /"token":"0{32}"/.test(p.html)) blocker.push(`${p.route}: Test-Kennung für Messung im Build.`);
}
const krise = htmlAll.find(p => p.route === '/hilfe-in-krisen/');
if (krise && (/cloudflareinsights|data-consent-banner/.test(krise.html))) blocker.push('/hilfe-in-krisen/: Messung oder Banner auf der Krisenseite.');
if (usesGa && !/data-consent-reset/.test(ds)) blocker.push('Datenschutzerklärung ohne Widerruf (data-consent-reset).');
if (!usesCf && !usesGa) hinweis.push('Keine Reichweitenmessung konfiguriert (PUBLIC_CF_ANALYTICS_TOKEN / PUBLIC_GA_ID leer).');

// 6. Favicons (Google: Vielfache von 48) und llms.txt
for (const f of ['favicon.ico', 'favicon.svg', 'favicon-48.png', 'favicon-96.png', 'apple-touch-icon.png']) {
  if (!existsSync(join(DIST, f))) blocker.push(`Icon fehlt: /${f}`);
}
if (!/rel="icon"[^>]*sizes="96x96"/.test(start) && !/sizes="96x96"[^>]*rel="icon"/.test(start)) {
  hinweis.push('Startseite verlinkt kein 96×96-Favicon.');
}
if (!existsSync(join(DIST, 'llms.txt'))) hinweis.push('/llms.txt fehlt.');

// 7. Hinweise: Werbung/Messung, schwach verlinkte Inhaltsseiten
if (!existsSync(join(DIST, 'ads.txt'))) hinweis.push('AdSense nicht konfiguriert (PUBLIC_ADSENSE_CLIENT leer) – Seite ist werbefrei.');
const incoming = new Map();
for (const p of pages) {
  const html = read(p.file);
  const own = p.route;
  // Die Suchseite verlinkt jede Seite – als Linkquelle zählt sie nicht, sonst fällt nichts mehr auf.
  if (own === '/suche/') continue;
  for (const m of html.matchAll(/<main[\s\S]*?<\/main>/g)) {
    for (const l of m[0].matchAll(/href="(\/[^"#?]*)"/g)) {
      if (l[1] === own) continue;
      incoming.set(l[1], (incoming.get(l[1]) || new Set()).add(own));
    }
  }
}
const weak = pages
  .filter(p => /^\/(konflikt|ratgeber|methoden|themen|vorlagen)\/.+/.test(p.route))
  .filter(p => (incoming.get(p.route)?.size || 0) < 3);
if (weak.length) hinweis.push(`${weak.length} Inhaltsseite(n) mit < 3 eingehenden Links aus Seiteninhalten: ${weak.slice(0, 8).map(p => p.route).join(', ')}${weak.length > 8 ? ' …' : ''}`);

console.log(`Livegang-Prüfung: ${pages.length} Seiten.`);
for (const h of hinweis) console.log('  ℹ ' + h);
if (blocker.length) {
  for (const b of blocker) console.error('  ✗ ' + b);
  process.exit(1);
}
console.log('✓ Keine Blocker.');
