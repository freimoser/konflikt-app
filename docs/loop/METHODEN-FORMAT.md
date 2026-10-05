# Methoden-Silo: Datenformat und Schreibregeln

Methoden-Artikel liegen als Einzeldateien unter `src/data/methods/<slug>.js` und werden unter
`/methoden/<slug>/` gerendert (Übersicht: `/methoden/`). Sie sind **Evergreen-Ratgeber** zu
Kommunikations- und Konfliktlösungsansätzen und verbinden die Konflikt-Seiten miteinander.

## Format
```js
export default {
  published: '2026-09-30',
  slug: 'ich-botschaften',
  title: 'Ich-Botschaften',                 // kurzer Name (Navigation, Karten)
  icon: '💬',                               // ein Emoji
  h1: 'Ich-Botschaften: So sprichst du Kritik an, ohne anzugreifen', // Long-Tail-H1
  meta: '…',                                // 140–158 Zeichen
  summary: '…',                             // 1–2 Sätze für Übersichtskarten
  origin: '…',                              // 1–3 Sätze Herkunft (nur gesicherte Fakten, z. B. Thomas Gordon)
  intro: '…',                               // 1 Absatz, empathisch, ohne Phrasen
  sections: [                               // 4–6 Abschnitte, jeder mit H2
    { heading: '…', paragraphs: ['…', '…'], list: ['…'] /* optional */ },
  ],
  steps: ['…'],                             // 4–7 Schritte „So wendest du es an“
  example: {                                // ein durchgespieltes Alltagsbeispiel
    situation: '…',
    before: '…',                            // typischer eskalierender Satz
    after: '…',                             // derselbe Inhalt mit der Methode
    why: '…',                               // warum die zweite Version besser wirkt
  },
  pitfalls: ['…'],                          // 3–4 typische Fehler
  limits: '…',                              // Grenzen der Methode: wann sie nicht passt (Gewalt, Machtgefälle, Krise …)
  faqs: [{ question: '…', answer: '…' }],   // 5 echte Fragen, Antworten 1–3 Sätze
  relatedConflicts: [{ category: 'partner', slug: 'hoert-nicht-zu' }], // 4–6 passende Konflikte (nur gültige Slugs)
  relatedMethods: ['aktives-zuhoeren'],     // 2–3 Slugs aus der Methodenliste unten
};
```

## Methodenliste (gültige Slugs für `relatedMethods`)
gewaltfreie-kommunikation, ich-botschaften, aktives-zuhoeren, harvard-konzept,
eskalationsstufen-glasl, grenzen-setzen, richtig-entschuldigen, deeskalation-im-streit,
vier-ohren-modell, feedback-geben

## Schreibregeln
- Respektvolles **Du**, geschlechtergerecht. Keine Platzhalter, keine Floskeln.
- Gesamtlänge 1.200–1.700 Wörter. Konkret, praxisnah, mit Formulierungsbeispielen.
- **Nur gesicherte Fakten** zu Urheber:innen und Modellen. Keine erfundenen Studien, Zahlen,
  Prozentangaben oder Zitate. Keine wörtlichen Zitate aus Büchern.
- Keine Therapie- oder Rechtsberatung, keine Diagnosen.
- `limits` muss klar sagen: Bei Gewalt, Drohungen, Kontrolle, Stalking oder akuter Gefahr ist
  keine Kommunikationsmethode der richtige erste Schritt – dann gehen Schutz und Hilfe vor.
- In Single-Quote-Strings Apostrophe vermeiden bzw. als `\'` schreiben; Anführungszeichen „…“ nutzen.
- Gültige Konflikt-Slugs: siehe `node --input-type=module -e 'const {getAllConflicts}=await import("./src/data/categories/index.js");console.log(getAllConflicts().map(c=>c.category+"/"+c.slug).join("\n"))'`
