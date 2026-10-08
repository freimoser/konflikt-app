# Kurzantworten & Ratgeber-Titel (SEO: Antwort zuerst, keine Kannibalisierung)

Je Kategorie eine Datei `src/data/quick-answers/<kategorie>.js`:

```js
export default {
  'hoert-nicht-zu': {                 // Konflikt-Slug
    toolAnswer: '…',                  // Tool-Seite, ganz oben: beantwortet „Was sage ich jetzt?“ direkt
    ratgeberAnswer: '…',              // Ratgeber, ganz oben: beantwortet „Warum passiert das, was hilft dauerhaft?“
    ratgeberTitle: '…',               // <title>-Kopf des Ratgebers (ohne Marke)
  },
};
```

Regeln
- **toolAnswer**: 2 Sätze, 180–300 Zeichen. Satz 1 = das Vorgehen in einem Satz. Satz 2 = ein konkreter Beispielsatz
  in „…“, den man wörtlich sagen kann. Nicht wortgleich mit den vorhandenen Skripten.
- **ratgeberAnswer**: 2 Sätze, 180–320 Zeichen. Satz 1 = die häufigste Ursache/Dynamik. Satz 2 = was langfristig hilft.
  Andere Absicht als toolAnswer (erklären statt Formulierung liefern).
- **ratgeberTitle**: 25–44 Zeichen, natürliches Deutsch, **Warum-/Ursachen-Absicht**, beginnt NICHT mit denselben
  Wörtern wie der Tool-Titel in `src/data/seo-titles.js` (z. B. Tool „Partner hört nicht zu: So sprichst du es an“ →
  Ratgeber „Warum der Partner nicht zuhört – und was hilft“). Gängige Suchform erlaubt (Partner, Kollege, Chef).
- Respektvolles Du, keine Zahlen/Studien/Prozente, keine Diagnosen, keine Rechtsaussagen.
- Bei Konflikten mit Sicherheitsbezug (Eifersucht, Ex-Partner, Kinder, Vermieter) keine Formulierung, die Kontrolle
  oder Gewalt verharmlost.
- In Single-Quote-Strings Apostrophe vermeiden bzw. als \' schreiben; Anführungszeichen „…“ verwenden.
