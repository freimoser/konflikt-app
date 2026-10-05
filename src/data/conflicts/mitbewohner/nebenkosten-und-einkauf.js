export default {
  published: '2026-09-30',
  slug: 'nebenkosten-und-einkauf',
  title: 'Streit ums Geld in der WG: Nebenkosten und Einkauf',
  icon: '🧾',
  summary: 'Klopapier kaufst immer du, die Split-App zeigt seit Wochen offene Posten, und bei der Nebenkostenabrechnung will niemand genau hinschauen: Geld in der WG soll kein Dauerstreit sein.',
  problem: 'Wieder ist das Spülmittel leer, und wieder bist du diejenige Person, die neues mitbringt. In der Split-App stehen offene Beträge von Mitbewohner:innen, die seit Wochen nicht reagieren, die WG-Kasse ist leer, obwohl alle angeblich eingezahlt haben, und beim Internet oder Strom hat irgendwer den Vertrag auf seinen Namen laufen und wartet auf Geld. Vielleicht traust du dich nicht mehr, nachzufragen, weil du nicht kleinlich wirken willst. Vielleicht wirst du selbst gerade gemahnt und fühlst dich ertappt. Geld ist in vielen WGs ein Tabuthema, obwohl alle ständig damit zu tun haben. Genau deshalb wird aus ein paar ungeklärten Posten schnell ein Gefühl von Unfairness, das die ganze Stimmung vergiftet.',
  causes: [
    'Viele WGs haben nie ausgesprochen, was gemeinsam gekauft wird und was privat ist. Ob Olivenöl, Kaffee oder Waschmittel dazugehören, entscheidet dann jede Person für sich, und alle fühlen sich im Recht.',
    'Menschen haben sehr unterschiedliche Beziehungen zu Geld. Für die eine Person ist ein offener Posten eine Kleinigkeit, für die andere ein Vertrauensbruch, besonders wenn das Budget knapp ist.',
    'Unsichtbare Arbeit verzerrt die Wahrnehmung. Wer Verträge verwaltet, Abrechnungen prüft oder ständig einkauft, trägt Aufwand, den die anderen kaum sehen, und fühlt sich doppelt belastet, wenn dann auch noch Geld fehlt.'
  ],
  safety: 'Unklare Abrechnungen und vergessene Posten sind ein typischer Alltagskonflikt. Anders ist es, wenn dich jemand wegen Geld bedroht, einschüchtert oder erpresst, wenn Sachen aus deinem Zimmer verschwinden, wenn Verträge ohne dein Wissen auf deinen Namen abgeschlossen werden oder wenn du merkst, dass du selbst in ernsthafte Geldnot rutschst. Dann hilft kein weiteres WG-Gespräch. Dokumentiere Nachrichten und Zahlungen, hol dir Unterstützung bei einer Verbraucher-, Schuldner- oder Mietrechtsberatung und bei Bedrohung oder akuter Gefahr wählst du 110. Wenn dich die Sorgen nicht mehr schlafen lassen, erreichst du die TelefonSeelsorge rund um die Uhr unter 0800 1110111 oder 0800 1110222. Dieser Ratgeber ersetzt keine Rechts- oder Finanzberatung.',
  one_party: {
    preparation: 'Verschaffe dir vor dem Gespräch einen ruhigen Überblick: Welche Posten sind offen, seit wann, und für wen hast du etwas ausgelegt? Schau in die Split-App, in Kontoauszüge oder in den WG-Chat, statt aus dem Gedächtnis zu argumentieren. Überleg dann, worum es dir eigentlich geht. Willst du nur dein Geld zurück, oder soll künftig ein festes System her, etwa eine gemeinsame Kasse oder eine Liste für Verbrauchsmaterial? Trenne dabei offene Schulden von der Frage, wie ihr euch organisiert. Und prüfe ehrlich, ob du selbst auch noch etwas schuldig bist.',
    scripts: {
      sanft: 'Du, ich wollte mal kurz über unsere WG-Finanzen reden, ganz ohne Vorwurf. Mir ist aufgefallen, dass bei uns einiges durcheinandergeraten ist und ich öfter Sachen für alle kaufe. Ich möchte nicht, dass sich da bei irgendwem Frust aufstaut. Wollen wir uns zusammen einmal hinsetzen und das sortieren?',
      direkt: 'In der Split-App stehen bei dir seit mehreren Wochen offene Posten, und ich habe dich schon zweimal daran erinnert. Das belastet mich, weil ich das Geld vorgestreckt habe. Bitte gleiche das bis Ende der Woche aus oder sag mir, wann du es schaffst. Und ich würde gern ein System vereinbaren, damit das nicht immer wieder passiert.',
      sachlich: 'Lass uns einmal festhalten, was bei uns gemeinsam bezahlt wird und was privat ist: Internet, Strom, Putzmittel, Klopapier, Spülmittel. Dann entscheiden wir, wie wir das abrechnen, ob über eine Kasse, eine App oder einen Dauerauftrag. Und wir legen fest, bis wann offene Posten ausgeglichen werden.'
    },
    steps: [
      'Sammle Fakten statt Gefühle: offene Posten, Daten, wer was ausgelegt hat.',
      'Sprich das Thema zeitnah und ruhig an, nicht mitten im Streit um etwas anderes.',
      'Trenne zwei Fragen: Was ist aktuell offen, und wie organisieren wir uns künftig?',
      'Beschreibe die Wirkung auf dich, etwa dass du ständig vorstreckst oder dich als Kontrollinstanz fühlst.',
      'Frag nach, wie die andere Seite die Lage sieht, und ob es gerade finanziell eng ist.',
      'Schlag ein konkretes System vor: Liste für Gemeinsames, feste Kasse, App mit Ausgleichstermin.',
      'Haltet die Absprache schriftlich im WG-Chat fest und vereinbart einen Termin zum Nachschauen.'
    ],
    reactions: [
      {
        trigger: 'Jetzt stell dich doch nicht so an, das sind doch nur Kleinigkeiten.',
        reaction: 'Einzeln vielleicht. Zusammen ist es für mich aber spürbar, und vor allem stört mich, dass immer ich vorlege. Lass uns ein System finden, dann muss ich auch nicht mehr nachfragen.'
      },
      {
        trigger: 'Ich hab das doch schon längst bezahlt.',
        reaction: 'Gut möglich, dass ich etwas übersehen habe. Magst du mir kurz zeigen, wann und wie? Dann trage ich es ein, und wir haben beide den gleichen Stand.'
      },
      {
        trigger: 'Ich hab gerade einfach kein Geld.',
        reaction: 'Danke, dass du das sagst, das ist nicht leicht. Dann lass uns eine Lösung finden, die für dich machbar ist, zum Beispiel in Raten oder zu einem festen Datum. Wichtig ist mir nur, dass wir es offen besprechen, statt es liegen zu lassen.'
      }
    ],
    boundary: 'Du bist nicht die Bank der WG. Wenn Posten trotz mehrfacher Erinnerung offen bleiben, hör auf, für diese Person vorzustrecken, und kauf nur noch, was du selbst brauchst oder was vorher in die Kasse eingezahlt wurde. Sag das einmal klar und freundlich an, statt still zu verzichten. Wird es grundsätzlich oder geht es um Verträge und Mietanteile, hol dir Unterstützung bei einer Verbraucher- oder Mietrechtsberatung. Einschüchterung oder Drohungen wegen Geld beendest du sofort.'
  },
  two_party: {
    goal: 'Ein einfaches, für alle nachvollziehbares System für gemeinsame Ausgaben finden, offene Posten fair klären und Geld wieder zu einem sachlichen Thema machen, das die Stimmung in der WG nicht belastet.',
    rules: [
      'Es geht um Abläufe und Zahlen, nicht darum, wer geizig, chaotisch oder kleinlich ist.',
      'Jede Person darf sagen, wenn es finanziell gerade eng ist, ohne dafür bewertet zu werden.',
      'Offene Posten und künftige Regeln werden getrennt besprochen.',
      'Was vereinbart ist, wird schriftlich festgehalten, damit später niemand aus dem Gedächtnis argumentieren muss.'
    ],
    questions: [
      'Was zählt für euch als gemeinsam, und was kauft jede Person privat?',
      'Wie wollt ihr Gemeinsames bezahlen: über eine Kasse, eine App, einen Dauerauftrag oder im Wechsel?',
      'Bis wann sollen offene Posten spätestens ausgeglichen sein?',
      'Wer kümmert sich um Verträge wie Internet oder Strom, und wie wird diese Person entlastet?',
      'Was braucht jede und jeder, um sich bei dem Thema fair behandelt zu fühlen?'
    ],
    steps: [
      'Ihr vereinbart einen festen Termin für eine WG-Runde, bei der alle Zugang zur App oder zu den Zahlen haben.',
      'Zuerst sammelt ihr den aktuellen Stand: offene Posten, laufende Verträge, Inhalt der Kasse.',
      'Ihr klärt die Vergangenheit, ohne Schuldige zu suchen, und legt für jeden offenen Posten ein Ausgleichsdatum fest.',
      'Danach entscheidet ihr, was gemeinsam gekauft wird, und wählt ein System, das alle nutzen können.',
      'Ihr verteilt Zuständigkeiten, etwa wer den Vorrat im Blick behält oder die Abrechnungen prüft, und wechselt diese Aufgaben regelmäßig.',
      'Nach einem Monat schaut ihr kurz gemeinsam drauf, ob das System funktioniert, und passt es bei Bedarf an.'
    ],
    agreement: 'Wir legen fest, dass Klopapier, Spülmittel, Putzmittel, Müllbeutel und Grundzutaten wie Salz und Öl gemeinsam bezahlt werden. Alles andere ist privat. Gemeinsame Ausgaben tragen wir in die Split-App ein, und am Monatsende gleichen alle ihren Stand aus. Die Verträge für Internet und Strom laufen weiter über eine Person, die anderen zahlen ihren Anteil per Dauerauftrag. Wer knapp bei Kasse ist, sagt es vorher, dann finden wir eine Lösung. In einem Monat schauen wir, ob es so läuft.'
  },
  dos: [
    'Offene Posten mit Datum und Beleg ansprechen statt aus dem Gedächtnis.',
    'Gemeinsam festlegen, was gemeinsam gekauft wird und was privat bleibt.',
    'Ein einfaches System wählen, das alle wirklich nutzen.',
    'Absprachen schriftlich im WG-Chat festhalten.'
  ],
  donts: [
    'Mahnungen öffentlich und spitz in die WG-Gruppe schreiben.',
    'Aus Frust heimlich Sachen der anderen aufbrauchen, um es auszugleichen.',
    'Jahrelang schweigend vorstrecken und dann alles auf einmal zurückfordern.',
    'Eine Person für knappe Finanzen vor anderen bloßstellen.'
  ],
  next_step: 'Öffne heute die Split-App oder deine Notizen und schreib dir auf, welche Posten offen sind und seit wann. Schlag dann im WG-Chat einen kurzen Termin vor, bei dem ihr gemeinsam festlegt, was als Gemeinsames zählt und wie ihr es abrechnet. Bring einen einfachen Vorschlag mit, damit das Gespräch nicht bei null beginnt.',
  related: [
    { category: 'mitbewohner', slug: 'isst-meine-sachen' },
    { category: 'mitbewohner', slug: 'partner-wohnt-mit' },
    { category: 'freunde', slug: 'geliehenes-geld' },
    { category: 'partner', slug: 'streit-um-geld' }
  ],
  article: {
    title: 'Streit um Geld in der WG: Nebenkosten, Einkäufe und Split-App fair regeln',
    meta: 'Streit ums Geld in der WG? So klärst du offene Posten, Nebenkosten und gemeinsame Einkäufe fair, ohne kleinlich zu wirken, und findest ein System für alle.',
    intro: 'In fast jeder WG gibt es irgendwann diesen Moment: Das Klopapier ist alle, und du merkst, dass du es zum dritten Mal in Folge kaufst. Oder du öffnest die Split-App und siehst, dass eine Mitbewohnerin seit Wochen nichts ausgeglichen hat. Über Geld zu sprechen fühlt sich für viele unangenehm an, besonders unter Menschen, mit denen man sich eine Küche und manchmal auch Freundschaften teilt. Also schweigen viele, legen weiter vor und ärgern sich innerlich. Dabei ist Geld in einer Wohngemeinschaft kein Nebenthema, sondern eine der häufigsten Quellen für Spannungen. Die gute Nachricht: Mit ein paar klaren Absprachen lässt sich viel Streit vermeiden. Dieser Ratgeber hilft dir zu verstehen, warum Geld in der WG so schnell zum Reizthema wird, welche Fehler den Konflikt verschärfen und wie ihr zu einem fairen System kommt.',
    situation: 'Typisch ist eine Mischung aus kleinen Posten und großem Frust. Einzeln geht es um Spülmittel, Müllbeutel oder eine Rolle Küchenpapier. In Summe entsteht aber das Gefühl, dass manche Menschen mehr tragen als andere. Dazu kommen laufende Kosten wie Internet oder Strom, deren Verträge oft auf eine einzelne Person laufen. Diese Person streckt dann regelmäßig vor und muss den anderen hinterherlaufen. Bei der jährlichen Nebenkostenabrechnung wird es besonders heikel, weil plötzlich Nachzahlungen im Raum stehen und niemand mehr genau weiß, wer in welchem Zeitraum eingezogen ist oder wie viel verbraucht wurde. Split-Apps helfen zwar beim Überblick, lösen aber nicht das Grundproblem, wenn niemand vereinbart hat, was eingetragen wird und bis wann ausgeglichen werden soll. So stehen irgendwann Posten offen, die niemand ansprechen mag, und aus einer praktischen Frage wird eine Frage von Vertrauen und Respekt.',
    causes: [
      'Unklare Grenzen zwischen gemeinsam und privat sind der häufigste Auslöser. Ob Kaffee, Butter oder Gewürze in den gemeinsamen Topf gehören, beantwortet jede Person nach eigener Gewohnheit. Wer aus einer Familie kommt, in der alles geteilt wurde, sieht das anders als jemand, der gewohnt ist, jede Ausgabe einzeln zu verbuchen.',
      'Geld ist emotional aufgeladen. Hinter offenen Posten stecken oft ganz verschiedene Lebenslagen: knappe Ausbildungsvergütung, unregelmäßige Einkünfte, Unsicherheit oder Scham. Wer ohnehin wenig hat, reagiert empfindlich auf Nachfragen, und wer regelmäßig vorlegt, fühlt sich ausgenutzt. Beide Gefühle sind echt und prallen im WG-Alltag aufeinander.',
      'Organisatorische Arbeit bleibt unsichtbar. Verträge abschließen, Abrechnungen prüfen, den Vorrat im Blick behalten und Erinnerungen schicken kostet Zeit und Nerven. Wer das übernimmt, erlebt sich oft als WG-Kassenwart wider Willen, während die anderen nur merken, dass ständig Nachrichten wegen Geld kommen.'
    ],
    mistakes: [
      'Ein häufiger Fehler ist das stille Vorstrecken. Wer immer wieder zahlt, ohne etwas zu sagen, gewöhnt die anderen daran, dass es schon irgendwie läuft. Wenn der Frust dann irgendwann herausbricht, wirkt die Forderung für die anderen überraschend und übertrieben.',
      'Ebenso ungünstig ist das öffentliche Mahnen. Spitze Nachrichten in der WG-Gruppe oder eine Liste offener Beträge am Kühlschrank beschämen die betroffene Person vor allen anderen. Das führt eher zu Abwehr als zu schneller Zahlung und belastet die Stimmung für alle.',
      'Der dritte Fehler ist, Vergangenheit und Zukunft zu vermischen. Wer im selben Atemzug alte Schulden eintreiben und ein neues System durchsetzen will, erzeugt Druck auf beiden Ebenen. Getrennte Schritte machen es leichter, bei beidem zu einer Lösung zu kommen.'
    ],
    strategy: 'Der wichtigste Schritt ist, Geld zu einem normalen Organisationsthema zu machen, so wie Putzplan oder Müll. Das gelingt am besten, wenn ihr einmal bewusst darüber sprecht, bevor der Ärger groß ist. Bereite dich darauf vor, indem du den aktuellen Stand sammelst. Was ist offen, seit wann, und wofür? Belege aus der App oder dem Chat nehmen dem Gespräch die Schärfe, weil niemand sich auf das Gedächtnis verlassen muss. Dann trennt ihr zwei Fragen. Die erste betrifft die Vergangenheit: Welche Posten sind offen, und bis wann werden sie ausgeglichen? Hier hilft es, ohne Schuldzuweisung vorzugehen und Raten oder feste Daten zuzulassen, wenn jemand gerade knapp ist. Die zweite Frage betrifft die Zukunft: Was gilt als gemeinsam, und wie bezahlt ihr es? Für manche WGs passt eine Bargeldkasse, für andere eine Split-App mit festem Ausgleichstag, für wieder andere ein Wechsel beim Einkaufen. Entscheidend ist nicht das perfekte Werkzeug, sondern dass alle es kennen und nutzen. Legt auch fest, wie ihr mit laufenden Verträgen umgeht. Wenn Internet oder Strom über eine Person laufen, sollte klar sein, wie und wann die anderen ihren Anteil beisteuern, zum Beispiel per Dauerauftrag. Fragen zu Mietanteilen, Kautionen oder Verträgen mit der Vermietung gehören nicht in ein Küchengespräch, sondern bei Unsicherheit zu einer Beratungsstelle. Wichtig ist außerdem, die organisatorische Arbeit zu verteilen. Wer den Vorrat im Blick hat, sollte nicht auch noch Abrechnungen prüfen müssen. Ein Wechsel alle paar Monate verhindert, dass eine Person dauerhaft die Rolle der WG-Buchhaltung übernimmt. Zum Schluss haltet ihr die Absprache schriftlich fest und vereinbart einen Termin, an dem ihr kurz prüft, ob das System trägt.',
    examples: [
      'Sophie kauft seit Monaten Klopapier, Spülmittel und Müllbeutel für die ganze WG, ohne es irgendwo einzutragen. Als sie merkt, wie sehr sie das ärgert, schlägt sie im WG-Chat eine kurze Runde vor. Die drei legen fest, was als gemeinsam gilt, und richten eine Split-App mit einem festen Ausgleichstag am Monatsende ein. Sophie ist erleichtert, weil sie nicht mehr allein den Überblick halten muss.',
      'Jonas hat den Internetvertrag auf seinen Namen und wartet ständig auf die Anteile seiner Mitbewohner:innen. Statt weiter einzeln zu erinnern, bittet er darum, dass alle einen Dauerauftrag einrichten. Eine Mitbewohnerin gibt im Gespräch zu, dass es bei ihr gerade knapp ist. Sie vereinbaren ein festes Datum, das zu ihrem Zahltag passt, und der Druck ist raus.',
      'In einer Vierer-WG fehlt regelmäßig Geld in der Kasse, und alle verdächtigen sich gegenseitig. Statt weiter zu spekulieren, stellen sie auf eine App um, in der jede Einzahlung und Ausgabe sichtbar ist. Nach zwei Monaten zeigt sich, dass vor allem vergessene Einkäufe das Problem waren. Die Stimmung entspannt sich, weil niemand mehr raten muss.'
    ],
    help: 'Wenn dich jemand wegen Geld bedroht, erpresst oder einschüchtert, wenn Sachen aus deinem Zimmer verschwinden oder Verträge ohne dein Wissen auf deinen Namen laufen, ist das kein gewöhnlicher WG-Streit mehr. Sichere dann Nachrichten und Zahlungsnachweise und hol dir Unterstützung. Bei akuter Gefahr rufst du die 110. Für Fragen zu Nebenkostenabrechnungen, Mietanteilen, Kautionen oder Verträgen ist eine Mietrechts- oder Verbraucherberatung die richtige Adresse, bei ernsthaften Geldsorgen eine Schuldnerberatung. Wenn dich die Belastung nicht mehr loslässt, kannst du dich rund um die Uhr an die TelefonSeelsorge wenden, erreichbar unter 0800 1110111, 0800 1110222 oder 116 123. Dieser Ratgeber ersetzt keine Rechts- oder Finanzberatung, er hilft dir, im Gespräch ruhig und fair zu bleiben.',
    faqs: [
      {
        question: 'Was sollte in einer WG gemeinsam gekauft werden?',
        answer: 'Das legt jede WG selbst fest. Häufig sind es Verbrauchsmaterialien wie Klopapier, Spülmittel, Putzmittel und Müllbeutel, manchmal auch Grundzutaten. Wichtig ist, dass alle dieselbe Liste kennen.'
      },
      {
        question: 'Wie spreche ich offene Schulden an, ohne kleinlich zu wirken?',
        answer: 'Sprich die Person allein und sachlich an, nenne den offenen Posten mit Datum und frag, bis wann sie ausgleichen kann. Wer freundlich und konkret bleibt, wirkt nicht kleinlich, sondern verlässlich.'
      },
      {
        question: 'Hilft eine Split-App wirklich gegen Streit?',
        answer: 'Sie schafft Überblick, ersetzt aber keine Absprache. Klärt vorher, was eingetragen wird und an welchem Tag alle ihren Stand ausgleichen. Dann wird die App zum hilfreichen Werkzeug statt zur Mahnliste.'
      },
      {
        question: 'Was tun, wenn jemand gerade wirklich kein Geld hat?',
        answer: 'Offen darüber reden und eine machbare Lösung finden, etwa ein späteres Datum oder Raten. Wichtig ist, dass es besprochen und nicht verschwiegen wird. Bei ernsthaften Geldsorgen hilft eine Schuldnerberatung.'
      },
      {
        question: 'Wer ist für die Nebenkostenabrechnung zuständig?',
        answer: 'Das hängt vom Mietvertrag und eurer WG-Form ab. Klärt intern, wer die Abrechnung prüft und wie ihr Nachzahlungen verteilt. Bei rechtlichen Fragen wendest du dich an eine Mietrechtsberatung.'
      }
    ]
  }
};
