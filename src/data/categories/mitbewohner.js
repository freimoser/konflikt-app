import putzplanIgnoriert from '../conflicts/mitbewohner/putzplan-ignoriert.js';
import laermInDerWg from '../conflicts/mitbewohner/laerm-in-der-wg.js';
import partnerWohntMit from '../conflicts/mitbewohner/partner-wohnt-mit.js';
import nebenkostenUndEinkauf from '../conflicts/mitbewohner/nebenkosten-und-einkauf.js';
import isstMeineSachen from '../conflicts/mitbewohner/isst-meine-sachen.js';
import auszugUndKuendigung from '../conflicts/mitbewohner/auszug-und-kuendigung.js';

export const mitbewohnerCategory = {
  id: 'mitbewohner',
  name: 'Mitbewohner:in',
  icon: '🛋️',
  summary: 'In einer WG prallen Gewohnheiten auf engem Raum aufeinander: Putzplan, Lärm, Geld und Privatsphäre. Mit fairen Absprachen bleibt euer Zuhause ein Ort, an dem sich alle wohlfühlen.',
  conflicts: [
    putzplanIgnoriert,
    isstMeineSachen,
    laermInDerWg,
    partnerWohntMit,
    nebenkostenUndEinkauf,
    auszugUndKuendigung,
  ],
};
