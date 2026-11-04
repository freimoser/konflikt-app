---
name: Konfliktlotse
description: Ruhige, konkrete Gesprächshilfen für Alltagskonflikte – waldgrün, hell, kartenbasiert, ohne Framework.
colors:
  primary: "#2D6A4F"
  primary-light: "#40916C"
  primary-dark: "#1B4332"
  accent: "#F4A261"
  accent-light: "#F8B878"
  mint-wash: "#F0F7F4"
  mint-border: "#D8EDE2"
  mint-badge: "#E8F5E9"
  apricot-wash: "#FFF3E0"
  apricot-border: "#FFE0B2"
  apricot-text: "#9A3A00"
  caution-wash: "#FFF3CD"
  caution-stripe: "#FFC107"
  caution-text: "#664D03"
  caution-link: "#7A5A00"
  amber-text: "#9C6500"
  alarm: "#E63946"
  alarm-wash: "#FFF5F5"
  bg: "#F8F9FA"
  bg-white: "#FFFFFF"
  text: "#1B1B1B"
  text-light: "#5A5A5A"
  border: "#E0E0E0"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "2.2rem"
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.3
  title-sm:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-reading:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1.5
  caption:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  focus: "4px"
  sm: "8px"
  md: "12px"
  pill: "20px"
  full: "50%"
spacing:
  2xs: "0.25rem"
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "1.5rem"
  2xl: "2rem"
  3xl: "2.5rem"
  4xl: "3rem"
components:
  button-action:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0.9rem 2rem"
  button-action-hover:
    backgroundColor: "{colors.accent-light}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "0.9rem 2rem"
  button-outline-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg-white}"
  button-secondary:
    backgroundColor: "{colors.bg-white}"
    textColor: "{colors.primary-dark}"
    rounded: "{rounded.sm}"
    padding: "0.6rem 1.25rem"
  button-secondary-hover:
    backgroundColor: "{colors.mint-wash}"
  button-solid:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg-white}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  button-solid-hover:
    backgroundColor: "{colors.primary-dark}"
  copy-button:
    backgroundColor: "transparent"
    textColor: "{colors.primary-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.8rem"
    height: "44px"
  copy-button-hover:
    backgroundColor: "{colors.mint-wash}"
  pill-related:
    backgroundColor: "{colors.bg-white}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.9rem"
    height: "44px"
  pill-related-hover:
    backgroundColor: "{colors.mint-wash}"
  badge-one:
    backgroundColor: "{colors.apricot-wash}"
    textColor: "{colors.apricot-text}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.75rem"
  badge-two:
    backgroundColor: "{colors.mint-badge}"
    textColor: "{colors.primary-dark}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.75rem"
  card-section:
    backgroundColor: "{colors.bg-white}"
    textColor: "{colors.text-light}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  answer-box:
    backgroundColor: "{colors.mint-wash}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1.1rem"
  callout-caution:
    backgroundColor: "{colors.caution-wash}"
    textColor: "{colors.caution-text}"
    rounded: "{rounded.sm}"
    padding: "1rem"
  callout-boundary:
    backgroundColor: "{colors.alarm-wash}"
    textColor: "{colors.text-light}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  teaser-card-warm:
    backgroundColor: "{colors.apricot-wash}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.1rem"
  mode-card:
    backgroundColor: "{colors.bg-white}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "1.5rem 1.25rem"
  mode-card-accent:
    backgroundColor: "{colors.mint-wash}"
  nav-link:
    textColor: "{colors.text-light}"
    typography: "{typography.label}"
    height: "44px"
  nav-link-hover:
    textColor: "{colors.primary}"
---

# Design System: Konfliktlotse

## Overview

**Creative North Star: "Der ruhige Lotse"**

Konfliktlotse sieht aus wie ein aufgeräumter Notizblock auf hellem Grund: eine schmale Lesespalte (720px), weiße Karten mit feinem Rahmen, ein waldgrünes Leitsystem für Links und Struktur und ein warmes Apricot nur für die nächste Handlung. Die Seite will gestresste Besucher am Handy beruhigen, nicht beeindrucken; Dichte ist mittel, Absätze kurz, jedes Element eine klar benannte Box.

Farbige Kästen mit linkem Akzentstreifen sind das Ordnungsmittel des Systems: Die Streifenfarbe sagt, welche Art Inhalt folgt (grün = Antwort, Ziel, Begründung; apricot = Sätze zum Sagen, Problem; gelb = Vorsicht; rot = Grenze). Emoji sind die einzigen Bilder und tragen Kategorien, Modi und Übungen. Es gibt keine Fotos, keine Illustrationen, keine Webfonts und kein CSS-Framework; das Erscheinungsbild ist seit 2026-10-22 vom Betreiber festgeschrieben.

**Key Characteristics:**
- Eine Spalte, max. 720px, mittig; Raster nur innerhalb von Karten-Gruppen.
- Flach: weiße Flächen, 1px-Rahmen `border`, Schatten nur als Hover-Reaktion.
- Linker 4px-Akzentstreifen als semantischer Kastentyp.
- Waldgrün führt, Apricot handelt, Gelb/Rot warnen.
- Systemschrift, Emoji als Icons, CSS pro Seite inline.

## Colors

Ein waldgrünes Leitsystem auf kühlem Hellgrau, dazu ein warmes Apricot als Handlungsfarbe und zwei Warnfamilien.

### Primary
- **Waldgrün** (`primary`): Links, Schrittnummern, Listenmarker, Outline-Knöpfe, Akzentstreifen der Antwortbox („Kurz gesagt") und der Zielbox. Theme-Color im Browser.
- **Helles Waldgrün** (`primary-light`): Hover-Rahmen aller Karten und Pills, Rahmen von Promo-Boxen und Ergebnis-Karten, Streifen der Begründungs-, Regel-, Vereinbarungs- und Nächster-Schritt-Boxen. Textauswahl-Hintergrund.
- **Tiefgrün** (`primary-dark`): Link-Hover, Text auf Mint-Flächen und hellen Knöpfen, Hero-Überschrift der Startseite, Fokusrahmen.
- **Mint-Hauch** (`mint-wash`): die häufigste Fläche nach Weiß (24 Stellen): Antwortbox, Herkunftsbox, Tipp-Box, Hover-Grund von Copy-Knöpfen, Pills und Optionen, hervorgehobene Modus-Karte. Begleitend **Mint-Rahmen** (`mint-border`) für Methoden-Links und alternative Spielkarten, **Mint-Badge** (`mint-badge`) für das Zwei-Parteien-Badge und die Tool-Promo im Ratgeber.

### Secondary
- **Apricot** (`accent`): Handlung und gesprochene Sprache. Hauptknopf der Startseite und der Übungen (dunkler Text darauf), Streifen der Sätze-Box und der Problem-Box, Hover-Rahmen warmer Teaser. Hover: **Helles Apricot** (`accent-light`).
- **Apricot-Hauch** (`apricot-wash`) mit **Apricot-Rahmen** (`apricot-border`): warme Teaser (Trainer-CTA, Saison-Banner, Spielkarten, Check-CTA) und die Gesprächsblase im Trainer. **Apricot-Text** (`apricot-text`) nur auf Apricot-Hauch (Ein-Parteien-Badge, ≥ 4,5:1).

### Tertiary (Warnungen)
- **Vorsichtsgelb** (`caution-stripe` auf `caution-wash`, Text `caution-text`, Links `caution-link`): Krisenhinweis, „Grenzen dieser Methode", Sicherheitshinweise in Übungen. Immer als Kasten mit linkem Streifen.
- **Bernstein-Text** (`amber-text`): Hinweise und die Bewertung „ausweichend" im Trainer.
- **Alarmrot** (`alarm` auf `alarm-wash`): Grenzen-Box („Hier ist Schluss"), „Vorher"-Spalte im Vergleich, Sicherheits-Ergebnis im Eskalations-Check, gewählte falsche Trainer-Antwort.

### Neutral
- **Papiergrau** (`bg`): Seitenhintergrund, Grund von Skript-Texten, Reaktionen, Optionen und Links in Listen.
- **Weiß** (`bg-white`): Karten, Header (95 % deckend mit 4px-Blur), Footer.
- **Fast-Schwarz** (`text`): Überschriften und Fließtext.
- **Grauton** (`text-light`): Text in Karten, Metazeilen, Navigation, Footer.
- **Rahmengrau** (`border`): alle 1px-Rahmen, Trennlinien, Ruhe-Streifen der Reaktionen.

### Named Rules
**The Stripe Means Type Rule.** Ein linker Akzentstreifen (4px, bei Reaktionen 3px) kennzeichnet die Art eines Kastens, nie bloß Dekoration: grün = Antwort/Ziel/Begründung/Vereinbarung, apricot = Sätze/Problem, gelb = Vorsicht, rot = Grenze/Sicherheit. Neue Kästen wählen eine bestehende Bedeutung.

**The Apricot Acts Rule.** Apricot als Vollfläche ist dem Hauptknopf vorbehalten; als Hauch markiert es Teaser, die zu einer Übung oder Aktion führen. Grün strukturiert, Apricot fordert auf.

## Typography

**Display Font:** System-Stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif)
**Body Font:** derselbe Stack

**Character:** Eine einzige vertraute Systemschrift; Hierarchie entsteht nur über Größe und Gewicht (700/600/500/400), nie über eine zweite Familie.

### Hierarchy
- **Display** (`display`): H1 der Startseite (in Tiefgrün) und der Ratgeber-Artikel.
- **Headline** (`headline`): Standard-H1 aller anderen Seiten; im Tool-Header neben dem Kategorie-Emoji (2.2rem) mit Zeilenhöhe 1.2.
- **Title** (`title`): H2, oben 2rem, unten 1rem Abstand; im Ratgeber-Fließtext 1.5rem.
- **Title-sm** (`title-sm`): H3 (1.5rem oben, 0.5rem unten); Kartentitel 1.05rem/700.
- **Body** (`body`): Fließtext. Lead-Absätze 1.05–1.15rem in Grauton.
- **Body-reading** (`body-reading`): Ratgeber- und Methoden-Text; Methoden-Spalte max. 68ch, Zeilenhöhe dort 1.75.
- **Label** (`label`): Navigation (0.9rem/500), Breadcrumbs, Pills, Badges, Metazeilen, Karten-Untertexte.
- **Caption** (`caption`): Footer-Links, Copy-Knöpfe, Druckhinweis, Zählerzeilen.

### Named Rules
**The Italic Speech Rule.** Wörtlich sagbare Sätze (Skripte, Vergleichsbeispiele, Antwortoptionen im Trainer) stehen kursiv auf eigener Fläche; erklärender Text nie.

**The Underlined Prose Link Rule.** Links im Fließtext (`main p a`, unklassifizierte `li a`) sind unterstrichen (Offset 2px); Karten, Pills und Navigation nicht. Farbe allein kennzeichnet keinen Link.

## Layout

Eine mittige Lesespalte: `main` max. 720px breit, Innenabstand 2rem oben/unten und 1rem seitlich; Header- und Footer-Inhalt nutzen dieselbe Breite. Ratgeber-Artikel liegen ab 601px als weiße Karte mit 2.5rem Innenabstand in der Spalte und werden darunter randlos. Der Header ist sticky (z-index 100), das Consent-Banner fixiert unten (max. 640px, z-index 200).

Raster entstehen nur in Gruppen: Kategorien 2 Spalten, ab 640px 4; Spiel-, Methoden-, Vergleichs- und Teaser-Karten 1 Spalte, ab 600px 2; Methoden-Links `auto-fit, minmax(200px, 1fr)` ab 600px; Modus-Karten 2 Spalten, bis 500px 1; Do/Don't-Raster bis 600px einspaltig. Breakpoints in Gebrauch: 390, 420, 500, 520, 560, 600 (Hauptschwelle), 640px. Unter 520px blendet die Navigation „Start" und breite Punkte aus; unter 420px stapeln sich die Hero-Knöpfe in voller Breite.

Rhythmus in rem-Schritten (`spacing`): 0.5–0.75rem zwischen Karten einer Gruppe, 1.25rem zwischen Abschnittskarten, 2–2.5rem zwischen Blöcken. Innenabstand: Kästen 0.9rem 1.1rem, Karten 1.25–1.5rem.

**The One Column Rule.** Inhalt bleibt in der 720px-Spalte; nichts bricht auf volle Viewport-Breite aus außer Header- und Footer-Hintergrund.

## Elevation & Depth

Das System ist flach. Tiefe entsteht über Weiß auf Papiergrau und 1px-Rahmen. Schatten gibt es nur als Reaktion auf Hover bei klickbaren Karten (Kategorie- und Modus-Karten), zusammen mit einem Anheben um 2px; Spielkarten heben ohne Schatten. Einzige ruhende Erhebung ist das Consent-Banner.

### Shadow Vocabulary
- **Hover-Hauch** (`box-shadow: 0 2px 8px rgba(0,0,0,0.06)`, Variable `--shadow`): klickbare Karten im Hover.
- **Banner** (`box-shadow: 0 6px 24px rgba(0,0,0,0.12)`): nur das fixierte Consent-Banner.

**The Flat-At-Rest Rule.** Karten ruhen ohne Schatten; Schatten und Anheben (translateY −2px, Hauptknopf −1px) sind ausschließlich Hover-Rückmeldung.

## Shapes

Weich, aber nicht verspielt: Kästen, Knöpfe in Karten und Listen-Links 8px (`rounded.sm`, 57 Stellen), Abschnittskarten, Hero-Knöpfe, Promo- und Spielkarten 12px (`rounded.md`, 32 Stellen). Kleine, klickbare Chips (Pills, Copy-Knöpfe, Badges, Meta-Tag) sind 20px-Pillen (Startseiten-Explore 22px). Schrittnummern und Fragemarker sind grüne Kreise (32px bzw. 28px, weiße Ziffer). Die Gesprächsblase im Trainer hat die Sprechblasenform 16px mit 4px unten links. Rahmen: 1px `border` für Ruhezustand, 2px für Knöpfe, Modus- und Spielkarten, Ergebnis-Karten und Trainer-Optionen. Akzentstreifen sitzen immer links und kombinieren sich mit dem Kasten-Radius.

## Components

### Buttons
- **Hauptknopf (Apricot):** Vollfläche `accent`, Text `text`, 600, Startseite 0.9rem 2rem mit 12px; in Übungen (Auswerten, Weiter, Neu starten) 700, 8px, 0.8–0.85rem 1.4–1.6rem. Hover `accent-light`, auf der Startseite zusätzlich −1px.
- **Outline (Grün):** transparent, 2px `primary`, Text `primary`; Hover Vollfläche `primary`, weißer Text.
- **Sekundär (Weiß/Tiefgrün):** weiß, 2px `primary-light`, Text `primary-dark`, 600, 8px (Drucken, Ratgeber-Promo). Hover Druckknopf: `mint-wash`.
- **Solid Grün:** `primary`, weißer Text, 8px; Hover `primary-dark`. Nur Tool-Promo im Ratgeber.
- **Consent-Knöpfe:** beide gleich: weiß, 2px `primary`, Text `primary-dark`, min. 44px; Hover `mint-wash`. Keine Hervorhebung der Zustimmung.
- **Copy-Knopf:** transparente Pille, 1px `border`, 0.8rem/600 Tiefgrün, min. 44px hoch; Hover `primary-light`-Rahmen und `mint-wash`.
- **Feedback-Knöpfe (mailto):** Papiergrau, 1px Rahmen, 8px; Hover Rahmengrau-Fläche.

### Chips / Pills
- **Verwandte Themen:** weiße Pille, 1px `border`, Emoji + Text 0.85rem, min. 44px; Hover `primary-light`-Rahmen, `mint-wash`-Grund. Im Ratgeber auf Papiergrau-Grund, ebenfalls min. 44px.
- **Badges:** Pillen ohne Rahmen, 0.85rem/600: Ein-Partei apricot, Zwei-Parteien mint.

### Cards / Containers
- **Abschnittskarte:** weiß, 1px `border`, 12px, 1.5rem, 1.25rem Abstand nach unten; Text darin Grauton, Zeilenhöhe 1.7. Varianten über linken 4px-Streifen: Begründung, Regeln, Vereinbarung, Nächster Schritt (`primary-light`), Ziel (`primary`), Sätze und Problem (`accent`), Grenze (`alarm` auf `alarm-wash`), Vereinbarung zusätzlich auf `mint-wash`.
- **Antwortbox „Kurz gesagt":** `mint-wash`, 4px `primary`-Streifen, 8px, 0.9rem 1.1rem. Steht direkt unter der H1 auf Tool-, Ratgeber- und Methodenseiten.
- **Skript-Text:** Papiergrau, 8px, 1rem 1.25rem, kursiv in `text`; Varianten-Titel 0.95rem Tiefgrün; darunter Copy-Knopf.
- **Reaktion:** Papiergrau, 3px `border`-Streifen; Auslöser in `text`, Antwort in `primary-dark`.
- **Krisenhinweis / Grenzen:** `caution-wash`, 4px `caution-stripe`, 8px, Text `caution-text`, Links `caution-link` 600 unterstrichen.
- **Vergleich Vorher/Nachher:** zwei Kästen, Vorher `alarm-wash` mit rotem Streifen, Nachher `mint-wash` mit grünem Streifen, Großbuchstaben-Label 0.8rem/700.
- **Warmer Teaser:** `apricot-wash`, 1px `apricot-border`, Emoji links; Hover Rahmen `accent`.
- **Link-Karten (Featured, Methoden, Listen):** weiß oder mint, 1px Rahmen, 8px; Hover nur Rahmen `primary-light`, keine Unterstreichung (Methoden-Link unterstreicht den Titel).
- **FAQ:** `details` in weißer 8px-Karte, Frage 600.

### Navigation
- **Header:** Logo 🕊️ + „Konfliktlotse" 1.1rem/700 in `text`, Hover `primary`. Links 0.9rem/500 Grauton, min. 44px, Hover `primary`; Suche als 🔍 mit `aria-label`. Schrumpft stufenweise bei 520px und 390px.
- **Breadcrumbs:** 0.85rem Grauton, 0.6rem Polsterung (≥ 44px), Unterstreichung blendet im Hover ein (0.2s); aktuelle Seite `text`/500; Trenner 60 % deckend.
- **Footer:** weiß, Rahmen oben, zentriert; Text 0.85rem, Links 0.8rem mit 0.6rem 0.25rem Polsterung (≥ 44px).

### Modus-Karten (Signature)
Zwei große, zentrierte Wahlkarten (Emoji 2rem, Titel 1.05rem/700, Text 0.85rem) für „Ich allein" / „Wir beide": weiß, 2px Rahmen, 12px, 1.5rem 1.25rem; Hover `primary-light`, −2px, Hover-Hauch. Die empfohlene Variante liegt auf `mint-wash` mit `primary-light`-Rahmen. Ohne JS (noscript) und im Druck werden alle Ansichten untereinander gezeigt und die Karten ausgeblendet.

### Übungs-Elemente
- **Antwort-Labels:** 44px hohe 8px-Kästen auf Papiergrau; gewählt `primary`-Rahmen + `mint-wash` (`:has(input:checked)`); `accent-color: primary`.
- **Trainer-Optionen:** `details` mit 2px Rahmen; nach Antwort richtige Option grün/mint, gewählte falsche rot/rosa, Präfix „Deine Wahl:".
- **Ergebnis-Karte:** weiß, 2px `primary-light`, 12px; Sicherheitsfall rot/rosa, Stufe 6 apricot (`#FFF8F1`).
- **Select:** 1px Rahmen, 8px, min. 44px.

### Werbefläche
Reservierte Mindesthöhe 280px gegen Layoutsprung, 1px Linie oben, Label „Anzeige" 0.7rem in Großbuchstaben (Kennzeichnungspflicht).

## Do's and Don'ts

### Do:
- **Do** neue Farben, Radien und Abstände nur über die `:root`-Variablen bzw. die Tokens oben setzen; Mint- und Apricot-Flächen mit ihren festen Hex-Werten.
- **Do** jeden neuen Hinweis-Kasten als Fläche mit linkem 4px-Akzentstreifen in einer bestehenden Bedeutung bauen (The Stripe Means Type Rule).
- **Do** jedem Tipp-Ziel mindestens 44px Höhe geben: Navigation, Footer-Links, Breadcrumbs, Copy-Knöpfe, Pills, Knöpfe, Antwort-Labels, Selects, `summary`.
- **Do** den globalen Fokusrahmen unverändert lassen: `outline: 3px solid var(--primary-dark)`, `outline-offset: 2px`, Radius 4px, über `:focus-visible`.
- **Do** Übergänge kurz halten (0.15–0.2s, Farbe/Rahmen/Transform); `prefers-reduced-motion: reduce` schaltet alle Übergänge und Animationen global ab.
- **Do** Emoji als Icons nutzen und dekorative Emoji mit `aria-hidden="true"` versehen; ein Emoji ohne Textlabel bekommt ein `aria-label`.
- **Do** Druck mitdenken: Header, Footer, Werbung, Feedback, Breadcrumbs und `.no-print` verschwinden; Hintergrund weiß, Links ohne Farbe; Abschnittskarten `break-inside: avoid` mit `#ccc`-Rahmen.
- **Do** Styles komponentennah in `<style>` der Astro-Datei schreiben; der Build inlined sie pro Seite (`inlineStylesheets: 'always'`).
- **Do** Inhalte ohne JavaScript lesbar halten; interaktive Ansichten haben einen noscript-Fallback.

### Don't:
- **Don't** ein CSS-Framework, Utility-Klassen oder externe Stylesheets einführen.
- **Don't** Webfonts oder eine zweite Schriftfamilie laden; es gilt der System-Stack.
- **Don't** die Lesespalte über 720px öffnen oder Inhalte randlos über den Viewport ziehen.
- **Don't** Karten im Ruhezustand Schatten geben oder neue Schattenwerte erfinden.
- **Don't** Apricot-Vollflächen für etwas anderes als die Hauptaktion verwenden.
- **Don't** den Fokusrahmen in Orange zurückholen (erreichte nur ~2:1) oder Fokus per `outline: none` ohne Ersatz entfernen.
- **Don't** Links im Fließtext nur über Farbe kennzeichnen.
- **Don't** Gelb oder Rot für etwas anderes als Vorsicht, Grenze oder Sicherheit einsetzen.
