import grundstuecksgrenzen from '../conflicts/nachbarn/grundstuecksgrenzen.js';
import beschwertSichStaendig from '../conflicts/nachbarn/beschwert-sich-staendig.js';

export const nachbarnCategory = {
  id: 'nachbarn',
  name: 'Nachbar:in',
  icon: '🏠',
  summary: 'Nachbarschaftskonflikte berühren dein Zuhause direkt. Gute Klärung schützt Ruhe, Alltag und ein respektvolles Miteinander im Haus.',
  conflicts: [
    {
      slug: 'zu-laut',
      title: 'Nachbar:in ist zu laut',
      icon: '🔊',
      summary: 'Musik, Schritte, Gespräche oder Partys dringen durch Wand, Decke oder Treppenhaus. Du brauchst Ruhe, willst aber keinen Hauskrieg starten.',
      problem: 'Du hörst regelmäßig laute Musik, dröhnende Bässe, Poltern, nächtliche Gespräche im Treppenhaus oder Kinderlärm, der dich stark belastet. Vielleicht hast du schon geklopft, einen Zettel geschrieben oder dich bei anderen erkundigt. Gleichzeitig willst du nicht als überempfindlich gelten und fürchtest, dass ein falscher Ton die Nachbarschaft dauerhaft vergiftet. Der Konflikt ist so anstrengend, weil er nicht an der Wohnungstür endet: Du bist in deinem eigenen Zuhause angespannt und wartest auf das nächste Geräusch.',
      causes: [
        'Oft treffen unterschiedliche Tagesrhythmen aufeinander. Was für die eine Person normale Abendgestaltung ist, fällt bei der anderen genau in Erholungs-, Schlaf- oder Arbeitszeiten.',
        'Viele unterschätzen, wie stark Schall durch Böden, Rohre, Altbauwände oder offene Fenster übertragen wird. Im eigenen Raum wirkt Musik moderat, bei dir kommt sie deutlich härter an.',
        'Manchmal steckt kein böser Wille dahinter, sondern fehlendes Feedback. Wenn niemand ruhig und konkret sagt, was wann ankommt, bleibt der Nachbarin oder dem Nachbarn die Wirkung verborgen.'
      ],
      safety: 'Lärm ist meistens ein Alltagskonflikt. Wenn du bedroht wirst, Angst vor der Person hast, es zu Einschüchterung, Sachbeschädigung, Stalking oder Gewalt kommt, probiere kein weiteres Gesprächsskript aus. Halte Abstand, sichere Unterstützung im Umfeld und wende dich bei akuter Gefahr an 110 oder 112.',
      one_party: {
        preparation: 'Notiere für dich einige konkrete Situationen mit Uhrzeit, Art des Geräuschs und Wirkung auf dich. Das dient nicht als Drohkulisse, sondern hilft dir, ruhig und präzise zu bleiben. Wähle für das Gespräch möglichst einen neutralen Zeitpunkt, nicht mitten in der größten Wut. Kläre vorher dein Ziel: eine leisere Lautstärke, geschlossene Fenster, Teppiche, Ruhe nach einer bestimmten Uhrzeit oder eine kurze Vorwarnung bei Feiern.',
        scripts: {
          sanft: 'Hi, ich möchte kurz etwas ansprechen, bevor es sich bei mir aufstaut. In meiner Wohnung kommt eure Musik abends sehr deutlich an, besonders der Bass. Könntet ihr sie nach 21 Uhr etwas runterdrehen oder den Lautsprecher anders stellen?',
          direkt: 'Ich brauche abends verlässlich Ruhe. In den letzten Tagen war es mehrfach so laut, dass ich nicht schlafen oder arbeiten konnte. Bitte reduziert die Lautstärke deutlich und achtet besonders nach 22 Uhr darauf.',
          sachlich: 'Am Dienstag und Donnerstag war zwischen 22:30 und 23:45 Uhr laute Musik mit Bass in meiner Wohnung hörbar. Ich möchte eine praktische Lösung finden, damit euer Alltag möglich bleibt und meine Ruhe nicht dauerhaft gestört wird.'
        },
        steps: [
          'Beruhige dich zuerst so weit, dass du nicht klingelst, um Druck abzulassen, sondern um eine Lösung anzustoßen.',
          'Sprich die Person direkt und freundlich an, sofern du dich sicher fühlst, statt sofort anonyme Zettel oder Beschwerden zu nutzen.',
          'Nenne eine konkrete Beobachtung mit Zeitfenster und Geräuschart, nicht pauschal: "Ihr seid immer rücksichtslos."',
          'Beschreibe die Wirkung auf dich kurz: Schlaf, Erholung, Homeoffice, Kind, Schichtdienst oder Konzentration.',
          'Bitte um eine umsetzbare Veränderung, zum Beispiel Bass runter, Fenster schließen, Möbel entkoppeln oder vorher Bescheid sagen.',
          'Frage, ob der anderen Person bewusst war, wie laut es bei dir ankommt, und höre die Antwort an.',
          'Vereinbare ein einfaches Signal für akute Fälle, etwa eine kurze Nachricht oder ein erneutes Klingeln ohne Vorwurf.'
        ],
        reactions: [
          {
            trigger: 'So laut ist das doch gar nicht.',
            reaction: 'Bei euch wirkt es vielleicht normal. In meiner Wohnung kommt vor allem der Bass sehr stark an. Mir geht es nicht darum, euch den Abend zu verbieten, sondern die Lautstärke so anzupassen, dass ich zur Ruhe komme.'
          },
          {
            trigger: 'Dann musst du halt umziehen, wenn dich alles stört.',
            reaction: 'Ich möchte keinen Streit daraus machen. Wir wohnen hier beide, und ich glaube, wir können eine Lösung finden, die Rücksicht und Alltag verbindet.'
          },
          {
            trigger: 'Andere haben sich noch nie beschwert.',
            reaction: 'Das kann sein. Ich spreche nur für meine Wohnung und meine Situation. Gerade deshalb sage ich es konkret, damit wir es nicht größer machen müssen.'
          }
        ],
        boundary: 'Wenn die Lautstärke trotz ruhiger Ansprache wiederholt unverändert bleibt oder Gespräche aggressiv werden, beende direkte Diskussionen. Dokumentiere sachlich, bleibe bei kurzen, respektvollen Hinweisen und wende dich an die Hausverwaltung, Vermietung oder eine neutrale Vermittlungsstelle, statt nachts weiter zu eskalieren.'
      },
      two_party: {
        goal: 'Eine verlässliche Ruhevereinbarung finden, die normale Lebensgeräusche akzeptiert, vermeidbaren Lärm reduziert und direkte Eskalationen im Haus verhindert.',
        rules: [
          'Ihr sprecht über konkrete Geräusche und Zeiten, nicht über Charakter oder Lebensstil.',
          'Beide Seiten dürfen sagen, was sie brauchen: Ruhe, Musik, Besuch, Kinderalltag, Arbeit oder Schlaf.',
          'Es wird keine Schuldliste geführt; gesucht wird eine praktische Hausroutine.',
          'Akute Ärger-Momente werden nach Möglichkeit vertagt, wenn niemand mehr ruhig sprechen kann.'
        ],
        questions: [
          'Welche Geräusche kommen bei dir besonders laut an, und zu welchen Zeiten ist es am belastendsten?',
          'Welche Gewohnheiten sind dir wichtig und sollten nicht grundsätzlich verboten werden?',
          'Welche einfachen Anpassungen könnten die Übertragung verringern, ohne den Alltag stark einzuschränken?',
          'Wie können wir bei Feiern, Besuch oder Renovierung vorher Bescheid geben, damit niemand überrascht wird?',
          'Woran merken wir in zwei Wochen, dass die Vereinbarung funktioniert?'
        ],
        steps: [
          'Beide schildern nacheinander ihre Sicht: erst Wahrnehmung, dann Bedürfnis, ohne Unterbrechung.',
          'Ihr unterscheidet zwischen unvermeidbaren Wohngeräuschen und vermeidbaren Störungen wie Bass, Türenknallen oder späten Gesprächen im Flur.',
          'Ihr sammelt konkrete Stellschrauben: Lautsprecherposition, Teppich, Filzgleiter, Fenster, Uhrzeiten, Vorankündigung.',
          'Ihr wählt zwei bis drei Regeln, die sofort testbar sind und nicht wie eine komplette Lebensumstellung wirken.',
          'Ihr legt ein ruhiges Signal für Ausnahmen fest und besprecht nach zwei Wochen, ob nachjustiert werden muss.'
        ],
        agreement: 'Wir vereinbaren, dass Musik ab 21:30 Uhr deutlich leiser läuft und der Bass reduziert wird. Bei Feiern mit Besuch gibt es möglichst vorher eine kurze Nachricht im Hausflur oder persönlich. Wenn es akut zu laut ist, klingele ich einmal ruhig oder schreibe kurz. Nach zwei Wochen sprechen wir noch einmal fünf Minuten, ob die Lösung reicht.'
      },
      dos: [
        'Konkrete Uhrzeiten, Geräusche und Wirkungen nennen.',
        'Früh ansprechen, bevor aus Ärger Verachtung wird.',
        'Mit einer Bitte starten, nicht mit einer Drohung.',
        'Normale Lebensgeräusche von vermeidbarem Lärm unterscheiden.'
      ],
      donts: [
        'Aus Wut gegen Wand, Decke oder Heizung schlagen.',
        'Anonyme Zettel mit Vorwürfen schreiben, bevor ein direkter Versuch stattgefunden hat.',
        'Die Person als rücksichtslos, asozial oder absichtlich störend abstempeln.',
        'Nachts endlos diskutieren, wenn beide Seiten bereits gereizt sind.'
      ],
      next_step: 'Wenn der erste Versuch nicht wirkt, wiederhole die Bitte einmal mit konkretem Bezug auf die vereinbarte Regel. Bleibt es unverändert, dokumentiere sachlich und suche eine neutrale Stufe wie Hausverwaltung, Vermietung, Beirat oder Mediation, ohne selbst in Gegenlärm oder Beschimpfung zu gehen.',
      related: [
        { category: 'nachbarn', slug: 'parkplatz-streit' },
        { category: 'partner', slug: 'hoert-nicht-zu' },
        { category: 'freunde', slug: 'grenzen-nicht-respektiert' }
      ],
      article: {
        title: 'Nachbar ist zu laut: Ruhig ansprechen, Grenzen setzen und Eskalation vermeiden',
        meta: 'Dein:e Nachbar:in ist zu laut? Erfahre, wie du Lärm respektvoll ansprichst, klare Vereinbarungen findest und Streit im Haus vermeidest.',
        intro: 'Wenn Lärm durch die Wand kommt, fühlt sich ein Konflikt sofort sehr persönlich an. Du sitzt nicht in einem neutralen Büro, sondern in deinem Zuhause, dem Ort, an dem du schlafen, arbeiten, entspannen oder dich sicher fühlen möchtest. Genau deshalb macht Nachbarschaftslärm so schnell dünnhäutig. Ein Bass, der objektiv vielleicht nur eine Stunde läuft, kann sich wie ein Eingriff in den eigenen Raum anfühlen. Gleichzeitig willst du vermutlich keinen Dauerkrieg im Treppenhaus. Du möchtest Ruhe, aber auch weiterhin normal grüßen können. Der hilfreichste Weg liegt deshalb zwischen Schweigen und Eskalation: früh, konkret, respektvoll und mit einem Vorschlag, der beiden Seiten Alltag lässt.',
        situation: 'Lärmkonflikte in der Nachbarschaft haben viele Formen. Mal ist es Musik am Abend, mal sind es Schritte über dir, laute Telefonate auf dem Balkon, Partys, bellende Hunde, Türenknallen oder Gespräche im Treppenhaus. Besonders belastend wird es, wenn du nicht einschätzen kannst, wann es wieder passiert. Dann hörst du nicht nur den aktuellen Ton, sondern wartest innerlich schon auf die nächste Störung. Manche Menschen reagieren darauf, indem sie immer empfindlicher werden. Andere schlucken den Ärger lange herunter und explodieren dann bei einer scheinbar kleinen Situation. Beides ist verständlich, aber selten hilfreich. Dein Ziel sollte nicht sein, der anderen Person das Wohnen abzugewöhnen. Ziel ist, vermeidbare Störungen sichtbar zu machen und eine verlässliche Rücksicht zu erreichen.',
        causes: [
          'Ein häufiger Grund ist fehlende Wahrnehmung. Schall überträgt sich unberechenbar: Ein Lautsprecher an der falschen Wand, ein harter Boden oder ein offenes Fenster können Geräusche verstärken, ohne dass die verursachende Person es merkt.',
          'Dazu kommen unterschiedliche Lebensrhythmen. Wer spät arbeitet, feiert, Musik macht oder Besuch empfängt, trifft auf Menschen, die früh schlafen, Schichtdienst haben, Kinder beruhigen oder konzentriert im Homeoffice sind.',
          'Manchmal verschärft auch die bisherige Kommunikation das Problem. Anonyme Zettel, Klopfen gegen die Wand oder Beschwerden über Dritte erzeugen schnell Verteidigung, obwohl die eigentliche Bitte berechtigt sein kann.'
        ],
        mistakes: [
          'Der erste Fehler ist zu langes Aushalten. Wenn du wochenlang nichts sagst, steigt die Wahrscheinlichkeit, dass dein erster Satz gereizt klingt und die andere Seite nur den Ton hört, nicht das Anliegen.',
          'Der zweite Fehler ist Gegenlärm. Wer aus Frust selbst laut wird, schafft keinen Ausgleich, sondern einen zweiten Konflikt. Danach geht es nicht mehr um die ursprüngliche Störung, sondern um gegenseitige Provokation.',
          'Der dritte Fehler ist eine pauschale Unterstellung. Sätze wie "Du nimmst auf niemanden Rücksicht" machen die Person zum Problem. Besser ist: "Gestern kam der Bass bis nach 23 Uhr sehr deutlich bei mir an."'
        ],
        strategy: 'Bereite dein Gespräch knapp vor. Notiere zwei oder drei Beispiele, aber präsentiere keine Anklageschrift. Ein guter Einstieg verbindet Beobachtung, Wirkung und Bitte: "Am Mittwoch war die Musik nach 22 Uhr in meinem Schlafzimmer deutlich zu hören. Ich konnte nicht einschlafen. Könntest du den Bass abends reduzieren oder den Lautsprecher anders stellen?" Diese Formulierung ist klar, ohne zu demütigen. Achte darauf, wann du sprichst. Direkt während einer lauten Party kann eine kurze Bitte nötig sein, für die grundsätzliche Klärung ist ein ruhiger Moment besser. Wenn die andere Person überrascht reagiert, gib ihr die Chance, die Wirkung zu verstehen. Vielleicht ist ihr nicht bewusst, wie stark es bei dir ankommt. Suche nach einfachen Stellschrauben: Teppich, Filzgleiter, Kopfhörer, Fenster schließen, Bass runter, Möbel umstellen, Feiern ankündigen, laute Arbeiten bündeln. Wenn du selbst sehr empfindlich auf Geräusche reagierst, darfst du das ebenfalls ehrlich einordnen, ohne dein Bedürfnis aufzugeben. Der Satz "Ich merke, dass mich Bass besonders stresst" ist oft deeskalierender als "Das ist unerträglich". Wichtig ist außerdem eine zweite Stufe, falls es nicht klappt. Du musst nicht jede Nacht neu verhandeln. Wenn nach einem ruhigen Gespräch keine Veränderung entsteht, bleib sachlich, dokumentiere Situationen und nutze neutrale Wege wie Hausverwaltung, Vermietung oder Mediation. Das ist kein Scheitern, sondern eine Eskalationsbremse.',
        examples: [
          'Statt nachts wütend zu klingeln und zu sagen "Macht endlich den Krach aus", kannst du sagen: "Ich weiß, ihr habt Besuch. Bei mir ist der Bass gerade sehr laut im Schlafzimmer. Könnt ihr ihn bitte deutlich runterdrehen? Morgen können wir gern kurz besprechen, wie es künftig besser klappt."',
          'Wenn dein:e Nachbar:in abwehrt, hilft ein ruhiger Fokus: "Ich will euch nicht vorschreiben, wie ihr lebt. Ich brauche nur, dass vermeidbarer Lärm abends bei mir nicht so stark ankommt. Welche Lösung wäre für euch realistisch?"'
        ],
        help: 'Abstand oder zusätzliche Unterstützung ist sinnvoll, wenn Gespräche nicht mehr sicher wirken. Drohungen, Einschüchterung, Sachbeschädigung, Stalking oder Gewalt sind keine normalen Lärmprobleme. Dann solltest du nicht weiter allein klingeln, sondern Menschen einbeziehen, denen du vertraust, und bei akuter Gefahr die Notrufnummern nutzen. Professionelle oder neutrale Hilfe kann auch dann entlasten, wenn der Konflikt schon sehr festgefahren ist und jede Begegnung im Haus angespannt wird. Eine Mediation, ein Gespräch mit der Hausverwaltung oder ein moderierter Termin kann verhindern, dass beide Seiten nur noch Beweise sammeln. Wichtig bleibt: Dieser Ratgeber ersetzt keine Rechtsberatung. Er hilft dir, die Kommunikation so zu führen, dass Sicherheit, Ruhe und Deeskalation im Vordergrund stehen.',
        faqs: [
          {
            question: 'Soll ich bei Lärm sofort klingeln?',
            answer: 'Wenn es akut sehr laut ist und du dich sicher fühlst, kann ein kurzes, freundliches Klingeln helfen. Für die grundsätzliche Klärung ist ein ruhiger Zeitpunkt besser.'
          },
          {
            question: 'Wie vermeide ich, überempfindlich zu wirken?',
            answer: 'Nenne konkrete Situationen und die Wirkung auf dich. Du musst dich nicht rechtfertigen, aber sachliche Beispiele machen dein Anliegen nachvollziehbarer.'
          },
          {
            question: 'Sind Zettel im Hausflur sinnvoll?',
            answer: 'Ein höflicher Hinweis kann helfen, wirkt aber schnell passiv-aggressiv. Wenn möglich, ist ein direktes kurzes Gespräch meist deeskalierender.'
          },
          {
            question: 'Was, wenn der Lärm trotz Gespräch weitergeht?',
            answer: 'Sprich die Vereinbarung einmal ruhig erneut an. Wenn sich nichts ändert, dokumentiere sachlich und nutze eine neutrale Stelle wie Hausverwaltung oder Mediation.'
          },
          {
            question: 'Wann sollte ich nicht mehr selbst das Gespräch suchen?',
            answer: 'Wenn du bedroht wirst, Angst hast oder es zu aggressivem Verhalten kommt, steht Sicherheit vor Klärung. Suche Unterstützung und rufe bei akuter Gefahr 110 oder 112.'
          }
        ]
      }
    },
    {
      slug: 'parkplatz-streit',
      title: 'Parkplatz-Streit',
      icon: '🚗',
      summary: 'Ein Stellplatz wird blockiert, Gäste parken ungünstig oder die Einfahrt ist versperrt. Du brauchst Klarheit, ohne den Konflikt zu verhärten.',
      problem: 'Immer wieder steht ein Auto auf deinem Stellplatz, zu nah an deiner Garage, vor der Einfahrt oder so, dass Rangieren unnötig schwer wird. Vielleicht ist unklar, ob Besuch den Platz nutzt, ob Markierungen schlecht sichtbar sind oder ob jemand die Regel bewusst ignoriert. Der Ärger steigt schnell, weil Parken mit Zeitdruck verbunden ist: Du kommst nach Hause, musst weg, findest keinen Platz oder kannst dein Fahrzeug nicht gut bewegen. Gleichzeitig wohnen die Beteiligten weiterhin Tür an Tür, weshalb harte Konfrontation selten eine gute erste Lösung ist.',
      causes: [
        'Viele Parkplatzkonflikte entstehen durch Unklarheit: schlecht sichtbare Nummern, fehlende Beschilderung, neue Bewohner:innen, Gäste oder Lieferdienste, die die Zuordnung nicht kennen.',
        'Manchmal treffen unterschiedliche Fairnessvorstellungen aufeinander. Eine Person denkt, ein kurzer Stopp sei harmlos, während die andere auf Verlässlichkeit angewiesen ist.',
        'Zeitdruck verstärkt alles. Wer spät dran ist oder nach einem langen Tag keinen Platz findet, reagiert schneller scharf, obwohl die Ursache vielleicht ein Missverständnis ist.'
      ],
      safety: 'Ein Parkplatzstreit ist meist ein lösbarer Alltagskonflikt. Wenn jemand dich bedrängt, dein Fahrzeug beschädigt, dich verfolgt, beleidigt, bedroht oder bewusst einschüchtert, gehe nicht in direkte Machtkämpfe. Sorge für Abstand, dokumentiere nüchtern und hole Unterstützung; bei akuter Gefahr gilt 110 oder 112.',
      one_party: {
        preparation: 'Kläre zuerst, was genau das Problem ist: falscher Stellplatz, zu enges Parken, blockierte Einfahrt, Besucherfahrzeug oder fehlende Kennzeichnung. Mache dir bewusst, ob du eine sofortige Lösung brauchst oder eine dauerhafte Regel. Falls du ein Kennzeichen oder einen möglichen Kontakt kennst, halte das Gespräch kurz und lösungsorientiert. Vermeide Vorwürfe auf Zetteln wie "Parken lernen!"; sie entladen Frust, lösen aber selten das Muster.',
        scripts: {
          sanft: 'Hi, kurze Frage: Gehört der Wagen auf Stellplatz 12 zu euch oder zu eurem Besuch? Das ist mein Platz, und ich brauche ihn regelmäßig. Könntet ihr bitte darauf achten, dass er frei bleibt?',
          direkt: 'Mein Stellplatz war heute wieder belegt. Ich kann das nicht jedes Mal spontan lösen. Bitte parke dort nicht mehr und sag auch deinem Besuch Bescheid.',
          sachlich: 'Der graue Wagen stand am Montag und Mittwoch auf meinem zugeordneten Stellplatz. Ich möchte das ohne Ärger klären: Wie stellen wir sicher, dass die Parkplätze künftig eindeutig genutzt werden?'
        },
        steps: [
          'Prüfe kurz, ob ein offensichtliches Missverständnis vorliegt, etwa Besuch, Umzug, Handwerker oder schlecht erkennbare Markierung.',
          'Sprich die mögliche verantwortliche Person ruhig an und frage zuerst klärend, statt sofort Absicht zu unterstellen.',
          'Nenne den konkreten Platz, Zeitpunkt und die Wirkung auf dich: kein Abstellen möglich, Einfahrt blockiert, Rangieren gefährlich eng.',
          'Formuliere die Bitte eindeutig: nicht dort parken, Besuch informieren, Abstand halten oder nur kurz mit Absprache halten.',
          'Schlage eine praktische Lösung vor, zum Beispiel bessere Kennzeichnung, Austausch einer Telefonnummer für Notfälle oder Hinweis an Gäste.',
          'Halte das Gespräch kurz. Parkplatzthemen eskalieren oft, wenn aus einer Klärung eine Grundsatzdebatte über Rücksicht wird.',
          'Wenn sich nichts ändert, dokumentiere Vorfälle und wähle eine neutrale Klärung über Verwaltung, Vermietung oder Eigentümergemeinschaft.'
        ],
        reactions: [
          {
            trigger: 'Ich stand doch nur kurz da.',
            reaction: 'Das verstehe ich. Für mich ist aber gerade dieses Kurzparken schwierig, weil ich den Platz nicht planen kann. Bitte frag vorher oder nutze einen Besucherbereich.'
          },
          {
            trigger: 'Da steht doch nie jemand, also ist es egal.',
            reaction: 'Auch wenn der Platz manchmal frei aussieht, muss ich mich darauf verlassen können. Bitte behandle ihn als vergeben, auch wenn mein Auto gerade nicht dort steht.'
          },
          {
            trigger: 'Dann park du halt woanders.',
            reaction: 'Ich möchte keinen Streit. Mir geht es um eine klare Zuordnung, damit wir beide nicht jedes Mal improvisieren müssen.'
          }
        ],
        boundary: 'Wenn dein Stellplatz wiederholt ignoriert oder deine Einfahrt blockiert wird, führe keine hitzigen Parkplatzdiskussionen neben dem Auto. Beende das Gespräch ruhig, sichere Fakten und nutze die vereinbarten Hauswege über Verwaltung oder Vermietung. Eine klare Grenze heißt: Du diskutierst nicht jedes Mal neu, ob deine Nutzung berechtigt ist.'
      },
      two_party: {
        goal: 'Eine eindeutige, alltagstaugliche Parkregel schaffen, die Missverständnisse reduziert, Besuch einbindet und spontane Blockaden verhindert.',
        rules: [
          'Ihr klärt zuerst Zuständigkeit und Wahrnehmung, bevor ihr über Absicht oder Rücksicht streitet.',
          'Der Ton bleibt ruhig; niemand droht, beschimpft oder blockiert absichtlich zurück.',
          'Besucher:innen, Lieferungen und kurze Haltezeiten werden als praktische Sonderfälle mitgedacht.',
          'Die Lösung soll sichtbar und überprüfbar sein, nicht nur ein vages "Ich passe auf".'
        ],
        questions: [
          'Welche Parkflächen sind eindeutig zugeordnet und wo entstehen Missverständnisse?',
          'Welche Situationen führen am häufigsten zum Blockieren: Besuch, Lieferungen, kurze Stopps oder fehlende Markierung?',
          'Was brauchst du, damit du dich auf deinen Stellplatz oder deine Einfahrt verlassen kannst?',
          'Wie informieren wir Gäste oder neue Bewohner:innen, ohne jedes Mal persönlich hinterherzulaufen?',
          'Wann prüfen wir, ob die neue Kennzeichnung oder Regel wirklich funktioniert?'
        ],
        steps: [
          'Beide Seiten beschreiben kurz, was passiert ist, ohne Absicht zu unterstellen.',
          'Ihr prüft die konkrete Zuordnung: Nummern, Markierungen, Schilder, Besucherflächen und mögliche Engstellen.',
          'Ihr sammelt einfache Maßnahmen wie sichtbare Nummern, Hinweiszettel für Gäste oder einen Notfallkontakt für kurzfristiges Umparken.',
          'Ihr legt fest, welche Fläche ab sofort frei bleibt und wie kurze Ausnahmen vorher abgesprochen werden.',
          'Ihr vereinbart einen Review nach zwei Wochen oder nach dem nächsten Besucherwochenende.'
        ],
        agreement: 'Stellplatz 12 bleibt jederzeit für die zugeordnete Wohnung frei, auch wenn dort gerade kein Auto steht. Besuch nutzt die markierten Besucherplätze oder fragt vorher. Die Nummer wird besser sichtbar angebracht. Falls kurzfristig umgeparkt werden muss, gibt es eine kurze Nachricht. Nach zwei Wochen prüfen wir, ob es noch Vorfälle gab.'
      },
      dos: [
        'Erst klären, ob Besuch oder Unwissenheit im Spiel ist.',
        'Den konkreten Stellplatz und die gewünschte Regel benennen.',
        'Praktische Kennzeichnung oder Gästeinformation vorschlagen.',
        'Bei Wiederholung sachlich dokumentieren statt am Auto zu streiten.'
      ],
      donts: [
        'Das andere Auto absichtlich zuparken oder beschädigen.',
        'Beleidigende Zettel an die Windschutzscheibe hängen.',
        'Jede Situation sofort als Provokation deuten.',
        'Mit Drohungen starten, wenn noch keine direkte Klärung versucht wurde.'
      ],
      next_step: 'Wenn die erste Ansprache nicht reicht, bitte um eine sichtbare Regel: bessere Nummerierung, Gästeinformation oder schriftliche Hausnotiz. Bleibt das Problem bestehen, gehe über eine neutrale Stelle wie Verwaltung, Vermietung oder Eigentümergemeinschaft, statt in gegenseitige Blockaden einzusteigen.',
      related: [
        { category: 'nachbarn', slug: 'zu-laut' },
        { category: 'chef', slug: 'unklare-erwartungen' },
        { category: 'kollegen', slug: 'keine-zusammenarbeit' }
      ],
      article: {
        title: 'Parkplatz-Streit mit Nachbarn lösen: Klare Worte ohne Eskalation',
        meta: 'Parkplatz-Streit mit Nachbar:innen? So sprichst du blockierte Stellplätze, Besucherparken und Einfahrten ruhig an und findest klare Regeln.',
        intro: 'Ein belegter Parkplatz wirkt von außen wie eine Kleinigkeit. Wer betroffen ist, erlebt es anders. Du kommst müde nach Hause und dein Stellplatz ist besetzt. Du musst morgens los und die Einfahrt ist blockiert. Oder jemand parkt so eng, dass du nur mit Stress rangieren kannst. In solchen Momenten geht es nicht nur um ein Auto, sondern um Verlässlichkeit, Zeit und Respekt. Der Konflikt ist besonders heikel, weil er oft draußen, sichtbar und unter Zeitdruck entsteht. Genau dann ist die Versuchung groß, laut zu werden, einen scharfen Zettel zu schreiben oder das andere Fahrzeug zuzuparken. Das fühlt sich kurz befriedigend an, macht die Nachbarschaft aber selten besser. Eine gute Lösung beginnt mit Klarheit und bleibt deeskalierend.',
        situation: 'Parkplatzstreit entsteht in Mietshäusern, Eigentümergemeinschaften, Reihenhaussiedlungen und engen Wohnstraßen. Die Varianten sind unterschiedlich: Ein zugeordneter Stellplatz wird von Gästen genutzt, eine Einfahrt wird kurz zugestellt, Markierungen sind unklar, ein Auto ragt in die Fahrgasse, oder jemand hält "nur fünf Minuten" an einer Stelle, die für dich wichtig ist. Oft wiederholt sich das Muster. Beim ersten Mal denkst du vielleicht noch an ein Versehen. Beim dritten Mal fühlt es sich respektlos an. Dazu kommt, dass Autos emotional aufgeladen sein können: Sie stehen für Bewegungsfreiheit, Termine, Arbeit, Familie und manchmal auch für hohe Kosten. Wer ständig improvisieren muss, fühlt sich schnell nicht ernst genommen. Die andere Seite erlebt die Lage womöglich viel harmloser: Der Platz sei doch frei gewesen, der Besuch habe es nicht gewusst, oder man sei wirklich nur kurz dort gestanden.',
        causes: [
          'Eine zentrale Ursache ist Unklarheit. Nummern fehlen, Schilder sind verblasst, Stellplätze sehen ungenutzt aus oder neue Bewohner:innen wissen nicht, welche Flächen privat, gemeinschaftlich oder für Besuch gedacht sind.',
          'Ein zweiter Auslöser sind unterschiedliche Vorstellungen von "kurz" und "nicht so schlimm". Für die parkende Person ist es eine Ausnahme, für dich ist es eine Störung genau in dem Moment, in dem du den Platz brauchst.',
          'Drittens verschärft Zeitdruck die Kommunikation. Wer mit Einkaufstüten, Kind, Termin oder frühem Arbeitsbeginn ankommt, hat wenig Geduld für Erklärungen. Dann klingt selbst eine berechtigte Bitte schnell wie ein Angriff.'
        ],
        mistakes: [
          'Ein häufiger Fehler ist die Strafaktion. Das andere Fahrzeug blockieren, aggressiv hupen oder einen beleidigenden Zettel schreiben, erhöht den Druck, aber senkt die Lösungsbereitschaft. Danach geht es oft um verletzten Stolz statt um die Parkregel.',
          'Der zweite Fehler ist Gedankenlesen. Aus "Das Auto steht auf meinem Platz" wird schnell "Die machen das absichtlich". Manchmal stimmt das, oft aber nicht. Für die erste Ansprache ist eine klärende Frage wirksamer.',
          'Der dritte Fehler ist eine zu vage Bitte. "Park bitte ordentlich" lässt offen, was konkret gemeint ist. Besser ist: "Bitte halte Stellplatz 12 frei, auch wenn mein Auto gerade nicht dort steht."'
        ],
        strategy: 'Gehe in zwei Schritten vor: Erst klären, dann vereinbaren. Wenn du die verantwortliche Person kennst oder vermutest, starte mit einer Frage: "Gehört der Wagen auf Platz 12 zu euch oder zu eurem Besuch?" So lässt du eine Tür für Missverständnisse offen. Danach benennst du die Wirkung: "Das ist mein Stellplatz, und ich muss mich darauf verlassen können, dass er frei ist." Formuliere anschließend eine klare Bitte. Vermeide lange Vorträge über Rücksicht, solange die konkrete Regel noch nicht ausgesprochen ist. Wenn Besuch beteiligt ist, mache es der anderen Seite leicht, das Problem weiterzugeben: "Kannst du deinen Gästen bitte sagen, dass dieser Platz vergeben ist?" Bei wiederkehrenden Problemen hilft eine sichtbare Lösung mehr als tägliches Diskutieren. Das können bessere Nummern, ein freundlicher Hinweis an Besucher:innen, eine klare Hausnotiz, ein Austausch von Kontaktdaten für kurzfristiges Umparken oder eine abgestimmte Regel für Lieferungen sein. Wenn die Person abwehrt, bleibe beim Kern: Du willst nicht gewinnen, sondern Verlässlichkeit. Sätze wie "Ich möchte keinen Streit, ich brauche nur eine eindeutige Nutzung" halten die Eskalation niedrig. Sollte sich trotz ruhiger Ansprache nichts ändern, sammle nüchtern Fakten und gehe über die Hausverwaltung, Vermietung oder eine andere neutrale Stelle. Dieser Weg ist sinnvoller, als jedes Mal neben dem Auto neu zu streiten. Wichtig: Dieser Text ist keine Rechtsberatung. Er unterstützt dich dabei, die Situation kommunikativ zu klären und Risiken durch unnötige Eskalation zu reduzieren.',
        examples: [
          'Wenn du nach Hause kommst und dein Platz belegt ist, kannst du sagen: "Ich vermute, das ist euer Besuch. Der Wagen steht auf meinem Stellplatz. Könnt ihr bitte kurz Bescheid geben, dass er umgeparkt wird, und künftig auf die Besucherplätze hinweisen?"',
          'Wenn jemand sagt, der Platz sei doch meistens frei, kannst du antworten: "Genau deshalb ist die Zuordnung wichtig. Ich muss auch dann darauf vertrauen können, wenn ich gerade unterwegs bin. Bitte nutzt ihn nicht als freien Ausweichplatz."'
        ],
        help: 'Unterstützung ist sinnvoll, wenn der Konflikt immer wieder aufflammt oder die direkte Ansprache unsicher wird. Drohungen, absichtliches Blockieren als Vergeltung, Beschädigungen oder aggressive Begegnungen am Fahrzeug sind klare Warnzeichen. Dann solltest du nicht allein in Machtproben gehen. Hole Zeug:innen hinzu, dokumentiere sachlich und nutze offizielle oder neutrale Hauswege. Auch eine moderierte Klärung kann helfen, wenn die Fronten verhärtet sind, aber beide weiterhin im selben Umfeld leben. Manchmal ist der Parkplatz nur das sichtbare Symbol für ein größeres Nachbarschaftsproblem: fehlende Kommunikation, alte Kränkungen oder unklare Zuständigkeiten. Dann hilft es, die Lösung möglichst konkret und klein zu halten. Nicht die ganze Beziehung muss sofort gut werden; es reicht zuerst, dass der Stellplatz zuverlässig frei bleibt und niemand sein Gesicht verliert.',
        faqs: [
          {
            question: 'Soll ich einen Zettel an die Windschutzscheibe hängen?',
            answer: 'Ein kurzer, höflicher Hinweis kann bei unbekannten Fahrzeugen helfen. Wenn du weißt, wem das Auto gehört, ist ein direktes ruhiges Gespräch meist besser.'
          },
          {
            question: 'Wie spreche ich Besucherparken an?',
            answer: 'Bitte die verantwortliche Nachbarperson, Gäste klar zu informieren. Formuliere es praktisch: "Kannst du deinem Besuch bitte sagen, dass Stellplatz 12 vergeben ist?"'
          },
          {
            question: 'Was tun, wenn jemand nur kurz auf meinem Platz steht?',
            answer: 'Bleibe trotzdem klar. Gerade kurze Stopps stören, wenn du den Platz brauchst. Bitte darum, vorher zu fragen oder eine andere Fläche zu nutzen.'
          },
          {
            question: 'Wie verhindere ich, dass der Streit persönlich wird?',
            answer: 'Sprich über Platz, Zeitpunkt und Regel, nicht über Charakter. Der Satz "Ich brauche Verlässlichkeit bei Stellplatz 12" deeskaliert besser als "Du bist rücksichtslos".'
          },
          {
            question: 'Wann sollte ich die Hausverwaltung einschalten?',
            answer: 'Wenn eine ruhige direkte Klärung nicht wirkt, die Zuordnung unklar bleibt oder du dich unsicher fühlst. Nutze diesen Schritt sachlich, nicht als Drohung.'
          }
        ]
      }
    },
    {
      slug: 'muell-und-geruch',
      title: 'Müll und störende Gerüche',
      icon: '🗑️',
      summary: 'Müll steht im Flur, Tonnen werden falsch genutzt oder Gerüche ziehen in deine Wohnung. Du willst die Belastung beenden, ohne deine Nachbarschaft vorschnell anzugreifen.',
      problem: 'Im Treppenhaus stehen Müllsäcke, eine Biotonne bleibt offen, Abfälle werden neben statt in die Tonnen gestellt oder Rauch-, Koch- und Tiergerüche ziehen regelmäßig in deine Wohnung. Vielleicht weißt du nicht sicher, woher die Belastung kommt, oder frühere Hinweise sind wirkungslos geblieben. Das Thema löst schnell Ekel und Ärger aus, weil Gerüche schwer auszublenden sind und dein Zuhause betreffen. Zugleich kann eine pauschale Beschuldigung beschämend wirken und den Konflikt verschärfen. Du brauchst deshalb eine konkrete, überprüfbare Bitte, die zwischen einmaligem Missgeschick, gemeinsamem Organisationsproblem und wiederkehrender Rücksichtslosigkeit unterscheidet.',
      causes: [
        'Abfallregeln oder Zuständigkeiten sind nicht allen klar. Neue Bewohner:innen, wechselnde Abholtage, volle Tonnen oder schlecht lesbare Hinweise führen dazu, dass Müll am falschen Ort landet.',
        'Gerüche werden sehr unterschiedlich wahrgenommen. Wer an einen Koch-, Rauch- oder Tiergeruch gewöhnt ist, bemerkt möglicherweise nicht, wie stark er durch Türen, Fenster oder Lüftung in andere Wohnungen zieht.',
        'Manchmal fehlen praktische Möglichkeiten: Tonnen sind überfüllt, Deckel defekt, Abstellflächen ungünstig oder Lüftungswege problematisch. Dann reicht ein persönlicher Vorwurf nicht, weil auch eine gemeinschaftliche Lösung nötig ist.'
      ],
      safety: 'Müll und Gerüche sind meist ein Alltagskonflikt. Suche kein direktes Gespräch, wenn du dich bedroht fühlst, jemand dich einschüchtert, verfolgt oder aggressiv auf Hinweise reagiert. Bei unbekannten gefährlichen Stoffen, Feuer, starker Rauchentwicklung oder akuter gesundheitlicher Gefahr halte Abstand und nutze die dafür zuständigen Notfallstellen; bei akuter Gefahr 112 oder 110.',
      one_party: {
        preparation: 'Prüfe zunächst, was du sicher beobachtet hast und was nur eine Vermutung ist. Notiere Ort, Zeitpunkt, Art der Belastung und ihre konkrete Wirkung, ohne heimlich Personen zu überwachen. Unterscheide zwischen Müllablagerung, falscher Trennung, defekter Tonne und Geruch aus einer Wohnung. Wähle einen ruhigen Zeitpunkt und formuliere eine kleine, machbare Bitte. Wenn die Ursache unklar ist, sprich von deiner Wahrnehmung und frage offen, statt eine Person festzulegen.',
        scripts: {
          sanft: 'Hi, ich wollte etwas ansprechen, bevor es unangenehm zwischen uns wird. Seit einigen Tagen zieht ein starker Müllgeruch aus dem Flur in meine Wohnung. Weißt du, woher er kommen könnte, und können wir gemeinsam schauen, dass Säcke direkt in die Tonne gebracht werden?',
          direkt: 'Die Müllsäcke vor der Kellertür riechen inzwischen stark und blockieren den gemeinsamen Bereich. Bitte stelle dort keine Säcke mehr ab und bringe die vorhandenen heute in die vorgesehenen Tonnen.',
          sachlich: 'Am Montag und Donnerstag standen über Nacht Abfälle neben der Biotonne; der Deckel blieb offen und der Geruch zog ins Treppenhaus. Ich möchte klären, wie wir die Tonnen künftig geschlossen und den Bereich frei halten.'
        },
        steps: [
          'Sammle zwei oder drei konkrete Beobachtungen und trenne sie ausdrücklich von Vermutungen über die verursachende Person.',
          'Sprich die Person, sofern du sie sicher zuordnen kannst und dich wohlfühlst, zu einem neutralen Zeitpunkt unter vier Augen an.',
          'Beschreibe Ort, Zeitpunkt und Geruchs- oder Müllart, ohne Wörter wie ekelhaft, dreckig oder asozial auf die Person zu beziehen.',
          'Erkläre kurz die Wirkung auf dich, etwa Geruch in der Wohnung, ein nicht nutzbarer Gemeinschaftsweg oder Sorge um Hygiene.',
          'Bitte um eine konkrete Änderung: Säcke direkt entsorgen, Deckel schließen, Behälter reinigen, beim Rauchen Abstand halten oder nach dem Kochen lüften.',
          'Frage nach Hindernissen und prüfe, ob volle Tonnen, ein Defekt oder unklare Abholtage gemeinsam gelöst werden müssen.',
          'Vereinbare einen kurzen Prüfzeitraum und bleibe bei Wiederholung bei derselben sachlichen Bitte statt den Ton zu verschärfen.'
        ],
        reactions: [
          {
            trigger: 'Das kommt überhaupt nicht von mir.',
            reaction: 'Das kann sein, deshalb möchte ich nichts unterstellen. Ich schildere nur, was an diesem Ort ankommt. Hast du eine Idee, wie wir die Ursache gemeinsam eingrenzen können?'
          },
          {
            trigger: 'Du stellst dich wegen ein bisschen Geruch an.',
            reaction: 'Wir nehmen Gerüche vielleicht unterschiedlich wahr. Bei mir zieht er deutlich in die Wohnung, deshalb brauche ich eine praktische Veränderung. Lass uns mit dem geschlossenen Deckel und direkten Entsorgen anfangen.'
          },
          {
            trigger: 'Die Tonnen sind immer voll, wo soll ich es sonst hinstellen?',
            reaction: 'Dann ist das ein gemeinsames Organisationsproblem. Bitte lass die Säcke trotzdem nicht im Flur stehen. Wir können die Verwaltung zusammen auf fehlende Kapazität oder Abholung hinweisen.'
          }
        ],
        boundary: 'Wenn direkte Hinweise zu Beschimpfungen, Drohungen oder bewusster weiterer Verschmutzung führen, beende das Gespräch. Räume fremde oder unbekannte Abfälle nicht riskant selbst weg und starte keine Gegenaktionen. Dokumentiere nur das Nötige sachlich und nutze Hausverwaltung, Vermietung, Hausbeirat oder eine neutrale Vermittlung als nächste Stufe.'
      },
      two_party: {
        goal: 'Eine einfache Entsorgungs- und Lüftungsroutine vereinbaren, die Gerüche reduziert, Gemeinschaftsflächen frei hält und niemanden persönlich abwertet.',
        rules: [
          'Ihr unterscheidet sichere Beobachtungen von Vermutungen und Beschuldigungen.',
          'Ihr sprecht über Verhalten und praktische Bedingungen, nicht über Sauberkeit, Herkunft oder Lebensstil einer Person.',
          'Beide dürfen ihre Wahrnehmung schildern, auch wenn Gerüche unterschiedlich stark empfunden werden.',
          'Die Vereinbarung enthält konkrete Handlungen, Zuständigkeiten und einen Zeitpunkt zur Überprüfung.'
        ],
        questions: [
          'Welche Abfälle oder Gerüche treten wo und zu welchen Zeiten konkret auf?',
          'Welche Ursache ist sicher bekannt und was müssen wir noch gemeinsam prüfen?',
          'Welche kleinen Änderungen könnten die Belastung sofort verringern?',
          'Brauchen wir für Tonnen, Reinigung, Lüftung oder Reparaturen Unterstützung durch die Verwaltung?',
          'Woran erkennen wir nach zwei Wochen, dass die vereinbarte Routine funktioniert?'
        ],
        steps: [
          'Jede Seite beschreibt kurz ihre Wahrnehmung und Auswirkung, während die andere nur Verständnisfragen stellt.',
          'Ihr trennt individuelles Verhalten von baulichen oder organisatorischen Ursachen wie vollen Tonnen und defekter Lüftung.',
          'Ihr sammelt konkrete Maßnahmen und wählt höchstens drei, die sofort umsetzbar sind.',
          'Ihr verteilt nötige Aufgaben, etwa Tonnendeckel prüfen, Abholplan klären oder Verwaltung informieren.',
          'Ihr testet die Vereinbarung zwei Wochen und besprecht danach kurz, was funktioniert und was angepasst werden muss.'
        ],
        agreement: 'Müllsäcke werden nicht mehr im Flur oder neben den Tonnen zwischengelagert. Die Biotonne bleibt geschlossen, und ausgelaufene Reste werden direkt beseitigt. Bei vollen Tonnen informieren wir die Verwaltung, statt Abfälle im Gemeinschaftsbereich abzustellen. Nach zwei Wochen prüfen wir gemeinsam, ob Geruch und Ablagerungen zurückgegangen sind.'
      },
      dos: [
        'Beobachtung, Vermutung und Wirkung sprachlich sauber trennen.',
        'Eine konkrete Entsorgungs- oder Lüftungsroutine vorschlagen.',
        'Geruchswahrnehmung ernst nehmen, ohne über Absicht zu streiten.',
        'Bauliche und organisatorische Ursachen mitprüfen.'
      ],
      donts: [
        'Menschen als dreckig oder ekelhaft beschämen.',
        'Ohne sichere Grundlage einzelne Wohnungen öffentlich beschuldigen.',
        'Fremden Müll vor eine Wohnungstür zurückstellen.',
        'Mit vermeintlichen Vorschriften oder Konsequenzen drohen, die du nicht geprüft hast.'
      ],
      next_step: 'Wenn die Belastung nach der ersten Vereinbarung bleibt, kläre noch einmal knapp, ob die Maßnahme umgesetzt wurde oder die Ursache falsch eingeschätzt war. Bei gemeinschaftlichen Flächen, defekten Behältern oder Lüftungsproblemen beziehe die Hausverwaltung oder Vermietung sachlich ein. Eine Mediation kann helfen, wenn persönliche Vorwürfe bereits jede praktische Klärung blockieren.',
      related: [
        { category: 'nachbarn', slug: 'haustiere-stoeren' },
        { category: 'nachbarn', slug: 'zu-laut' },
        { category: 'freunde', slug: 'grenzen-nicht-respektiert' }
      ],
      article: {
        title: 'Müll und Geruch vom Nachbarn ansprechen: Sachlich klären statt beschämen',
        meta: 'Müll oder Gerüche aus der Nachbarschaft belasten dich? So klärst du Ursache und Wirkung respektvoll und findest eine praktische Vereinbarung.',
        intro: 'Ein Müllsack im Flur oder ein Geruch, der durch die Wohnungstür zieht, kann den ganzen Feierabend bestimmen. Du kannst die Belastung nicht einfach dort lassen, wo sie entsteht, denn sie erreicht deinen privaten Rückzugsort. Gleichzeitig ist das Thema heikel: Geruch und Sauberkeit berühren Scham, Gewohnheiten und persönliche Lebensführung. Wer mit Ekel oder einer öffentlichen Beschuldigung startet, löst daher oft Abwehr aus. Wirksamer ist ein Vorgehen, das präzise benennt, was ankommt, Unsicherheiten offenlässt und eine kleine konkrete Veränderung verlangt.',
        situation: 'Die Bandbreite reicht von abgestellten Müllsäcken, offenen Bio- oder Restmülltonnen und falsch entsorgten Abfällen bis zu Rauch, intensivem Kochen, Tiergeruch oder einer ungünstigen Lüftung. Manchmal tritt die Belastung nur nach der Abholung oder an warmen Tagen auf, manchmal täglich zu ähnlichen Zeiten. Besonders schwierig ist eine unklare Quelle. Gerüche wandern durch Treppenhäuser, Schächte, Fenster und Lüftungen; was eindeutig aus einer Richtung zu kommen scheint, kann anderswo entstehen. In Mehrfamilienhäusern kommt außerdem eine organisatorische Ebene hinzu: Sind Tonnen regelmäßig voll, Deckel kaputt oder Abholpläne unklar, lässt sich das Problem nicht allein durch mehr Rücksicht einer Person lösen.',
        causes: [
          'Menschen nehmen Gerüche verschieden wahr und gewöhnen sich an die eigene Umgebung. Eine Person bemerkt deshalb möglicherweise ehrlich nicht, wie intensiv Rauch, Biomüll oder Tiergeruch bei dir ankommt. Diese unterschiedliche Wahrnehmung macht deine Belastung nicht unwichtig, ist aber ein Grund, zunächst Wirkung statt Absicht anzusprechen.',
          'Oft wirken kleine Alltagsentscheidungen zusammen: Ein Sack soll nur kurz vor der Tür stehen, der Tonnendeckel bleibt wegen voller Behälter offen oder nach dem Kochen wird in den Hausflur gelüftet. Jede Handlung erscheint einzeln harmlos, wiederholt erzeugt sie ein belastendes Muster.',
          'Auch bauliche und gemeinschaftliche Bedingungen spielen eine Rolle. Undichte Türen, schlecht geführte Abluft, fehlende Tonnenkapazität oder selten gereinigte Stellplätze verstärken Gerüche. Dann braucht es neben dem Gespräch eine organisatorische Prüfung, ohne dass Nachbar:innen sich gegenseitig zu allein Verantwortlichen machen.'
        ],
        mistakes: [
          'Der häufigste Fehler ist eine Beschämung. Aussagen wie "Bei euch stinkt es immer" greifen eine Person und ihren Haushalt an. Danach verteidigt sie ihre Würde, statt über einen offenen Tonnendeckel oder eine Lüftungszeit zu sprechen.',
          'Ebenso problematisch ist eine öffentliche Anschuldigung im Hauschat oder am Schwarzen Brett, solange die Ursache nicht sicher feststeht. Das erzeugt Lager und kann eine falsche Person treffen. Eine neutrale Frage oder direkte ruhige Ansprache ist meist fairer.',
          'Gegenaktionen verschärfen das Muster. Fremde Säcke vor eine Tür zu stellen, Abfälle umzuräumen oder Gerüche absichtlich zurückzugeben, schafft einen Machtkampf und kann zusätzliche Gesundheits- oder Sicherheitsrisiken verursachen.'
        ],
        strategy: 'Bereite die Klärung mit drei Angaben vor: Was hast du wahrgenommen, wann und wo tritt es auf, und was soll sich konkret ändern? Sage zum Beispiel: "Seit Montag steht abends ein starker Müllgeruch im Treppenhaus und zieht durch meine Tür. Können wir darauf achten, dass Säcke direkt in die Tonnen kommen und der Deckel geschlossen bleibt?" Wenn du die Quelle nicht sicher kennst, sage das ausdrücklich. Eine Formulierung wie "Ich versuche herauszufinden, woher es kommt" verhindert, dass deine Beobachtung als Anklage klingt. Frage anschließend nach Hindernissen. Vielleicht ist die Tonne zu klein, ein Deckel defekt oder die Abholung ausgefallen. Dadurch wird aus einem persönlichen Vorwurf eine lösbare Aufgabe. Bei Rauch-, Koch- oder Tiergerüchen hilft es, über Zeiten und Wege zu sprechen: ein anderes Fenster nutzen, die Wohnungstür geschlossen halten, früher lüften oder einen Behälter häufiger reinigen. Verlange nicht Geruchslosigkeit, sondern eine nachvollziehbare Verringerung. Legt eine kurze Testphase fest. Nach ein oder zwei Wochen lässt sich ruhiger prüfen, ob die Maßnahme greift. Bleibt das Problem bestehen, obwohl beide Seiten etwas versuchen, sollte eine neutrale Stelle bauliche oder gemeinschaftliche Ursachen ansehen. Dieser Ratgeber ist keine Rechtsberatung; er unterstützt eine sichere, respektvolle Kommunikation und praktische Deeskalation.',
        examples: [
          'Bei unklarer Quelle kannst du sagen: "Seit einigen Abenden riecht es im zweiten Stock stark nach Biomüll. Ich weiß nicht sicher, woher es kommt. Ist dir das auch aufgefallen, und können wir prüfen, ob irgendwo ein Sack oder ein offener Behälter steht?"',
          'Bei einer wiederkehrenden Ablagerung hilft Klarheit: "Die Säcke vor der Kellertür riechen stark und der Weg wird enger. Bitte bring sie direkt in die Tonne. Wenn die regelmäßig voll ist, melde ich das gern gemeinsam mit dir der Verwaltung."'
        ],
        help: 'Abstand ist sinnvoll, wenn Hinweise aggressiv beantwortet werden, du Angst vor einer Begegnung hast oder jemand Müll gezielt als Einschüchterung einsetzt. Dann musst du nicht weiter allein verhandeln. Nutze eine neutrale Kontaktperson, Hausverwaltung, Vermietung oder Mediation und dokumentiere Vorfälle knapp, ohne Nachbar:innen zu überwachen. Unbekannte Substanzen, Feuer, starke Rauchentwicklung oder akute körperliche Beschwerden gehören nicht in ein normales Konfliktgespräch; halte Abstand und hole passende Hilfe. Auch ohne Gefahr kann professionelle Vermittlung entlasten, wenn Ekel und gegenseitige Beschämung bereits so stark sind, dass niemand mehr über konkrete Maßnahmen spricht.',
        faqs: [
          {
            question: 'Wie spreche ich Geruch an, ohne jemanden zu beleidigen?',
            answer: 'Beschreibe Ort, Zeit und Wirkung statt die Person. Bitte um eine konkrete Änderung und räume ein, wenn du die Quelle nicht sicher kennst.'
          },
          {
            question: 'Was kann ich tun, wenn ich nicht weiß, woher der Geruch kommt?',
            answer: 'Frage neutral, ob andere ihn ebenfalls bemerken, und prüft gemeinsame Bereiche oder technische Ursachen. Vermeide öffentliche Verdächtigungen.'
          },
          {
            question: 'Wie reagiere ich auf regelmäßig volle Mülltonnen?',
            answer: 'Behandle das als Organisationsproblem. Sammelt konkrete Beobachtungen und bittet Verwaltung oder Vermietung um eine praktikable Lösung, statt Säcke im Flur zu lagern.'
          },
          {
            question: 'Soll ich fremden Müll selbst wegbringen?',
            answer: 'Bei gewöhnlichen, sicher handhabbaren Abfällen kann eine einmalige pragmatische Hilfe möglich sein. Unbekannte oder riskante Abfälle solltest du nicht anfassen und Gegenaktionen vermeiden.'
          },
          {
            question: 'Wann breche ich die direkte Klärung ab?',
            answer: 'Bei Drohungen, aggressivem Verhalten, gezielter Einschüchterung oder akuter Gefahr geht Sicherheit vor. Hole Unterstützung und führe kein weiteres Gespräch allein.'
          }
        ]
      }
    },
    {
      slug: 'haustiere-stoeren',
      title: 'Haustiere stören die Nachbarschaft',
      icon: '🐾',
      summary: 'Bellen, Geruch, Hinterlassenschaften oder freilaufende Tiere belasten das Zusammenleben. Du willst klare Rücksicht, ohne Tier oder Halter:in pauschal abzuwerten.',
      problem: 'Ein Hund bellt wiederholt, eine Katze läuft in deinen Garten, Tierhaare oder Gerüche sammeln sich im Gemeinschaftsbereich oder Hinterlassenschaften bleiben liegen. Vielleicht hast du Angst vor dem Tier, wirst morgens geweckt oder kannst bestimmte Flächen nicht mehr entspannt nutzen. Für die haltende Person ist das Tier oft ein wichtiger Teil des Lebens; Kritik wird deshalb leicht als Angriff auf die Beziehung zum Tier verstanden. Umgekehrt darf deine Belastung nicht mit dem Satz abgetan werden, Tiere seien eben so. Eine gute Klärung trennt das Tier als Lebewesen von konkretem, veränderbarem Verhalten und sucht eine Routine, die Sicherheit, Ruhe und Alltag für beide Seiten verbessert.',
      causes: [
        'Die haltende Person erlebt viele Situationen nicht selbst. Bellen während ihrer Abwesenheit, Geruch im Flur oder ein Ausflug in fremde Bereiche kann ihr verborgen bleiben, solange niemand konkrete Rückmeldung gibt.',
        'Unterschiedliche Erfahrungen mit Tieren prägen die Wahrnehmung. Was für eine Person freundliche Neugier ist, kann bei einer anderen Angst, Allergiebeschwerden oder das Gefühl auslösen, im eigenen Bereich nicht sicher zu sein.',
        'Manche Störungen entstehen aus einer ungeeigneten Routine statt aus Gleichgültigkeit: zu lange Abwesenheit, unklare Wege durch Gemeinschaftsflächen, fehlende Reinigung oder eine Leine, die an Engstellen nicht kurz geführt wird.'
      ],
      safety: 'Tierbedingte Störungen sind meist ein Alltagskonflikt. Wenn ein Tier dich akut angreift oder du unmittelbar gefährdet bist, bringe Abstand zwischen euch und hole passende Hilfe; bei akuter Gefahr 110 oder 112. Suche auch kein direktes Gespräch, wenn die haltende Person dich bedroht, verfolgt oder einschüchtert. Tierwohl und persönliche Sicherheit haben Vorrang vor einem spontanen Klärungsversuch.',
      one_party: {
        preparation: 'Notiere konkrete Situationen: wann, wie lange und wo bellt das Tier, welche Fläche wird betreten oder welche Hinterlassenschaft bleibt zurück? Unterscheide Beobachtung von Deutung; du weißt nicht automatisch, ob ein Tier schlecht erzogen, allein oder krank ist. Entscheide, welche Veränderung du brauchst, etwa eine ruhigere Morgenroutine, kurze Leine im Treppenhaus, Reinigung oder eine Begrenzung zum Garten. Sprich die Person ohne Publikum und nicht in einem Moment an, in dem das Tier gerade Unruhe auslöst.',
        scripts: {
          sanft: 'Hi, ich möchte dir etwas rückmelden, das du vielleicht nicht mitbekommst. Dein Hund bellt an Werktagen oft länger, nachdem du gegangen bist, und ich höre es deutlich im Homeoffice. Können wir gemeinsam schauen, was helfen könnte?',
          direkt: 'Ich brauche, dass dein Hund im engen Treppenhaus kurz an der Leine geführt wird. Er springt wiederholt auf mich zu, und ich fühle mich dabei nicht sicher. Bitte halte ihn dort künftig nah bei dir.',
          sachlich: 'Am Dienstag, Mittwoch und Freitag war zwischen etwa 7:15 und 8 Uhr anhaltendes Bellen aus deiner Wohnung zu hören. Ich möchte die Beobachtung konkret weitergeben und mit dir eine zweiwöchige Lösung testen.'
        },
        steps: [
          'Kläre für dich, welches konkrete Verhalten dich belastet, statt das Tier oder die gesamte Haltung zu bewerten.',
          'Wähle einen ruhigen Moment ohne akute Unruhe und frage, ob die Person kurz Zeit für eine Beobachtung hat.',
          'Nenne Ort, Zeitpunkt, Häufigkeit und Wirkung auf dich in wenigen Sätzen.',
          'Frage, ob die Person das Verhalten kennt und welche Erklärung oder Schwierigkeit sie sieht.',
          'Bitte um eine konkrete Anpassung, beispielsweise kurze Leine, direkte Reinigung, Sichtschutz oder veränderte Betreuungsroutine.',
          'Vereinbart ein unaufgeregtes Signal für neue Vorfälle, das keine sofortige Grundsatzdiskussion auslöst.',
          'Prüft nach zwei Wochen, ob Häufigkeit und Belastung erkennbar zurückgegangen sind.'
        ],
        reactions: [
          {
            trigger: 'Mein Tier tut doch niemandem etwas.',
            reaction: 'Ich behaupte nicht, dass es gefährlich ist. Wenn es im engen Flur auf mich zukommt, fühle ich mich trotzdem unsicher. Bitte führe es dort kurz bei dir, damit wir beide entspannt vorbeikommen.'
          },
          {
            trigger: 'Bellen ist nun einmal normal.',
            reaction: 'Einzelnes Bellen gehört dazu. Ich spreche die längeren Phasen zu diesen Zeiten an, weil sie meinen Alltag deutlich beeinträchtigen. Welche Veränderung können wir für genau diese Situation testen?'
          },
          {
            trigger: 'Du hasst einfach Tiere.',
            reaction: 'Mir geht es nicht um eine Bewertung von Tieren. Ich möchte das konkrete Bellen und die Situation im Treppenhaus lösen. Lass uns bei diesen beiden Punkten bleiben.'
          }
        ],
        boundary: 'Wenn das Tier unkontrolliert auf dich losgeht, du dich akut unsicher fühlst oder die haltende Person aggressiv reagiert, beende die Begegnung und schaffe Abstand. Provoziere, füttere oder berühre das Tier nicht, um eine Reaktion zu beweisen. Nutze bei wiederkehrender Belastung eine neutrale Stelle wie Hausverwaltung, Vermietung oder Mediation, statt täglich direkt zu konfrontieren.'
      },
      two_party: {
        goal: 'Eine verlässliche Tierroutine vereinbaren, die vermeidbare Störungen reduziert und zugleich respektiert, dass normale Tiergeräusche und Tierhaltung zum Alltag gehören.',
        rules: [
          'Ihr sprecht über konkrete Situationen, nicht darüber, ob jemand ein guter Mensch oder eine gute Tierhalterin beziehungsweise ein guter Tierhalter ist.',
          'Angst, Allergien und Ruhebedürfnisse dürfen benannt werden, ohne sie lächerlich zu machen.',
          'Das Tier wird weder provoziert noch bestraft, um den Nachbarschaftskonflikt auszutragen.',
          'Ihr testet wenige konkrete Maßnahmen und bewertet ihre Wirkung zu einem vereinbarten Termin.'
        ],
        questions: [
          'Welches Verhalten tritt wann und wo auf, und was davon bekommt die haltende Person bisher nicht mit?',
          'Welche Wirkung hat die Situation auf Ruhe, Sicherheit oder Nutzung gemeinsamer Flächen?',
          'Welche normale Tierroutine ist der haltenden Person wichtig und muss in der Lösung berücksichtigt werden?',
          'Welche zwei oder drei Änderungen lassen sich sofort und ohne Überforderung testen?',
          'Wie geben wir Rückmeldung und wann überprüfen wir gemeinsam die Wirkung?'
        ],
        steps: [
          'Beide beschreiben nacheinander Beobachtung, Wirkung und Bedürfnis, ohne Motive zu unterstellen.',
          'Ihr grenzt einzelne Vorfälle von wiederkehrenden Mustern ab und priorisiert die belastendste Situation.',
          'Ihr sammelt praktische Anpassungen für Betreuung, Wege, Leine, Reinigung, Rückzugsorte oder Begrenzungen.',
          'Ihr wählt zwei Maßnahmen, legt ein neutrales Rückmeldesignal fest und startet eine zweiwöchige Testphase.',
          'Beim Review betrachtet ihr konkrete Veränderungen und passt die Routine an, statt alte Vorwürfe neu aufzuzählen.'
        ],
        agreement: 'Im Treppenhaus wird der Hund kurz an der Leine auf der körperabgewandten Seite geführt. Für die morgendliche Abwesenheit testet die haltende Person zwei Wochen lang eine angepasste Betreuung. Längeres Bellen wird einmal per kurzer Nachricht mit Uhrzeit gemeldet, ohne Diskussion im selben Moment. Nach zwei Wochen vergleichen wir die Beobachtungen und passen die Lösung an.'
      },
      dos: [
        'Konkretes Tierverhalten statt die Tierhaltung insgesamt ansprechen.',
        'Angst oder Allergien ruhig und ohne Rechtfertigungsdebatte benennen.',
        'Der haltenden Person Beobachtungen aus ihrer Abwesenheit zugänglich machen.',
        'Wenige Maßnahmen mit einem festen Review testen.'
      ],
      donts: [
        'Das Tier provozieren, füttern, anfassen oder erschrecken.',
        'Die Person als verantwortungslos oder das Tier als böse abstempeln.',
        'Einzelne normale Tiergeräusche zu einem dauernden Charaktervorwurf machen.',
        'In einer akuten, unübersichtlichen Tiersituation eine lange Diskussion beginnen.'
      ],
      next_step: 'Wenn die vereinbarte Routine keine erkennbare Wirkung hat, gebt euch eine zweite kurze Klärung mit konkreten Beobachtungen aus der Testphase. Prüft, ob Betreuung, Training, räumliche Anpassungen oder eine neutrale Moderation nötig sind. Bei Gemeinschaftsflächen kann die Hausverwaltung oder Vermietung organisatorisch unterstützen. Sicherheit und Deeskalation gehen vor wiederholten direkten Konfrontationen.',
      related: [
        { category: 'nachbarn', slug: 'muell-und-geruch' },
        { category: 'nachbarn', slug: 'zu-laut' },
        { category: 'freunde', slug: 'grenzen-nicht-respektiert' }
      ],
      article: {
        title: 'Wenn Haustiere die Nachbarschaft stören: Bellen, Geruch und Grenzen ruhig klären',
        meta: 'Bellen, Tiergeruch oder freilaufende Haustiere sorgen für Streit? So sprichst du Belastungen konkret an und vereinbarst faire Rücksicht.',
        intro: 'Konflikte um Haustiere werden schnell persönlich. Für die eine Seite ist der Hund oder die Katze ein Familienmitglied, für die andere sind Bellen, Geruch, Hinterlassenschaften oder unerwartete Begegnungen eine echte Belastung. Beide Erfahrungen können gleichzeitig bestehen. Du musst ein Tier nicht ablehnen, um morgens Ruhe oder Abstand im Treppenhaus zu brauchen. Und eine haltende Person muss Kritik nicht als Forderung verstehen, ihr Tier abzuschaffen. Eine tragfähige Klärung beginnt dort, wo ihr das konkrete Verhalten vom Wert des Tieres und vom Charakter des Menschen trennt.',
        situation: 'Typische Konflikte entstehen durch längeres Bellen während der Abwesenheit, frühe Geräusche, freilaufende Tiere in fremden Gärten, Haare und Geruch im Hausflur, nicht beseitigte Hinterlassenschaften oder enge Begegnungen ohne kurze Leine. Manche Menschen haben Allergien oder Angst, andere sorgen sich um Beete, Kinder oder eigene Tiere. Gleichzeitig gehören einzelne Laute, Bewegungen und Begegnungen zu einem normalen Leben mit Haustieren. Entscheidend ist daher nicht völlige Störungsfreiheit. Es geht darum, wiederkehrende vermeidbare Belastungen zu erkennen und so zu verändern, dass gemeinsames Wohnen planbarer wird.',
        causes: [
          'Ein wesentlicher Perspektivunterschied entsteht durch Anwesenheit. Ein Hund kann vor allem bellen, nachdem die haltende Person das Haus verlassen hat. Sie erlebt dann einen ruhigen Abschied, während du die folgende halbe Stunde hörst. Konkrete Zeitangaben sind deshalb hilfreiche Information und nicht automatisch eine Anklage.',
          'Nähe zu Tieren wird unterschiedlich erlebt. Ein freudig heranlaufender Hund wirkt auf seine Bezugsperson freundlich, kann bei dir aber Angst auslösen oder eine körperliche Grenze überschreiten. Über diese Wirkung lässt sich sprechen, ohne dem Tier Gefährlichkeit zuzuschreiben.',
          'Auch Routinen können unpassend geworden sein. Veränderte Arbeitszeiten, fehlende Betreuung, eine offene Gartengrenze oder ein ungünstiger Weg durch das Treppenhaus schaffen wiederkehrende Situationen. Oft helfen kleine organisatorische Anpassungen mehr als eine Debatte über Erziehung.'
        ],
        mistakes: [
          'Pauschale Urteile blockieren die Klärung. "Du hast dein Tier nicht im Griff" bewertet die gesamte Haltung und lädt zur Verteidigung ein. "Gestern bellte der Hund von 7:15 bis ungefähr 7:45 Uhr" liefert dagegen eine Beobachtung, mit der die andere Person arbeiten kann.',
          'Ein zweiter Fehler ist, das Tier selbst zum Austragungsort zu machen. Anschreien, Erschrecken, Füttern, Anfassen oder absichtliches Reizen ist weder sicher noch fair. Die Verantwortung für eine Veränderung wird mit der haltenden Person geklärt.',
          'Auch Bagatellisierung schadet. Wer Angst, Schlafmangel oder Allergiebeschwerden als Tierfeindlichkeit abtut, übersieht die Wirkung. Umgekehrt sollte nicht jedes einzelne Bellen als Beweis dauernder Rücksichtslosigkeit behandelt werden.'
        ],
        strategy: 'Sammle zunächst wenige konkrete Beispiele. Notiere Zeitpunkt, Dauer, Ort und Wirkung, ohne das Tier oder den Haushalt zu überwachen. Wähle dann einen ruhigen Moment, in dem weder Mensch noch Tier aufgeregt sind. Ein guter Einstieg lautet: "Ich möchte dir etwas sagen, das du vielleicht nicht mitbekommst. Wenn du morgens gehst, bellt dein Hund häufig noch länger, und ich kann dann nicht weiter schlafen." Frage, ob die Person das Verhalten kennt. Das öffnet Raum für Informationen, ohne deine Belastung zurückzunehmen. Bitte anschließend um eine klar begrenzte Veränderung. Im Flur kann das eine kurze Leine und die körperabgewandte Seite sein, im Garten ein Sichtschutz oder eine Begrenzung, bei Hinterlassenschaften eine direkte Reinigung. Bei Bellen ist oft eine Testphase sinnvoll: andere Betreuung, veränderte Abfahrtsroutine oder fachkundige Unterstützung durch eine geeignete Tierfachperson. Du musst die Lösung nicht selbst diagnostizieren. Vereinbart stattdessen, wie du sachlich Rückmeldung gibst, etwa eine kurze Nachricht mit Uhrzeit statt wiederholtem Klingeln. Prüft nach zwei Wochen, ob Häufigkeit oder Dauer sinken. Wenn nicht, könnt ihr die Maßnahme anpassen oder eine neutrale Moderation einbeziehen. Dieser Ratgeber bietet keine Rechtsberatung; sein Fokus liegt auf Kommunikation, Sicherheit und deeskalierenden Alltagslösungen.',
        examples: [
          'Für eine Begegnung im Hausflur kannst du sagen: "Ich weiß, dass dein Hund freundlich gemeint auf mich zukommt. Ich erschrecke dabei trotzdem. Bitte nimm ihn an der Treppe kurz zu dir und geh auf der anderen Seite vorbei."',
          'Bei Bellen in Abwesenheit hilft eine informative Form: "Am Montag und Mittwoch begann das Bellen kurz nach sieben und dauerte jeweils ungefähr eine halbe Stunde. Möchtest du, dass ich dir für zwei Wochen kurz die Zeiten sende, damit du eine neue Routine prüfen kannst?"'
        ],
        help: 'Zusätzliche Unterstützung ist sinnvoll, wenn ihr das Muster trotz ernsthafter Versuche nicht verändert oder Gespräche nur noch gegenseitige Vorwürfe erzeugen. Eine Mediation kann die Nachbarschaftsebene sortieren; für Verhalten oder Wohlbefinden des Tieres kann die haltende Person geeignete fachliche Unterstützung suchen. Du selbst musst keine Diagnose stellen. Halte Abstand, wenn ein Tier unkontrolliert auf dich zukommt oder eine Situation unübersichtlich ist. Drohungen und Einschüchterung durch Menschen sind ebenfalls kein gewöhnlicher Haustierstreit. Brich dann direkte Gespräche ab, hole Unterstützung und nutze bei akuter Gefahr 110 oder 112.',
        faqs: [
          {
            question: 'Wie sage ich, dass mich ein Hund stört, ohne tierfeindlich zu wirken?',
            answer: 'Bleibe bei Verhalten, Zeitpunkt und Wirkung. Du kannst das Tier respektieren und trotzdem eine kurze Leine, weniger Bellen oder saubere Gemeinschaftsflächen brauchen.'
          },
          {
            question: 'Was, wenn die haltende Person das Bellen nie selbst hört?',
            answer: 'Gib wenige konkrete Zeitangaben weiter und biete für eine begrenzte Testphase sachliche Rückmeldung an. Vermeide dauernde Nachrichten oder Überwachung.'
          },
          {
            question: 'Darf ich meine Angst vor einem Tier offen ansprechen?',
            answer: 'Ja. Beschreibe ruhig, welche Distanz oder Führung du brauchst. Du musst weder deine Angst beweisen noch dem Tier böse Absicht unterstellen.'
          },
          {
            question: 'Was hilft bei Hinterlassenschaften oder Tiergeruch im Flur?',
            answer: 'Bitte um direkte Beseitigung und eine feste Reinigungsroutine. Klärt zusätzlich, ob Behälter, Lüftung oder Gemeinschaftsregeln praktisch verbessert werden müssen.'
          },
          {
            question: 'Wann sollte ich nicht mehr direkt das Gespräch suchen?',
            answer: 'Wenn Mensch oder Tier dich akut gefährden, du bedroht wirst oder jede Ansprache aggressiv endet. Schaffe Abstand, hole neutrale Unterstützung und nutze im Notfall 110 oder 112.'
          }
        ]
      }
    },
    grundstuecksgrenzen, beschwertSichStaendig,
  ]
};
