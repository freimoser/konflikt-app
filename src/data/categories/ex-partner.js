import streitBeiDerUebergabe from '../conflicts/ex-partner/streit-bei-der-uebergabe.js';
import jedeNachrichtEskaliert from '../conflicts/ex-partner/jede-nachricht-eskaliert.js';
import redetSchlechtVorKindern from '../conflicts/ex-partner/redet-schlecht-vor-kindern.js';
import neuePartnerschaft from '../conflicts/ex-partner/neue-partnerschaft.js';
import kostenFuerDieKinder from '../conflicts/ex-partner/kosten-fuer-die-kinder.js';
import gemeinsameFreunde from '../conflicts/ex-partner/gemeinsame-freunde.js';

export const exPartnerCategory = {
  id: 'ex-partner',
  name: 'Ex-Partner:in',
  icon: '🔀',
  summary: 'Nach einer Trennung geht es oft weiter: Kinder, Geld, gemeinsame Freund:innen. Klare, kurze Kommunikation schützt dich und die Kinder. Bei Gewalt, Drohungen oder Stalking gilt: Sicherheit vor jedem Gespräch.',
  conflicts: [
    jedeNachrichtEskaliert,
    streitBeiDerUebergabe,
    redetSchlechtVorKindern,
    kostenFuerDieKinder,
    neuePartnerschaft,
    gemeinsameFreunde,
  ],
};
