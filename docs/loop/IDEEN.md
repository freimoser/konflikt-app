# Ideen-Backlog (priorisiert)

Legende: **P1** = nächster Durchlauf, **P2** = bald, **P3** = später. ✅ = erledigt (mit DL-Nummer).
Beim Erledigen hier abhaken und in `LOG.md` eintragen.

## P1 – AdSense-Fundament & Vertrauen
- [x] (DL 2) **Über-uns-Seite** `/ueber-uns/` mit Mission, redaktionellen Grundsätzen, Grenzen des Angebots
      (kein Therapieersatz), wie Inhalte entstehen und geprüft werden (E-E-A-T).
- [x] (DL 2) **Kontaktseite** `/kontakt/` (Mail, keine Formulare), im Footer verlinken.
- [x] (DL 2) **Datenschutz** ausbauen: sauberere GitHub-Pages-Passage (keine unbelegten Behauptungen zu
      Standardvertragsklauseln), AdSense-/Consent-Abschnitt **nur wenn** `PUBLIC_ADSENSE_CLIENT` gesetzt ist.
- [x] (DL 2) **AdSense-Infrastruktur**: `src/config/site.ts`, `AdSlot.astro`, `ads.txt`-Endpoint,
      `adsSensitive`-Flag, Ausschluss sensibler Seiten (Details in `STRATEGIE.md` §2).
- [x] (DL 2) Meta-Descriptions für Impressum/Datenschutz verlängern (Linkprüfer-Warnung).
- [x] (DL 2) **OG-Standardbild** (1200×630 PNG, Marke + Claim) in `public/og/` und als Default im Layout.

## P1 – Content-Wachstum
- [x] (DL 2) **Methoden-Silo** `/methoden/` mit 8–10 Evergreen-Artikeln: Gewaltfreie Kommunikation,
      Ich-Botschaften, aktives Zuhören, Harvard-Konzept, 9 Eskalationsstufen nach Glasl,
      Grenzen setzen, sich richtig entschuldigen, Feedback geben, Deeskalation im Streit, Mediation.
      Jede Methode verlinkt passende Konflikte und umgekehrt.
- [x] (DL 3) Neue Kategorie **Geschwister** (6): Erbe/Elternpflege-Aufteilung, Bevorzugung, Konkurrenz,
      ständig Streit bei Familienfesten, leiht Geld, meldet sich nie.
- [x] (DL 3) Neue Kategorie **Mitbewohner:in / WG** (6): Putzplan, Lärm, Gäste/Partner:in wohnt quasi mit,
      Kosten/Nebenkosten, Essen aus dem Kühlschrank, Auszug/Kündigung.
- [x] (DL 4) Neue Kategorie **Schwiegereltern** (6), **Ex-Partner:in / Co-Parenting** (6).
- [ ] Neue Kategorie
      **Kinder & Teenager** (7: Handyzeit, Hausaufgaben, Zimmer, Ausgehen, Respekt, Taschengeld, Geschwisterstreit).

## P1 – Qualität (neu aus DL 2)
- [x] (DL 3) Tool-Seite: Problemtext ist auf dem Handy eine lange Textwand → erste 2 Sätze zeigen, Rest in `<details>`.
- [x] (DL 6) Kurze SEO-Titel für alle Tool-Seiten (`src/data/seo-titles.js`), Ratgeber-Fallback.
- [ ] (alt) Pro Konflikt `seoTitle` pflegen, wo der generische Titel holpert (z. B. „Kritisieren ständig“ →
      „Eltern kritisieren ständig: Was du sagen kannst“). H1 der Tool-Seite ggf. um Kategorie ergänzen.
- [ ] Weitere Methoden: Feedback geben (SBI), Mediation, Nein sagen, Konfliktgespräch vorbereiten,
      Streitkultur in Beziehungen, Vier-Ohren-Modell (Schulz von Thun), Kompromiss vs. Konsens.
- [ ] `adsSensitive` für weitere Konflikte prüfen (z. B. Vertrauen gebrochen? Pflege?) – Faustregel:
      wenn Kontrolle/Gewalt/Krise Kernthema ist.

## P2 – Spiel & Werkzeuge (siehe `SPIEL.md`)
- [x] (DL 3) Gesprächs-Trainer (`/spiel/gespraechstrainer/`, 18 Szenarien).
- [x] (DL 5) Trainer: 30 Szenarien, alle 10 Kategorien.
- [x] (DL 6) Trainer: Zufallsrunde (5) als Standard, Deep-Link `#bereich-<id>`.
- [x] (DL 7) Trainer: alle 11 Kategorien (36). Ziel weiterhin 1 Szenario pro Konflikt (73).
- [x] (DL 4) Eskalations-Check (`/spiel/eskalations-check/`).
- [x] (DL 7) Konflikttyp-Test (`/spiel/konflikttyp/`, teilbar ohne Tracking).
- [ ] Ich-Botschaft-Baukasten (nur Auswahllisten).
- [x] (DL 5) Druckansicht „Gesprächsplan drucken“.
- [x] (DL 6) Kopier-Button je Skriptvariante.

## P2 – SEO-Technik
- [x] (DL 5) Kategorie-Hubs mit Einleitung, Sofort-Tipps, FAQ (`src/data/hubs/`).
- [ ] Ratgeber-Übersicht: „Neu“ und „Beliebt“-Sektionen.
- [ ] Inhaltsverzeichnis (Sprungmarken) in langen Ratgebern.
- [x] (DL 5) Interne Suche `/suche/` (statisch gerendert + JS-Filter).
- [x] (DL 3) Datenprüfung `scripts/validate-data.mjs` (Verweise, Pflichtfelder, Nummern).
- [x] (DL 4) Orphan-Check in `validate-data.mjs`.
- [x] (DL 6) Title-Längen-Check (> 70 Zeichen = Warnung) im Linkprüfer.
- [ ] `HowTo`-JSON-LD ist von Google eingestellt → nicht einbauen; stattdessen saubere `Article`/`FAQPage`.

## Neue Content-Ideen (Brainstorming DL 3)
- ✅ (DL 8) Kategorie **Vermieter:in**. Offen: Kategorie **Arbeit allgemein / Kund:innen** (unfreundliche Kund:innen, Reklamation, Kund:in duzt/ist übergriffig → Krisenweiche).
- Kategorie **Schule & Kita** (Lehrkraft, andere Eltern, Elternabend, WhatsApp-Elterngruppe).
- Kategorie **Online & Social Media** (Gruppenchat-Streit, Freund:in postet Fotos ohne Erlaubnis, Ghosting).
- Kategorie **Verein & Ehrenamt**, **Vermieter:in** (Reparatur, Kaution – ohne Rechtsberatung).
- ✅ (DL 4) „Streit an Weihnachten“ im Themen-Silo. Weitere saisonale Artikel:
  „Urlaub mit Partner:in ohne Streit“, „Familienfeier planen“. Saisonale Spitzen = RPM-Spitzen im Q4.
- Vorlagen/Checklisten-Seiten: „Konfliktgespräch vorbereiten – Checkliste“, „WG-Putzplan-Vorlage“ (druckbar).

## Brainstorming DL 4
- **Themen-Silo ausbauen** (hohe Suchnachfrage, breite Keywords): Mobbing am Arbeitsplatz (erste Schritte,
  Dokumentation – mit klarer Hilfe-Weiche), Streit im Urlaub, Streit mit Kindern/Teenagern (Überblick),
  Nein sagen lernen, Passiv-aggressives Verhalten erkennen, Schweigen als Strafe (Silent Treatment – Kontroll-Abgrenzung!),
  Streit per WhatsApp, Konflikte im Homeoffice.
- **Hub-Seiten stärken:** Kategorie-Seiten sind aktuell dünn (Liste + 1 Satz). 200 Wörter Einleitung +
  3 FAQ je Kategorie würden 20 Seiten aufwerten.
- **Interne Suche** über alle Konflikte/Methoden/Themen (statischer JSON-Index, Vanilla-JS) – verbessert Seiten/Sitzung.
- **„Konflikt des Tages“** auf der Startseite (build-zeitlich rotierend) für Frische-Signal.

## Brainstorming DL 5
- ✅ (DL 6) **Kategorie Kinder & Teenager** (Eltern-Sicht): Handyzeit, Hausaufgaben, Zimmer aufräumen, Ausgehzeiten,
  respektloser Ton, Taschengeld, Geschwisterstreit schlichten. Sehr hohes Suchvolumen, sensible Weiche (Kinderschutz,
  Nummer gegen Kummer nur nach Verifizierung aufnehmen!).
- **Kategorie Kund:innen & Dienstleister** (Handwerker, Kundschaft im Job, Reklamation) – kaufkräftige Werbeumfelder.
- ✅ (DL 7) **Vorlagen** `/vorlagen/` (4 Stück). Weitere: Co-Parenting-Kostenliste, Feiertags-Absprache, Team-Konfliktprotokoll.
- ✅ (DL 6) **Trainer-Links in Hubs** (`#bereich-<id>`).

## Brainstorming DL 6
- **Konflikttyp-Quiz** (Thomas-Kilmann-ähnliche Stile nur beschreibend, ohne Markennamen/Testlizenz: Vermeiden,
  Nachgeben, Durchsetzen, Kompromiss, Kooperation) → Ergebnis mit Stärken/Risiken + passenden Methoden.
- **„Satz des Tages“** aus den Skripten (build-rotierend) auf der Startseite – Frische + Wiederkehr.
- ✅ (DL 8) **Glossar** `/glossar/` (40 Begriffe, eine Seite).
- **Mehrsprachigkeit** später (AT/CH-Varianten sind gleich Deutsch – eher Fokus auf mehr DE-Content).

## Nach dem Loop – empfohlene Reihenfolge für künftige Durchläufe
1. **Daten sammeln statt raten:** 4–6 Wochen nach dem Deployment Search Console auswerten (Impressionen, CTR, Position).
   Titel/Metas der Seiten mit hohen Impressionen und CTR < 2 % in `src/data/seo-titles.js` bzw. `article.meta` schärfen.
2. **Seiten auf Position 8–20 ausbauen** (FAQ ergänzen, Beispiele, interne Links) – schnellster Traffic-Hebel.
3. **Neue Kategorie Kund:innen & Dienstleister** (Job) und **Schule & Kita** (Eltern ↔ Lehrkraft/Elterngruppe).
4. **Trainer auf 1 Szenario pro Konflikt** (79) ausbauen; Konflikttyp-Test mit eigenen OG-Bildern je Stil (Social-CTR).
5. **Saison-Kalender:** Silvester/Neujahr („Vorsätze & Beziehung“), Ostern/Familienfeste, Sommerurlaub, Schulanfang –
   jeweils 6–8 Wochen vorher veröffentlichen; `season` + `SEASONS` in `src/data/topics/index.js` erweitern.
6. **Datensparsame Reichweitenmessung** erst nach Rechtsprüfung und mit Einwilligung bzw. cookielos.

## P3 – Monetarisierung ergänzend (nur echt, nichts vortäuschen)
- [ ] Kuratierte Buchempfehlungen je Methode (erst mit echtem Affiliate-Konto, sonst ohne Links).
- [ ] Kostenloser PDF-Gesprächsplan ohne E-Mail-Gate; später optional Newsletter mit echtem Dienst.
- [ ] Datenschutzfreundliche Reichweitenmessung (z. B. serverseitig/cookieless) nach Rücksprache.

## Erledigt
- ✅ DL 1: Linkprüfer `scripts/check-links.mjs`, `npm run verify`
- ✅ DL 1: Modus-Bug (`?mode=` bei Direktaufruf, Zurück-Taste)
- ✅ DL 1: Startseite mit SEO-Titel, WebSite- + FAQPage-JSON-LD, „Häufige Konflikte“, FAQ
- ✅ DL 1: 7 neue Konflikte (Eltern 2→7, Nachbarn 4→6) → 43 Konflikte
- ✅ DL 1: automatische Rückverlinkung verwandter Konflikte
- ✅ DL 1: Artikel mit `datePublished`/`dateModified` + sichtbarem Datum
- ✅ DL 1: `npm audit fix` → 0 Schwachstellen
