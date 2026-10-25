# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Erwachsene im deutschsprachigen Raum, die gerade mitten in einem Alltagskonflikt stecken: mit Partner:in, Chef:in,
Kolleg:innen, Eltern, Geschwistern, Freund:innen, Nachbar:innen, Mitbewohner:innen, Schwiegereltern, Ex-Partner:in,
den eigenen Kindern oder Vermieter:in. Sie kommen meist zum ersten Mal, über Google oder eine KI-Suche, oft am Handy
und emotional aufgewühlt. Ihre Aufgabe: herausfinden, was sie konkret sagen sollen, in welcher Reihenfolge, und wann
ein Gespräch nicht mehr der richtige Weg ist. Sie kennen die Seite und den Betreiber nicht und brauchen deshalb
sofort einen Grund, dem Inhalt zu vertrauen.

## Product Purpose

Konfliktlotse gibt konkrete Gesprächshilfen für Alltagskonflikte: Sätze, die man wörtlich sagen kann, einen Ablauf,
Antworten auf typische Gegenreaktionen und eine klare Grenze. Ziel ist, das größte deutschsprachige Portal für
Alltagskonflikte zu werden. Erfolg heißt: Besucher finden über die Suche die passende Seite, nehmen einen
umsetzbaren Plan mit und klicken zu verwandten Inhalten weiter. Finanzierung über Google AdSense (noch nicht aktiv);
das Angebot ist kostenlos und soll es bleiben.

## Positioning

Konkret statt allgemein: Jeder Konflikt hat einen eigenen Gesprächsplan mit drei Tonlagen (sanft, direkt, sachlich),
einen Modus für das gemeinsame Gespräch beider Seiten und einen erklärenden Ratgeber. Dazu kommen Übungen, die nur im
Browser laufen. Sicherheit geht vor Harmonie: Jede Seite benennt, wann es kein Alltagskonflikt mehr ist, und verweist
auf geprüfte Hilfsangebote.

## Operating Context

- Inhaltstypen: Gesprächspläne (`/konflikt/<bereich>/<thema>/`), Ratgeber (`/ratgeber/…`), Methoden
  (`/methoden/…`), Themen-Leitartikel (`/themen/…`), Vorlagen zum Ausdrucken (`/vorlagen/…`), Glossar,
  Übungen unter `/spiel/` (Gesprächs-Trainer, Eskalations-Check, Konflikttyp-Test, Ich-Botschaft-Baukasten).
- Gesprächspläne werden kopiert (Kopieren-Knöpfe) und ausgedruckt (Druckansicht).
- Inhalte sind datengetrieben in `src/data/`; Regeln für neue Inhalte in `docs/loop/CONTENT-LEITFADEN.md`.

## Capabilities and Constraints

- Statische Astro-Seite auf GitHub Pages, Domain `https://konfliktlotse.app/`, Links funktionieren am Domain-Root.
- Keine Konten, keine Formulare, keine Eingabe von Konfliktdetails; Übungen werten nur im Browser aus.
  Feedback ausschließlich per `mailto:`.
- Keine Cookies und kein lokaler Speicher, solange Analytics und AdSense nicht aktiviert sind. Beides wird nur über
  Umgebungsvariablen eingeschaltet; GA nur mit Einwilligung. Vor AdSense ist eine zertifizierte CMP (TCF) nötig.
- Werbefrei bleiben: Hilfe in Krisen, Rechtstexte, Kontakt, 404 und als sensibel markierte Themen
  (`adsSensitive`/`noAds`).
- SEO-Regeln: Titel ≤ 60 Zeichen, Descriptions 110–155 Zeichen, keine Änderung, die das Abstrafungsrisiko erhöht
  (kein Massen-Update von Daten, keine Massen-KI-Seiten ohne eigene Suchintention).
- Jede Änderung: `npm run verify` und `npm audit` grün, dann Push auf `main`.

## Brand Commitments

- Name „Konfliktlotse“, Zeichen 🕊️.
- Ansprache: respektvolles Du, geschlechtergerecht mit Doppelpunkt (Partner:in, Kolleg:innen).
- Ton: ruhig, konkret, ohne Ferndiagnosen über das Gegenüber, beide Seiten ernst nehmen.
- Das vorhandene visuelle Erscheinungsbild bleibt (Entscheidung 2026-10-22).

## Evidence on Hand

- Betreiber: Serdar Thomas Freimoser, München (Impressum, `/ueber-uns/`). **Keine Fachqualifikation** in Mediation,
  Coaching oder Psychologie – nirgends eine solche behaupten.
- Texte werden mit KI-Werkzeugen erstellt und vom Betreiber verantwortet; das steht offen auf der Seite.
- Belege, die es gibt: Quellen mit Prüfdatum zu Methoden und Hilfetelefonen (`src/data/sources.js`), feste Liste
  geprüfter Notrufnummern (`docs/loop/CONTENT-LEITFADEN.md`), sichtbares Aktualisierungsdatum auf Inhaltsseiten.
- Es gibt **keine** Erfahrungsberichte, Nutzerzahlen, Bewertungen, Presse oder Auszeichnungen. Nichts davon erfinden.

## Product Principles

1. Konkret statt allgemein: Jede Seite liefert Sätze, die man heute noch sagen kann.
2. Sicherheit vor Harmonie: Gewalt, Drohungen, Kontrolle und Stalking sind keine Kommunikationsprobleme; der Weg zu
   Hilfe ist immer sichtbar.
3. Ehrlich über Grenzen und Herkunft: keine Einzelberatung, keine Rechts- oder Therapieauskünfte, keine erfundenen
   Studien, Zahlen oder Erfahrungsberichte; KI-Erstellung wird offen genannt.
4. Datensparsam: nichts eingeben, nicht anmelden, nichts preisgeben müssen.
5. Vertrauen beim Erstbesuch verdienen: Quellen, Prüfdaten und Transparenz statt Behauptungen.

## Accessibility & Inclusion

Besucher sind oft gestresst und am Handy: kurze Absätze, klare Reihenfolge, große Tippflächen (mind. 44 px),
lesbarer Kontrast, Inhalte auch ohne JavaScript lesbar (interaktive Teile dürfen JS brauchen). Geschlechtergerechte
Sprache. Reduzierte Bewegung wird respektiert.
