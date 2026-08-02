import { normalizeConflict } from '../schema.js';
import { partnerCategory } from './partner.js';
import { chefCategory } from './chef.js';
import { freundeCategory } from './freunde.js';
import { kollegenCategory } from './kollegen.js';
import { nachbarnCategory } from './nachbarn.js';
import { elternCategory } from './eltern.js';

export const categories = [
  partnerCategory,
  chefCategory,
  freundeCategory,
  kollegenCategory,
  nachbarnCategory,
  elternCategory,
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
