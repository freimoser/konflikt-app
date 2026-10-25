// Bausteine für JSON-LD, die mehrere Seiten teilen. Seiten geben das Ergebnis per `jsonLd` an BaseLayout.
import { OPERATOR, PERSON_ID } from '../config/site';

const SITE = 'https://konfliktlotse.app';
export const ORGANIZATION_ID = `${SITE}/#organization`;

/** Herausgeber-Entität (Startseite). Logo ≥ 112 px, wie von Google verlangt. */
export const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'Konfliktlotse',
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: `${SITE}/apple-touch-icon.png`, width: 180, height: 180 },
  email: OPERATOR.email,
  founder: { '@id': PERSON_ID },
};

/** Übersichtsseite als Liste ihrer Einträge. `items`: [{ name, path }] mit Pfad ab Domain-Root. */
export function itemList(name, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE}${it.path}`,
      name: it.name,
    })),
  };
}

/** Interaktives Werkzeug im Browser (Tests, Übungen). */
export function webApplication(name, path, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Browser',
    inLanguage: 'de-DE',
    isAccessibleForFree: true,
    url: `${SITE}${path}`,
    description,
  };
}

/** Herausgeber in Artikeln und Seiten: verweist per `@id` auf dieselbe Organisation wie die Startseite. */
export const publisher = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'Konfliktlotse',
  url: `${SITE}/`,
  logo: organization.logo,
};
