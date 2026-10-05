export default {
  published: '2026-10-01',
  slug: 'kommt-unangemeldet',
  title: 'Vermieter:in kommt unangemeldet vorbei',
  icon: '🚪',
  summary: 'Es klingelt ohne Vorwarnung, Handwerker stehen plötzlich vor der Tür oder Interessierte sollen gleich besichtigen: Du wünschst dir feste Terminabsprachen statt Überraschungen.',
  problem: 'Du kommst gerade aus der Dusche, und es klingelt: Deine Vermieterin steht vor der Tür und will „nur kurz nach der Heizung schauen“. Ein anderes Mal meldet sich die Hausverwaltung erst, als der Handwerker schon im Treppenhaus wartet. Oder du erfährst am Vormittag, dass am Nachmittag Kaufinteressierte durch deine Wohnung geführt werden sollen. Jeder einzelne Besuch mag harmlos gemeint sein, doch zusammen entsteht ein Gefühl, das an die Substanz geht: Deine Wohnung fühlt sich nicht mehr ganz wie deine an. Gleichzeitig willst du das Verhältnis nicht belasten, denn du bist auf eine funktionierende Beziehung angewiesen, wenn einmal etwas kaputtgeht. Genau diese Abhängigkeit macht es schwer, klar zu sagen, was dich stört.',
  causes: [
    'Viele Vermieter:innen, gerade private, sehen die Wohnung innerlich noch als ihr Eigentum und nicht als dein Zuhause. Ein spontaner Besuch fühlt sich für sie wie ein Kontrollgang an, nicht wie ein Eingriff in deine Privatsphäre.',
    'Oft steckt schlicht schlechte Organisation dahinter: Handwerker melden sich kurzfristig, Termine werden zwischen Verwaltung, Firma und Eigentümer:in hin- und hergeschoben, und du stehst am Ende der Kette.',
    'Manchmal wurde nie ausdrücklich besprochen, wie Besuche ablaufen sollen. Ohne diese Absprache füllt jede Seite die Lücke mit eigenen Vorstellungen davon, was als normal gilt.'
  ],
  safety: 'Ein unangekündigtes Klingeln ist lästig, aber meistens ein Alltagskonflikt. Anders ist es, wenn jemand deine Wohnung ohne deine Zustimmung betritt, etwa mit einem eigenen Schlüssel, während du nicht da bist, wenn du bedroht, belästigt oder eingeschüchtert wirst, wenn Besuche gezielt Druck aufbauen sollen oder wenn Bemerkungen erkennbar an Herkunft, Religion, Geschlecht, Behinderung oder deiner Lebensform ansetzen. Dann versuche es nicht mit einem weiteren Gesprächsskript. Dokumentiere jeden Vorfall mit Datum und Uhrzeit, bewahre Nachrichten auf, notiere mögliche Zeug:innen und hol dir Unterstützung bei einem Mieterverein, einer Mieterberatung oder anwaltlich. Bei akuter Gefahr wählst du 110.',
  one_party: {
    preparation: 'Schreib dir auf, wann in den letzten Wochen jemand unangemeldet kam oder kommen wollte, und aus welchem Anlass. Trenne dabei nachvollziehbare Anliegen wie eine Reparatur von reinen Kontrollbesuchen. Überleg dir, was du konkret möchtest: zum Beispiel eine Ankündigung per Nachricht einige Tage vorher, feste Zeitfenster oder die Möglichkeit, bei Besuchen dabei zu sein. Was dir dabei rechtlich zusteht, klärst du nicht im Gespräch, sondern bei Bedarf mit einem Mieterverein. Dein Ziel ist eine gute Absprache, nicht ein Sieg.',
    scripts: {
      sanft: 'Ich verstehe, dass Sie nach der Wohnung schauen möchten, und ich will auch, dass hier alles in Ordnung bleibt. Mir fällt es aber schwer, wenn ich überrascht werde, weil ich dann oft gerade nicht darauf eingestellt bin. Können wir vereinbaren, dass Sie mir vorher kurz Bescheid geben und wir einen Termin ausmachen?',
      direkt: 'Heute passt es mir nicht, ich bin auf Besuch nicht vorbereitet. Ich möchte gern, dass wir Termine künftig vorher absprechen. Schreiben Sie mir bitte eine Nachricht mit zwei, drei Vorschlägen, dann melde ich mich schnell zurück, und wir finden einen Zeitpunkt, der für beide passt.',
      sachlich: 'In den letzten Wochen standen dreimal Personen ohne Ankündigung vor der Tür, zuletzt ein Handwerker am Montagvormittag. Ich möchte Reparaturen und Termine gern ermöglichen und bin dafür gut erreichbar. Ich bitte Sie, Besuche künftig vorher per Nachricht oder E-Mail anzukündigen. Kurze Nachricht zum Mitschreiben: „Hallo, ich bitte darum, Termine in meiner Wohnung künftig vorab mit mir abzustimmen. Ich bin per E-Mail und telefonisch gut erreichbar und melde mich zügig zurück. Vielen Dank.“'
    },
    steps: [
      'Öffne die Tür, wenn du willst, aber lass dich nicht zu einem Besuch drängen, auf den du gerade nicht eingestellt bist.',
      'Bleib freundlich und kurz: Sag, dass es jetzt nicht passt, und biete an, einen Termin zu vereinbaren.',
      'Notiere danach Datum, Uhrzeit, Anlass und wer da war.',
      'Such zu einem ruhigen Zeitpunkt das Gespräch oder schreib eine kurze Nachricht mit deiner Bitte um Terminabsprache.',
      'Mach einen konkreten Vorschlag, etwa Ankündigung per E-Mail und zwei Terminvorschläge zur Auswahl.',
      'Bestätige getroffene Absprachen schriftlich, damit beide dasselbe in Erinnerung haben.',
      'Wiederholt sich das Problem trotzdem, lass dich beim Mieterverein oder einer Mieterberatung beraten.'
    ],
    reactions: [
      {
        trigger: 'Das ist immer noch meine Wohnung, da darf ich doch mal reinschauen.',
        reaction: 'Mir ist klar, dass Ihnen die Wohnung wichtig ist, und ich gehe sorgsam mit ihr um. Für mich ist sie gleichzeitig mein Zuhause. Was dabei im Einzelnen gilt, lasse ich mir gern erklären. Ich schlage vor, dass wir einfach Termine vereinbaren, das ist für uns beide entspannter.'
      },
      {
        trigger: 'Der Handwerker hat nur heute Zeit, das geht nicht anders.',
        reaction: 'Ich verstehe, dass die Planung schwierig ist, und ich will die Reparatur auch. Heute kann ich es trotzdem nicht einrichten. Geben Sie mir bitte die Kontaktdaten der Firma oder zwei andere Termine, dann kümmere ich mich schnell darum.'
      },
      {
        trigger: 'Sie haben doch wohl nichts zu verbergen?',
        reaction: 'Darum geht es nicht. Ich möchte einfach wissen, wann jemand in meine Wohnung kommt, so wie Sie das bei sich zu Hause sicher auch möchten. Ein kurzer Hinweis vorher reicht mir völlig.'
      }
    ],
    boundary: 'Du musst dich nicht rechtfertigen, weil du Besuche planen möchtest, und du musst im Gespräch auch keine rechtlichen Fragen klären. Wenn trotz deiner Bitte weiter unangemeldet geklingelt wird, bleib bei kurzen, freundlichen Absagen und halte alles schriftlich fest. Betritt jemand deine Wohnung gegen deinen Willen oder in deiner Abwesenheit, ist das kein Fall mehr für ein Gespräch zwischen Tür und Angel: Dokumentiere es und hol dir Unterstützung bei einem Mieterverein, einer Mieterberatung oder anwaltlich.'
  },
  two_party: {
    goal: 'Eine klare, schriftlich festgehaltene Absprache darüber finden, wie Besuche, Reparaturen und Besichtigungen angekündigt werden, sodass die Wohnung gepflegt bleibt und du dich in deinem Zuhause nicht überrumpelt fühlst.',
    rules: [
      'Beide sprechen über konkrete Situationen und Anliegen, nicht über Misstrauen oder Charakter.',
      'Das Interesse an einer gepflegten Wohnung und das Bedürfnis nach Privatsphäre werden gleichermaßen ernst genommen.',
      'Rechtliche Fragen werden nicht im Gespräch entschieden, sondern bei Bedarf mit Beratung geklärt.',
      'Jede Absprache wird schriftlich bestätigt, damit es später keine unterschiedlichen Erinnerungen gibt.'
    ],
    questions: [
      'Aus welchen Anlässen möchten Sie die Wohnung in nächster Zeit betreten oder betreten lassen?',
      'Wie viel Vorlauf wäre für Sie bei Terminen gut machbar?',
      'Über welchen Weg erreichen wir uns am zuverlässigsten, etwa E-Mail, Nachricht oder Telefon?',
      'Wie gehen wir mit Handwerkerterminen um, die kurzfristig vergeben werden?',
      'Was brauchen Sie von mir, damit Sie sich darauf verlassen können, dass mit der Wohnung alles in Ordnung ist?'
    ],
    steps: [
      'Ihr vereinbart einen ruhigen Gesprächstermin, gern telefonisch oder persönlich, nicht zwischen Tür und Angel.',
      'Du schilderst sachlich, welche Besuche dich überrascht haben und warum dir Ankündigungen wichtig sind.',
      'Die Vermieterseite erklärt ihre Anliegen, etwa geplante Reparaturen, Wartungen oder einen Verkauf.',
      'Gemeinsam legt ihr fest, wie Termine angekündigt, bestätigt und bei Bedarf verschoben werden.',
      'Ihr klärt, wie ihr mit Handwerkern und Besichtigungen umgeht und ob du dabei sein möchtest.',
      'Du fasst das Ergebnis in einer kurzen E-Mail zusammen und bittest um Bestätigung.'
    ],
    agreement: 'Wir vereinbaren, dass Besuche in der Wohnung, Handwerkertermine und Besichtigungen vorab per E-Mail oder Nachricht angekündigt werden, möglichst mit zwei Terminvorschlägen. Die Mieterseite antwortet zügig und schlägt bei Verhinderung eine Alternative vor. Handwerkerfirmen dürfen die Kontaktdaten der Mieterseite erhalten, um direkt einen Termin abzustimmen. Spontane Besuche ohne Absprache unterbleiben, außer es gibt einen echten Notfall wie einen Wasserschaden. Was darüber hinaus rechtlich gilt, klärt jede Seite bei Bedarf mit einer Beratung.'
  },
  dos: [
    'Jeden unangemeldeten Besuch kurz mit Datum, Uhrzeit und Anlass notieren.',
    'Freundlich bleiben und sofort einen konkreten Terminvorschlag machen.',
    'Absprachen immer per E-Mail oder Nachricht bestätigen.',
    'Gut erreichbar sein, damit Terminabsprachen tatsächlich funktionieren.'
  ],
  donts: [
    'Im Treppenhaus rechtliche Behauptungen aufstellen, die du nicht geprüft hast.',
    'Die Tür wortlos zuschlagen oder dich tot stellen, statt einen Termin anzubieten.',
    'Reparaturen aus Ärger blockieren und dir damit selbst schaden.',
    'Den Ärger monatelang schlucken, bis er in einem heftigen Streit herausplatzt.'
  ],
  next_step: 'Schreib heute eine kurze, freundliche Nachricht an deine Vermieterin, deinen Vermieter oder die Hausverwaltung: Du bittest darum, Termine künftig vorab abzustimmen, und nennst den Weg, über den du am besten erreichbar bist. Leg dir parallel eine einfache Liste an, in der du Besuche mit Datum festhältst.',
  related: [
    { category: 'vermieter', slug: 'reparatur-verschleppt' },
    { category: 'schwiegereltern', slug: 'kommen-unangemeldet' },
    { category: 'eltern', slug: 'respektieren-grenzen-nicht' },
    { category: 'vermieter', slug: 'kaution-zurueck' }
  ],
  article: {
    title: 'Vermieter kommt unangemeldet: So bittest du freundlich und klar um Terminabsprachen',
    meta: 'Vermieter:in kommt unangemeldet oder schickt Handwerker ohne Vorwarnung? So sprichst du es ruhig an, vereinbarst Termine und hältst alles schriftlich fest.',
    intro: 'Die eigene Wohnung ist der Ort, an dem du bestimmst, wer hereinkommt und wann. Umso irritierender ist es, wenn plötzlich die Vermieterin vor der Tür steht, ein Handwerker ohne Ankündigung klingelt oder dir die Hausverwaltung am Morgen mitteilt, dass am Nachmittag Interessierte die Räume sehen wollen. Viele Mieter:innen fühlen sich in solchen Momenten hilflos. Sie wollen das Verhältnis nicht belasten, schließlich braucht man die andere Seite, wenn die Heizung ausfällt oder der Abfluss verstopft ist. Gleichzeitig wächst mit jedem Überraschungsbesuch das Gefühl, im eigenen Zuhause nicht ganz ungestört zu sein. Dieser Ratgeber zeigt dir, wie du das Thema ansprichst, ohne das Verhältnis zu beschädigen, und wie du zu verlässlichen Absprachen kommst. Er ersetzt ausdrücklich keine Rechtsberatung. Was im Einzelfall gilt, klären ein Mieterverein, eine Mieterberatung oder eine anwaltliche Beratung.',
    situation: 'Oft beginnt es harmlos. Die Vermieterin wohnt im selben Haus und schaut „mal eben“ vorbei, weil sie ohnehin gerade da ist. Der Vermieter will sich die neue Küche ansehen, von der er gehört hat. Die Hausverwaltung vergibt einen Wartungstermin an eine Firma und vergisst, dich zu informieren. Jede dieser Situationen lässt sich für sich genommen erklären. Belastend wird es durch die Häufung und durch das Gefühl, keinen Einfluss zu haben. Manche Mieter:innen fangen an, die Wohnung ständig vorzeigbar zu halten, weil jederzeit jemand kommen könnte. Andere öffnen gar nicht mehr, wenn es unerwartet klingelt. Beides kostet Kraft. Hinzu kommt ein Machtgefälle, das selten ausgesprochen wird: Wer mietet, hat oft Sorge, als schwierig zu gelten, wenn er Grenzen setzt. Diese Sorge ist verständlich, aber eine höfliche Bitte um Terminabsprache ist kein Angriff, sondern ein ganz normales Anliegen.',
    causes: [
      'Unterschiedliche Vorstellungen von Eigentum und Zuhause prallen aufeinander. Für viele private Vermieter:innen ist die Wohnung eine Investition, manchmal auch ein Ort mit persönlicher Geschichte. Sie fühlen sich verantwortlich und wollen nach dem Rechten sehen. Für dich ist dieselbe Wohnung dein Rückzugsort. Beide Perspektiven sind nachvollziehbar, sie passen nur ohne Absprache schlecht zusammen.',
      'Fehlende Organisation erzeugt Überraschungen. Zwischen Eigentümer:in, Hausverwaltung und Handwerksbetrieb gehen Informationen leicht verloren. Ein Termin wird vergeben, niemand fühlt sich zuständig, dir Bescheid zu sagen, und am Ende steht jemand vor deiner Tür, der selbst davon ausgeht, dass du informiert bist.',
      'Nie geklärte Erwartungen lassen Spielraum für Missverständnisse. Beim Einzug geht es um Schlüssel, Zählerstände und Mülltonnen, selten um die Frage, wie Besuche angekündigt werden. Ohne diese Absprache hält jede Seite das eigene Vorgehen für selbstverständlich und wundert sich über die Reaktion der anderen.'
    ],
    mistakes: [
      'Ein häufiger Fehler ist das stille Hinnehmen. Wer jedes Mal öffnet, lächelt und den Ärger herunterschluckt, sendet das Signal, dass alles in Ordnung ist. Die andere Seite ändert dann nichts, und irgendwann entlädt sich der Frust in einem Moment, in dem ein ruhiges Gespräch kaum noch möglich ist.',
      'Ebenso ungünstig ist die Konfrontation mit juristischen Schlagworten an der Haustür. Wer im Affekt Paragrafen zitiert, die er nur aus einem Forum kennt, verschärft die Situation und riskiert, mit Halbwissen danebenzuliegen. Rechtsfragen gehören in eine Beratung, nicht in ein Gespräch im Treppenhaus.',
      'Ein dritter Fehler ist die Blockade aus Trotz. Wer aus Ärger über Überraschungsbesuche auch sinnvolle Reparaturtermine ablehnt oder nicht mehr erreichbar ist, schadet sich am Ende selbst. Die Wohnung bleibt in schlechtem Zustand, und das Verhältnis kühlt weiter ab.'
    ],
    strategy: 'Hilfreich ist ein Vorgehen in drei Schritten: kurz reagieren, sachlich ansprechen, verbindlich festhalten. Im Moment des Klingelns geht es nicht darum, das Grundsatzproblem zu lösen. Es reicht, freundlich zu sagen, dass es gerade nicht passt, und einen Termin anzubieten. Das ist höflich, konkret und lässt der anderen Seite einen Weg, ohne das Gesicht zu verlieren. Danach folgt der wichtigere Teil. Such dir einen ruhigen Moment und sprich das Thema grundsätzlich an, persönlich, am Telefon oder in einer kurzen E-Mail. Beschreibe nicht die Person, sondern die Situationen: wann jemand kam, aus welchem Anlass und was das für dich bedeutet hat. Formuliere dann eine klare Bitte, zum Beispiel eine Ankündigung einige Tage vorher mit Terminvorschlägen. Je konkreter dein Vorschlag, desto leichter fällt es der anderen Seite, einfach zuzustimmen. Wichtig ist, dass du auch die Anliegen der Vermieterseite ernst nimmst. Vielleicht steht eine Wartung an, vielleicht soll die Wohnung verkauft werden, vielleicht gibt es die Sorge, dass ein Schaden unbemerkt bleibt. Wenn du zeigst, dass du Reparaturen und Termine ermöglichen willst, nimmst du dem Konflikt viel Schärfe. Ein nützlicher Baustein ist dabei deine Erreichbarkeit. Nenne einen Kanal, über den du zuverlässig antwortest, und reagiere dann auch zügig. So wird die Terminabsprache für beide Seiten bequemer als der Überraschungsbesuch. Bei Handwerkern hilft oft ein kleiner Kniff: Bitte darum, dass die Firma deine Kontaktdaten bekommt und direkt mit dir einen Termin abstimmt. Das spart der Verwaltung Arbeit und dir unangenehme Überraschungen. Zum Schluss hältst du das Ergebnis schriftlich fest. Eine kurze E-Mail mit dem Satz „Wie besprochen, vereinbaren wir …“ genügt. Parallel führst du eine einfache Liste, in der du Besuche mit Datum notierst. Das ist keine Kampfansage, sondern eine Gedächtnisstütze. Falls sich trotz Absprache nichts ändert, hast du damit eine sachliche Grundlage für eine Beratung beim Mieterverein.',
    examples: [
      'Lea wohnt im Haus ihrer Vermieterin, die regelmäßig klingelt, um „kurz nach den Blumen auf dem Balkon“ zu sehen. Lea spricht sie an einem Sonntag im Hof an, bedankt sich für die Sorge und erklärt, dass sie sich durch die spontanen Besuche beobachtet fühlt. Sie schlagen gemeinsam vor, dass die Vermieterin vorher eine Nachricht schickt. Seitdem kommt sie seltener, und die Stimmung ist entspannter als vorher.',
      'Bei Murat stehen zweimal Handwerker ohne Vorwarnung vor der Tür. Er schreibt der Hausverwaltung eine kurze, freundliche E-Mail, bittet um Ankündigung und bietet an, dass Firmen ihn direkt kontaktieren. Die Verwaltung gibt seine Nummer künftig weiter, und die nächsten Termine laufen reibungslos.',
      'Sandras Wohnung soll verkauft werden, und der Makler will Besichtigungen am selben Tag ansetzen. Sandra bittet schriftlich um feste Zeitfenster und darum, bei Besichtigungen anwesend zu sein. Weil sie unsicher ist, was sie dabei verlangen kann, lässt sie sich zusätzlich beim Mieterverein beraten und geht danach gelassener in die Gespräche.'
    ],
    help: 'Nicht jede Situation lässt sich mit einem freundlichen Gespräch klären. Wenn jemand deine Wohnung ohne deine Zustimmung betritt, etwa mit einem eigenen Schlüssel in deiner Abwesenheit, wenn Besuche genutzt werden, um dich unter Druck zu setzen, oder wenn du belästigt, bedroht oder wegen Herkunft, Religion, Geschlecht, Behinderung oder Lebensform herabgesetzt wirst, ist das kein gewöhnlicher Mietkonflikt mehr. Dokumentiere dann jeden Vorfall mit Datum, Uhrzeit und möglichen Zeug:innen, bewahre Nachrichten auf und hol dir Unterstützung bei einem Mieterverein, einer Mieterberatung oder anwaltlich. Bei akuter Gefahr rufst du die Polizei unter 110. Auch bei allen Fragen dazu, wann und unter welchen Umständen Besuche möglich sind, sind diese Stellen die richtige Adresse. Dieser Ratgeber ersetzt keine Rechtsberatung, er hilft dir, ruhig und klar zu kommunizieren.',
    faqs: [
      {
        question: 'Muss ich die Tür öffnen, wenn mein Vermieter unangemeldet klingelt?',
        answer: 'Du kannst freundlich sagen, dass es gerade nicht passt, und einen Termin anbieten. Was rechtlich im Einzelfall gilt, klärt ein Mieterverein oder eine anwaltliche Beratung.'
      },
      {
        question: 'Wie formuliere ich die Bitte um Terminabsprache, ohne unhöflich zu wirken?',
        answer: 'Beschreibe kurz, dass dich Überraschungsbesuche belasten, und mach einen konkreten Vorschlag, etwa Ankündigung per E-Mail mit zwei Terminen. Betone, dass du Reparaturen ermöglichen willst.'
      },
      {
        question: 'Was mache ich, wenn Handwerker ohne Vorwarnung kommen?',
        answer: 'Bitte die Hausverwaltung schriftlich darum, Termine anzukündigen oder deine Kontaktdaten an die Firma weiterzugeben. So stimmst du Termine direkt ab und wirst nicht mehr überrascht.'
      },
      {
        question: 'Sollte ich die Besuche dokumentieren?',
        answer: 'Ja, eine kurze Notiz mit Datum, Uhrzeit, Anlass und Person reicht. Sie hilft dir, sachlich zu bleiben, und ist eine gute Grundlage, falls du dich später beraten lässt.'
      },
      {
        question: 'Was tun, wenn jemand ohne meine Zustimmung in der Wohnung war?',
        answer: 'Dokumentiere den Vorfall sofort, bewahre Hinweise und Nachrichten auf und wende dich an einen Mieterverein, eine Mieterberatung oder eine anwaltliche Beratung. Bei akuter Gefahr wählst du 110.'
      }
    ]
  }
};
