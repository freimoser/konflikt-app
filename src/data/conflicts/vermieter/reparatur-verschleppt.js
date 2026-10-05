export default {
  published: '2026-10-01',
  slug: 'reparatur-verschleppt',
  title: 'Vermieter:in lässt Reparatur liegen',
  icon: '🔧',
  summary: 'Die Heizung bleibt kalt, der Wasserhahn tropft, das Fenster schließt nicht: Du hast den Mangel gemeldet, aber Vermieter:in oder Hausverwaltung reagieren nicht. So hakst du höflich und klar nach.',
  problem: 'Du hast den Schaden längst gemeldet, vielleicht am Telefon, vielleicht per Mail. Seitdem ist nichts passiert. Die Heizung im Schlafzimmer bleibt lauwarm, der Wasserhahn tropft die ganze Nacht, das Fenster im Bad lässt sich nicht richtig schließen. Bei der Hausverwaltung erreichst du nur eine Bandansage, und deine Vermieterin sagt am Telefon freundlich „Ich kümmere mich“, ohne dass sich ein Handwerker meldet. Mit jeder Woche wächst dein Ärger, aber auch die Unsicherheit: Wie oft darfst du nachfragen, ohne als anstrengend zu gelten? Du willst das Verhältnis nicht belasten, denn du wohnst hier und bist auf ein gutes Miteinander angewiesen. Gleichzeitig ist es dein Zuhause, und ein Mangel, der liegen bleibt, macht den Alltag spürbar schwerer.',
  causes: [
    'Viele Meldungen gehen schlicht unter: Ein Anruf ohne Notiz, eine Mail an die falsche Adresse oder eine Sachbearbeitung, die gewechselt hat. Ohne schriftliche, eindeutige Meldung fehlt oft einfach der Vorgang, an dem jemand weiterarbeitet.',
    'Hausverwaltungen betreuen oft sehr viele Wohnungen, und Handwerksbetriebe sind ausgebucht. Was für dich dringend ist, landet dort auf einem langen Stapel, wenn die Dringlichkeit nicht klar beschrieben ist.',
    'Manche Vermieter:innen scheuen Kosten oder Aufwand und hoffen, dass sich das Problem von selbst erledigt. Freundliches, aber beharrliches und dokumentiertes Nachfragen macht es schwerer, eine Meldung auszusitzen.'
  ],
  safety: 'Eine verschleppte Reparatur ist ärgerlich, aber meistens ein Alltagskonflikt, den du mit klarer Kommunikation voranbringen kannst. Anders ist es, wenn du bedroht, beschimpft oder eingeschüchtert wirst, weil du einen Mangel meldest, wenn jemand deine Wohnung gegen deinen Willen betritt, wenn dir mit Nachteilen gedroht wird oder du wegen Herkunft, Religion, Behinderung, Geschlecht oder Familienform anders behandelt wirst. Dann ist kein weiteres Gesprächsskript der richtige Weg. Dokumentiere jeden Vorfall mit Datum, bewahre Nachrichten und Schreiben auf und hol dir Unterstützung beim Mieterverein, einer Mieterberatung oder anwaltlich. Geht von einem Schaden eine akute Gefahr aus, etwa Gasgeruch, ein Wasserrohrbruch oder offene Stromleitungen, oder bist du selbst in Gefahr, wählst du sofort 112 oder 110.',
  one_party: {
    preparation: 'Sammle zuerst, was du hast: Wann hast du den Mangel zum ersten Mal bemerkt, wann und auf welchem Weg hast du ihn gemeldet, wer hat was geantwortet? Mach aktuelle Fotos oder ein kurzes Video mit Datum und notiere, wie sich der Mangel auf deinen Alltag auswirkt, zum Beispiel ein kaltes Kinderzimmer oder Wasser auf dem Boden. Überlege dir eine konkrete Bitte: einen Rückruf, einen Handwerkstermin, eine Terminbestätigung bis zu einem bestimmten Wunschtermin. Und nenn gleich mögliche Zeiten, zu denen du zu Hause bist. Welche Rechte du bei einem Mangel hast, klärst du nicht in diesem Gespräch, sondern bei Bedarf beim Mieterverein oder anwaltlich.',
    scripts: {
      sanft: 'Hallo, hier ist [Name] aus der Wohnung im zweiten Stock. Ich melde mich noch einmal wegen der Heizung im Schlafzimmer, die ich Anfang des Monats gemeldet habe. Ich weiß, dass bei Ihnen viel los ist. Mir wäre sehr geholfen, wenn Sie mir sagen könnten, wann ungefähr jemand vorbeikommen kann. Ich bin in den nächsten Tagen gut erreichbar und richte mich gern nach dem Termin.',
      direkt: 'Ich habe den tropfenden Wasserhahn in der Küche vor drei Wochen gemeldet und seitdem keine Rückmeldung bekommen. Das belastet mich inzwischen, weil es jeden Tag schlimmer wird. Ich bitte Sie, mir bis Ende dieser Woche einen Termin für die Reparatur zu nennen. Ich schicke Ihnen außerdem noch eine kurze Mail mit Fotos, damit alles schriftlich vorliegt.',
      sachlich: 'Kurze Nachricht zum Mitschicken: „Guten Tag, am [Datum] habe ich Ihnen gemeldet, dass sich das Badfenster in meiner Wohnung nicht mehr schließen lässt. Bisher habe ich keine Rückmeldung erhalten. Im Anhang finden Sie aktuelle Fotos vom [Datum]. Ich bitte Sie freundlich, mir bis [Wunschtermin] mitzuteilen, wann die Reparatur erfolgen kann. Ich bin in der Regel werktags ab [Uhrzeit] erreichbar. Vielen Dank und freundliche Grüße, [Name, Adresse, Wohnung].“'
    },
    steps: [
      'Atme durch und schreib in Ruhe auf, was wann gemeldet wurde, statt verärgert sofort anzurufen.',
      'Mach aktuelle Fotos oder ein kurzes Video und notiere das Datum dazu.',
      'Ruf freundlich an oder sprich die Person direkt an und frag nach dem Stand, ohne Vorwürfe.',
      'Formuliere eine konkrete Bitte mit Wunschtermin, zum Beispiel einen Handwerkstermin bis Ende der Woche.',
      'Fasse das Telefonat oder Gespräch direkt danach in einer kurzen Mail zusammen und häng die Fotos an.',
      'Notiere dir, wann du wieder nachfragst, falls bis zu deinem Wunschtermin nichts passiert.',
      'Bleibt es still, hol dir Rat beim Mieterverein oder einer Mieterberatung, bevor du selbst etwas unternimmst.'
    ],
    reactions: [
      {
        trigger: 'Da müssen Sie sich gedulden, die Handwerker sind alle ausgebucht.',
        reaction: 'Das glaube ich Ihnen, und ich will niemanden hetzen. Mir würde es schon helfen zu wissen, ob ein Auftrag erteilt wurde und wann ungefähr jemand kommen kann. Können Sie mir das bis Freitag kurz schriftlich bestätigen?'
      },
      {
        trigger: 'Das ist doch nicht so schlimm, das hat Zeit.',
        reaction: 'Für mich ist es im Alltag schon eine echte Belastung, weil das Zimmer abends kaum warm wird. Ich schicke Ihnen gern Fotos und beschreibe, wie es sich auswirkt. Ich bitte trotzdem um einen konkreten Termin.'
      },
      {
        trigger: 'Das haben Sie bestimmt selbst kaputt gemacht.',
        reaction: 'Das sehe ich anders, aber ich möchte darüber jetzt nicht streiten. Mir geht es erst einmal darum, dass sich jemand den Schaden ansieht. Wenn Sie Fragen zur Ursache haben, klären wir die gern, sobald der Zustand begutachtet ist.'
      }
    ],
    boundary: 'Du musst dich nicht dafür entschuldigen, dass du einen Mangel meldest und nachfragst. Höflich bleiben heißt nicht, endlos zu warten. Wenn deine freundlichen, schriftlichen Nachfragen ohne Antwort bleiben, hör auf, am Telefon zu bitten, und lass dich beim Mieterverein, einer Mieterberatung oder anwaltlich beraten, wie du weiter vorgehen kannst. Beleidigungen, Drohungen oder Druck beendest du, indem du das Gespräch abbrichst und nur noch schriftlich kommunizierst.'
  },
  two_party: {
    goal: 'Gemeinsam mit Vermieter:in oder Hausverwaltung einen verbindlichen Weg zur Reparatur finden: klare Zuständigkeit, ein Termin für die Besichtigung oder Reparatur und ein Kommunikationsweg, über den du auf dem Laufenden bleibst.',
    rules: [
      'Beide sprechen über den konkreten Mangel und die nächsten Schritte, nicht über Schuld oder frühere Ärgernisse.',
      'Die Belastung der Mieterseite und die Grenzen der Vermieterseite, etwa ausgebuchte Handwerker, werden beide ernst genommen.',
      'Rechtliche Fragen werden nicht im Gespräch entschieden; wer unsicher ist, lässt sich separat beraten.',
      'Jede Absprache wird im Anschluss kurz schriftlich zusammengefasst.'
    ],
    questions: [
      'Wer ist bei Ihnen für meine Meldung zuständig, und wie erreiche ich diese Person am besten?',
      'Ist bereits ein Handwerksbetrieb beauftragt, und wenn nicht, was steht dem noch im Weg?',
      'Welche Termine kommen für eine Besichtigung oder Reparatur in Frage, und wie kann ich mich darauf einstellen?',
      'Gibt es bis zur Reparatur eine Übergangslösung, die den Alltag erleichtert?',
      'Wie halten wir uns gegenseitig auf dem Laufenden, falls sich der Termin verschiebt?'
    ],
    steps: [
      'Du bittest um einen kurzen Gesprächstermin, telefonisch oder vor Ort, und nennst vorab das Thema.',
      'Du schilderst sachlich den Mangel, wann du ihn gemeldet hast und wie er sich auswirkt, und zeigst deine Fotos.',
      'Die Vermieterseite erklärt, wo die Meldung steht und was bisher passiert ist oder woran es hakt.',
      'Ihr klärt gemeinsam Zuständigkeit, möglichen Termin und eine eventuelle Übergangslösung.',
      'Ihr vereinbart, wer wen bis wann informiert, falls sich etwas ändert.',
      'Du fasst die Absprache noch am selben Tag per Mail zusammen und bittest um kurze Bestätigung.'
    ],
    agreement: 'Wir halten fest, dass die Hausverwaltung einen Handwerksbetrieb beauftragt und mir bis [Wunschtermin] einen Termin für die Reparatur nennt. Ich sorge dafür, dass ich zu den genannten Zeiten erreichbar bin oder den Zugang anders ermögliche, nach vorheriger Absprache. Verschiebt sich etwas, meldet sich die Verwaltung per Mail bei mir. Ich schicke heute eine kurze Zusammenfassung dieser Absprache mit den aktuellen Fotos.'
  },
  dos: [
    'Jeden Mangel schriftlich melden und Fotos mit Datum beifügen.',
    'Eine konkrete Bitte mit Wunschtermin formulieren statt allgemein zu drängen.',
    'Telefonate und Gespräche anschließend kurz per Mail zusammenfassen.',
    'Bei Unsicherheit früh beim Mieterverein oder einer Mieterberatung nachfragen.'
  ],
  donts: [
    'Am Telefon laut oder vorwurfsvoll werden, weil du schon lange wartest.',
    'Eigenmächtig Zahlungen ändern oder Handwerker beauftragen, ohne dich vorher beraten zu lassen.',
    'Mit rechtlichen Behauptungen drohen, die du nicht geprüft hast.',
    'Den Mangel still hinnehmen und nur noch mit Nachbar:innen darüber schimpfen.'
  ],
  next_step: 'Schreib heute eine kurze, freundliche Mail an Vermieter:in oder Hausverwaltung: Mangel, Datum der ersten Meldung, aktuelle Fotos und eine konkrete Bitte mit Wunschtermin. Trag dir diesen Termin in den Kalender ein. Kommt bis dahin keine Antwort, frag einmal nach und hol dir danach Rat beim Mieterverein oder einer Mieterberatung.',
  related: [
    { category: 'vermieter', slug: 'schimmel' },
    { category: 'vermieter', slug: 'kommt-unangemeldet' },
    { category: 'vermieter', slug: 'nebenkostenabrechnung' },
    { category: 'nachbarn', slug: 'beschwert-sich-staendig' }
  ],
  article: {
    title: 'Vermieter macht Reparatur nicht: So hakst du höflich nach und dokumentierst den Mangel richtig',
    meta: 'Dein Vermieter lässt die Reparatur liegen? So meldest du den Mangel klar, hakst höflich nach, dokumentierst alles und weißt, wo du Beratung bekommst.',
    intro: 'Kaum etwas nervt im Mietalltag so zuverlässig wie ein Schaden, der einfach nicht behoben wird. Die Heizung, die im Winter nur lauwarm wird. Der Wasserhahn, der nachts im Takt tropft. Das Fenster, das sich nicht mehr richtig schließen lässt und durch das es zieht. Du hast den Mangel gemeldet, vielleicht sogar mehrmals, und trotzdem passiert nichts. Viele Mieterinnen und Mieter schwanken dann zwischen zwei Gefühlen: Ärger, weil sie sich nicht ernst genommen fühlen, und Zurückhaltung, weil sie das Verhältnis zur Vermieterin oder zur Hausverwaltung nicht belasten wollen. Dieser Ratgeber zeigt dir, wie du beides verbindest: freundlich bleiben und trotzdem klar sagen, was du brauchst. Er ersetzt ausdrücklich keine Rechtsberatung. Welche Rechte du bei einem Mangel hast und wie du sie geltend machst, klärst du beim Mieterverein, einer Mieterberatung oder anwaltlich.',
    situation: 'Typisch ist ein schleichender Verlauf. Am Anfang steht eine Meldung, oft mündlich, zwischen Tür und Angel oder in einem kurzen Telefonat. Die Antwort klingt beruhigend, doch danach herrscht Stille. Nach zwei Wochen fragst du nach und hörst, der Handwerker melde sich. Nach vier Wochen ist die zuständige Person im Urlaub, und bei der Hausverwaltung weiß niemand von deinem Anliegen. Irgendwann fühlst du dich wie ein Bittsteller in der eigenen Wohnung. Dazu kommt, dass ein Mangel selten nur ein technisches Problem ist. Ein kaltes Schlafzimmer raubt dir den Schlaf, ein undichtes Fenster macht dir Sorgen wegen Feuchtigkeit, ein tropfender Hahn kostet Nerven. Je länger das dauert, desto gereizter wird der Ton, und genau das macht das nächste Gespräch schwerer. Wer jetzt laut wird, bekommt zwar vielleicht kurz Aufmerksamkeit, riskiert aber, dass das Verhältnis dauerhaft angespannt bleibt.',
    causes: [
      'Die Meldung ist nie richtig angekommen. In vielen Fällen gibt es schlicht keinen Vorgang. Ein Anruf wurde nicht notiert, eine Mail landete in einem allgemeinen Postfach, die Sachbearbeitung hat gewechselt. Was für dich eindeutig gemeldet ist, existiert auf der anderen Seite womöglich gar nicht. Deshalb ist eine schriftliche, klare Meldung so wertvoll.',
      'Die Dringlichkeit ist nicht erkennbar. Hausverwaltungen und private Vermieter:innen jonglieren oft viele Anliegen gleichzeitig, und Handwerksbetriebe haben lange Wartelisten. Eine vage Beschreibung wie „Die Heizung spinnt“ landet leicht weit hinten. Eine genaue Schilderung mit Fotos und Auswirkungen auf den Alltag hilft dabei, das Anliegen richtig einzuordnen.',
      'Kosten und Aufwand werden gescheut. Manchmal wird eine Reparatur bewusst oder unbewusst hinausgezögert, weil sie Geld und Organisation kostet. Hier hilft kein Druck im Affekt, sondern ruhige Beharrlichkeit: dokumentiert, freundlich, mit klaren Bitten und Wunschterminen. Das macht es deutlich schwerer, eine Meldung auszusitzen.'
    ],
    mistakes: [
      'Ein häufiger Fehler ist, nur mündlich nachzufragen. Telefonate sind schnell vergessen, und später steht Aussage gegen Aussage. Wer jedes Gespräch kurz per Mail zusammenfasst, schafft eine Spur, auf die sich beide Seiten beziehen können.',
      'Ebenso ungünstig ist der Wechsel von Geduld zu Wut. Wer wochenlang schweigt und dann mit einer scharfen Nachricht voller Vorwürfe reagiert, verschiebt das Gespräch vom Schaden auf die Beziehung. Die andere Seite fühlt sich angegriffen und geht in die Verteidigung.',
      'Ein dritter Fehler sind eigenmächtige Schritte oder unüberlegte Drohungen. Auf eigene Faust Zahlungen zu ändern, selbst Handwerker zu beauftragen oder mit rechtlichen Folgen zu drohen, die du nicht geprüft hast, kann dir schaden. Lass dich vor solchen Schritten immer beraten.'
    ],
    strategy: 'Am Anfang steht eine saubere Bestandsaufnahme. Schreib auf, was kaputt ist, seit wann, wann du es auf welchem Weg gemeldet hast und welche Antworten kamen. Mach aktuelle Fotos oder ein kurzes Video und halte das Datum fest. Beschreibe außerdem, wie sich der Mangel im Alltag auswirkt, denn genau das macht die Dringlichkeit für andere greifbar. Diese Sammlung ist keine Munition, sondern eine Gedächtnisstütze, die dir im Gespräch Sicherheit gibt. Danach suchst du den direkten Kontakt, bewusst ruhig und nicht im Moment größter Verärgerung. Viele Missverständnisse lösen sich, wenn du freundlich nach dem Stand fragst, statt sofort anzuklagen. Entscheidend ist, dass du am Ende eine konkrete Bitte formulierst. Statt „Bitte kümmern Sie sich endlich“ sagst du, was du brauchst: einen Rückruf, einen Termin mit dem Handwerksbetrieb, eine kurze Bestätigung bis zu einem bestimmten Tag. Biete gleich Zeiten an, zu denen du erreichbar bist, und zeig dich flexibel bei der Terminfindung. Das signalisiert Kooperation und nimmt der anderen Seite Ausreden. Direkt nach jedem Telefonat oder Gespräch fasst du das Besprochene in einer kurzen, freundlichen Mail zusammen. Sie muss nicht förmlich sein, aber vollständig: Was wurde vereinbart, bis wann, und wer meldet sich bei wem. Häng die Fotos an. So entsteht ganz nebenbei eine klare Dokumentation, die dir hilft, falls du später Unterstützung brauchst. Wenn dein Wunschtermin ohne Reaktion verstreicht, frag einmal nach, weiterhin höflich, aber etwas deutlicher. Bleibt es dann still, ist der richtige Zeitpunkt für eine Beratung gekommen. Ein Mieterverein, eine kommunale Mieterberatung oder eine anwaltliche Beratung kann dir sagen, welche Möglichkeiten du hast. Diese Frage gehört nicht in dein Gespräch mit der Vermieterseite, sondern in die Beratung. Bis dahin bleibst du bei deinem Ton: freundlich, klar und schriftlich.',
    examples: [
      'Lena meldet im November, dass die Heizung im Kinderzimmer kaum warm wird. Nach zwei Wochen ohne Reaktion schreibt sie der Hausverwaltung eine kurze Mail mit Fotos vom Thermostat, dem Datum der ersten Meldung und der Bitte um einen Termin bis Ende der Woche. Sie nennt drei Zeitfenster, in denen sie zu Hause ist. Zwei Tage später ruft ein Heizungsbetrieb an, und die Sache ist in einer Woche erledigt. Die Verwaltung entschuldigt sich, die erste Meldung sei untergegangen.',
      'Timo wartet seit Wochen auf die Reparatur eines Fensters, das sich nicht schließen lässt. Sein Vermieter reagiert am Telefon gereizt und meint, das habe Zeit. Timo bleibt ruhig, beschreibt die Zugluft und bittet um einen konkreten Termin. Danach fasst er das Gespräch per Mail zusammen. Als auch nach seinem Wunschtermin nichts passiert, lässt er sich beim Mieterverein beraten und geht mit klarer Unterstützung in den nächsten Schritt.',
      'Aylin und ihr Partner vereinbaren mit der Vermieterin ein kurzes Treffen, weil der Küchenwasserhahn seit Monaten tropft. Sie zeigen Fotos und fragen, woran es hakt. Die Vermieterin erzählt, dass ihr Stammbetrieb schließen musste. Gemeinsam einigen sie sich darauf, dass Aylin zwei Betriebe aus der Nähe vorschlägt und die Vermieterin einen davon beauftragt. Die Absprache hält Aylin per Nachricht fest.'
    ],
    help: 'Wenn du nach einer Mangelmeldung beschimpft, bedroht oder eingeschüchtert wirst, wenn jemand deine Wohnung gegen deinen Willen betritt oder du dich wegen Herkunft, Religion, Behinderung, Geschlecht oder Familienform benachteiligt fühlst, ist das kein normaler Reparaturkonflikt mehr. Versuche dann nicht, das mit einem weiteren Gespräch zu lösen. Dokumentiere Vorfälle mit Datum, bewahre alle Nachrichten auf und hol dir Unterstützung beim Mieterverein, einer Mieterberatung oder anwaltlich. Geht von einem Schaden akute Gefahr aus, etwa bei Gasgeruch, einem Wasserrohrbruch oder offenen Stromleitungen, oder bist du selbst in Gefahr, wählst du sofort 112 oder 110. Für alle Fragen rund um deine Rechte als Mieter:in, mögliche nächste Schritte und die Einordnung deines Mietvertrags sind Mieterverein, Mieterberatung oder anwaltliche Beratung die richtige Adresse. Dieser Ratgeber hilft dir dabei, im Kontakt freundlich, klar und gut dokumentiert zu bleiben.',
    faqs: [
      {
        question: 'Wie melde ich einen Mangel am besten?',
        answer: 'Schriftlich, zum Beispiel per Mail, mit genauer Beschreibung, Datum, Fotos und einer konkreten Bitte mit Wunschtermin. Wenn du vorher telefoniert hast, fasse das Gespräch in derselben Mail kurz zusammen.'
      },
      {
        question: 'Wie oft darf ich nachfragen, ohne zu nerven?',
        answer: 'Eine freundliche Nachfrage nach deinem Wunschtermin ist völlig in Ordnung. Wichtig ist der Ton: sachlich und konkret. Bleibt es danach still, ist eine Beratung sinnvoller als weitere Anrufe.'
      },
      {
        question: 'Soll ich die Reparatur einfach selbst beauftragen?',
        answer: 'Lass dich vorher unbedingt beraten, etwa beim Mieterverein oder anwaltlich. Ob und wie du so etwas selbst veranlassen kannst, hängt vom Einzelfall ab und sollte nicht aus Ärger entschieden werden.'
      },
      {
        question: 'Was gehört in meine Dokumentation?',
        answer: 'Datum der ersten Meldung und jeder Nachfrage, Kanal und Ansprechperson, Antworten, Fotos oder Videos mit Datum und eine kurze Notiz, wie sich der Mangel auf deinen Alltag auswirkt.'
      },
      {
        question: 'Wo bekomme ich Hilfe, wenn gar nichts passiert?',
        answer: 'Beim Mieterverein, einer kommunalen Mieterberatung oder in einer anwaltlichen Beratung. Dort erfährst du, welche Möglichkeiten du in deinem Fall hast und wie du sinnvoll weiter vorgehst.'
      }
    ]
  }
};
