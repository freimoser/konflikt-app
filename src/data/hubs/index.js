// Hub-Texte je Kategorie (Format: docs/loop/HUB-FORMAT.md). Wird nur von Astro-Seiten
// importiert (import.meta.glob), fehlende Dateien sind erlaubt – dann greift der Standardtext.
const modules = import.meta.glob('./*.js', { eager: true });

const hubs = {};
for (const [path, mod] of Object.entries(modules)) {
  if (path.endsWith('/index.js')) continue;
  const data = mod.default;
  if (data?.id) hubs[data.id] = data;
}

export function getHub(categoryId) {
  return hubs[categoryId] || null;
}
