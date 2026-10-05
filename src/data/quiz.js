// Selbsttest „Wie streitest du? Dein Konfliktstil“
// Zur Selbstreflexion – kein wissenschaftlicher oder diagnostischer Test.
// Die fünf Stile folgen einer in der Konfliktforschung verbreiteten Einteilung nach zwei Achsen:
// „Durchsetzung eigener Anliegen“ und „Rücksicht auf andere“.
// Jede Frage hat genau fünf Antworten, je eine pro Stil. Reihenfolge wechselt von Frage zu Frage.

export const disclaimer =
  'Dieser Selbsttest dient der Selbstreflexion und ist kein wissenschaftlicher Test. Die meisten Menschen nutzen je nach Situation mehrere Stile – kein Stil ist richtig oder falsch.';

export const styles = {
  vermeiden: {
    name: 'Der Rückzug',
    icon: '🐢',
    short: 'Du gehst Streit lieber aus dem Weg und wartest, bis sich die Lage beruhigt hat.',
    strengths: [
      'Du erkennst, wann ein Streit gerade nichts bringt, und schonst so deine Kraft.',
      'Du reagierst selten im Affekt und gibst hitzigen Situationen Zeit zum Abkühlen.'
    ],
    risks: [
      'Wichtige Themen bleiben liegen und kommen später oft größer wieder zurück.',
      'Andere wissen manchmal nicht, was du wirklich denkst oder brauchst.'
    ],
    tips: [
      'Wenn du ein Gespräch vertagst, nenne gleich einen konkreten neuen Zeitpunkt.',
      'Frag dich, welches Thema dich in einem Monat noch beschäftigen wird – genau das sprichst du an.',
      'Starte mit einem kleinen Satz wie „Mir ist da etwas wichtig“ statt mit einer großen Aussprache.'
    ],
    methods: ['ich-botschaften', 'grenzen-setzen']
  },
  nachgeben: {
    name: 'Die Harmonie',
    icon: '🕊️',
    short: 'Dir ist ein gutes Miteinander so wichtig, dass du eigene Wünsche oft zurückstellst.',
    strengths: [
      'Du spürst schnell, was andere brauchen, und sorgst für eine freundliche Atmosphäre.',
      'Du kannst großzügig sein und Kleinigkeiten wirklich loslassen.'
    ],
    risks: [
      'Deine eigenen Bedürfnisse kommen auf Dauer zu kurz, und leiser Frust staut sich an.',
      'Andere gewöhnen sich daran, dass du zurücksteckst, und fragen irgendwann nicht mehr nach.'
    ],
    tips: [
      'Prüf vor einem Ja kurz, ob du es gern tust oder nur Streit vermeiden willst.',
      'Sag bei kleinen Dingen öfter, was du dir wünschst – das übt für die großen Themen.',
      'Verschaff dir Bedenkzeit mit einem Satz wie „Ich gebe dir morgen Bescheid“.'
    ],
    methods: ['grenzen-setzen', 'gewaltfreie-kommunikation']
  },
  durchsetzen: {
    name: 'Die Klarheit',
    icon: '🦁',
    short: 'Du vertrittst deinen Standpunkt direkt und sorgst dafür, dass Dinge entschieden werden.',
    strengths: [
      'Bei dir wissen andere schnell, woran sie sind.',
      'In eiligen oder schwierigen Situationen übernimmst du Verantwortung und triffst Entscheidungen.'
    ],
    risks: [
      'Dein Gegenüber fühlt sich leicht überrollt und zieht sich zurück oder hält dagegen.',
      'Gute Ideen der anderen gehen unter, wenn du zu früh auf deiner Lösung bestehst.'
    ],
    tips: [
      'Stell eine offene Frage, bevor du deine eigene Lösung vorschlägst.',
      'Fass zusammen, was du vom anderen verstanden hast, bevor du widersprichst.',
      'Unterscheide bewusst, wo du festbleiben willst und wo du Spielraum hast.'
    ],
    methods: ['aktives-zuhoeren', 'deeskalation-im-streit']
  },
  kompromiss: {
    name: 'Die Brücke',
    icon: '🌉',
    short: 'Du suchst zügig die Mitte, damit beide etwas bekommen und es weitergehen kann.',
    strengths: [
      'Du bringst festgefahrene Gespräche pragmatisch wieder in Bewegung.',
      'Du wirkst fair, weil du beide Seiten ernst nimmst und niemand ganz verliert.'
    ],
    risks: [
      'Manchmal einigt ihr euch zu schnell auf eine halbe Lösung, mit der niemand ganz zufrieden ist.',
      'Die eigentlichen Bedürfnisse hinter den Positionen bleiben oft unausgesprochen.'
    ],
    tips: [
      'Frag vor dem Aufteilen, was jeder Seite im Kern wirklich wichtig ist.',
      'Prüf nach ein paar Wochen gemeinsam, ob der Kompromiss noch für beide passt.',
      'Trau dich, bei Herzensthemen nicht sofort die Mitte anzubieten.'
    ],
    methods: ['harvard-konzept', 'vier-ohren-modell']
  },
  kooperieren: {
    name: 'Das Team',
    icon: '🤝',
    short: 'Du willst Konflikte gründlich klären und eine Lösung finden, die für alle wirklich passt.',
    strengths: [
      'Du nimmst eigene und fremde Anliegen gleich ernst und findest oft kreative Lösungen.',
      'Wenn du einen Konflikt klärst, wird die Beziehung danach häufig sogar stabiler.'
    ],
    risks: [
      'Gründliche Gespräche kosten Zeit und Energie, die nicht jede Kleinigkeit wert ist.',
      'Nicht jede:r möchte jedes Thema ausführlich besprechen, und das kann andere überfordern.'
    ],
    tips: [
      'Entscheide bewusst, welche Themen ein ausführliches Gespräch verdienen.',
      'Halte gefundene Lösungen kurz fest, damit sie im Alltag nicht verloren gehen.',
      'Akzeptiere, dass manchmal auch eine schnelle Mitte oder ein Nachgeben völlig reicht.'
    ],
    methods: ['gewaltfreie-kommunikation', 'feedback-geben']
  }
};

export const questions = [
  {
    id: 'q1',
    text: 'Dein:e Partner:in kritisiert beim Abendessen, dass du schon wieder zu spät warst. Was tust du am ehesten?',
    answers: [
      { text: 'Ich lasse es erst mal stehen und warte, bis sich die Stimmung beruhigt.', style: 'vermeiden' },
      { text: 'Ich erkläre klar, warum es heute nicht anders ging.', style: 'durchsetzen' },
      { text: 'Ich frage nach, was genau stört, und schildere dann meine Sicht.', style: 'kooperieren' },
      { text: 'Ich entschuldige mich und nehme mir vor, künftig pünktlicher zu sein.', style: 'nachgeben' },
      { text: 'Ich schlage vor, dass wir uns künftig auf einen Zeitpuffer einigen.', style: 'kompromiss' }
    ]
  },
  {
    id: 'q2',
    text: 'Deine Chefin bittet dich am Freitagnachmittag, noch eine größere Aufgabe zu übernehmen. Du hast schon Pläne. Was tust du am ehesten?',
    answers: [
      { text: 'Ich übernehme sie – das Team soll sich auf mich verlassen können.', style: 'nachgeben' },
      { text: 'Ich biete an, heute einen Teil und den Rest Montag früh zu erledigen.', style: 'kompromiss' },
      { text: 'Ich bitte um kurze Bedenkzeit und melde mich später bei ihr.', style: 'vermeiden' },
      { text: 'Ich frage nach der Dringlichkeit, und wir suchen gemeinsam eine passende Lösung.', style: 'kooperieren' },
      { text: 'Ich sage deutlich, dass ich heute pünktlich gehe, und begründe es.', style: 'durchsetzen' }
    ]
  },
  {
    id: 'q3',
    text: 'Ein Kollege stellt im Meeting deine Idee vor, ohne dich zu erwähnen. Was tust du am ehesten?',
    answers: [
      { text: 'Ich ergänze direkt im Meeting, dass die Idee von mir stammt.', style: 'durchsetzen' },
      { text: 'Ich lasse es laufen – ein Streit vor allen bringt gerade wenig.', style: 'vermeiden' },
      { text: 'Ich spreche ihn später an, um zu verstehen, wie es dazu kam.', style: 'kooperieren' },
      { text: 'Ich schlage ihm vor, die Idee künftig gemeinsam vorzustellen.', style: 'kompromiss' },
      { text: 'Ich freue mich, dass die Idee ankommt – wer sie hatte, ist zweitrangig.', style: 'nachgeben' }
    ]
  },
  {
    id: 'q4',
    text: 'Deine Eltern erwarten dich wie jedes Jahr zu Weihnachten. Du würdest diesmal gern etwas anderes machen. Was tust du am ehesten?',
    answers: [
      { text: 'Ich frage, was ihnen am Fest wichtig ist, und wir planen gemeinsam neu.', style: 'kooperieren' },
      { text: 'Ich komme am ersten Feiertag und mache danach mein eigenes Programm.', style: 'kompromiss' },
      { text: 'Ich sage frühzeitig und klar, dass ich dieses Jahr andere Pläne habe.', style: 'durchsetzen' },
      { text: 'Ich lege mich noch nicht fest und spreche das Thema später an.', style: 'vermeiden' },
      { text: 'Ich komme wie immer – ihnen bedeutet es viel, und das zählt für mich.', style: 'nachgeben' }
    ]
  },
  {
    id: 'q5',
    text: 'Eine Freundin sagt schon zum dritten Mal kurzfristig ein Treffen ab. Was tust du am ehesten?',
    answers: [
      { text: 'Ich antworte verständnisvoll – jede:r hat mal stressige Phasen.', style: 'nachgeben' },
      { text: 'Ich sage offen, dass mich das ärgert und ich mir mehr Verlässlichkeit wünsche.', style: 'durchsetzen' },
      { text: 'Ich schlage vor, uns seltener, dafür aber fest verabredet zu treffen.', style: 'kompromiss' },
      { text: 'Ich sage nichts dazu und melde mich erst mal von selbst seltener.', style: 'vermeiden' },
      { text: 'Ich frage, was gerade bei ihr los ist, und erzähle, wie es bei mir ankommt.', style: 'kooperieren' }
    ]
  },
  {
    id: 'q6',
    text: 'In der Wohnung über dir wird unter der Woche öfter bis spät in die Nacht gefeiert. Was tust du am ehesten?',
    answers: [
      { text: 'Ich schlage vor: am Wochenende gern länger, unter der Woche früher leise.', style: 'kompromiss' },
      { text: 'Ich warte erst mal ab – vielleicht ist es nur eine Phase.', style: 'vermeiden' },
      { text: 'Ich klingle und sage klar, dass es unter der Woche so nicht geht.', style: 'durchsetzen' },
      { text: 'Ich besorge mir Ohrstöpsel, damit ich niemandem den Spaß verderbe.', style: 'nachgeben' },
      { text: 'Ich spreche sie an, und wir suchen zusammen eine Lösung, die allen passt.', style: 'kooperieren' }
    ]
  },
  {
    id: 'q7',
    text: 'In deiner WG bleibt das Geschirr einer Mitbewohnerin regelmäßig tagelang in der Spüle stehen. Was tust du am ehesten?',
    answers: [
      { text: 'Ich rege ein WG-Treffen an, damit wir gemeinsam ein System finden.', style: 'kooperieren' },
      { text: 'Ich spüle kurz mit – so bleibt die Stimmung in der WG gut.', style: 'nachgeben' },
      { text: 'Ich spüle erst mal nur mein eigenes Geschirr und lasse das Thema ruhen.', style: 'vermeiden' },
      { text: 'Ich schlage einen festen Wechsel vor: eine Woche sie, eine Woche ich.', style: 'kompromiss' },
      { text: 'Ich spreche es direkt an und bitte darum, dass es heute noch erledigt wird.', style: 'durchsetzen' }
    ]
  },
  {
    id: 'q8',
    text: 'Ihr plant euren gemeinsamen Urlaub: Du möchtest in die Berge, dein:e Partner:in ans Meer. Was tust du am ehesten?',
    answers: [
      { text: 'Ich lasse die Entscheidung erst mal offen – wir haben ja noch Zeit.', style: 'vermeiden' },
      { text: 'Wir sammeln, was jede:r im Urlaub braucht, und suchen ein Ziel für beide.', style: 'kooperieren' },
      { text: 'Ich stimme fürs Meer – Hauptsache, wir haben eine schöne Zeit zusammen.', style: 'nachgeben' },
      { text: 'Ich werbe mit guten Argumenten dafür, dass es in die Berge geht.', style: 'durchsetzen' },
      { text: 'Wir teilen den Urlaub auf: ein paar Tage Berge, ein paar Tage Meer.', style: 'kompromiss' }
    ]
  },
  {
    id: 'q9',
    text: 'Du und eine Kollegin möchtet beide zwischen den Jahren frei haben, aber eine:r muss arbeiten. Was tust du am ehesten?',
    answers: [
      { text: 'Ich erkläre, warum ich dieses Jahr frei brauche, und bleibe dabei.', style: 'durchsetzen' },
      { text: 'Ich schlage vor, die Tage aufzuteilen, sodass jede:r einen Teil frei hat.', style: 'kompromiss' },
      { text: 'Ich lasse ihr den Vortritt – ein gutes Verhältnis im Team ist mir wichtiger.', style: 'nachgeben' },
      { text: 'Wir setzen uns zusammen und prüfen, welche Lösung für uns beide wirklich passt.', style: 'kooperieren' },
      { text: 'Ich überlasse die Entscheidung lieber der Teamleitung.', style: 'vermeiden' }
    ]
  },
  {
    id: 'q10',
    text: 'Beim Familientreffen kommentiert dein Vater zum wiederholten Mal deine Berufswahl. Was tust du am ehesten?',
    answers: [
      { text: 'Ich höre geduldig zu – er meint es ja gut mit mir.', style: 'nachgeben' },
      { text: 'Ich frage, welche Sorge dahintersteckt, und erzähle, was mir mein Beruf gibt.', style: 'kooperieren' },
      { text: 'Ich wechsle freundlich das Thema und genieße den Rest des Abends.', style: 'vermeiden' },
      { text: 'Ich biete an, einmal in Ruhe darüber zu reden – danach soll es gut sein.', style: 'kompromiss' },
      { text: 'Ich sage ruhig, aber deutlich, dass meine Berufswahl meine Entscheidung ist.', style: 'durchsetzen' }
    ]
  }
];
