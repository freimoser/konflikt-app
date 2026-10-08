// Belege für Faktenaussagen (Urheber, Jahreszahlen, Notrufnummern). Jede Quelle mit Prüfdatum.
// Neue Faktenaussage → hier belegen. Methoden ohne Einzelurheber bekommen bewusst keine Quelle,
// sondern einen ehrlichen Hinweis (siehe NO_SINGLE_SOURCE).
export const CHECKED = '2026-10-08';

export const methodSources = {
  'gewaltfreie-kommunikation': [
    { text: 'Center for Nonviolent Communication: Our Founder, Dr. Marshall Rosenberg (1934–2015), Gründung des CNVC 1984', url: 'https://www.cnvc.org/about/founder' },
    { text: 'Marshall B. Rosenberg: Nonviolent Communication. A Language of Life. PuddleDancer Press' },
  ],
  'ich-botschaften': [
    { text: 'Thomas Gordon: Parent Effectiveness Training (P.E.T.), Buch 1970; deutsch: „Familienkonferenz“', url: 'https://en.wikipedia.org/wiki/Parent_Effectiveness_Training' },
    { text: 'Gordon Training International: Parent Effectiveness Training', url: 'https://www.gordontraining.com/parent-programs/parent-effectiveness-training-p-e-t/' },
  ],
  'aktives-zuhoeren': [
    { text: 'Carl R. Rogers, Richard E. Farson: Active Listening. Industrial Relations Center, University of Chicago, 1957', url: 'https://wholebeinginstitute.com/wp-content/uploads/Rogers_Farson_Active-Listening.pdf' },
  ],
  'vier-ohren-modell': [
    { text: 'Friedemann Schulz von Thun: Miteinander reden 1 – Störungen und Klärungen. Rowohlt, 1981', url: 'https://www.schulz-von-thun.de/veroeffentlichungen/miteinander-reden' },
  ],
  'harvard-konzept': [
    { text: 'Roger Fisher, William Ury (ab der 2. Auflage mit Bruce Patton): Getting to Yes. Erstausgabe 1981; deutsch: „Das Harvard-Konzept“', url: 'https://en.wikipedia.org/wiki/Getting_to_Yes' },
  ],
  'eskalationsstufen-glasl': [
    { text: 'Friedrich Glasl: Konfliktmanagement. Ein Handbuch für Führung, Beratung und Mediation. Haupt Verlag (mehrere Auflagen)', url: 'https://haupt.ch/konfliktmanagement/2329783258083841' },
  ],
};

/** Methoden ohne einzelnen Urheber: gesammeltes Praxiswissen, keine Studienaussagen. */
export const NO_SINGLE_SOURCE = 'Diese Methode geht nicht auf eine einzelne Urheberin oder einen einzelnen Urheber zurück. Der Text fasst verbreitetes Praxiswissen aus Kommunikationstraining und Beratung zusammen und enthält bewusst keine Studien- oder Zahlenangaben.';

/** Offizielle Seiten der Hilfsangebote – Nummern und Erreichbarkeit dort geprüft. */
export const helplineSources = [
  { name: 'TelefonSeelsorge', detail: '0800 1110111, 0800 1110222, 116 123 – Tag und Nacht', url: 'https://www.telefonseelsorge.de/' },
  { name: 'Hilfetelefon „Gewalt gegen Frauen“', detail: '116 016 – 365 Tage im Jahr, rund um die Uhr', url: 'https://www.hilfetelefon.de/' },
  { name: 'Hilfetelefon „Gewalt an Männern“', detail: '0800 1239900 – Mo–Do 8–20 Uhr, Fr 8–15 Uhr', url: 'https://www.maennerhilfetelefon.de/' },
  { name: 'WEISSER RING Opfer-Telefon', detail: '116 006 – täglich 7–22 Uhr', url: 'https://weisser-ring.de/hilfe-fuer-opfer/opfer-telefon' },
];
