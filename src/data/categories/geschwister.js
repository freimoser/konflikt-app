import bevorzugung from '../conflicts/geschwister/bevorzugung.js';
import streitUmsErbe from '../conflicts/geschwister/streit-ums-erbe.js';
import konkurrenzUndVergleiche from '../conflicts/geschwister/konkurrenz-und-vergleiche.js';
import streitBeiFamilienfesten from '../conflicts/geschwister/streit-bei-familienfesten.js';
import funkstille from '../conflicts/geschwister/funkstille.js';
import geldGeliehen from '../conflicts/geschwister/geld-geliehen.js';

export const geschwisterCategory = {
  id: 'geschwister',
  name: 'Geschwister',
  icon: '🧑‍🤝‍🧑',
  summary: 'Geschwisterkonflikte tragen oft alte Rollen aus der Kindheit in das Erwachsenenleben. Klare Worte helfen dir, heute auf Augenhöhe zu sprechen – über Vergleiche, Geld, Erbe oder Funkstille.',
  conflicts: [
    bevorzugung,
    konkurrenzUndVergleiche,
    streitBeiFamilienfesten,
    funkstille,
    geldGeliehen,
    streitUmsErbe,
  ],
};
