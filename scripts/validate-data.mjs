#!/usr/bin/env node
// Prüft die Inhaltsdaten vor dem Build: Pflichtfelder, gültige Verweise,
// eindeutige Slugs, erlaubte Notrufnummern, Trainer-Szenarien.
import { categories, getAllConflicts, getConflict, getRelatedConflicts } from '../src/data/categories/index.js';
import { methods } from '../src/data/methods/index.js';
import { scenarios } from '../src/data/trainer.js';
import { topics } from '../src/data/topics/index.js';
import { readdirSync } from 'node:fs';
import { glossar } from '../src/data/glossar.js';

const errors = [];
const warn = [];
const ALLOWED_NUMBERS = ['110', '112', '0800 1110111', '0800 1110222', '116 123', '116 016', '0800 1239900', '116 006'];

function checkNumbers(where, text) {
  // CHALLENGE: Für das Hilfetelefon „Gewalt an Männern“ keine Erreichbarkeitszeiten pauschal behaupten.
  for (const sentence of text.split(/(?<=[.!?])\s+/)) {
    if (sentence.includes('0800 1239900') && /rund um die Uhr|24 Stunden|jederzeit erreichbar/i.test(sentence)) {
      errors.push(`${where}: Zeitangabe im selben Satz wie das Männerhilfetelefon – Satz trennen („${sentence.slice(0, 80)}…“)`);
    }
  }
  for (const m of text.matchAll(/\b(0800 ?\d{3,4} ?\d{3,4}|116 ?\d{3})\b/g)) {
    if (!ALLOWED_NUMBERS.includes(m[1])) errors.push(`${where}: nicht freigegebene Nummer „${m[1]}“`);
  }
}

const seen = new Set();
for (const cat of categories) {
  for (const raw of cat.conflicts) {
    const key = `${cat.id}/${raw.slug}`;
    if (seen.has(key)) errors.push(`Doppelter Slug: ${key}`);
    seen.add(key);
  }
}

for (const c of getAllConflicts()) {
  const key = `${c.category}/${c.slug}`;
  for (const f of ['title', 'summary', 'problem', 'safety', 'next_step']) {
    if (!c[f]) errors.push(`${key}: Feld „${f}“ fehlt`);
  }
  const op = c.one_party;
  if (!op.scripts?.sanft || !op.scripts?.direkt || !op.scripts?.sachlich) errors.push(`${key}: drei Skriptvarianten nötig`);
  if ((op.steps || []).length < 5) warn.push(`${key}: weniger als 5 Schritte (allein)`);
  if ((c.two_party.questions || []).length < 5) warn.push(`${key}: weniger als 5 moderierte Fragen`);
  for (const r of c.related) {
    if (!getConflict(r.category, r.slug)) errors.push(`${key}: related-Ziel existiert nicht → ${r.category}/${r.slug}`);
  }
  const a = c.article || {};
  if (!a.title || !a.meta) errors.push(`${key}: Artikel-Titel oder Meta fehlt`);
  else if (a.meta.length < 110 || a.meta.length > 165) warn.push(`${key}: Meta-Description ${a.meta.length} Zeichen`);
  if ((a.faqs || []).length < 4) warn.push(`${key}: weniger als 4 FAQs`);
  checkNumbers(key, JSON.stringify(c));
}

// Verwaiste Konflikte: niemand verlinkt sie in den angezeigten „Verwandt“-Links.
const incoming = new Set();
for (const c of getAllConflicts()) {
  for (const r of getRelatedConflicts(c.category, c.slug, 4)) incoming.add(`${r.category.id}/${r.slug}`);
}
for (const c of getAllConflicts()) {
  const key = `${c.category}/${c.slug}`;
  if (!incoming.has(key)) errors.push(`${key}: verwaist – kein anderer Konflikt verlinkt ihn (related ergänzen)`);
}

const methodSlugs = new Set(methods.map(m => m.slug));
for (const m of methods) {
  for (const r of m.relatedConflicts || []) {
    if (!getConflict(r.category, r.slug)) errors.push(`methode/${m.slug}: Konflikt fehlt → ${r.category}/${r.slug}`);
  }
  for (const s of m.relatedMethods || []) {
    if (!methodSlugs.has(s)) errors.push(`methode/${m.slug}: Methode fehlt → ${s}`);
  }
  checkNumbers(`methode/${m.slug}`, JSON.stringify(m));
}

const topicSlugs = new Set();
for (const t of topics) {
  if (topicSlugs.has(t.slug) || methodSlugs.has(t.slug)) errors.push(`thema/${t.slug}: Slug doppelt`);
  topicSlugs.add(t.slug);
  for (const f of ['h1', 'meta', 'intro', 'summary']) if (!t[f]) errors.push(`thema/${t.slug}: Feld „${f}“ fehlt`);
  for (const r of t.relatedConflicts || []) {
    if (!getConflict(r.category, r.slug)) errors.push(`thema/${t.slug}: Konflikt fehlt → ${r.category}/${r.slug}`);
  }
  for (const s of t.relatedMethods || []) {
    if (!methodSlugs.has(s)) errors.push(`thema/${t.slug}: Methode fehlt → ${s}`);
  }
  checkNumbers(`thema/${t.slug}`, JSON.stringify(t));
}

// Hub-Texte (optional je Kategorie, Format docs/loop/HUB-FORMAT.md)
const hubFiles = readdirSync(new URL('../src/data/hubs/', import.meta.url)).filter(f => f.endsWith('.js') && f !== 'index.js');
for (const f of hubFiles) {
  const hub = (await import(`../src/data/hubs/${f}`)).default;
  const where = `hub/${f}`;
  if (!categories.some(c => c.id === hub.id)) errors.push(`${where}: unbekannte Kategorie-ID „${hub.id}“`);
  for (const k of ['toolTitle', 'toolMeta', 'ratgeberTitle', 'ratgeberMeta']) if (!hub[k]) errors.push(`${where}: „${k}“ fehlt`);
  if (!Array.isArray(hub.toolIntro) || !Array.isArray(hub.ratgeberIntro)) errors.push(`${where}: Intro-Absätze fehlen`);
  checkNumbers(where, JSON.stringify(hub));
}
for (const c of categories) if (!hubFiles.includes(`${c.id}.js`)) warn.push(`Kategorie ${c.id}: kein Hub-Text (src/data/hubs/${c.id}.js)`);

// Glossar
const glossSlugs = new Set();
for (const g of glossar) {
  const where = `glossar/${g.slug}`;
  if (glossSlugs.has(g.slug)) errors.push(`${where}: Slug doppelt`);
  glossSlugs.add(g.slug);
  if (!g.term || !g.definition) errors.push(`${where}: Begriff oder Definition fehlt`);
  if (g.method && !methodSlugs.has(g.method)) errors.push(`${where}: Methode fehlt → ${g.method}`);
  if (g.topic && !topicSlugs.has(g.topic)) errors.push(`${where}: Thema fehlt → ${g.topic}`);
  for (const r of g.conflicts || []) if (!getConflict(r.category, r.slug)) errors.push(`${where}: Konflikt fehlt → ${r.category}/${r.slug}`);
  checkNumbers(where, JSON.stringify(g));
}

const ids = new Set();
for (const s of scenarios) {
  if (ids.has(s.id)) errors.push(`trainer: doppelte ID ${s.id}`);
  ids.add(s.id);
  if (!getConflict(s.conflict.category, s.conflict.slug)) errors.push(`trainer/${s.id}: Konflikt fehlt`);
  if (s.options.length !== 3 || s.options.filter(o => o.type === 'klar').length !== 1) {
    errors.push(`trainer/${s.id}: braucht 3 Optionen mit genau einer „klar“`);
  }
}

console.log(`Daten: ${getAllConflicts().length} Konflikte in ${categories.length} Kategorien, ${methods.length} Methoden, ${topics.length} Themen, ${glossar.length} Glossarbegriffe, ${scenarios.length} Trainer-Szenarien.`);
for (const w of warn) console.log('  ⚠ ' + w);
if (errors.length) {
  for (const e of errors) console.error('  ✗ ' + e);
  process.exit(1);
}
console.log('✓ Datenprüfung bestanden.');
