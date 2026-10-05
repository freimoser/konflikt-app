import reparaturVerschleppt from '../conflicts/vermieter/reparatur-verschleppt.js';
import nebenkostenabrechnung from '../conflicts/vermieter/nebenkostenabrechnung.js';
import kommtUnangemeldet from '../conflicts/vermieter/kommt-unangemeldet.js';
import kautionZurueck from '../conflicts/vermieter/kaution-zurueck.js';
import mieterhoehungGespraech from '../conflicts/vermieter/mieterhoehung-gespraech.js';
import schimmel from '../conflicts/vermieter/schimmel.js';

export const vermieterCategory = {
  id: 'vermieter',
  name: 'Vermieter:in',
  icon: '🔑',
  summary: 'Ärger mit Vermieter:in oder Hausverwaltung betrifft dein Zuhause. Höflich, klar und schriftlich dokumentiert kommst du meist weiter – bei Rechtsfragen helfen Mieterverein oder Beratungsstellen.',
  conflicts: [
    reparaturVerschleppt,
    nebenkostenabrechnung,
    schimmel,
    kommtUnangemeldet,
    mieterhoehungGespraech,
    kautionZurueck,
  ],
};
