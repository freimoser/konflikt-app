export const categories = [
  {
    id: 'partner',
    name: 'Partner:in',
    icon: '💑',
    summary: 'Konflikte in der Partnerschaft belasten die Beziehung. Hier findest du Hilfe für die häufigsten Streitthemen.',
    conflicts: [
      {
        slug: 'waesche-liegen-lassen',
        title: 'Lässt immer die Wäsche liegen',
        icon: '👕',
        summary: 'Die Wäsche sammelt sich, keiner räumt weg – ein klassischer Alltagskonflikt.',
        problem: 'Dein:Partner:in lässt ständig Kleidung, Handtücher und Socken liegen. Du fühlst dich wie die Putzkraft und redest gefühlt zum hundertsten Mal darüber.',
        why_happens: 'Oft steckt kein böser Wille dahinter. Manche Menschen haben einfach ein anderes Ordnungsempfinden oder sind im Alltag gestresst. Für sie ist die Wäsche „unsichtbar" geworden.',
        one_party: {
          steps: [
            'Wähle einen ruhigen Moment – nicht dann, wenn du gerade genervt auf die Wäsche starrst.',
            'Sag genau das: „Mir fällt schwer, dich ständig daran zu erinnern. Wie können wir das lösen?"',
            'Biete einen Kompromiss: ein Wäschekorb im Zimmer, feste „Wäsche-Zeiten" oder eine klare Aufgabenverteilung.',
          ],
          script: '„Hey, mich nervt die Wäsche langsam. Ich will kein Putzteufel sein, aber so wie es läuft, drückt es auf meine Stimmung. Was können wir machen, damit es für uns beide passt?"',
        },
        two_party: {
          questions: [
            'Was ist dein Gefühl, wenn du die Wäsche siehst?',
            'Was würde dir helfen, dran zu denken?',
            'Was ist ein fairer Kompromiss für uns beide?',
          ],
          goal: 'Findet eine Lösung, die keiner als „Kontrolle" oder „Schlamperei" empfindet.',
        },
        related: ['keine-zeit', 'hoert-nicht-zu'],
      },
      {
        slug: 'hoert-nicht-zu',
        title: 'Hört nicht zu',
        icon: '🙉',
        summary: 'Du redest, aber es kommt nichts an – das Gefühl, nicht gehört zu werden.',
        problem: 'Du erzählst etwas und merkst: Dein Gegenüber ist gedanklich woanders. Kein Blickkontakt, keine Reaktion. Du fühlst dich unsichtbar.',
        why_happens: 'Parallelbeschäftigung (Handy, TV) oder Dauerstress sind oft die Ursache. Es ist selten böswillig, aber die Wirkung tut weh.',
        one_party: {
          steps: [
            'Check den Moment: Ist grad eine gute Zeit für ein Gespräch?',
            'Hol Aufmerksamkeit: „Kannst du kurz was aus der Hand legen? Es ist mir wichtig."',
            'Teile das Gefühl, nicht die Vorwürfe: „Mir fällt auf, dass ich mich ungehört fühle."',
          ],
          script: '„Hey, hast du kurz Zeit? Ich hab gesehen, du bist grad am Telefon – ich würd gern was besprechen, wenn du fertig bist. Es dauert 5 Minuten."',
        },
        two_party: {
          questions: [
            'Wann fühlst du dich am meisten gehört?',
            'Was lenkt dich ab, wenn ich etwas erzähle?',
            'Wie können wir eine gemeinsame „Gesprächszeit" finden?',
          ],
          goal: 'Eine Gewohnheit entwickeln, bei der beide sich gesehen fühlen.',
        },
        related: ['keine-zeit', 'eifersucht'],
      },
      {
        slug: 'keine-zeit',
        title: 'Keine Zeit füreinander',
        icon: '⏰',
        summary: 'Der Alltag frisst die Beziehung auf – ihr lebt nebeneinander her.',
        problem: 'Zwischen Arbeit, Haushalt und Verpflichtungen bleibt kaum Zeit für euch als Paar. Ihr redet nur über Organisatorisches. Die Nähe fehlt.',
        why_happens: 'Das Leben ist voll. Ohne bewusste Auszeit rutscht man in den Funktionsmodus. Beide fühlen sich ausgelaugt, aber die Sehnsucht nach Zweisamkeit bleibt.',
        one_party: {
          steps: [
            'Schlag konkret was vor, nicht nur „Wir sollten mal mehr Zeit verbringen".',
            'Mach einen festen Termin: Jeden Donnerstag 30 Minuten nur für euch.',
            'Qualität > Quantität: Es müssen keine großen Dates sein. Ein Spaziergang ohne Handy reicht.',
          ],
          script: '„Ich vermisse uns. Lass uns einen festen Abend in der Woche freihalten – nur wir zwei, ohne To-Dos. Was hältst du von donnerstags nach der Arbeit?"',
        },
        two_party: {
          questions: [
            'Was fehlt dir gerade am meisten?',
            'Wie viel Zeit pro Woche wäre für dich „genug"?',
            'Was können wir gemeinsam streichen, um Platz füreinander zu schaffen?',
          ],
          goal: 'Eine kleine, aber feste Gewohnheit etablieren, die euch als Paar stärkt.',
        },
        related: ['hoert-nicht-zu', 'waesche-liegen-lassen'],
      },
      {
        slug: 'eifersucht',
        title: 'Eifersucht',
        icon: '💚',
        summary: 'Eifersucht kann eine Beziehung vergiften. Aber sie ist meist ein Signal für etwas Tieferes.',
        problem: 'Dein:Partner:in hat neue Freunde, ist viel unterwegs oder du bekommst mit, dass andere mit ihm:ihr flirten. Du fühlst dich unsicher und hast Angst, nicht genug zu sein.',
        why_happens: 'Eifersucht ist selten rational. Sie kommt oft von eigenen Unsicherheiten, früheren Verletzungen oder fehlender Bestätigung in der Beziehung.',
        one_party: {
          steps: [
            'Erkenne den Unterschied zwischen Bauchgefühl und Tatsachen. Frag dich: „Passiert wirklich was, oder habe ich Angst?"',
            'Teile dein Gefühl, keine Vorwürfe: „Ich merke, dass ich unsicher werde, wenn du viel mit X unternimmst."',
            'Bitte um das, was dir Sicherheit gibt: eine gemeinsame Verabredung, mehr Zeit zu zweit.',
          ],
          script: '„Ich will ehrlich sein – ich merke, dass mich grad Eifersucht packt. Ich weiß, das ist mein Thema, aber ich wollte es dir sagen, damit wir drüber reden können."',
        },
        two_party: {
          questions: [
            'Was könnte dir mehr Sicherheit geben?',
            'Gibt es etwas, das ich anders machen kann, damit du dich wohler fühlst?',
            'Wie viel Freiraum ist für jeden okay?',
          ],
          goal: 'Eifersucht benennen, ohne anzuklagen. Grenzen aushandeln, nicht einfordern.',
        },
        related: ['keine-zeit', 'hoert-nicht-zu'],
      },
    ],
  },
  {
    id: 'chef',
    name: 'Chef:in',
    icon: '👔',
    summary: 'Konflikte mit Vorgesetzten sind heikel – sie kosten Nerven und können die Karriere beeinflussen.',
    conflicts: [
      {
        slug: 'nicht-ernst-genommen',
        title: 'Werde nicht ernst genommen',
        icon: '😤',
        summary: 'Deine Ideen werden ignoriert, deine Meinung zählt nicht. Das zehrt an der Motivation.',
        problem: 'Du machst Vorschläge, aber sie werden überhört oder belächelt. Andere bekommen die interessanten Aufgaben. Du fühlst dich wie ein Anhängsel, nicht wie ein Teil des Teams.',
        why_happens: 'Manchmal ein Machtgefälle, manchmal unbewusste Dynamik. Vielleicht hast du eine ruhige Art, vielleicht nimmt dein Chef dich anders wahr als du denkst.',
        one_party: {
          steps: [
            'Sammle Fakten: Wann genau fühlst du dich übergangen? Schriftlich oder in Meetings?',
            'Bereite ein konkretes Beispiel vor. Nicht „immer", sondern „letzte Woche bei X".',
            'Bitte um ein 1:1-Gespräch. Formuliere als Wunsch, nicht als Vorwurf.',
          ],
          script: '„Ich möchte gern mehr Verantwortung übernehmen und merke, dass ich oft übergangen werde. Können wir besprechen, wie ich mich besser einbringen kann – und woran es vielleicht liegt?"',
        },
        two_party: {
          questions: [
            'Nehme ich bestimmte Signale falsch wahr?',
            'Wie kann ich meine Punkte besser rüberbringen?',
            'Gibt es unausgesprochene Erwartungen?',
          ],
          goal: 'Eine Klärung, die deine Position stärkt, ohne die Hierarchie anzugreifen.',
        },
        related: ['zu-viel-druck', 'kein-feedback'],
      },
      {
        slug: 'zu-viel-druck',
        title: 'Zu viel Druck / Überstunden',
        icon: '😰',
        summary: 'Die Arbeit nimmt überhand – Überstunden, Wochenendarbeit, keine Erholung.',
        problem: 'Die Erwartungen sind zu hoch, Deadlines unrealistisch. Du arbeitest abends und am Wochenende, aber es wird nie genug. Deine Gesundheit leidet.',
        why_happens: 'Viele Chefs sehen die Arbeitslast nicht oder nehmen sie als „normal" wahr. Wer nicht signalisiert, dass es zu viel ist, bekommt immer mehr.',
        one_party: {
          steps: [
            'Dokumentiere eine Woche lang, was du wirklich arbeitest.',
            'Mach einen Termin für ein Mitarbeitergespräch – nicht auf dem Flur.',
            'Komm mit Lösungsvorschlägen: Priorisierung, Deadlines verschieben, Unterstützung.',
          ],
          script: '„Ich möchte gern über meine Auslastung sprechen. Letzte Woche hatte ich 55 Stunden – das ist für mich auf Dauer nicht gesund. Können wir Prioritäten verschieben oder Aufgaben abgeben?"',
        },
        two_party: {
          questions: [
            'Welche Aufgaben sind wirklich kritisch?',
            'Was kann delegiert oder gestrichen werden?',
            'Wie sieht eine realistische Auslastung für mich aus?',
          ],
          goal: 'Eine messbare Entlastung und klare Prioritäten.',
        },
        related: ['nicht-ernst-genommen', 'kein-feedback'],
      },
      {
        slug: 'kein-feedback',
        title: 'Kein Feedback bekommen',
        icon: '🤷',
        summary: 'Du arbeitest ins Leere – keine Rückmeldung, keine Anerkennung, keine Orientierung.',
        problem: 'Wochen vergehen ohne ein Wort zu deiner Arbeit. Du weißt nicht, ob du gut bist oder was besser laufen könnte. Die Motivation sinkt.',
        why_happens: 'Viele Führungskräfte sind schlecht im Geben von Feedback – nicht aus Bosheit, sondern aus Unsicherheit oder Zeitmangel.',
        one_party: {
          steps: [
            'Fordere Feedback aktiv ein: „Was kann ich besser machen?" statt auf Lob zu warten.',
            'Mach es konkret: Bitte um Feedback zu einem bestimmten Projekt.',
            'Schlag einen festen Rhythmus vor: alle 2 Wochen 15 Minuten.',
          ],
          script: '„Mir ist Feedback wichtig, um mich zu verbessern. Können wir alle zwei Wochen kurz besprechen, was gut läuft und wo ich nachlegen kann? Das hilft mir sehr."',
        },
        two_party: {
          questions: [
            'Welche Art von Feedback hilft dir am meisten?',
            'Wie oft wäre Feedback sinnvoll?',
            'Gibt es ein Projekt, zu dem ich dir Rückmeldung geben soll?',
          ],
          goal: 'Einen regelmäßigen Feedback-Rhythmus etablieren.',
        },
        related: ['nicht-ernst-genommen', 'zu-viel-druck'],
      },
    ],
  },
  {
    id: 'freunde',
    name: 'Freund:in',
    icon: '🤝',
    summary: 'Freundschaftskonflikte sind oft emotional – weil Erwartungen und Enttäuschungen tief sitzen.',
    conflicts: [
      {
        slug: 'hoert-nicht-zu',
        title: 'Hört nicht zu',
        icon: '🙉',
        summary: 'Dein Gegenüber ist gedanklich woanders – du fühlst dich nicht gesehen.',
        problem: 'Du erzählst von deinem Tag, deinen Problemen – und merkst, wie dein Freund aufs Handy schielt oder das Thema wechselt.',
        why_happens: 'Manche Menschen sind schlechte Zuhörer, manche sind selbst gerade überfordert. Freundschaft bedeutet aber auch, füreinander da zu sein.',
        one_party: {
          steps: [
            'Check die Situation: Ist es immer so oder nur heute?',
            'Sag direkt, was du brauchst: „Hey, ich brauch grad kurz dein Ohr."',
            'Wenn es ein Muster ist, sprich es an: „Mir fällt auf, dass wir oft über dich reden, aber selten über mich."',
          ],
          script: '„Ich hab das Gefühl, wir reden viel über deine Themen, aber meine kommen grad zu kurz. Kannst du mir kurz zuhören?"',
        },
        two_party: {
          questions: [
            'Fühlst du dich gehört in unserer Freundschaft?',
            'Was brauchst du, wenn du wirklich zuhören sollst?',
            'Wie können wir fairer teilen?',
          ],
          goal: 'Eine Balance zwischen Reden und Zuhören finden.',
        },
        related: ['sagt-immer-ab', 'einseitige-freundschaft'],
      },
      {
        slug: 'sagt-immer-ab',
        title: 'Sagt immer ab',
        icon: '😔',
        summary: 'Verabredungen platzen, Ausreden kommen – du fühlst dich nicht wertgeschätzt.',
        problem: 'Ihr verabredet euch, aber dein Freund sagt kurzfristig ab – zum dritten Mal. Du hast das Gefühl, nicht Priorität zu sein.',
        why_happens: 'Manche Menschen haben Angst vor Konflikten und sagen lieber zu, um dann abzusagen. Andere sind einfach chaotisch.',
        one_party: {
          steps: [
            'Reduziere den Druck: Schlag spontanere, kleinere Treffen vor.',
            'Sprich es an, ohne Vorwurf: „Mir ist aufgefallen, dass du oft absagst. Alles okay bei dir?"',
            'Überleg, ob die Freundschaft noch trägt – oder ob du zu viel investierst.',
          ],
          script: '„Ich freu mich immer, dich zu sehen – aber ich merke, dass ich traurig bin, wenn Treffen kurzfristig platzen. Liegt grad viel an bei dir?"',
        },
        two_party: {
          questions: [
            'Gibt es einen Grund, warum du oft absagst?',
            'Was wäre für dich ein leichteres Treffen?',
            'Wie können wir es schaffen, uns regelmäßiger zu sehen?',
          ],
          goal: 'Herausfinden, ob die Freundschaft noch beide will – und den Druck rausnehmen.',
        },
        related: ['hoert-nicht-zu', 'einseitige-freundschaft'],
      },
      {
        slug: 'einseitige-freundschaft',
        title: 'Einseitige Freundschaft',
        icon: '⚖️',
        summary: 'Du gibst immer, aber es kommt wenig zurück. Das tut weh.',
        problem: 'Du fragst, wie es ihm:ihr geht, hörst zu, hilfst – aber wenn du mal was brauchst, ist keiner da. Die Waage kippt.',
        why_happens: 'Manche Menschen sind „Nehmer" ohne böse Absicht. Sie merken gar nicht, dass die Freundschaft einseitig ist.',
        one_party: {
          steps: [
            'Teste es: Zieh dich eine Woche zurück. Meldet sich die Person von selbst?',
            'Sprich es an: „Mir ist aufgefallen, dass ich oft der bin, der den Kontakt hält."',
            'Zieh Konsequenzen: Eine Freundschaft muss beide Seiten wollen.',
          ],
          script: '„Ich mag dich wirklich, aber ich hab das Gefühl, dass ich mich viel mehr um die Freundschaft kümmere als du. Wie siehst du das?"',
        },
        two_party: {
          questions: [
            'Fühlt sich diese Freundschaft für dich fair an?',
            'Was schätzt du an mir?',
            'Wie können wir mehr füreinander da sein?',
          ],
          goal: 'Entweder die Balance finden – oder akzeptieren, dass die Freundschaft nicht mehr trägt.',
        },
        related: ['hoert-nicht-zu', 'sagt-immer-ab'],
      },
    ],
  },
  {
    id: 'kollegen',
    name: 'Kolleg:in',
    icon: '🧑‍💼',
    summary: 'Konflikte mit Kollegen sind besonders zäh – weil man sich nicht aus dem Weg gehen kann.',
    conflicts: [
      {
        slug: 'klaut-ideen',
        title: 'Klaut meine Ideen',
        icon: '🦹',
        summary: 'Deine Einfälle werden von anderen als eigene ausgegeben.',
        problem: 'Du bringst im Meeting eine Idee ein – nichts passiert. Eine Woche später präsentiert ein Kollege genau dasselbe und wird gefeiert.',
        why_happens: 'Manche Kollegen sind strategisch, manche merken es nicht mal. Oft fehlen klare „Credits" im Team.',
        one_party: {
          steps: [
            'Dokumentiere deine Ideen schriftlich (Mail, Notiz, Projekt-Tool).',
            'Setz deine Ideen im Meeting mit Nachnamen: „Wie ich vorhin in meiner Notiz skizziert hatte..."',
            'Sprich den Kollegen direkt an: „Ich hab mich gefreut, dass du meine Idee aufgegriffen hast."',
          ],
          script: '„Mir ist aufgefallen, dass meine Idee letzte Woche heute von dir kam. Vielleicht war es nicht böse gemeint – aber mir ist Anerkennung wichtig. Wie können wir das in Zukunft besser machen?"',
        },
        two_party: {
          questions: [
            'War dir bewusst, dass die Idee von mir kam?',
            'Wie können wir sicherstellen, dass Beiträge fair verteilt werden?',
            'Gibt es Druck von oben, der dich zu diesem Verhalten bringt?',
          ],
          goal: 'Eine Kultur, in der Ideen klar zugeordnet werden – ohne Anklage.',
        },
        related: ['redet-schlecht', 'keine-zusammenarbeit'],
      },
      {
        slug: 'redet-schlecht',
        title: 'Redet schlecht über mich',
        icon: '🗣️',
        summary: 'Hinter deinem Rücken wird getuschelt – das vergiftet das Arbeitsklima.',
        problem: 'Du erfährst durch Dritte, was über dich gesagt wird. Oder du spürst, dass die Stimmung kippt, wenn du den Raum betrittst.',
        why_happens: 'Mobbing, Frust oder einfach Gedankenlosigkeit. Manchmal ist es auch nur „Small Talk", der falsch rüberkommt.',
        one_party: {
          steps: [
            'Hol dir Klarheit: Ist es ein Einzelfall oder ein Muster?',
            'Hol dir einen Vertrauten im Team: „Hast du das auch bemerkt?"',
            'Sprich die Person direkt an – sachlich, nicht emotional.',
          ],
          script: '„Ich hab gehört, dass du dich letztens negativ über mich geäußert hast. Stimmt das? Ich möchte das klären, weil ich gern konstruktiv mit dir zusammenarbeite."',
        },
        two_party: {
          questions: [
            'Gibt es einen konkreten Auslöser für die Kritik?',
            'Hast du das Gefühl, ich bin für dich nicht ansprechbar?',
            'Was können wir tun, um direkt miteinander zu reden?',
          ],
          goal: 'Klärung auf Augenhöhe – und die Ansage, dass Flurfunk nicht der Weg ist.',
        },
        related: ['klaut-ideen', 'keine-zusammenarbeit'],
      },
      {
        slug: 'keine-zusammenarbeit',
        title: 'Keine Zusammenarbeit',
        icon: '🚧',
        summary: 'Ein Kollege blockiert, mauert oder arbeitet gegen dich.',
        problem: 'Deadlines werden gerissen, weil Informationen nicht geteilt werden. Entscheidungen werden umgangen. Es fühlt sich an wie ein Kampf, kein Team.',
        why_happens: 'Konkurrenzdenken, Revierverhalten oder schlicht Überlastung. Manche Kollegen haben Angst, „ersetzbar" zu sein.',
        one_party: {
          steps: [
            'Mach das Problem sichtbar: „Ohne deine Zuarbeit kann ich meine Aufgabe nicht fertigmachen."',
            'Biet einen Deal an: „Wenn ich dir bei X helfe, kannst du mir bei Y helfen?"',
            'Eskaliere sachlich: „Ich möchte das auf einer Sachebene klären."',
          ],
          script: '„Ich hab das Gefühl, wir arbeiten eher gegeneinander als miteinander. Das killt meine Motivation. Kannst du mir sagen, was los ist?"',
        },
        two_party: {
          questions: [
            'Was ist deine Perspektive auf die Situation?',
            'Was brauchst du, um besser mit mir zusammenzuarbeiten?',
            'Gibt es einen Konflikt, den wir vorher klären müssen?',
          ],
          goal: 'Die Zusammenarbeit auf eine funktionale Basis stellen – auch wenn man sich nicht mag.',
        },
        related: ['klaut-ideen', 'redet-schlecht'],
      },
    ],
  },
  {
    id: 'nachbarn',
    name: 'Nachbar:in',
    icon: '🏠',
    summary: 'Nachbarschaftskonflikte sind nervig – aber sie vergiften das Zuhause, wenn man sie nicht angeht.',
    conflicts: [
      {
        slug: 'zu-laut',
        title: 'Immer zu laut',
        icon: '🔊',
        summary: 'Musik, Partys, Schritte – Ruhe sieht anders aus.',
        problem: 'Dein Nachbar feiert bis 3 Uhr morgens, die Musik wummert durch die Decke, oder die Kinder trampeln, als würde getanzt.',
        why_happens: 'Unterschiedliche Lebensmodelle treffen aufeinander. Was für den einen normal ist (Samstag Party), ist für den anderen unerträglich.',
        one_party: {
          steps: [
            'Prüf die Uhrzeit: Vor 22 Uhr hast du kaum rechtliche Handhabe.',
            'Klingel freundlich, nicht aggressiv – der erste Kontakt entscheidet.',
            'Dokumentiere Lärm mit Datum und Uhrzeit fürs Beschwerdeformular.',
          ],
          script: '„Hey, tut mir leid, dass ich so spät klingele – aber die Musik ist bei mir richtig laut. Könnt ihr sie etwas leiser drehen? Danke!"',
        },
        two_party: {
          questions: [
            'Ist dir bewusst, wie laut es bei uns ankommt?',
            'Gibt es Zeiten, die für euch ok sind und für mich auch?',
            'Können wir eine Regelung finden (z.B. Wochenende lauter, unter der Woche leise)?',
          ],
          goal: 'Eine Nachbarschaft, in der beide sich wohlfühlen – ohne dass einer auf Rechtsmitteln bestehen muss.',
        },
        related: ['parkplatz', 'muell-gerueche'],
      },
      {
        slug: 'parkplatz',
        title: 'Parkplatz-Streit',
        icon: '🚗',
        summary: 'Der Parkplatz ist blockiert, zugeparkt oder dauerhaft besetzt.',
        problem: 'Immer wieder steht jemand auf „deinem" Parkplatz, obwohl er nicht dorthin gehört. Oder die Einfahrt ist zugeparkt.',
        why_happens: 'Oft Gäste, die nicht Bescheid wissen – oder ein Nachbar, der die Gelegenheit nutzt.',
        one_party: {
          steps: [
            'Kleiner Zettel an der Windschutzscheibe – freundlich, nicht passiv-aggressiv.',
            'Sprich den Nachbarn direkt an: „Weißt du, wem der Wagen gehört?"',
            'Falls nötig: Verwaltung oder Polizei einschalten.',
          ],
          script: '„Hey, der blaue Golf da – ist das dein Besuch? Der steht auf meinem Platz. Könntest du ihn kurz umparken lassen?"',
        },
        two_party: {
          questions: [
            'Gibt es eine Möglichkeit, die Parkplätze besser zu kennzeichnen?',
            'Können wir eine Besucherregelung treffen?',
            'Sollen wir das der Verwaltung melden?',
          ],
          goal: 'Klarheit und Fairness bei der Parkplatzvergabe.',
        },
        related: ['zu-laut', 'muell-gerueche'],
      },
      {
        slug: 'muell-gerueche',
        title: 'Müll / Gerüche',
        icon: '🤢',
        summary: 'Gestank aus der Nachbarwohnung oder falsche Mülltrennung nervt gewaltig.',
        problem: 'Es riecht im Treppenhaus, der Müll wird nicht richtig getrennt oder die Biotonne stinkt bis in deine Wohnung.',
        why_happens: 'Unachtsamkeit, unterschiedliche Sauberkeitsstandards oder schlicht keine böswillige Absicht.',
        one_party: {
          steps: [
            'Klopf an und sprich es freundlich an – niemand will stinkend dastehen.',
            'Biet Hilfe an: „Vielleicht ist die Tonne zu voll, sollen wir sie gemeinsam leeren?"',
            'Falls erfolglos: Hausverwaltung einschalten.',
          ],
          script: '„Hi, mir ist aufgefallen, dass der Müll im Treppenhaus riecht. Können wir schauen, dass die Tonnen öfter geleert werden?"',
        },
        two_party: {
          questions: [
            'Ist dir der Geruch aufgefallen?',
            'Hast du einen Vorschlag zur besseren Mülltrennung?',
            'Können wir einen Putzplan aufstellen?',
          ],
          goal: 'Ein sauberes und geruchsfreies Wohnumfeld für alle.',
        },
        related: ['zu-laut', 'parkplatz'],
      },
    ],
  },
  {
    id: 'eltern',
    name: 'Eltern',
    icon: '👨‍👩‍👧‍👦',
    summary: 'Konflikte mit Eltern sind besonders tief – weil alte Muster und Erwartungen mitschwingen.',
    conflicts: [
      {
        slug: 'mischt-sich-ein',
        title: 'Mischt sich ständig ein',
        icon: '🙅',
        summary: 'Deine Eltern geben ungefragt Ratschläge und mischen sich in dein Leben ein.',
        problem: 'Deine Eltern kommentieren deine Beziehung, deinen Job, deine Wohnung – immer gut gemeint, aber es fühlt sich an wie Bevormundung.',
        why_happens: 'Eltern haben oft das Gefühl, „verantwortlich" zu bleiben. Ihre Ratschläge sind ihre Art von Liebe – auch wenn es sich wie Kontrolle anfühlt.',
        one_party: {
          steps: [
            'Dank für die Sorge, aber Grenze setzen: „Ich weiß, du meinst es gut…"',
            'Sag konkret, wo du keine Ratschläge willst.',
            'Biet Alternativen: „Wenn ich deine Meinung will, frag ich dich."',
          ],
          script: '„Ich weiß, du willst mir nur helfen. Aber ich möchte mein Leben selbst in die Hand nehmen. Wenn ich Rat brauche, komme ich auf dich zu – versprochen."',
        },
        two_party: {
          questions: [
            'Fühlst du dich verantwortlich für mein Leben?',
            'Was macht dir Sorgen, dass du dich einmischen musst?',
            'Wie können wir eine Grenze finden, mit der wir beide leben können?',
          ],
          goal: 'Eine erwachsene Beziehung auf Augenhöhe – mit Respekt auf beiden Seiten.',
        },
        related: ['versteht-mich-nicht', 'erwartungen'],
      },
      {
        slug: 'versteht-mich-nicht',
        title: 'Versteht mich nicht',
        icon: '😕',
        summary: 'Du hast das Gefühl, deine Eltern checken dein Leben einfach nicht.',
        problem: 'Deine Lebensentscheidungen (Job, Partner, Wohnort) stoßen auf Unverständnis. Sie verstehen nicht, warum du anders lebst als sie.',
        why_happens: 'Generationenunterschied. Deine Eltern haben in einer anderen Welt gelernt, was „richtig" ist. Deine Welt ist eine andere.',
        one_party: {
          steps: [
            'Erwarte nicht, dass sie dich 100% verstehen. Akzeptanz ist mehr wert als Verständnis.',
            'Erklär deinen Weg, ohne dich zu rechtfertigen: „Ich hab mich dafür entschieden, weil…"',
            'Finde gemeinsamen Boden: Was schätzt ihr aneinander?',
          ],
          script: '„Ich weiß, dass du meine Entscheidung nicht ganz verstehst. Aber ich bitte dich: Vertrau mir, dass ich weiß, was für mich richtig ist."',
        },
        two_party: {
          questions: [
            'Was genau macht dir Sorgen an meinem Weg?',
            'Gibt es etwas, das du dir anders gewünscht hättest?',
            'Wie können wir respektvoll bleiben, auch wenn wir uns nicht verstehen?',
          ],
          goal: 'Akzeptanz statt Zustimmung – einander respektieren, ohne alles zu verstehen.',
        },
        related: ['mischt-sich-ein', 'erwartungen'],
      },
      {
        slug: 'erwartungen',
        title: 'Zu hohe Erwartungen',
        icon: '📏',
        summary: 'Du sollst funktionieren, Karriere machen, Familie gründen – aber du willst deinen eigenen Weg.',
        problem: 'Deine Eltern haben einen Plan für dich: Studium, guter Job, Heirat, Kinder. Du machst etwas ganz anderes – und spürst die Enttäuschung.',
        why_happens: 'Eltern investieren oft ein „Bild" von dir. Wenn du davon abweichst, fühlt es sich für sie wie ein Verlust an.',
        one_party: {
          steps: [
            'Trenn ihre Erwartungen von deinen Zielen – du lebst dein Leben.',
            'Mach klar: „Ich bin nicht da, um eure Träume zu erfüllen." – freundlich, aber klar.',
            'Zeig, dass du glücklich bist. Nichts überzeugt mehr als ein erfülltes Leben.',
          ],
          script: '„Ich weiß, dass du dir etwas anderes für mich gewünscht hast. Aber ich bin glücklich mit dem, was ich tue. Ich hoffe, du kannst dich für mich freuen."',
        },
        two_party: {
          questions: [
            'Welche Erwartungen belasten dich am meisten?',
            'Glaubst du, dass ich die richtigen Entscheidungen für mich treffe?',
            'Können wir uns darauf einigen, dass jeder sein Leben lebt?',
          ],
          goal: 'Deine Eltern von ihrem „Idealbild" zu lösen – und sie für das echte dich zu gewinnen.',
        },
        related: ['mischt-sich-ein', 'versteht-mich-nicht'],
      },
    ],
  },
];

export function getAllConflicts() {
  const all = [];
  for (const cat of categories) {
    for (const con of cat.conflicts) {
      all.push({ ...con, category: cat.id, categoryName: cat.name });
    }
  }
  return all;
}

export function getCategory(id) {
  return categories.find(c => c.id === id);
}

export function getConflict(categoryId, slug) {
  const cat = getCategory(categoryId);
  if (!cat) return null;
  return cat.conflicts.find(c => c.slug === slug) || null;
}
