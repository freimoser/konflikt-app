# Strategie: Vom MVP zum größten deutschsprachigen Konflikt-Portal

Stand: 2026-09-30 (Durchlauf 1). Bei neuen Erkenntnissen aktualisieren, nicht duplizieren.

## 1. Geschäftsmodell
**Primär: Google AdSense** (Display-Werbung). Umsatz ≈ Seitenaufrufe × Anzeigen pro Seite × RPM.
Deutscher Ratgeber-Traffic hat solide RPMs; Themen wie Beruf, Geld, Nachbarschaft/Wohnen und
Beziehung ziehen tendenziell besser bezahlte Anzeigen an als reine Freizeitthemen.

Hebel, in dieser Reihenfolge:
1. **Indexierbare Seiten mit echter Suchnachfrage** (Long-Tail: „Nachbar beschwert sich ständig“,
   „Eltern akzeptieren meinen Freund nicht“, „Chef gibt kein Feedback“).
2. **Seiten pro Besuch**: Tool → Ratgeber → verwandter Konflikt → Methode → Werkzeug.
   Jede Seite braucht 2–4 sinnvolle Weiterklicks.
3. **Wiederkehrende Besuche**: interaktive Werkzeuge/Spiele, druckbare Gesprächspläne.
4. Später ergänzend: kuratierte Buch-Affiliates, digitaler Gesprächsplan, Newsletter
   (nur mit echten Partnern/Diensten – nichts vortäuschen).

## 2. AdSense-Voraussetzungen (Checkliste)
| Punkt | Status |
|---|---|
| Genügend eigenständiger, hilfreicher Inhalt (kein „Thin Content“) | 🟢 DL 4: 67 Konflikte × 2 + 8 Methoden + 5 Themen + 2 Spiele ≈ 149 Inhaltsseiten |
| Impressum (§ 5 DDG) | 🟢 ausgebaut (DL 2) |
| Datenschutzerklärung inkl. AdSense/Cookies/Consent-Abschnitt | 🟢 Abschnitt erscheint automatisch bei aktivierter Werbung (DL 2) |
| „Über uns“ / redaktionelle Grundsätze (E-E-A-T, Vertrauen) | 🟢 `/ueber-uns/` (DL 2) |
| Kontaktseite | 🟢 `/kontakt/` (DL 2) |
| Klare Navigation, keine kaputten Links | 🟢 Linkprüfer grün |
| `ads.txt` im Root | 🟡 wird automatisch erzeugt, sobald `PUBLIC_ADSENSE_CLIENT` gesetzt ist |
| Zertifizierte CMP (TCF v2.2) für EWR-Traffic | 🔴 fehlt – am einfachsten Googles eigene CMP („Datenschutz & Mitteilungen“ im AdSense-Konto) |
| Keine Anzeigen neben Krisen-/Gewaltinhalten | 🟢 `noAds`/`adsSensitive` (DL 2) |
| Eigene Domain mit HTTPS | 🟢 konfliktlotse.app |

### Technik für AdSense (umgesetzt in DL 2, ohne IDs im Repo)
- Umgebungsvariable `PUBLIC_ADSENSE_CLIENT` (z. B. `ca-pub-…`) als **GitHub-Actions-Variable**
  setzen, nicht im Code. Ohne Variable: kein Script, keine Werbeplätze, keine AdSense-Passage
  in der Datenschutzerklärung → die Seite bleibt ehrlich.
- `ads.txt` beim Build aus derselben Variable erzeugen (Astro-Endpoint `src/pages/ads.txt.ts`).
- Komponente `AdSlot.astro` mit Prop `placement` (z. B. `in-article`, `after-tool`, `sidebar`).
  Rendert nur, wenn aktiviert **und** die Seite nicht als sensibel markiert ist.
- Sensible Seiten ohne Werbung: `/hilfe-in-krisen/`, Impressum, Datenschutz, 404 sowie Konflikte
  mit Flag `adsSensitive: true` (z. B. Eifersucht/Kontrolle).
- Platzierung dezent: nach dem Problem-Block, zwischen Ratgeber-Abschnitten (max. 3 pro Artikel),
  **nie** innerhalb von Skripten, Krisenhinweisen oder direkt neben Buttons (versehentliche Klicks
  verstoßen gegen AdSense-Richtlinien).
- Layout-Shift vermeiden: reservierte Mindesthöhe je Slot.

## 3. SEO-Plan
- **Silos**: Tool (`/konflikt/…`) und Ratgeber (`/ratgeber/…`) – beide pro Konflikt.
- **Silo „Themen“** (`/themen/…`, seit DL 4): breite Leitartikel + Saison-Inhalte (Weihnachten ab Oktober live haben!).
- **Silo „Methoden“** (`/methoden/…`, seit DL 2): Gewaltfreie Kommunikation, Ich-Botschaften,
  aktives Zuhören, Harvard-Konzept, Eskalationsstufen nach Glasl, Mediation, Grenzen setzen,
  Entschuldigen, Feedback geben (SBI), Deeskalation. Evergreen-Suchnachfrage mit hohem Volumen.
- **Neue Kategorien** (je 5–8 Konflikte): Geschwister, Kinder/Teenager, Mitbewohner:in/WG,
  Schwiegereltern, Ex-Partner:in/Co-Parenting, Vermieter:in, Kund:innen, Schule/Lehrkraft,
  Verein/Ehrenamt, Online/Social Media.
- **Werkzeuge** (Linkmagneten, wiederkehrende Nutzung): Ich-Botschaft-Generator,
  Eskalationsstufen-Check, Gesprächsplan zum Ausdrucken, Konflikttyp-Quiz.
- Technisch: OG-Bild, `WebSite`-JSON-LD (✓ seit DL 1), `Article` mit `dateModified`,
  interne Verlinkung automatisch über `related`, Kategorie-Hubs mit Einleitungstext.

## 4. KPIs (sobald Messung existiert)
Indexierte Seiten (Search Console), Klicks/Impressionen, Seiten pro Sitzung, Anteil Tool→Ratgeber-
Klicks, RPM. Bis Analytics datenschutzkonform eingebaut ist: nur Search Console (serverseitig,
kein Tracking auf der Seite nötig).

## 5. Risiken
- Thin/duplicate Content durch zu ähnliche Konflikte → jede Seite muss eigene Suchintention haben.
- AdSense-Ablehnung wegen „geringwertiger Inhalte“ → erst beantragen, wenn ≥ 100 substanzielle Seiten
  und Über-uns/Kontakt/Datenschutz fertig sind.
- Sensible Themen: Werbung neben Gewalt/Krise schadet Vertrauen und verstößt ggf. gegen Richtlinien.
- Deployment liegt bei Hermes – Änderungen sind erst live, wenn Hermes deployt.

## 6. Empfehlung zum AdSense-Antrag
Antrag stellen, sobald ≈ 150 substanzielle Inhaltsseiten live und in der Search Console indexiert sind
(realistisch nach DL 4–5 + Deployment durch Hermes). Vorher Search Console einrichten, damit Indexierung
sichtbar ist. Auto-Ads anfangs **aus** lassen (würden auch neben Krisenhinweisen platzieren) und nur die
manuellen Blöcke über `AD_SLOTS` nutzen.

## 7. AdSense aktivieren (Schritt für Schritt)
1. Google Search Console für `konfliktlotse.app` verifizieren (DNS) und `https://konfliktlotse.app/sitemap-index.xml` einreichen.
   Warten, bis ein Großteil der ~225 Seiten indexiert ist.
2. AdSense-Konto anlegen, Website hinzufügen.
3. GitHub → Repository → Settings → Secrets and variables → Actions → **Variables**:
   `PUBLIC_ADSENSE_CLIENT = ca-pub-XXXXXXXXXXXXXXXX` (16 Ziffern). Neu deployen.
   → Script wird eingebunden, `/ads.txt` entsteht, Datenschutzerklärung zeigt den AdSense-Abschnitt.
4. Im AdSense-Konto unter **Datenschutz & Mitteilungen** die Google-Einwilligungsmitteilung (EWR/UK, TCF) aktivieren.
5. Nach der Freigabe Anzeigenblöcke anlegen und IDs als Variablen setzen:
   `PUBLIC_ADSENSE_SLOT_IN_ARTICLE`, `PUBLIC_ADSENSE_SLOT_AFTER_TOOL`, `PUBLIC_ADSENSE_SLOT_LIST`.
6. **Auto-Anzeigen zunächst aus lassen.** Sie würden auch neben Krisenhinweisen platzieren. Die manuellen Plätze
   sind bewusst gesetzt (nach Tool-Übersicht, in Artikeln, in Hub-Listen) und auf sensiblen Seiten gesperrt.

Werbefrei (Code-seitig erzwungen): Krisenhilfe, Impressum, Datenschutz, Kontakt, 404, Konflikt „Eifersucht“,
Themen „Mobbing am Arbeitsplatz“, „Schweigen als Strafe“ und „Trennung im Guten“ (`adsSensitive: true` bzw. `noAds`).

## 8. Reichweitenmessung aktivieren (vorbereitet seit 2026-10-07)
Beides ist optional und unabhängig. Ohne Variable: nichts wird geladen, nichts steht in der Datenschutzerklärung.

**Cloudflare Web Analytics (empfohlen zum Start, cookielos, ohne Banner)**
1. Cloudflare-Konto → Analytics & Logs → Web Analytics → „Add a site“ → `konfliktlotse.app`,
   **manuelle Einrichtung (JS-Snippet)** wählen, nicht die automatische (die Domain läuft nicht über Cloudflare).
2. Aus dem Snippet nur den Token (32 Hex-Zeichen) kopieren.
3. GitHub → Settings → Secrets and variables → Actions → Variables: `PUBLIC_CF_ANALYTICS_TOKEN` setzen, neu deployen
   (z. B. Actions → „Deploy to GitHub Pages“ → Run workflow).

**Google Analytics 4 (nur mit Einwilligung)**
1. GA4-Property anlegen, Datenstream „Web“ für `https://konfliktlotse.app`, Mess-ID `G-…` kopieren.
2. In GA4: Datenaufbewahrung auf 2 Monate, Google-Signale aus, Datenfreigabe-Einstellungen minimal.
3. GitHub-Variable `PUBLIC_GA_ID` setzen, neu deployen.
→ Banner erscheint (gleichwertige Knöpfe „Ablehnen“/„Zustimmen“), GA lädt erst nach Zustimmung mit
`anonymize_ip`, ohne Google-Signale und ohne Werbepersonalisierung. Widerruf: „Datenschutz-Einstellungen“ im Footer
und in der Datenschutzerklärung. Keine Messung auf Krisenhilfe, Rechtstexten und `adsSensitive`-Seiten.

Technik: `src/components/Analytics.astro`, Konfiguration `src/config/site.ts`, Datenschutz-Abschnitte bedingt in
`src/pages/datenschutz.astro`. `scripts/check-launch.mjs` blockiert: Messung ohne passenden Datenschutz-Abschnitt (und umgekehrt),
direkt eingebundenes GA-Script, Messung/Banner auf der Krisenseite, Test-Kennungen.
**Hinweis AdSense:** Sobald AdSense mit Googles eigener Einwilligungsmitteilung (CMP) läuft, das GA-Banner prüfen –
zwei Banner nacheinander vermeiden (dann GA über die Google-CMP/Consent Mode steuern).
