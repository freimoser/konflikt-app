// Ich-Botschaft-Baukasten (/spiel/ich-botschaft/): nur Auswahllisten, keine Freitexte.
// Satzbau: „Wenn <situation>, <gefuehl>, weil <beduerfnis>. <bitte>“
// - situation.text: Beobachtung ohne Bewertung, als Nebensatz nach „Wenn“
// - situation.du: dieselbe Lage als Du-Botschaft (Kontrast, wird nur zum Vergleich gezeigt)
// - situation.requests: 2 konkrete, machbare Bitten; address: Anrede (du/ihr/Sie) für die offene Frage
// - situation.conflict: passender Gesprächsplan (wird von validate-data.mjs geprüft)
// - gefuehl/beduerfnis mit `hint`: Wörter, die eher eine Bewertung des Gegenübers sind – der Baukasten erklärt das.

export const areas = [
  {
    id: 'partner',
    label: 'Partnerschaft',
    situations: [
      {
        id: 'waesche',
        address: 'du',
        text: 'deine Wäsche über mehrere Tage im Flur liegt',
        du: 'Du lässt immer alles rumliegen!',
        requests: ['Kannst du sie abends in den Wäschekorb legen?', 'Wollen wir einen festen Platz dafür ausmachen?'],
        conflict: { category: 'partner', slug: 'waesche-liegen-lassen' },
      },
      {
        id: 'handy',
        address: 'du',
        text: 'du beim Abendessen auf dein Handy schaust, während ich erzähle',
        du: 'Dein Handy ist dir wichtiger als ich.',
        requests: ['Können wir das Handy beim Essen weglegen?', 'Magst du mir sagen, wenn gerade etwas Dringendes ist?'],
        conflict: { category: 'partner', slug: 'smartphone-staendig' },
      },
      {
        id: 'zeit',
        address: 'du',
        text: 'wir diese Woche keinen Abend zu zweit hatten',
        du: 'Du hast nie Zeit für mich.',
        requests: ['Können wir uns jetzt einen festen Abend für uns eintragen?', 'Was bräuchtest du, damit ein Abend pro Woche klappt?'],
        conflict: { category: 'partner', slug: 'keine-zeit' },
      },
    ],
  },
  {
    id: 'job',
    label: 'Job',
    situations: [
      {
        id: 'unterbrechen',
        address: 'du',
        text: 'ich im Meeting angefangen habe und unterbrochen werde',
        du: 'Du lässt mich nie ausreden.',
        requests: ['Kannst du mich erst ausreden lassen und dann ergänzen?', 'Magst du dir deinen Punkt notieren, bis ich fertig bin?'],
        conflict: { category: 'kollegen', slug: 'unterbricht-staendig' },
      },
      {
        id: 'erwartungen',
        address: 'Sie',
        text: 'ich eine Aufgabe ohne klares Ziel bekomme und hinterher Kritik kommt',
        du: 'Sie sagen nie, was Sie eigentlich wollen.',
        requests: ['Können wir beim nächsten Auftrag kurz festhalten, woran ein gutes Ergebnis zu erkennen ist?', 'Können wir nach der Hälfte der Zeit einen kurzen Zwischenstand machen?'],
        conflict: { category: 'chef', slug: 'unklare-erwartungen' },
      },
      {
        id: 'verteilung',
        address: 'ihr',
        text: 'die unbeliebten Aufgaben in den letzten Wochen bei mir gelandet sind',
        du: 'Ihr drückt euch immer und ich darf alles machen.',
        requests: ['Können wir die Aufgaben für nächsten Monat gemeinsam neu verteilen?', 'Wollen wir eine Liste anlegen, wer was zuletzt übernommen hat?'],
        conflict: { category: 'kollegen', slug: 'aufgaben-unfair-verteilt' },
      },
    ],
  },
  {
    id: 'familie',
    label: 'Familie',
    situations: [
      {
        id: 'kritik',
        address: 'ihr',
        text: 'bei unserem Besuch zuerst meine Wohnung und mein Job kommentiert werden',
        du: 'Ihr habt immer etwas an mir auszusetzen.',
        requests: ['Könnt ihr mich beim nächsten Besuch erst fragen, wie es mir geht?', 'Mögt ihr mir sagen, was euch dabei eigentlich Sorgen macht?'],
        conflict: { category: 'eltern', slug: 'kritisieren-staendig' },
      },
      {
        id: 'erziehung',
        address: 'ihr',
        text: 'den Kindern bei euch Süßigkeiten erlaubt werden, die wir abgemacht hatten wegzulassen',
        du: 'Ihr untergrabt ständig unsere Erziehung.',
        requests: ['Könnt ihr euch bei den Kindern an unsere Absprache halten?', 'Mögt ihr uns vorher fragen, wenn ihr etwas anders machen wollt?'],
        conflict: { category: 'schwiegereltern', slug: 'mischen-sich-in-erziehung-ein' },
      },
      {
        id: 'unangemeldet',
        address: 'ihr',
        text: 'ihr am Wochenende ohne Anruf vor der Tür steht',
        du: 'Ihr platzt einfach immer rein.',
        requests: ['Könnt ihr vorher kurz anrufen?', 'Wollen wir einen festen Besuchstag ausmachen?'],
        conflict: { category: 'schwiegereltern', slug: 'kommen-unangemeldet' },
      },
    ],
  },
  {
    id: 'freunde',
    label: 'Freundschaft',
    situations: [
      {
        id: 'absagen',
        address: 'du',
        text: 'unser Treffen zum dritten Mal kurzfristig abgesagt wird',
        du: 'Auf dich kann man sich echt nicht verlassen.',
        requests: ['Kannst du mir früher Bescheid geben, wenn es eng wird?', 'Magst du einen Termin vorschlagen, der für dich sicher passt?'],
        conflict: { category: 'freunde', slug: 'sagt-immer-ab' },
      },
      {
        id: 'zuhoeren',
        address: 'du',
        text: 'ich von meinem Tag erzähle und das Gespräch gleich zu deinem Thema wechselt',
        du: 'Es geht immer nur um dich.',
        requests: ['Kannst du mich erst zu Ende erzählen lassen?', 'Magst du kurz nachfragen, bevor du von dir erzählst?'],
        conflict: { category: 'freunde', slug: 'hoert-nicht-zu' },
      },
    ],
  },
  {
    id: 'wohnen',
    label: 'Nachbarschaft & WG',
    situations: [
      {
        id: 'laerm',
        address: 'Sie',
        text: 'unter der Woche nach 22 Uhr laute Musik zu hören ist',
        du: 'Sie nehmen überhaupt keine Rücksicht.',
        requests: ['Können Sie die Musik unter der Woche ab 22 Uhr leiser drehen?', 'Darf ich kurz klingeln, wenn es mal wieder spät wird?'],
        conflict: { category: 'nachbarn', slug: 'zu-laut' },
      },
      {
        id: 'putzplan',
        address: 'du',
        text: 'das Bad diese Woche nicht geputzt wurde, obwohl es auf dem Plan stand',
        du: 'Du hältst dich nie an den Putzplan.',
        requests: ['Kannst du es bis Sonntagabend nachholen?', 'Wollen wir den Plan so ändern, dass er für dich besser passt?'],
        conflict: { category: 'mitbewohner', slug: 'putzplan-ignoriert' },
      },
    ],
  },
  {
    id: 'kinder',
    label: 'Mit Kindern',
    situations: [
      {
        id: 'handy-kind',
        address: 'du',
        text: 'das Handy nach der vereinbarten Zeit noch an ist',
        du: 'Du hängst ja nur noch am Handy.',
        requests: ['Kannst du es jetzt in die Ladestation legen?', 'Wollen wir am Wochenende gemeinsam neue Handyzeiten ausmachen?'],
        conflict: { category: 'kinder', slug: 'handyzeit' },
      },
      {
        id: 'ton',
        address: 'du',
        text: 'du mir auf eine Frage mit „Halt die Klappe“ antwortest',
        du: 'Du bist unverschämt.',
        requests: ['Kannst du mir das noch einmal in einem anderen Ton sagen?', 'Magst du mir sagen, was dich gerade so ärgert?'],
        conflict: { category: 'kinder', slug: 'respektloser-ton' },
      },
    ],
  },
];

export const feelings = [
  { id: 'aerger', text: 'ärgere ich mich' },
  { id: 'enttaeuscht', text: 'bin ich enttäuscht' },
  { id: 'gestresst', text: 'bin ich gestresst' },
  { id: 'traurig', text: 'bin ich traurig' },
  { id: 'unsicher', text: 'bin ich verunsichert' },
  { id: 'erschoepft', text: 'bin ich erschöpft' },
  { id: 'allein', text: 'fühle ich mich allein damit' },
  { id: 'sorgen', text: 'mache ich mir Sorgen' },
  {
    id: 'ignoriert',
    text: 'fühle ich mich ignoriert',
    hint: '„Ignoriert“ beschreibt eher, was der andere angeblich tut, als was in dir passiert. Das kann wie ein Vorwurf ankommen. Probier „bin ich enttäuscht“ oder „fühle ich mich allein damit“.',
  },
  {
    id: 'respektlos',
    text: 'fühle ich mich respektlos behandelt',
    hint: '„Respektlos behandelt“ ist eine Bewertung des Gegenübers. Dein Gefühl dahinter ist vielleicht Ärger oder Kränkung – das ist schwerer abzuwehren.',
  },
  {
    id: 'ausgenutzt',
    text: 'fühle ich mich ausgenutzt',
    hint: '„Ausgenutzt“ unterstellt Absicht. Wenn du stattdessen sagst, dass du erschöpft oder gestresst bist, muss sich dein Gegenüber nicht verteidigen.',
  },
];

export const needs = [
  { id: 'ordnung', text: 'mir Ordnung wichtig ist' },
  { id: 'verlaesslichkeit', text: 'ich mich auf Absprachen verlassen möchte' },
  { id: 'gehoert', text: 'ich gehört werden möchte' },
  { id: 'ruhe', text: 'ich Ruhe brauche' },
  { id: 'fairness', text: 'mir eine faire Verteilung wichtig ist' },
  { id: 'naehe', text: 'mir unsere gemeinsame Zeit wichtig ist' },
  { id: 'planung', text: 'ich gern planen können möchte' },
  { id: 'wertschaetzung', text: 'mir ein freundlicher Umgang wichtig ist' },
  { id: 'selbststaendig', text: 'ich meine Entscheidungen selbst treffen möchte' },
  {
    id: 'recht',
    text: 'das einfach nicht geht',
    hint: '„Das geht einfach nicht“ nennt kein Bedürfnis, sondern ein Urteil. Sag lieber, was dir wichtig ist – dann kann dein Gegenüber darauf eingehen.',
  },
];

// Offene Bitte passend zur Anrede der Situation (address).
export const genericRequests = {
  du: 'Wie siehst du das?',
  ihr: 'Wie seht ihr das?',
  Sie: 'Wie sehen Sie das?',
};
