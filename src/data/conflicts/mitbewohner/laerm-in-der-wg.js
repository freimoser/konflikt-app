export default {
  published: '2026-09-30',
  slug: 'laerm-in-der-wg',
  title: 'Lärm in der WG: Mitbewohner:in ist nachts zu laut',
  icon: '🎧',
  summary: 'Musik bis spät, Partys unter der Woche, laute Telefonate oder Türenknallen nach der Nachtschicht: Lärm in der WG raubt dir Schlaf oder Konzentration, und du willst Ruhezeiten vereinbaren, ohne die Stimmung zu ruinieren.',
  problem: 'Es ist kurz nach Mitternacht, du musst um sechs aufstehen, und aus dem Nachbarzimmer dröhnt Musik oder dein Mitbewohner lacht lautstark am Telefon. Vielleicht ist es auch umgekehrt: Du arbeitest im Homeoffice und brauchst tagsüber Ruhe für Calls, während deine Mitbewohnerin nach der Nachtschicht schläft und jedes Geräusch von dir als Störung empfindet. Oder in der Küche wird unter der Woche gefeiert, und du liegst wach und überlegst, ob du rübergehen sollst. Du willst nicht die Person sein, die ständig um Ruhe bittet, aber zu wenig Schlaf macht dich gereizt und unkonzentriert. So staut sich Ärger an, der irgendwann in einem genervten Klopfen oder einer bissigen Nachricht landet.',
  causes: [
    'In einer WG treffen oft völlig verschiedene Tagesrhythmen aufeinander: Frühschicht und Nachtschicht, Vorlesung um acht und Nebenjob bis Mitternacht, Homeoffice und Party-Wochenende. Was für die eine Person normale Wachzeit ist, ist für die andere Schlafenszeit.',
    'Viele WGs haben nie über Ruhe gesprochen. Ohne gemeinsame Absprache gilt, was jede Person von zu Hause oder aus der letzten WG gewohnt ist, und diese Maßstäbe unterscheiden sich stark.',
    'Wer Lärm macht, hört ihn selbst meist anders. Durch Wände, Türen und Altbau-Dielen kommt oft viel mehr an, als man im eigenen Zimmer ahnt, besonders tiefe Bässe und Stimmen am Telefon.'
  ],
  safety: 'Unterschiedliche Vorstellungen von Ruhe sind ein typischer WG-Alltagskonflikt. Anders ist es, wenn du auf eine Bitte um Ruhe hin beschimpft, bedroht oder eingeschüchtert wirst, wenn Partys regelmäßig mit Gewalt, Übergriffen oder Belästigung einhergehen oder wenn du dich in deiner eigenen Wohnung nicht mehr sicher fühlst. Dann ist das kein Gesprächsthema über Lautstärke mehr. Bring dich in Sicherheit, dokumentiere Vorfälle mit Datum und hol dir Unterstützung bei Vertrauenspersonen oder einer Beratungsstelle. Frauen erreichen das Hilfetelefon Gewalt gegen Frauen unter 116 016, Männer das Hilfetelefon Gewalt an Männern unter 0800 1239900. Bei akuter Gefahr wählst du 110.',
  one_party: {
    preparation: 'Überlege dir vor dem Gespräch, welche Situationen dich konkret belasten: Ist es Musik nach Mitternacht, sind es Partys unter der Woche, laute Telefonate im Flur oder Geräusche, während du nach der Nachtschicht schläfst? Notiere dir zwei oder drei Beispiele mit ungefährer Uhrzeit. Frag dich auch, welche Zeiten dir wirklich wichtig sind und wo du flexibel sein kannst. Und prüfe ehrlich, ob du selbst manchmal Geräusche machst, die andere stören könnten. Dein Ziel ist keine absolute Stille, sondern eine Ruhezeit-Absprache, mit der alle leben können.',
    scripts: {
      sanft: 'Hey, kann ich kurz was ansprechen? Ich höre abends ziemlich viel aus deinem Zimmer, gerade Musik und Telefonate nach elf. Wahrscheinlich merkst du das gar nicht so. Ich schlafe dann schlecht, weil ich früh raus muss. Können wir überlegen, wie wir das hinbekommen?',
      direkt: 'Ich brauche unter der Woche ab 23 Uhr Ruhe, weil ich um sechs aufstehe. In den letzten Wochen war es bei dir mehrmals bis nach Mitternacht laut, und ich bin davon wach geworden. Ich möchte, dass wir dafür eine klare Absprache treffen.',
      sachlich: 'Ich glaube, wir haben ziemlich unterschiedliche Tagesrhythmen, und das führt gerade zu Reibung. Lass uns gemeinsam überlegen, zu welchen Zeiten jede:r von uns Ruhe braucht und wann Musik, Besuch oder Telefonate okay sind. Dann müssen wir nicht jedes Mal einzeln verhandeln.'
    },
    steps: [
      'Sprich das Thema nicht mitten in der Nacht an, sondern am nächsten Tag zu einem ruhigen Moment.',
      'Beginne mit deiner Situation: wann du schlafen oder arbeiten musst und warum.',
      'Nenne ein oder zwei konkrete Beispiele mit Uhrzeit, statt „du bist immer laut“ zu sagen.',
      'Frag nach dem Alltag der anderen Person: Arbeitszeiten, Freundeskreis, wann sie gern Musik hört oder telefoniert.',
      'Schlagt gemeinsam Ruhezeiten vor, zum Beispiel unter der Woche ab einer bestimmten Uhrzeit und am Wochenende etwas später.',
      'Vereinbart, wie Partys oder Besuch angekündigt werden und wie ihr euch im Moment kurz Bescheid gebt.',
      'Trefft euch nach zwei bis drei Wochen noch einmal kurz und passt an, was nicht funktioniert.'
    ],
    reactions: [
      {
        trigger: 'Ich wohne hier auch, ich darf doch Musik hören.',
        reaction: 'Klar darfst du das, und das will ich dir auch nicht nehmen. Es geht mir nur um bestimmte Uhrzeiten, in denen ich schlafen muss. Lass uns schauen, wann es für dich wichtig ist und wann ich Ruhe brauche.'
      },
      {
        trigger: 'So laut war das doch gar nicht.',
        reaction: 'In deinem Zimmer klingt das bestimmt leiser. Bei mir kommt es durch die Wand ziemlich deutlich an, vor allem der Bass. Wollen wir es mal testen, ich mache Musik an und du hörst in meinem Zimmer mit?'
      },
      {
        trigger: 'Du bist echt spießig.',
        reaction: 'Ich verstehe, dass es sich für dich so anfühlt. Mir geht es nicht darum, dir den Spaß zu verderben. Ich brauche einfach genug Schlaf, um meinen Alltag zu schaffen. Lass uns einen Kompromiss finden, der für uns beide passt.'
      }
    ],
    boundary: 'Du musst nicht dauerhaft auf Schlaf oder konzentriertes Arbeiten verzichten, damit andere ungestört laut sein können. Wenn Absprachen immer wieder gebrochen werden, darfst du im Moment klar um Ruhe bitten und später ruhig, aber deutlich darauf bestehen, dass die Vereinbarung gilt. Ohrstöpsel oder Kopfhörer können helfen, sind aber keine Pflicht, um ein Grundbedürfnis zu sichern. Bleibt die Situation unerträglich, ist es legitim, in der WG offen zu fragen, ob das Zusammenwohnen so noch passt.'
  },
  two_party: {
    goal: 'Gemeinsame Ruhezeiten und Regeln für Musik, Besuch, Partys und Telefonate vereinbaren, die zu den unterschiedlichen Tagesrhythmen passen und allen genug Schlaf, Konzentration und Freiraum lassen.',
    rules: [
      'Jede Person schildert ihren Alltag, und alle Tagesrhythmen gelten als gleich berechtigt.',
      'Es geht um konkrete Zeiten und Situationen, nicht um Vorwürfe wie rücksichtslos oder spießig.',
      'Keine Seite muss auf ihr Leben verzichten, aber alle machen Zugeständnisse.',
      'Die Absprache ist eine WG-Vereinbarung und darf jederzeit gemeinsam angepasst werden.'
    ],
    questions: [
      'Zu welchen Zeiten brauchst du unbedingt Ruhe, und warum?',
      'Wann ist es dir wichtig, laut sein zu dürfen, etwa für Musik, Besuch oder Telefonate?',
      'Welche Geräusche aus den anderen Zimmern stören dich am meisten?',
      'Wie sollen Partys oder größerer Besuch angekündigt werden?',
      'Wie wollen wir uns im Moment Bescheid geben, wenn es jemandem zu laut ist?'
    ],
    steps: [
      'Ihr setzt eine WG-Besprechung an, zu der alle Zeit haben, am besten tagsüber und ausgeschlafen.',
      'Jede Person beschreibt ihren typischen Wochenrhythmus mit Schlaf-, Arbeits- und Freizeiten.',
      'Gemeinsam markiert ihr, wo sich Bedürfnisse überschneiden, etwa Nachtschicht und Homeoffice-Calls.',
      'Ihr legt Ruhezeiten für Werktage und Wochenende fest und klärt, welche Räume wie genutzt werden.',
      'Ihr vereinbart Regeln für Partys, Besuch und Telefonate sowie ein kurzes Signal für den Moment.',
      'Nach drei bis vier Wochen prüft ihr in einer kurzen Runde, ob die Absprache funktioniert.'
    ],
    agreement: 'Wir vereinbaren als WG-Ruhezeit von Sonntag bis Donnerstag ab 23 Uhr und am Wochenende ab 1 Uhr. In dieser Zeit hören wir Musik nur mit Kopfhörern oder leise im eigenen Zimmer und telefonieren nicht im Flur. Partys oder größeren Besuch kündigen wir mindestens drei Tage vorher in der WG-Gruppe an. Solange unsere Mitbewohnerin nach Nachtdiensten schläft, bleiben Küche und Flur bis mittags ruhig, dafür verlegt sie längere Telefonate nicht in die Abendstunden. Wenn es jemandem zu laut ist, reicht eine kurze Nachricht. In vier Wochen schauen wir, ob es passt.'
  },
  dos: [
    'Konkrete Uhrzeiten und Situationen nennen statt allgemeiner Vorwürfe.',
    'Die Tagesrhythmen aller Mitbewohner:innen als gleich wichtig behandeln.',
    'Feste Ruhezeiten als WG-Absprache schriftlich festhalten.',
    'Ein einfaches Signal vereinbaren, wenn es im Moment zu laut ist.'
  ],
  donts: [
    'Nachts wütend gegen die Wand oder Tür hämmern.',
    'Aus Rache selbst laut werden, wenn die andere Person schläft.',
    'Über die Person in der WG-Gruppe lästern statt direkt zu reden.',
    'Die eigene Ruhe als einzigen Maßstab für alle festlegen.'
  ],
  next_step: 'Schreib heute eine kurze Nachricht an deine Mitbewohner:innen und schlag eine Besprechung zu Ruhezeiten vor, zum Beispiel am Wochenende nachmittags. Notiere vorher deine eigenen Schlaf- und Arbeitszeiten und die zwei Situationen, die dich am meisten stören. Dann habt ihr eine konkrete Grundlage statt eines Streits.',
  related: [
    { category: 'nachbarn', slug: 'zu-laut' },
    { category: 'mitbewohner', slug: 'partner-wohnt-mit' },
    { category: 'mitbewohner', slug: 'putzplan-ignoriert' },
    { category: 'nachbarn', slug: 'beschwert-sich-staendig' }
  ],
  article: {
    title: 'Lärm in der WG: Wie ihr Ruhezeiten vereinbart, wenn Mitbewohner nachts laut sind',
    meta: 'Mitbewohner nachts laut, Partys unter der Woche oder Homeoffice gegen Nachtschicht? So vereinbart ihr in der WG faire Ruhezeiten, die alle einhalten können.',
    intro: 'In einer Wohngemeinschaft teilt man nicht nur Küche und Bad, sondern auch Geräusche. Jede Tür, jedes Telefonat und jede Playlist ist für die anderen hörbar, oft deutlicher, als man denkt. Solange alle ähnliche Rhythmen haben, fällt das kaum auf. Schwierig wird es, wenn eine Person früh aufstehen muss und eine andere erst nach Mitternacht richtig wach wird, wenn Homeoffice und Nachtschicht aufeinandertreffen oder wenn die WG-Küche regelmäßig zum Partyraum wird. Schlafmangel macht gereizt, und aus einer harmlosen Bitte um Ruhe wird schnell ein Grundsatzstreit über Freiheit und Rücksicht. Dieser Ratgeber erklärt, warum Lärm in der WG so viel Konfliktpotenzial hat, welche Reaktionen alles schlimmer machen und wie ihr zu Ruhezeiten kommt, die für alle funktionieren.',
    situation: 'Typisch ist ein langsamer Aufbau. Anfangs sagt niemand etwas, weil ein später Abend ja mal vorkommt. Dann häufen sich die Nächte, in denen Musik durch die Wand dringt, Freund:innen in der Küche lachen oder jemand um eins im Flur telefoniert. Die gestörte Person liegt wach, überlegt, ob sie klopfen soll, und entscheidet sich meistens dagegen, um nicht als Spielverderberin dazustehen. Am nächsten Morgen ist sie müde und wütend, die andere Seite ahnt davon nichts. Irgendwann kommt es dann doch zu einem genervten Klopfen oder einer knappen Nachricht, und die Stimmung kippt. Genauso häufig ist die umgekehrte Konstellation: Wer nach der Nachtschicht tagsüber schläft, erlebt jede Spülmaschine, jeden Staubsauger und jeden Videocall als Störung, während die anderen einfach ihren normalen Tag leben. Beide Seiten fühlen sich im Recht, weil ihr Rhythmus für sie selbstverständlich ist.',
    causes: [
      'Unterschiedliche Lebensrhythmen sind der Kern der meisten Lärmkonflikte in WGs. Studium, Ausbildung, Schichtdienst, Gastronomie, Pflege oder Homeoffice führen zu sehr verschiedenen Schlaf- und Wachzeiten. Keine davon ist falsch, aber sie passen nicht automatisch zusammen. Ohne Absprache setzt sich meist durch, wer lauter ist oder weniger Hemmungen hat, etwas zu sagen.',
      'Fehlende Absprachen verstärken das Problem. Viele WGs regeln Miete, Putzplan und Einkauf, aber nie die Frage, wann es ruhig sein soll. Jede Person bringt ihre eigenen Gewohnheiten mit, sei es aus dem Elternhaus, aus einer Party-WG oder aus einer ruhigen Einzimmerwohnung. Diese stillen Erwartungen prallen erst aufeinander, wenn jemand schon verärgert ist.',
      'Hinzu kommt die unterschiedliche Wahrnehmung. Wer Musik hört oder telefoniert, empfindet die eigene Lautstärke als moderat. Durch dünne Wände, Altbau-Dielen oder offene Türen kommen tiefe Frequenzen und Stimmen aber oft viel stärker an. Wer müde ist oder sich konzentrieren muss, reagiert außerdem empfindlicher. Beides zusammen erzeugt ganz unterschiedliche Bilder derselben Situation.'
    ],
    mistakes: [
      'Ein häufiger Fehler ist, im Moment der größten Wut zu reagieren. Wer nachts gegen die Wand hämmert oder im Schlafanzug in eine Party platzt, bekommt vielleicht kurzfristig Ruhe, aber keine Lösung. Die andere Seite fühlt sich vor Gästen bloßgestellt, und das Gespräch am nächsten Tag beginnt mit Verteidigung.',
      'Ebenso problematisch ist das Gegenteil: dauerhaft schweigen und sich mit Ohrstöpseln arrangieren, bis der Frust explodiert. Wer nie sagt, was ihn stört, lässt die andere Person im Glauben, alles sei in Ordnung. Der spätere Ausbruch wirkt dann unverhältnismäßig.',
      'Ein dritter Fehler ist, die eigenen Bedürfnisse zum Maßstab für alle zu machen. Wer absolute Stille ab 22 Uhr fordert, obwohl andere abends arbeiten oder Besuch haben, lädt zum Widerstand ein. Auch Retourkutschen, etwa absichtlich laut sein, wenn der andere schläft, führen nur in eine Spirale.'
    ],
    strategy: 'Der beste Weg aus dem Lärmkonflikt ist eine gemeinsame WG-Absprache zu Ruhezeiten, die ihr bewusst trefft, bevor der nächste Streit eskaliert. Setzt dafür eine Besprechung an, zu der alle ausgeschlafen und nicht unter Zeitdruck sind. Zu Beginn beschreibt jede Person ihren typischen Wochenablauf: wann sie schläft, arbeitet, lernt, Calls hat und wann sie gern Musik hört oder Besuch empfängt. Schreibt das ruhig auf ein Blatt oder in eine geteilte Notiz. So seht ihr schwarz auf weiß, wo sich Bedürfnisse überschneiden und wo es Spielraum gibt. Danach legt ihr Ruhezeiten fest, die zu eurer WG passen. Viele wählen unterschiedliche Zeiten für Werktage und Wochenende, manche berücksichtigen auch Tagesruhe für Menschen im Schichtdienst. Wichtig ist, dass es eure gemeinsame Vereinbarung ist und nicht die Forderung einer einzelnen Person. Was im Haus oder im Mietvertrag geregelt ist, bleibt davon unberührt, aber innerhalb der Wohnung dürft ihr selbst bestimmen, was für euch passt. Klärt dann konkret, was in der Ruhezeit erlaubt ist: Musik mit Kopfhörern, Telefonate im eigenen Zimmer bei geschlossener Tür, kein Staubsaugen, leise Türen. Genauso wichtig ist eine Regel für Ausnahmen. Partys und größerer Besuch lassen sich gut mit einer Ankündigung einige Tage vorher lösen, damit sich die anderen darauf einstellen oder bei Bedarf woanders schlafen können. Vereinbart außerdem ein einfaches Signal für den Moment, etwa eine kurze Nachricht in der WG-Gruppe, die ohne Diskussion respektiert wird. Kleine praktische Hilfen entlasten zusätzlich: Filzstreifen an Türen, ein Teppich im Flur, Kopfhörer für späte Serienabende oder ein fester Raum für Homeoffice-Calls, der nicht direkt neben einem Schlafzimmer liegt. Zum Schluss verabredet ihr, die Absprache nach einigen Wochen zu überprüfen. Rhythmen ändern sich mit neuen Jobs, Semestern oder Schichtplänen, und eine gute Regel wächst mit.',
    examples: [
      'In einer Dreier-WG arbeitet eine Mitbewohnerin als Pflegekraft im Nachtdienst, ein anderer im Homeoffice mit vielen Videocalls. Nach mehreren gereizten Wochen setzen sie sich zusammen. Der Mitbewohner verlegt seine Calls in das Zimmer am anderen Ende der Wohnung und trägt ein Headset, die Pflegekraft schläft mit Ohrstöpseln und bekommt an Tagen nach dem Dienst eine ruhige Küche bis mittags.',
      'Ein Student feiert gern und oft mit Freund:innen in der WG-Küche, seine Mitbewohnerin muss wegen ihres Praktikums früh raus. Sie einigen sich auf Partys am Freitag und Samstag, angekündigt drei Tage vorher, und auf Ruhe ab 23 Uhr unter der Woche. An Partyabenden schläft die Mitbewohnerin gelegentlich bei ihrer Freundin, was für sie in Ordnung ist, weil sie es rechtzeitig weiß.',
      'In einer Zweck-WG telefoniert ein Mitbewohner jeden Abend lange und laut mit seiner Familie im Ausland. Die anderen sprechen es freundlich an und erfahren, dass es wegen der Zeitverschiebung nur spät geht. Er telefoniert seitdem im eigenen Zimmer bei geschlossener Tür und mit Headset, und niemand fühlt sich mehr übergangen.'
    ],
    help: 'Wenn eine Bitte um Ruhe mit Beschimpfungen, Drohungen oder Einschüchterung beantwortet wird, wenn auf Partys Übergriffe oder Belästigung passieren oder du dich in der Wohnung nicht mehr sicher fühlst, ist das kein Lärmkonflikt mehr. Dokumentiere Vorfälle, hol dir Unterstützung und wähle bei akuter Gefahr 110. Frauen erreichen das Hilfetelefon Gewalt gegen Frauen unter 116 016, Männer das Hilfetelefon Gewalt an Männern unter 0800 1239900. Leidest du durch dauerhaften Schlafmangel stark oder fühlst dich zu Hause nur noch angespannt, kann ein Gespräch entlasten, etwa bei der TelefonSeelsorge unter 0800 1110111 oder 0800 1110222. Bei Fragen zu Hausordnung, Mietvertrag, Untermiete oder Auszug sind ein Mieterverein, das Studierendenwerk oder eine anwaltliche Beratung die richtige Adresse. Dieser Ratgeber ersetzt keine Rechtsberatung und trifft keine Aussagen darüber, was rechtlich gilt.',
    faqs: [
      {
        question: 'Wie spreche ich meinen Mitbewohner darauf an, dass er nachts zu laut ist?',
        answer: 'Am nächsten Tag in Ruhe, nicht mitten in der Nacht. Schildere, wann du schlafen musst, nenne ein konkretes Beispiel und frag nach seinem Alltag. Dann schlag vor, gemeinsam Ruhezeiten festzulegen.'
      },
      {
        question: 'Welche Ruhezeiten sind in einer WG sinnvoll?',
        answer: 'Das hängt von euren Rhythmen ab. Viele WGs wählen unter der Woche eine frühere und am Wochenende eine spätere Uhrzeit. Entscheidend ist, dass alle zustimmen und die Absprache zu euren Jobs und Studienzeiten passt.'
      },
      {
        question: 'Wie oft darf man in einer WG Partys feiern?',
        answer: 'Dafür gibt es keine feste Zahl, das legt ihr als WG gemeinsam fest. Bewährt hat sich, Partys einige Tage vorher anzukündigen und auf Tage zu legen, an denen niemand früh raus muss.'
      },
      {
        question: 'Was tun bei Homeoffice und Nachtschicht in derselben WG?',
        answer: 'Tauscht eure Zeitpläne aus und sucht räumliche Lösungen: Calls in ein Zimmer weit weg vom Schlafzimmer, Headset statt Lautsprecher, Ohrstöpsel und eine ruhige Küche in den Schlafstunden nach dem Dienst.'
      },
      {
        question: 'Was, wenn sich jemand trotz Absprache nicht an die Ruhezeiten hält?',
        answer: 'Sprich es zeitnah an und erinnere an die gemeinsame Vereinbarung. Hilft das wiederholt nicht, bringt das Thema in eine WG-Runde und klärt offen, ob das Zusammenwohnen für alle noch passt.'
      }
    ]
  }
};
