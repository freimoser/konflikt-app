export default {
  published: '2026-09-30',
  slug: 'isst-meine-sachen',
  title: 'Mitbewohner:in isst mein Essen und benutzt meine Sachen',
  icon: '🧀',
  summary: 'Dein Joghurt ist weg, dein Shampoo leert sich schneller als gedacht, dein Lieblingspulli hängt über einem fremden Stuhl: Du willst das klar ansprechen, ohne kleinlich zu wirken.',
  problem: 'Du kommst nach Hause, freust dich auf den Rest vom Curry, und die Dose ist leer. Die Hafermilch, die du gestern gekauft hast, ist halb weg. Im Bad steht dein Shampoo plötzlich an einer anderen Stelle, deine Pfanne liegt benutzt in der Spüle, und einmal siehst du deine Jacke an jemand anderem. Einzeln wirkt jede Sache klein, fast zu klein, um darüber zu reden. Zusammen ergibt sich aber ein Gefühl, das nervt: Du kannst dich in deiner eigenen Wohnung nicht darauf verlassen, dass deine Sachen deine bleiben. Du planst Einkäufe, die dann nicht aufgehen, und du ertappst dich dabei, Dinge zu verstecken oder im Zimmer zu horten. Gleichzeitig willst du nicht als die Person dastehen, die wegen einer Scheibe Käse einen Aufstand macht.',
  causes: [
    'In vielen WGs wurde nie ausgesprochen, was geteilt wird und was nicht. Was für dich eindeutig dein Eigentum ist, fällt für die andere Person unter „steht halt im Kühlschrank“ oder „das nutzen wir doch alle“.',
    'Menschen bringen unterschiedliche Gewohnheiten mit. Wer aus einer Familie oder früheren WG kommt, in der alles gemeinsam war, nimmt sich oft ganz selbstverständlich etwas, ohne das als Grenzüberschreitung zu empfinden.',
    'Manchmal steckt Stress oder Knappheit dahinter: wenig Geld, keine Zeit zum Einkaufen, spätes Heimkommen mit Hunger. Das entschuldigt nichts, erklärt aber, warum der Griff zu deinem Fach so leicht fällt.'
  ],
  safety: 'Dass jemand dein Essen oder dein Shampoo nimmt, ist ärgerlich, aber ein typischer Alltagskonflikt. Anders sieht es aus, wenn Geld, Wertsachen oder Dokumente verschwinden, wenn jemand in deinem Zimmer war, obwohl du das nicht willst, wenn du bedroht oder eingeschüchtert wirst, sobald du etwas ansprichst, oder wenn du dich in der Wohnung nicht mehr sicher fühlst. Dann geht es nicht mehr um Kühlschrankregeln. Dokumentiere Vorfälle mit Datum, sichere deine Wertsachen, sprich mit einer Vertrauensperson und hol dir Unterstützung, etwa bei einer Beratungsstelle. Bei akuter Gefahr wählst du 110.',
  one_party: {
    preparation: 'Überleg dir vorher, was dich wirklich stört. Ist es das Essen, das fehlt, das Geld, das du doppelt ausgibst, oder das Gefühl, nicht gefragt zu werden? Schreib dir zwei oder drei konkrete Beispiele aus den letzten Tagen auf, damit du nicht mit „immer“ und „ständig“ argumentieren musst. Entscheide dann, was du dir wünschst: gar nichts nehmen, erst fragen oder bestimmte Dinge bewusst teilen. Wer mit einer klaren Vorstellung ins Gespräch geht, wirkt nicht kleinlich, sondern fair.',
    scripts: {
      sanft: 'Du, mir ist etwas aufgefallen, und ich will es lieber jetzt ansprechen, bevor ich mich innerlich darüber ärgere. In den letzten Tagen waren ein paar meiner Lebensmittel weg und mein Shampoo wird schnell leer. Vielleicht war dir gar nicht klar, dass das meine Sachen sind. Können wir kurz klären, was bei uns geteilt wird und was nicht?',
      direkt: 'Ich möchte nicht, dass du mein Essen isst oder meine Sachen benutzt, ohne vorher zu fragen. Gestern war mein Curry weg, heute die Hafermilch, und meine Jacke hattest du auch an. Wenn du etwas brauchst, frag mich einfach. Oft sage ich ja, aber ich will gefragt werden.',
      sachlich: 'Ich kaufe mir bestimmte Sachen bewusst für meine Woche ein, und wenn die fehlen, muss ich nachkaufen. Das kostet mich Zeit und Geld. Mein Vorschlag: Jede Person hat ein eigenes Fach im Kühlschrank, und für Grundsachen wie Salz, Öl oder Spülmittel machen wir eine gemeinsame Kasse. Was hältst du davon?'
    },
    steps: [
      'Warte, bis du nicht mehr akut sauer bist, und sprich die Sache zeitnah an, statt wochenlang Beispiele zu sammeln.',
      'Wähle einen ruhigen Moment unter vier Augen, nicht im WG-Chat und nicht vor Besuch.',
      'Nenne zwei oder drei konkrete Situationen, ohne Vorwürfe über den Charakter der Person.',
      'Sag klar, was du dir künftig wünschst: fragen, nicht nehmen oder bewusst teilen.',
      'Frag nach, wie die andere Person das bisher gesehen hat, und hör wirklich zu.',
      'Schlagt gemeinsam eine einfache Regel vor, etwa eigene Fächer oder eine Liste für geteilte Dinge.',
      'Sprich es beim nächsten Mal sofort und freundlich an, wenn die Absprache nicht eingehalten wird.'
    ],
    reactions: [
      {
        trigger: 'Jetzt stell dich nicht so an, das war doch nur ein Joghurt.',
        reaction: 'Für dich war es nur ein Joghurt, für mich war es der dritte fehlende Einkauf diese Woche. Es geht mir nicht um die Menge, sondern darum, dass ich gefragt werden möchte.'
      },
      {
        trigger: 'Du nimmst dir doch auch manchmal was von mir.',
        reaction: 'Wenn ich das getan habe, ohne zu fragen, tut es mir leid, und dann gilt die Regel natürlich für uns beide. Lass uns das gleich mit klären, damit es fair für alle ist.'
      },
      {
        trigger: 'Ich dachte, in einer WG teilt man eben.',
        reaction: 'Das kann ich verstehen, das handhabt jede WG anders. Bei mir ist es so, dass ich meine Sachen lieber selbst verwalte. Wir können gern bestimmte Dinge bewusst teilen, aber dann sprechen wir das vorher ab.'
      }
    ],
    boundary: 'Du musst deine Sachen nicht verstecken, abschließen oder dich rechtfertigen, weil du sie behalten willst. Wenn die Absprache trotz klarer Worte immer wieder gebrochen wird, darfst du Konsequenzen ziehen: dein Essen im eigenen Zimmer lagern, geteilte Einkäufe beenden oder das Thema in einer WG-Runde mit allen besprechen. Freundlich bleiben heißt nicht, alles hinzunehmen.'
  },
  two_party: {
    goal: 'Eine klare, einfache Regel finden, was in der WG geteilt wird und was nicht, sodass niemand mehr vor einem leeren Fach steht und niemand sich kontrolliert fühlt.',
    rules: [
      'Beide sprechen über konkrete Situationen und Dinge, nicht über Charakter oder Erziehung.',
      'Unterschiedliche WG-Gewohnheiten werden als Ausgangspunkt anerkannt, nicht als Fehler.',
      'Niemand muss sich entschuldigen, um an einer Lösung mitzuarbeiten.',
      'Die Regel gilt für alle Beteiligten gleichermaßen, nicht nur für eine Person.'
    ],
    questions: [
      'Was von deinen Sachen ist dir besonders wichtig, und was dürfte ruhig jede:r nutzen?',
      'Wie habt ihr das in deiner letzten WG oder zu Hause gehandhabt?',
      'Welche Grundsachen wollen wir gemeinsam kaufen und wie teilen wir die Kosten auf?',
      'Wie sollen wir uns melden, wenn jemand etwas vom anderen braucht, gerade spätabends?',
      'Was machen wir, wenn doch mal etwas aus Versehen verbraucht wird?'
    ],
    steps: [
      'Ihr setzt euch zu einem ruhigen Zeitpunkt zusammen, zum Beispiel beim gemeinsamen Kaffee am Wochenende.',
      'Jede Person sagt, was sie stört und was sie sich wünscht, die andere fasst kurz zusammen.',
      'Ihr sortiert gemeinsam: Was gehört einer Person, was wird bewusst geteilt, was kommt in eine gemeinsame Kasse?',
      'Ihr einigt euch auf eine sichtbare Lösung, etwa beschriftete Fächer oder eine Einkaufsliste am Kühlschrank.',
      'Ihr klärt, wie Ersatz funktioniert, wenn doch einmal etwas verbraucht wird.',
      'Nach ein paar Wochen fragt ihr euch kurz, ob die Regel im Alltag funktioniert.'
    ],
    agreement: 'Wir vereinbaren, dass jede Person ein eigenes Fach im Kühlschrank und im Regal hat. Was dort liegt, nehmen wir nur nach Nachfrage. Salz, Öl, Gewürze, Spülmittel und Toilettenpapier kaufen wir gemeinsam und notieren die Ausgaben. Kosmetik, Kleidung und persönliches Geschirr bleiben privat. Wenn doch einmal etwas verbraucht wird, sagen wir sofort Bescheid und ersetzen es. In ein paar Wochen schauen wir gemeinsam, ob das so passt.'
  },
  dos: [
    'Konkrete Beispiele nennen statt pauschal „immer“ zu sagen.',
    'Zeitnah und freundlich ansprechen, bevor sich Ärger aufstaut.',
    'Eine sichtbare Lösung wie eigene Fächer oder eine Liste vorschlagen.',
    'Bewusst anbieten, bestimmte Dinge zu teilen, wenn dir das recht ist.'
  ],
  donts: [
    'Passiv-aggressive Zettel an den Kühlschrank kleben.',
    'Heimlich zurücknehmen oder aus Rache etwas von der anderen Person verbrauchen.',
    'Das Thema zuerst im WG-Chat vor allen breittreten.',
    'Wochenlang schweigen und dann alles auf einmal vorwerfen.'
  ],
  next_step: 'Schreib dir heute zwei konkrete Beispiele auf, bei denen deine Sachen ohne Nachfrage genutzt wurden, und überleg dir, welche Regel du dir wünschst. Sprich deine:n Mitbewohner:in in den nächsten Tagen in einem ruhigen Moment darauf an und schlag eigene Fächer plus eine kleine Gemeinschaftskasse für Grundsachen vor.',
  related: [
    { category: 'mitbewohner', slug: 'nebenkosten-und-einkauf' },
    { category: 'mitbewohner', slug: 'putzplan-ignoriert' },
    { category: 'freunde', slug: 'grenzen-nicht-respektiert' },
    { category: 'mitbewohner', slug: 'partner-wohnt-mit' }
  ],
  article: {
    title: 'Mitbewohner isst mein Essen: Wie du Grenzen in der WG klärst, ohne kleinlich zu wirken',
    meta: 'Mitbewohner:in isst dein Essen oder nimmt dein Shampoo? So sprichst du es fair an, findest klare WG-Regeln fürs Teilen und schützt deine Sachen dauerhaft.',
    intro: 'Kaum ein WG-Konflikt ist so alltäglich und gleichzeitig so unangenehm anzusprechen wie dieser: Jemand bedient sich an deinen Sachen. Mal ist es der letzte Käse, mal die Pasta, die du für morgen eingeplant hattest, mal das teure Shampoo oder die gute Pfanne. Viele Betroffene zögern lange, weil jede einzelne Sache so banal wirkt. Wer will schon die Person sein, die über eine Scheibe Brot diskutiert? Doch genau dieses Zögern lässt den Ärger wachsen. Hinter dem fehlenden Joghurt steht ein größeres Thema: Vertrauen, Fairness und die Frage, wie viel Privatsphäre in einer geteilten Wohnung bleibt. Dieser Ratgeber erklärt, warum solche Situationen so häufig entstehen, welche Reaktionen die Lage verschlimmern und wie du mit deinen Mitbewohner:innen eine Lösung findest, die im Alltag wirklich trägt.',
    situation: 'Typisch ist ein schleichender Verlauf. Am Anfang bemerkst du nur, dass etwas schneller leer ist als gedacht. Du bist dir nicht sicher, ob du dich verrechnet hast, und sagst nichts. Dann fehlt wieder etwas, diesmal eindeutig. Vielleicht findest du dein Geschirr schmutzig in der Spüle oder siehst deine Mitbewohnerin in deinem Pullover im Flur. Spätestens dann merkst du, wie sich dein Verhalten verändert. Du kaufst weniger ein, lagerst Lebensmittel im eigenen Zimmer, markierst Packungen oder kontrollierst den Füllstand deiner Flaschen. Das kostet Energie und verändert das Klima in der Wohnung. Aus einem Zuhause wird ein Ort, an dem du wachsam bist. Besonders zermürbend ist, dass die andere Person oft gar nicht merkt, was sie auslöst. Für sie ist alles wie immer, während du innerlich längst eine Liste führst. Dieses Ungleichgewicht macht den Konflikt schwer, denn wenn du ihn endlich ansprichst, trifft er die andere Seite häufig völlig unvorbereitet.',
    causes: [
      'Unklare Grundregeln sind die häufigste Ursache. Viele WGs starten mit Begeisterung, aber ohne echte Absprache darüber, was gemeinsam genutzt wird. Jede Person füllt diese Lücke mit ihren eigenen Annahmen. Für die eine ist klar, dass alles im Kühlschrank allen gehört, für die andere ist jede Packung Privatsache. Beide halten sich für normal und die andere Sicht für seltsam.',
      'Prägung aus früheren Wohnformen spielt eine große Rolle. Wer in einer großen Familie aufgewachsen ist, in der man sich einfach nahm, was da war, oder in einer WG mit gemeinsamer Kasse gewohnt hat, empfindet das Nehmen nicht als Übergriff. Umgekehrt erlebt jemand, der seine Sachen immer selbst verwaltet hat, schon das Ausleihen einer Tasse als Grenzüberschreitung. Diese unterschiedlichen Landkarten sind keine Charakterfrage, sondern Gewohnheit.',
      'Alltagsdruck macht Grenzen durchlässig. Wer spät heimkommt, wenig Geld hat oder schlicht vergessen hat einzukaufen, greift schneller zum nächstbesten Fach. Oft steckt dahinter der Gedanke, es später zu ersetzen, was dann im Trubel untergeht. Das ist keine Entschuldigung, hilft aber, das Verhalten einzuordnen, ohne gleich böse Absicht zu unterstellen.'
    ],
    mistakes: [
      'Der Klassiker ist der Zettel am Kühlschrank. Er fühlt sich weniger konfrontativ an als ein Gespräch, wird aber fast immer als passiv-aggressiv verstanden. Statt Klarheit entsteht Gereiztheit, und manchmal antwortet jemand mit einem Gegenzettel. Dann wird aus einem lösbaren Problem ein Grabenkrieg auf Papier.',
      'Ebenso schädlich ist das lange Schweigen. Wer wochenlang Beispiele sammelt und dann mit einer vollständigen Liste auftritt, überfordert die andere Person. Sie fühlt sich angeklagt, beobachtet und hat kaum Chance, auf einzelne Punkte einzugehen. Aus deiner berechtigten Bitte wird ein Tribunal.',
      'Ein dritter Fehler ist die Vergeltung. Heimlich etwas zurücknehmen, das Lieblingsessen der anderen Person verbrauchen oder ihr Geschirr absichtlich stehen lassen, fühlt sich kurz gerecht an. Es zerstört aber jede Basis für eine faire Regel und macht dich angreifbar, wenn es doch zum Gespräch kommt.'
    ],
    strategy: 'Der wichtigste Schritt ist, das Thema früh und in kleiner Dosis anzusprechen. Du musst nicht warten, bis der Ärger groß genug ist, um ihn zu rechtfertigen. Ein ruhiger Satz nach dem zweiten oder dritten Vorfall ist angemessen und wirkt viel entspannter als eine Abrechnung nach Monaten. Bereite dich kurz vor, indem du für dich klärst, worum es eigentlich geht. Stört dich das Geld, der Aufwand fürs Nachkaufen oder vor allem das Gefühl, übergangen zu werden? Diese Klarheit hilft dir, im Gespräch beim Kern zu bleiben. Im Gespräch selbst lohnt es sich, die eigene Sicht als Ich-Botschaft zu formulieren und nach der Perspektive der anderen Person zu fragen. Oft zeigt sich dann, dass sie schlicht eine andere Vorstellung von WG-Leben hatte. Entscheidend ist, dass ihr aus dem Gespräch eine sichtbare, einfache Regel mitnehmt. Unsichtbare Absprachen geraten schnell in Vergessenheit, sichtbare Strukturen tragen. Bewährt haben sich eigene Fächer im Kühlschrank und im Vorratsregal, eine Kiste im Bad für persönliche Kosmetik und eine Liste für Grundsachen, die alle gemeinsam kaufen. Wichtig ist außerdem eine Regel für den Ernstfall: Was passiert, wenn doch einmal etwas verbraucht wird? Ein kurzes Bescheidsagen und zeitnahes Ersetzen nimmt der Situation die Schärfe. Denk auch daran, dass Grenzen nicht bedeuten, dass nichts mehr geteilt wird. Viele WGs werden gerade dann entspannter, wenn klar ist, was privat bleibt, weil das bewusste Teilen dann wieder Freude macht. Du kannst also gleichzeitig Grenzen ziehen und großzügig sein, nur eben auf deine Entscheidung hin. Bleibt die Person trotz klarer Absprache bei ihrem Verhalten, darfst du den Ton verschärfen und eine WG-Runde mit allen einberufen. Gemeinsame Regeln, die alle mittragen, haben mehr Gewicht als eine Bitte unter vier Augen.',
    examples: [
      'In einer Dreier-WG verschwindet immer wieder Aufschnitt. Statt einen Zettel aufzuhängen, spricht Lena das Thema beim Sonntagsfrühstück an. Es stellt sich heraus, dass ihr Mitbewohner dachte, Wurst und Käse seien Gemeinschaftseinkauf, weil sie früher oft zusammen gekocht haben. Die drei führen beschriftete Fächer ein und eine Liste für gemeinsame Grundsachen. Das Problem ist nach zwei Wochen erledigt.',
      'Tarek merkt, dass sein Shampoo und seine Handtücher regelmäßig benutzt werden. Er spricht seine Mitbewohnerin direkt an und bleibt freundlich, aber klar. Sie gibt zu, dass sie ihr eigenes oft vergisst. Die beiden vereinbaren, dass sie in solchen Fällen kurz schreibt und das Shampoo beim nächsten Einkauf ersetzt. Seitdem fühlt sich Tarek nicht mehr übergangen.',
      'Eine Studentin stellt fest, dass ihre Mitbewohnerin trotz mehrerer Gespräche weiter ihr Essen nimmt. Sie hört auf zu diskutieren, lagert empfindliche Lebensmittel in einer kleinen Box im eigenen Zimmer und bringt das Thema in die nächste WG-Runde ein. Dort einigen sich alle auf eine gemeinsame Regel, an die sich die Mitbewohnerin nun halten muss.'
    ],
    help: 'Solange es um Lebensmittel, Kosmetik oder Geschirr geht, lässt sich der Konflikt in den meisten WGs mit Gesprächen und klaren Regeln lösen. Wenn aber Geld, Wertsachen oder wichtige Dokumente verschwinden, jemand ohne Erlaubnis dein Zimmer betritt oder du bedroht und eingeschüchtert wirst, sobald du etwas ansprichst, ist das kein gewöhnlicher Alltagskonflikt mehr. Dokumentiere dann jeden Vorfall mit Datum, sichere deine Wertsachen und sprich mit einer Vertrauensperson. Bei akuter Gefahr rufst du die Polizei unter 110. Wenn dich die Situation seelisch stark belastet und du mit jemandem reden möchtest, erreichst du die TelefonSeelsorge rund um die Uhr unter 0800 1110111 oder 0800 1110222. Dieser Ratgeber ersetzt keine Rechts- oder psychologische Beratung, er hilft dir, im WG-Alltag ruhig und klar zu bleiben.',
    faqs: [
      {
        question: 'Bin ich kleinlich, wenn mich ein fehlender Joghurt stört?',
        answer: 'Nein. Es geht selten um den einzelnen Joghurt, sondern um das Gefühl, nicht gefragt zu werden. Diesen Wunsch nach Absprache darfst du ernst nehmen und aussprechen.'
      },
      {
        question: 'Sollte ich meine Lebensmittel beschriften?',
        answer: 'Beschriftete Fächer helfen oft mehr als Namen auf einzelnen Packungen. Sie schaffen Klarheit, ohne misstrauisch zu wirken, und gelten für alle in der WG gleich.'
      },
      {
        question: 'Wie spreche ich das Thema an, ohne dass es peinlich wird?',
        answer: 'Wähle einen ruhigen Moment, nenne zwei konkrete Beispiele und formuliere einen Wunsch statt eines Vorwurfs. Je früher du es ansprichst, desto entspannter bleibt das Gespräch.'
      },
      {
        question: 'Was mache ich, wenn sich nach dem Gespräch nichts ändert?',
        answer: 'Sprich es beim nächsten Vorfall sofort und kurz an. Hilft das nicht, bring das Thema in eine WG-Runde ein oder lagere wichtige Dinge vorübergehend in deinem Zimmer.'
      },
      {
        question: 'Ist eine gemeinsame Kasse eine gute Idee?',
        answer: 'Für Grundsachen wie Spülmittel, Öl oder Toilettenpapier funktioniert eine gemeinsame Kasse in vielen WGs gut. Wichtig ist, dass alle Ausgaben transparent notiert werden.'
      }
    ]
  }
};
