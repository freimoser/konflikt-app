// Gesprächs-Trainer „Was antwortest du?“
// Jedes Szenario: Das Gegenüber sagt einen schwierigen Satz, drei Antworten stehen zur Wahl.
// Genau eine Antwort ist vom Typ 'klar' (ruhig, konkret, beim Thema, respektiert beide Seiten).

export const scenarios = [
  // ---------- Partner:in ----------
  {
    id: 'partner-waesche-1',
    conflict: { category: 'partner', slug: 'waesche-liegen-lassen' },
    context: 'Du hast deine:n Partner:in ruhig gebeten, die getragene Wäsche nicht mehr im Flur liegen zu lassen.',
    says: 'Jetzt fang nicht schon wieder damit an. Du bist echt pedantisch.',
    options: [
      {
        text: 'Ich bin pedantisch? Du bist einfach nur faul, das ist das Problem.',
        type: 'eskalierend',
        feedback: 'Du gibst das Etikett mit einem neuen zurück. Jetzt geht es um Charakterfragen, und die Wäsche ist aus dem Blick.'
      },
      {
        text: 'Mag sein, dass es mir wichtiger ist als dir. Mir geht es nur um den Flur: Kannst du die Sachen abends in den Wäschekorb legen?',
        type: 'klar',
        feedback: 'Du lässt das Etikett stehen, ohne dich zu verteidigen, und bringst eine konkrete, machbare Bitte. So bleibt das Gespräch lösbar.'
      },
      {
        text: 'Schon gut, vergiss es. Ich räum es halt selbst weg.',
        type: 'ausweichend',
        feedback: 'Kurzfristig ist Ruhe, aber der Ärger bleibt bei dir. Beim nächsten Wäschehaufen ist er wahrscheinlich größer.'
      }
    ],
    tip: 'Nimm ein Etikett nicht an und gib keins zurück – bleib bei der konkreten Bitte.'
  },
  {
    id: 'partner-zuhoeren-1',
    conflict: { category: 'partner', slug: 'hoert-nicht-zu' },
    context: 'Du erzählst von einem schwierigen Tag im Job. Dein Gegenüber schaut dabei aufs Handy und antwortet nur mit „mhm“. Du sprichst es an.',
    says: 'Ich höre doch zu! Du willst nur wieder, dass sich alles um dich dreht.',
    options: [
      {
        text: 'Ich glaube dir, dass du nicht abschalten wolltest. Mir hilft es, wenn du das Handy kurz weglegst, wenn ich dir etwas Wichtiges erzähle. Geht das jetzt für fünf Minuten?',
        type: 'klar',
        feedback: 'Du unterstellst keine böse Absicht und sagst genau, was du brauchst. Die Bitte ist klein und sofort umsetzbar.'
      },
      {
        text: 'Du hörst mir nie zu. Dein Handy ist dir wichtiger als ich.',
        type: 'eskalierend',
        feedback: '„Nie“ und der Vergleich mit dem Handy laden zur Verteidigung ein. Dein Gegenüber wird eher Gegenbeispiele suchen als zuhören.'
      },
      {
        text: 'Okay, dann halt nicht. War eh nicht so wichtig.',
        type: 'ausweichend',
        feedback: 'Du ziehst dich zurück und machst dein Anliegen kleiner, als es ist. Dein Gegenüber erfährt nicht, was dir gefehlt hat.'
      }
    ],
    tip: 'Sag, was du brauchst, statt aufzuzählen, was der andere falsch macht.'
  },
  {
    id: 'partner-geld-1',
    conflict: { category: 'partner', slug: 'streit-um-geld' },
    context: 'Ihr sprecht über das gemeinsame Konto. Du hast angemerkt, dass diesen Monat deutlich mehr ausgegeben wurde als geplant.',
    says: 'Willst du mir jetzt vorschreiben, wofür ich mein Geld ausgebe?',
    options: [
      {
        text: 'Wenn du nicht so verschwenderisch wärst, müssten wir gar nicht darüber reden.',
        type: 'eskalierend',
        feedback: '„Verschwenderisch“ ist ein Urteil über die Person. Das Gespräch kippt vom Budget zum Schlagabtausch.'
      },
      {
        text: 'Nein, nein, mach doch, was du willst.',
        type: 'ausweichend',
        feedback: 'Du gibst eine Frage auf, die dir eigentlich wichtig ist. Das Thema kommt spätestens beim nächsten Kontoauszug zurück.'
      },
      {
        text: 'Nein, dein eigenes Geld ist deine Sache. Mir geht es um das gemeinsame Konto: Lass uns einen Betrag festlegen, über den jede:r frei verfügt, und den Rest zusammen planen.',
        type: 'klar',
        feedback: 'Du nimmst die Sorge vor Bevormundung ernst und trennst sie vom eigentlichen Thema. Der Vorschlag gibt euch beiden Freiraum und Klarheit.'
      }
    ],
    tip: 'Nimm die Befürchtung hinter dem Vorwurf ernst und mach einen Vorschlag, der beiden Spielraum lässt.'
  },

  // ---------- Chef:in ----------
  {
    id: 'chef-druck-1',
    conflict: { category: 'chef', slug: 'zu-viel-druck' },
    context: 'Du hast deiner Führungskraft gesagt, dass du die drei Deadlines dieser Woche nicht alle schaffen kannst.',
    says: 'Das ist gerade eine harte Phase, da müssen alle mal die Zähne zusammenbeißen.',
    options: [
      {
        text: 'Ja, klar, ich krieg das schon irgendwie hin.',
        type: 'ausweichend',
        feedback: 'Du sagst zu, obwohl du weißt, dass es nicht aufgeht. Das Problem verschiebt sich nur nach hinten und landet dann bei dir.'
      },
      {
        text: 'Harte Phase? Das höre ich seit einem halben Jahr. Das ist einfach schlechte Planung.',
        type: 'eskalierend',
        feedback: 'Inhaltlich mag etwas dran sein, aber als Vorwurf formuliert muss sich deine Führungskraft verteidigen, statt zu priorisieren.'
      },
      {
        text: 'Ich ziehe gern mit. Damit es auch klappt, brauche ich eine Entscheidung: Welches der drei Projekte hat Vorrang, und welches kann eine Woche warten?',
        type: 'klar',
        feedback: 'Du zeigst Einsatz und gibst die Priorisierung dorthin zurück, wo sie hingehört. Das ist konstruktiv, ohne dass du dich übernimmst.'
      }
    ],
    tip: 'Mach aus „zu viel“ eine konkrete Entscheidungsfrage an die Person, die priorisieren darf.'
  },
  {
    id: 'chef-mikromanagement-1',
    conflict: { category: 'chef', slug: 'mikromanagement' },
    context: 'Deine Führungskraft lässt sich jede E-Mail an Kund:innen vor dem Versand zeigen. Du hast gefragt, ob das bei Routineanfragen nötig ist.',
    says: 'Ich will einfach sichergehen, dass nichts schiefläuft. Vertrauen muss man sich erst verdienen.',
    options: [
      {
        text: 'Ich mache den Job seit drei Jahren. Wenn du mir nicht vertraust, sag es doch direkt.',
        type: 'eskalierend',
        feedback: 'Die Kränkung ist verständlich, aber die Gegenforderung setzt deine Führungskraft unter Druck. Sie wird eher auf ihrem Standpunkt beharren.'
      },
      {
        text: 'Das verstehe ich. Wie wäre es mit einem Test: Zwei Wochen lang schicke ich Routineantworten direkt raus und setze dich in Kopie. Danach schauen wir gemeinsam drauf.',
        type: 'klar',
        feedback: 'Du nimmst das Sicherheitsbedürfnis auf und bietest einen überprüfbaren Weg an. Das ist leichter zuzusagen als ein pauschales „Lass mich einfach machen“.'
      },
      {
        text: 'Okay, dann schicke ich weiter alles vorher rüber.',
        type: 'ausweichend',
        feedback: 'Du fügst dich, ohne dass sich etwas klärt. Der Frust über die Kontrolle bleibt und wächst oft mit jeder Mail.'
      }
    ],
    tip: 'Biete einen kleinen, überprüfbaren Versuch an, statt pauschal mehr Freiheit zu fordern.'
  },
  {
    id: 'chef-feedback-1',
    conflict: { category: 'chef', slug: 'kein-feedback' },
    context: 'Du hast um eine Rückmeldung zu deinem Projektbericht gebeten, den du vor drei Wochen abgegeben hast.',
    says: 'Passt schon. Wenn was wäre, hätte ich mich gemeldet.',
    options: [
      {
        text: 'Gut zu hören. Mir hilft trotzdem ein kurzer Blick nach vorn: Was sollte ich beim nächsten Bericht beibehalten, und was könnte besser werden? Zehn Minuten diese Woche würden reichen.',
        type: 'klar',
        feedback: 'Du machst es deiner Führungskraft leicht: zwei konkrete Fragen und ein kleiner Zeitrahmen. So entsteht Feedback, mit dem du arbeiten kannst.'
      },
      {
        text: 'Ah, okay, dann ist ja alles gut.',
        type: 'ausweichend',
        feedback: 'Du nimmst das „Passt schon“ hin, obwohl du nicht weißt, woran du bist. Die Unsicherheit bleibt bei dir.'
      },
      {
        text: 'Ehrlich gesagt kommt von dir nie eine Rückmeldung. So kann man doch nicht arbeiten.',
        type: 'eskalierend',
        feedback: 'Der Punkt ist berechtigt, aber „nie“ und die Pauschalkritik machen es wahrscheinlicher, dass du gar keine Antwort bekommst.'
      }
    ],
    tip: 'Stell konkrete, leicht beantwortbare Fragen, statt allgemein um Feedback zu bitten.'
  },

  // ---------- Freunde ----------
  {
    id: 'freunde-absagen-1',
    conflict: { category: 'freunde', slug: 'sagt-immer-ab' },
    context: 'Eine gute Freundin hat euer Treffen zum dritten Mal kurzfristig abgesagt. Du sagst ihr, dass dich das enttäuscht.',
    says: 'Mein Gott, ich hab halt gerade viel um die Ohren. Sei doch nicht gleich so empfindlich.',
    options: [
      {
        text: 'Dass du viel zu tun hast, glaube ich dir. Ich bin trotzdem enttäuscht, weil ich mich gefreut hatte. Wenn es nicht passt, sag lieber früher ab oder schlag selbst einen neuen Termin vor.',
        type: 'klar',
        feedback: 'Du lässt dein Gefühl stehen, ohne es zu rechtfertigen, und sagst, was dir künftig hilft. Das ist ehrlich, ohne Druck aufzubauen.'
      },
      {
        text: 'Empfindlich? Du bist einfach unzuverlässig, das weiß doch jeder.',
        type: 'eskalierend',
        feedback: 'Mit „das weiß doch jeder“ holst du unsichtbare Dritte dazu. Für deine Freundin fühlt sich das wie ein Urteil an, nicht wie ein Gespräch.'
      },
      {
        text: 'Haha, ja, ich bin wohl einfach zu sensibel.',
        type: 'ausweichend',
        feedback: 'Du übernimmst das Etikett und lachst die Enttäuschung weg. Deine Freundin erfährt nicht, was dir eigentlich wichtig ist.'
      }
    ],
    tip: 'Dein Gefühl braucht keine Rechtfertigung – benenne es und sag, was du dir wünschst.'
  },
  {
    id: 'freunde-geld-1',
    conflict: { category: 'freunde', slug: 'geliehenes-geld' },
    context: 'Du hast einem Freund vor einigen Monaten Geld geliehen. Er wollte es bis zum Sommer zurückzahlen, der ist jetzt vorbei. Du fragst nach.',
    says: 'Echt jetzt? Ich dachte, wir sind Freunde. Wegen so was machst du so ein Fass auf?',
    options: [
      {
        text: 'Nee, sorry, war blöd von mir. Lass dir Zeit.',
        type: 'ausweichend',
        feedback: 'Du entschuldigst dich für eine berechtigte Frage. So wird es beim nächsten Mal noch schwerer, das Thema anzusprechen.'
      },
      {
        text: 'Gerade weil wir Freunde sind, finde ich es ziemlich dreist, dass du dich nicht meldest.',
        type: 'eskalierend',
        feedback: '„Dreist“ trifft die Person, nicht die Sache. Dein Freund wird sich eher rechtfertigen, als nach einer Lösung zu suchen.'
      },
      {
        text: 'Wir sind Freunde, und genau deshalb will ich das offen klären, bevor es zwischen uns steht. Wann kannst du es zurückzahlen? Auch in Raten wäre für mich okay.',
        type: 'klar',
        feedback: 'Du stellst die Freundschaft nicht infrage, bleibst aber bei der Abmachung. Das Angebot mit den Raten macht es leichter, Ja zu sagen.'
      }
    ],
    tip: 'Eine Abmachung anzusprechen ist kein Angriff auf die Freundschaft – bleib freundlich bei der Sache.'
  },
  {
    id: 'freunde-grenzen-1',
    conflict: { category: 'freunde', slug: 'grenzen-nicht-respektiert' },
    context: 'Ein Freund erzählt in der Runde immer wieder peinliche Geschichten, die du ihm im Vertrauen erzählt hast. Du hast ihn gebeten, das zu lassen.',
    says: 'Das war doch nur Spaß. Du verstehst echt keinen Humor mehr.',
    options: [
      {
        text: 'Humor? Du willst dich doch nur auf meine Kosten wichtigmachen.',
        type: 'eskalierend',
        feedback: 'Du unterstellst ihm ein Motiv. Er wird das zurückweisen, und über deine eigentliche Bitte redet niemand mehr.'
      },
      {
        text: 'Ich lache gern mit, aber nicht über Dinge, die ich dir im Vertrauen erzählt habe. Die bleiben bitte unter uns.',
        type: 'klar',
        feedback: 'Du sprichst ihm den Humor nicht ab und ziehst eine genaue Linie. So weiß er, was ab jetzt okay ist und was nicht.'
      },
      {
        text: 'Ja, vielleicht bin ich gerade einfach schlecht drauf.',
        type: 'ausweichend',
        feedback: 'Du suchst den Fehler bei dir und nimmst die Bitte damit zurück. Die nächste Anekdote ist dann nur eine Frage der Zeit.'
      }
    ],
    tip: 'Zieh eine konkrete Linie, statt über die Absicht des anderen zu streiten.'
  },

  // ---------- Kolleg:innen ----------
  {
    id: 'kollegen-ideen-1',
    conflict: { category: 'kollegen', slug: 'klaut-ideen' },
    context: 'Im Meeting hat ein Kollege deine Idee als seine eigene vorgestellt. Danach sprichst du ihn unter vier Augen an.',
    says: 'Jetzt stell dich nicht so an. Wir sind ein Team, da gehören Ideen allen.',
    options: [
      {
        text: 'Ja, stimmt schon. Hauptsache, das Projekt läuft.',
        type: 'ausweichend',
        feedback: 'Du lässt es auf sich beruhen, obwohl es dich ärgert. So kann sich das Muster leicht wiederholen.'
      },
      {
        text: 'Einverstanden, wir arbeiten im Team. Dazu gehört für mich, dass klar ist, von wem ein Vorschlag kommt. Beim nächsten Mal stelle ich meine Ideen selbst vor, oder du nennst mich dazu.',
        type: 'klar',
        feedback: 'Du greifst das Teamargument auf und füllst es mit deinem Anspruch. Die Bitte für die Zukunft ist konkret und fair.'
      },
      {
        text: 'Team? Du schmückst dich doch ständig mit fremden Federn.',
        type: 'eskalierend',
        feedback: '„Ständig“ und der Vorwurf zielen auf seinen Charakter. Er wird eher dichtmachen, als die Situation anzuerkennen.'
      }
    ],
    tip: 'Greif das Argument deines Gegenübers auf und verbinde es mit deiner Bitte.'
  },
  {
    id: 'kollegen-unterbricht-1',
    conflict: { category: 'kollegen', slug: 'unterbricht-staendig' },
    context: 'Eine Kollegin fällt dir in Besprechungen oft ins Wort. Als sie dich heute wieder unterbricht, reagierst du direkt.',
    says: 'Ich wollte nur kurz was ergänzen, das ist doch wichtig!',
    options: [
      {
        text: 'Du lässt eh nie jemanden ausreden. Das nervt hier alle.',
        type: 'eskalierend',
        feedback: 'Vor der Gruppe wirkt das bloßstellend. Deine Kollegin wird sich verteidigen, und die Besprechung dreht sich um den Konflikt.'
      },
      {
        text: 'Ähm, ja, klar, sag ruhig.',
        type: 'ausweichend',
        feedback: 'Du gibst das Wort ab und verschwindest aus der Diskussion. Dein Punkt bleibt unvollständig, und das Muster bleibt bestehen.'
      },
      {
        text: 'Gleich gern. Ich mache nur noch meinen Gedanken fertig, dann bist du dran.',
        type: 'klar',
        feedback: 'Du bleibst freundlich, hältst aber deinen Platz. Kurz und ohne Vorwurf ist das vor anderen am leichtesten anzunehmen.'
      }
    ],
    tip: 'Im Moment selbst reicht ein kurzer, freundlicher Satz – das größere Gespräch führst du besser unter vier Augen.'
  },
  {
    id: 'kollegen-abschieben-1',
    conflict: { category: 'kollegen', slug: 'schiebt-aufgaben-ab' },
    context: 'Ein Kollege bittet dich schon zum dritten Mal in diesem Monat, eine seiner Aufgaben zu übernehmen. Du hast selbst genug zu tun.',
    says: 'Komm schon, du bist doch so schnell in so was. Für dich sind das zehn Minuten.',
    options: [
      {
        text: 'Danke fürs Kompliment, aber diesmal nicht. Meine eigene Liste ist heute voll. Wenn du nicht weiterkommst, zeige ich dir gern kurz, wie ich es mache.',
        type: 'klar',
        feedback: 'Du sagst freundlich und eindeutig Nein und bietest Hilfe zur Selbsthilfe an. So bleibt die Aufgabe bei ihm, ohne dass du unkollegial wirkst.'
      },
      {
        text: 'Na gut, schick es mir rüber. Aber das ist das letzte Mal.',
        type: 'ausweichend',
        feedback: '„Das letzte Mal“ hat er vermutlich schon öfter gehört. Mit dem Ja bestätigst du, dass Schmeicheln funktioniert.'
      },
      {
        text: 'Du schiebst deine Arbeit echt immer auf andere ab. Mach deinen Kram selbst.',
        type: 'eskalierend',
        feedback: 'Das Nein ist klar, aber der Ton macht aus einer Absage einen Konflikt, der euch noch länger begleiten kann.'
      }
    ],
    tip: 'Ein Kompliment verpflichtet zu nichts – du darfst Danke sagen und trotzdem Nein.'
  },

  // ---------- Nachbarn ----------
  {
    id: 'nachbarn-laut-1',
    conflict: { category: 'nachbarn', slug: 'zu-laut' },
    context: 'Du klingelst beim Nachbarn über dir, weil seit Tagen spät abends laute Musik läuft, und bittest um mehr Ruhe.',
    says: 'Ich wohne hier auch. Ich kann ja wohl in meiner eigenen Wohnung Musik hören.',
    options: [
      {
        text: 'Dann zieh doch in ein Einfamilienhaus, wenn dir die anderen egal sind.',
        type: 'eskalierend',
        feedback: 'Die Spitze trifft, löst aber nichts. Beim nächsten Mal wird er die Musik eher lauter als leiser drehen.'
      },
      {
        text: 'Ja, natürlich, sorry für die Störung.',
        type: 'ausweichend',
        feedback: 'Du entschuldigst dich für dein eigenes Anliegen. Er hat damit keinen Grund, etwas zu ändern.'
      },
      {
        text: 'Klar, das sollst du auch. Mir geht es nur um die späten Abende: Dann höre ich die Bässe bis in mein Schlafzimmer. Könntest du ab zehn leiser drehen?',
        type: 'klar',
        feedback: 'Du erkennst sein Recht an und beschreibst sachlich, was bei dir ankommt. Mit Uhrzeit und konkreter Bitte weiß er genau, worum es geht.'
      }
    ],
    tip: 'Erkenne das Recht des anderen an und beschreibe konkret, was bei dir ankommt.'
  },
  {
    id: 'nachbarn-parkplatz-1',
    conflict: { category: 'nachbarn', slug: 'parkplatz-streit' },
    context: 'Deine Nachbarin parkt immer wieder auf dem Stellplatz, der zu deiner Wohnung gehört. Du sprichst sie im Hof darauf an.',
    says: 'Jetzt hab dich nicht so, du bist doch tagsüber eh nie da.',
    options: [
      {
        text: 'Tagsüber oft nicht, stimmt. Trotzdem ist es mein Stellplatz, und manchmal komme ich früher heim. Bitte park dort nicht mehr. Wenn du mal dringend einen Platz brauchst, frag mich vorher.',
        type: 'klar',
        feedback: 'Du bleibst bei deinem Anspruch und lässt eine Ausnahme auf Nachfrage zu. Das ist klar und nachbarschaftlich zugleich.'
      },
      {
        text: 'Das geht dich gar nichts an, wann ich da bin. Du nimmst dir hier einfach, was du willst.',
        type: 'eskalierend',
        feedback: 'Du wehrst den Einwand ab und legst einen Vorwurf nach. Deine Nachbarin wird eher trotzig reagieren, als den Platz freizumachen.'
      },
      {
        text: 'Na ja, stimmt schon. Wenn ich da bin, klingel ich halt bei dir.',
        type: 'ausweichend',
        feedback: 'Du übernimmst die Mühe für ein Problem, das du nicht verursacht hast. Auf Dauer wird das eher mehr Ärger als weniger.'
      }
    ],
    tip: 'Du musst eine Ausrede nicht widerlegen – bleib freundlich bei dem, was dir zusteht.'
  },
  {
    id: 'nachbarn-beschwerden-1',
    conflict: { category: 'nachbarn', slug: 'beschwert-sich-staendig' },
    context: 'Ein Nachbar beschwert sich seit Wochen immer wieder über Geräusche aus deiner Wohnung. Heute spricht er dich im Treppenhaus an.',
    says: 'Bei dir ist es doch jeden Tag laut. Das geht so nicht weiter.',
    options: [
      {
        text: 'Du findest doch immer was zum Meckern. Such dir mal ein Hobby.',
        type: 'eskalierend',
        feedback: 'Der Seitenhieb bestätigt ihn in seinem Bild von dir. Die Beschwerden werden eher mehr als weniger.'
      },
      {
        text: 'Mir ist nicht ganz klar, was genau du hörst. Wann war es zuletzt, und was für ein Geräusch war das? Dann kann ich schauen, ob ich etwas ändern kann.',
        type: 'klar',
        feedback: 'Du weist nichts pauschal zurück und fragst nach konkreten Situationen. So wird aus einem Dauervorwurf etwas, das man klären kann.'
      },
      {
        text: 'Ich versuche, noch leiser zu sein. Tut mir leid.',
        type: 'ausweichend',
        feedback: 'Du versprichst etwas, ohne zu wissen, was ihn überhaupt stört. Die nächste Beschwerde ist damit schon angelegt.'
      }
    ],
    tip: 'Frag bei Pauschalvorwürfen nach konkreten Beispielen, statt dich zu verteidigen.'
  },

  // ---------- Eltern ----------
  {
    id: 'eltern-einmischen-1',
    conflict: { category: 'eltern', slug: 'mischt-sich-ein' },
    context: 'Deine Mutter kommentiert beim Besuch, wie ihr euer Kind ins Bett bringt. Du hast gesagt, dass ihr das bewusst so macht.',
    says: 'Ich meine es doch nur gut. Ich habe schließlich auch Kinder großgezogen.',
    options: [
      {
        text: 'Ja, und genau deshalb machen wir es anders als du damals.',
        type: 'eskalierend',
        feedback: 'Das trifft sie an einer empfindlichen Stelle. Sie wird sich eher verteidigen als zurückhalten.'
      },
      {
        text: 'Ja, ja, schon gut, Mama.',
        type: 'ausweichend',
        feedback: 'Das beendet den Moment, aber nicht das Muster. Deine Mutter merkt nicht, dass dich die Kommentare stören.'
      },
      {
        text: 'Das weiß ich, und ich schätze deine Erfahrung. Beim Einschlafen haben wir uns aber für unseren Weg entschieden. Wenn wir einen Rat brauchen, fragen wir dich gern.',
        type: 'klar',
        feedback: 'Du würdigst ihre Absicht und machst trotzdem klar, wer entscheidet. Das Angebot, sie zu fragen, nimmt ihr nicht die Rolle, sondern gibt ihr eine neue.'
      }
    ],
    tip: 'Würdige die gute Absicht und bleib trotzdem klar bei deiner Entscheidung.'
  },
  {
    id: 'eltern-kritik-1',
    conflict: { category: 'eltern', slug: 'kritisieren-staendig' },
    context: 'Dein Vater kritisiert bei jedem Familienessen deinen Job. Heute sagst du ihm, dass dich das verletzt.',
    says: 'Man wird doch wohl noch seine Meinung sagen dürfen. Du warst schon immer so dünnhäutig.',
    options: [
      {
        text: 'Deine Meinung darfst du haben. Ich möchte nur nicht, dass mein Job bei jedem Essen Thema ist. Wenn du dir Sorgen machst, reden wir gern einmal in Ruhe darüber.',
        type: 'klar',
        feedback: 'Du lässt das Etikett „dünnhäutig“ unkommentiert und formulierst eine klare Grenze. Das Gesprächsangebot zeigt, dass du ihn nicht ausschließen willst.'
      },
      {
        text: 'Und du konntest schon immer nicht einfach mal stolz auf mich sein.',
        type: 'eskalierend',
        feedback: '„Schon immer“ gegen „schon immer“: Ihr tauscht alte Vorwürfe aus, und das Essen ist gelaufen.'
      },
      {
        text: 'Okay, vergiss es. Reden wir über was anderes.',
        type: 'ausweichend',
        feedback: 'Du wechselst das Thema, bevor deine Grenze angekommen ist. Beim nächsten Essen kommt die Kritik wahrscheinlich wieder.'
      }
    ],
    tip: 'Eine Meinung haben zu dürfen heißt nicht, dass du sie jedes Mal anhören musst – sag, wo deine Grenze liegt.'
  },
  {
    id: 'eltern-grenzen-1',
    conflict: { category: 'eltern', slug: 'respektieren-grenzen-nicht' },
    context: 'Deine Eltern haben einen Schlüssel zu deiner Wohnung und kommen manchmal ohne Ankündigung vorbei. Du hast sie gebeten, vorher anzurufen.',
    says: 'Wir sind doch deine Eltern! Seit wann müssen wir uns bei dir anmelden?',
    options: [
      {
        text: 'Na gut, war ja nur so eine Idee.',
        type: 'ausweichend',
        feedback: 'Du nimmst deine Bitte zurück, sobald es unangenehm wird. Deine Eltern lernen daraus, dass Widerspruch reicht.'
      },
      {
        text: 'Ihr seid mir immer willkommen, daran ändert sich nichts. Ich möchte nur wissen, wann jemand in meine Wohnung kommt. Ein kurzer Anruf vorher reicht mir.',
        type: 'klar',
        feedback: 'Du trennst die Beziehung von der Regel: Die Nähe bleibt, nur der Ablauf ändert sich. Die Bitte ist klein und leicht einzuhalten.'
      },
      {
        text: 'Seit ich erwachsen bin. Ihr behandelt mich immer noch wie ein Kind.',
        type: 'eskalierend',
        feedback: 'Der Kern stimmt vielleicht, aber als Vorwurf fühlen sich deine Eltern abgelehnt. Das macht die Absprache schwerer.'
      }
    ],
    tip: 'Mach deutlich, dass die Grenze der Situation gilt, nicht der Beziehung.'
  },

  // ---------- Geschwister ----------
  {
    id: 'geschwister-geld-1',
    conflict: { category: 'geschwister', slug: 'geld-geliehen' },
    context: 'Dein Bruder fragt dich zum dritten Mal in diesem Jahr, ob du ihm Geld leihen kannst. Die 200 Euro vom Frühjahr sind noch offen. Du sagst, dass du ihm diesmal nichts leihen möchtest.',
    says: 'Ernsthaft? Für dich sind das doch Peanuts. Ich bin dein Bruder!',
    options: [
      {
        text: 'Peanuts? Du kannst einfach nicht mit Geld umgehen, das war schon immer so.',
        type: 'eskalierend',
        feedback: '„Schon immer“ macht aus einer Geldfrage ein Urteil über deinen Bruder. Er wird sich verteidigen, statt über die offenen 200 Euro zu reden.'
      },
      {
        text: 'Gerade weil du mein Bruder bist, sage ich es dir offen: Solange die 200 Euro vom Frühjahr offen sind, leihe ich dir nichts Neues. Lass uns ausmachen, bis wann du sie zurückzahlst.',
        type: 'klar',
        feedback: 'Du stellst die Beziehung nicht infrage und bleibst trotzdem bei deinem Nein. Die Bedingung ist nachvollziehbar und zeigt einen Weg nach vorn.'
      },
      {
        text: 'Na gut, wie viel brauchst du denn diesmal?',
        type: 'ausweichend',
        feedback: 'Du gibst nach, sobald der Druck steigt. Der Ärger über das alte Geld bleibt, und die nächste Anfrage kommt bestimmt.'
      }
    ],
    tip: 'Familie heißt nicht, dass jede Bitte ein Ja verdient – verbinde dein Nein mit einer klaren Bedingung.'
  },
  {
    id: 'geschwister-familienfest-1',
    conflict: { category: 'geschwister', slug: 'streit-bei-familienfesten' },
    context: 'Beim Geburtstag eurer Mutter macht deine Schwester vor allen eine Spitze über dein abgebrochenes Studium. Später nimmst du sie in der Küche kurz beiseite.',
    says: 'Jetzt sei nicht so. Das war ein Witz, alle haben gelacht.',
    options: [
      {
        text: 'Kann sein, dass es lustig gemeint war. Für mich war es unangenehm, vor allen darauf angesprochen zu werden. Lass das Thema bitte bei Familienfesten weg – unter vier Augen reden wir gern darüber.',
        type: 'klar',
        feedback: 'Du streitest nicht über die Absicht, sondern sagst, wie es bei dir ankam, und ziehst eine genaue Linie. Das Angebot unter vier Augen hält das Gespräch offen.'
      },
      {
        text: 'Die haben gelacht, weil es peinlich war – und zwar für dich.',
        type: 'eskalierend',
        feedback: 'Du zahlst die Spitze mit einer eigenen heim. Beim nächsten Fest geht der Schlagabtausch wahrscheinlich vor allen weiter.'
      },
      {
        text: 'Ja, war schon witzig. Egal, vergiss es.',
        type: 'ausweichend',
        feedback: 'Du lachst mit, obwohl es dich getroffen hat. Deine Schwester hat keinen Grund, beim nächsten Mal etwas anders zu machen.'
      }
    ],
    tip: 'Sprich es kurz und unter vier Augen an – nicht vor der ganzen Familie am Tisch.'
  },
  {
    id: 'geschwister-vergleiche-1',
    conflict: { category: 'geschwister', slug: 'konkurrenz-und-vergleiche' },
    context: 'Deine ältere Schwester erzählt bei jedem Treffen von Gehalt und Beförderung und fragt dann nach deinem. Du sagst ihr, dass dich die ständigen Vergleiche stören.',
    says: 'Ich erzähl doch nur, wie es bei mir läuft. Wenn du dich schlecht fühlst, ist das dein Problem.',
    options: [
      {
        text: 'Stimmt, du hast recht. Ich bin halt nicht so weit wie du.',
        type: 'ausweichend',
        feedback: 'Du steigst in den Vergleich ein und stellst dich selbst unten an. Deine Schwester erfährt nicht, was dich eigentlich stört.'
      },
      {
        text: 'Du erzählst nicht, du gibst an. Das machst du, seit wir Kinder sind.',
        type: 'eskalierend',
        feedback: 'Alte Geschwisterrollen kommen sofort zurück. Sie wird sich rechtfertigen, und über deine Bitte redet niemand mehr.'
      },
      {
        text: 'Erzähl gern, wie es bei dir läuft, das interessiert mich wirklich. Mich stört nur, wenn daraus ein Vergleich mit mir wird, etwa beim Gehalt. Das würde ich gern weglassen.',
        type: 'klar',
        feedback: 'Du trennst das Erzählen vom Vergleichen und benennst genau den Punkt, der dich stört. So muss sie nichts von ihrem Erfolg zurücknehmen.'
      }
    ],
    tip: 'Trenne das Erzählen vom Vergleichen und benenne genau, was dich stört.'
  },

  // ---------- Mitbewohner:innen ----------
  {
    id: 'mitbewohner-putzplan-1',
    conflict: { category: 'mitbewohner', slug: 'putzplan-ignoriert' },
    context: 'Laut Putzplan ist dein Mitbewohner seit zwei Wochen mit dem Bad dran, geputzt hat er nicht. Du sprichst ihn in der Küche darauf an.',
    says: 'Das Bad ist doch noch völlig okay. Du hast echt übertriebene Ansprüche.',
    options: [
      {
        text: 'Kann sein, dass wir das unterschiedlich sehen. Genau dafür haben wir den Plan: Das Bad ist gerade bei dir. Schaffst du es bis Sonntag? Wenn der Plan für dich nicht passt, ändern wir ihn beim nächsten WG-Treffen.',
        type: 'klar',
        feedback: 'Du streitest nicht über Sauberkeit, sondern verweist auf die gemeinsame Abmachung. Mit Termin und dem Angebot, den Plan anzupassen, bleibt es fair.'
      },
      {
        text: 'Na gut, dann mache ich es diesmal halt.',
        type: 'ausweichend',
        feedback: 'Das Bad ist sauber, aber der Plan ist damit ausgehebelt. Beim nächsten Mal wartet er wahrscheinlich wieder, bis du einspringst.'
      },
      {
        text: 'Übertrieben? Bei dir im Zimmer sieht es aus wie im Saustall, das finden hier alle.',
        type: 'eskalierend',
        feedback: 'Du greifst ihn persönlich an und holst die anderen dazu. Jetzt geht es um Lager in der WG statt um den Putzplan.'
      }
    ],
    tip: 'Streite nicht über Sauberkeitsstandards – verweise auf die Abmachung und frag nach einem Termin.'
  },
  {
    id: 'mitbewohner-essen-1',
    conflict: { category: 'mitbewohner', slug: 'isst-meine-sachen' },
    context: 'Zum wiederholten Mal ist etwas aus deinem Kühlschrankfach verschwunden, diesmal der Käse fürs Abendessen. Du fragst deine Mitbewohnerin danach.',
    says: 'Mein Gott, das war doch nur ein bisschen Käse. Ich kauf dir halt neuen.',
    options: [
      {
        text: 'Es ist nie nur ein bisschen. Du bedienst dich hier, als würde dir alles gehören.',
        type: 'eskalierend',
        feedback: '„Nie“ und der Vorwurf treffen die Person statt der Sache. Sie wird eher abwehren, als künftig zu fragen.'
      },
      {
        text: 'Nee, schon okay, lass mal.',
        type: 'ausweichend',
        feedback: 'Du winkst ab, obwohl es dich ärgert. Sie lernt daraus, dass dein Fach eigentlich allen offensteht.'
      },
      {
        text: 'Danke, das wäre nett. Mir geht es aber weniger um den Käse als darum, dass ich mich auf mein Fach verlassen kann. Frag mich bitte vorher – meistens sage ich sowieso Ja.',
        type: 'klar',
        feedback: 'Du nimmst das Angebot an und sagst trotzdem, worum es dir wirklich geht. Die Bitte ist klein, und das „meistens Ja“ nimmt ihr die Scheu.'
      }
    ],
    tip: 'Nimm ein Ersatzangebot an und sag trotzdem, was du für die Zukunft brauchst.'
  },
  {
    id: 'mitbewohner-nebenkosten-1',
    conflict: { category: 'mitbewohner', slug: 'nebenkosten-und-einkauf' },
    context: 'Die Nebenkostenabrechnung ist da: 240 Euro Nachzahlung. Beim Einzug habt ihr ausgemacht, alles zu gleichen Teilen zu zahlen. Du schlägst vor, es durch drei zu teilen.',
    says: 'Warum soll ich genauso viel zahlen? Ich bin fast jedes Wochenende gar nicht da.',
    options: [
      {
        text: 'Okay, dann zahlen wir zwei eben den Rest.',
        type: 'ausweichend',
        feedback: 'Du gibst die Abmachung spontan auf, ohne die dritte Person zu fragen. Das sorgt spätestens bei der nächsten Rechnung für Ärger.'
      },
      {
        text: 'Ich verstehe, dass sich das für dich unfair anfühlt. Diese Abrechnung teilen wir so, wie wir es beim Einzug ausgemacht haben. Wenn du künftig eine andere Aufteilung willst, lass uns beim WG-Treffen einen Vorschlag besprechen, der für alle passt.',
        type: 'klar',
        feedback: 'Du nimmst das Gefühl von Ungerechtigkeit ernst, bleibst aber bei der geltenden Absprache. Änderungen für die Zukunft bekommen einen festen Ort, an dem alle mitreden.'
      },
      {
        text: 'Dann zieh doch ganz aus, wenn du eh nie hier bist.',
        type: 'eskalierend',
        feedback: 'Aus einer Frage nach 80 Euro wird eine Frage nach der ganzen WG. Das ist ein großer Schritt für ein lösbares Problem.'
      }
    ],
    tip: 'Klär die offene Rechnung nach der alten Abmachung und verhandle Änderungen für die Zukunft.'
  },

  // ---------- Schwiegereltern ----------
  {
    id: 'schwiegereltern-kritik-1',
    conflict: { category: 'schwiegereltern', slug: 'schwiegermutter-kritisiert' },
    context: 'Deine Schwiegermutter bemerkt beim Besuch schon zum zweiten Mal, dass es bei euch „ja nie richtig aufgeräumt“ sei. Du sagst ihr freundlich, dass dich das kränkt.',
    says: 'Das darf man doch wohl noch sagen. Mein Sohn ist es von zu Hause halt anders gewohnt.',
    options: [
      {
        text: 'Dann soll dein Sohn eben selbst aufräumen, wenn er es so gewohnt ist.',
        type: 'eskalierend',
        feedback: 'Du ziehst deinen Partner in den Konflikt und gibst den Vorwurf weiter. Deine Schwiegermutter wird ihn eher verteidigen als ihre Bemerkung überdenken.'
      },
      {
        text: 'Stimmt schon, ich komme gerade einfach zu nichts.',
        type: 'ausweichend',
        feedback: 'Du entschuldigst dich für etwas, das ihr als Paar entscheidet. Die Kritik bekommt damit recht, und sie kommt beim nächsten Besuch wieder.'
      },
      {
        text: 'Sagen darfst du es. Ich möchte trotzdem nicht, dass unsere Wohnung bei jedem Besuch Thema ist. Wir haben uns so eingerichtet, wie es für uns beide passt. Erzähl lieber, wie euer Urlaub war.',
        type: 'klar',
        feedback: 'Du lässt ihr die Meinung, ziehst aber eine klare Grenze und sprichst als Paar. Der Themenwechsel am Ende zeigt, dass du den Besuch nicht verderben willst.'
      }
    ],
    tip: 'Du musst Kritik nicht widerlegen – sag ruhig, wo deine Grenze ist, und lenk auf etwas Gemeinsames.'
  },
  {
    id: 'schwiegereltern-unangemeldet-1',
    conflict: { category: 'schwiegereltern', slug: 'kommen-unangemeldet' },
    context: 'Deine Schwiegereltern stehen am Samstagmorgen unangekündigt vor der Tür. Ihr wolltet gerade zu einem Ausflug aufbrechen. Du sagst, dass es heute leider nicht passt.',
    says: 'Wir wollten euch doch nur eine Freude machen. Früher war man froh über Besuch.',
    options: [
      {
        text: 'Ach so, na dann kommt rein. Den Ausflug machen wir ein andermal.',
        type: 'ausweichend',
        feedback: 'Du sagst deine Pläne ab, um die Situation zu entschärfen. Deine Schwiegereltern lernen daraus, dass spontan vorbeikommen immer klappt.'
      },
      {
        text: 'Das ist lieb gemeint, und wir freuen uns über euren Besuch. Heute sind wir aber schon verplant. Ruft bitte vorher kurz an, dann nehmen wir uns richtig Zeit für euch. Wie wäre es mit nächstem Sonntag?',
        type: 'klar',
        feedback: 'Du würdigst die gute Absicht, bleibst bei deinem Nein und machst gleich ein konkretes Angebot. So fühlt sich die Absage nicht wie eine Ablehnung an.'
      },
      {
        text: 'Früher hat man sich aber auch nicht einfach selbst eingeladen.',
        type: 'eskalierend',
        feedback: 'Die Retourkutsche trifft, klärt aber nichts. Deine Schwiegereltern fahren gekränkt nach Hause, und die eigentliche Bitte ist nicht angekommen.'
      }
    ],
    tip: 'Würdige die gute Absicht und biete gleich einen konkreten anderen Termin an.'
  },
  {
    id: 'schwiegereltern-feiertage-1',
    conflict: { category: 'schwiegereltern', slug: 'feiertage-aufteilen' },
    context: 'Ihr habt als Paar beschlossen, Heiligabend dieses Jahr bei deinen Eltern zu feiern. Deine Schwiegermutter erfährt es am Telefon von dir.',
    says: 'Heiligabend war doch immer bei uns. Das ist wohl jetzt nichts mehr wert.',
    options: [
      {
        text: 'Ich verstehe, dass das eine Umstellung für dich ist, Heiligabend bei euch war immer schön. Wir haben uns gemeinsam entschieden, uns jedes Jahr abzuwechseln, damit beide Familien zum Zug kommen. Am ersten Feiertag kommen wir gern zu euch.',
        type: 'klar',
        feedback: 'Du nimmst ihre Enttäuschung ernst, stehst zur gemeinsamen Entscheidung und bietest einen festen Ersatz an. Die Regel mit dem Wechsel macht es für alle planbar.'
      },
      {
        text: 'Oh, ähm … vielleicht finden wir da ja noch eine andere Lösung.',
        type: 'ausweichend',
        feedback: 'Du weichst einer Entscheidung aus, die ihr längst gemeinsam getroffen habt. Damit beginnt die Diskussion von vorn, und dein:e Partner:in steht plötzlich allein da.'
      },
      {
        text: 'Immer bei euch – genau das ist ja das Problem. Meine Eltern gibt es schließlich auch noch.',
        type: 'eskalierend',
        feedback: 'Du machst aus der Absprache einen Wettbewerb zwischen den Familien. Deine Schwiegermutter fühlt sich zurückgesetzt, statt die Regel zu verstehen.'
      }
    ],
    tip: 'Sprecht als Paar mit einer Stimme und macht ein konkretes Angebot, statt euch zu rechtfertigen.'
  },

  // ---------- Ex-Partner:in ----------
  {
    id: 'ex-partner-uebergabe-1',
    conflict: { category: 'ex-partner', slug: 'streit-bei-der-uebergabe' },
    context: 'Dein:e Ex hat die Kinder am Sonntag zum dritten Mal deutlich später als vereinbart zurückgebracht. Abends, als die Kinder schlafen, schreibst du eine kurze Nachricht dazu.',
    says: 'Jetzt mach doch kein Drama wegen einer Stunde. Die Kinder hatten Spaß.',
    options: [
      {
        text: 'Typisch. Deine Zeit war dir schon immer wichtiger als die von allen anderen.',
        type: 'eskalierend',
        feedback: 'Du holst alte Beziehungsthemen in eine Terminfrage. Dein:e Ex wird sich verteidigen, und die nächste Übergabe startet angespannt.'
      },
      {
        text: 'Schön, dass sie Spaß hatten. Mir ist die Uhrzeit wichtig, weil sonntags noch Abendessen und Schulsachen anstehen. Lass uns bei 17 Uhr bleiben. Wenn es mal später wird, schreib mir bitte bis 16 Uhr Bescheid.',
        type: 'klar',
        feedback: 'Du erkennst das Positive an, begründest kurz und machst eine klare Regel samt Ausnahme. Das ist sachlich und lässt sich leicht einhalten.'
      },
      {
        text: 'Na gut, ist ja auch egal.',
        type: 'ausweichend',
        feedback: 'Du gibst die Absprache auf, obwohl sie dir wichtig ist. Die Verspätungen werden so eher zur neuen Normalität.'
      }
    ],
    tip: 'Bleib bei Uhrzeiten und Absprachen – alte Beziehungsthemen gehören nicht in die Terminplanung.'
  },
  {
    id: 'ex-partner-kosten-1',
    conflict: { category: 'ex-partner', slug: 'kosten-fuer-die-kinder' },
    context: 'Die Klassenfahrt eures Sohnes kostet 320 Euro. Du bittest deine:n Ex per Nachricht, sich an den Kosten zu beteiligen.',
    says: 'Dafür zahle ich doch schon Unterhalt. Soll ich jetzt für alles doppelt zahlen?',
    options: [
      {
        text: 'Schon gut, dann zahle ich es eben allein.',
        type: 'ausweichend',
        feedback: 'Du lässt die Frage fallen, obwohl sie offen ist. Bei der nächsten größeren Ausgabe steht ihr wieder am selben Punkt, nur mit mehr Frust.'
      },
      {
        text: 'Der Unterhalt reicht hinten und vorne nicht. Dir ist doch egal, was die Kinder brauchen.',
        type: 'eskalierend',
        feedback: 'Der Vorwurf zielt auf die Elternrolle und trifft entsprechend hart. Dein:e Ex wird eher auf Abwehr gehen als über 320 Euro reden.'
      },
      {
        text: 'Ich verstehe, dass du nicht doppelt zahlen willst. Für mich ist die Klassenfahrt eine Extra-Ausgabe neben dem Alltag. Mein Vorschlag: Wir teilen sie halb-halb. Und lass uns eine feste Regel für solche Extras finden, dann müssen wir nicht jedes Mal neu verhandeln.',
        type: 'klar',
        feedback: 'Du nimmst die Sorge ernst, machst einen konkreten Vorschlag und denkst an künftige Fälle. So wird aus einer Einzelrechnung eine Absprache, die Streit spart.'
      }
    ],
    tip: 'Schlag eine feste Regel für Sonderausgaben vor – dann wird nicht jede Rechnung zum Streit.'
  },
  {
    id: 'ex-partner-nachrichten-1',
    conflict: { category: 'ex-partner', slug: 'jede-nachricht-eskaliert' },
    context: 'Die Schule hat den Elternabend kurzfristig auf Donnerstag verschoben. Du leitest die Info sofort an deine:n Ex weiter.',
    says: 'Schön, dass ich das auch mal erfahre. Du hältst es ja nie für nötig, mich rechtzeitig zu informieren.',
    options: [
      {
        text: 'Die Schule hat es heute erst geschickt, ich habe es direkt weitergegeben. Der Termin ist Donnerstag um 19 Uhr. Gehst du hin, oder soll ich?',
        type: 'klar',
        feedback: 'Du stellst kurz den Ablauf richtig, ohne auf den Vorwurf einzusteigen, und bleibst beim Inhalt. Die Frage am Ende lenkt auf das, was jetzt zu klären ist.'
      },
      {
        text: 'Ich muss dir gar nichts. Sei froh, dass ich dir überhaupt Bescheid sage.',
        type: 'eskalierend',
        feedback: 'Du antwortest auf den Ton statt auf den Inhalt. Der Chat wird zum Schlagabtausch, und die Frage nach dem Elternabend geht unter.'
      },
      {
        text: 'Sorry, kommt nicht wieder vor.',
        type: 'ausweichend',
        feedback: 'Du entschuldigst dich für etwas, das du gar nicht verursacht hast. Das bestätigt den Vorwurf und macht die nächste Spitze wahrscheinlicher.'
      }
    ],
    tip: 'Antworte kurz, sachlich und freundlich auf den Inhalt – auf Vorwürfe musst du nicht eingehen.'
  },

  // ---------- Kinder ----------
  {
    id: 'kinder-handyzeit-1',
    conflict: { category: 'kinder', slug: 'handyzeit' },
    context: 'Beim Abendessen liegt das Handy deines Kindes neben dem Teller und vibriert ständig. Ihr habt ausgemacht, dass beim Essen keine Handys am Tisch sind. Du bittest es, das Handy wegzulegen.',
    says: 'Bei allen anderen ist das kein Problem. Ihr seid echt die Strengsten überhaupt.',
    options: [
      {
        text: 'Kann sein, dass es bei anderen anders läuft. Bei uns bleibt das Handy beim Essen weg, und das gilt auch für mich. Nach dem Essen kannst du in Ruhe weiterschreiben.',
        type: 'klar',
        feedback: 'Du lässt dich nicht auf den Vergleich mit anderen Familien ein und bleibst bei eurer Absprache. Dass die Regel auch für dich gilt und es ein klares „Danach“ gibt, macht sie fair.'
      },
      {
        text: 'Wenn du so weitermachst, ist das Handy eine Woche weg. Dann weißt du, was streng ist.',
        type: 'eskalierend',
        feedback: 'Die Drohung beendet vielleicht den Moment, aber jetzt geht es um Macht statt um die Absprache. Dein Kind lernt eher, das Handy zu verstecken, als es freiwillig wegzulegen.'
      },
      {
        text: 'Na gut, aber nur heute. Iss wenigstens nebenbei was.',
        type: 'ausweichend',
        feedback: 'Du gibst nach, sobald Widerspruch kommt. Dein Kind merkt, dass die Regel verhandelbar ist, und beim nächsten Essen geht die Diskussion von vorn los.'
      }
    ],
    tip: 'Lass dich nicht auf „alle anderen dürfen“ ein – erkläre, was bei euch gilt, und halte dich selbst auch daran.'
  },
  {
    id: 'kinder-hausaufgaben-1',
    conflict: { category: 'kinder', slug: 'hausaufgaben' },
    context: 'Dein Kind sitzt seit einer halben Stunde vor der ersten Matheaufgabe. Du setzt dich dazu und versuchst, sie zu erklären.',
    says: 'Ich kann das eh nicht! Und du erklärst es sowieso total falsch.',
    options: [
      {
        text: 'Wenn du dich nicht mal anstrengst, brauchst du dich über die nächste Fünf nicht wundern. Dann ist Fußball am Wochenende gestrichen.',
        type: 'eskalierend',
        feedback: 'Du wertest dein Kind ab und drohst mit einer Strafe, die mit der Aufgabe nichts zu tun hat. Aus Frust wird Angst, und das Lernen wird dadurch nicht leichter.'
      },
      {
        text: 'Ich merke, dass dich das gerade richtig frustriert. Zeig mir, wie ihr es in der Schule macht, dann rechnen wir die erste Aufgabe zusammen. Die nächste versuchst du allein.',
        type: 'klar',
        feedback: 'Du nimmst den Frust ernst, ohne dich über die Kritik zu ärgern, und lässt dein Kind zeigen, wie es in der Schule läuft. Der kleine nächste Schritt macht die Aufgabe wieder machbar.'
      },
      {
        text: 'Gib her, ich rechne sie dir schnell vor, dann haben wir es hinter uns.',
        type: 'ausweichend',
        feedback: 'Der Streit ist vorbei, aber die Aufgabe hast jetzt du gelöst. Dein Kind lernt dabei vor allem, dass „Ich kann das nicht“ zum Ziel führt.'
      }
    ],
    tip: 'Nimm den Frust ernst und zerlege die Aufgabe in einen kleinen nächsten Schritt, den dein Kind selbst schafft.'
  },
  {
    id: 'kinder-zimmer-1',
    conflict: { category: 'kinder', slug: 'zimmer-aufraeumen' },
    context: 'Im Zimmer deiner Tochter stehen seit Tagen Teller mit Essensresten, die Wäsche liegt unter dem Bett. Du bittest sie, beides rauszubringen.',
    says: 'Das ist mein Zimmer. Das geht dich gar nichts an.',
    options: [
      {
        text: 'Ja, ja, schon gut. Ich hole die Teller nachher selbst.',
        type: 'ausweichend',
        feedback: 'Du übernimmst die Arbeit, um den Streit zu vermeiden. Deine Tochter lernt daraus, dass Geschirr und Wäsche früher oder später von allein verschwinden.'
      },
      {
        text: 'Solange du unter meinem Dach wohnst, geht mich hier alles was an. Wie es bei dir aussieht, ist einfach nur eklig.',
        type: 'eskalierend',
        feedback: 'Du stellst deine Macht in den Vordergrund und wertest sie ab. Sie wird ihr Zimmer eher verteidigen, als die Teller rauszutragen.'
      },
      {
        text: 'Stimmt, wie dein Zimmer aussieht, entscheidest du weitgehend selbst. Geschirr und Wäsche gehören aber zum ganzen Haushalt. Bring die Teller bitte bis zum Abendessen in die Küche und die Wäsche in den Korb.',
        type: 'klar',
        feedback: 'Du erkennst ihren Wunsch nach einem eigenen Raum an und trennst ihn von dem, was alle betrifft. Mit einer Uhrzeit weiß sie genau, was bis wann zu tun ist.'
      }
    ],
    tip: 'Gesteh deinem Kind sein Zimmer zu und bestehe nur auf dem, was den ganzen Haushalt betrifft.'
  },
  {
    id: 'kinder-ausgehzeiten-1',
    conflict: { category: 'kinder', slug: 'ausgehzeiten' },
    context: 'Ihr hattet 22 Uhr ausgemacht. Dein Sohn kommt um Viertel nach elf nach Hause, sein Handy war aus, und du hast die ganze Zeit wach gewartet.',
    says: 'Chill mal, ist doch nichts passiert. Die anderen dürfen alle länger.',
    options: [
      {
        text: 'Ich bin froh, dass du gut zu Hause bist. Ich habe mir Sorgen gemacht, weil ich dich nicht erreicht habe. Heute Nacht reden wir nicht mehr darüber, aber morgen klären wir zusammen, wie du dich meldest, wenn es später wird.',
        type: 'klar',
        feedback: 'Du zeigst Erleichterung statt Wut und sagst ehrlich, was die Stunde für dich bedeutet hat. Das Gespräch auf morgen zu verschieben, wenn ihr beide ausgeschlafen seid, ist klug und kein Nachgeben.'
      },
      {
        text: 'Nichts passiert? Du hast ab sofort zwei Wochen Hausarrest. Dann kannst du dich bei den anderen beschweren.',
        type: 'eskalierend',
        feedback: 'Die Strafe kommt im Ärger und ohne Gespräch. Dein Sohn wird sich ungerecht behandelt fühlen, und deine Sorge, um die es eigentlich geht, kommt gar nicht bei ihm an.'
      },
      {
        text: 'Na ja, Hauptsache, du bist da. Ab ins Bett.',
        type: 'ausweichend',
        feedback: 'Du lässt die überzogene Stunde und das ausgeschaltete Handy einfach stehen. Dein Sohn lernt, dass die Uhrzeit eher ein Vorschlag als eine Absprache ist.'
      }
    ],
    tip: 'Zeig zuerst deine Sorge, nicht deine Wut – und kläre die Regeln, wenn ihr beide wieder ruhig seid.'
  },
  {
    id: 'kinder-ton-1',
    conflict: { category: 'kinder', slug: 'respektloser-ton' },
    context: 'Du erinnerst deine 14-jährige Tochter zum zweiten Mal daran, dass sie heute mit dem Müll dran ist. Sie verdreht die Augen.',
    says: 'Boah, lass mich einfach in Ruhe. Du nervst so!',
    options: [
      {
        text: 'So redest du nicht mit mir! Wenn du so frech bist, kannst du dein Taschengeld diesen Monat vergessen.',
        type: 'eskalierend',
        feedback: 'Du wirst laut und drohst sofort mit einer Strafe. Damit zeigst du genau den Ton, den du dir von ihr nicht wünschst, und der Streit schaukelt sich hoch.'
      },
      {
        text: 'So möchte ich nicht angesprochen werden. Ich sehe, dass du gerade genervt bist, das darfst du sein. Den Müll bringst du trotzdem vor dem Abendessen raus. Wenn dich etwas anderes beschäftigt, reden wir später gern.',
        type: 'klar',
        feedback: 'Du benennst die Grenze kurz und ohne Gegenangriff, lässt ihren Ärger zu und bleibst bei der Aufgabe. Das Gesprächsangebot zeigt, dass es dir um sie geht und nicht nur um den Müll.'
      },
      {
        text: 'Oh, Entschuldigung, dass ich existiere. Dann mache ich es eben selbst.',
        type: 'ausweichend',
        feedback: 'Die Ironie verrät deine Kränkung, und am Ende trägst du den Müll selbst raus. Deine Tochter lernt, dass ein patziger Ton sie von Aufgaben befreit.'
      }
    ],
    tip: 'Setz im Moment selbst eine kurze, ruhige Grenze – das längere Gespräch führt ihr, wenn sich beide beruhigt haben.'
  },
  {
    id: 'kinder-geschwisterstreit-1',
    conflict: { category: 'kinder', slug: 'geschwisterstreit' },
    context: 'Deine beiden Söhne streiten um die Spielkonsole, der Jüngere weint. Du gehst dazwischen und schaltest die Konsole erst mal aus.',
    says: 'Immer hältst du zu ihm! Nur weil er der Kleine ist, darf er alles.',
    options: [
      {
        text: 'Ach, macht das doch unter euch aus. Ich habe heute keine Nerven dafür.',
        type: 'ausweichend',
        feedback: 'Du ziehst dich zurück, obwohl gerade jemand weint. Beide Kinder bleiben mit dem Streit allein, und meistens setzt sich dann der Stärkere durch.'
      },
      {
        text: 'Jetzt reicht es! Du bist der Große und solltest es besser wissen. Die Konsole ist für dich eine Woche gestrichen.',
        type: 'eskalierend',
        feedback: 'Du bestrafst nur einen und bestätigst damit genau seinen Vorwurf. Er fühlt sich noch ungerechter behandelt, und die Rivalität zwischen den beiden wächst.'
      },
      {
        text: 'Das fühlt sich für dich gerade unfair an, und das nehme ich ernst. Ich will keinen von euch bevorzugen. Erzähl mir erst, was aus deiner Sicht passiert ist, dann hört ihr einander zu, und wir suchen zusammen eine Regel für die Konsole.',
        type: 'klar',
        feedback: 'Du nimmst sein Gefühl ernst, ohne dich zu verteidigen, und gibst beiden Seiten Gehör. Eine gemeinsame Regel verhindert, dass du beim nächsten Mal wieder Richter:in spielen musst.'
      }
    ],
    tip: 'Hör beide Seiten an, statt einen Schuldigen zu suchen – und findet zusammen eine Regel für das nächste Mal.'
  },

  // ---------- Vermieter:in ----------
  {
    id: 'vermieter-reparatur-1',
    conflict: { category: 'vermieter', slug: 'reparatur-verschleppt' },
    context: 'Die Heizung im Bad fällt seit drei Wochen immer wieder aus. Du hast es zweimal per Mail gemeldet und rufst jetzt bei der Hausverwaltung an.',
    says: 'Sie sind nicht die Einzigen im Haus. Wir kümmern uns, wenn wir dazu kommen.',
    options: [
      {
        text: 'Ach so, ja, dann warte ich einfach noch ein bisschen.',
        type: 'ausweichend',
        feedback: 'Du lässt das Anliegen ohne jede Zusage stehen. Niemand weiß, wann sich etwas tut, und deine Meldung rutscht leicht weiter nach hinten.'
      },
      {
        text: 'Das glaube ich Ihnen, und ich will nicht drängeln. Ich habe den Ausfall am 3. und am 12. gemeldet. Können Sie mir bis Freitag schriftlich sagen, ob ein Auftrag raus ist und wann ungefähr jemand kommt?',
        type: 'klar',
        feedback: 'Du zeigst Verständnis, nennst die Daten deiner Meldungen und bittest um eine kleine, konkrete Rückmeldung. Das ist freundlich, gut dokumentiert und leicht zu beantworten.'
      },
      {
        text: 'Wenn wir dazu kommen? Sie kassieren jeden Monat pünktlich die Miete, aber für Reparaturen sind Sie sich zu schade.',
        type: 'eskalierend',
        feedback: 'Der Frust ist nachvollziehbar, aber der Vorwurf trifft die Person am Telefon. Sie wird sich eher verteidigen, als deinen Fall nach vorn zu holen.'
      }
    ],
    tip: 'Nenne die Daten deiner Meldungen und bitte um eine kleine, konkrete Rückmeldung bis zu einem Tag.'
  },
  {
    id: 'vermieter-nebenkosten-1',
    conflict: { category: 'vermieter', slug: 'nebenkostenabrechnung' },
    context: 'Die Nebenkostenabrechnung zeigt eine Nachzahlung von 480 Euro, vor allem wegen einer Position „Hausmeisterdienste“. Du fragst bei deiner Vermieterin nach, wie sich der Betrag zusammensetzt.',
    says: 'Das ist alles ordentlich abgerechnet. Wollen Sie mir jetzt unterstellen, dass ich Sie abzocke?',
    options: [
      {
        text: 'Nein, ich unterstelle Ihnen nichts. Ich möchte nur verstehen, was ich bezahle, besonders bei den Hausmeisterdiensten. Könnte ich mir die Rechnungen dazu in den nächsten zwei Wochen einmal ansehen? Ich lasse die Abrechnung außerdem vom Mieterverein durchsehen, das mache ich grundsätzlich so.',
        type: 'klar',
        feedback: 'Du nimmst den Vorwurf ruhig zurück, benennst die eine Position, um die es geht, und bittest konkret um Einsicht. Der Hinweis auf den Mieterverein klingt nach Routine, nicht nach Drohung.'
      },
      {
        text: 'Na ja, wenn Sie so fragen: So eine Summe kommt mir schon ziemlich unverschämt vor.',
        type: 'eskalierend',
        feedback: 'Aus einer Frage zu den Zahlen wird ein Vorwurf an die Person. Deine Vermieterin wird die Abrechnung jetzt eher verteidigen, als sie mit dir durchzugehen.'
      },
      {
        text: 'Nein, nein, so war das nicht gemeint. Ich überweise es dann einfach.',
        type: 'ausweichend',
        feedback: 'Du ziehst deine Frage zurück, sobald es unangenehm wird. Ob die Summe für dich nachvollziehbar ist, bleibt offen, und bei der nächsten Abrechnung ist es noch schwerer, nachzufragen.'
      }
    ],
    tip: 'Nachfragen ist kein Misstrauen – benenne die Position, die du verstehen willst, und bitte um Einsicht in die Belege.'
  },
  {
    id: 'vermieter-schimmel-1',
    conflict: { category: 'vermieter', slug: 'schimmel' },
    context: 'In der Schlafzimmerecke breitet sich schwarzer Schimmel aus. Du hast Fotos gemacht und zeigst sie deinem Vermieter bei einem kurzen Termin in der Wohnung.',
    says: 'Das kommt davon, dass Sie nicht richtig lüften. Das ist Ihr Problem, nicht meins.',
    options: [
      {
        text: 'Ich lüfte jeden Tag! Das Haus ist einfach schlecht gedämmt, und das wissen Sie ganz genau.',
        type: 'eskalierend',
        feedback: 'Du setzt eine Schuldzuweisung gegen die andere. Jetzt streitet ihr darüber, wer schuld ist, und niemand kümmert sich um die Ecke im Schlafzimmer.'
      },
      {
        text: 'Hm, vielleicht haben Sie recht. Ich wische es einfach selbst weg.',
        type: 'ausweichend',
        feedback: 'Du übernimmst die Schuld, ohne dass die Ursache geklärt ist. Wenn der Schimmel wiederkommt, stehst du mit dem Problem allein da.'
      },
      {
        text: 'Das kann eine Ursache sein, ich will nicht raten. Ich habe mein Lüften und Heizen die letzten Wochen notiert und zeige Ihnen das gern. Mein Vorschlag: Wir lassen die Ursache fachlich anschauen. Können wir dafür bis Ende nächster Woche einen Termin finden?',
        type: 'klar',
        feedback: 'Du wehrst den Vorwurf nicht ab, sondern legst deine Notizen offen und schlägst eine neutrale Klärung mit Termin vor. So geht es um die Ursache statt um Schuld.'
      }
    ],
    tip: 'Streite nicht über Schuld – zeig, was du dokumentiert hast, und schlag eine fachliche Klärung mit Termin vor.'
  },
  {
    id: 'vermieter-unangemeldet-1',
    conflict: { category: 'vermieter', slug: 'kommt-unangemeldet' },
    context: 'Deine Vermieterin steht zum zweiten Mal in diesem Monat ohne Ankündigung vor der Tür und möchte „nur kurz nach dem Rechten sehen“. Du sagst, dass es gerade nicht passt.',
    says: 'Das ist immer noch meine Wohnung. Da werde ich ja wohl mal reinschauen dürfen.',
    options: [
      {
        text: 'Ihre Wohnung? Ich zahle hier Miete, also verschwinden Sie bitte sofort.',
        type: 'eskalierend',
        feedback: 'Die Abwehr ist verständlich, aber im Befehlston wird aus einer Terminfrage ein Machtkampf. Beim nächsten Besuch ist die Stimmung von Anfang an gereizt.'
      },
      {
        text: 'Mir ist klar, dass Ihnen die Wohnung wichtig ist, und ich gehe sorgsam mit ihr um. Für mich ist sie aber mein Zuhause. Heute passt es nicht. Sagen Sie mir bitte ein paar Tage vorher Bescheid, dann finden wir gern einen Termin, zum Beispiel nächsten Dienstag nach 17 Uhr.',
        type: 'klar',
        feedback: 'Du erkennst ihr Interesse an, bleibst bei deinem Nein für heute und machst gleich einen konkreten Terminvorschlag. So klingt die Grenze nicht nach Ablehnung, sondern nach Absprache.'
      },
      {
        text: 'Ähm, ja, okay, kommen Sie kurz rein.',
        type: 'ausweichend',
        feedback: 'Du lässt sie herein, obwohl es dir nicht passt. Sie lernt daraus, dass unangemeldete Besuche funktionieren, und das nächste Klingeln kommt bestimmt.'
      }
    ],
    tip: 'Erkenne das Interesse der anderen Seite an und biete statt eines spontanen Besuchs gleich einen festen Termin an.'
  },
  {
    id: 'vermieter-mieterhoehung-1',
    conflict: { category: 'vermieter', slug: 'mieterhoehung-gespraech' },
    context: 'Dein Vermieter hat eine Mieterhöhung um 90 Euro im Monat angekündigt. Im Treppenhaus sagst du ihm, dass du die Begründung gern verstehen und das Schreiben erst in Ruhe durchsehen möchtest.',
    says: 'Da gibt es nichts zu besprechen. Wenn es Ihnen nicht passt, können Sie ja ausziehen.',
    options: [
      {
        text: 'Gut, dann suche ich mir eben was anderes. Mal sehen, wen Sie dann für den Preis finden.',
        type: 'eskalierend',
        feedback: 'Du steigst auf die Zuspitzung ein und drohst selbst. Aus einer Frage nach der Begründung wird eine Frage nach dem ganzen Mietverhältnis.'
      },
      {
        text: 'Nein, nein, schon gut. Ich unterschreibe das dann.',
        type: 'ausweichend',
        feedback: 'Du gibst deine Bitte auf, bevor du das Schreiben überhaupt verstanden hast. Die Unsicherheit bleibt bei dir, und fragen wird beim nächsten Mal noch schwerer.'
      },
      {
        text: 'Ausziehen will ich nicht, ich wohne gern hier. Gerade deshalb möchte ich verstehen, worauf sich die Erhöhung stützt. Ich lasse das Schreiben vom Mieterverein durchsehen, das mache ich bei wichtiger Post immer so, und melde mich bis Ende des Monats bei Ihnen.',
        type: 'klar',
        feedback: 'Du lässt die Zuspitzung ins Leere laufen, betonst, dass du bleiben willst, und erklärst ruhig deinen nächsten Schritt samt Termin. Das ist sachlich und ohne Drohung.'
      }
    ],
    tip: 'Lass eine Zuspitzung ins Leere laufen – sag, dass du bleiben willst, und nenne ruhig deinen nächsten Schritt.'
  },
  {
    id: 'vermieter-kaution-1',
    conflict: { category: 'vermieter', slug: 'kaution-zurueck' },
    context: 'Du bist vor vier Monaten ausgezogen, die Wohnung wurde ohne Mängel übergeben. Deine Kaution hast du noch nicht zurück. Du fragst bei der Hausverwaltung nach.',
    says: 'Das dauert eben. Wir melden uns schon, wenn es so weit ist.',
    options: [
      {
        text: 'Das verstehe ich, und ich will niemanden hetzen. Mir würde es helfen zu wissen, woran es noch hängt und womit ich ungefähr rechnen kann. Das Übergabeprotokoll ohne Mängel habe ich hier. Können Sie mir bis zum 15. kurz schriftlich einen Zwischenstand schicken?',
        type: 'klar',
        feedback: 'Du bleibst freundlich, verweist auf das Protokoll und bittest um einen Zwischenstand bis zu einem festen Datum. So bekommst du eine Antwort, ohne Druck aufzubauen.'
      },
      {
        text: 'Okay, dann warte ich halt weiter.',
        type: 'ausweichend',
        feedback: 'Du nimmst das vage „Wir melden uns“ hin. Ohne Zwischenstand oder Datum weißt du beim nächsten Nachfragen genauso wenig wie heute.'
      },
      {
        text: 'Vier Monate! Sie wollen das Geld doch einfach behalten.',
        type: 'eskalierend',
        feedback: 'Du unterstellst Absicht, ohne zu wissen, woran es hängt. Die Hausverwaltung wird sich eher verteidigen, als dir einen Stand zu nennen.'
      }
    ],
    tip: 'Frag nach dem Zwischenstand statt nach Schuld – mit Verweis auf deine Unterlagen und einem festen Datum.'
  }
];
