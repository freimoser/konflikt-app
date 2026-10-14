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
  {
    id: 'partner-zeit-1',
    conflict: { category: 'partner', slug: 'keine-zeit' },
    context: 'Zum dritten Mal in diesem Monat wird euer gemeinsamer Abend verschoben. Du sagst, dass dich das traurig macht.',
    says: 'Du weißt doch, wie viel bei mir gerade los ist. Ich kann mich nicht zerteilen.',
    options: [
      {
        text: 'Bei dir ist immer was los. Ich komme in deinem Leben offenbar ganz hinten.',
        type: 'eskalierend',
        feedback: '„Immer“ und „ganz hinten“ machen aus einem vollen Monat ein Urteil über die Beziehung. Dein Gegenüber wird sich eher rechtfertigen als planen.'
      },
      {
        text: 'Ich sehe, dass du gerade viel stemmst. Mir fehlt nur ein fester Platz für uns. Können wir einen Abend pro Woche eintragen, der nicht verschoben wird – auch wenn er kurz ist?',
        type: 'klar',
        feedback: 'Du erkennst die Belastung an und machst aus „mehr Zeit“ einen kleinen, verlässlichen Termin. Das ist leichter zuzusagen als ein vager Wunsch.'
      },
      {
        text: 'Ja, schon klar. Dann machen wir es halt irgendwann, wenn es passt.',
        type: 'ausweichend',
        feedback: '„Irgendwann“ verschwindet schnell zwischen anderen Terminen. Deine Enttäuschung bleibt und meldet sich beim nächsten Verschieben wieder.'
      }
    ],
    tip: 'Mach aus „mehr Zeit“ einen festen Termin, den ihr beide schützt.'
  },
  {
    id: 'partner-smartphone-1',
    conflict: { category: 'partner', slug: 'smartphone-staendig' },
    context: 'Beim Abendessen tippt dein:e Partner:in fast durchgehend auf dem Handy. Du sprichst es ruhig an.',
    says: 'Ich schreibe doch nur kurz zurück. Warum ist das gleich wieder ein Drama?',
    options: [
      {
        text: 'Kurz zurückschreiben ist okay. Mir geht es ums Essen: Mögen wir die Handys da ab jetzt beiseitelegen? Wenn etwas Dringendes ist, sag einfach Bescheid.',
        type: 'klar',
        feedback: 'Du gibst zu, dass einzelne Nachrichten kein Problem sind, und begrenzt die Bitte auf eine Situation. Mit der Ausnahme für Dringendes wirkt sie fair statt kontrollierend.'
      },
      {
        text: 'Weil du süchtig nach dem Ding bist. Mit mir redest du ja eh kaum noch.',
        type: 'eskalierend',
        feedback: '„Süchtig“ ist ein Etikett, das kränkt und zur Gegenwehr einlädt. Über das gemeinsame Essen redet danach niemand mehr.'
      },
      {
        text: 'Ist ja gut, war nicht so gemeint.',
        type: 'ausweichend',
        feedback: 'Du nimmst dein Anliegen zurück, obwohl es dir wichtig ist. Beim nächsten Essen sitzt du wahrscheinlich wieder vor einem Display.'
      }
    ],
    tip: 'Bitte um handyfreie Momente statt um weniger Handy insgesamt.'
  },
  {
    id: 'partner-naehe-1',
    conflict: { category: 'partner', slug: 'unterschiedliche-naehebeduerfnisse' },
    context: 'Du möchtest abends gern kuscheln und reden. Dein:e Partner:in zieht sich nach der Arbeit lieber allein zurück. Du sprichst an, dass du dich manchmal zurückgewiesen fühlst.',
    says: 'Ich brauche halt meine Ruhe. Das hat doch nichts mit dir zu tun.',
    options: [
      {
        text: 'Okay, dann frag ich einfach nicht mehr. Ich will dich ja nicht nerven.',
        type: 'ausweichend',
        feedback: 'Du verzichtest ganz auf dein Bedürfnis, statt es auszuhandeln. Der Abstand wird größer, und die Kränkung bleibt unausgesprochen.'
      },
      {
        text: 'Es fühlt sich aber so an. Du bist einfach kalt, und ich muss immer betteln.',
        type: 'eskalierend',
        feedback: '„Kalt“ beschreibt dein Gegenüber als Person, nicht euer Problem. Wer sich so gesehen fühlt, zieht sich eher noch weiter zurück.'
      },
      {
        text: 'Gut, dass du das sagst, das beruhigt mich. Wie wäre es so: Du hast nach der Arbeit erst mal deine Stunde für dich, und danach nehmen wir uns ein bisschen Zeit zu zweit?',
        type: 'klar',
        feedback: 'Du nimmst die Erklärung an und suchst eine Lösung, in der beide Bedürfnisse Platz haben. Ruhe und Nähe stehen dann nicht mehr gegeneinander.'
      }
    ],
    tip: 'Nähe und Rückzug lassen sich oft nacheinander statt gegeneinander planen.'
  },
  {
    id: 'partner-zukunft-1',
    conflict: { category: 'partner', slug: 'verschiedene-zukunftsplaene' },
    context: 'Du wünschst dir, in den nächsten Jahren zusammenzuziehen und über Kinder zu sprechen. Als du es ansprichst, wird dein:e Partner:in einsilbig.',
    says: 'Können wir das nicht einfach auf uns zukommen lassen? Du machst so einen Druck.',
    options: [
      {
        text: 'Ich lasse seit zwei Jahren alles auf mich zukommen. Irgendwann musst du dich mal entscheiden.',
        type: 'eskalierend',
        feedback: 'Der Satz klingt nach Ultimatum. Dein Gegenüber fühlt sich gedrängt und hat noch weniger Raum, ehrlich über Zweifel zu sprechen.'
      },
      {
        text: 'Ich will dich nicht drängen. Ich möchte nur wissen, wie du darüber denkst, auch wenn du noch unsicher bist. Magst du dir am Wochenende in Ruhe eine Stunde dafür nehmen?',
        type: 'klar',
        feedback: 'Du nimmst den Druck aus dem Moment, ohne das Thema fallen zu lassen. Ein verabredetes Gespräch gibt beiden Zeit, sich vorzubereiten.'
      },
      {
        text: 'Stimmt, ist ja auch noch viel Zeit. Vergiss, dass ich gefragt habe.',
        type: 'ausweichend',
        feedback: 'Du schiebst eine Frage weg, die dich beschäftigt. Die Unsicherheit wächst, während ihr beide so tut, als wäre alles geklärt.'
      }
    ],
    tip: 'Frag nach den Gedanken des anderen, bevor du eine Entscheidung einforderst.'
  },
  {
    id: 'partner-dusche-1',
    conflict: { category: 'partner', slug: 'pinkeln-in-der-dusche' },
    context: 'Du hast mitbekommen, dass dein:e Partner:in beim Duschen pinkelt, und gesagt, dass dich das stört.',
    says: 'Ach komm, das macht doch jeder. Das wird doch eh weggespült.',
    options: [
      {
        text: 'Kann sein, dass das viele machen. Für mich ist es trotzdem eine Ekelgrenze, weil wir die Dusche teilen. Kannst du vorher kurz aufs Klo gehen?',
        type: 'klar',
        feedback: 'Du streitest nicht darüber, was „normal“ ist, sondern sagst, was es für dich bedeutet. Die Bitte ist einfach und sofort umsetzbar.'
      },
      {
        text: 'Hm, ja, wahrscheinlich übertreibe ich.',
        type: 'ausweichend',
        feedback: 'Du redest dein Gefühl klein, obwohl es echt ist. Der Ekel bleibt und begleitet dich jetzt bei jedem Duschen.'
      },
      {
        text: 'Ich finde das einfach widerlich. Das ist so rücksichtslos von dir.',
        type: 'eskalierend',
        feedback: '„Widerlich“ und „rücksichtslos“ treffen die Person statt die Gewohnheit. Dein Gegenüber wird sich eher verteidigen als etwas ändern.'
      }
    ],
    tip: 'Diskutiere nicht, was normal ist – sag, wo deine Grenze im gemeinsamen Bad liegt.'
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
  {
    id: 'chef-ernst-1',
    conflict: { category: 'chef', slug: 'nicht-ernst-genommen' },
    context: 'Im Teammeeting schlägst du vor, die Kund:innenumfrage zu verkürzen. Deine Führungskraft geht sofort zum nächsten Punkt über.',
    says: 'Ja, gute Idee vielleicht, aber dafür haben wir jetzt echt keine Zeit.',
    options: [
      {
        text: 'Klar, kein Problem. War nur so ein Gedanke.',
        type: 'ausweichend',
        feedback: 'Du machst deinen Vorschlag selbst kleiner, als er ist. So bestätigst du ungewollt, dass er übergangen werden kann.'
      },
      {
        text: 'Für meine Ideen ist ja nie Zeit. Bei anderen hörst du komischerweise immer zu.',
        type: 'eskalierend',
        feedback: 'Der Vergleich vor dem ganzen Team bringt deine Führungskraft in eine Verteidigungshaltung. Über die Umfrage wird so bestimmt nicht mehr gesprochen.'
      },
      {
        text: 'Verstehe, die Agenda ist voll. Ich schreibe dir den Vorschlag in fünf Sätzen auf. Können wir ihn nächste Woche zehn Minuten besprechen?',
        type: 'klar',
        feedback: 'Du respektierst den Zeitrahmen und sorgst trotzdem dafür, dass die Idee nicht verloren geht. Ein kurzer schriftlicher Vorschlag ist leicht anzunehmen.'
      }
    ],
    tip: 'Wenn eine Idee übergangen wird, gib ihr einen festen Platz statt einen zweiten Anlauf im falschen Moment.'
  },
  {
    id: 'chef-unfair-1',
    conflict: { category: 'chef', slug: 'unfaire-behandlung' },
    context: 'Das neue Projekt, für das du dich gemeldet hattest, geht ohne Erklärung an eine Kollegin. Du fragst im Vier-Augen-Gespräch nach.',
    says: 'Das war eine ganz normale Entscheidung. Du musst nicht alles persönlich nehmen.',
    options: [
      {
        text: 'Ich will die Entscheidung gar nicht infrage stellen, ich möchte sie verstehen. Was hat den Ausschlag gegeben, und was müsste ich zeigen, damit ich beim nächsten Projekt dran bin?',
        type: 'klar',
        feedback: 'Du bleibst sachlich und fragst nach Kriterien statt nach Schuld. So bekommst du Informationen, mit denen du arbeiten kannst.'
      },
      {
        text: 'Persönlich? Jeder hier sieht doch, dass du Lieblinge hast.',
        type: 'eskalierend',
        feedback: 'Der Vorwurf der Bevorzugung ist ohne Beispiele kaum zu besprechen. Deine Führungskraft wird ihn zurückweisen, und du erfährst nichts Neues.'
      },
      {
        text: 'Nein, nein, passt schon. Ich war nur neugierig.',
        type: 'ausweichend',
        feedback: 'Du ziehst deine berechtigte Frage zurück. Das Gefühl, übergangen zu werden, bleibt, und beim nächsten Mal ist es schwerer, es anzusprechen.'
      }
    ],
    tip: 'Frag nach Kriterien, nicht nach Schuld – damit kannst du beim nächsten Mal arbeiten.'
  },
  {
    id: 'chef-erwartungen-1',
    conflict: { category: 'chef', slug: 'unklare-erwartungen' },
    context: 'Du hast ein Konzept abgegeben, um das deine Führungskraft im Vorbeigehen gebeten hatte. Jetzt kommt es mit vielen Anmerkungen zurück.',
    says: 'So hatte ich mir das eigentlich nicht vorgestellt.',
    options: [
      {
        text: 'Woher soll ich das wissen? Du sagst ja nie, was du eigentlich willst.',
        type: 'eskalierend',
        feedback: 'Der Ärger über die Extraarbeit ist nachvollziehbar, aber „nie“ macht daraus einen Angriff. Statt zu klären, was fehlt, verteidigt sich dein Gegenüber.'
      },
      {
        text: 'Okay, dann lass uns kurz klären, was es braucht: Für wen ist das Konzept, was soll am Ende drinstehen, und bis wann? Ich schicke dir danach eine Gliederung, bevor ich weiterschreibe.',
        type: 'klar',
        feedback: 'Du holst das Briefing nach, das gefehlt hat, und baust eine frühe Abstimmung ein. Das spart beiden die nächste Runde Nacharbeit.'
      },
      {
        text: 'Tut mir leid, ich überarbeite es und versuche, es besser zu treffen.',
        type: 'ausweichend',
        feedback: 'Du nimmst die Schuld auf dich und rätst erneut ins Blaue. Die Chance ist groß, dass auch die zweite Fassung nicht passt.'
      }
    ],
    tip: 'Kläre Ziel, Umfang und Termin, bevor du weiterarbeitest – nicht erst bei der nächsten Abgabe.'
  },
  {
    id: 'chef-gehalt-1',
    conflict: { category: 'chef', slug: 'gehalt-abgelehnt' },
    context: 'Du hast um eine Gehaltserhöhung gebeten und deine zusätzlichen Aufgaben des letzten Jahres aufgezählt. Deine Führungskraft lehnt ab.',
    says: 'Das Budget ist dieses Jahr leider ausgeschöpft. Da kann ich nichts machen.',
    options: [
      {
        text: 'Ach so, okay. Dann eben nicht.',
        type: 'ausweichend',
        feedback: 'Du beendest das Gespräch ohne Perspektive. Deine Leistung bleibt unbesprochen, und beim nächsten Anlauf fängst du wieder bei null an.'
      },
      {
        text: 'Für andere Sachen ist ja auch Geld da. Ich lasse mich hier nicht länger ausnutzen.',
        type: 'eskalierend',
        feedback: 'Der Satz klingt nach Drohung und Vorwurf zugleich. Das macht es deiner Führungskraft schwer, sich später doch noch für dich einzusetzen.'
      },
      {
        text: 'Verstehe, dass das Budget begrenzt ist. Dann lass uns festhalten, wann wir wieder darüber sprechen und woran du die Erhöhung festmachst. Gibt es bis dahin andere Möglichkeiten, etwa Weiterbildung?',
        type: 'klar',
        feedback: 'Du akzeptierst die Grenze für den Moment und sicherst dir einen Termin und Kriterien. Damit wird aus dem Nein ein Plan.'
      }
    ],
    tip: 'Mach aus einem Nein zum Gehalt einen Termin mit klaren Kriterien.'
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
  {
    id: 'freunde-zuhoeren-1',
    conflict: { category: 'freunde', slug: 'hoert-nicht-zu' },
    context: 'Beim Kaffee erzählst du deiner Freundin von einem Streit mit deiner Schwester. Nach zwei Sätzen ist sie wieder bei ihrem eigenen Wochenende. Du sprichst es an.',
    says: 'Ich wollte dir doch nur zeigen, dass ich so was auch kenne. Jetzt bin ich wieder die Böse?',
    options: [
      {
        text: 'Immer muss sich alles um dich drehen. Ich komme bei dir einfach nie zu Wort.',
        type: 'eskalierend',
        feedback: '„Immer“ und „nie“ machen aus einem Moment ein Urteil über die ganze Freundschaft. Sie wird eher Gegenbeispiele sammeln als nachfragen.'
      },
      {
        text: 'Nein, gar nicht. Ich glaube dir, dass du mitfühlen wolltest. Ich bin nur noch nicht fertig. Darf ich kurz zu Ende erzählen? Danach will ich gern von deinem Wochenende hören.',
        type: 'klar',
        feedback: 'Du nimmst ihre gute Absicht ernst und holst dir trotzdem deinen Raum zurück. Das Angebot, danach zuzuhören, hält die Gegenseitigkeit sichtbar.'
      },
      {
        text: 'Ach, schon okay. Erzähl ruhig, meins kann warten.',
        type: 'ausweichend',
        feedback: 'Du stellst dein Thema hinten an, obwohl es dich gerade beschäftigt. Sie merkt nicht, dass dir etwas gefehlt hat, und das Muster bleibt.'
      }
    ],
    tip: 'Bitte ums Ausreden-Lassen, statt die Freundin für ihr Mitreden zu verurteilen.'
  },
  {
    id: 'freunde-einseitig-1',
    conflict: { category: 'freunde', slug: 'einseitige-freundschaft' },
    context: 'Seit Monaten schlägst du jedes Treffen vor und meldest dich zuerst. Als du deinem Freund sagst, dass du dir mehr Initiative von ihm wünschst, reagiert er gereizt.',
    says: 'Jetzt führst du also Strichliste, wer sich wie oft meldet? Das ist doch keine Freundschaft.',
    options: [
      {
        text: 'Mir geht es nicht ums Zählen. Ich merke nur, dass ich mich fast immer zuerst melde, und das macht mich auf Dauer traurig. Magst du das nächste Treffen vorschlagen?',
        type: 'klar',
        feedback: 'Du weist den Vorwurf ruhig zurück und sagst, wie es dir damit geht. Die Bitte ist klein genug, dass er sie leicht erfüllen kann.'
      },
      {
        text: 'Stimmt, vergiss es. Ich melde mich dann einfach wieder.',
        type: 'ausweichend',
        feedback: 'Du nimmst dein Anliegen zurück und bestätigst die alte Rollenverteilung. Das Ungleichgewicht bleibt, und dein Frust wächst leise weiter.'
      },
      {
        text: 'Eine Freundschaft ist es nur von meiner Seite. Du nimmst halt gern und gibst nichts zurück.',
        type: 'eskalierend',
        feedback: 'Der Satz klingt wie eine Abrechnung. Dein Freund wird sich verteidigen, statt zu überlegen, was er beitragen könnte.'
      }
    ],
    tip: 'Sag, was dir fehlt, und bitte um einen konkreten ersten Schritt – ohne Bilanz zu ziehen.'
  },
  {
    id: 'freunde-vertrauen-1',
    conflict: { category: 'freunde', slug: 'vertrauen-gebrochen' },
    context: 'Du hast einer Freundin im Vertrauen von deiner Jobsuche erzählt. Jetzt hat dich eine gemeinsame Bekannte darauf angesprochen. Du stellst deine Freundin zur Rede.',
    says: 'Mann, das ist mir halt rausgerutscht. Ich hab mich doch entschuldigt, jetzt lass es auch mal gut sein.',
    options: [
      {
        text: 'Dir kann man echt nichts anvertrauen. Du plauderst doch alles aus.',
        type: 'eskalierend',
        feedback: 'Die Verletzung ist nachvollziehbar, aber als Pauschalurteil über ihren Charakter lässt der Satz keinen Weg zurück offen. Über das, was passiert ist, redet ihr dann nicht mehr.'
      },
      {
        text: 'Ja, du hast recht, ist nicht so schlimm.',
        type: 'ausweichend',
        feedback: 'Du redest die Verletzung klein, damit Ruhe ist. Innerlich bleibt das Misstrauen, und deine Freundin weiß nicht, was du künftig brauchst.'
      },
      {
        text: 'Ich nehme die Entschuldigung an. Gut ist es für mich trotzdem noch nicht, dafür brauche ich etwas Zeit. Und künftig: Was ich dir über die Arbeit erzähle, bleibt bitte bei dir.',
        type: 'klar',
        feedback: 'Du würdigst die Entschuldigung, ohne so zu tun, als wäre alles wieder wie vorher. Die klare Absprache gibt Vertrauen eine Chance, neu zu wachsen.'
      }
    ],
    tip: 'Eine Entschuldigung annehmen heißt nicht, dass Vertrauen sofort wieder da sein muss.'
  },
  {
    id: 'freunde-ausgeschlossen-1',
    conflict: { category: 'freunde', slug: 'fuehle-mich-ausgeschlossen' },
    context: 'Auf Instagram siehst du Fotos von einem Grillabend deiner Clique, von dem du nichts wusstest. Du fragst einen Freund aus der Runde, wie das kam.',
    says: 'Das war total spontan. Und ehrlich, du hast in letzter Zeit eh meistens abgesagt.',
    options: [
      {
        text: 'Okay, dann bin ich wohl selbst schuld.',
        type: 'ausweichend',
        feedback: 'Du übernimmst die Erklärung, ohne zu sagen, was dich verletzt hat. So ändert sich beim nächsten spontanen Treffen nichts.'
      },
      {
        text: 'Ihr habt euch doch schon längst gegen mich entschieden. Sagt es wenigstens ehrlich.',
        type: 'eskalierend',
        feedback: 'Du unterstellst eine Absicht, die er wahrscheinlich bestreiten wird. Das Gespräch dreht sich dann um Rechtfertigungen statt um deinen Wunsch.'
      },
      {
        text: 'Kann sein, dass ich öfter abgesagt habe. Trotzdem fände ich es schön, wenn ihr mich weiter fragt. Ob ich Zeit habe, entscheide ich lieber selbst.',
        type: 'klar',
        feedback: 'Du lässt seinen Einwand gelten und machst deutlich, was dir wichtig ist. Die Bitte ist einfach umzusetzen und kommt ohne Vorwurf aus.'
      }
    ],
    tip: 'Bitte darum, gefragt zu werden – die Entscheidung, ob du Zeit hast, triffst du selbst.'
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
  {
    id: 'kollegen-laestern-1',
    conflict: { category: 'kollegen', slug: 'redet-schlecht' },
    context: 'Du hast mitbekommen, dass ein Kollege in der Kaffeeküche über deine Präsentation gelästert hat. Du sprichst ihn unter vier Augen an.',
    says: 'Wer erzählt denn so was? Ich hab doch nur gesagt, was alle denken.',
    options: [
      {
        text: 'Wer es war, ist hier nicht der Punkt. Wenn dir an meiner Präsentation etwas nicht gefallen hat, sag es mir bitte direkt. Was hättest du anders gemacht?',
        type: 'klar',
        feedback: 'Du lässt dich nicht auf die Suche nach der Quelle ein und lädst ihn zu direkter Kritik ein. Damit wird aus Flurfunk ein Gespräch, mit dem du arbeiten kannst.'
      },
      {
        text: 'Ach, war bestimmt ein Missverständnis. Lass uns das vergessen.',
        type: 'ausweichend',
        feedback: 'Du beendest das Gespräch, bevor es etwas klären konnte. Er lernt dabei, dass Lästern hinter deinem Rücken ohne Folgen bleibt.'
      },
      {
        text: 'Typisch. Vorne freundlich und hinten rum lästern, das kannst du gut.',
        type: 'eskalierend',
        feedback: 'Das Etikett trifft seinen Charakter, nicht die Situation. Er wird sich wehren und vermutlich erst recht über dich reden.'
      }
    ],
    tip: 'Streite nicht über die Quelle, sondern bitte darum, dass Kritik direkt bei dir ankommt.'
  },
  {
    id: 'kollegen-zusammenarbeit-1',
    conflict: { category: 'kollegen', slug: 'keine-zusammenarbeit' },
    context: 'Für einen gemeinsamen Bericht brauchst du seit einer Woche die Zahlen deiner Kollegin. Auf deine Nachrichten kommt keine Antwort, also sprichst du sie am Schreibtisch an.',
    says: 'Ich hab echt Wichtigeres zu tun. Dann mach den Bericht halt allein.',
    options: [
      {
        text: 'Wichtigeres? Du hast doch nur keine Lust, das merkt hier jeder.',
        type: 'eskalierend',
        feedback: 'Du unterstellst ein Motiv und ziehst das Team als Zeugen hinzu. Sie wird dichtmachen, und die Zahlen kommen noch später.'
      },
      {
        text: 'Ich glaube dir, dass du gerade viel hast. Allein geht es aber nicht, weil mir deine Zahlen fehlen. Schaffst du sie bis Donnerstag? Sonst klären wir die Priorität gemeinsam mit unserer Teamleitung.',
        type: 'klar',
        feedback: 'Du erkennst ihre Belastung an und bleibst bei dem, was die Aufgabe braucht. Mit Termin und einem fairen nächsten Schritt wird die Sache verbindlich, ohne zu drohen.'
      },
      {
        text: 'Okay, ich such mir die Zahlen irgendwie selbst zusammen.',
        type: 'ausweichend',
        feedback: 'Du übernimmst stillschweigend ihren Teil und doppelte Arbeit. Beim nächsten gemeinsamen Projekt ist das dann schon die neue Normalität.'
      }
    ],
    tip: 'Sag genau, was du bis wann brauchst, und biete für den Engpass einen gemeinsamen Klärungsweg an.'
  },
  {
    id: 'kollegen-anerkennung-1',
    conflict: { category: 'kollegen', slug: 'anerkennung-fehlt' },
    context: 'Im Teammeeting wurde ein Kollege für das neue Kundenkonzept gelobt, an dem du die Analyse gemacht hast. Dein Anteil wurde nicht erwähnt. Du sprichst ihn danach an.',
    says: 'Jetzt mach mal halblang. Das war Teamarbeit, da muss doch nicht jeder einzeln gefeiert werden.',
    options: [
      {
        text: 'Hast recht, ist ja auch egal, wer was gemacht hat.',
        type: 'ausweichend',
        feedback: 'Du sagst, es sei egal, obwohl es dich offensichtlich beschäftigt. Dein Beitrag bleibt unsichtbar, auch beim nächsten Mal.'
      },
      {
        text: 'Teamarbeit, genau. Darum möchte ich, dass sichtbar ist, wer was beigetragen hat. Nenn beim nächsten Termin bitte kurz, dass die Analyse von mir kommt, oder ich stelle den Teil selbst vor.',
        type: 'klar',
        feedback: 'Du greifst sein Argument auf und machst daraus einen fairen Anspruch. Die zwei Varianten lassen ihm Spielraum und sorgen trotzdem für Klarheit.'
      },
      {
        text: 'Teamarbeit heißt bei dir offenbar: Die anderen arbeiten, und du kassierst das Lob.',
        type: 'eskalierend',
        feedback: 'Der Sarkasmus trifft, verhärtet aber die Fronten. Er wird sich rechtfertigen, statt deinen Anteil künftig zu nennen.'
      }
    ],
    tip: 'Gerade bei Teamarbeit darf sichtbar sein, wer welchen Teil geleistet hat.'
  },
  {
    id: 'kollegen-verteilung-1',
    conflict: { category: 'kollegen', slug: 'aufgaben-unfair-verteilt' },
    context: 'Schon wieder landen die Monatsabrechnung und die Kundenanfragen bei dir, während andere die neuen Projekte bekommen. Du sprichst es in der Teamrunde an.',
    says: 'Du bist da halt am schnellsten drin. Warum sollte das jetzt jemand anders machen?',
    options: [
      {
        text: 'Weil ihr es euch bequem macht und ich die ganze Drecksarbeit erledige.',
        type: 'eskalierend',
        feedback: 'Der Vorwurf trifft alle auf einmal. Statt über die Verteilung zu reden, verteidigt sich jetzt die ganze Runde.'
      },
      {
        text: 'Na gut, dann mache ich es halt weiter.',
        type: 'ausweichend',
        feedback: 'Du gibst nach, bevor überhaupt jemand die Verteilung angeschaut hat. Die Mehrarbeit bleibt bei dir, der Frust auch.'
      },
      {
        text: 'Schnell bin ich, weil ich es seit Monaten mache. Ich möchte aber auch an neuen Projekten mitarbeiten. Lass uns die Abrechnung rotieren, ich arbeite die nächste Person gern ein.',
        type: 'klar',
        feedback: 'Du erklärst, woher dein Tempo kommt, und machst einen konkreten Vorschlag. Mit dem Angebot zur Einarbeitung fällt es dem Team leichter, zuzustimmen.'
      }
    ],
    tip: 'Mach aus „unfair“ einen konkreten Vorschlag, wie sich die Arbeit anders verteilen lässt.'
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
  {
    id: 'nachbarn-muell-1',
    conflict: { category: 'nachbarn', slug: 'muell-und-geruch' },
    context: 'Vor der Wohnungstür gegenüber stehen seit Tagen zwei Müllsäcke im Treppenhaus, und der Geruch zieht bis in deinen Flur. Du klingelst bei deiner Nachbarin.',
    says: 'Die Tonnen unten sind ständig voll. Wo soll ich das Zeug denn sonst hinstellen?',
    options: [
      {
        text: 'Das mit den vollen Tonnen kenne ich. Im Treppenhaus riecht es aber inzwischen stark. Kannst du die Säcke heute noch runterbringen? Und wegen der Tonnen schreiben wir gern zusammen an die Hausverwaltung.',
        type: 'klar',
        feedback: 'Du nimmst ihren Einwand ernst, bleibst aber bei der akuten Bitte. Der Vorschlag, gemeinsam an die Verwaltung zu schreiben, macht aus dem Streit ein gemeinsames Problem.'
      },
      {
        text: 'Mir doch egal, wohin. Aber hier stinkt es wegen dir wie auf einer Müllkippe.',
        type: 'eskalierend',
        feedback: 'Der Vergleich beschämt sie, und die Schuldzuweisung lässt keinen Raum für ihr Problem mit den Tonnen. Sie wird sich eher verteidigen als die Säcke wegbringen.'
      },
      {
        text: 'Ach so, ja, dann ist das wohl so. Ich mach einfach meine Tür zu.',
        type: 'ausweichend',
        feedback: 'Du gibst dich mit dem Geruch ab, obwohl er dein Zuhause betrifft. Die Säcke bleiben stehen, und der Ärger staut sich bei dir.'
      }
    ],
    tip: 'Trenne die akute Bitte vom gemeinsamen Organisationsproblem – beides darf auf den Tisch.'
  },
  {
    id: 'nachbarn-haustier-1',
    conflict: { category: 'nachbarn', slug: 'haustiere-stoeren' },
    context: 'Der Hund deiner Nachbarin bellt an Werktagen oft lange, während sie nicht zu Hause ist. Du sprichst sie im Treppenhaus darauf an.',
    says: 'Mein Hund bellt nicht. Der ist total lieb, das hätte ich doch gemerkt.',
    options: [
      {
        text: 'Du bist ja auch nie da, wenn es passiert. Wer sein Tier den ganzen Tag allein lässt, sollte keinen Hund haben.',
        type: 'eskalierend',
        feedback: 'Du sprichst ihr ab, gut für ihr Tier zu sorgen. Sie wird den Hund und sich verteidigen, statt zuzuhören.'
      },
      {
        text: 'Wenn du da bist, ist er bestimmt ruhig. Es passiert vor allem vormittags, wenn du weg bist, oft eine Stunde am Stück. Ich notiere mir diese Woche mal die Zeiten, dann schauen wir zusammen, was helfen könnte.',
        type: 'klar',
        feedback: 'Du glaubst ihr ihre Erfahrung und lieferst, was ihr fehlt: konkrete Beobachtungen. Der nächste Schritt ist klein und gemeinsam.'
      },
      {
        text: 'Ach so, dann hab ich mich vielleicht verhört.',
        type: 'ausweichend',
        feedback: 'Du zweifelst an deiner Wahrnehmung, nur weil sie es nicht mitbekommt. Das Bellen geht weiter, und dein Ärger auch.'
      }
    ],
    tip: 'Wer das Problem nicht selbst erlebt, braucht konkrete Beobachtungen statt Vorwürfe.'
  },
  {
    id: 'nachbarn-hecke-1',
    conflict: { category: 'nachbarn', slug: 'grundstuecksgrenzen' },
    context: 'Die Hecke deines Nachbarn ragt seit dem Sommer weit über den Zaun in dein Gemüsebeet. Du sprichst ihn am Gartenzaun an.',
    says: 'Die Hecke steht seit zwanzig Jahren so. Da hat sich noch nie jemand beschwert.',
    options: [
      {
        text: 'Das glaube ich dir, und die Hecke gefällt mir ja auch. Nur hängt sie inzwischen so weit rüber, dass in meinem Beet kaum noch etwas wächst. Könntest du meine Seite im Herbst zurückschneiden? Beim Wegräumen helfe ich gern.',
        type: 'klar',
        feedback: 'Du stellst die Gewohnheit nicht infrage, sondern beschreibst, was sich verändert hat. Mit Zeitpunkt und Hilfsangebot ist die Bitte leicht anzunehmen.'
      },
      {
        text: 'Dann pflanze ich mein Gemüse eben woanders.',
        type: 'ausweichend',
        feedback: 'Du räumst deinen eigenen Garten für seine Hecke. Das Problem wächst wortwörtlich weiter.'
      },
      {
        text: 'Dass sich keiner beschwert hat, heißt nicht, dass es keinen stört. Du machst hier einfach, was du willst.',
        type: 'eskalierend',
        feedback: 'Aus einer Hecke wird ein Urteil über seinen Charakter. Er wird sich eher verteidigen als zur Heckenschere greifen.'
      }
    ],
    tip: 'Gewohnheit ist kein Gegenargument – beschreib, was sich für dich konkret verändert hat.'
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
  {
    id: 'eltern-verstehen-1',
    conflict: { category: 'eltern', slug: 'versteht-mich-nicht' },
    context: 'Du erzählst deinen Eltern, dass du deine feste Bürostelle kündigst, um eine Ausbildung im Handwerk zu beginnen.',
    says: 'Das verstehen wir einfach nicht. Du wirfst alles weg, wofür du so lange gearbeitet hast.',
    options: [
      {
        text: 'Ihr habt noch nie verstanden, was mir wichtig ist. Ihr wollt nur, dass ich so lebe wie ihr.',
        type: 'eskalierend',
        feedback: '„Noch nie“ macht aus einer Entscheidung eine Abrechnung. Deine Eltern verteidigen sich, statt nachzufragen.'
      },
      {
        text: 'Vielleicht habt ihr recht. Ich denk noch mal drüber nach.',
        type: 'ausweichend',
        feedback: 'Du stellst eine durchdachte Entscheidung infrage, um den Moment zu entschärfen. Beim nächsten Gespräch fängst du wieder bei null an.'
      },
      {
        text: 'Ich sehe, dass euch das Sorgen macht, und ihr müsst es auch nicht gut finden. Entschieden habe ich mich trotzdem. Wenn ihr wissen wollt, was mich daran reizt, erzähle ich es euch beim nächsten Besuch in Ruhe.',
        type: 'klar',
        feedback: 'Du verlangst keine Zustimmung, nur Respekt für deine Entscheidung. Das Angebot lässt ihnen Raum, Fragen zu stellen, wenn sie so weit sind.'
      }
    ],
    tip: 'Du brauchst nicht ihr Einverständnis – nur Respekt für deine Entscheidung.'
  },
  {
    id: 'eltern-erwartungen-1',
    conflict: { category: 'eltern', slug: 'ueberhoehte-erwartungen' },
    context: 'Beim Sonntagskaffee fragt dein Vater wieder, warum du dich nicht auf die Leitungsstelle beworben hast. Du sagst, dass du mit deiner jetzigen Stelle zufrieden bist.',
    says: 'Mit deinen Fähigkeiten verschenkst du dich da doch. Wir wollen nur das Beste für dich.',
    options: [
      {
        text: 'Das weiß ich, und es freut mich, dass ihr mir so viel zutraut. Für mich ist das Beste gerade genau diese Stelle, mit Zeit für mein Leben daneben. Lasst uns die Beförderung bitte nicht bei jedem Besuch besprechen.',
        type: 'klar',
        feedback: 'Du nimmst das Wohlwollen an und stellst deinen eigenen Maßstab daneben. Die Bitte zum Schluss betrifft nur das Thema, nicht die Beziehung.'
      },
      {
        text: 'Das Beste für euch, meinst du. Ihr wollt doch nur was zum Angeben bei den Verwandten.',
        type: 'eskalierend',
        feedback: 'Du unterstellst ein Motiv, das sie kränkt. Danach geht es um ihre Ehre und nicht mehr um deinen Weg.'
      },
      {
        text: 'Ja, mal sehen. Vielleicht bewerbe ich mich nächstes Jahr.',
        type: 'ausweichend',
        feedback: 'Du machst eine Aussicht auf, die du gar nicht meinst. Die Erwartung bleibt bestehen und kommt beim nächsten Besuch zurück.'
      }
    ],
    tip: 'Du kannst die gute Absicht annehmen, ohne den Maßstab zu übernehmen.'
  },
  {
    id: 'eltern-partner-1',
    conflict: { category: 'eltern', slug: 'akzeptieren-partner-nicht' },
    context: 'Deine Mutter hat zu ihrem Geburtstag nur dich eingeladen, nicht deine:n Partner:in. Du rufst sie deswegen an.',
    says: 'Ich will an meinem Geburtstag einfach keinen Stress. Du weißt doch, dass das nicht passt.',
    options: [
      {
        text: 'Okay, dann komme ich eben allein. Ist ja nur ein Nachmittag.',
        type: 'ausweichend',
        feedback: 'Du gehst über die Ausladung hinweg, um den Frieden zu halten. Deine Beziehung wird damit stillschweigend zur Nebensache.'
      },
      {
        text: 'Ich verstehe, dass du einen entspannten Tag willst. Für mich gehören wir zusammen: Entweder wir kommen zu zweit, oder ich feiere mit dir an einem anderen Tag nach. Und ich würde gern hören, was dir an uns schwerfällt.',
        type: 'klar',
        feedback: 'Du stehst zu deiner Beziehung, ohne den Kontakt zu deiner Mutter aufs Spiel zu setzen. Die Frage am Ende öffnet ein Gespräch über ihre Vorbehalte.'
      },
      {
        text: 'Nicht passt? Du bist einfach engstirnig und gönnst mir mein Glück nicht.',
        type: 'eskalierend',
        feedback: 'Das Etikett macht deine Mutter zur Angeklagten. Sie wird ihre Ablehnung eher verteidigen als überdenken.'
      }
    ],
    tip: 'Steh sichtbar zu deiner Beziehung und lass trotzdem eine Tür für das Gespräch offen.'
  },
  {
    id: 'eltern-pflege-1',
    conflict: { category: 'eltern', slug: 'streit-um-pflege' },
    context: 'Dein Vater schafft den Haushalt nach einem Sturz kaum noch allein. Du hast vorgeschlagen, dass zweimal pro Woche ein Pflegedienst kommt.',
    says: 'Ich lasse doch keine Fremden in mein Haus. Dafür habe ich ja dich.',
    options: [
      {
        text: 'Du denkst echt nur an dich. Ich hab auch noch einen Job und ein eigenes Leben.',
        type: 'eskalierend',
        feedback: 'Dein Ärger ist verständlich, aber als Vorwurf hört dein Vater vor allem Ablehnung. Seine Angst vor fremder Hilfe wird dadurch eher größer.'
      },
      {
        text: 'Na gut, dann komm ich halt öfter vorbei. Irgendwie kriegen wir das schon hin.',
        type: 'ausweichend',
        feedback: 'Du sagst etwas zu, das dich auf Dauer überfordern kann. Die Frage nach Unterstützung ist damit nur vertagt.'
      },
      {
        text: 'Ich bin für dich da, und daran ändert sich nichts. Mehr als zwei Nachmittage pro Woche schaffe ich aber nicht. Lass uns gemeinsam zu einer Pflegeberatung gehen und schauen, welche Hilfe sich für dich gut anfühlt.',
        type: 'klar',
        feedback: 'Du sicherst ihm deine Nähe zu und sagst ehrlich, wo deine Grenze liegt. Die gemeinsame Beratung lässt ihm Mitsprache, statt über seinen Kopf hinweg zu entscheiden.'
      }
    ],
    tip: 'Sag zuerst, was bleibt – und dann ehrlich, was du nicht leisten kannst.'
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
  {
    id: 'geschwister-bevorzugung-1',
    conflict: { category: 'geschwister', slug: 'bevorzugung' },
    context: 'Du hast zufällig erfahren, dass deine Schwester von euren Eltern Geld für ihre Wohnung bekommen hat. Als du es ihr gegenüber ansprichst, reagiert sie gereizt.',
    says: 'Was kann ich denn dafür? Das musst du mit Mama und Papa klären, nicht mit mir.',
    options: [
      {
        text: 'Stimmt, vergiss es. Ist ja euer Ding.',
        type: 'ausweichend',
        feedback: 'Du schluckst die Kränkung herunter. Der Groll bleibt und färbt das nächste Treffen mit deiner Schwester.'
      },
      {
        text: 'Du warst schon immer das Lieblingskind, und du hast es genossen.',
        type: 'eskalierend',
        feedback: 'Du machst sie für das Verhalten eurer Eltern verantwortlich. Sie wird sich verteidigen, und der Graben zwischen euch wird tiefer.'
      },
      {
        text: 'Du hast recht, entschieden haben das Mama und Papa, und mit ihnen rede ich auch. Dir erzähle ich es, weil es mich getroffen hat und ich nicht will, dass das unausgesprochen zwischen uns steht.',
        type: 'klar',
        feedback: 'Du sprichst sie von der Schuld frei und sagst offen, was in dir vorgeht. So steht ihr nicht gegeneinander, sondern könnt beide ehrlich bleiben.'
      }
    ],
    tip: 'Trenn die Entscheidung der Eltern von der Beziehung zu deinen Geschwistern.'
  },
  {
    id: 'geschwister-funkstille-1',
    conflict: { category: 'geschwister', slug: 'funkstille' },
    context: 'Nach Monaten ohne Kontakt triffst du deinen Bruder bei der Geburtstagsfeier eures Vaters. Du sagst ihm, dass du ihn vermisst hast.',
    says: 'Jetzt auf einmal? Du hast dich doch auch nie gemeldet.',
    options: [
      {
        text: 'Stimmt, ich hab mich auch zurückgezogen, und das tut mir leid. Ich würde gern wieder mehr voneinander mitbekommen. Wollen wir nächste Woche mal telefonieren, einfach so, ohne gleich alles aufzurollen?',
        type: 'klar',
        feedback: 'Du nimmst deinen Anteil an, ohne dich kleinzumachen, und machst ein kleines, konkretes Angebot. Er muss nicht sofort alles aufarbeiten, um Ja zu sagen.'
      },
      {
        text: 'Ich hab es wenigstens versucht. Du warst doch derjenige, der eingeschnappt war.',
        type: 'eskalierend',
        feedback: 'Ihr seid sofort wieder bei der Schuldfrage. Das Gespräch endet wahrscheinlich dort, wo die Funkstille angefangen hat.'
      },
      {
        text: 'Ja, okay, war blöd von mir. Lassen wir das.',
        type: 'ausweichend',
        feedback: 'Du nimmst die ganze Schuld auf dich und brichst ab. Die Annäherung, die du eigentlich wolltest, findet nicht statt.'
      }
    ],
    tip: 'Nach langer Stille öffnet ein kleines Angebot mehr als die Frage, wer angefangen hat.'
  },
  {
    id: 'geschwister-erbe-1',
    conflict: { category: 'geschwister', slug: 'streit-ums-erbe' },
    context: 'Wenige Wochen nach dem Tod eurer Mutter will dein Bruder das Elternhaus schnell verkaufen. Du möchtest dir mit der Entscheidung mehr Zeit lassen.',
    says: 'Du hast dich die letzten Jahre doch kaum um Mama gekümmert. Und jetzt willst du mitreden?',
    options: [
      {
        text: 'Und du hast dich nur blicken lassen, wenn es um Geld ging.',
        type: 'eskalierend',
        feedback: 'Ihr rechnet alte Rechnungen gegeneinander auf. Über das Haus wird so nicht mehr gesprochen, nur noch darüber, wer das bessere Kind war.'
      },
      {
        text: 'Du warst viel öfter bei ihr als ich, das weiß ich, und danke dafür. Beim Haus möchte ich trotzdem mitentscheiden. Lass uns ein paar Wochen Abstand nehmen und es dann gemeinsam mit einer neutralen Beratung anschauen.',
        type: 'klar',
        feedback: 'Du erkennst seinen Einsatz an, ohne deine Stimme aufzugeben. Der Abstand nimmt Druck aus einer Entscheidung, die mitten in der Trauer schwerfällt.'
      },
      {
        text: 'Dann entscheidet ihr das halt. Ich will keinen Streit.',
        type: 'ausweichend',
        feedback: 'Du ziehst dich zurück, obwohl dir das Haus wichtig ist. Der Ärger darüber kann später zwischen euch stehen, wenn sich nichts mehr ändern lässt.'
      }
    ],
    tip: 'Würdige, was der andere getragen hat – und bleib trotzdem Teil der Entscheidung.'
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
  {
    id: 'mitbewohner-laerm-1',
    conflict: { category: 'mitbewohner', slug: 'laerm-in-der-wg' },
    context: 'Dein Mitbewohner hört unter der Woche bis nach Mitternacht laut Musik, du musst um sechs aufstehen. Am Nachmittag sprichst du ihn in der Küche darauf an.',
    says: 'Das ist eine WG und kein Kloster. Kauf dir halt Ohrstöpsel.',
    options: [
      {
        text: 'Mit dir kann man echt nicht zusammenwohnen. Du denkst immer nur an dich.',
        type: 'eskalierend',
        feedback: '„Immer“ und das Urteil über seine Person machen aus einer Lärmfrage einen Charakterstreit. Er wird sich eher verteidigen, als über Uhrzeiten zu reden.'
      },
      {
        text: 'Stimmt, ein Kloster will ich auch nicht. Am Wochenende ist mir das egal, aber unter der Woche muss ich früh raus. Kannst du sonntags bis donnerstags ab 23 Uhr leiser machen oder Kopfhörer nehmen?',
        type: 'klar',
        feedback: 'Du gibst ihm in einem Punkt recht und grenzt dein Anliegen genau ein. Mit Tagen und Uhrzeit wird aus „zu laut“ eine Bitte, die er leicht einhalten kann.'
      },
      {
        text: 'Hm, okay. Dann probiere ich das mal mit Ohrstöpseln.',
        type: 'ausweichend',
        feedback: 'Du übernimmst das Problem allein, obwohl es euch beide betrifft. Der Schlafmangel bleibt, und der Ärger darüber wächst leise weiter.'
      }
    ],
    tip: 'Mach aus „zu laut“ eine Bitte mit Tagen und Uhrzeit.'
  },
  {
    id: 'mitbewohner-dauerbesuch-1',
    conflict: { category: 'mitbewohner', slug: 'partner-wohnt-mit' },
    context: 'Der Freund deiner Mitbewohnerin ist seit Wochen fast jeden Tag da, morgens ist das Bad ständig belegt. Du sprichst sie an, als ihr beide allein seid.',
    says: 'Er ist doch total nett. Ich dachte, du magst ihn.',
    options: [
      {
        text: 'Nett ist er schon. Ist auch nicht so schlimm, vergiss es einfach.',
        type: 'ausweichend',
        feedback: 'Du nimmst dein Anliegen zurück, weil es sich nach Kritik an ihm anfühlt. Am nächsten Morgen stehst du wieder vor dem besetzten Bad.'
      },
      {
        text: 'Darum geht es nicht. Wenn er hier wohnen will, soll er halt Miete zahlen. Sonst kann er ja bei sich bleiben.',
        type: 'eskalierend',
        feedback: 'Der Ton klingt nach Ultimatum und richtet sich gegen ihn persönlich. Deine Mitbewohnerin wird ihre Beziehung verteidigen, statt mit dir nach einer Regel zu suchen.'
      },
      {
        text: 'Ich mag ihn wirklich, darum geht es mir gar nicht. Er ist inzwischen fast jeden Tag hier, und das merken wir beim Bad und bei den Kosten. Lass uns beim nächsten WG-Abend eine Regel für Übernachtungsbesuch finden.',
        type: 'klar',
        feedback: 'Du trennst die Person von der Frage, wie viele Menschen sich die Wohnung teilen. Der Vorschlag für den WG-Abend gibt allen eine faire Chance mitzureden.'
      }
    ],
    tip: 'Sprich über die Wohnsituation, nicht darüber, ob du den Besuch magst.'
  },
  {
    id: 'mitbewohner-auszug-1',
    conflict: { category: 'mitbewohner', slug: 'auszug-und-kuendigung' },
    context: 'Du hast eine neue Stelle in einer anderen Stadt und erzählst deiner Mitbewohnerin, dass du aus der WG ausziehen willst.',
    says: 'Und jetzt? Soll ich mich etwa allein um alles kümmern? Du lässt uns einfach hängen.',
    options: [
      {
        text: 'Ich verstehe, dass das plötzlich kommt. Allein lasse ich euch damit nicht: Ich suche aktiv mit nach jemandem für mein Zimmer. Lass uns am Wochenende aufschreiben, was bis zur Übergabe alles zu klären ist.',
        type: 'klar',
        feedback: 'Du nimmst die Sorge ernst und zeigst, dass du deinen Teil übernimmst. Eine gemeinsame Liste macht aus dem Schreck einen planbaren Ablauf.'
      },
      {
        text: 'Ach, vergiss es. Dann bleibe ich eben noch eine Weile, bis ihr jemanden habt.',
        type: 'ausweichend',
        feedback: 'Du stellst deine eigene Entscheidung zurück, um den Ärger zu vermeiden. Offen bleibt damit, wann und wie der Auszug wirklich passiert.'
      },
      {
        text: 'Hängen lassen? Ich habe hier lang genug alles allein organisiert. Jetzt bist du mal dran.',
        type: 'eskalierend',
        feedback: 'Du rechnest alte Rechnungen auf, statt den Auszug zu planen. Die letzten Wochen in der WG werden dadurch eher angespannt als fair.'
      }
    ],
    tip: 'Kündige einen Auszug zusammen mit dem an, was du selbst dazu beiträgst.'
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
  {
    id: 'schwiegereltern-erziehung-1',
    conflict: { category: 'schwiegereltern', slug: 'mischen-sich-in-erziehung-ein' },
    context: 'Beim Abholen siehst du, dass euer Kind kurz vor dem Abendessen eine Tüte Gummibärchen bekommen hat, obwohl ihr als Paar darum gebeten hattet, das nicht zu tun. Du sprichst deinen Schwiegervater an.',
    says: 'Bei Oma und Opa gelten eben andere Regeln. Euch hat das früher auch nicht geschadet.',
    options: [
      {
        text: 'Ihr habt eure Kinder damals erzogen. Jetzt sind wir dran, und ihr haltet euch gefälligst daran.',
        type: 'eskalierend',
        feedback: 'Der Ton spricht deinem Schwiegervater jede Rolle ab. Er fühlt sich als Großvater zurückgesetzt und wird die Bitte eher als Angriff verstehen.'
      },
      {
        text: 'Ja, stimmt wahrscheinlich. Ist ja nur ab und zu.',
        type: 'ausweichend',
        feedback: 'Du gibst eine Absprache auf, die ihr gemeinsam getroffen habt. Beim nächsten Besuch gilt sie dann vermutlich gar nicht mehr.'
      },
      {
        text: 'Bei euch darf vieles anders sein, das gehört dazu. Bei Süßem vor dem Abendessen bitten wir euch aber, bei unserer Regel zu bleiben. Nach dem Essen ist etwas Kleines völlig in Ordnung.',
        type: 'klar',
        feedback: 'Du lässt den Großeltern ihren Spielraum und benennst nur die eine Regel, die euch wichtig ist. Mit dem „Nach dem Essen“ bekommt er einen Weg, der für alle passt.'
      }
    ],
    tip: 'Lass den Großeltern ihren Spielraum und halte nur an den wenigen Regeln fest, die euch wirklich wichtig sind.'
  },
  {
    id: 'schwiegereltern-rueckhalt-1',
    conflict: { category: 'schwiegereltern', slug: 'partner-steht-nicht-hinter-mir' },
    context: 'Beim Sonntagsbesuch hat deine Schwiegermutter wieder eure Erziehung kritisiert, und dein:e Partner:in hat geschwiegen. Auf der Heimfahrt sprichst du es an.',
    says: 'Das sind halt meine Eltern. Ich kann doch nicht jedes Mal einen Streit anfangen.',
    options: [
      {
        text: 'Das verlange ich auch gar nicht. Ich möchte nur nicht allein dastehen. Wenn so ein Kommentar kommt, reicht mir ein Satz von dir wie „Das haben wir zusammen entschieden.“ Können wir das so ausmachen?',
        type: 'klar',
        feedback: 'Du nimmst die Angst vor Streit ernst und bittest um etwas Kleines, Konkretes. Ein vereinbarter Satz ist leichter zu sagen als ein großes Gespräch mit den eigenen Eltern.'
      },
      {
        text: 'Schon klar, Mama geht eben immer vor. Ich bin ja nur die Person, mit der du lebst.',
        type: 'eskalierend',
        feedback: 'Der Vorwurf zwingt dein:e Partner:in, sich zwischen dir und den Eltern zu entscheiden. Das führt eher zu Rückzug als zu Rückhalt.'
      },
      {
        text: 'Okay, schon gut. Ich halte beim nächsten Mal einfach den Mund.',
        type: 'ausweichend',
        feedback: 'Du verzichtest auf Unterstützung, die du eigentlich brauchst. Die Kränkung bleibt, und beim nächsten Besuch fühlst du dich wieder allein.'
      }
    ],
    tip: 'Bitte dein:e Partner:in nicht um einen Streit, sondern um einen einzigen Satz, der zeigt: Wir sind ein Team.'
  },
  {
    id: 'schwiegereltern-ablehnung-1',
    conflict: { category: 'schwiegereltern', slug: 'mag-mich-nicht' },
    context: 'Du erfährst, dass deine Schwiegereltern einen Familienausflug geplant und nur deine:n Partner:in eingeladen haben. Du rufst deine Schwiegermutter an.',
    says: 'Wir dachten, das ist eher was für die Familie.',
    options: [
      {
        text: 'Ach so, klar, verstehe ich. Viel Spaß euch.',
        type: 'ausweichend',
        feedback: 'Du schluckst die Kränkung und bestätigst damit, dass du nicht dazugehörst. Beim nächsten Familientreffen wiederholt sich das wahrscheinlich.'
      },
      {
        text: 'Das hat mich getroffen, ich sehe mich inzwischen als Teil der Familie. Ich muss nicht überall dabei sein, aber ich möchte gefragt werden. Ladet uns beim nächsten Mal bitte zu zweit ein.',
        type: 'klar',
        feedback: 'Du sagst offen, was die Ausladung mit dir macht, ohne Absicht zu unterstellen. Die Bitte ist klein und verlangt keine Zuneigung, nur Einbeziehung.'
      },
      {
        text: 'Ihr habt mich von Anfang an nicht gewollt. Das merkt doch jeder.',
        type: 'eskalierend',
        feedback: 'Die Generalisierung lässt deiner Schwiegermutter nur die Wahl zwischen Zugeben und Abstreiten. Über den konkreten Ausflug sprecht ihr dann nicht mehr.'
      }
    ],
    tip: 'Du kannst Zuneigung nicht einfordern, Respekt und Einbeziehung schon.'
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
  {
    id: 'ex-partner-abwertung-1',
    conflict: { category: 'ex-partner', slug: 'redet-schlecht-vor-kindern' },
    context: 'Deine Tochter hat erzählt, beim anderen Elternteil heiße es, du seist schuld an der Trennung. Du sprichst deine:n Ex abends am Telefon darauf an, die Kinder schlafen.',
    says: 'Ich sag den Kindern halt die Wahrheit. Die sollen nicht denken, ich wäre der Böse.',
    options: [
      {
        text: 'Ich verstehe, dass du vor ihnen nicht schlecht dastehen willst, das will ich auch nicht. Die Kinder sollen sich aber nicht für eine Seite entscheiden müssen. Lass uns ausmachen, dass wir beide vor ihnen nicht über die Trennung urteilen.',
        type: 'klar',
        feedback: 'Du nimmst das Anliegen deines Gegenübers ernst und lenkst den Blick auf die Kinder. Die Regel gilt für euch beide und ist deshalb leichter anzunehmen.'
      },
      {
        text: 'Die Wahrheit? Dann erzähle ich ihnen mal meine Version, mal sehen, wie dir das gefällt.',
        type: 'eskalierend',
        feedback: 'Du drohst, mit gleicher Münze zurückzuzahlen, und die Kinder stehen dann noch tiefer zwischen euch. Der Loyalitätskonflikt wird größer, nicht kleiner.'
      },
      {
        text: 'Na ja, vielleicht ist ja was dran. Ich sage dazu lieber nichts.',
        type: 'ausweichend',
        feedback: 'Du lässt eine einseitige Darstellung stehen, die deine Tochter belastet. Für sie bleibt unklar, wem sie glauben soll.'
      }
    ],
    tip: 'Schlag eine Regel vor, die für beide Haushalte gilt – Kinder brauchen keine Seite, sondern beide Eltern.'
  },
  {
    id: 'ex-partner-neue-beziehung-1',
    conflict: { category: 'ex-partner', slug: 'neue-partnerschaft' },
    context: 'Dein:e Ex will die Kinder am nächsten Wochenende mit der neuen Partnerin bekannt machen. Du hast gefragt, ob ihr das vorher kurz besprechen könnt.',
    says: 'Du bist doch nur eifersüchtig. Mein Privatleben geht dich nichts mehr an.',
    options: [
      {
        text: 'Und du denkst nur an dich. Die Kinder sind dir doch völlig egal.',
        type: 'eskalierend',
        feedback: 'Du sprichst deinem Gegenüber ab, ein guter Elternteil zu sein. Das macht jede Absprache zum Kennenlernen fast unmöglich.'
      },
      {
        text: 'Hast recht, ist deine Sache. Mach, wie du meinst.',
        type: 'ausweichend',
        feedback: 'Du ziehst dich zurück, obwohl es um eure gemeinsamen Kinder geht. Wie sie auf das Treffen vorbereitet werden, bleibt offen.'
      },
      {
        text: 'Mit wem du zusammen bist, ist wirklich deine Sache. Mir geht es nur um die Kinder: Sie sollten von dir hören, dass es jemand Neues gibt, bevor sie die Person treffen. Können wir kurz absprechen, wie ihr das macht?',
        type: 'klar',
        feedback: 'Du lässt den Eifersuchtsvorwurf liegen und erkennst die Privatsphäre deines Gegenübers an. Deine Bitte bezieht sich nur auf das, was euch beide als Eltern betrifft.'
      }
    ],
    tip: 'Trenne die neue Beziehung von der Frage, wie die Kinder gut darauf vorbereitet werden.'
  },
  {
    id: 'ex-partner-freunde-1',
    conflict: { category: 'ex-partner', slug: 'gemeinsame-freunde' },
    context: 'Du warst auf dem Geburtstag einer Freundin, die ihr beide seit Jahren kennt. Am nächsten Tag schreibt dir dein:e Ex.',
    says: 'Hab gehört, du warst bei Lea. Die war eigentlich zuerst meine Freundin.',
    options: [
      {
        text: 'Ich hab dich nicht gefragt, wen du triffst. Also lass mich auch in Ruhe.',
        type: 'eskalierend',
        feedback: 'Der schroffe Ton schließt die Tür, bevor ein Gespräch beginnt. Der Streit landet so leicht bei Lea, die zwischen euch steht.'
      },
      {
        text: 'Lea ist mit uns beiden befreundet, und ich möchte sie nicht verlieren. Ich bitte niemanden, sich zu entscheiden, und erzähle dort auch nichts über dich. Ich wünsche mir, dass wir beide das so halten.',
        type: 'klar',
        feedback: 'Du sagst klar, dass die Freundschaft bleibt, und versprichst, nichts weiterzutragen. Weil die Bitte für euch beide gilt, wirkt sie nicht wie ein Vorwurf.'
      },
      {
        text: 'Okay, sorry. Dann gehe ich da nächstes Mal nicht mehr hin.',
        type: 'ausweichend',
        feedback: 'Du gibst eine Freundschaft auf, um Ärger zu vermeiden. Auf Dauer verlierst du so Menschen, die dir wichtig sind.'
      }
    ],
    tip: 'Freund:innen gehören niemandem – zieh sie nicht in eure Trennung hinein.'
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
