// Sichtbarer Titel mit Kontext für Konflikte (H1 der Tool-Seite, letzter Breadcrumb):
// Sehr kurze Titel („Hört nicht zu“) bekommen die Suchphrase aus seo-titles.js, geschlechtergerecht.
import { seoTitles } from './seo-titles.js';

const inclusive = (t) => t
  .replace(/^Partner /, 'Partner:in ').replace(/^Kollege /, 'Kolleg:in ')
  .replace(/^Freundin /, 'Freund:in ').replace(/^Freund /, 'Freund:in ');

export function displayTitle(categoryId, conflict) {
  const head = (seoTitles[`${categoryId}/${conflict.slug}`] || '').split(': ')[0];
  return conflict.title.length < 20 && head ? inclusive(head) : conflict.title;
}
