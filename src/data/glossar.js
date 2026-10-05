// Glossar „Konflikte & Kommunikation von A bis Z“
// 40 Begriffe, alphabetisch (deutsche Sortierung). slug = Sprungmarke (#slug).
export const glossar = [
  {
    slug: 'aktives-zuhoeren',
    term: 'Aktives Zuhören',
    definition:
      'Beim aktiven Zuhören konzentrierst du dich ganz auf dein Gegenüber, statt innerlich schon deine Antwort vorzubereiten. Du fragst nach, gibst mit eigenen Worten wieder, was du verstanden hast, und benennst die Gefühle, die du heraushörst. Die Methode ist u. a. durch Thomas Gordon bekannt geworden. Beispiel: „Du klingst richtig erschöpft – war die Woche so voll?“',
    method: 'aktives-zuhoeren',
    topic: 'streit-schlichten',
    conflicts: [
      { category: 'partner', slug: 'hoert-nicht-zu' },
      { category: 'freunde', slug: 'hoert-nicht-zu' },
    ],
  },
  {
    slug: 'allparteilichkeit',
    term: 'Allparteilichkeit',
    definition:
      'Allparteilichkeit ist die Haltung, mit der eine vermittelnde Person allen Konfliktbeteiligten gleichermaßen zugewandt ist. Anders als bei Neutralität hält sie sich nicht einfach heraus, sondern setzt sich aktiv dafür ein, dass jede Seite gehört und verstanden wird. Beispiel: Du schlichtest zwischen zwei Geschwistern und fasst die Sicht beider fair zusammen, ohne ein Urteil zu fällen.',
    topic: 'streit-schlichten',
    conflicts: [{ category: 'kinder', slug: 'geschwisterstreit' }],
  },
  {
    slug: 'appell',
    term: 'Appell',
    definition:
      'Der Appell ist eine der vier Seiten einer Nachricht im Kommunikationsquadrat von Friedemann Schulz von Thun. Er beschreibt, wozu die sprechende Person dich bewegen möchte – oft unausgesprochen. Beispiel: „Der Mülleimer ist voll“ klingt nach einer Feststellung, meint aber häufig „Bring bitte den Müll raus“. Wer Appelle klar ausspricht, erspart beiden viel Rätselraten.',
    method: 'vier-ohren-modell',
    conflicts: [{ category: 'mitbewohner', slug: 'putzplan-ignoriert' }],
  },
  {
    slug: 'batna',
    term: 'BATNA',
    definition:
      'BATNA steht für „Best Alternative to a Negotiated Agreement“, also die beste Alternative, falls eine Verhandlung scheitert. Der Begriff stammt aus dem Harvard-Konzept von Roger Fisher und William Ury. Wer seine Alternative kennt, verhandelt gelassener und lässt sich weniger unter Druck setzen. Beispiel: Vor dem Gehaltsgespräch überlegst du, welche Optionen du hast, falls deine Chefin ablehnt.',
    method: 'harvard-konzept',
    topic: 'konfliktgespraech-am-arbeitsplatz',
    conflicts: [{ category: 'chef', slug: 'gehalt-abgelehnt' }],
  },
  {
    slug: 'beduerfnis',
    term: 'Bedürfnis',
    definition:
      'In der Gewaltfreien Kommunikation nach Marshall B. Rosenberg sind Bedürfnisse die universellen Beweggründe hinter unseren Gefühlen und Handlungen, etwa Ruhe, Wertschätzung, Sicherheit oder Autonomie. Sie sind von konkreten Wünschen zu unterscheiden. Beispiel: Hinter „Du sollst früher nach Hause kommen“ steckt vielleicht das Bedürfnis nach Nähe. Wer Bedürfnisse benennt, öffnet mehr Lösungswege als mit einer starren Forderung.',
    method: 'gewaltfreie-kommunikation',
    topic: 'streit-in-der-beziehung',
    conflicts: [{ category: 'partner', slug: 'unterschiedliche-naehebeduerfnisse' }],
  },
  {
    slug: 'beziehungsebene',
    term: 'Beziehungsebene',
    definition:
      'Die Beziehungsebene zeigt, wie Menschen zueinander stehen und was sie voneinander halten. Im Kommunikationsquadrat von Friedemann Schulz von Thun ist sie eine der vier Seiten jeder Nachricht. Viele Streits drehen sich scheinbar um Sachfragen, verletzen aber auf dieser Ebene. Beispiel: „Hast du das schon wieder vergessen?“ transportiert neben der Frage auch den Vorwurf, du seist unzuverlässig.',
    method: 'vier-ohren-modell',
    topic: 'streit-in-der-beziehung',
    conflicts: [{ category: 'eltern', slug: 'kritisieren-staendig' }],
  },
  {
    slug: 'co-parenting',
    term: 'Co-Parenting',
    definition:
      'Co-Parenting bezeichnet die gemeinsame Erziehungsverantwortung von Eltern, die kein Paar mehr sind. Im Mittelpunkt steht das Wohl der Kinder, nicht die alte Paarbeziehung. Dazu gehören verlässliche Absprachen, ein sachlicher Ton und dass Konflikte nicht vor den Kindern ausgetragen werden. Beispiel: Ihr klärt Übergabezeiten per kurzer, freundlicher Nachricht, statt beim Abholen an der Tür zu diskutieren.',
    conflicts: [
      { category: 'ex-partner', slug: 'streit-bei-der-uebergabe' },
      { category: 'ex-partner', slug: 'redet-schlecht-vor-kindern' },
    ],
  },
  {
    slug: 'deeskalation',
    term: 'Deeskalation',
    definition:
      'Deeskalation meint alles, was einen Konflikt beruhigt, statt ihn weiter anzuheizen: leiser sprechen, langsamer werden, Vorwürfe weglassen, eine Pause vorschlagen. Ziel ist nicht, recht zu bekommen, sondern wieder gesprächsfähig zu werden. Beispiel: „Ich merke, wir werden beide gerade laut. Lass uns zehn Minuten durchatmen und dann weiterreden.“',
    method: 'deeskalation-im-streit',
    topic: 'streit-in-der-beziehung',
    conflicts: [{ category: 'ex-partner', slug: 'jede-nachricht-eskaliert' }],
  },
  {
    slug: 'du-botschaft',
    term: 'Du-Botschaft',
    definition:
      'Eine Du-Botschaft stellt das Gegenüber in den Mittelpunkt und bewertet es, meist als Vorwurf oder Verallgemeinerung. Typische Signalwörter sind „immer“, „nie“ und „typisch du“. Solche Sätze lösen fast automatisch Verteidigung aus. Beispiel: „Du hörst mir nie zu!“ Als Gegenstück gilt die Ich-Botschaft, die beschreibt, wie es dir selbst mit einer Situation geht.',
    method: 'ich-botschaften',
    conflicts: [{ category: 'partner', slug: 'hoert-nicht-zu' }],
  },
  {
    slug: 'entschuldigung',
    term: 'Entschuldigung',
    definition:
      'Eine ernst gemeinte Entschuldigung übernimmt Verantwortung für das eigene Verhalten, ohne es zu relativieren. Sie benennt konkret, was passiert ist, erkennt die Wirkung auf die andere Person an und zeigt, was sich ändern soll. Beispiel: Statt „Sorry, wenn du dich angegriffen fühlst“ sagst du: „Es tut mir leid, dass ich dich vor den anderen bloßgestellt habe.“',
    method: 'richtig-entschuldigen',
    topic: 'nach-dem-streit-versoehnen',
    conflicts: [{ category: 'freunde', slug: 'vertrauen-gebrochen' }],
  },
  {
    slug: 'eskalation',
    term: 'Eskalation',
    definition:
      'Eskalation beschreibt, wie sich ein Konflikt Schritt für Schritt verschärft: Aus Meinungsverschiedenheiten werden Vorwürfe, dann Abwertung, Drohungen oder Schlimmeres. Friedrich Glasl hat diesen Verlauf in neun Eskalationsstufen beschrieben. Je früher du gegensteuerst, desto leichter gelingt eine Lösung. Beispiel: Eine Diskussion über den Abwasch kippt, sobald alte Fehler aufgezählt werden.',
    method: 'eskalationsstufen-glasl',
    topic: 'streit-per-whatsapp',
    conflicts: [{ category: 'ex-partner', slug: 'jede-nachricht-eskaliert' }],
  },
  {
    slug: 'familienrat',
    term: 'Familienrat',
    definition:
      'Der Familienrat ist ein regelmäßiges, festes Gespräch, in dem alle Familienmitglieder – auch die Kinder – Themen einbringen und gemeinsam Lösungen suchen. Wichtig sind klare Regeln: ausreden lassen, jede Stimme zählt, Beschlüsse werden festgehalten. Beispiel: Einmal pro Woche besprecht ihr am Küchentisch, wie Handyzeiten und Aufgaben im Haushalt verteilt werden.',
    conflicts: [
      { category: 'kinder', slug: 'handyzeit' },
      { category: 'kinder', slug: 'zimmer-aufraeumen' },
    ],
  },
  {
    slug: 'feedback',
    term: 'Feedback',
    definition:
      'Feedback ist eine Rückmeldung darüber, wie ein Verhalten auf dich wirkt. Hilfreich ist es, wenn es konkret, zeitnah und beschreibend statt bewertend ist und der anderen Person Raum für ihre Sicht lässt. Beispiel: „In der Besprechung hast du mich zweimal unterbrochen. Dadurch konnte ich meinen Vorschlag nicht zu Ende bringen.“ Gutes Feedback benennt auch, was gut läuft.',
    method: 'feedback-geben',
    topic: 'konfliktgespraech-am-arbeitsplatz',
    conflicts: [
      { category: 'chef', slug: 'kein-feedback' },
      { category: 'kollegen', slug: 'unterbricht-staendig' },
    ],
  },
  {
    slug: 'gewaltfreie-kommunikation',
    term: 'Gewaltfreie Kommunikation',
    definition:
      'Die Gewaltfreie Kommunikation (GFK) wurde von Marshall B. Rosenberg entwickelt. Sie folgt vier Schritten: Beobachtung, Gefühl, Bedürfnis und Bitte. So kannst du Kritik äußern, ohne zu verurteilen, und zugleich die Bedürfnisse deines Gegenübers wahrnehmen. Beispiel: „Wenn die Wäsche im Flur liegt, bin ich genervt, weil ich Ordnung brauche. Magst du sie heute Abend wegräumen?“',
    method: 'gewaltfreie-kommunikation',
    conflicts: [{ category: 'partner', slug: 'waesche-liegen-lassen' }],
  },
  {
    slug: 'grenze',
    term: 'Grenze',
    definition:
      'Eine persönliche Grenze markiert, was für dich in Ordnung ist und was nicht – zum Beispiel bei Zeit, Nähe, Geld oder Tonfall. Grenzen setzen heißt, dies klar mitzuteilen und auch dazu zu stehen, wenn jemand enttäuscht reagiert. Beispiel: „Ich möchte, dass du vorher anrufst, bevor du vorbeikommst. Spontane Besuche passen für mich nicht.“',
    method: 'grenzen-setzen',
    topic: 'nein-sagen-lernen',
    conflicts: [
      { category: 'eltern', slug: 'respektieren-grenzen-nicht' },
      { category: 'schwiegereltern', slug: 'kommen-unangemeldet' },
    ],
  },
  {
    slug: 'haeusliche-gewalt',
    term: 'Häusliche Gewalt',
    definition:
      'Häusliche Gewalt umfasst körperliche, seelische, sexuelle und wirtschaftliche Gewalt zwischen Menschen, die zusammenleben oder in einer (ehemaligen) Beziehung sind. Das ist kein Beziehungsstreit, den man mit besserer Kommunikation löst – hier gehen Schutz und Hilfe vor. In akuter Gefahr wähle 110. Rund um die Uhr erreichbar: Hilfetelefon Gewalt gegen Frauen 116 016. Für Männer: Hilfetelefon Gewalt an Männern 0800 1239900.',
    topic: 'streit-in-der-beziehung',
  },
  {
    slug: 'ich-botschaft',
    term: 'Ich-Botschaft',
    definition:
      'Eine Ich-Botschaft beschreibt, wie ein Verhalten auf dich wirkt, statt dein Gegenüber anzuklagen. Das Konzept geht auf Thomas Gordon zurück. Sie besteht meist aus der Beobachtung, deinem Gefühl und dem, was du dir wünschst. Beispiel: Statt „Du bist so unzuverlässig“ sagst du: „Wenn du kurzfristig absagst, bin ich enttäuscht, weil ich mich auf den Abend gefreut habe.“',
    method: 'ich-botschaften',
    conflicts: [{ category: 'freunde', slug: 'sagt-immer-ab' }],
  },
  {
    slug: 'interessen-und-positionen',
    term: 'Interessen und Positionen',
    definition:
      'Eine Position ist das, was jemand fordert; ein Interesse ist der Grund dahinter. Das Harvard-Konzept von Roger Fisher und William Ury empfiehlt, über Interessen statt über Positionen zu verhandeln. Beispiel: Zwei Nachbarn streiten um einen Parkplatz (Position). Der eine braucht kurze Wege wegen schwerer Einkäufe, der andere einen sicheren Platz für sein Auto (Interessen) – dafür gibt es oft mehrere Lösungen.',
    method: 'harvard-konzept',
    conflicts: [{ category: 'nachbarn', slug: 'parkplatz-streit' }],
  },
  {
    slug: 'killerphrase',
    term: 'Killerphrase',
    definition:
      'Eine Killerphrase ist eine pauschale Aussage, die eine Idee oder ein Gespräch abwürgt, bevor es richtig begonnen hat. Sie ersetzt Argumente durch Abwertung. Beispiele: „Das haben wir schon immer so gemacht“, „Das funktioniert eh nicht“ oder „Jetzt sei doch nicht so empfindlich“. Du kannst gelassen nachfragen: „Was genau spricht aus deiner Sicht dagegen?“',
    topic: 'konfliktgespraech-am-arbeitsplatz',
    conflicts: [{ category: 'chef', slug: 'nicht-ernst-genommen' }],
  },
  {
    slug: 'kompromiss',
    term: 'Kompromiss',
    definition:
      'Bei einem Kompromiss kommen sich beide Seiten entgegen und verzichten jeweils auf einen Teil ihrer Wünsche. Das ist oft fair und schnell, lässt aber manchmal beide ein wenig unzufrieden zurück. Beispiel: Ihr fahrt eine Woche ans Meer und eine Woche in die Berge, obwohl jede:r lieber zwei Wochen am Lieblingsort verbracht hätte. Manchmal lohnt sich die Suche nach einer Win-win-Lösung.',
    topic: 'streit-im-urlaub',
    conflicts: [{ category: 'schwiegereltern', slug: 'feiertage-aufteilen' }],
  },
  {
    slug: 'konsens',
    term: 'Konsens',
    definition:
      'Ein Konsens ist eine Einigung, die alle Beteiligten wirklich mittragen – nicht nur, weil sie überstimmt wurden. Er braucht mehr Zeit als eine Mehrheitsentscheidung, hält dafür aber meist länger. Beispiel: In der WG diskutiert ihr so lange über den Putzplan, bis alle sagen können: „Damit bin ich einverstanden und halte mich daran.“',
    conflicts: [
      { category: 'mitbewohner', slug: 'putzplan-ignoriert' },
      { category: 'mitbewohner', slug: 'nebenkosten-und-einkauf' },
    ],
  },
  {
    slug: 'kontrolle',
    term: 'Kontrolle',
    definition:
      'Kontrollierendes Verhalten in Beziehungen zeigt sich etwa darin, dass jemand dein Handy überprüft, Kontakte zu Freund:innen einschränkt, über dein Geld bestimmt oder ständig wissen will, wo du bist. Einzelne Unsicherheiten sind menschlich, ein dauerhaftes Muster aus Überwachung und Einschränkung ist kein Alltagskonflikt mehr. Unterstützung bieten das Hilfetelefon Gewalt gegen Frauen 116 016 und das Hilfetelefon Gewalt an Männern 0800 1239900.',
    conflicts: [
      { category: 'partner', slug: 'eifersucht' },
      { category: 'partner', slug: 'smartphone-staendig' },
    ],
  },
  {
    slug: 'loyalitaetskonflikt',
    term: 'Loyalitätskonflikt',
    definition:
      'Ein Loyalitätskonflikt entsteht, wenn du dich zwischen zwei Menschen hin- und hergerissen fühlst, die dir beide wichtig sind. Das betrifft zum Beispiel Kinder getrennter Eltern oder Partner:innen zwischen eigener Familie und Schwiegereltern. Beispiel: Deine Mutter kritisiert deine Partnerin, und du hast das Gefühl, egal wie du reagierst, jemanden zu verraten.',
    conflicts: [
      { category: 'schwiegereltern', slug: 'partner-steht-nicht-hinter-mir' },
      { category: 'eltern', slug: 'akzeptieren-partner-nicht' },
    ],
  },
  {
    slug: 'machtgefaelle',
    term: 'Machtgefälle',
    definition:
      'Ein Machtgefälle besteht, wenn eine Seite mehr Einfluss, Ressourcen oder Entscheidungsbefugnis hat als die andere, etwa zwischen Chef:in und Mitarbeiter:in oder Eltern und Kindern. Es verändert jeden Konflikt: Offene Kritik fällt der schwächeren Seite schwerer. Beispiel: Du traust dich nicht, deiner Vorgesetzten zu widersprechen, weil du um deine Beurteilung fürchtest. Dann helfen gute Vorbereitung und Verbündete.',
    topic: 'konfliktgespraech-am-arbeitsplatz',
    conflicts: [
      { category: 'chef', slug: 'unfaire-behandlung' },
      { category: 'chef', slug: 'zu-viel-druck' },
    ],
  },
  {
    slug: 'mediation',
    term: 'Mediation',
    definition:
      'Mediation ist ein strukturiertes Verfahren, in dem eine allparteiliche dritte Person Konfliktparteien hilft, selbst eine Lösung zu erarbeiten. Die Mediatorin oder der Mediator entscheidet nichts, sondern leitet das Gespräch. Die Teilnahme ist freiwillig. Beispiel: Zerstrittene Geschwister nutzen eine Mediation, um sich über die Aufteilung eines Erbes zu verständigen, statt sofort vor Gericht zu gehen.',
    topic: 'streit-schlichten',
    conflicts: [
      { category: 'geschwister', slug: 'streit-ums-erbe' },
      { category: 'nachbarn', slug: 'grundstuecksgrenzen' },
    ],
  },
  {
    slug: 'metakommunikation',
    term: 'Metakommunikation',
    definition:
      'Metakommunikation heißt, über die Art zu sprechen, wie ihr miteinander redet – statt nur über das Streitthema selbst. Das hilft, wenn Gespräche immer wieder im selben Muster enden. Beispiel: „Mir fällt auf, dass wir bei Geldthemen schnell laut werden. Wollen wir vereinbaren, wie wir darüber reden, bevor wir weitermachen?“',
    topic: 'streit-in-der-beziehung',
    conflicts: [{ category: 'partner', slug: 'streit-um-geld' }],
  },
  {
    slug: 'paraphrasieren',
    term: 'Paraphrasieren',
    definition:
      'Paraphrasieren bedeutet, das Gesagte deines Gegenübers in eigenen Worten zusammenzufassen, um zu prüfen, ob du es richtig verstanden hast. Es ist ein zentrales Werkzeug des aktiven Zuhörens und bremst Missverständnisse früh aus. Beispiel: „Wenn ich dich richtig verstehe, ärgert dich weniger die Aufgabe selbst, sondern dass sie so kurzfristig kam?“',
    method: 'aktives-zuhoeren',
    conflicts: [{ category: 'kollegen', slug: 'schiebt-aufgaben-ab' }],
  },
  {
    slug: 'passiv-aggressives-verhalten',
    term: 'Passiv-aggressives Verhalten',
    definition:
      'Passiv-aggressives Verhalten beschreibt ein Muster, bei dem Ärger nicht offen ausgesprochen, sondern indirekt gezeigt wird: durch spitze Bemerkungen, absichtliches Trödeln, „vergessene“ Absprachen oder demonstratives Seufzen. Das Gegenüber spürt die Spannung, kann sie aber schwer greifen. Beispiel: „Nein, schon gut, ich mach das eben wieder selbst.“ Hilfreich ist, das Muster freundlich anzusprechen.',
    conflicts: [
      { category: 'mitbewohner', slug: 'putzplan-ignoriert' },
      { category: 'kollegen', slug: 'keine-zusammenarbeit' },
    ],
  },
  {
    slug: 'pseudogefuehl',
    term: 'Pseudogefühl',
    definition:
      'In der Gewaltfreien Kommunikation werden Wörter als Pseudogefühle bezeichnet, die wie Gefühle klingen, aber eigentlich eine Bewertung des anderen enthalten, etwa „ignoriert“, „manipuliert“ oder „im Stich gelassen“. Beispiel: „Ich fühle mich von dir übergangen“ unterstellt eine Absicht. Näher an deinem Gefühl ist: „Ich bin traurig und verunsichert, weil ich nicht gefragt wurde.“',
    method: 'gewaltfreie-kommunikation',
    conflicts: [{ category: 'freunde', slug: 'fuehle-mich-ausgeschlossen' }],
  },
  {
    slug: 'rollenkonflikt',
    term: 'Rollenkonflikt',
    definition:
      'Ein Rollenkonflikt entsteht, wenn unterschiedliche Rollen, die du ausfüllst, widersprüchliche Erwartungen an dich stellen. Das kann zwischen Beruf und Familie passieren oder wenn du Kollegin und zugleich Freundin bist. Beispiel: Du sollst als Teamleitung eine Entscheidung durchsetzen, die dein befreundeter Kollege ablehnt. Hilfreich ist, offen zu benennen, in welcher Rolle du gerade sprichst.',
    conflicts: [
      { category: 'chef', slug: 'unklare-erwartungen' },
      { category: 'eltern', slug: 'streit-um-pflege' },
    ],
  },
  {
    slug: 'sachebene',
    term: 'Sachebene',
    definition:
      'Die Sachebene umfasst Daten, Fakten und Inhalte einer Nachricht. Im Kommunikationsquadrat von Friedemann Schulz von Thun ist sie eine der vier Seiten. Streit lässt sich oft leichter lösen, wenn ihr euch zuerst auf die Fakten einigt. Beispiel: Bevor ihr über „deine ständigen Partys“ streitet, klärt ihr, an welchen Tagen es wie lange laut war.',
    method: 'vier-ohren-modell',
    conflicts: [
      { category: 'nachbarn', slug: 'zu-laut' },
      { category: 'mitbewohner', slug: 'laerm-in-der-wg' },
    ],
  },
  {
    slug: 'schlichtung',
    term: 'Schlichtung',
    definition:
      'Bei einer Schlichtung hilft eine dritte Person, einen Streit beizulegen, und macht – anders als bei der Mediation – meist selbst einen Lösungsvorschlag. Im Alltag schlichten oft Eltern, Freund:innen oder Kolleg:innen. Beispiel: Du hörst dir beide Seiten eines Streits unter Kindern an und schlägst dann vor, wer das Spielzeug zuerst bekommt und wie lange.',
    topic: 'streit-schlichten',
    conflicts: [
      { category: 'kinder', slug: 'geschwisterstreit' },
      { category: 'kollegen', slug: 'aufgaben-unfair-verteilt' },
    ],
  },
  {
    slug: 'schweigen-als-strafe',
    term: 'Schweigen als Strafe',
    definition:
      'Schweigen als Strafe, auch „Silent Treatment“ genannt, beschreibt ein Muster, bei dem jemand gezielt Kontakt und Gespräch verweigert, um Druck auszuüben oder Missfallen zu zeigen. Es unterscheidet sich von einer vereinbarten Pause, weil das Gegenüber im Ungewissen gelassen wird. Beispiel: Nach einem Streit bekommst du tagelang keine Antwort, obwohl ihr im selben Haushalt lebt.',
    topic: 'schweigen-als-strafe',
    conflicts: [{ category: 'geschwister', slug: 'funkstille' }],
  },
  {
    slug: 'selbstkundgabe',
    term: 'Selbstkundgabe',
    definition:
      'Die Selbstkundgabe ist die Seite einer Nachricht, auf der die sprechende Person – gewollt oder ungewollt – etwas über sich selbst verrät: ihre Stimmung, ihre Werte, ihre Sorgen. Sie gehört zum Kommunikationsquadrat von Friedemann Schulz von Thun. Beispiel: „Schon wieder so spät?“ kann zeigen, dass sich deine Mutter Sorgen gemacht hat, nicht nur, dass sie dich kritisieren will.',
    method: 'vier-ohren-modell',
    conflicts: [{ category: 'kinder', slug: 'ausgehzeiten' }],
  },
  {
    slug: 'stalking',
    term: 'Stalking',
    definition:
      'Stalking bedeutet, dass jemand dich wiederholt und gegen deinen Willen verfolgt, belästigt oder überwacht, etwa durch ständige Nachrichten, Auflauern oder Kontaktversuche über andere. Das ist kein Konflikt, den du durch ein klärendes Gespräch lösen musst. Dokumentiere Vorfälle und hol dir Unterstützung. In akuter Gefahr wähle 110. Beratung für Betroffene bietet der WEISSER RING unter 116 006.',
    conflicts: [{ category: 'ex-partner', slug: 'jede-nachricht-eskaliert' }],
  },
  {
    slug: 'streitpause',
    term: 'Streitpause',
    definition:
      'Eine Streitpause ist eine bewusst vereinbarte Unterbrechung, wenn ein Gespräch zu hitzig wird. Wichtig ist, sie anzukündigen und einen Zeitpunkt zum Weiterreden zu nennen – sonst wirkt sie wie Flucht oder Schweigen als Strafe. Beispiel: „Ich bin gerade zu aufgebracht, um fair zu bleiben. Lass uns in einer halben Stunde weitersprechen.“',
    method: 'deeskalation-im-streit',
    topic: 'streit-in-der-beziehung',
    conflicts: [{ category: 'kinder', slug: 'respektloser-ton' }],
  },
  {
    slug: 'triangulation',
    term: 'Triangulation',
    definition:
      'Triangulation beschreibt ein Beziehungsmuster, bei dem ein Konflikt zwischen zwei Menschen nicht direkt geklärt, sondern über eine dritte Person ausgetragen wird. Diese wird als Bote, Verbündete oder Blitzableiter eingespannt. Beispiel: Deine Eltern streiten und bitten dich jeweils, dem anderen etwas auszurichten. Hilfreich ist, freundlich auszusteigen: „Das besprecht ihr bitte direkt miteinander.“',
    conflicts: [
      { category: 'ex-partner', slug: 'redet-schlecht-vor-kindern' },
      { category: 'kollegen', slug: 'redet-schlecht' },
    ],
  },
  {
    slug: 'versoehnung',
    term: 'Versöhnung',
    definition:
      'Versöhnung ist der Schritt, mit dem ihr nach einem Streit wieder zueinanderfindet. Dazu gehört meist, dass beide ihre Sicht schildern dürfen, Verletzungen anerkannt werden und ihr gemeinsam überlegt, was ihr künftig anders machen wollt. Beispiel: Nach dem Streit beim Familienfest ruft ihr euch an, sagt, was euch leidtut, und verabredet euch zum Kaffee.',
    method: 'richtig-entschuldigen',
    topic: 'nach-dem-streit-versoehnen',
    conflicts: [{ category: 'geschwister', slug: 'streit-bei-familienfesten' }],
  },
  {
    slug: 'vier-ohren-modell',
    term: 'Vier-Ohren-Modell',
    definition:
      'Das Vier-Ohren-Modell, auch Kommunikationsquadrat genannt, stammt von Friedemann Schulz von Thun. Es besagt, dass jede Nachricht vier Seiten hat: Sachinhalt, Selbstkundgabe, Beziehung und Appell. Missverständnisse entstehen, wenn du mit einem anderen „Ohr“ hörst, als es gemeint war. Beispiel: „Die Ampel ist grün“ kann als Info, als Ungeduld oder als Kritik an deinem Fahrstil ankommen.',
    method: 'vier-ohren-modell',
    conflicts: [{ category: 'eltern', slug: 'versteht-mich-nicht' }],
  },
  {
    slug: 'win-win',
    term: 'Win-win',
    definition:
      'Eine Win-win-Lösung erfüllt die wichtigsten Interessen aller Beteiligten, statt dass eine Seite verliert. Sie ist ein Kernziel des Harvard-Konzepts von Roger Fisher und William Ury. Der Weg dorthin: Interessen klären, mehrere Optionen sammeln, gemeinsam auswählen. Beispiel: Du brauchst Ruhe zum Arbeiten, deine Mitbewohnerin will Musik hören – mit Kopfhörern und festen Ruhezeiten ist beiden geholfen.',
    method: 'harvard-konzept',
    conflicts: [{ category: 'mitbewohner', slug: 'laerm-in-der-wg' }],
  },
];
