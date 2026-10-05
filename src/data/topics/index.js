// Themen-Silo (/themen/): breite Leitartikel, die Konflikte und Methoden bündeln.
// Format: docs/loop/THEMEN-FORMAT.md. Neue Themen hier eintragen (Reihenfolge = Übersicht).
import streitAnWeihnachten from './streit-an-weihnachten.js';
import streitInDerBeziehung from './streit-in-der-beziehung.js';
import konfliktgespraechAmArbeitsplatz from './konfliktgespraech-am-arbeitsplatz.js';
import nachDemStreitVersoehnen from './nach-dem-streit-versoehnen.js';
import streitSchlichten from './streit-schlichten.js';
import mobbingAmArbeitsplatz from './mobbing-am-arbeitsplatz.js';
import neinSagenLernen from './nein-sagen-lernen.js';
import schweigenAlsStrafe from './schweigen-als-strafe.js';
import streitImUrlaub from './streit-im-urlaub.js';
import streitPerWhatsapp from './streit-per-whatsapp.js';
import konflikteImTeamLoesen from './konflikte-im-team-loesen.js';
import trennungImGuten from './trennung-im-guten.js';
import mediationEinfachErklaert from './mediation-einfach-erklaert.js';

export const topics = [
  streitAnWeihnachten,
  streitInDerBeziehung,
  konfliktgespraechAmArbeitsplatz,
  nachDemStreitVersoehnen,
  streitSchlichten,
  mobbingAmArbeitsplatz,
  neinSagenLernen,
  schweigenAlsStrafe,
  streitPerWhatsapp,
  konflikteImTeamLoesen,
  trennungImGuten,
  mediationEinfachErklaert,
  streitImUrlaub,
];

// Saison-Fenster (Monate 1–12, inklusive): Saison-Themen werden nur in diesem Zeitraum
// hervorgehoben. Maßgeblich ist das Build-Datum – regelmäßig deployen hält das aktuell.
const SEASONS = {
  weihnachten: { from: 9, to: 12 }, // ab September: Google braucht Vorlauf zum Indexieren
  sommer: { from: 5, to: 8 },
};

export function isInSeason(season, date = new Date()) {
  const win = SEASONS[season];
  if (!win) return false;
  const m = date.getMonth() + 1;
  return m >= win.from && m <= win.to;
}

export function getSeasonalTopics(date = new Date()) {
  return topics.filter(t => t.season && isInSeason(t.season, date));
}

export function getTopic(slug) {
  return topics.find(t => t.slug === slug);
}

/** Themen, die einen Konflikt verlinken (für Rückverweise auf Konfliktseiten). */
export function getTopicsForConflict(categoryId, slug, limit = 2) {
  return topics
    .filter(t => (t.relatedConflicts || []).some(r => r.category === categoryId && r.slug === slug))
    .slice(0, limit);
}
