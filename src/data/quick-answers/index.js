// Kurzantworten (Antwort zuerst) und Ratgeber-Titel je Konflikt. Format: docs/loop/QUICK-ANSWERS-FORMAT.md
import partner from './partner.js';
import chef from './chef.js';
import freunde from './freunde.js';
import kollegen from './kollegen.js';
import nachbarn from './nachbarn.js';
import eltern from './eltern.js';
import geschwister from './geschwister.js';
import mitbewohner from './mitbewohner.js';
import schwiegereltern from './schwiegereltern.js';
import exPartner from './ex-partner.js';
import kinder from './kinder.js';
import vermieter from './vermieter.js';

export const quickAnswers = {
  partner, chef, freunde, kollegen, nachbarn, eltern, geschwister, mitbewohner, schwiegereltern,
  'ex-partner': exPartner, kinder, vermieter,
};

export function getQuickAnswer(categoryId, slug) {
  return quickAnswers[categoryId]?.[slug] || null;
}
