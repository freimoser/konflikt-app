# Loop-Dokumentation – Einstieg für Menschen und KIs

Dieser Ordner ist das **Gedächtnis** der autonomen Wachstums-Durchläufe für Konfliktlotse.
Jeder Durchlauf (Mensch oder KI) liest zuerst diese Datei, dann `LOG.md`, dann `IDEEN.md`.

## Ziel
Konfliktlotse soll das **größte deutschsprachige Portal zum Lösen von Alltagskonflikten** werden –
mit mehreren Ansätzen (Gesprächsskripte, Methoden, interaktive Werkzeuge, Ratgeber) – und sich
über **Google AdSense** finanzieren. Wirtschaftlicher Erfolg = mehr organischer Traffic × mehr
Seitenaufrufe pro Besuch × saubere, werbetaugliche Seiten.

## Dateien
| Datei | Inhalt |
|---|---|
| `LOG.md` | Chronik aller Durchläufe: was gemacht, was offen, Kennzahlen |
| `STRATEGIE.md` | Geschäftsstrategie, AdSense-Voraussetzungen, SEO-Plan, KPIs |
| `IDEEN.md` | Priorisierter Ideen-Backlog (Content, Features, Spiel, Technik) |
| `CONTENT-LEITFADEN.md` | Wie neue Konflikte/Artikel geschrieben und eingebunden werden |
| `SPIEL.md` | Konzepte für das interaktive „Spiel“ (Konflikt-Flow, Quiz, Trainer) |
| `METHODEN-FORMAT.md` | Datenformat + Schreibregeln für Methoden-Artikel (`/methoden/`) |
| `HUB-FORMAT.md` | Texte der Kategorie-Hubs (`src/data/hubs/<id>.js`) |
| `THEMEN-FORMAT.md` | Format für Themen-Leitartikel (`/themen/`), gleiche Vorlage wie Methoden |

## Budget-Hinweis
In DL 5 lief das API-Sitzungslimit aus. Pro Durchlauf höchstens 5–6 parallele Agenten einplanen.

## Harte Regeln (aus `AGENTS.md` / `CHALLENGE.md`)
- **Commit + Push auf `main` nur mit grünem `npm run verify`.** GitHub Actions baut und deployt automatisch.
- Keine Secrets, API-Keys, Tracking-IDs oder AdSense-Publisher-IDs in Dateien schreiben.
  AdSense wird über Umgebungsvariablen aktiviert (siehe `STRATEGIE.md`).
- Astro + semantisches HTML + Vanilla CSS/JS. Kein Tailwind, kein React.
- Keine freien Konflikttexte von Nutzer:innen speichern oder versenden.
- Gewalt, Missbrauch, Stalking, akute Gefahr **nie** als normalen Kommunikationskonflikt behandeln.
- Vor Abschluss jedes Durchlaufs: `npm run verify` (Build + Linkprüfung) und `npm audit`.

## Schnellbefehle
```bash
npm run dev       # Dev-Server
npm run verify    # Build + interne Linkprüfung (scripts/check-links.mjs)
npm run check     # nur Linkprüfung auf vorhandenem dist/
```

## Datenmodell in einem Satz
Kategorien liegen in `src/data/categories/<id>.js`. Neue Konflikte werden **als eigene Datei**
unter `src/data/conflicts/<kategorie>/<slug>.js` (`export default { … }`) angelegt und in der
Kategorie-Datei importiert. Aus jedem Konflikt entstehen automatisch eine Tool-Seite
(`/konflikt/<kat>/<slug>/`) und eine Ratgeberseite (`/ratgeber/<kat>/<slug>/`).
Methoden liegen unter `src/data/methods/<slug>.js` (Liste in `src/data/methods/index.js`), Themen unter
`src/data/topics/` – beide gerendert von `src/components/GuideArticle.astro`. Spiele: `src/pages/spiel/`.
Werbung: `src/config/site.ts` + `AdSlot.astro`, aktiv nur mit `PUBLIC_ADSENSE_CLIENT`.
