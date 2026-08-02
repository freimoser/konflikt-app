# CHALLENGE 🚀: Konfliktlotse.app – aus einem schmalen MVP wird ein SEO-fähiges Produkt

## MISSION
Du MUSST den bestehenden Astro-7-MVP in diesem Repository substanziell ausbauen. Das Ergebnis soll heute erneut auf GitHub Pages deploybar sein. Arbeite direkt im vorhandenen Projekt – kein neues Projekt und kein Unterordner.

Provider-Vorgabe: Diese Umsetzung läuft ausdrücklich über OpenCode mit OpenRouter. Schreibe echten, hilfreichen deutschen Content. KEINE Platzhalter, kein Lorem Ipsum, keine leeren „kommt später“-Bereiche.

## FESTE PRODUKTENTSCHEIDUNGEN
- Finale Marke: **Konfliktlotse**
- Geplante Domain: **konfliktlotse.app**
- Die Domain `konfliktlotse.app` ist registriert und als GitHub-Pages-Custom-Domain verbunden.
- `public/CNAME` enthält `konfliktlotse.app`; `astro.config.mjs` nutzt die Produktionsdomain ohne `base`.
- Hauptversprechen: „Vom Konflikt zum klaren Gespräch – mit konkreten Worten und einem Plan.“
- Sprache: Deutsch, konsequentes respektvolles **Du**.
- Zielgruppe: Erwachsene mit akuten alltäglichen Konflikten, die mobil in wenigen Minuten konkrete Gesprächshilfe suchen.
- Kein Therapieersatz, keine Diagnose, keine Rechtsberatung.

## AKTUELLER STAND
- Astro 7, statische Ausgabe, GitHub Pages, Custom Domain am Root ohne Repository-Base-Pfad
- 6 Kategorien, 19 Konflikte, dynamische Tool-Routen
- Flow: Person wählen → Konflikt wählen → allein oder gemeinsam lösen
- Clientseitiger Moduswechsel über `?mode=one-party|two-party`; alle Views müssen statisch im HTML vorgerendert bleiben
- Aktuell nur minimale Meta-Tags, keine Sitemap, keine robots.txt, keine Legal-Seiten

## NICHT VERHANDELBAR
1. `npm run build` muss erfolgreich sein.
2. Jede interne Seite muss erzeugt werden; keine 404 bei Unterseiten.
3. Alle Links müssen mit GitHub-Pages-Base-Pfad funktionieren. Nutze eine konsistente Base-URL-Hilfsfunktion oder `import.meta.env.BASE_URL`; keine root-harten internen Links wie `href="/ratgeber/"`.
4. Keine Secrets, API-Keys oder Tracking-IDs committen.
5. Kein Tailwind, React oder anderes UI-Framework. Astro + semantisches HTML + Vanilla CSS/JS.
6. Keine Speicherung freier Konflikttexte oder sensibler Nutzerdaten.
7. Content muss verantwortungsvoll sein und darf Gewalt, Missbrauch, Stalking oder akute Gefahr nie als gewöhnlichen Kommunikationskonflikt behandeln.

## 1. INFORMATION ARCHITECTURE
Baue zwei klar getrennte Silos:

### Tool-Silo
- `/konflikt/`
- `/konflikt/{kategorie}/`
- `/konflikt/{kategorie}/{slug}/`

### Ratgeber-Silo
- `/ratgeber/`
- `/ratgeber/{kategorie}/`
- `/ratgeber/{kategorie}/{slug}/`

Jeder Konflikt MUSS genau eine Tool-Seite und genau einen eigenständigen Ratgeberartikel haben. Tool und Artikel verlinken bidirektional. Verwandte Konflikte werden sinnvoll intern verlinkt, auch kategorieübergreifend, wenn passend.

## 2. TAXONOMIE: MINDESTENS 40 KONFLIKTE
Behalte die sechs bestehenden Hauptkategorien, erweitere auf 40–42 hochwertige Konflikte. Zielvorschlag:

### Partner:in – 8
- Wäsche/Unordnung
- hört nicht zu
- keine Zeit füreinander
- Eifersucht
- Streit über Geld
- zu viel Zeit am Handy
- unterschiedliche Bedürfnisse nach Nähe/Intimität
- unterschiedliche Zukunftspläne

### Chef:in – 7
- nicht ernst genommen
- zu viel Druck/Überstunden
- kein Feedback
- Mikromanagement
- unfaire Behandlung/Bevorzugung
- unklare Erwartungen
- Gehaltserhöhung wird abgelehnt oder vertagt

### Freund:in – 7
- hört nicht zu
- sagt immer ab
- einseitige Freundschaft
- Vertrauen gebrochen
- geliehenes Geld nicht zurückgezahlt
- Grenzen werden nicht respektiert
- aus Gruppe ausgeschlossen

### Kolleg:in – 7
- klaut Ideen
- redet schlecht/Tratsch
- verweigert Zusammenarbeit
- schiebt Aufgaben ab
- unterbricht ständig
- bekommt Anerkennung für meine Arbeit
- arbeitet unzuverlässig und hält Deadlines nicht

### Nachbar:in – 6
- zu laut
- Parkplatzstreit
- Müll/Gerüche
- Grundstücks-/Gemeinschaftsgrenzen
- Haustier verursacht Konflikt
- beschwert sich ständig

### Eltern – 7
- mischen sich ein
- verstehen mich nicht
- überhöhte Erwartungen
- kritisieren ständig
- respektieren Grenzen nicht
- akzeptieren Partner:in nicht
- Streit über Unterstützung/Pflegeverantwortung

Du darfst Titel/Slugs sprachlich verbessern, aber bestehende Slugs nach Möglichkeit erhalten. Entferne keine vorhandenen Inhalte ohne gleichwertigen Ersatz.

## 3. TIEFERES TOOL-TEMPLATE JE KONFLIKT
Erweitere das Datenmodell und die UI so, dass jede Tool-Seite mindestens enthält:
- präzise Zusammenfassung
- konkrete Problembeschreibung
- 3 typische Ursachen/Perspektiven, ohne Ferndiagnose
- kurzer „Ist das noch ein Alltagskonflikt?“-Sicherheitscheck
- **Allein lösen:** Vorbereitung, 3 Skriptvarianten (sanft, direkt, sachlich), 5–7 Schritte, 2–3 typische Gegenreaktionen plus mögliche ruhige Antworten, klare Grenze/Abbruchkriterium
- **Gemeinsam lösen:** Ziel, Gesprächsregeln, 5 moderierte Fragen, Ablauf in 4–6 Schritten, konkrete Vereinbarung mit Review-Zeitpunkt
- Dos & Don'ts
- nächster Schritt, falls der erste Versuch nicht funktioniert
- Link zum separaten Ratgeber
- 2–4 verwandte Konflikte

Die UI darf den Nutzer nicht mit einer Textwand erschlagen: progressive Abschnitte, gut lesbare Cards/Accordions oder klare Zwischenüberschriften. Ohne JS muss der Kerninhalt weiterhin erreichbar sein.

## 4. SEPARATER SEO-RATGEBER JE KONFLIKT
Erzeuge für JEDEN Konflikt eine eigene indexierbare Ratgeberseite. Richtwert 650–1.000 Wörter pro Artikel; lieber konkret und sauber als künstlich aufgebläht. Jeder Artikel:
- eigenständige Long-Tail-H1 und individuelle Meta-Description
- empathische Einleitung ohne Phrasen
- Situation und typische Varianten
- vertiefte Ursachen/Perspektivwechsel
- häufige Fehler
- konkrete Vorbereitung und Gesprächsstrategie
- Beispiele, ohne den Tool-Text wortgleich zu kopieren
- Wann Abstand/professionelle Hilfe sinnvoll ist
- 4–6 echte FAQ-Fragen mit kurzen Antworten
- CTA zurück zur passenden Tool-Seite
- verwandte Artikel

Duplicate-Content-Regel:
- Tool = akut, handlungsorientiert, „Was sage ich jetzt?“
- Ratgeber = erklärend, „Warum passiert das und was hilft langfristig?“

Nutze eine wartbare datengetriebene Struktur oder Astro Content Collections. Keine 40 manuell duplizierten Layout-Dateien.

## 5. SEO-PFLICHT
Implementiere sauber:
- individuelle `<title>` und Meta-Description
- Canonical absolut und OHNE Query-Parameter
- Open Graph + Twitter Cards
- `@astrojs/sitemap` mit korrekten GitHub-Pages-URLs
- `public/robots.txt` mit Sitemap-Verweis
- Breadcrumb-Navigation auf allen Tiefenseiten
- JSON-LD: `WebSite` auf Startseite, `BreadcrumbList` auf Tiefenseiten, `Article` auf Ratgeberseiten
- FAQ-Markup nur, wenn sichtbare FAQ-Inhalte exakt übereinstimmen; beachte, dass Google FAQ-Rich-Results nicht garantiert
- semantische Überschriftenhierarchie
- eindeutige URLs mit Trailing Slash
- gute interne Verlinkung Tool ↔ Ratgeber ↔ Kategorie-Hubs
- keine indexierbaren Varianten für `?mode=`; Canonical immer auf der Konflikt-Basis-URL
- eine echte `/ratgeber/`-Übersicht mit Kategorien und Artikeln
- hochwertige 404-Seite mit Such-/Navigationswegen

## 6. LEGAL
Erstelle vollständige Seiten und verlinke sie in Footer/Header, aber kennzeichne im Inhalt klar, dass automatisch erstellte Rechtstexte keine Rechtsberatung ersetzen. Verwende aktuelle Bezeichnung **§ 5 DDG**, nicht das veraltete „§ 5 TMG“.

### Impressumsdaten (öffentlich vorgesehen)
- Betreiber: Serdar Thomas Freimoser
- Anschrift: Schinkelstraße 15, 80805 München, Deutschland
- E-Mail: 91Serdar@gmail.com
- Keine Telefonnummer veröffentlichen

Erstelle `/impressum/` mit diesen Daten und erforderlichen Standardhinweisen, ohne nicht vorhandene Register-, USt-ID- oder Aufsichtsangaben zu erfinden.

Erstelle `/datenschutz/` passend zum TATSÄCHLICHEN technischen Stand:
- GitHub Pages Hosting und mögliche Datenverarbeitung/USA-Transfer transparent nennen
- aktuell keine Nutzerkonten, keine Formulare, keine Cookies, kein Analytics und keine Werbung behaupten, sofern du tatsächlich nichts davon einbaust
- keine erfundenen Datenschutzbeauftragten oder Rechtsgrundlagen
- Betroffenenrechte und Kontakt nennen

## 7. SICHERHEIT / KRISENHINWEISE
Erstelle einen wiederverwendbaren, sichtbaren Krisenhinweis-Baustein und eine ausführlichere `/hilfe-in-krisen/`-Seite. Kommuniziere klar: Bei Angst, Kontrolle, Drohungen, Gewalt, Stalking, sexueller Gewalt oder akuter Gefahr nicht mit einem Gesprächsskript experimentieren.

Nur diese verifizierten offiziellen Angebote verwenden:
- Akute Gefahr: Polizei **110**, Rettungsdienst/Feuerwehr **112**
- TelefonSeelsorge: **0800 1110111**, **0800 1110222**, **116 123**, https://www.telefonseelsorge.de/
- Hilfetelefon „Gewalt gegen Frauen“: **116 016**, rund um die Uhr, https://www.hilfetelefon.de/
- Hilfetelefon „Gewalt an Männern“: **0800 1239900**, Zeiten nicht pauschal behaupten, Link: https://www.maennerhilfetelefon.de/
- WEISSER RING Opfer-Telefon: **116 006**, https://weisser-ring.de/hilfe-fuer-opfer/opfer-telefon

Kein Alarmismus auf jeder normalen Seite. Kurzer universeller Hinweis plus kontextuell deutlicher Hinweis bei Eifersucht, Kontrolle, Grenzverletzung und ähnlichen Themen.

## 8. FEEDBACK-LOOP – OHNE SENSIBLE DATEN
Implementiere pro Konfliktseite eine kleine „War das hilfreich?“-Komponente. Da kein externer Dienst/Account vorhanden ist:
- keine vorgetäuschte Speicherung
- keine unsichtbaren Netzwerkrequests
- erlaubt ist eine ehrliche, datensparsame Lösung via vorbereiteter E-Mail an `91Serdar@gmail.com`, die nur Seiten-Slug + „hilfreich/nicht hilfreich“ enthält und den Nutzer vor dem Öffnen des Mailprogramms informiert
- keine Freitext-Pflicht, keine Konfliktdetails im Mailtext
- Komponente so kapseln, dass später ein privacy-first Endpoint ersetzt werden kann

Zusätzlich: sichtbarer CTA zum passenden Ratgeber und zur nächsten sinnvollen Konfliktseite, damit interne Klickpfade messbar werden können, sobald Analytics existiert.

## 9. MONETARISIERUNGS-READINESS
Heute keine Fake-Ads, keine leeren Werbeplätze, keine nicht vorhandenen Affiliate-Partnerschaften. Baue Vertrauen und Traffic-Fundament:
- Content-Qualität
- Ratgeber-Silo
- klare CTAs
- druckbare/kopierbare Gesprächspläne
- optional eine wirklich funktionierende druckbare „Gespräch vorbereiten“-Checkliste als HTML-Seite oder Download, ohne E-Mail-Gate

Architektur soll spätere Monetarisierung erlauben: dezente AdSense-Plätze außerhalb sensibler Inhalte, kuratierte Buch-Affiliates, digitale Gesprächsplan-Produkte und Newsletter. Aber heute nichts vortäuschen.

## 10. DESIGN
Das bestehende Konzept ist grundsätzlich gut; refine statt Totalumbau.
- Marke sichtbar auf **Konfliktlotse** umstellen
- Vibe: ruhig, vertrauensvoll, handlungsorientiert, modern – nicht klinisch, nicht kitschig
- bestehendes Tiefgrün weiterentwickeln, warmes Orange nur für Aktionen, neutrale helle Flächen
- Mobile First, gut bedienbare Touch-Ziele, max. Lesebreite für lange Artikel
- klare visuelle Trennung zwischen Tool und Ratgeber
- keine generische SaaS-Landingpage, keine übertriebenen Gradients
- barrierearme Kontraste, sichtbare Focus States, `prefers-reduced-motion`

## 11. TECHNISCHE QUALITÄT
- Bestehenden Mode-Switch für statische Seiten korrekt erhalten/refactoren
- Client-JS robust gegen fehlende Elemente
- keine Inline-Eventhandler
- HTML muss ohne Hydration funktionieren
- Navigation, Footer und alle Links Base-Pfad-sicher
- `npm run build` ausführen und Fehler beheben
- Route-Anzahl dokumentieren
- mindestens ein kleines automatisches Validierungsskript oder Test hinzufügen, das erzeugte HTML-Dateien und interne Links auf fehlende Ziele prüft
- `npm audit` prüfen

## 12. DOKUMENTATION
Aktualisiere README mit:
- Marke Konfliktlotse
- Produktstruktur Tool + Ratgeber
- tatsächlicher Konflikt-/Artikel-/Seitenanzahl
- lokales Setup und Build
- GitHub Pages URL
- Hinweis: `konfliktlotse.app` noch nicht DNS-verbunden

## ABSCHLUSS-KRITERIEN
Die Aufgabe ist erst fertig, wenn:
- mindestens 40 Konflikte im Datenmodell vorhanden sind
- zu jedem Konflikt eine Tool-Seite UND eine Ratgeberseite gebaut wird
- Impressum, Datenschutz, Krisenhilfe, robots.txt, Sitemap, Canonicals, OG und JSON-LD vorhanden sind
- Feedback-Komponente ehrlich funktioniert
- Build grün ist
- interner Linkcheck grün ist
- keine Platzhalter/Lorem-Ipsum/erfundenen Partner oder Tracking-Dienste enthalten sind
- die bestehende GitHub-Pages-URL weiterhin funktioniert

Arbeite autonom, aber committe und pushe NICHT. Hermes prüft danach und übernimmt Deployment.