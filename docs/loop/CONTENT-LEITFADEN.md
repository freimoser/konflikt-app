# Content-Leitfaden: neue Konflikte und Artikel

## Neuen Konflikt anlegen (bewährter Ablauf aus DL 1)
1. Datei `src/data/conflicts/<kategorie>/<slug>.js` mit `export default { … }` anlegen.
2. In `src/data/categories/<kategorie>.js` oben importieren und ans Ende von `conflicts: [...]` hängen.
3. In `src/data/quick-answers/<kategorie>.js` Kurzantworten + Ratgeber-Titel ergänzen
   (Format `docs/loop/QUICK-ANSWERS-FORMAT.md`) – sonst schlägt die Datenprüfung fehl.
4. `npm run verify` – Datenprüfung (`scripts/validate-data.mjs`), Build und Linkprüfung müssen grün sein.
5. Verwaiste Konflikte prüfen (siehe Befehl unten) und ggf. in 1–2 bestehenden Konflikten
   unter `related` eintragen.

Referenz für Format, Ton und Tiefe: erstes Objekt in `src/data/categories/eltern.js`
(`mischt-sich-ein`) oder jede Datei unter `src/data/conflicts/`.

### Pflichtfelder
```
published: 'YYYY-MM-DD', (optional updated: 'YYYY-MM-DD')  → Article-JSON-LD + sichtbares Datum
slug, title, icon, summary, problem, causes[3], safety,
one_party: { preparation, scripts: { sanft, direkt, sachlich }, steps[5-7], reactions[3 × {trigger, reaction}], boundary },
two_party: { goal, rules[4], questions[5], steps[5-6], agreement },
dos[4], donts[4], next_step, related[3-4 × {category, slug}],
article: { title, meta, intro, situation, causes[3], mistakes[3], strategy, examples[2-3], help, faqs[5 × {question, answer}] }
```

### Qualitätsregeln
- Respektvolles **Du**, geschlechtergerecht (Partner:in, Kolleg:in).
- Tool = akut („Was sage ich jetzt?“). Ratgeber = erklärend („Warum? Was hilft langfristig?“).
  **Keine wortgleichen Skripte im Artikel** (Duplicate Content).
- Artikel 1.000–1.400 Wörter, `article.title` als Long-Tail-Suchphrase, `article.meta` 140–158 Zeichen.
- Keine Diagnosen, keine Rechts-/Finanz-/Therapieberatung. Keine erfundenen Paragraphen, Fristen, Beträge.
- `safety` benennt immer, wann es **kein** Alltagskonflikt mehr ist.
- Erlaubte Notrufnummern ausschließlich: 110, 112, TelefonSeelsorge 0800 1110111 / 0800 1110222 / 116 123,
  Hilfetelefon Gewalt gegen Frauen 116 016, Hilfetelefon Gewalt an Männern 0800 1239900,
  WEISSER RING 116 006. Schreibweise genau so.
- In Single-Quote-Strings keine ungeschützten Apostrophe.

### Parallel schreiben lassen (hat in DL 1 gut funktioniert)
Pro Konflikt einen Agenten mit: Zielpfad, Slug, Themenbeschreibung, Abgrenzung zu ähnlichen
Konflikten, Liste gültiger `related`-Ziele und den Qualitätsregeln oben. Jeder Agent schreibt
nur seine eine Datei → keine Konflikte. Danach zentral einbinden, Nummern prüfen:
```bash
grep -noE "[0-9]{3,4}[ 0-9]{3,12}|§ ?[0-9]+" src/data/conflicts/*/*.js
```

### Verwaiste Konflikte finden
```bash
node --input-type=module -e '
const {getAllConflicts,getRelatedConflicts}=await import("./src/data/categories/index.js");
const all=getAllConflicts();const inc={};
for(const c of all)for(const r of getRelatedConflicts(c.category,c.slug,4)){const k=r.category.id+"/"+r.slug;inc[k]=(inc[k]||0)+1}
console.log(all.filter(c=>!inc[c.category+"/"+c.slug]).map(c=>c.category+"/"+c.slug))'
```
`getRelatedConflicts` (in `src/data/categories/index.js`) zeigt bis zu 3 gepflegte Links und
reserviert einen Platz für Rückverlinkungen.

## Neue Kategorie anlegen
Neue Datei `src/data/categories/<id>.js` nach Vorbild, in `src/data/categories/index.js` in
`categories` aufnehmen. Seiten entstehen automatisch. Startseite zeigt alle Kategorien.
Die Kategorie-Datei importiert ihre Konflikte als Einzeldateien (Vorbild: `geschwister.js`).
Startseiten-Grid: 2 Spalten mobil, 4 Spalten ab 640 px – bei ungerader Anzahl Layout prüfen.
