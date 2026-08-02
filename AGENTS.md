# Konfliktlotse Project Instructions

Die vollständige und verbindliche Aufgabenbeschreibung steht in [`CHALLENGE.md`](./CHALLENGE.md). Lies sie vor jeder Änderung vollständig. Alle darin genannten Qualitäts-, SEO-, Legal-, Sicherheits-, Content- und GitHub-Pages-Anforderungen sind verpflichtend.

## Arbeitsregeln

- Bestehendes Astro-Projekt direkt bearbeiten; kein neues Unterprojekt anlegen.
- Nicht committen und nicht pushen. Hermes übernimmt Review und Deployment.
- Keine Secrets oder API-Keys in Dateien schreiben.
- Produktionsdomain ist `https://konfliktlotse.app/`; interne Links müssen am Domain-Root funktionieren.
- Vor Abschluss `npm run build`, Linkprüfung und `npm audit` ausführen.

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
