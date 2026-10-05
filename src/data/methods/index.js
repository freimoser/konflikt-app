// Methoden-Silo (/methoden/). Reihenfolge = Reihenfolge in der Übersicht.
// Neue Methode: Datei anlegen (Format: docs/loop/METHODEN-FORMAT.md) und hier eintragen.
import gewaltfreieKommunikation from './gewaltfreie-kommunikation.js';
import ichBotschaften from './ich-botschaften.js';
import aktivesZuhoeren from './aktives-zuhoeren.js';
import grenzenSetzen from './grenzen-setzen.js';
import deeskalationImStreit from './deeskalation-im-streit.js';
import richtigEntschuldigen from './richtig-entschuldigen.js';
import harvardKonzept from './harvard-konzept.js';
import eskalationsstufenGlasl from './eskalationsstufen-glasl.js';
import vierOhrenModell from './vier-ohren-modell.js';
import feedbackGeben from './feedback-geben.js';

export const methods = [
  ichBotschaften,
  aktivesZuhoeren,
  vierOhrenModell,
  gewaltfreieKommunikation,
  grenzenSetzen,
  deeskalationImStreit,
  richtigEntschuldigen,
  feedbackGeben,
  harvardKonzept,
  eskalationsstufenGlasl,
];

export function getMethod(slug) {
  return methods.find(m => m.slug === slug);
}

/** Methoden, die einen bestimmten Konflikt als passend verlinken. */
export function getMethodsForConflict(categoryId, slug, limit = 3) {
  const matches = methods.filter(m =>
    (m.relatedConflicts || []).some(r => r.category === categoryId && r.slug === slug)
  );
  // Fallback: Basismethoden, die bei fast jedem Alltagskonflikt helfen.
  const fallback = ['ich-botschaften', 'grenzen-setzen', 'aktives-zuhoeren'].map(getMethod);
  for (const m of fallback) if (matches.length < 2 && m && !matches.includes(m)) matches.push(m);
  return matches.slice(0, limit);
}
