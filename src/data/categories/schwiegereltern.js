import mischenSichInErziehungEin from '../conflicts/schwiegereltern/mischen-sich-in-erziehung-ein.js';
import kommenUnangemeldet from '../conflicts/schwiegereltern/kommen-unangemeldet.js';
import partnerStehtNichtHinterMir from '../conflicts/schwiegereltern/partner-steht-nicht-hinter-mir.js';
import feiertageAufteilen from '../conflicts/schwiegereltern/feiertage-aufteilen.js';
import schwiegermutterKritisiert from '../conflicts/schwiegereltern/schwiegermutter-kritisiert.js';
import magMichNicht from '../conflicts/schwiegereltern/mag-mich-nicht.js';

export const schwiegerelternCategory = {
  id: 'schwiegereltern',
  name: 'Schwiegereltern',
  icon: '🏡',
  summary: 'Mit Schwiegereltern stehst du nie allein im Gespräch: Deine Partnerin oder dein Partner steht mittendrin. Gute Lösungen klären zuerst, wer was anspricht – und schützen eure eigene Familie.',
  conflicts: [
    schwiegermutterKritisiert,
    mischenSichInErziehungEin,
    kommenUnangemeldet,
    partnerStehtNichtHinterMir,
    feiertageAufteilen,
    magMichNicht,
  ],
};
