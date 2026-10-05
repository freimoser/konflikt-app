# Das „Spiel“ auf Konfliktlotse

## Ist-Zustand (DL 1)
Der Kern-Flow ist spielartig aufgebaut: **Wer? → Was? → Wie?**
1. Person wählen (Kategorie-Karten auf Start und `/konflikt/`)
2. Konflikt wählen (Kategorie-Seite)
3. Weg wählen: „Nur ich“ oder „Beide Seiten“ (`?mode=one-party|two-party`, clientseitig umgeschaltet,
   seit DL 1 auch bei Direktaufruf und mit Zurück-Taste)

## Gesprächs-Trainer (live seit DL 3)
- Seite: `/spiel/gespraechstrainer/` (`src/pages/spiel/gespraechstrainer.astro`), Hub: `/spiel/`.
- Daten: `src/data/trainer.js` → `scenarios[]` mit `id`, `conflict {category, slug}`, `context`, `says`,
  `options[3] {text, type: klar|eskalierend|ausweichend, feedback}`, `tip`. Genau eine Option `klar`,
  Position über die Szenarien variieren.
- Ohne JS: jedes Szenario sichtbar, Antworten als `<details>` aufklappbar (Feedback lesbar).
  Mit JS: eine Situation nach der anderen, Bereichsfilter, Punktestand, Ergebnis-Screen mit Einordnung.
  Nichts wird gespeichert. Einstieg per Anker `#<id>` (von der Konfliktseite aus) startet bei diesem Szenario.
- Konfliktseiten mit Szenario zeigen den Hinweis „Üben vor dem Ernstfall“ (Tool-Seite, nach den Methoden).
- Keine Werbung im Trainer (versehentliche Klicks, AdSense-Richtlinien).
- **Ausbau**: mehr Szenarien (Ziel: 1 pro Konflikt, auch Geschwister/WG), Schwierigkeitsstufen,
  „Runde mit 5 zufälligen Situationen“, teilbares Ergebnis-Bild (ohne Tracking), optional Bestwert lokal (localStorage).

## Ausbau-Ideen (priorisiert)
1. ✅ (DL 3) **Gesprächs-Trainer („Was antwortest du?“)** – pro Konflikt die vorhandenen `reactions`
   als Mini-Szenario: Gegenüber sagt X → 3 Antwortoptionen (eine ruhig/klar, eine eskalierend,
   eine ausweichend) → sofortiges Feedback mit Erklärung. Datenquelle existiert bereits
   (`one_party.reactions`), eskalierende/ausweichende Distraktoren müssen ergänzt werden.
   Reines Vanilla-JS, nichts wird gespeichert. Hohe Verweildauer, teilbar.
2. ✅ (DL 4, `/spiel/eskalations-check/`) **Eskalations-Check (nach Glasl, vereinfacht)** – 6–8 Ja/Nein-Fragen → Einordnung
   „Gesprächsbereit / Angespannt / Verhärtet / Hilfe von außen“ → passende Links
   (Konflikt, Methode, Krisenhilfe). Wichtig: Gewalt-/Angstfragen führen immer zur Krisenseite.
3. ✅ (DL 7, `/spiel/konflikttyp/`, Daten `src/data/quiz.js`) **Konflikttyp-Quiz** („Wie gehst du mit Streit um?“: Vermeider, Harmonisierer, Kämpfer,
   Problemlöser) → Ergebnisprofil mit Tipps + passenden Methoden. Stark teilbar (Social Traffic).
4. **Ich-Botschaft-Baukasten** – Beobachtung + Gefühl + Bedürfnis + Bitte aus Auswahllisten
   zusammenklicken → fertiger Satz zum Kopieren. Nur Auswahl, keine Freitexte → keine sensiblen Daten.
5. **Fortschritt/Abzeichen** lokal im Browser (localStorage, optional, abschaltbar):
   „3 Gesprächspläne angesehen“, „Trainer bestanden“. Nur Komfort, nie nötig.

## Regeln fürs Spiel
- Kein Freitext, der gespeichert oder gesendet wird.
- Funktioniert der Kerninhalt ohne JS? Szenarien als `<details>` vorrendern, JS verbessert nur.
- Keine Werbung innerhalb des Spielbereichs (versehentliche Klicks).
- Sensible Konflikte (Eifersucht/Kontrolle) im Trainer mit Krisenhinweis.
