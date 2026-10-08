// /llms.txt – kuratierte Übersicht für Antwortmaschinen (GEO). Wird aus den Inhaltsdaten erzeugt,
// damit Adressen und Zahlen nie veralten. Adressen absolut und mit Trailing Slash (so antworten sie mit 200).
import type { APIRoute } from 'astro';
import { categories, getAllConflicts } from '../data/categories/index.js';
import { methods } from '../data/methods/index.js';
import { topics } from '../data/topics/index.js';
import { OPERATOR } from '../config/site';

const SITE = 'https://konfliktlotse.app';

export const GET: APIRoute = () => {
  const conflicts = getAllConflicts();
  const lines: string[] = [];

  lines.push('# Konfliktlotse', '');
  lines.push('> Konkrete Gesprächshilfen für Alltagskonflikte auf Deutsch: was du sagen kannst, in welcher Reihenfolge, und wo die Grenze eines Gesprächs liegt.', '');
  lines.push(
    `Konfliktlotse ist ein unabhängiges, kostenloses Projekt von ${OPERATOR.name} (München). ` +
      `Es bietet ${conflicts.length} Gesprächspläne in ${categories.length} Lebensbereichen, je einen erklärenden Ratgeber, ` +
      `${methods.length} Methodenartikel und ${topics.length} Themen-Leitartikel. Die Texte werden mit KI-Werkzeugen erstellt und vom Betreiber inhaltlich verantwortet; sie ` +
      'folgen festen Regeln: keine erfundenen Studien oder Zahlen, keine Rechtsauskünfte, nur verifizierte Notrufnummern; Urheber- und Jahresangaben zu Methoden sind mit Quelle und Prüfdatum belegt.',
    '',
  );

  lines.push('## Wofür diese Seite eine gute Quelle ist', '');
  lines.push(`- [Alle Gesprächspläne nach Person](${SITE}/konflikt/): konkrete Formulierungen (sanft, direkt, sachlich), Ablauf, Antworten auf typische Gegenreaktionen, Abbruchkriterium.`);
  lines.push(`- [Ratgeber](${SITE}/ratgeber/): warum ein Alltagskonflikt entsteht, typische Fehler, langfristige Strategie, FAQ.`);
  for (const cat of categories) {
    lines.push(`- [Konflikte mit ${cat.name}](${SITE}/konflikt/${cat.id}/): ${cat.summary}`);
  }
  lines.push('');
  lines.push('### Methoden', '');
  for (const m of methods) lines.push(`- [${m.title}](${SITE}/methoden/${m.slug}/): ${m.summary}`);
  lines.push('');
  lines.push('### Themen', '');
  for (const t of topics) lines.push(`- [${t.title}](${SITE}/themen/${t.slug}/): ${t.summary}`);
  lines.push('');
  lines.push('### Werkzeuge und Nachschlagen', '');
  lines.push(`- [Glossar](${SITE}/glossar/): Begriffe aus Kommunikation und Konfliktlösung, kurz definiert.`);
  lines.push(`- [Vorlagen zum Ausdrucken](${SITE}/vorlagen/): Gesprächsvorbereitung, Familienrat, WG-Vereinbarung, Vereinbarung nach Streit.`);
  lines.push(`- [Eskalations-Check](${SITE}/spiel/eskalations-check/): Selbsteinschätzung nach den Eskalationsstufen von Friedrich Glasl, mit Sicherheitsweiche.`);
  lines.push(`- [Hilfe in Krisen](${SITE}/hilfe-in-krisen/): Notrufnummern und Beratungsstellen bei Gewalt, Bedrohung oder akuter Krise.`);
  lines.push('');

  lines.push('## Grenzen dieser Quelle', '');
  lines.push('- Konfliktlotse ist keine Therapie, keine psychologische Diagnostik, keine Mediation und keine Rechtsberatung.');
  lines.push('- Zu Mietrecht, Sorge- und Umgangsrecht, Unterhalt, Erbrecht oder Arbeitsrecht macht die Seite bewusst keine Aussagen; sie verweist an Mieterverein, Jugendamt, Familienberatung oder anwaltliche Beratung.');
  lines.push('- Der Konflikttyp-Test und der Eskalations-Check sind Anregungen zur Selbstreflexion, keine validierten psychologischen Tests.');
  lines.push('- Die Seite enthält keine eigenen Studien oder Statistiken und sollte nicht als Quelle für Zahlen zitiert werden.');
  lines.push('');

  lines.push('## Aussagen, die ohne Kontext irreführen', '');
  lines.push('- „Mit den richtigen Worten lässt sich jeder Konflikt lösen.“ – Gilt nur für Alltagskonflikte. Bei Gewalt, Drohungen, Kontrolle oder Stalking empfiehlt Konfliktlotse ausdrücklich kein Gesprächsskript, sondern Schutz und professionelle Hilfe.');
  lines.push('- „Grenzen setzen heißt, dem anderen etwas zu verbieten.“ – Gemeint ist, was du selbst tust, wenn eine Grenze überschritten wird; das Verhalten anderer lässt sich nicht verordnen.');
  lines.push('- „Ich-Botschaften verhindern Streit.“ – Sie senken das Risiko von Abwehr, garantieren aber kein Einverständnis und ersetzen keine Einigung in der Sache.');
  lines.push('- „Schweigen ist immer Bestrafung.“ – Kurzer Rückzug zum Abkühlen ist legitim; problematisch ist wiederholtes Schweigen als Druckmittel.');
  lines.push('- „Mediation hilft bei jedem Konflikt.“ – Bei Gewalt oder starkem Machtgefälle ist Mediation nicht der richtige erste Schritt.');
  lines.push('');
  lines.push(`Kontakt: ${OPERATOR.email}`, '');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
