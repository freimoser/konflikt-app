# Website-Status

Diese Datei hält fest, wo das Projekt steht. Der Skill `website-bauen` liest sie bei jedem Aufruf und macht dort weiter.

Status: ✅ erledigt · 🔄 läuft · ⬜ offen · ➖ entfällt

Sonderfall: Die Seite ist schon gebaut und seit Oktober 2026 live. Die Phasen werden deshalb nicht neu durchlaufen,
sondern gegen den Bestand geprüft. Lücken werden geschlossen, das vorhandene Design bleibt (Entscheidung 2026-10-22).

| Phase | Name | Status | Datum | Bestand / Lücke |
|---|---|---|---|---|
| 0 | Einrichten | ✅ | 2026-10-22 | Statusdatei, impeccable 4.7.0 läuft, DataForSEO-MCP eingetragen |
| 1 | Fundament | ✅ | 2026-10-22 | Marke gemessen (unten), `PRODUCT.md` von der Person bestätigt |
| 2 | Recherche | 🔄 | 2026-10-26 | `recherche/keyword-karte.md` (174 Begriffe, DataForSEO); Titel angepasst; GEO-Prüfung offen |
| 3 | Texte | ➖ | | Inhalte datengetrieben in `src/data/`, Regeln in `docs/loop/CONTENT-LEITFADEN.md` |
| 4 | Design-Richtung | ✅ | | vorhandenes Design gilt |
| 5 | Bauen | ✅ | | Astro, 228 Seiten, strukturierte Daten |
| 6 | Prüfen und Feinschliff | 🔄 | | noch keine unabhängige Design-/UX-Abnahme; `DESIGN.md` fehlt |
| 7 | Livegang | ✅ | 2026-10-22 | live, Rechtstexte geprüft; vor AdSense: zertifizierte CMP (TCF) nötig |
| 8 | Danach | 🔄 | | Search Console verifiziert, IndexNow aktiv; Auswertung offen |

## Ausgangslage

- Bestehende Website oder Marke: https://konfliktlotse.app/ (Konfliktlotse, Logo-Zeichen 🕊️)
- Hauptziel der Seite: informieren – Reichweite über Google und KI-Suchen, Finanzierung über AdSense
- Hosting: GitHub Pages über GitHub Actions (Push auf `main`), DNS bei Cloudflare (nur DNS)
- Werkzeuge: impeccable ✅ (4.7.0, user scope) · Playwright ➖ (Browser-Pane der App für Screenshots) · DataForSEO ✅ (MCP `dataforseo` verbunden, 5 $ Startguthaben) · Hosting-MCP ➖ (Deploy per Git) · Formular-Ziel ➖ (kein Formular, Feedback per `mailto:`)

## Marke

Gemessen aus dem Live-CSS (`src/layouts/BaseLayout.astro`), 2026-10-22.

| Rolle | Wert |
|---|---|
| Hauptfarbe | `#2d6a4f` (hell `#40916c`, dunkel `#1b4332`) |
| Akzent | `#f4a261` |
| helle Fläche | `#f8f9fa`, Karten `#fff` |
| Text | `#1b1b1b`, gedämpft `#5a5a5a` |
| Überschriften | Systemschrift (-apple-system, Segoe UI, Roboto …), 600–700 |
| Fließtext | Systemschrift, 16 px, Zeilenhöhe 1,6 |
| Merkmale | Radius 12 px / 8 px, Inhaltsbreite 720 px, Emoji als Icons |

## Entscheidungen

- 2026-10-22: Vorhandenes Design bleibt; alles andere wird gegen den Bestand geprüft.
- 2026-10-22: impeccable installieren – ja. Recherche mit DataForSEO – ja (Konto legt die Person an).
- 2026-10-22: Reihenfolge: Phase 0 → PRODUCT.md (Phase 1) → Phase 6 Prüfung → Phase 2 Recherche → Phase 8.
- 2026-10-22: Zielgruppe = akut Betroffene, Erstbesuch über Suche, mobil. Keine Fachqualifikation des Betreibers – nie behaupten. Tabus: keine Einzelberatung, keine erfundenen Berichte/Zahlen, keine Rechts-/Therapieauskünfte, keine Konten, keine Eingabe von Konfliktdetails.

## Offene Fragen an die Person

- Impressum: zweiter Kontaktweg (Telefon) gewünscht?
- `www`-Eintrag in Cloudflare (CNAME `www` → `freimoser.github.io`, DNS only)

## Update-Ablauf nach dem Livegang

1. Änderung in `src/` (Inhalte in `src/data/`)
2. `npm run verify` und `npm audit`
3. Commit und Push auf `main` → GitHub Actions baut, deployt und meldet per IndexNow
4. Cache leeren: entfällt (GitHub Pages)
5. Live prüfen
