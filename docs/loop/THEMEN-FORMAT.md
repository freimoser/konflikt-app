# Themen-Silo (/themen/): Format

Themen-Ratgeber sind breite, suchstarke Leitartikel (z. B. „Streit an Weihnachten“, „Streit in der
Beziehung“), die mehrere Konflikte und Methoden bündeln. Dateien: `src/data/topics/<slug>.js`,
Liste: `src/data/topics/index.js`, Seiten: `/themen/` und `/themen/<slug>/`.

**Format = exakt wie Methoden** (siehe `METHODEN-FORMAT.md`) mit zwei Unterschieden:
- `kicker`: kurzes Label über der H1 (z. B. „Saison-Ratgeber“, „Beziehung“, „Job“) statt „Methode“.
- `origin` entfällt (optional leer lassen).
- Optional `season: 'weihnachten' | 'sommer' | …` für saisonale Hervorhebung.

Gültige `relatedMethods`: ich-botschaften, aktives-zuhoeren, gewaltfreie-kommunikation, grenzen-setzen,
deeskalation-im-streit, richtig-entschuldigen, harvard-konzept, eskalationsstufen-glasl.
Gültige Konflikte: `node --input-type=module -e 'const {getAllConflicts}=await import("./src/data/categories/index.js");console.log(getAllConflicts().map(c=>c.category+"/"+c.slug).join("\n"))'`
Länge 1.400–2.000 Wörter (Leitartikel), sonst gleiche Schreibregeln wie Methoden.
