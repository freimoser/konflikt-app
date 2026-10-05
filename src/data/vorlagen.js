// Druckbare Vorlagen – werden unter /vorlagen/<slug>/ als Druckansicht gerendert.
// Felder:
//   sections[].fields  = Fragen, unter die auf Papier geschrieben wird (lines = Schreiblinien je Feld, 1–4)
//   sections[].checks  = Abhak-Punkte (☐)
//   sections[].table   = optional: { columns: [...], rows: n } für eine leere Tabelle zum Ausfüllen

export const vorlagen = [
  {
    slug: 'gespraech-vorbereiten',
    title: 'Checkliste: Konfliktgespräch vorbereiten',
    seoTitle: 'Konfliktgespräch vorbereiten: Checkliste',
    meta: 'Checkliste zum Ausdrucken: So bereitest du ein Konfliktgespräch vor – Thema, Fakten, Gefühl, konkrete Bitte, Einwände, Zeitpunkt und deine Grenze.',
    icon: '📝',
    intro:
      'Ein schwieriges Gespräch gelingt leichter, wenn du vorher weißt, was du sagen und was du erreichen willst. Drucke diese Checkliste aus und nimm dir 15 Minuten Ruhe, um sie mit Stift auszufüllen. Du musst nicht jede Zeile füllen – schon drei klare Antworten geben dir im Gespräch Halt.',
    sections: [
      {
        heading: '1. Sicherheits-Check vorab',
        hint: 'Beantworte diese Punkte zuerst ehrlich. Wenn du Angst vor der Reaktion hast, ist ein Gespräch unter vier Augen nicht der richtige erste Schritt.',
        checks: [
          'Ich habe keine Angst davor, wie die andere Person reagieren könnte.',
          'Es gab bisher keine Drohungen, Gewalt oder Einschüchterung.',
          'Ich kann das Gespräch jederzeit beenden und gehen.',
          'Habe ich Angst vor der Reaktion? Dann hole ich mir erst Unterstützung (Vertrauensperson, Beratungsstelle, im Notfall 110).',
        ],
      },
      {
        heading: '2. Worum geht es?',
        hint: 'Ein einziges Thema pro Gespräch. Alte Geschichten bleiben diesmal draußen.',
        fields: [
          'Worum geht es konkret? (ein Satz)',
          'Was ist genau passiert – nur beobachtbare Fakten, ohne Bewertung?',
          'Seit wann oder wie oft kommt das vor?',
        ],
        lines: 2,
      },
      {
        heading: '3. Was ist mir wichtig?',
        hint: 'Beschreibe, was die Situation mit dir macht – nicht, was die andere Person falsch macht.',
        fields: [
          'Wie fühle ich mich dabei? (z. B. enttäuscht, gestresst, übergangen)',
          'Welches Bedürfnis steckt dahinter? (z. B. Verlässlichkeit, Respekt, Ruhe)',
          'Mein Einstiegssatz als Ich-Botschaft:',
        ],
        lines: 2,
      },
      {
        heading: '4. Meine konkrete Bitte',
        hint: 'Eine gute Bitte ist machbar, konkret und lässt sich überprüfen. „Sei netter“ ist keine Bitte, „Sag mir Bescheid, wenn du später kommst“ schon.',
        fields: [
          'Was genau wünsche ich mir von der anderen Person?',
          'Was wäre ein akzeptabler Kompromiss für mich?',
          'Was kann ich selbst beitragen?',
        ],
        lines: 2,
      },
      {
        heading: '5. Mögliche Einwände – und meine Antwort',
        hint: 'Überlege, was die andere Person sagen könnte. Eine vorbereitete, ruhige Antwort verhindert, dass du dich rechtfertigst oder laut wirst.',
        fields: [
          'Einwand 1, den ich erwarte:',
          'Meine ruhige Antwort darauf:',
          'Einwand 2, den ich erwarte:',
          'Meine ruhige Antwort darauf:',
        ],
        lines: 2,
      },
      {
        heading: '6. Zeitpunkt und Ort',
        hint: 'Nicht zwischen Tür und Angel, nicht vor Publikum, nicht wenn jemand müde, hungrig oder in Eile ist.',
        fields: [
          'Wann spreche ich es an? (Tag, Uhrzeit)',
          'Wo – an einem ruhigen Ort ohne Zuhörer:innen?',
          'Wie kündige ich das Gespräch an? (z. B. „Ich würde gern etwas in Ruhe mit dir besprechen.“)',
        ],
        lines: 1,
      },
      {
        heading: '7. Meine Grenze',
        hint: 'Lege vorher fest, ab wann du das Gespräch unterbrichst. Eine Pause ist kein Scheitern.',
        fields: [
          'Das lasse ich im Gespräch nicht zu (z. B. Anschreien, Beleidigungen):',
          'Mit diesem Satz unterbreche ich, wenn es kippt:',
          'Wenn wir keine Lösung finden, ist mein nächster Schritt:',
        ],
        lines: 2,
      },
    ],
    tips: [
      'Nimm den ausgefüllten Zettel ruhig mit ins Gespräch. Ein kurzer Blick darauf ist völlig in Ordnung und hilft dir, beim Thema zu bleiben.',
      'Lies deinen Einstiegssatz vorher einmal laut vor. Klingt er nach Vorwurf, formuliere ihn als Ich-Botschaft um.',
      'Plane nach dem Gespräch etwas Zeit für dich ein. Notiere auf der Rückseite, was vereinbart wurde und was offen geblieben ist.',
    ],
    relatedConflicts: [
      { category: 'partner', slug: 'hoert-nicht-zu' },
      { category: 'chef', slug: 'unfaire-behandlung' },
      { category: 'freunde', slug: 'vertrauen-gebrochen' },
      { category: 'kollegen', slug: 'schiebt-aufgaben-ab' },
      { category: 'eltern', slug: 'respektieren-grenzen-nicht' },
    ],
    relatedMethods: ['ich-botschaften', 'grenzen-setzen', 'deeskalation-im-streit'],
  },

  {
    slug: 'familienrat-protokoll',
    title: 'Protokoll: Familienrat mit Kindern',
    seoTitle: 'Familienrat mit Kindern: Protokoll-Vorlage',
    meta: 'Vorlage zum Ausdrucken: Protokoll für den Familienrat mit Kindern – Gesprächsregeln, Sichtweisen, Ideen, Vereinbarung, Aufgaben und Unterschriften.',
    icon: '👨‍👩‍👧',
    intro:
      'Im Familienrat setzt ihr euch in Ruhe zusammen und löst ein Thema gemeinsam – Erwachsene und Kinder haben dabei gleich viel Redezeit. Drucke das Protokoll für jedes Treffen neu aus. Eine Person schreibt mit, gern auch ein älteres Kind. Am Ende unterschreiben alle, damit die Vereinbarung für alle gilt.',
    sections: [
      {
        heading: '1. Unsere Gesprächsregeln',
        hint: 'Lest die Regeln zu Beginn gemeinsam vor und hakt sie ab. Wer möchte, darf eine eigene Regel ergänzen.',
        checks: [
          'Es spricht immer nur eine Person. Die anderen hören zu.',
          'Wir lachen niemanden aus und sagen nichts Gemeines.',
          'Jede Meinung zählt – auch die der Jüngsten.',
          'Wir suchen eine Lösung, nicht eine schuldige Person.',
          'Wer eine Pause braucht, darf sie sagen.',
          'Handys und Fernseher bleiben aus.',
        ],
      },
      {
        heading: '2. Unser Thema heute',
        hint: 'Nur ein Thema pro Treffen. Schreibt es so auf, dass auch die Kinder es verstehen.',
        fields: [
          'Datum und wer ist dabei?',
          'Worum geht es heute? (ein Satz)',
          'Wer hat das Thema eingebracht?',
        ],
        lines: 1,
      },
      {
        heading: '3. Jede Person sagt ihre Sicht',
        hint: 'Reihum erzählt jede Person, wie es ihr mit dem Thema geht. Niemand unterbricht oder widerspricht in dieser Runde.',
        fields: [
          'Name: ______ – So sehe ich das / das ist mir wichtig:',
          'Name: ______ – So sehe ich das / das ist mir wichtig:',
          'Name: ______ – So sehe ich das / das ist mir wichtig:',
          'Name: ______ – So sehe ich das / das ist mir wichtig:',
        ],
        lines: 2,
      },
      {
        heading: '4. Ideen sammeln',
        hint: 'Erst alle Ideen aufschreiben, auch lustige oder ungewöhnliche. Bewertet wird erst danach. Macht hinter jede Idee ein Zeichen, ob sie für alle passt.',
        fields: [
          'Idee 1:',
          'Idee 2:',
          'Idee 3:',
          'Idee 4:',
          'Idee 5:',
        ],
        lines: 1,
      },
      {
        heading: '5. Unsere Vereinbarung',
        hint: 'Wählt die Idee (oder Mischung), mit der alle leben können. Schreibt sie so konkret wie möglich auf.',
        fields: [
          'Das haben wir gemeinsam beschlossen:',
          'Das passiert, wenn es mal nicht klappt:',
        ],
        lines: 3,
      },
      {
        heading: '6. Wer macht was bis wann?',
        hint: 'Jede Aufgabe bekommt einen Namen und einen Zeitpunkt. Kinder übernehmen Aufgaben, die zu ihrem Alter passen.',
        fields: [
          'Aufgabe: ______ – Wer: ______ – Bis wann: ______',
          'Aufgabe: ______ – Wer: ______ – Bis wann: ______',
          'Aufgabe: ______ – Wer: ______ – Bis wann: ______',
          'Nächster Familienrat am (Datum, Uhrzeit): Dort schauen wir, ob die Vereinbarung klappt.',
        ],
        lines: 1,
      },
      {
        heading: '7. Unterschriften',
        hint: 'Alle unterschreiben – kleinere Kinder dürfen auch malen oder ihren Namen stempeln. Hängt das Blatt gut sichtbar auf, zum Beispiel an den Kühlschrank.',
        fields: [
          'Unterschrift:',
          'Unterschrift:',
          'Unterschrift:',
          'Unterschrift:',
          'Unterschrift:',
        ],
        lines: 1,
      },
    ],
    tips: [
      'Plant 20 bis 30 Minuten ein und beginnt mit etwas Schönem, etwa einem Lob der Woche. Mit kleinen Kindern lieber kürzer und häufiger.',
      'Wechselt die Rollen: Mal leitet ein Elternteil, mal ein Kind. So erleben Kinder, dass ihre Stimme wirklich zählt.',
      'Ein Familienrat ersetzt keine Hilfe, wenn ein Kind Angst hat, sich zurückzieht oder zu Hause Gewalt im Spiel ist. Dann sind Erziehungsberatungsstellen die richtige Adresse.',
    ],
    relatedConflicts: [
      { category: 'kinder', slug: 'geschwisterstreit' },
      { category: 'kinder', slug: 'handyzeit' },
      { category: 'kinder', slug: 'zimmer-aufraeumen' },
      { category: 'kinder', slug: 'ausgehzeiten' },
      { category: 'kinder', slug: 'respektloser-ton' },
    ],
    relatedMethods: ['aktives-zuhoeren', 'harvard-konzept', 'ich-botschaften'],
  },

  {
    slug: 'wg-vereinbarung',
    title: 'Vorlage: WG-Vereinbarung',
    seoTitle: 'WG-Vereinbarung: Vorlage zum Ausdrucken',
    meta: 'WG-Vereinbarung zum Ausdrucken: Putzplan-Rotation, Ruhezeiten, Gäste, gemeinsame Kasse und Umgang mit Konflikten – gemeinsam ausfüllen, aufhängen.',
    icon: '🏠',
    intro:
      'Die meisten WG-Konflikte entstehen, weil jede Person stillschweigend andere Erwartungen hat. Mit dieser Vorlage haltet ihr eure Absprachen einmal gemeinsam fest. Setzt euch dafür alle zusammen, füllt das Blatt aus und hängt es an einen Ort, an dem es alle sehen. Es ist eine Absprache unter Mitbewohner:innen und ersetzt keinen Mietvertrag.',
    sections: [
      {
        heading: '1. Putzplan-Rotation',
        hint: 'Tragt die Bereiche in die Spaltenköpfe ein und die Namen in die Zeilen. Jede Woche rückt jede Person einen Bereich weiter. Abhaken nicht vergessen.',
        table: {
          columns: ['Woche / Datum', 'Küche', 'Bad', 'Flur & Böden', 'Müll & Altglas', 'Erledigt ✓'],
          rows: 8,
        },
        fields: [
          'Was gehört zu „sauber“? (z. B. Herd abwischen, Waschbecken, Boden saugen)',
          'Bis wann in der Woche ist der eigene Bereich erledigt?',
          'Was passiert, wenn jemand verhindert ist? (tauschen, nachholen)',
        ],
        lines: 1,
      },
      {
        heading: '2. Ruhezeiten',
        hint: 'Das ist eure gemeinsame Absprache für ein gutes Zusammenleben. Die Hausordnung eures Hauses gilt davon unabhängig.',
        fields: [
          'Unter der Woche ist es bei uns ruhig ab ______ Uhr bis ______ Uhr.',
          'Am Wochenende ist es bei uns ruhig ab ______ Uhr bis ______ Uhr.',
          'Wie kündigen wir laute Abende oder Partys an – und wie lange vorher?',
          'So sagen wir Bescheid, wenn es zu laut ist:',
        ],
        lines: 1,
      },
      {
        heading: '3. Gäste und Übernachtungen',
        hint: 'Besonders Partner:innen, die oft übernachten, sorgen ohne Absprache schnell für Unmut. Klärt das lieber früh.',
        fields: [
          'Übernachtungsgäste sind in Ordnung, wenn …',
          'Ab wie vielen Nächten pro Woche sprechen wir gemeinsam darüber?',
          'Wie gehen Gäste mit Bad, Küche und Vorräten um?',
        ],
        lines: 2,
      },
      {
        heading: '4. Gemeinsame Kasse und Vorräte',
        hint: 'Legt fest, was geteilt wird und was nicht. Eine klare Regel verhindert Streit um den letzten Joghurt.',
        fields: [
          'Das kaufen wir gemeinsam (z. B. Spülmittel, Toilettenpapier, Salz):',
          'So viel zahlt jede Person monatlich ein – und wann:',
          'Wer verwaltet die Kasse und wie behalten wir den Überblick?',
          'Eigene Lebensmittel stehen hier – und werden nur nach Fragen genommen:',
        ],
        lines: 1,
      },
      {
        heading: '5. Umgang mit Konflikten',
        hint: 'Ärger lieber früh und direkt ansprechen als per Zettel am Kühlschrank oder im Gruppenchat.',
        checks: [
          'Wir sprechen Probleme persönlich und zeitnah an, nicht über Dritte.',
          'Wir kritisieren das Verhalten, nicht die Person.',
          'Schwierige Themen besprechen wir in Ruhe, nicht spät nachts oder zwischen Tür und Angel.',
          'Wenn zwei sich nicht einigen, kann eine dritte Person aus der WG vermitteln.',
        ],
        fields: [
          'Wann und wie oft machen wir eine kurze WG-Besprechung?',
        ],
        lines: 1,
      },
      {
        heading: '6. Überprüfung und Unterschriften',
        hint: 'Absprachen müssen sich im Alltag bewähren. Plant einen festen Termin, an dem ihr nachjustiert.',
        fields: [
          'Wir schauen uns diese Vereinbarung wieder an am:',
          'Das möchten wir dann besonders prüfen:',
          'Unterschriften aller Mitbewohner:innen (mit Datum):',
        ],
        lines: 2,
      },
    ],
    tips: [
      'Füllt die Vereinbarung am besten aus, bevor es kracht – zum Beispiel beim Einzug einer neuen Person. Dann fühlt sich niemand angegriffen.',
      'Haltet die Regeln kurz und konkret. Lieber fünf Absprachen, an die sich alle halten, als zwanzig, die niemand liest.',
      'Bei Fragen zu Miete, Kaution, Kündigung oder Nebenkostenabrechnung hilft diese Vorlage nicht weiter. Dafür sind Mieterverein oder eine Rechtsberatung zuständig.',
    ],
    relatedConflicts: [
      { category: 'mitbewohner', slug: 'putzplan-ignoriert' },
      { category: 'mitbewohner', slug: 'laerm-in-der-wg' },
      { category: 'mitbewohner', slug: 'isst-meine-sachen' },
      { category: 'mitbewohner', slug: 'partner-wohnt-mit' },
      { category: 'mitbewohner', slug: 'nebenkosten-und-einkauf' },
    ],
    relatedMethods: ['harvard-konzept', 'feedback-geben', 'grenzen-setzen'],
  },

  {
    slug: 'vereinbarung-nach-streit',
    title: 'Vorlage: Vereinbarung nach einem Streit',
    seoTitle: 'Vereinbarung nach einem Streit: Vorlage',
    meta: 'Vorlage zum Ausdrucken: Haltet nach einem Streit fest, was passiert ist, was euch wichtig war, was ihr ändert und wann ihr es überprüft. Für Paare und Teams.',
    icon: '🤝',
    intro:
      'Nach einem Streit ist die Versöhnung oft schnell da – aber ohne klare Absprache wiederholt sich derselbe Konflikt. Diese Vorlage hilft Paaren, Familien und Teams, das Ergebnis eines Klärungsgesprächs festzuhalten. Füllt sie gemeinsam aus, wenn sich die Gemüter beruhigt haben, und nicht mitten im Streit.',
    sections: [
      {
        heading: '1. Bevor ihr anfangt',
        hint: 'Hakt die Punkte gemeinsam ab. Wenn einer davon nicht stimmt, verschiebt das Ausfüllen.',
        checks: [
          'Wir sind beide (oder alle) ruhig genug für dieses Gespräch.',
          'Wir haben ungestört Zeit, mindestens 30 Minuten.',
          'Es geht um eine Lösung, nicht darum, wer recht hat.',
          'Niemand hat Angst vor der Reaktion der anderen. Gab es Gewalt oder Drohungen, holen wir uns zuerst Hilfe von außen.',
        ],
      },
      {
        heading: '2. Was ist passiert?',
        hint: 'Beschreibt die Situation so neutral, dass alle Beteiligten zustimmen können. Keine Deutungen, keine Vorwürfe.',
        fields: [
          'Wer war beteiligt, wann und wo?',
          'Was ist passiert – so, wie es eine Kamera aufgenommen hätte?',
          'Ist das ein einmaliger Streit oder ein wiederkehrendes Muster?',
        ],
        lines: 2,
      },
      {
        heading: '3. Was war jeder Person wichtig?',
        hint: 'Jede Person schreibt ihren Teil selbst oder diktiert ihn. Die andere Person fasst danach kurz zusammen, was sie verstanden hat.',
        fields: [
          'Name: ______ – So ging es mir, das war mir wichtig:',
          'Name: ______ – So ging es mir, das war mir wichtig:',
          'Name: ______ – So ging es mir, das war mir wichtig:',
          'Das tut mir leid / dafür übernehme ich Verantwortung (freiwillig):',
        ],
        lines: 2,
      },
      {
        heading: '4. Was ändern wir konkret?',
        hint: 'Formuliert jede Absprache als Handlung, die man sehen kann. „Mehr Rücksicht“ ist zu vage, „Ich sage bis 18 Uhr Bescheid, wenn ich später komme“ ist konkret.',
        fields: [
          'Absprache 1 – wer macht was?',
          'Absprache 2 – wer macht was?',
          'Absprache 3 – wer macht was?',
          'Unser Stoppsignal, wenn ein Gespräch wieder zu kippen droht:',
        ],
        lines: 2,
      },
      {
        heading: '5. Woran merken wir, dass es klappt?',
        hint: 'Legt fest, woran ihr eine Verbesserung erkennt. Das macht die Überprüfung später fair und leicht.',
        fields: [
          'Daran merken wir, dass es besser läuft:',
          'Das machen wir, wenn eine Absprache mal nicht eingehalten wird:',
        ],
        lines: 2,
      },
      {
        heading: '6. Review-Termin und Unterschriften',
        hint: 'Nach zwei bis vier Wochen schaut ihr gemeinsam drauf: Was klappt, was muss angepasst werden?',
        fields: [
          'Unser Review-Termin (Datum, Uhrzeit, Ort):',
          'Beim Review besprechen wir besonders:',
          'Unterschriften aller Beteiligten (mit Datum):',
        ],
        lines: 2,
      },
    ],
    tips: [
      'Weniger ist mehr: Zwei oder drei Absprachen, die wirklich gelebt werden, bringen mehr als eine lange Liste.',
      'Bewahrt das Blatt an einem Ort auf, an dem ihr es wiederfindet, und bringt es zum Review-Termin mit.',
      'Wiederholt sich derselbe Streit trotz Vereinbarung immer wieder, kann eine Paar-, Familien- oder Teamberatung helfen. Das ist kein Versagen, sondern ein sinnvoller nächster Schritt.',
    ],
    relatedConflicts: [
      { category: 'partner', slug: 'streit-um-geld' },
      { category: 'partner', slug: 'keine-zeit' },
      { category: 'kollegen', slug: 'keine-zusammenarbeit' },
      { category: 'geschwister', slug: 'streit-bei-familienfesten' },
      { category: 'freunde', slug: 'vertrauen-gebrochen' },
    ],
    relatedMethods: ['richtig-entschuldigen', 'gewaltfreie-kommunikation', 'harvard-konzept'],
  },
];
