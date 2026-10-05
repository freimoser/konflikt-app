# 🕊️ Konfliktlotse

**Dein digitaler Lotse für schwierige Gespräche.**

Kleine Konflikte. Große Wirkung. Finde deinen Weg.

👉 [konfliktlotse.app](https://konfliktlotse.app/)

## So funktioniert's

1. **Wähle die Person** – Partner:in, Chef:in, Freund:in, Kolleg:in, Nachbar:in, Eltern, Geschwister, Mitbewohner:in, Schwiegereltern, Ex-Partner:in, Kinder & Teenager, Vermieter:in
2. **Wähle das Problem** – aus 79 Alltagskonflikten in 12 Bereichen (je mit Tool-Seite und Ratgeberartikel)
3. **Wähle den Weg** – allein lösen oder beide Seiten einbeziehen

Jeder Konflikt bekommt:
- Verständnis für das Problem
- Eine konkrete Formulierungshilfe („Sag genau das")
- Schritt-für-Schritt-Anleitung
- Verlinkte verwandte Konflikte

## Weitere Bereiche

- **Methoden** (`/methoden/`): 10 Konfliktlösungsmethoden, z. B. Ich-Botschaften, GFK, Harvard-Konzept
- **Themen** (`/themen/`): 13 Leitartikel wie „Streit an Weihnachten“, „Konflikte im Team lösen“ oder „Mediation einfach erklärt“
- **Gesprächs-Trainer** (`/spiel/gespraechstrainer/`): Lernspiel mit 42 Situationen
- **Glossar** (`/glossar/`): 40 Begriffe von A bis Z
- **Suche** (`/suche/`) und Druckansicht für jeden Gesprächsplan
- **Eskalations-Check** (`/spiel/eskalations-check/`): Selbsttest nach Glasl mit Sicherheitsweiche
- **Konflikttyp-Test** (`/spiel/konflikttyp/`) und **Vorlagen zum Ausdrucken** (`/vorlagen/`)
- Werbung (Google AdSense) nur per Umgebungsvariable, siehe `.env.example` und `docs/loop/STRATEGIE.md`

## Umfang (Stand 2026-10-01)

- 79 Konflikte in 12 Bereichen → 79 Tool-Seiten + 79 Ratgeberartikel
- 10 Methoden, 13 Themen-Leitartikel, 40 Glossarbegriffe, 4 Vorlagen, 3 Übungen
- insgesamt 227 statisch erzeugte HTML-Seiten (`npm run verify` prüft Daten, Links, Titel und Canonicals)
- Live: https://konfliktlotse.app/ (GitHub Pages, Custom Domain)
- Weiterentwicklung: `docs/loop/README.md`, AdSense-Aktivierung: `docs/loop/STRATEGIE.md` §7

## Tech-Stack

- [Astro](https://astro.build) 7 – statisches Site-Generating
- Pure CSS (kein Tailwind, kein React)
- Mobile-First, Dark-Mode-ready
- GitHub Pages Deployment

## Lokal entwickeln

```bash
npm install
npm run dev
npm run build
npm run verify   # Build + interne Linkprüfung
```
