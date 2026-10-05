# Kategorie-Hubs: Format

Jede Kategorie hat zwei Hub-Seiten: `/konflikt/<id>/` (Tool-Hub, akut) und `/ratgeber/<id>/`
(Ratgeber-Hub, erklärend). Die Texte liegen in `src/data/hubs/<id>.js`:

```js
export default {
  id: 'partner',                       // = Kategorie-ID
  toolTitle: 'Streit mit dem Partner: Gesprächspläne für typische Beziehungskonflikte', // H1 Tool-Hub (Long-Tail)
  toolMeta: '…',                       // 140–158 Zeichen
  toolIntro: ['…', '…'],               // 2 Absätze, zusammen 110–160 Wörter, akut/handlungsorientiert
  quickTips: ['…', '…', '…'],          // 3 kurze Sofort-Tipps (je 1 Satz) für diese Beziehungsart
  ratgeberTitle: '…',                  // H1 Ratgeber-Hub, andere Suchphrase als toolTitle
  ratgeberMeta: '…',                   // 140–158 Zeichen, anders als toolMeta
  ratgeberIntro: ['…', '…', '…'],      // 3 Absätze, zusammen 180–260 Wörter, erklärend: typische Dynamiken dieser Beziehung
  faqs: [{ question: '…', answer: '…' }], // 4 echte Fragen zur Beziehungsart (nicht zu Einzelkonflikten), Antworten 2–3 Sätze
};
```
Regeln: respektvolles Du, geschlechtergerecht, keine Diagnosen/Rechtsberatung, keine erfundenen Zahlen.
Tool- und Ratgebertexte dürfen sich nicht wiederholen (Duplicate Content). Eine FAQ darf auf Sicherheit
eingehen (wann es kein Alltagskonflikt mehr ist). Apostrophe in Single-Quote-Strings vermeiden/escapen.
