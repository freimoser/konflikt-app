# Durchlauf-Log

Loop-Vorgabe: mindestens 7, maximal 10 Durchläufe, Rhythmus ca. 15 Minuten (Cron `7,22,37,52 * * * *`,
Session-Job). Jeder Durchlauf trägt sich hier mit fortlaufender Nummer ein. **Nach Durchlauf 10
den Cron-Job beenden.** Nicht committen/pushen (Hermes deployt).

---

## Durchlauf 1 – 2026-09-30
**Fokus:** Fundament – Projekt verstehen, Qualitätssicherung, fehlende Pflicht-Konflikte, Startseiten-SEO.

**Erledigt**
- Repo `freimoser/konflikt-app` geklont, Abhängigkeiten installiert, `npm audit fix` → 0 Schwachstellen.
- `scripts/check-links.mjs` + npm-Skripte `check` und `verify`: prüft interne Links, Canonicals
  (ohne Query), Meta-Description-Länge, Anzahl H1, Sitemap-Ziele.
- Bugfix Tool-Seite: `?mode=one-party|two-party` wird bei Direktaufruf ausgewertet, Zurück-Taste
  funktioniert (`pushState` + `popstate`), `prefers-reduced-motion` beim Scrollen beachtet.
- `BaseLayout`: Prop `fullTitle`, `og:locale`, `og:site_name`, Twitter-Tags korrekt als `name=`.
- Startseite: Titel „Konflikte lösen mit konkreten Worten | Konfliktlotse“, WebSite- + FAQPage-JSON-LD,
  Vertrauenszeile, „Häufige Konflikte“ (8 Direktlinks), Erklärtext, sichtbare FAQ (identisch mit JSON-LD).
- 7 neue Konflikte als Einzeldateien unter `src/data/conflicts/`:
  eltern/ueberhoehte-erwartungen, eltern/kritisieren-staendig, eltern/respektieren-grenzen-nicht,
  eltern/akzeptieren-partner-nicht, eltern/streit-um-pflege, nachbarn/grundstuecksgrenzen,
  nachbarn/beschwert-sich-staendig (je Tool + Ratgeber, Artikel ca. 1.100–1.400 Wörter).
- `getRelatedConflicts()` mit Rückverlinkung → 0 verwaiste Konflikte.
- Ratgeber: `datePublished`/`dateModified`/`inLanguage`/`mainEntityOfPage` im Article-JSON-LD,
  sichtbares „Aktualisiert am“.
- Doku-Ordner `docs/loop/` angelegt (README, STRATEGIE, IDEEN, CONTENT-LEITFADEN, SPIEL, LOG).

**Kennzahlen nach DL 1:** 43 Konflikte (Partner 9, Chef 7, Freunde 7, Kollegen 7, Nachbarn 6, Eltern 7),
105 HTML-Seiten, ~2.300 interne Links, Linkprüfer grün, Build grün, 0 Audit-Findings.

**Offen / Empfehlung für DL 2**
1. AdSense-Fundament: Über uns, Kontakt, Datenschutz-Ausbau, env-gesteuerte AdSense-Infrastruktur,
   OG-Bild (siehe `IDEEN.md` P1).
2. Danach Content-Schub: Methoden-Silo starten (größter SEO-Hebel, Evergreen).

**Hinweise**
- Die in `README.md` genannte Zahl „über 30 Konflikte“ ist veraltet → bei Gelegenheit aktualisieren.
- Die Hero-Überschrift wurde auf das Markenversprechen „Vom Konflikt zum klaren Gespräch“ umgestellt.

---

## Durchlauf 2 – 2026-09-30
**Fokus:** AdSense-Fundament (Vertrauen, Recht, Technik) + Start Methoden-Silo.

**Erledigt**
- **Methoden-Silo** `/methoden/` + `/methoden/<slug>/` (8 Evergreen-Artikel à ca. 1.400–1.700 Wörter):
  Ich-Botschaften, Aktives Zuhören, Gewaltfreie Kommunikation, Grenzen setzen, Deeskalation,
  Richtig entschuldigen, Harvard-Konzept, Eskalationsstufen nach Glasl. Daten: `src/data/methods/`,
  Format: `docs/loop/METHODEN-FORMAT.md`. Seiten mit Inhaltsverzeichnis, Vorher/Nachher-Beispiel,
  Grenzen-Box (Krise), „Direkt ausprobieren“-Links zu Konflikten, FAQ (+ FAQPage-JSON-LD), Article-JSON-LD.
- Methoden ↔ Konflikte verknüpft: `MethodLinks.astro` auf Tool- und Ratgeberseiten
  (`getMethodsForConflict`, Fallback auf Basismethoden).
- **AdSense-Infrastruktur, per Umgebungsvariable schaltbar** (ohne Variable komplett werbefrei):
  `src/config/site.ts` (ADS_ENABLED, AD_SLOTS, OPERATOR), `AdSlot.astro` (gekennzeichnet „Anzeige“,
  280 px reserviert), `src/pages/[adsfile].txt.ts` → `/ads.txt` nur bei gesetzter Kennung,
  AdSense-Script im Layout nur wenn aktiv und Seite nicht `noAds`/`noindex`.
  `.env.example` + `deploy.yml` reicht Repository-Variablen durch und führt die Linkprüfung aus.
  Werbefrei: Krisenhilfe, Impressum, Datenschutz, Kontakt, 404, Konflikte mit `adsSensitive: true` (Eifersucht).
  Mit Dummy-Kennung getestet: Gating funktioniert wie beschrieben.
- **Datenschutz** neu: Verantwortlicher, Hosting GitHub (ohne unbelegte Behauptungen zur Übermittlungsgrundlage),
  Feedback-Mail, AdSense-/Einwilligungsabschnitt **nur bei aktivierter Werbung**, Betroffenenrechte, BayLDA.
- **Impressum** ausgebaut (§ 18 Abs. 2 MStV, Haftung, Urheberrecht, Verbraucherstreitbeilegung).
- Neue Seiten **Über uns** (Grundsätze, Entstehung der Inhalte inkl. KI-Transparenz) und **Kontakt**.
- Navigation um „Methoden“ ergänzt, Footer um Methoden/Über uns/Kontakt; mobiler Header korrigiert
  (Logo klebte an Navigation). Globale `:focus-visible`-Styles und `prefers-reduced-motion`.
- **OG-Bild** `public/og/konfliktlotse.png` (Skript `scripts/generate-og.mjs`) als Standard, `og:type=article` bei Artikeln.
- **Bugfix Krisenhinweis**: Der Sicherheitsabsatz wurde bisher in den Satz „Besonders bei Themen wie … gilt:“
  eingesetzt (kaputte Sätze auf jeder Konfliktseite). Jetzt eigene Box „Ist das noch ein Alltagskonflikt?“.
- Tool-Seiten-Titel jetzt „<Kategorie>: <Konflikt> – was sage ich jetzt?“ (optional überschreibbar per `seoTitle`).
- Ratgeber: zweiter CTA zum Gesprächsplan am Artikelende.

**Kennzahlen nach DL 2:** 43 Konflikte, 8 Methoden, 116 HTML-Seiten (inkl. 404), 3.286 interne Links,
Linkprüfer ohne Fehler und ohne Warnungen, 0 Audit-Findings.

**Offen / Empfehlung für DL 3**
1. Content-Schub neue Kategorien: Geschwister + Mitbewohner:in/WG (je 6) – parallel per Agenten.
2. Erstes Spiel-Feature: **Gesprächs-Trainer** (siehe `SPIEL.md`) – Datenbasis `one_party.reactions`.
3. Kategorie-Grid auf Start/`/konflikt/` für > 6 Kategorien prüfen.

**Für den Betreiber (manuell, außerhalb des Codes)**
- AdSense-Konto anlegen, Website hinzufügen. Dann in GitHub → Settings → Secrets and variables → Actions →
  **Variables** `PUBLIC_ADSENSE_CLIENT` (ca-pub-…) setzen; nach Freigabe Anzeigenblöcke anlegen und deren IDs als
  `PUBLIC_ADSENSE_SLOT_IN_ARTICLE`, `PUBLIC_ADSENSE_SLOT_AFTER_TOOL` setzen.
- Im AdSense-Konto unter „Datenschutz & Mitteilungen“ die Google-CMP (EWR/UK-Einwilligung) aktivieren –
  ohne zertifizierte CMP keine personalisierten Anzeigen im EWR.
- Google Search Console für konfliktlotse.app verifizieren (DNS) und Sitemap einreichen.

---

## Durchlauf 3 – 2026-09-30
**Fokus:** Reichweite durch neue Kategorien + erstes echtes Spiel-Feature.

**Erledigt**
- **2 neue Kategorien mit je 6 Konflikten** (Tool + Ratgeber, Artikel ca. 1.250–1.360 Wörter):
  - Geschwister (`geschwister`): bevorzugung, konkurrenz-und-vergleiche, streit-bei-familienfesten,
    funkstille, geld-geliehen, streit-ums-erbe
  - Mitbewohner:in (`mitbewohner`): putzplan-ignoriert, isst-meine-sachen, laerm-in-der-wg,
    partner-wohnt-mit, nebenkosten-und-einkauf, auszug-und-kuendigung
  Kategorie-Dateien `src/data/categories/geschwister.js` und `mitbewohner.js` importieren Einzeldateien.
- **Gesprächs-Trainer** `/spiel/gespraechstrainer/` + Hub `/spiel/`: 18 Szenarien (je 3 pro Ursprungs-
  Kategorie), 3 Antworttypen (klar/eskalierend/ausweichend) mit Feedback und Prinzip, Filter nach Bereich,
  Punktestand, Ergebnis-Screen. Funktioniert ohne JS (`<details>`), nichts wird gespeichert.
  Einstieg per `#<szenario-id>`. Daten: `src/data/trainer.js`. Details: `SPIEL.md`.
- Konfliktseiten mit Trainer-Szenario zeigen „Üben vor dem Ernstfall“ mit Direktlink.
- Startseite: Teaser für Trainer + Methoden, Kategorie-Grid 4-spaltig ab 640 px (8 Kategorien).
  Navigation: „Üben“ (ab 520 px), Footer: „Gesprächs-Trainer“.
- Tool-Seite: lange Problembeschreibung zeigt 2 Sätze, Rest per „Weiterlesen“ (`<details>`).
- SEO-Titel für `/konflikt/` und `/ratgeber/` (vorher nur „Konflikte“/„Ratgeber“).
- **Neue Datenprüfung** `scripts/validate-data.mjs` (`npm run validate`, Teil von `npm run verify`):
  Pflichtfelder, gültige related-Ziele, doppelte Slugs, Notrufnummern-Whitelist, Methoden- und Trainer-Verweise.
  → Fand 5 **alte kaputte related-Verweise** (partner/chef → `eltern/erwartungen`, `kollegin/...`), korrigiert.
- 0 verwaiste Konflikte (auszug-und-kuendigung zusätzlich verlinkt).

**Kennzahlen nach DL 3:** 55 Konflikte in 8 Kategorien, 8 Methoden, 18 Trainer-Szenarien,
146 HTML-Seiten, 4.477 interne Links, Daten- und Linkprüfung grün, 0 Audit-Findings.
Inhaltsseiten mit Substanz: 55 × 2 + 8 Methoden + Trainer ≈ 119.

**Offen / Empfehlung für DL 4**
1. Weitere Kategorien: Schwiegereltern (6) + Ex-Partner:in/Co-Parenting (6) → ~67 Konflikte, ~145 Inhaltsseiten.
2. Trainer-Szenarien für Geschwister/WG (+6), Eskalations-Check (Glasl) als 2. Spiel.
3. Kategorie-Hubs `/konflikt/<kat>/` und `/ratgeber/<kat>/` mit Einleitungstext + FAQ anreichern.

---

## Durchlauf 4 – 2026-09-30
**Fokus:** Q4-Saison (Weihnachten = RPM-Spitze), zwei weitere Kategorien, zweites Spiel.

**Erledigt**
- **Neues Themen-Silo** `/themen/` + `/themen/<slug>/` (5 Leitartikel à ca. 1.700–1.900 Wörter):
  Streit an Weihnachten (saisonal, `season: 'weihnachten'`), Streit in der Beziehung,
  Konfliktgespräch am Arbeitsplatz, Nach dem Streit versöhnen, Streit schlichten.
  Daten `src/data/topics/`, Format `docs/loop/THEMEN-FORMAT.md`.
- **Refactoring:** `src/components/GuideArticle.astro` ist jetzt die gemeinsame Vorlage für Methoden und Themen
  (Kicker, Breadcrumb, Überschriften je Silo; bis zu 2 Anzeigenplätze bei langen Artikeln).
- **2 neue Kategorien, je 6 Konflikte:**
  - Schwiegereltern: schwiegermutter-kritisiert, mischen-sich-in-erziehung-ein, kommen-unangemeldet,
    partner-steht-nicht-hinter-mir, feiertage-aufteilen (Weihnachten!), mag-mich-nicht
  - Ex-Partner:in (`ex-partner`): jede-nachricht-eskaliert, streit-bei-der-uebergabe, redet-schlecht-vor-kindern,
    kosten-fuer-die-kinder, neue-partnerschaft, gemeinsame-freunde – mit besonders deutlicher Sicherheitsweiche
    (Gewalt/Stalking nach Trennung, keine Rechtsberatung zu Sorge-/Umgangsrecht/Unterhalt).
- **Eskalations-Check** `/spiel/eskalations-check/` (2. Spiel): 3 Sicherheitsfragen (jedes „Ja“ → „Sicherheit geht vor“
  + Krisenhilfe, unabhängig vom Rest) + 8 Aussagen mit Stufen nach Glasl → 4 Ergebnisbänder
  (Gesprächsbereit / Angespannt / Verhärtet / Hilfe von außen) mit passenden Links. Ohne JS: Legende zur
  Selbsteinordnung. Nichts wird gespeichert. Glasl-Methodenseite verlinkt den Check.
- Konfliktseiten zeigen passende Themen-Artikel („Mehr Hilfe zum Thema“) via `getTopicsForConflict`.
- Startseite: Saison-Banner „Streit an Weihnachten?“ (erscheint automatisch, solange ein Thema `season: 'weihnachten'` hat),
  Kategorie-Grid 5-spaltig ab 640 px (10 Kategorien). Footer: Themen, Eskalations-Check. Spiel-Hub: 3 Karten.
- `validate-data.mjs`: prüft jetzt auch Themen und **verwaiste Konflikte** (Fehler statt stiller Lücke).

**Lernerfahrung:** Kategorien erst in `categories/index.js` registrieren, wenn alle Konflikt-Dateien existieren –
sonst bricht der Slug-Befehl der parallel arbeitenden Agenten ab.

**Kennzahlen nach DL 4:** 67 Konflikte in 10 Kategorien, 8 Methoden, 5 Themen, 2 Spiele (18 Trainer-Szenarien),
181 HTML-Seiten, 5.976 interne Links, alle Prüfungen grün, 0 Audit-Findings.
Inhaltsseiten mit Substanz ≈ 67 × 2 + 8 + 5 + 2 = **149** → AdSense-Antragsschwelle (≈150) praktisch erreicht.

**Offen / Empfehlung für DL 5**
1. Trainer-Szenarien für Geschwister, WG, Schwiegereltern, Ex (+8–12), „5 zufällige Situationen“-Modus.
2. Kategorie-Hubs (`/konflikt/<kat>/`, `/ratgeber/<kat>/`) mit Einleitung + FAQ anreichern (dünnste Seiten der Site).
3. Weitere Saison-/Evergreen-Themen: „Streit im Urlaub“, „Silvester/Neujahr: Vorsätze & Konflikte“, „Mobbing am Arbeitsplatz – erste Schritte“.
4. Druckansicht „Gesprächsplan drucken“ (Linkmagnet, Verweildauer).

---

## Durchlauf 5 – 2026-09-30 (Start 22:5x, fortgesetzt 23:07)
**Fokus:** dünne Seiten aufwerten, Nutzerführung (Suche, Druck), mehr Themen und Trainer.

**Zwischenfall:** Alle 6 Agenten brachen zunächst mit **API-Sitzungslimit (HTTP 429)** ab. Nach dem Reset (23:00)
per `SendMessage` fortgesetzt – nichts war halb geschrieben. **Empfehlung:** pro Durchlauf höchstens 5–6 Agenten,
große Content-Batches auf mehrere Durchläufe verteilen.

**Erledigt**
- **Kategorie-Hubs aufgewertet** (20 Seiten): Texte in `src/data/hubs/<id>.js` (Format `docs/loop/HUB-FORMAT.md`),
  geladen über `src/data/hubs/index.js` (`import.meta.glob`, fehlende Dateien erlaubt).
  - Tool-Hub `/konflikt/<id>/`: Long-Tail-H1, eigene Meta, 2 Absätze Intro, „Drei Sofort-Tipps“, Link zum Ratgeber-Hub,
    **Breadcrumbs ergänzt** (fehlten bisher – CHALLENGE-Pflicht).
  - Ratgeber-Hub `/ratgeber/<id>/`: eigene H1/Meta, 3 Absätze Intro, 4 FAQ + FAQPage-JSON-LD, Link zum Tool-Hub.
- **5 neue Themen** (je ca. 1.500–2.000 Wörter): Mobbing am Arbeitsplatz (`adsSensitive: true`), Nein sagen lernen,
  Schweigen als Strafe (mit Kontroll-/Gewalt-Abgrenzung), Streit per WhatsApp, Streit im Urlaub (`season: 'sommer'`).
- **Saison-Logik** `isInSeason()`/`getSeasonalTopics()` in `src/data/topics/index.js`: Weihnachten Sep–Dez, Sommer Mai–Aug,
  nach Build-Datum. Startseiten-Banner und „Gerade aktuell“ auf `/themen/` richten sich danach → **regelmäßig deployen**.
- **Trainer: 30 Szenarien** (+12 für Geschwister, WG, Schwiegereltern, Ex).
- **Seitensuche** `/suche/` (Lupe im Header, Link auf 404): alle Einträge statisch gerendert (ohne JS = A–Z-Übersicht),
  Live-Filter mit Umlaut-Normalisierung, `?q=` teilbar. Kein externer Dienst.
- **Druckansicht** „Gesprächsplan drucken“ auf jeder Tool-Seite: druckt Übersicht + beide Wege, klappt `<details>` auf,
  blendet Header/Footer/Werbung/Feedback aus (`@media print` im Layout + Tool-Seite).
- `validate-data.mjs` prüft jetzt auch Hub-Dateien.

**Kennzahlen nach DL 5:** 67 Konflikte, 10 Kategorien mit Hub-Texten, 8 Methoden, 10 Themen, 30 Trainer-Szenarien,
187 HTML-Seiten, 6.512 interne Links, alle Prüfungen grün, 0 Audit-Findings.

**Offen / Empfehlung für DL 6**
1. Neue Kategorie **Kinder & Teenager** (Eltern-Perspektive, 6–7) – hohes Suchvolumen („Streit mit Teenager“, „Kind hört nicht“).
2. Konflikt-Seiten: `seoTitle` für die holprigsten 15 Titel pflegen (siehe IDEEN P1).
3. „Konflikt des Tages“ / Frische-Signal auf der Startseite, Title-Längen-Check im Linkprüfer.

---

## Durchlauf 6 – 2026-09-30/10-01
**Fokus:** neue, stark gesuchte Kategorie + CTR-Hebel (Seitentitel) + Nutzwert-Features. Nur 4 Agenten (Budget).

**Erledigt**
- **Neue Kategorie Kinder & Teenager** (`kinder`, Eltern-Perspektive, 6 Konflikte): handyzeit, hausaufgaben,
  respektloser-ton, zimmer-aufraeumen, ausgehzeiten, geschwisterstreit. Nur freigegebene Notrufnummern
  (bewusst **keine** weiteren Hilfetelefone ergänzt, da CHALLENGE nur die verifizierte Liste erlaubt);
  Jugendamt/Erziehungsberatung allgemein. Hub-Text `src/data/hubs/kinder.js` selbst geschrieben.
- **2 neue Methoden:** Vier-Ohren-Modell (Schulz von Thun), Feedback geben → 10 Methoden.
- **Kurze SEO-Titel** für alle 73 Tool-Seiten: `src/data/seo-titles.js` (≤ 48 Zeichen + Marke). Vorher 60–114 Zeichen.
  Ratgeber-Seiten: Kopf der Artikelüberschrift, sonst Suchphrase + „: Warum & was hilft“; optional `article.seoTitle`.
  Übersichtsseiten gekürzt. **Linkprüfer warnt jetzt bei `<title>` > 70 Zeichen** → aktuell 0 Warnungen.
- **„Satz kopieren“** unter jeder Skriptvariante (nur mit Clipboard-API sichtbar).
- **Trainer:** Standard ist jetzt „Schnelle Runde: 5 zufällige Situationen“; Deep-Link `#bereich-<kategorie>`
  (inkl. `hashchange`). Tool-Hubs verlinken „Üben: N Situationen mit …“.
- Startseite: „Häufige Konflikte“ + Handyzeit + Feiertage bei Schwiegereltern; Grid 4-spaltig (11 Kategorien).

**Kennzahlen nach DL 6:** 73 Konflikte in 11 Kategorien, 10 Methoden, 10 Themen, 2 Spiele (30 Szenarien),
203 HTML-Seiten, 7.085 interne Links, Daten-/Link-/Titelprüfung grün, 0 Audit-Findings.

**Offen / Empfehlung für DL 7**
1. Trainer-Szenarien für `kinder` (+3–6); Hub-Übersicht zeigt dann auch dort „Üben“.
2. Konflikttyp-Quiz („Wie streitest du?“) als 3. Spiel – teilbar, Social-Traffic.
3. Vorlagen-Seiten (druckbar): WG-Putzplan, Familienrat-Protokoll, Co-Parenting-Kostenliste.
4. Performance-Check (Lighthouse lokal) und Bild-/CSS-Größe prüfen – Core Web Vitals sind Ranking- und RPM-Faktor.

---

## Durchlauf 7 – 2026-10-01 (Mindestziel erreicht)
**Fokus:** drittes Spiel (teilbar), Vorlagen als Linkmagnet, Trainer komplett, Performance & Marke.

**Erledigt**
- **Konflikttyp-Test** `/spiel/konflikttyp/` (3. Spiel): 10 Alltagssituationen × 5 Antworten → einer von 5 Stilen
  (Rückzug, Harmonie, Klarheit, Brücke, Team) inkl. Gleichstand, Verteilung, Stärken/Risiken/Tipps, Methodenlinks.
  „Ergebnis teilen“ via Web-Share-API bzw. Kopieren (nur Stilname + Link, keine Antworten). Ohne JS: Legende
  zur Selbsteinordnung. Daten `src/data/quiz.js`. Ausdrücklich als Selbstreflexion, keine Diagnose, keine Markennamen.
- **Vorlagen-Silo** `/vorlagen/` + 4 druckbare Vorlagen (`src/data/vorlagen.js`): Gespräch vorbereiten (Checkliste
  mit Sicherheits-Check), Familienrat-Protokoll, WG-Vereinbarung (mit Putzplan-Tabelle, Feld `table`),
  Vereinbarung nach Streit. Papier statt Eingabefelder → keine Datenverarbeitung. Jede Tool-Seite verlinkt
  „Checkliste: Gespräch vorbereiten“.
- **Trainer: 36 Szenarien** (+6 für `kinder`) – alle 11 Kategorien abgedeckt.
- **Marke:** neues Favicon (SVG, Sprechblase mit zwei Punkten, Markengrün/Orange) statt Emoji-Favicon,
  `apple-touch-icon.png` (180 px), `theme-color`.
- **Performance-Check:** Tool-Seite ≈ 9 KB gzip HTML + 1 CSS-Datei (≈ 10 KB), keine Webfonts, keine Bilder,
  kaum JS → Core Web Vitals unkritisch. Größte Seiten: Trainer (108 KB roh), Suche (85 KB roh) – ok.
- Footer, Spiel-Hub (4 Karten), Startseite und Suche um Quiz und Vorlagen ergänzt.

**Kennzahlen nach DL 7:** 73 Konflikte / 11 Kategorien, 10 Methoden, 10 Themen, 3 Spiele (36 Trainer-Szenarien),
4 Vorlagen, 209 HTML-Seiten, 7.982 interne Links, alle Prüfungen grün, 0 Audit-Findings.

**Offen / Empfehlung für DL 8–10 (optional)**
1. Glossar `/glossar/` (30–40 Begriffe, kurz, stark verlinkt) – viele Long-Tail-Einstiege mit wenig Aufwand.
2. Weitere Kategorie mit kaufkräftigem Werbeumfeld: **Kund:innen & Dienstleister** oder **Vermieter:in**.
3. `favicon.ico` aus neuem SVG erzeugen (sharp kann kein ICO – z. B. PNG-in-ICO manuell schreiben).
4. OG-Bilder pro Silo (Methoden/Themen) für bessere Social-CTR.

---

## Durchlauf 8 – 2026-10-01 (optional)
**Fokus:** Long-Tail über Glossar, kaufkräftige Kategorie Wohnen/Miete, Marken-Details.

**Erledigt**
- **Glossar** `/glossar/` – bewusst **eine** umfangreiche Seite (40 Begriffe, A–Z-Sprungleiste, `DefinedTermSet`-JSON-LD,
  Anker `#<slug>`, Links zu Methoden/Themen/Konflikten) statt 40 dünner Einzelseiten (AdSense „Thin Content“).
  Daten `src/data/glossar.js`; Begriffe auch in der Suche (`/glossar/#slug`) und in `validate-data.mjs` geprüft.
- **Neue Kategorie Vermieter:in** (`vermieter`, 6 Konflikte): reparatur-verschleppt, nebenkostenabrechnung, schimmel,
  kommt-unangemeldet, mieterhoehung-gespraech, kaution-zurueck. Strikt **ohne Mietrechtsberatung** (kein §, keine Fristen,
  Beträge, „zulässig/Pflicht“) – Kommunikation + Dokumentation + Verweis auf Mieterverein/Beratung. Musternachrichten
  mit Einsetz-Feldern wie „[Datum]“. Hub-Text `src/data/hubs/vermieter.js`, SEO-Titel ergänzt.
- **favicon.ico** aus dem neuen SVG erzeugt (PNG-in-ICO, 48 px) – alle Icon-Varianten jetzt markenkonsistent.
- Footer: Glossar.

**Kennzahlen nach DL 8:** 79 Konflikte in 12 Kategorien, 10 Methoden, 10 Themen, 40 Glossarbegriffe, 3 Spiele
(36 Szenarien), 4 Vorlagen, 224 HTML-Seiten, 8.904 interne Links, alle Prüfungen grün, 0 Audit-Findings.

**Offen / Empfehlung für DL 9–10**
1. Trainer-Szenarien für `vermieter` (+3–6).
2. Weitere Themen mit hohem Suchvolumen: „Streit mit der Schwiegermutter“ ist abgedeckt – offen: „Konflikte im Team lösen“
   (Führungskräfte-Perspektive, B2B-RPM), „Mediation: Ablauf & Kosten allgemein“, „Trennung im Guten“.
3. Übergabe-Notizen (später in `STRATEGIE.md` §7 überführt): kompakte Übergabe an Hermes/Betreiber (Deploy-Checkliste, AdSense-Schritte, Pflege).

---

## Durchlauf 9 – 2026-10-01 (optional)
**Fokus:** Lücken schließen, Qualitäts-/Sicherheits-Audit, Übergabe vorbereiten.

**Erledigt**
- **3 neue Themen** (je ca. 1.800–2.000 Wörter): Konflikte im Team lösen (Führungskräfte, B2B-Umfeld),
  Trennung im Guten (`adsSensitive: true`, Sicherheitsabschnitt zuerst), Mediation einfach erklärt → 13 Themen.
- **Trainer: 42 Szenarien** (+6 `vermieter`) – alle 12 Kategorien abgedeckt.
- **Bugfix Werbesperre:** `GuideArticle.astro` übergibt jetzt `noAds` bei `adsSensitive` an das Layout. Vorher wurden auf
  sensiblen Methoden/Themen nur die Slots ausgeblendet, das AdSense-Script (→ Auto-Ads!) aber geladen.
  Mit Dummy-Kennung verifiziert. Zusätzlich „Schweigen als Strafe“ als sensibel markiert.
- **Audit:** keine Platzhalter/TODO/Lorem in `src/`; im HTML ausschließlich freigegebene Nummern; Sitemap 223 URLs ohne 404.
- **Übergabe-Notizen (später in `STRATEGIE.md` §7 überführt)**: Deploy-Checkliste für Hermes, AdSense-Aktivierung Schritt für Schritt, werbefreie Seiten,
  Rechts-Hinweis (Legal-Texte gegenprüfen lassen), Pflege-Regeln.

**Kennzahlen nach DL 9:** 79 Konflikte / 12 Kategorien, 10 Methoden, 13 Themen, 40 Glossarbegriffe,
3 Spiele (42 Szenarien), 4 Vorlagen, 227 HTML-Seiten, 9.046 interne Links, alle Prüfungen grün, 0 Audit-Findings.

**Plan DL 10 (letzter):** Abschluss-Politur, finaler Gesamt-Check, README/Doku finalisieren, Cron-Job beenden.

---

## Durchlauf 10 – 2026-10-01 (letzter, Loop beendet)
**Fokus:** Abschluss-Politur, Gesamt-Check, Übergabe.

**Erledigt**
- Cron-Job `00bb1ec2` per `CronDelete` beendet (Loop-Vorgabe: max. 10 Durchläufe).
- Startseite: Leiste „Mehr entdecken“ (Themen, Methoden, Üben, Vorlagen, Glossar, Suche).
- „Über uns“ listet alle Bereiche mit dynamischen Zahlen (Konflikte, Kategorien, Methoden, Themen, Übungen, Vorlagen, Glossar).
- Gesamt-Check: `npm run verify` grün (227 HTML-Seiten, 9.052 interne Links, 0 Titel-/Canonical-Warnungen),
  0 Audit-Findings, keine JS-Konsolenfehler auf Start, Tool-Seite, Trainer, Eskalations-Check, Konflikttyp-Test,
  Suche und Vorlage.

## Gesamtbilanz Loop (DL 1–10)
| Kennzahl | Start | Ende |
|---|---|---|
| Konflikte (Tool + Ratgeber) | 36 / 6 Kategorien | 79 / 12 Kategorien |
| Methoden | 0 | 10 |
| Themen-Leitartikel | 0 | 13 |
| Spiele / Übungen | 0 | 3 (Trainer mit 42 Szenarien, Eskalations-Check, Konflikttyp-Test) |
| Vorlagen | 0 | 4 |
| Glossarbegriffe | 0 | 40 |
| HTML-Seiten | 91 | 227 |
| Interne Links | ~1.950 | ~9.050 |
| Qualitätssicherung | keine | Daten-, Link-, Titel-, Canonical-, Orphan-, Nummernprüfung |
| Monetarisierung | – | AdSense-ready (env-gesteuert, sensible Seiten gesperrt) |

**Nächster Schritt liegt beim Menschen:** Hermes reviewt/deployt , Betreiber richtet Search Console
und AdSense ein (`STRATEGIE.md` §7) und lässt die Rechtstexte gegenprüfen .

---

## Livegang-/SEO-Runde – 2026-10-05 (vor dem ersten Push des Ausbaus)
Nach den Skills `website-livegang` und `website-seo-pflege`.

**Befunde und Korrekturen (jeweils mit neuer Prüfung, gegengetestet)**
- Impressum/Datenschutz waren indexierbar und in der Sitemap → `noindex, follow`, Sitemap-Filter in `astro.config.mjs`.
  Prüfung: `scripts/check-launch.mjs` (Sitemap ↔ noindex in beide Richtungen).
- Titel-Grenze war 70 (in Layout und Prüfung gleich falsch) → Google kürzt bei ~60. Layout hängt die Marke nur an, wenn sie passt;
  `check-links.mjs` warnt > 60.
- 67 Meta-Descriptions > 160 Zeichen → `fitDescription()` im Layout kürzt auf ganze Sätze (≤ 158); Prüfung warnt > 160.
- 10 doppelte Titel Tool ↔ Ratgeber → Ratgeber-Titel weicht aus („: Ursachen & Lösungen“); Prüfung auf doppelte Titel.
- 10 Stellen mit „rund um die Uhr“ im selben Satz wie das Männerhilfetelefon (CHALLENGE verbietet pauschale Zeiten) →
  Sätze getrennt; `validate-data.mjs` prüft das jetzt.
- Favicons in Vielfachen von 48 fehlten → `scripts/gen-icons.mjs` (eine Quelle: `public/favicon.svg`), 32/48/96/180 + ICO.
- `llms.txt` (aus Daten erzeugt), Datenschutz neu gegliedert (Kurzfassung, zentrale Nummern, Search Console als
  Nicht-Verarbeitung, Speicher-Tabelle, keine automatisierte Entscheidung).
- Über uns/Glossar aus Inhalten verlinkt (E-E-A-T); alle Inhaltsseiten ≥ 3 eingehende Links.

**GEO-Audit (geo-optimizer) – Vorher:** Live-Startseite (alter Stand) **33/100, critical** (robots 15, llms 0, schema 0,
meta 14, content 2). Nachher-Messung mit derselben Adresse nach dem Deploy.
**Fehlalarme (nicht umgesetzt):** `/.well-known/ai.txt`, `/ai/*.json` (kein Standard), „dünne Seiten“ bei Kontakt/Krisenhilfe/Übersichten.

**Deploy 2026-10-05:** 1. Versuch scheiterte an `npm ci` (Lockfile mit npm 11 erzeugt, Actions nutzt npm 10) →
Lockfile mit `npx npm@10 install --package-lock-only` neu erzeugt. **Regel:** Lockfile-Änderungen immer mit npm 10 erzeugen
und `npm ci` in sauberer Kopie testen. Live geprüft: 224/224 Sitemap-URLs 200, Icons/llms.txt/robots 200, Canonical korrekt,
Impressum noindex, Googlebot 200, Adressen ohne Slash → 301 auf die Slash-Fassung (konsistent).

**GEO-Audit nachher (gleiche Adressen):** Startseite 33 → **61**; Ratgeber 70, Methode 68, Thema 69 („good“); Über uns 53.
Danach ergänzt: sichtbare Redaktionszeile (rel=author → Über uns), `Person` mit fester `@id` (`src/config/site.ts`,
`AUTHOR_SCHEMA`) in allen Article-Schemas, `AboutPage`-Schema auf Über uns.
**Offen, nur Betreiber kann liefern:** `sameAs`-Profile (z. B. LinkedIn) für die Person-Entität.

---

## Messung vorbereitet – 2026-10-07
- Cloudflare Web Analytics (`PUBLIC_CF_ANALYTICS_TOKEN`, cookielos) und GA4 (`PUBLIC_GA_ID`, Einwilligung vor dem Laden)
  über `src/components/Analytics.astro`; Workflow reicht beide Variablen durch. Aktivierung: `STRATEGIE.md` §8.
- Datenschutzerklärung: Abschnitte, Kurzfassung und Speicher-Tabelle bedingt; Widerruf-Knopf (`data-consent-reset`).
- Neue Livegang-Blocker (gegengetestet): Messung ↔ Datenschutz-Abschnitt, GA direkt eingebunden, Messung/Banner auf
  `/hilfe-in-krisen/`, Test-Kennungen. Erster Lauf fand das versteckte Banner auf der Krisenseite → behoben.
- Browser-Test mit Test-Kennung (nur lokal): Banner vor Entscheidung, kein GA vor Zustimmung, „Ablehnen“ gespeichert,
  Widerruf auf der Datenschutzseite, GA-Config mit anonymize_ip/ohne Signale nach Zustimmung.
- `npm audit` (source-map-js, high) mit npm 10 behoben.

---

## Mini-Loop (5 Durchläufe) – ab 2026-10-07
Auftrag: offensichtlichste, schnellste Verbesserungen, genau 5 Durchläufe, keine SEO-Fehler. Cron `2-59/5 * * * *`
(Job ec258ed4), nach Durchlauf 5 beenden. Jeder Durchlauf: verify + audit grün → commit + push → Deploy prüfen.

### Mini 1
- H1 der Tool-Seiten mit Kontext: 14 Konflikte mit kurzen Titeln („Hört nicht zu“, „Kritisieren ständig“) bekommen die
  Suchphrase aus `seo-titles.js` als H1, sichtbar geschlechtergerecht („Partner:in hört nicht zu“). Löst auch doppelte H1
  (partner/freunde „Hört nicht zu“). Build-Audit: nur bekannte Fehlalarme.

### Mini 2
- Sitemap mit `lastmod` aus echten Inhaltsdaten (`published`/`updated` der Konflikte, Methoden, Themen) via
  `serialize` in `astro.config.mjs`; Übersichtsseiten ohne lastmod (kein ehrliches Datum). 181/224 URLs.
  Neue Livegang-Prüfung: lastmod gültig und nicht in der Zukunft. Regel: `updated` nur bei inhaltlicher Änderung setzen.

### Mini 3
- Inhaltsverzeichnis mit Sprungmarken in allen 79 Ratgeberartikeln (Abschnitts-IDs situation, ursachen, fehler,
  strategie, beispiele, hilfe, faq; nur vorhandene Abschnitte erscheinen).
- `check-links.mjs` prüft jetzt Sprungmarken (gleiche und andere Seite) gegen die IDs im Build; gegengetestet.
  Ausnahme: `#bereich-…` im Trainer (entsteht per JS-Filter, kein Element).

### Mini 4
- „Neu im Ratgeber“ (6 neueste nach `updated`/`published`) auf `/ratgeber/` – Frische-Signal + interne Links.
- Breadcrumbs (+ BreadcrumbList) auf `/ratgeber/` und `/konflikt/`.
- Kontext-Titel zentral in `src/data/display-title.js`: H1 der Tool-Seite und letzter Breadcrumb (Tool + Ratgeber) identisch.
- Deko-Emojis vor Überschriften `aria-hidden` (Konfliktseite, Hubs, Übersichten).

### Mini 5 (letzter, Cron ec258ed4 beendet)
- GitHub Actions auf aktuelle Hauptversionen (checkout v7, setup-node v7, upload-pages-artifact v5, deploy-pages v5) –
  beseitigt die Node-20-Abkündigungswarnung. Breaking Changes geprüft: Cache ist explizit `npm`, keine Dotfiles im Build
  (upload-pages-artifact ≥ v4 lässt sie weg), CI pusht nicht (Credential-Änderung in checkout v6 irrelevant).
- Abschlussprüfung live: Sitemap-URLs, Canonical, noindex der Rechtstexte (siehe unten im Commit-Verlauf).

**Bilanz Mini-Loop:** Kontext-H1 (14 Seiten), Sitemap-lastmod (181 URLs), Inhaltsverzeichnis in 79 Ratgebern,
Sprungmarken-Prüfung, „Neu im Ratgeber“, Breadcrumbs auf Übersichten, konsistente Titel, a11y-Emojis, Actions-Update.
Jede Änderung mit verify + audit grün, live geprüft.

---

## SEO-Abstrafungsschutz – 2026-10-08 (Branch `seo/abstrafungsschutz`, nicht deployt)
Grundlage: vollständige Prüfung (23 Punkte, Bericht im Chat). Umgesetzt ohne Rückfrage, auf eigenem Branch.

**Inhalt / Abstrafungsschutz**
- **Kannibalisierung Tool ↔ Ratgeber (79 Paare):** Ratgeber bekommen eigene Warum-Titel (`ratgeberTitle` in
  `src/data/quick-answers/<kat>.js`, z. B. „Warum Partner nicht zuhören – und was hilft“); Tool behält „…: So sprichst du es an“.
  Prüfungen: `validate-data.mjs` (Titelanfang Tool ≠ Ratgeber), `check-links.mjs` (gleicher Titelanfang auf 2 indexierbaren Seiten).
- **Antwort zuerst (C17):** „Kurz gesagt“-Box ganz oben auf allen 79 Tool- (Was sage ich?) und 79 Ratgeberseiten
  (Warum + was hilft) sowie Methoden/Themen (`summary`). Format: `docs/loop/QUICK-ANSWERS-FORMAT.md`.
- **Belege (A5):** `src/data/sources.js` mit verifizierten Quellen + Prüfdatum (CNVC/Rosenberg, Gordon P.E.T. 1970,
  Rogers & Farson 1957, Schulz von Thun 1981, Fisher/Ury 1981, Glasl/Haupt). Methoden zeigen „Quellen“ + `citation`
  im Article-Schema; Methoden ohne Urheber einen ehrlichen Hinweis. Krisenseite: Quellenblock, Nummern und
  Erreichbarkeit am 08.10.2026 auf den offiziellen Seiten geprüft (Männerhilfetelefon Mo–Do 8–20, Fr 8–15;
  WEISSER RING täglich 7–22).
- **Ehrliche Urheberschaft:** Autorenzeile „KI-gestützt erstellt, verantwortet von …“ (102 Artikel), „Über uns“ und
  `llms.txt` beschreiben die KI-Erstellung offen.
- **Kannibalisierung Übersicht ↔ Thema:** `/konflikt/partner/` umbenannt („Konflikte mit dem Partner: Gesprächspläne …“),
  Hubs verlinken passende Themen (`hub.topic`); Methoden verlinken Themen, die sie nutzen (z. B. Grenzen setzen ↔ Nein sagen).
- **Dünne Seiten:** `/suche/` noindex + aus Sitemap; `/spiel/`, `/vorlagen/`, `/kontakt/`, `/hilfe-in-krisen/` mit echtem
  Nutzen erweitert (keine Fülltexte).

**Technik**
- Description ≤ 155 (Layout + Prüfung), Überschriften-Sprung h1→h3 in Ratgebern behoben + Prüfung auf Sprünge,
  Links im Fließtext unterstrichen (a11y), `lastmod` für alle 223 Sitemap-URLs (Inhaltsdaten bzw. Git-Datum der Quelle;
  Workflow `fetch-depth: 0`) + Blocker bei fehlendem lastmod.

**Ergebnis:** verify/audit grün ohne Warnungen; Build-Audit: 0 Titel > 60, 0 Description > 155, 0 Sprünge, 0 doppelte
Titel/Descriptions; Lighthouse (lokal, mobil) 100/100/100/100 auf Start, Tool, Ratgeber, Methode.

**Offen (nur Betreiber):** DNS-Eintrag `www` → GitHub Pages; echte redaktionelle Durchsicht der wichtigsten Seiten
mit eigenen Beispielen/Erfahrungen (größter verbleibender Hebel gegen „Scaled Content“).
