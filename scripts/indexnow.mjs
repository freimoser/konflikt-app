// IndexNow: meldet geänderte URLs an Bing, Yandex, Seznam u. a. (Bing speist auch die ChatGPT-Suche).
// Läuft nach dem Deploy (siehe .github/workflows/deploy.yml). Liest die LIVE-Sitemap und meldet URLs,
// deren lastmod in den letzten 2 Tagen liegt; mit `--all` alle URLs (einmalig bzw. per workflow_dispatch).
// Der Schlüssel ist kein Geheimnis: IndexNow verlangt, dass er öffentlich unter /<key>.txt liegt.
// Fehler brechen den Deploy nie ab – Suchmaschinen finden die Seiten ohnehin über die Sitemap.
import { readdirSync } from 'node:fs';

const SITE = 'https://konfliktlotse.app';
const all = process.argv.includes('--all');
const key = readdirSync(new URL('../public/', import.meta.url))
  .find(f => /^[0-9a-f]{32}\.txt$/.test(f))
  ?.replace(/\.txt$/, '');

const warn = msg => { console.log(`::warning::IndexNow: ${msg}`); process.exit(0); };
if (!key) warn('kein Schlüssel in public/<32 hex>.txt gefunden.');

const sleep = ms => new Promise(r => setTimeout(r, ms));

// Pages-CDN braucht nach dem Deploy manchmal einen Moment.
let live = false;
for (let i = 0; i < 10 && !live; i++) {
  const res = await fetch(`${SITE}/${key}.txt`, { cache: 'no-store' }).catch(() => null);
  live = res?.ok && (await res.text()).trim() === key;
  if (!live) await sleep(15000);
}
if (!live) warn('Schlüsseldatei ist live nicht erreichbar.');

const index = await (await fetch(`${SITE}/sitemap-index.xml`)).text();
const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const entries = [];
for (const map of maps) {
  const xml = await (await fetch(map)).text();
  for (const m of xml.matchAll(/<url><loc>([^<]+)<\/loc>(?:<lastmod>([^<]+)<\/lastmod>)?/g)) {
    entries.push({ loc: m[1], lastmod: m[2] ? new Date(m[2]) : null });
  }
}

const since = Date.now() - 2 * 24 * 60 * 60 * 1000;
const urlList = entries
  .filter(e => all || (e.lastmod && e.lastmod.getTime() >= since))
  .map(e => e.loc);

if (!urlList.length) {
  console.log('IndexNow: keine kürzlich geänderten URLs.');
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key,
    keyLocation: `${SITE}/${key}.txt`,
    urlList: urlList.slice(0, 10000),
  }),
}).catch(err => ({ ok: false, status: String(err) }));

if (!res.ok) warn(`Antwort ${res.status} für ${urlList.length} URLs.`);
console.log(`IndexNow: ${urlList.length} URLs gemeldet (HTTP ${res.status}).`);
