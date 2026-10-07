// Zentrale Site-Konfiguration. Keine IDs oder Secrets hier eintragen –
// Werbung wird ausschließlich über Umgebungsvariablen beim Build aktiviert
// (lokal: .env, im Deployment: GitHub-Actions-Variablen). Siehe docs/loop/STRATEGIE.md.

export const SITE_NAME = 'Konfliktlotse';
export const OPERATOR = {
  name: 'Serdar Thomas Freimoser',
  street: 'Schinkelstraße 15',
  city: '80805 München',
  country: 'Deutschland',
  email: '91Serdar@gmail.com',
};

/** Feste Entitäts-ID der verantwortlichen Person (Autorenangaben in allen Artikel-Schemas verweisen darauf). */
export const PERSON_ID = 'https://konfliktlotse.app/ueber-uns/#person';
export const AUTHOR_SCHEMA = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: OPERATOR.name,
  url: 'https://konfliktlotse.app/ueber-uns/',
};

const rawClient = (import.meta.env.PUBLIC_ADSENSE_CLIENT || '').trim();

/** AdSense-Publisher-Kennung im Format `ca-pub-` + 16 Ziffern, sonst leer. */
export const ADSENSE_CLIENT = /^ca-pub-\d{16}$/.test(rawClient) ? rawClient : '';
export const ADS_ENABLED = ADSENSE_CLIENT !== '';

/**
 * Anzeigenblock-IDs aus dem AdSense-Konto (je Platzierung eine Umgebungsvariable).
 * Ohne ID wird an dieser Stelle kein Block gerendert.
 */
export const AD_SLOTS = {
  'in-article': (import.meta.env.PUBLIC_ADSENSE_SLOT_IN_ARTICLE || '').trim(),
  'after-tool': (import.meta.env.PUBLIC_ADSENSE_SLOT_AFTER_TOOL || '').trim(),
  'list': (import.meta.env.PUBLIC_ADSENSE_SLOT_LIST || '').trim(),
} as const;

export type AdPlacement = keyof typeof AD_SLOTS;

// Messung – beides optional. Was nicht konfiguriert ist, erscheint nicht (auch nicht in der Datenschutzerklärung).
const rawGa = (import.meta.env.PUBLIC_GA_ID || '').trim();
const rawCf = (import.meta.env.PUBLIC_CF_ANALYTICS_TOKEN || '').trim();

/** Google Analytics 4 Mess-ID (`G-…`). Lädt nur nach Einwilligung im Banner. */
export const GA_ID = /^G-[A-Z0-9]{6,12}$/.test(rawGa) ? rawGa : '';
export const GA_ENABLED = GA_ID !== '';

/** Cloudflare Web Analytics Site-Token (32 Hex-Zeichen). Cookielos, ohne Banner (Art. 6 Abs. 1 lit. f DSGVO). */
export const CF_ANALYTICS_TOKEN = /^[a-f0-9]{32}$/.test(rawCf) ? rawCf : '';
export const CF_ANALYTICS_ENABLED = CF_ANALYTICS_TOKEN !== '';

/** Schlüssel im localStorage, unter dem die GA-Einwilligung gespeichert wird. */
export const CONSENT_KEY = 'kl-consent-ga';
