export default {
  published: '2026-10-01',
  slug: 'kaution-zurueck',
  title: 'Kaution kommt nicht zurück: So fragst du nach',
  icon: '🔑',
  summary: 'Du bist ausgezogen, hast die Schlüssel abgegeben, doch von der Kaution hörst du nichts oder die Abzüge sind unklar: So fragst du freundlich, bestimmt und gut belegt nach.',
  problem: 'Die Kartons sind ausgepackt, das neue Zuhause fühlt sich langsam vertraut an, nur eine Sache hängt noch nach: die Kaution der alten Wohnung. Wochen vergehen, ohne dass sich jemand meldet. Oder es kommt eine knappe Nachricht mit Abzügen, die du nicht nachvollziehen kannst, etwa für Streichen, Reinigung oder einen Kratzer, der schon beim Einzug da war. Du bist unsicher, ob du nachfragen sollst, wie oft und in welchem Ton. Einerseits willst du nicht als pingelig gelten, andererseits geht es oft um viel Geld, das du für den Umzug gut gebrauchen könntest. Weil der Kontakt nach dem Auszug lose geworden ist, fühlt sich jede Nachfrage wie ein Anklopfen an einer Tür an, die eigentlich schon geschlossen ist.',
  causes: [
    'Häufig ist es schlicht Nachlässigkeit oder Überlastung: Private Vermieter:innen haben das Thema nicht auf dem Schirm, Hausverwaltungen arbeiten Vorgänge in einer langen Reihe ab, und niemand fühlt sich gedrängt.',
    'Oft ist noch etwas offen, das die andere Seite abwarten will, etwa eine Abrechnung oder die Frage, ob nach dem Auszug noch Mängel auftauchen. Wird das nicht erklärt, wirkt das Schweigen wie Hinhalten.',
    'Unterschiedliche Vorstellungen vom Zustand der Wohnung sorgen für Streit: Was du als normale Gebrauchsspuren siehst, hält die andere Seite vielleicht für einen Schaden, besonders wenn es kein gemeinsames Übergabeprotokoll gibt.'
  ],
  safety: 'Eine verzögerte Kaution ist ärgerlich, aber meistens ein Alltagskonflikt, den du mit klarer Kommunikation und guter Beratung angehen kannst. Anders ist es, wenn du bedroht, beschimpft oder eingeschüchtert wirst, wenn dir jemand nachstellt, dich wiederholt unter Druck setzt, auf Forderungen ohne Nachweis einzugehen, oder wenn Äußerungen erkennbar an Herkunft, Religion, Geschlecht, Behinderung oder deiner Lebensform ansetzen. Dann versuche es nicht mit einem weiteren Gesprächsskript. Dokumentiere alles mit Datum, bewahre Nachrichten auf und hol dir Unterstützung bei einem Mieterverein, einer Mieterberatung oder anwaltlich. Bei akuter Gefahr wählst du 110.',
  one_party: {
    preparation: 'Leg dir vor jeder Nachfrage deine Unterlagen zurecht: Mietvertrag, Nachweis über die gezahlte Kaution, Übergabeprotokoll von Einzug und Auszug, Fotos der Wohnung und den bisherigen Schriftverkehr. Notiere, wann du die Schlüssel abgegeben hast und ob bei der Übergabe etwas beanstandet wurde. Prüfe, ob die andere Seite deine neue Adresse und deine Kontoverbindung hat. Überleg dir, was du konkret möchtest, zum Beispiel eine Rückmeldung zum Stand oder eine nachvollziehbare Aufstellung der Abzüge. Was dir rechtlich zusteht und wann, klärt ein Mieterverein oder eine anwaltliche Beratung, nicht dieses Gespräch.',
    scripts: {
      sanft: 'Hallo, ich hoffe, die Wohnung ist gut an die Nachmieter:innen übergegangen. Ich wollte mich kurz melden, weil ich zur Kaution noch nichts gehört habe. Können Sie mir sagen, wie der Stand ist und ob Sie noch etwas von mir brauchen?',
      direkt: 'Ich melde mich wegen meiner Kaution. Seit der Schlüsselübergabe habe ich keine Rückmeldung bekommen, und ich möchte das jetzt gern abschließen. Bitte teilen Sie mir mit, wann ich mit der Rückzahlung rechnen kann, oder schicken Sie mir eine Aufstellung, falls Sie etwas einbehalten möchten.',
      sachlich: 'Kurze Nachricht zum Mitschreiben: „Guten Tag, am Tag der Übergabe habe ich die Wohnung mit allen Schlüsseln zurückgegeben, das Übergabeprotokoll liegt Ihnen vor. Ich bitte um eine Rückmeldung zum Stand meiner Kaution. Falls Sie Abzüge vornehmen möchten, bitte ich um eine nachvollziehbare Aufstellung mit Begründung und Belegen. Meine aktuelle Adresse und Kontoverbindung finden Sie unten. Vielen Dank und freundliche Grüße.“'
    },
    steps: [
      'Sammle deine Unterlagen an einem Ort: Vertrag, Kautionsnachweis, Übergabeprotokolle, Fotos, Schriftverkehr.',
      'Schreib eine erste freundliche Nachfrage, am besten per E-Mail oder Brief, damit du einen Nachweis hast.',
      'Nenn darin dein Anliegen klar: Rückmeldung zum Stand oder nachvollziehbare Aufstellung möglicher Abzüge.',
      'Kommt keine Antwort, frag nach einiger Zeit noch einmal freundlich und etwas bestimmter nach.',
      'Werden Abzüge genannt, gleiche sie mit Protokoll und Fotos ab, bevor du antwortest.',
      'Antworte sachlich auf jeden Punkt und bitte bei Unklarheiten um Belege.',
      'Bleibt es ungeklärt, lass dich mit deinen Unterlagen beim Mieterverein, einer Mieterberatung oder anwaltlich beraten.'
    ],
    reactions: [
      {
        trigger: 'Das dauert eben, ich melde mich schon, wenn es so weit ist.',
        reaction: 'Das verstehe ich. Mir würde es helfen, ungefähr zu wissen, woran es gerade noch hängt und womit ich rechnen kann. Können Sie mir das kurz schriftlich mitteilen?'
      },
      {
        trigger: 'Die Wohnung war nicht in dem Zustand, wie ich sie übergeben habe.',
        reaction: 'Laut unserem Übergabeprotokoll und meinen Fotos war der Zustand so, wie wir ihn gemeinsam festgehalten haben. Wenn Sie etwas anders sehen, schicken Sie mir bitte eine Aufstellung mit den konkreten Punkten und Belegen, dann schaue ich mir das in Ruhe an.'
      },
      {
        trigger: 'Da kommen noch Kosten auf Sie zu, deshalb behalte ich alles erst mal.',
        reaction: 'Ich möchte nachvollziehen können, um welche Kosten es geht. Bitte nennen Sie mir die Punkte schriftlich. Wie das Einbehalten im Einzelnen geregelt ist, lasse ich mir bei Bedarf beraten.'
      }
    ],
    boundary: 'Du musst dich nicht dafür entschuldigen, dass du nach deinem Geld fragst, und du musst im Gespräch auch keine Forderungen akzeptieren, die du nicht nachvollziehen kannst. Stimme am Telefon keinen Abzügen spontan zu, sondern bitte um eine schriftliche Aufstellung. Wenn Nachrichten unfreundlich werden oder unbeantwortet bleiben, antworte nur noch schriftlich und sachlich und such dir Unterstützung bei einem Mieterverein, einer Mieterberatung oder anwaltlich. Beleidigungen oder Drohungen beendest du sofort, indem du das Gespräch abbrichst.'
  },
  two_party: {
    goal: 'Die Kaution transparent abschließen: Beide Seiten wissen, woran es noch hängt, mögliche Abzüge werden nachvollziehbar begründet, und das Ergebnis wird schriftlich festgehalten.',
    rules: [
      'Beide sprechen über konkrete Punkte, Unterlagen und Belege, nicht über Vorwürfe oder Unterstellungen.',
      'Übergabeprotokolle und Fotos dienen als gemeinsame Grundlage für das Gespräch.',
      'Rechtliche Fragen werden nicht im Gespräch entschieden, sondern bei Bedarf mit Beratung geklärt.',
      'Jedes Ergebnis wird schriftlich zusammengefasst und von beiden bestätigt.'
    ],
    questions: [
      'Woran hängt die Rückzahlung aus Ihrer Sicht gerade noch?',
      'Welche Punkte möchten Sie gegebenenfalls einbehalten, und worauf stützen Sie sich dabei?',
      'Wie gleichen wir Ihre Sicht mit dem Übergabeprotokoll und den Fotos ab?',
      'Welche Unterlagen oder Angaben brauchen Sie noch von mir?',
      'Wie und bis wann halten wir das Ergebnis schriftlich fest?'
    ],
    steps: [
      'Ihr vereinbart einen Telefon- oder Gesprächstermin, bei dem beide die Unterlagen zur Hand haben.',
      'Du schilderst kurz den Stand aus deiner Sicht: Übergabe, Schlüssel, bisherige Nachrichten.',
      'Die Vermieterseite erklärt, was aus ihrer Sicht noch offen ist oder welche Abzüge sie plant.',
      'Ihr geht jeden Punkt gemeinsam mit Protokoll und Fotos durch und haltet fest, wo ihr euch einig seid.',
      'Für strittige Punkte vereinbart ihr, dass Belege nachgereicht werden oder jede Seite sich beraten lässt.',
      'Du fasst das Ergebnis per E-Mail zusammen und bittest um Bestätigung.'
    ],
    agreement: 'Wir vereinbaren, dass die Vermieterseite eine schriftliche Aufstellung zur Kaution schickt, in der mögliche Abzüge einzeln begründet und mit Belegen versehen sind. Die Mieterseite prüft die Aufstellung anhand von Übergabeprotokoll und Fotos und antwortet schriftlich. Punkte, bei denen wir uns einig sind, gelten als erledigt. Für strittige Punkte lässt sich jede Seite bei Bedarf beraten, etwa beim Mieterverein oder anwaltlich. Die Kommunikation läuft ab jetzt per E-Mail, damit beide denselben Stand haben.'
  },
  dos: [
    'Übergabeprotokoll, Fotos und Kautionsnachweis sorgfältig aufbewahren.',
    'Schriftlich nachfragen, freundlich im Ton und klar in der Bitte.',
    'Bei Abzügen um eine nachvollziehbare Aufstellung mit Belegen bitten.',
    'Neue Adresse und Kontoverbindung aktiv mitteilen.'
  ],
  donts: [
    'Spontan am Telefon Abzügen zustimmen, die du nicht prüfen konntest.',
    'Mit Drohungen oder unbelegten rechtlichen Behauptungen arbeiten.',
    'Den Ärger in öffentlichen Bewertungen oder Posts abladen.',
    'Monatelang schweigen und dann in einer wütenden Nachricht alles auf einmal fordern.'
  ],
  next_step: 'Leg heute alle Unterlagen zur alten Wohnung in einen Ordner: Vertrag, Kautionsnachweis, Übergabeprotokoll, Fotos und Nachrichten. Schick dann eine kurze, freundliche E-Mail mit der Bitte um Rückmeldung zum Stand und deiner aktuellen Kontoverbindung. Bleibt die Antwort aus oder sind Abzüge unklar, vereinbare einen Termin beim Mieterverein.',
  related: [
    { category: 'mitbewohner', slug: 'auszug-und-kuendigung' },
    { category: 'vermieter', slug: 'nebenkostenabrechnung' },
    { category: 'vermieter', slug: 'kommt-unangemeldet' },
    { category: 'vermieter', slug: 'schimmel' }
  ],
  article: {
    title: 'Kaution nach Auszug nicht zurück: So fragst du beim Vermieter freundlich und bestimmt nach',
    meta: 'Kaution kommt nach dem Auszug nicht zurück oder Abzüge sind unklar? So fragst du freundlich und bestimmt nach, nutzt Nachweise und bleibst sachlich.',
    intro: 'Mit der Schlüsselübergabe endet für die meisten ein Kapitel. Doch solange die Kaution nicht zurück ist, bleibt ein Faden zur alten Wohnung bestehen, und manchmal wird dieser Faden zur Geduldsprobe. Du wartest auf eine Nachricht, die nicht kommt, oder bekommst eine Aufstellung, die mehr Fragen aufwirft als beantwortet. Viele Menschen schieben die Nachfrage dann vor sich her. Sie wollen nicht drängeln, fürchten Streit oder wissen schlicht nicht, wie sie das Thema ansprechen sollen. Dieser Ratgeber hilft dir, freundlich und zugleich bestimmt nachzufragen, deine Unterlagen sinnvoll zu nutzen und typische Fehler zu vermeiden. Er ersetzt ausdrücklich keine Rechtsberatung. Wann und in welcher Höhe eine Kaution zurückzuzahlen ist, hängt vom Einzelfall ab und lässt sich beim Mieterverein, bei einer Mieterberatung oder anwaltlich klären.',
    situation: 'Typisch ist ein Moment der Unsicherheit einige Zeit nach dem Auszug. Du hast die Wohnung gereinigt, die Schlüssel abgegeben, vielleicht ein Übergabeprotokoll unterschrieben. Danach herrscht Funkstille. Die Vermieterin reagiert nicht auf eine kurze Nachricht, die Hausverwaltung verweist auf lange Bearbeitungszeiten. Oder es kommt eine Mail mit Abzügen, die dich überrascht: Kosten für Streichen, eine Grundreinigung, ein angeblich beschädigter Boden. Besonders zermürbend ist das, wenn du dir sicher bist, die Wohnung ordentlich hinterlassen zu haben. Dann mischt sich Ärger mit dem Gefühl, dass dir nicht geglaubt wird. Gleichzeitig ist das Verhältnis nach dem Auszug ein anderes als vorher. Es gibt keine Begegnungen im Treppenhaus mehr, keine gemeinsamen Anliegen, nur noch diesen einen offenen Punkt. Das macht es für beide Seiten leicht, das Thema liegen zu lassen oder sich innerlich schon auf Konfrontation einzustellen.',
    causes: [
      'Organisatorische Gründe sind häufiger, als man denkt. Private Vermieter:innen verwalten ihre Wohnung neben Beruf und Familie, bei Hausverwaltungen liegt der Vorgang in einem Stapel mit vielen anderen. Ohne Nachfrage rutscht die Kaution leicht nach hinten, ganz ohne böse Absicht.',
      'Offene Punkte werden nicht kommuniziert. Manchmal wartet die andere Seite auf eine Abrechnung, eine Rechnung von Handwerkern oder die Einschätzung, ob ein Mangel neu ist. Wenn das nicht erklärt wird, entsteht bei dir der Eindruck, hingehalten zu werden, obwohl es aus Sicht der Vermieterseite einen Grund gibt.',
      'Der Zustand der Wohnung wird unterschiedlich bewertet. Was für dich normale Spuren nach Jahren des Wohnens sind, erscheint der Vermieterseite vielleicht als Schaden. Fehlen gemeinsame Protokolle oder Fotos, steht Aussage gegen Aussage, und jede Seite fühlt sich im Recht.'
    ],
    mistakes: [
      'Ein häufiger Fehler ist das lange Schweigen. Wer aus Unsicherheit gar nicht nachfragt, gibt der anderen Seite keinen Anlass, den Vorgang abzuschließen. Später fällt die erste Nachricht dann oft deutlich schärfer aus, als sie sein müsste, weil sich viel Frust angestaut hat.',
      'Genauso ungünstig ist der Einstieg mit Drohungen. Sätze wie „Sonst sehen wir uns vor Gericht“ oder unbelegte Aussagen über Rechte und Fristen, die man irgendwo gelesen hat, verhärten die Fronten sofort. Sie können sich außerdem als falsch erweisen. Rechtliche Einschätzungen holst du dir besser bei einer Beratungsstelle.',
      'Ein dritter Fehler ist das vorschnelle Nachgeben. Wer am Telefon unter Druck einem Abzug zustimmt, ohne Protokoll und Fotos geprüft zu haben, hat danach kaum noch eine Grundlage für eine sachliche Klärung. Besser ist es, sich eine schriftliche Aufstellung schicken zu lassen und in Ruhe zu antworten.'
    ],
    strategy: 'Der Schlüssel liegt in einer Kombination aus guter Vorbereitung und ruhigem, schriftlichem Nachfragen. Beginne mit deinen Unterlagen. Sammle Mietvertrag, den Nachweis über die gezahlte Kaution, das Übergabeprotokoll vom Einzug und vom Auszug, Fotos und den bisherigen Schriftverkehr an einem Ort. Diese Unterlagen sind dein wichtigstes Werkzeug, weil sie aus einem Gefühl eine überprüfbare Grundlage machen. Danach formulierst du eine erste Nachfrage. Sie sollte kurz, freundlich und eindeutig sein: Du bittest um eine Rückmeldung zum Stand und, falls Abzüge geplant sind, um eine nachvollziehbare Aufstellung. Nenne deine neue Adresse und deine Kontoverbindung, damit der anderen Seite nichts fehlt. Schreib per E-Mail oder Brief, damit du später belegen kannst, wann du nachgefragt hast. Kommt keine Antwort, ist eine zweite Nachricht sinnvoll, im Ton weiterhin höflich, in der Bitte etwas bestimmter. Du kannst darin freundlich darauf hinweisen, dass du den Vorgang gern abschließen möchtest, und um eine Rückmeldung in absehbarer Zeit bitten. Ein Wunschdatum ist dabei keine rechtliche Frist, sondern schlicht ein Vorschlag, der für Klarheit sorgt. Werden Abzüge genannt, gehst du jeden Punkt einzeln durch. Vergleiche ihn mit dem Übergabeprotokoll und deinen Fotos. Antworte dann Punkt für Punkt: Was kannst du nachvollziehen, was nicht, und welche Belege fehlen dir? Diese Struktur zeigt, dass du nicht grundsätzlich blockierst, sondern verstehen willst. Oft löst sich ein Teil der Streitpunkte schon dadurch, dass beide Seiten konkret werden. Hilfreich ist auch ein Perspektivwechsel. Frag dich, was die andere Seite braucht, um den Vorgang abzuschließen. Vielleicht ist es eine Abrechnung, die noch aussteht, vielleicht nur eine Bestätigung deiner Kontodaten. Wenn du dieses Bedürfnis ansprichst, wird aus dem Warten ein gemeinsames Ziel. Bleibt es trotz allem ungeklärt oder hast du den Eindruck, dass Forderungen nicht berechtigt sind, ist der richtige Moment für eine Beratung gekommen. Mit geordneten Unterlagen kann dir ein Mieterverein oder eine anwaltliche Beratung schnell sagen, wie deine Lage einzuschätzen ist.',
    examples: [
      'Jana wartet nach ihrem Auszug lange auf eine Nachricht. Sie schreibt ihrem Vermieter eine kurze, freundliche E-Mail und fragt nach dem Stand. Es stellt sich heraus, dass er ihre neue Kontoverbindung nicht hatte und die Sache deshalb liegen ließ. Nach ihrer Antwort mit den Kontodaten ist der Vorgang wenige Tage später erledigt.',
      'Tobias erhält eine Aufstellung mit Kosten für Streichen und Reinigung. Statt wütend anzurufen, legt er das Übergabeprotokoll daneben, in dem die Wohnung als ordentlich vermerkt ist, und schickt der Hausverwaltung eine sachliche Antwort mit Fotos. Er bittet um Belege für die Reinigungskosten. Die Verwaltung streicht einen Teil der Positionen, über den Rest lässt er sich beim Mieterverein beraten.',
      'Aylin bekommt auf zwei höfliche Nachfragen keine Antwort. Sie sammelt ihre Unterlagen und die Nachweise über ihre Mails in einem Ordner und vereinbart einen Termin bei einer Mieterberatung. Dort erfährt sie, welche nächsten Schritte in ihrem Fall sinnvoll sind, und fühlt sich deutlich sicherer.'
    ],
    help: 'Wenn aus der Nachfrage Beschimpfungen, Drohungen oder Einschüchterung werden, wenn dir jemand nachstellt oder Äußerungen an Herkunft, Religion, Geschlecht, Behinderung oder deiner Lebensform ansetzen, ist das kein gewöhnlicher Streit um die Kaution mehr. Dokumentiere dann alles mit Datum, bewahre Nachrichten auf und hol dir Unterstützung. Bei akuter Gefahr rufst du die Polizei unter 110. Für alle Fragen dazu, wann und in welcher Höhe eine Kaution zurückzuzahlen ist, welche Abzüge nachvollziehbar sind und welche Schritte du gehen kannst, sind ein Mieterverein, eine Mieterberatung oder eine anwaltliche Beratung die richtige Adresse. Bring dazu am besten alle Unterlagen mit. Dieser Ratgeber ersetzt keine Rechtsberatung, er unterstützt dich dabei, freundlich, klar und gut vorbereitet zu kommunizieren.',
    faqs: [
      {
        question: 'Wie frage ich nach meiner Kaution, ohne unhöflich zu wirken?',
        answer: 'Schreib kurz und freundlich, dass du zum Stand nichts gehört hast, und bitte um eine Rückmeldung. Nenne deine Kontoverbindung. Ein sachlicher Ton wirkt bestimmt, ohne zu verärgern.'
      },
      {
        question: 'Welche Unterlagen brauche ich für die Nachfrage?',
        answer: 'Hilfreich sind Mietvertrag, Nachweis über die gezahlte Kaution, Übergabeprotokolle von Einzug und Auszug, Fotos der Wohnung und der bisherige Schriftverkehr. Bewahre alles an einem Ort auf.'
      },
      {
        question: 'Was mache ich, wenn ich die Abzüge nicht nachvollziehen kann?',
        answer: 'Bitte schriftlich um eine Aufstellung mit Begründung und Belegen. Gleiche jeden Punkt mit Protokoll und Fotos ab. Bleiben Zweifel, hilft eine Beratung beim Mieterverein.'
      },
      {
        question: 'Wie lange muss ich auf meine Kaution warten?',
        answer: 'Das hängt vom Einzelfall ab und ist eine Rechtsfrage. Eine verbindliche Einschätzung bekommst du beim Mieterverein, bei einer Mieterberatung oder anwaltlich. Nachfragen kannst du jederzeit freundlich.'
      },
      {
        question: 'Soll ich lieber anrufen oder schreiben?',
        answer: 'Ein Anruf kann die Stimmung auflockern, wichtig ist aber die schriftliche Form. Fasse Telefonate kurz per E-Mail zusammen, damit beide Seiten denselben Stand haben.'
      }
    ]
  }
};
