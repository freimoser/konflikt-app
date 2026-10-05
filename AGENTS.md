# Konfliktlotse Project Instructions

Die vollständige und verbindliche Aufgabenbeschreibung steht in [`CHALLENGE.md`](./CHALLENGE.md). Lies sie vor jeder Änderung vollständig. Alle darin genannten Qualitäts-, SEO-, Legal-, Sicherheits-, Content- und GitHub-Pages-Anforderungen sind verpflichtend.

## Wachstums-Loop / Übergabe

Für laufende Weiterentwicklung (Content, SEO, AdSense, Spiel) zuerst `docs/loop/README.md`,
dann `docs/loop/LOG.md` und `docs/loop/IDEEN.md` lesen. Jeder Durchlauf dokumentiert dort.

## Arbeitsregeln

- Bestehendes Astro-Projekt direkt bearbeiten; kein neues Unterprojekt anlegen.
- Commits und Push auf `main` sind erlaubt, wenn `npm run verify` und `npm audit` grün sind. GitHub Actions baut und deployt nach GitHub Pages.
- Keine Secrets oder API-Keys in Dateien schreiben.
- Produktionsdomain ist `https://konfliktlotse.app/`; interne Links müssen am Domain-Root funktionieren.
- Vor Abschluss `npm run verify` (Build + Linkprüfung) und `npm audit` ausführen.

## Development

Wenn ein Dev-Server nötig ist, im Hintergrund starten:

```bash
astro dev --background
```

Verwaltung:

```bash
astro dev status
astro dev logs
astro dev stop
```
