import { normalizeConflict } from '../schema.js';
import { partnerCategory } from './partner.js';
import { chefCategory } from './chef.js';
import { freundeCategory } from './freunde.js';
import { kollegenCategory } from './kollegen.js';
import { nachbarnCategory } from './nachbarn.js';
import { elternCategory } from './eltern.js';
import { geschwisterCategory } from './geschwister.js';
import { mitbewohnerCategory } from './mitbewohner.js';
import { schwiegerelternCategory } from './schwiegereltern.js';
import { exPartnerCategory } from './ex-partner.js';
import { kinderCategory } from './kinder.js';
import { vermieterCategory } from './vermieter.js';

export const categories = [
  partnerCategory,
  chefCategory,
  freundeCategory,
  kollegenCategory,
  nachbarnCategory,
  elternCategory,
  geschwisterCategory,
  mitbewohnerCategory,
  schwiegerelternCategory,
  exPartnerCategory,
  kinderCategory,
  vermieterCategory,
];

export function getAllConflicts() {
  const all = [];
  for (const cat of categories) {
    for (const con of cat.conflicts) {
      all.push({ 
        ...normalizeConflict(con, cat.id), 
        category: cat.id, 
        categoryName: cat.name 
      });
    }
  }
  return all;
}

export function getCategory(id) {
  return categories.find(c => c.id === id);
}

export function getConflict(categoryId, slug) {
  const cat = getCategory(categoryId);
  if (!cat) return null;
  const rawCon = cat.conflicts.find(c => c.slug === slug);
  if (!rawCon) return null;
  return {
    ...normalizeConflict(rawCon, categoryId),
    category: cat.id,
    categoryName: cat.name
  };
}

/**
 * Verwandte Konflikte: zuerst die explizit gepflegten `related`-Einträge,
 * danach Konflikte, die auf diesen verweisen (Rückverlinkung), damit neue
 * Konflikte nicht verwaist sind. Ergebnis enthält `category` als Kategorie-Objekt.
 */
export function getRelatedConflicts(categoryId, slug, limit = 4) {
  const key = (c, s) => `${c}/${s}`;
  const self = key(categoryId, slug);
  const seen = new Set([self]);
  const result = [];
  const push = (catId, conSlug) => {
    const k = key(catId, conSlug);
    if (seen.has(k) || result.length >= limit) return;
    const cat = getCategory(catId);
    const con = cat?.conflicts.find(c => c.slug === conSlug);
    if (!con) return;
    seen.add(k);
    result.push({ ...con, category: cat });
  };

  const own = getConflict(categoryId, slug);
  const explicit = own?.related || [];
  const backlinks = [];
  for (const cat of categories) {
    for (const con of cat.conflicts) {
      const rels = normalizeConflict(con, cat.id).related;
      if (rels.some(r => key(r.category, r.slug) === self)) backlinks.push({ category: cat.id, slug: con.slug });
    }
  }

  // Ein Platz bleibt für Rückverlinkungen reserviert, der Rest wird aufgefüllt.
  for (const rel of explicit.slice(0, limit - 1)) push(rel.category, rel.slug);
  for (const rel of backlinks) push(rel.category, rel.slug);
  for (const rel of explicit) push(rel.category, rel.slug);
  return result;
}
