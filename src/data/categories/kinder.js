import handyzeit from '../conflicts/kinder/handyzeit.js';
import hausaufgaben from '../conflicts/kinder/hausaufgaben.js';
import zimmerAufraeumen from '../conflicts/kinder/zimmer-aufraeumen.js';
import ausgehzeiten from '../conflicts/kinder/ausgehzeiten.js';
import respektloserTon from '../conflicts/kinder/respektloser-ton.js';
import geschwisterstreit from '../conflicts/kinder/geschwisterstreit.js';

export const kinderCategory = {
  id: 'kinder',
  name: 'Kinder & Teenager',
  icon: '🧒',
  summary: 'Streit mit dem eigenen Kind kostet Nerven – ums Handy, die Hausaufgaben oder den Ton. Klare, ruhige Absprachen schützen eure Beziehung und geben deinem Kind Halt, auch in der Pubertät.',
  conflicts: [
    handyzeit,
    hausaufgaben,
    respektloserTon,
    zimmerAufraeumen,
    ausgehzeiten,
    geschwisterstreit,
  ],
};
