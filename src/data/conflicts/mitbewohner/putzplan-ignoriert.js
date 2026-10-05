export default {
  published: '2026-09-30',
  slug: 'putzplan-ignoriert',
  title: 'Mitbewohner:in hält sich nicht an den Putzplan',
  icon: '🧽',
  summary: 'Geschirr stapelt sich, das Bad bleibt liegen, der Müll quillt über: Eine Person in deiner WG ignoriert den Putzplan, und du willst das klären, ohne zur WG-Polizei zu werden.',
  problem: 'Am Kühlschrank hängt ein Putzplan, aber in der Spüle stehen seit Tagen Töpfe mit angetrockneten Resten. Das Bad war diese Woche eigentlich bei deiner Mitbewohnerin dran, der Müll bei deinem Mitbewohner, und am Ende machst du es doch wieder selbst, weil du den Geruch nicht mehr aushältst. Jedes Mal ärgerst du dich ein bisschen mehr, sagst aber wenig, weil du nicht kleinlich wirken willst. Irgendwann kippt die Stimmung: Du zählst innerlich mit, wer was gemacht hat, schreibst passiv-aggressive Nachrichten in die WG-Gruppe oder gehst dem Gespräch ganz aus dem Weg. Genau dieses stille Aufrechnen macht den Konflikt schwerer als das dreckige Geschirr selbst.',
  causes: [
    'Sauberkeit ist relativ. Was für dich schon unhaltbar ist, fällt einer anderen Person noch gar nicht auf. Solange niemand klar gesagt hat, was „erledigt“ bedeutet, hält sich jede Seite für fair.',
    'Viele Putzpläne wurden nie gemeinsam beschlossen, sondern von einer Person aufgehängt. Ohne echte Zustimmung fühlt sich niemand wirklich daran gebunden, und der Plan wird zur Empfehlung.',
    'Unterschiedliche Tagesrhythmen, Prüfungsphasen, Schichtarbeit oder eine Zweck-WG ohne viel Kontakt sorgen dafür, dass Aufgaben verrutschen. Wer kaum zu Hause ist, sieht die Unordnung oft einfach nicht.'
  ],
  safety: 'Ein ignorierter Putzplan ist ein klassischer WG-Alltagskonflikt. Anders ist es, wenn Streit um den Haushalt in Beleidigungen, Drohungen, Einschüchterung oder körperliche Übergriffe umschlägt, wenn jemand deine Sachen zerstört, dich aus gemeinsamen Räumen drängt oder dich sexuell belästigt. Dann ist das kein Thema für einen Putzplan mehr. Bring dich in Sicherheit, dokumentiere Vorfälle mit Datum und hol dir Unterstützung bei Vertrauenspersonen, einer Beratungsstelle oder dem Hilfetelefon Gewalt gegen Frauen 116 016 beziehungsweise dem Hilfetelefon Gewalt an Männern 0800 1239900. Bei akuter Gefahr wählst du 110. Auch starke Vernachlässigung, etwa Schimmel, Ungeziefer oder ein Zimmer, das völlig vermüllt, kann ein Hinweis darauf sein, dass es der Person gerade nicht gut geht und sie Hilfe braucht.',
  one_party: {
    preparation: 'Sammle vor dem Gespräch zwei oder drei konkrete Beispiele aus den letzten Wochen, etwa das Bad, das zweimal liegen geblieben ist, oder den Müll, der drei Tage im Flur stand. Überlege dir, was genau dich stört: die Arbeit selbst, der Geruch, das Gefühl, ausgenutzt zu werden, oder dass Absprachen nichts gelten. Prüfe ehrlich, ob der Plan überhaupt klar ist und ob alle ihm einmal zugestimmt haben. Formuliere dann ein Ziel für das Gespräch: nicht Schuld verteilen, sondern eine Regel finden, die alle einhalten können.',
    scripts: {
      sanft: 'Hey, hast du kurz Zeit? Mir ist aufgefallen, dass das Bad und der Müll die letzten Wochen öfter liegen geblieben sind, und ich mache es dann meistens selbst. Das nervt mich inzwischen ziemlich. Ist bei dir gerade viel los, oder passt der Plan für dich nicht so richtig?',
      direkt: 'Ich möchte etwas ansprechen, das mich stört. Du warst diese und letzte Woche mit dem Bad dran, und es ist nicht passiert. Ich will nicht länger deine Aufgaben mitmachen. Ich brauche von dir, dass du deinen Teil erledigst, oder dass wir den Plan gemeinsam so ändern, dass er für dich funktioniert.',
      sachlich: 'Ich würde gern den Putzplan einmal gemeinsam durchgehen. Gerade klappt es bei Bad, Küche und Müll nicht zuverlässig, und das sorgt für Frust. Lass uns klären, was genau zu jeder Aufgabe gehört, bis wann sie erledigt sein soll und was wir machen, wenn jemand es mal nicht schafft.'
    },
    steps: [
      'Warte, bis du nicht mehr akut wütend bist. Sprich das Thema nicht vor der vollen Spüle an, sondern zu einem ruhigen Zeitpunkt.',
      'Sprich die Person direkt an, nicht über die WG-Gruppe und nicht mit einem Zettel an der Kühlschranktür.',
      'Nenne ein oder zwei konkrete Situationen und beschreibe, was sie bei dir auslösen, ohne Vorwürfe über den Charakter.',
      'Frag nach, wie die andere Person die Lage sieht. Vielleicht ist der Plan unklar, unfair verteilt oder passt nicht zu ihren Arbeitszeiten.',
      'Schlagt gemeinsam eine konkrete Änderung vor, etwa eine klare Definition von „erledigt“ oder feste Tage.',
      'Vereinbart, was passiert, wenn eine Aufgabe ausfällt: tauschen, nachholen oder vorher Bescheid geben.',
      'Macht einen kurzen Termin in zwei bis drei Wochen aus, um zu prüfen, ob die neue Absprache trägt.'
    ],
    reactions: [
      {
        trigger: 'So dreckig ist es doch gar nicht.',
        reaction: 'Das sehen wir offenbar unterschiedlich, und das ist okay. Genau deshalb möchte ich, dass wir festlegen, was zu einer Aufgabe gehört. Dann müssen wir nicht jedes Mal darüber diskutieren, ob es reicht.'
      },
      {
        trigger: 'Ich hab gerade echt keine Zeit, ich hab Prüfungen.',
        reaction: 'Das verstehe ich, stressige Phasen hat jede:r mal. Dann sag bitte vorher Bescheid, und wir tauschen oder du holst es danach nach. Was für mich nicht geht, ist, dass es einfach liegen bleibt und ich es stillschweigend übernehme.'
      },
      {
        trigger: 'Du bist aber auch nicht immer perfekt.',
        reaction: 'Stimmt, bei mir klappt auch nicht alles. Wenn dich bei mir etwas stört, sag es mir gern. Lass uns eine Regel finden, die für uns alle gilt, statt gegenseitig aufzurechnen.'
      }
    ],
    boundary: 'Du bist nicht verpflichtet, dauerhaft die Aufgaben anderer zu übernehmen, damit die Wohnung erträglich bleibt. Wenn Gespräche und ein angepasster Plan nichts ändern, darfst du aufhören, hinterherzuputzen, und das auch klar ankündigen. Schmutziges Geschirr der anderen Person kann in einer Kiste in ihrem Bereich landen statt in deiner Spüle. Wird die Situation dauerhaft untragbar, ist es legitim, in der WG offen darüber zu reden, ob das Zusammenwohnen so noch passt.'
  },
  two_party: {
    goal: 'Einen Putzplan vereinbaren, dem alle wirklich zugestimmt haben, mit klaren Aufgaben, einem gemeinsamen Verständnis von „sauber“ und einer fairen Regel für den Fall, dass jemand eine Aufgabe nicht schafft.',
    rules: [
      'Alle sprechen über konkrete Aufgaben und Situationen, nicht über Faulheit oder Charakter.',
      'Unterschiedliche Sauberkeitsstandards werden als normal anerkannt und nicht bewertet.',
      'Jede Person darf sagen, welche Aufgaben ihr schwerfallen oder zeitlich nicht passen.',
      'Beschlüsse gelten erst, wenn alle zugestimmt haben, auch wenn es ein Kompromiss ist.'
    ],
    questions: [
      'Welche Aufgaben im Haushalt nerven dich am meisten, wenn sie liegen bleiben?',
      'Was gehört für dich dazu, wenn Küche, Bad oder Müll als erledigt gelten?',
      'Welche Tage oder Zeiten passen zu deinem Studium, Job oder Schichtplan?',
      'Was soll passieren, wenn jemand seine Aufgabe in einer Woche nicht schafft?',
      'Woran merken wir in einem Monat, dass der neue Plan funktioniert?'
    ],
    steps: [
      'Ihr setzt eine WG-Besprechung an, zu der alle Zeit haben, am besten mit Tee oder Essen statt zwischen Tür und Angel.',
      'Jede Person sagt kurz, was sie im Haushalt stört und was ihr wichtig ist, die anderen hören zu, ohne zu unterbrechen.',
      'Gemeinsam listet ihr alle Aufgaben auf und legt fest, was jeweils dazugehört.',
      'Ihr verteilt die Aufgaben so, dass sie zu den Zeiten und Stärken aller passen, und rotiert unbeliebte Aufgaben.',
      'Ihr vereinbart eine Regel für Ausfälle, zum Beispiel vorher Bescheid geben und innerhalb von zwei Tagen nachholen.',
      'Nach drei bis vier Wochen schaut ihr in einer kurzen Runde, was klappt und was ihr anpassen wollt.'
    ],
    agreement: 'Wir vereinbaren einen Wochenplan mit Küche, Bad, Müll und Flur, der jede Woche rotiert. Erledigt bedeutet: Küche mit abgewischter Arbeitsfläche und leerer Spüle, Bad mit geputztem Waschbecken, Toilette und Dusche, Müll rausgebracht, sobald er voll ist. Eigenes Geschirr spült jede:r spätestens am nächsten Tag. Wer eine Aufgabe nicht schafft, sagt vorher in der WG-Gruppe Bescheid und holt sie innerhalb von zwei Tagen nach oder tauscht. In vier Wochen besprechen wir kurz, wie es läuft.'
  },
  dos: [
    'Konkrete Situationen ansprechen, statt allgemein über Unordnung zu klagen.',
    'Gemeinsam festlegen, was bei jeder Aufgabe als erledigt gilt.',
    'Den Plan an Arbeitszeiten, Prüfungsphasen und Schichten anpassen.',
    'Einen festen Termin vereinbaren, um die Absprache zu überprüfen.'
  ],
  donts: [
    'Passiv-aggressive Zettel an Kühlschrank oder Spüle hängen.',
    'Die Person in der WG-Gruppe vor allen bloßstellen.',
    'Monatelang schweigend hinterherputzen und innerlich aufrechnen.',
    'Das Geschirr der anderen demonstrativ auf ihr Bett stellen.'
  ],
  next_step: 'Schreib heute eine kurze Nachricht in die WG-Gruppe und schlag einen Termin für eine Besprechung vor, zum Beispiel am Sonntagabend. Formuliere es als gemeinsames Thema: „Ich würde gern den Putzplan mit euch neu aufsetzen, weil es gerade nicht rund läuft.“ Bring zur Besprechung eine Liste aller Aufgaben mit.',
  related: [
    { category: 'mitbewohner', slug: 'nebenkosten-und-einkauf' },
    { category: 'mitbewohner', slug: 'isst-meine-sachen' },
    { category: 'partner', slug: 'waesche-liegen-lassen' },
    { category: 'nachbarn', slug: 'muell-und-geruch' }
  ],
  article: {
    title: 'Mitbewohner hält sich nicht an den Putzplan: So klärt ihr Haushalt und Sauberkeit in der WG fair',
    meta: 'Mitbewohner hält sich nicht an den Putzplan? So sprichst du Geschirr, Bad und Müll fair an, findet ihr einen Plan, der hält, und klare Folgen bei Ausfällen.',
    intro: 'Kaum ein Thema sorgt in Wohngemeinschaften so zuverlässig für Streit wie der Haushalt. Das liegt nicht daran, dass WG-Bewohner:innen besonders unordentlich wären, sondern daran, dass mehrere Menschen mit unterschiedlichen Gewohnheiten, Tagesabläufen und Vorstellungen von Sauberkeit sich Küche, Bad und Flur teilen. Ein Putzplan soll das eigentlich regeln. In der Praxis hängt er oft irgendwann nur noch als Deko am Kühlschrank, während sich das Geschirr stapelt und der Müll im Flur steht. Wer sich dann kümmert, fühlt sich schnell ausgenutzt, wer sich nicht kümmert, fühlt sich zu Unrecht kontrolliert. Dieser Ratgeber erklärt, warum Putzpläne scheitern, welche Fehler den Konflikt verschärfen und wie ihr zu einer Absprache kommt, die im Alltag tatsächlich funktioniert.',
    situation: 'Oft beginnt es harmlos. Eine Person lässt am Wochenende das Bad aus, eine andere stellt ihre Pfanne zum Einweichen hin und vergisst sie. Niemand sagt etwas, weil es ja nur einmal war. Nach ein paar Wochen hat sich ein Muster eingeschlichen: Dieselbe Person übernimmt still die liegen gebliebenen Aufgaben, weil sie den Zustand nicht erträgt. Sie wird dabei immer gereizter, sagt aber wenig, um nicht spießig zu wirken. Stattdessen landen spitze Bemerkungen in der WG-Gruppe, ein Foto der Spüle mit drei Ausrufezeichen oder ein Zettel mit der Aufschrift „Das Geschirr spült sich nicht von allein“. Auf der anderen Seite fühlt sich die angesprochene Person überrumpelt und angegriffen, oft hat sie gar nicht gemerkt, dass es ein Problem gibt. In Zweck-WGs, in denen man sich nur selten sieht, verstärkt sich das, weil es kaum Gelegenheit für ein beiläufiges Gespräch gibt.',
    causes: [
      'Unterschiedliche Sauberkeitsschwellen sind der häufigste Grund. Menschen nehmen Schmutz sehr verschieden wahr, und was die eine Person sofort stört, bemerkt die andere erst Tage später. Das ist keine Frage von Moral, sondern von Gewohnheit, Herkunftsfamilie und Aufmerksamkeit. Solange niemand festlegt, was „geputzt“ heißt, arbeitet jede Seite mit ihrem eigenen Maßstab.',
      'Fehlende gemeinsame Verbindlichkeit spielt ebenfalls eine große Rolle. Ein Plan, den eine Person entworfen und aufgehängt hat, ist für die anderen oft nur ein Vorschlag. Wer nicht mitentschieden hat, fühlt sich weniger verpflichtet. Hinzu kommt, dass viele Pläne keine Regel für Ausnahmen enthalten, sodass schon eine einzige ausgefallene Woche das ganze System ins Wanken bringt.',
      'Lebensumstände verschieben die Prioritäten. Prüfungszeiten, lange Arbeitstage, Nachtschichten oder Nebenjobs lassen Hausarbeit weit nach hinten rutschen. Manchmal steckt hinter Vernachlässigung auch Erschöpfung oder eine schwierige persönliche Phase. Das entschuldigt nicht alles, erklärt aber, warum Appelle an Ordnung allein selten wirken.'
    ],
    mistakes: [
      'Der erste typische Fehler ist langes Schweigen. Wer wochenlang hinterherputzt und nichts sagt, sammelt Ärger an, der sich später in einem unverhältnismäßigen Ausbruch entlädt. Für die andere Seite kommt dieser Ausbruch aus dem Nichts, und das Gespräch dreht sich dann um den Ton statt um die Sache.',
      'Der zweite Fehler ist indirekte Kommunikation. Zettel, anonyme Nachrichten in der Gruppe oder vorwurfsvolle Fotos wirken auf die Empfänger:innen bloßstellend. Sie lösen Verteidigung statt Einsicht aus und vergiften schnell die Stimmung in der ganzen WG, auch bei denen, die gar nicht gemeint waren.',
      'Der dritte Fehler ist, nur über Schuld zu reden. Wer ausschließlich klären will, wer versagt hat, bekommt bestenfalls ein Zugeständnis für eine Woche. Nachhaltiger ist es, das System zu verbessern, also klare Aufgaben, faire Verteilung und eine Regel für Ausfälle.'
    ],
    strategy: 'Eine gute Lösung beginnt mit einer echten WG-Besprechung, nicht mit einem Gespräch im Flur. Plant einen Termin, zu dem alle Zeit haben, und macht klar, dass es um den gemeinsamen Haushalt geht und nicht um ein Tribunal gegen eine Person. Ein entspannter Rahmen hilft: gemeinsam kochen, etwas bestellen oder einfach am Küchentisch sitzen. Zu Beginn darf jede Person kurz sagen, was sie im Alltag stört und was ihr wichtig ist. Das macht sichtbar, dass es unterschiedliche Bedürfnisse gibt, und nimmt der Einzelperson den Druck, sich allein rechtfertigen zu müssen. Im zweiten Schritt listet ihr alle Aufgaben auf, die in eurer Wohnung anfallen. Viele Pläne scheitern, weil Posten wie Altglas, Kühlschrank, Handtücher oder Staubsaugen gar nicht vorkommen und dann immer an derselben Person hängen bleiben. Legt für jede Aufgabe fest, was dazugehört. Diese gemeinsame Definition ist der wichtigste Baustein, weil sie endlose Diskussionen über „das reicht doch“ überflüssig macht. Danach verteilt ihr die Aufgaben so, dass sie zu euren Zeiten passen. Wer unter der Woche selten da ist, übernimmt vielleicht lieber samstags das Bad, wer früh aufsteht, bringt morgens den Müll raus. Unbeliebte Aufgaben sollten rotieren, damit sich niemand dauerhaft benachteiligt fühlt. Manche WGs arbeiten auch gut mit festen Zuständigkeiten statt einer Rotation, entscheidend ist nur, dass alle zustimmen. Genauso wichtig ist die Frage, was passiert, wenn es mal nicht klappt. Eine einfache Regel lautet: vorher Bescheid geben und innerhalb weniger Tage nachholen oder tauschen. Konsequenzen sollten angemessen und vorher vereinbart sein, zum Beispiel, dass wer zweimal ausfällt, die nächste unbeliebte Aufgabe übernimmt. Manche WGs legen gemeinsam eine kleine Putzkasse an oder teilen sich eine Reinigungskraft, wenn alle einverstanden sind und es sich leisten können. Zum Schluss verabredet ihr einen Folgetermin in einigen Wochen. So wird der Plan zu etwas Lebendigem, das ihr anpassen dürft, statt zu einem Dokument, über das niemand mehr spricht.',
    examples: [
      'In einer Vierer-WG von Studierenden bleibt das Geschirr regelmäßig tagelang stehen. Bei einer Besprechung stellt sich heraus, dass zwei Personen abends spät aus der Uni kommen und morgens keine Zeit haben. Die WG einigt sich darauf, dass eigenes Geschirr spätestens am nächsten Abend gespült ist, und kauft einen zweiten Abtropfständer. Nach einem Monat funktioniert es spürbar besser.',
      'Eine Pflegekraft im Schichtdienst schafft ihren Badtag häufig nicht und wird dafür in der Gruppe kritisiert. Im Gespräch erklärt sie ihre wechselnden Dienste. Statt eines festen Wochentags bekommt sie ein Zeitfenster von Montag bis Samstag und tauscht in besonders vollen Wochen mit einem Mitbewohner, der dafür ihre Einkäufe übernimmt.',
      'In einer Zweck-WG ignoriert ein Mitbewohner den Plan trotz mehrerer Gespräche. Die beiden anderen hören auf, für ihn mitzuputzen, stellen sein Geschirr in eine Kiste vor seiner Zimmertür und sprechen offen an, dass sie so auf Dauer nicht zusammenwohnen möchten. Das klare Signal führt zu einem ehrlichen Gespräch über seine Pläne.'
    ],
    help: 'Wenn aus Streit um den Haushalt Beleidigungen, Drohungen, Einschüchterung oder Übergriffe werden, ist das kein Putzplan-Problem mehr. Dokumentiere Vorfälle, hol dir Unterstützung bei Vertrauenspersonen oder Beratungsstellen und wähle bei akuter Gefahr 110. Frauen erreichen das Hilfetelefon Gewalt gegen Frauen unter 116 016, Männer das Hilfetelefon Gewalt an Männern unter 0800 1239900. Fällt dir auf, dass eine Mitbewohnerin oder ein Mitbewohner sich stark zurückzieht, das Zimmer verwahrlosen lässt oder kaum noch den Alltag schafft, kann dahinter eine psychische Belastung stecken. Sprich die Person dann eher mit Sorge als mit Kritik an. Wer selbst reden möchte, erreicht die TelefonSeelsorge rund um die Uhr unter 0800 1110111 oder 0800 1110222. Bei Fragen zu Mietvertrag, Untermiete oder Auszug hilft eine Beratung beim Mieterverein oder beim Studierendenwerk. Dieser Ratgeber ersetzt keine Rechtsberatung.',
    faqs: [
      {
        question: 'Wie spreche ich einen Mitbewohner auf den Putzplan an, ohne spießig zu wirken?',
        answer: 'Sprich konkret und persönlich statt über Zettel oder die Gruppe. Nenne eine Situation, beschreibe, was sie bei dir auslöst, und frag nach seiner Sicht. Wer nachfragt, wirkt nicht kontrollierend.'
      },
      {
        question: 'Was tun, wenn sich eine Person trotz Absprache nicht an den Plan hält?',
        answer: 'Sprecht es zeitnah in einer kurzen Runde an und erinnert an die gemeinsame Regel für Ausfälle. Ändert sich weiter nichts, darfst du aufhören, ihre Aufgaben mitzuerledigen, und das offen ankündigen.'
      },
      {
        question: 'Welcher Putzplan funktioniert in einer WG am besten?',
        answer: 'Der, dem alle zugestimmt haben. Wichtig sind eine vollständige Aufgabenliste, eine klare Definition von „erledigt“, eine faire Verteilung und eine Regel für Ausnahmen. Ob rotierend oder fest, entscheidet ihr gemeinsam.'
      },
      {
        question: 'Sind Strafen oder eine Putzkasse in der WG sinnvoll?',
        answer: 'Das kann funktionieren, wenn alle es freiwillig vereinbaren und es angemessen bleibt. Häufig reichen weiche Konsequenzen wie eine zusätzliche unbeliebte Aufgabe. Einseitig verhängte Strafen sorgen eher für neuen Streit.'
      },
      {
        question: 'Was, wenn wir einfach unterschiedliche Vorstellungen von Sauberkeit haben?',
        answer: 'Das ist normal und kein Charakterfehler. Einigt euch auf einen Mindeststandard für gemeinsame Räume. Wer es sauberer möchte, kann mehr machen, sollte das aber nicht als Vorwurf gegen die anderen verwenden.'
      }
    ]
  }
};
