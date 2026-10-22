/*
 * ALL SITE COPY LIVES HERE. Edit text in this file only; index.html just has slots.
 *
 * Each entry: { en, fr, fr_status }. An entry with only "text" is the same in both languages.
 * Simple inline HTML is allowed (<em>, <strong>, <sup>, <br>, &nbsp;).
 *
 * French typography: type ordinary spaces. Before : ; ! ? », after «, and in "15 h",
 * script.js swaps them for the correct non-breaking spaces automatically.
 *
 * Every FR string is a draft and marked "needs native review". Change fr_status to
 * "reviewed" once Raph's family has checked it.
 *
 * Section labels double as the nav labels, so the two always match.
 *
 * "fr_flag" marks phrases Raph's family should look at specifically (idioms, jokes, local references).
 */
window.SITE_CONTENT = {
  meta_title: {
    en: "Kassia & Raphaël · October 8, 2027",
    fr: "Kassia & Raphaël · 8 octobre 2027",
    fr_status: "needs native review"
  },
  meta_description: {
    en: "Kassia & Raphaël are getting married on Friday, October 8, 2027, at Villa del Cardinale above Lake Albano, near Rome.",
    fr: "Kassia & Raphaël se marient le vendredi 8 octobre 2027 à la Villa del Cardinale, au-dessus du lac Albano, près de Rome.",
    fr_status: "needs native review"
  },
  skip_link: { en: "Skip to content", fr: "Aller au contenu", fr_status: "needs native review" },
  lang_label: { en: "Language", fr: "Langue", fr_status: "needs native review" },
  menu_open: { en: "Menu", fr: "Menu", fr_status: "needs native review" },
  menu_close: { en: "Close", fr: "Fermer", fr_status: "needs native review" },
  menu_label: { en: "Contents", fr: "Sommaire", fr_status: "needs native review" },
  nav_label: { en: "Sections", fr: "Rubriques", fr_status: "needs native review" },

  /* Hero */
  hero_photo_alt: {
    en: "Kassia laughing as Raphaël smiles at her at a sunny café table, both in sunglasses, his arm around her shoulders, black-and-white photograph",
    fr: "Kassia rit pendant que Raphaël lui sourit à la terrasse ensoleillée d’un café, tous deux en lunettes de soleil, son bras autour de ses épaules, photographie en noir et blanc",
    fr_status: "needs native review"
  },
  hero_date: { en: "Friday, October 8, 2027", fr: "vendredi 8 octobre 2027", fr_status: "needs native review" },
  hero_place: { en: "Castel Gandolfo, Italy", fr: "Castel Gandolfo, Italie", fr_status: "needs native review" },
  hero_note: { en: "Formal invitation to follow", fr: "Les détails suivront.", fr_status: "needs native review" },

  /* Welcome */
  welcome_label: { en: "Welcome", fr: "Bienvenue", fr_status: "needs native review" },
  welcome_title: { en: "We hope you’ll join&nbsp;us.", fr: "Nous espérons vous y&nbsp;voir.", fr_status: "needs native review" },
  welcome_text: {
    en: "We are getting married on Friday, October&nbsp;8, 2027, at a villa above Lake Albano, about forty minutes from Rome. A formal invitation with full details will follow. For now, we wanted you to have time to plan.",
    fr: "On va se marier le vendredi 8&nbsp;octobre 2027, à la Villa del Cardinale, à Castel Gandolfo. La villa se trouve dans le domaine du lac Albano, à 40&nbsp;minutes de Rome, dans les Castelli Romani. Une invitation officielle, avec tous les détails, suivra.",
    fr_status: "needs native review"
  },

  /* Our story */
  story_label: { en: "Our story", fr: "Notre histoire", fr_status: "needs native review" },
  story_title: {
    en: "The long way around",
    fr: "À qui sait attendre",
    fr_status: "needs native review",
    fr_flag: "Chosen by Kassia for “the long way around”: from the proverb « Tout vient à point à qui sait attendre »."
  },
  story_photo_alt: {
    en: "Raphaël kissing Kassia’s cheek at their graduation, both in caps and gowns, black-and-white photograph",
    fr: "Raphaël embrasse Kassia sur la joue le jour de leur remise de diplômes, en toge et toque, photographie en noir et blanc",
    fr_status: "needs native review"
  },
  story_caption: {
    en: "San&nbsp;Francisco&nbsp;State&nbsp;· Graduation",
    fr: "San&nbsp;Francisco&nbsp;State&nbsp;· Remise des diplômes",
    fr_status: "needs native review"
  },
  story_p1: {
    en: "We met in our first week at San Francisco State University and became fast friends. Then Raphaël left for Paris junior year, nine hours ahead, and we kept&nbsp;chatting.",
    fr: "Nous nous sommes rencontrés dès notre première semaine à San Francisco State University et sommes très vite devenus amis. Puis Raphaël est parti à Paris, avec neuf heures d’avance, et nous sommes restés en&nbsp;contact.",
    fr_status: "needs native review"
  },
  story_p2: {
    en: "He spent the next summer on the American River, paddling the chase kayak and herding tipsy Sacramentans to the dock, and returned to school tanned and noticeably stronger. Kassia noticed. By spring of senior year he was a fixture at her all-girls house, the lone man at wine nights and rom&nbsp;coms. It took us until almost graduation to do something about&nbsp;it.",
    fr: "L’été suivant, il l’a passé sur l’American River, à pagayer dans le kayak de sécurité et à ramener au ponton des habitants de Sacramento un peu pompettes, avant de rentrer à la fac bronzé et nettement plus costaud. Kassia l’a remarqué. Au printemps de notre dernière année, il était devenu un habitué de sa colocation entre filles, le seul homme des soirées vin et des comédies romantiques. Il nous a fallu attendre presque la remise des diplômes pour nous&nbsp;décider.",
    fr_status: "needs native review",
    fr_flag: "Check: “chase kayak” (kayak de sécurité), “tipsy Sacramentans” (habitants de Sacramento un peu pompettes), “returned to school tanned and noticeably stronger” (rentrer à la fac bronzé et nettement plus costaud), “all-girls house” (colocation entre filles), “rom coms” (comédies romantiques)."
  },
  story_p3: {
    en: "Then came the firsts. The summer after graduation, Raphaël taught Kassia to drive. She taught him where he’d left the keys, then helped him land the job that started his career in tech. In the winter of 2020, mid-pandemic, he taught her to ski: six months on the road, a month at a time from Jackson&nbsp;Hole to Taos, more than thirty days on skis in her first season. She taught him to lose at cards. Somewhere in there, we grew&nbsp;up.",
    fr: "Puis sont venues les premières fois. L’été après nos diplômes, Raphaël a appris à Kassia à conduire. Elle lui a appris à retrouver ses clés, puis l’a aidé à décrocher le poste qui a lancé sa carrière dans la tech. Pendant l’hiver 2020, en pleine pandémie, il lui a appris à skier&nbsp;: six mois sur la route, un mois à la fois de Jackson&nbsp;Hole à Taos, plus de trente jours de ski dès sa première saison. Elle lui a appris à perdre aux cartes. Quelque part en chemin, nous avons&nbsp;grandi.",
    fr_status: "needs native review"
  },
  story_p4: {
    en: "Ten years in, we are finally ready to get married. We hope you’ll be&nbsp;there.",
    fr: "Dix ans plus tard, nous sommes enfin prêts à nous marier. Nous espérons que vous serez&nbsp;là.",
    fr_status: "needs native review"
  },

  /* Why Italy (small block above the venue, no heading) */
  italy_label: { en: "Why Italy", fr: "Pourquoi l’Italie", fr_status: "needs native review" },
  italy_title: { en: "Two roads to Italy", fr: "Deux chemins vers l’Italie", fr_status: "needs native review" },
  italy_text: {
    en: "Italy made an indelible imprint on both of our lives from a young age. For&nbsp;Raph, it was the 2006 World Cup final, when Italy beat France on penalties and he swore off anything Italian for life, despite his mother being a professor of Italian. Raph would like the record to show that France went on to win the World Cup in 2018, and that Italy has missed the last three.",
    fr: "L’Italie a marqué nos deux vies dès notre jeunesse. Pour&nbsp;Raph, ce fut la finale de la Coupe du monde 2006, quand l’Italie a battu la France aux tirs au but et qu’il a juré de bouder tout ce qui était italien pour le reste de sa vie, alors même que sa mère était professeure d’italien. Raph tient à ce qu’il soit consigné que la France a remporté la Coupe du monde en 2018, et que l’Italie a manqué les trois suivantes.",
    fr_status: "needs native review"
  },
  italy_text2: {
    en: "For Kassia, it was college, when her aunt and cousins lived in Florence and she could spend weeks at a time visiting and exploring. After Raph’s parents retired near Lake&nbsp;Albano, we couldn’t think of a better excuse to bring everyone we love to one of our favorite corners of the world. Ask Raph in October 2027 whether he has lifted his embargo on&nbsp;Italy.",
    fr: "Pour Kassia, ce furent ses années d’université, quand sa tante et ses cousins vivaient à Florence et qu’elle pouvait y passer des semaines entières à visiter et à explorer. Quand les parents de Raph ont pris leur retraite près du lac&nbsp;Albano, nous n’avons pas trouvé de meilleur prétexte pour réunir tous ceux que nous aimons dans l’un de nos coins du monde préférés. Demandez à Raph en octobre 2027 s’il a levé son embargo sur&nbsp;l’Italie.",
    fr_status: "needs native review"
  },

  /* Venue */
  venue_label: { en: "Venue", fr: "Lieu", fr_status: "needs native review" },
  venue_title: { text: "Villa del Cardinale" },
  venue_img_alt: {
    en: "Line drawing of the front of Villa del Cardinale, with its bell tower and two cypress trees",
    fr: "Dessin au trait de la façade de la Villa del Cardinale, avec son clocher et deux cyprès",
    fr_status: "needs native review"
  },
  venue_img_caption: { text: "Villa del Cardinale, 1629" },
  venue_text: {
    en: "Villa del Cardinale was built in 1629 as a hunting lodge for Cardinal Gerolamo Colonna. It stands on the remains of a Roman house, at the highest point of the crater that holds Lake Albano, a short distance from the papal summer palace at Castel Gandolfo. Its frescoes are original. Of all the villas we saw in a week, it is the one we knew at once.",
    fr: "La Villa del Cardinale a été construite en 1629 comme pavillon de chasse pour le cardinal Gerolamo Colonna. Elle s’élève sur les vestiges d’une maison romaine, au point le plus haut du cratère qui abrite le lac Albano, non loin du palais d’été des papes à Castel Gandolfo. Ses fresques sont d’origine. De toutes les villas visitées en une semaine, c’est celle que nous avons reconnue tout de suite.",
    fr_status: "needs native review"
  },
  tower_alt: { en: "Tower of Villa del Cardinale", fr: "La tour de la Villa del Cardinale", fr_status: "needs native review" },
  tower_caption: { en: "The tower", fr: "La tour", fr_status: "needs native review" },
  aerial_alt: { en: "Villa del Cardinale above Lake Albano", fr: "La Villa del Cardinale au-dessus du lac Albano", fr_status: "needs native review" },
  aerial_caption: { en: "Above Lake Albano", fr: "Au-dessus du lac Albano", fr_status: "needs native review" },
  venue_rest: {
    en: "We’ll show you the rest in person. In the meantime, <a href=\"#lore\">the lore of the lake</a>.",
    fr: "Le reste, nous vous le montrerons sur place. En attendant, <a href=\"#lore\">les légendes du lac</a>.",
    fr_status: "needs native review"
  },

  /* Weekend (What to wear is its last row) */
  weekend_label: { en: "Weekend", fr: "Week-end", fr_status: "needs native review" },
  weekend_title: { en: "Thursday to Sunday", fr: "Du jeudi au dimanche", fr_status: "needs native review" },
  toast_alt: {
    en: "Raphaël swinging Kassia around on a lawn, her dress flying, black-and-white film photograph",
    fr: "Raphaël fait tourner Kassia sur une pelouse, sa robe envolée, photographie argentique en noir et blanc",
    fr_status: "needs native review"
  },
  film_alt: {
    en: "Kassia and Raphaël laughing beside a sculpture of giant pearls in a park, black-and-white film photograph",
    fr: "Kassia et Raphaël riant à côté d’une sculpture de perles géantes dans un parc, photographie argentique en noir et blanc",
    fr_status: "needs native review"
  },
  film_caption: { text: "Golden&nbsp;Gate&nbsp;Park&nbsp;· San&nbsp;Francisco" },
  toast_caption: {
    en: "The Conservatory of&nbsp;Flowers<br>The day we got engaged",
    fr: "Le Conservatory of&nbsp;Flowers<br>Le jour de nos fiançailles",
    fr_status: "needs native review"
  },
  thu_day: { en: "Thursday, October&nbsp;7", fr: "jeudi 7&nbsp;octobre", fr_status: "needs native review" },
  thu_text: {
    en: "Arriving early? Join us on Thursday for a walk into the town of Castel Gandolfo, followed by an aperitivo hosted by us. Details to follow.",
    fr: "Vous arrivez en avance ? Rejoignez-nous le jeudi pour une promenade dans la ville de Castel Gandolfo, suivie d’un aperitivo que nous offrons. Détails à suivre.",
    fr_status: "needs native review"
  },
  fri_day: { en: "Friday, October&nbsp;8", fr: "vendredi 8&nbsp;octobre", fr_status: "needs native review" },
  fri_time: { en: "5:00 pm, Villa del&nbsp;Cardinale", fr: "17 h, Villa del&nbsp;Cardinale", fr_status: "needs native review" },
  fri_text: {
    en: "Guests are asked to arrive by 4:30, when cocktails begin. The ceremony starts at five, followed by dinner and a party.",
    fr: "Accueil des invités à 16&nbsp;h&nbsp;30 autour d’un cocktail. La cérémonie commence à 17&nbsp;h, suivie du dîner et de la fête.",
    fr_status: "needs native review"
  },
  sat_day: { en: "Saturday, October&nbsp;9", fr: "samedi 9&nbsp;octobre", fr_status: "needs native review" },
  sat_text: {
    en: "No plans. A day to rest by the lake, visit the papal palace and gardens in Castel Gandolfo, or take the train into Rome.",
    fr: "Aucun programme. Une journée pour se reposer au bord du lac, visiter le palais pontifical et ses jardins à Castel Gandolfo, ou prendre le train pour Rome.",
    fr_status: "needs native review"
  },
  sun_day: { en: "Sunday, October&nbsp;10", fr: "dimanche 10&nbsp;octobre", fr_status: "needs native review" },
  sun_text: { en: "Departures.", fr: "Départs.", fr_status: "needs native review" },
  dress_label: { en: "What to wear", fr: "Tenue", fr_status: "needs native review" },
  dress_text: {
    en: "Black tie optional: tuxedo, dark formal suit, or floor-length dress. The villa rewards a little formality. More guidance to follow.",
    fr: "Tenue de soirée : smoking ou robe longue souhaités. Un costume sombre convient également. La villa mérite un peu de cérémonie. D’autres précisions suivront.",
    fr_status: "needs native review"
  },

  /* Travel */
  travel_label: { en: "Travel", fr: "Accès", fr_status: "needs native review" },
  travel_title: { en: "From Rome to the lake", fr: "De Rome au lac", fr_status: "needs native review" },
  lake_img_alt: {
    en: "Lake Albano from above, photographed at the villa",
    fr: "Le lac Albano vu d’en haut, photographié depuis la villa",
    fr_status: "needs native review"
  },
  lake_img_caption: { text: "Lago Albano" },
  map_alt: {
    en: "Line map: the coast at Fiumicino, Rome, Fiumicino and Ciampino airports, the train from Termini to Castel Gandolfo, Lake Albano and the villa",
    fr: "Carte au trait&nbsp;: la côte à Fiumicino, Rome, les aéroports de Fiumicino et de Ciampino, le train de Termini à Castel Gandolfo, le lac Albano et la villa",
    fr_status: "needs native review"
  },
  map_rome: { text: "Roma" },
  map_caption: { en: "Dashed line: the train from Termini<br>◆&nbsp;Villa del&nbsp;Cardinale", fr: "En pointillé : le train depuis Termini<br>◆&nbsp;Villa del&nbsp;Cardinale", fr_status: "needs native review" },
  air_label: { en: "By air", fr: "En avion", fr_status: "needs native review" },
  air_text: {
    en: "Fly into Rome Fiumicino (FCO), about 40 km away. If you’re coming from elsewhere in Europe, Ciampino (CIA) is a lot closer.",
    fr: "Le plus simple est d’atterrir à Rome Fiumicino (FCO), à environ 40 km. Si vous venez d’ailleurs en Europe, Ciampino (CIA) est beaucoup plus proche.",
    fr_status: "needs native review"
  },
  train_label: { en: "By train", fr: "En train", fr_status: "needs native review" },
  train_text: {
    en: "There’s no direct train from the airport. If you’re arriving early, we’d go into Rome first, stay a night or two, and take the regional train from Termini out to Castel Gandolfo station on Thursday. It’s about 45 minutes.",
    fr: "Il n’y a pas de train direct depuis l’aéroport. Si vous arrivez en avance, nous vous conseillons de passer d’abord par Rome, d’y rester une nuit ou deux, puis de prendre le jeudi le train régional de Termini jusqu’à la gare de Castel Gandolfo. Le trajet dure environ 45 minutes.",
    fr_status: "needs native review"
  },
  villa_label: { en: "To the villa", fr: "Jusqu’à la villa", fr_status: "needs native review" },
  villa_text: {
    en: "The villa sits on the crater rim above Castel Gandolfo (technically in Rocca di&nbsp;Papa), so you’ll need a car, taxi, or shuttle from the hotel. We’re sorting out a shuttle and will post it here.",
    fr: "La villa se trouve sur le bord du cratère, au-dessus de Castel Gandolfo (sur la commune de Rocca di&nbsp;Papa), il vous faudra une voiture, un taxi ou la navette depuis l’hôtel. Nous organisons une navette et en donnerons les détails ici.",
    fr_status: "needs native review"
  },

  /* Stay */
  stay_label: { en: "Stay", fr: "Hébergement", fr_status: "needs native review" },
  stay_title: { en: "In Castel Gandolfo", fr: "À Castel Gandolfo", fr_status: "needs native review" },
  stay_text: {
    en: "Hotel Castel Vecchio in Castel Gandolfo is the hotel the villa works with, and it’s a short walk to town. Booking info is coming soon, along with a few other places at different prices.",
    fr: "L’hôtel Castel Vecchio, à Castel Gandolfo, est l’hôtel partenaire de la villa, à quelques pas du centre. Les informations de réservation arrivent bientôt, avec quelques autres adresses à différents prix.",
    fr_status: "needs native review"
  },

  /* Lore: the legends of the lake, as the villa tells them. Last section, after Questions; linked from the Venue, Questions and footer. Not in the nav. */
  lore_label: { en: "Lore", fr: "Légendes", fr_status: "needs native review" },
  lore_title: { en: "The Lore of the Lake", fr: "Les légendes du lac", fr_status: "needs native review" },
  lore_standfirst: {
    en: "If you talked to Kassia at all in the summer of 2026, you heard about the <em>Odyssey</em>. It led to the <em>Aeneid</em>, and, you will be shocked to learn, into wedding planning.",
    fr: "Si vous avez parlé à Kassia à l’été 2026, vous avez forcément entendu parler de l’<em>Odyssée</em>. Elle l’a menée à l’<em>Énéide</em> et, vous serez stupéfaits de l’apprendre, jusque dans l’organisation du mariage.",
    fr_status: "needs native review"
  },
  lore_c1_title: { en: "Before Rome", fr: "Avant Rome", fr_status: "needs native review" },
  lore_c1_p1: {
    en: "The legend of Lake Albano is older than Rome. Ascanius, son of Aeneas, founded Alba Longa along the crater’s edge. The Romans knew him as Iulus, and Julius Caesar traced his family to him. In Vergil’s <em>Aeneid</em>, old man Tiberinus, the river god, foretells it.",
    fr: "La légende du lac Albano est plus ancienne que Rome. Ascagne, fils d’Énée, fonda Albe-la-Longue sur le bord du cratère. Les Romains l’appelaient Iule, et Jules César faisait remonter sa famille jusqu’à lui. Dans l’<em>Énéide</em> de Virgile, le vieux Tibérinus, dieu du fleuve, l’annonce.",
    fr_status: "needs native review"
  },
  lore_c1_verse: {
    en: "In thirty circling years, Ascanius <br>Will found the city Alba — glorious&nbsp;name.",
    fr: "Quand trente années auront tourné, Ascagne<br>fondera la ville d’Albe au nom&nbsp;glorieux.",
    fr_status: "needs native review"
  },
  lore_c1_verse_credit: {
    en: "Vergil, <em>Aeneid</em> <span class='nw'>8.47–48</span> · trans. Sarah Ruden",
    fr: "Virgile, <em>Énéide</em> VIII, <span class='nw'>47–48</span> · traduction libre",
    fr_status: "needs native review"
  },
  lore_c1_p2: {
    en: "The name comes from the white sow, with her thirty piglets, that Tiberinus offered as proof his prophecy was true: <em>alba</em> means white. Scholars have never pinned down exactly where Alba Longa stood; we like to imagine it on the heights above the lake, conveniently close to the villa.",
    fr: "Le nom vient de la truie blanche et de ses trente porcelets, que Tibérinus donna pour preuve de sa prophétie&nbsp;: <em>alba</em> veut dire blanche. Nul n’a jamais pu situer exactement Albe-la-Longue&nbsp;; nous aimons l’imaginer sur les hauteurs au-dessus du lac, opportunément près de la villa.",
    fr_status: "needs native review"
  },
  lore_c1_p3: {
    en: "The myth tells that a descendant of Aeneas, Rhea Silvia, bore twins by the god Mars: Romulus and Remus. Her uncle Amulius had seized the throne of Alba Longa from her father, Numitor, and the twins were abandoned, suckled by a she-wolf, and raised by a shepherd. After restoring their grandfather to the throne, they went on to found Rome. Well, Romulus did anyway, after a touch of fratricide.",
    fr: "Selon le mythe, une descendante d’Énée, Rhéa Silvia, eut du dieu Mars des jumeaux&nbsp;: Romulus et Rémus. Son oncle Amulius avait pris à son père, Numitor, le trône d’Albe-la-Longue&nbsp;; les jumeaux furent abandonnés, allaités par une louve et élevés par un berger. Après avoir rendu le trône à leur grand-père, ils partirent fonder Rome. Enfin, Romulus, du moins, après un léger fratricide.",
    fr_status: "needs native review"
  },
  lore_c2_title: { en: "The summer court", fr: "La cour d’été", fr_status: "needs native review" },
  lore_c2_p1: {
    en: "Romans loved the rolling hills around Lake Albano long before the popes did. From the late Roman Republic, wealthy families built villas along the shore. In the 1600s, Pope Urban VIII made Castel Gandolfo his summer residence, and the nobility of his court, naturally wanting to be nearby, built houses of their own, often on top of Roman ruins. Villa del Cardinale is one of them. According to the villa, the house that first stood here was Roman, and it lodged consuls and generals during the Feriae Latinae. Once a year, in a truce, Rome’s consuls climbed Monte Cavo above the lake to sacrifice a white bull to Jupiter.",
    fr: "Les Romains aimaient les collines autour du lac Albano bien avant les papes. Dès la fin de la République romaine, de riches familles bâtirent des villas sur ses rives. Au XVIIe siècle, le pape Urbain VIII fit de Castel Gandolfo sa résidence d’été, et la noblesse de sa cour, tenant naturellement à rester proche, s’y fit construire des maisons, souvent sur des ruines romaines. La Villa del Cardinale est l’une d’elles. Selon la villa, la maison qui s’élevait ici d’abord était romaine et logeait consuls et généraux pendant les Féries latines. Une fois l’an, à la faveur d’une trêve, les consuls de Rome montaient au mont Cavo, au-dessus du lac, sacrifier un taureau blanc à Jupiter.",
    fr_status: "needs native review"
  },
  lore_c2_p2: {
    en: "The villa you will visit in October 2027 was built in 1629 for Gerolamo Colonna, a cardinal at twenty-three. It came to be through a wedding: as the villa tells it, his sister Anna married Taddeo Barberini, nephew of Pope Urban VIII, and the pope gifted her the grounds. Apropos of nothing, the term “nepotism” comes from <em>nipote</em>, Italian for nephew, and Pope Urban VIII was among its champions.",
    fr: "La villa que vous découvrirez en octobre 2027 fut construite en 1629 pour Gerolamo Colonna, cardinal à vingt-trois ans. Elle doit son existence à un mariage&nbsp;: selon la villa, sa sœur Anna épousa Taddeo Barberini, neveu du pape Urbain VIII, et le pape lui offrit le terrain. Sans aucun rapport, le mot « népotisme » vient de <em>nipote</em>, « neveu » en italien, et Urbain VIII en fut l’un des champions.",
    fr_status: "needs native review"
  },
  lore_c2_p3: {
    en: "The architect associated with the villa is Antonio Del Grande, working in the style of the late Renaissance with Mannerist influences. As you walk in through the three-arched entrance, you’ll notice the contrast: dark, intimate interiors against light, open views and gardens along the villa walls.",
    fr: "L’architecte associé à la villa est Antonio Del Grande, dans le style de la fin de la Renaissance aux influences maniéristes. En franchissant l’entrée à trois arcades, vous remarquerez le contraste&nbsp;: des intérieurs sombres et intimes face aux vues ouvertes et lumineuses et aux jardins qui longent les murs de la villa.",
    fr_status: "needs native review"
  },
  lore_c3_title: {
    en: "The brother with a past",
    fr: "Le frère au passé trouble",
    fr_status: "needs native review"
  },
  lore_c3_p1: {
    en: "The cardinal’s little brother had a past. As the villa tells it, young Carlo Colonna had a fatal quarrel with a Caetani prince from a rival Roman family. Afterwards, he took holy orders and a new name, Egidio: a fresh start, and a very Roman one. Rome began with a fratricide, after all, so he was in good company. He rose to archbishop, and the villa became the papal court’s favorite place to be entertained, with Pope Alexander VII among the guests. Egidio’s youth is said to have inspired Fra Cristoforo, the friar with a past in Manzoni’s <em>The Betrothed</em> (<em>I&nbsp;promessi&nbsp;sposi</em>). You will have to read it and let us know if you see the similarities.",
    fr: "Le petit frère du cardinal avait un passé. À en croire la villa, le jeune Carlo Colonna eut une querelle fatale avec un prince Caetani, d’une famille romaine rivale. Il entra ensuite dans les ordres sous un nouveau nom, Egidio&nbsp;: un nouveau départ, et très romain. Rome est née d’un fratricide, après tout&nbsp;; il était en bonne compagnie. Il devint archevêque, et la villa devint le lieu de divertissement préféré de la cour pontificale, avec le pape Alexandre VII parmi ses invités. La jeunesse d’Egidio aurait inspiré Fra Cristoforo, le frère au passé trouble des <em>Fiancés</em> (<em>I&nbsp;promessi&nbsp;sposi</em>) de Manzoni. À vous de le lire et de nous dire si vous voyez les ressemblances.",
    fr_status: "needs native review",
    fr_flag: "Check the dry tone: “un nouveau départ, et très romain”."
  },
  lore_nudge: {
    en: "For the curious: the lore of the lake&nbsp;↓",
    fr: "Pour les curieux&nbsp;: les légendes du lac&nbsp;↓",
    fr_status: "needs native review"
  },
  lore_plate_alt: {
    en: "Lake Albano and its crater rim, seen from above",
    fr: "Le lac Albano et le bord de son cratère, vus d’en haut",
    fr_status: "needs native review"
  },
  reading_label: { en: "Optional reading", fr: "Lectures facultatives", fr_status: "needs native review" },
  reading1_title: { en: "The Aeneid", fr: "L’Énéide", fr_status: "needs native review" },
  reading1_by: {
    en: "Vergil",
    fr: "Virgile",
    fr_status: "needs native review"
  },
  reading1_text: {
    en: "The poem behind the legend. Aeneas flees Troy and reaches Italy, and the gods keep announcing what his son Ascanius will found: Alba Longa first, Rome eventually. If you read only three bits: Book&nbsp;1 (Jupiter’s prophecy of Rome), Book&nbsp;6 (the parade of Rome’s future heroes, including the kings of Alba), and Book&nbsp;8 (the shield, with the she-wolf and the twins). Translations: Sarah Ruden (our pick), Robert Fagles or Robert Fitzgerald.",
    fr: "Le poème derrière la légende. Énée fuit Troie et gagne l’Italie, et les dieux n’en finissent pas d’annoncer ce que son fils Ascagne fondera&nbsp;: Albe-la-Longue d’abord, Rome ensuite. Si vous n’en lisez que trois passages&nbsp;: le livre&nbsp;I (la prophétie de Jupiter sur Rome), le livre&nbsp;VI (le défilé des futurs héros de Rome, dont les rois d’Albe) et le livre&nbsp;VIII (le bouclier, avec la louve et les jumeaux).",
    fr_status: "needs native review",
    fr_flag: "French translation(s) to recommend: to be confirmed."
  },
  reading2_title: { en: "I promessi sposi <span class=\"alt\">(The Betrothed)</span>", fr: "Les Fiancés <span class=\"alt\">(I promessi sposi)</span>", fr_status: "needs native review" },
  reading2_by: { en: "Alessandro Manzoni", fr: "Alessandro Manzoni", fr_status: "needs native review" },
  reading2_text: {
    en: "Italy’s great novel, set in 1628 to 1630, the very years the villa went up. Two villagers want to marry and spend most of the book prevented from doing so. It features Fra Cristoforo, whom the villa claims as one of its own. It opens on Lake Como, which we have decided to forgive. Try the first eight chapters, which end with the famously botched “surprise wedding.” Translations: Michael F. Moore (Modern Library) or Bruce Penman (Penguin Classics).",
    fr: "Le grand roman italien, qui se déroule de 1628 à 1630, les années mêmes où la villa fut bâtie. Deux villageois veulent se marier et passent presque tout le livre empêchés de le faire. On y croise Fra Cristoforo, que la villa revendique comme l’un des siens. Le roman s’ouvre sur le lac de Côme, que nous avons décidé de pardonner. Essayez les huit premiers chapitres, qui s’achèvent sur le fameux « mariage par surprise » raté.",
    fr_status: "needs native review"
  },
  lore_close_la: { text: "Tantae molis erat Romanam condere gentem." },
  lore_close: {
    en: "A weighty work, to found the Roman nation!",
    fr: "Si lourde tâche, fonder la nation romaine&nbsp;!",
    fr_status: "needs native review"
  },
  lore_close_credit: {
    en: "Vergil, <em>Aeneid</em> 1.33 · trans. Sarah Ruden",
    fr: "Virgile, <em>Énéide</em> I, 33 · traduction libre",
    fr_status: "needs native review"
  },

  /* Questions */
  questions_label: { en: "Questions", fr: "Questions", fr_status: "needs native review" },
  questions_title: {
    en: "Write to us anytime.",
    fr: "Écrivez-nous quand vous voulez.",
    fr_status: "needs native review"
  },
  email: { text: "raphaelkassia2027@gmail.com" },

  /* Footer: the serene hours */
  footer_left_caption: {
    en: "Jackson&nbsp;Hole<br>By&nbsp;Kassia",
    fr: "Jackson&nbsp;Hole<br>Par&nbsp;Kassia",
    fr_status: "needs native review"
  },
  footer_left_alt: {
    en: "Raphaël skiing in Jackson Hole, looking back at the camera",
    fr: "Raphaël à ski à Jackson Hole, se retournant vers l’objectif",
    fr_status: "needs native review"
  },
  footer_center_caption: { en: "Bryce Canyon National&nbsp;Park", fr: "Parc national de Bryce&nbsp;Canyon", fr_status: "needs native review" },
  footer_center_alt: {
    en: "Kassia and Raphaël smiling on a winter hike among red rock cliffs in Bryce Canyon National Park, Utah",
    fr: "Kassia et Raphaël souriants lors d’une randonnée hivernale parmi les falaises rouges du parc national de Bryce Canyon, dans l’Utah",
    fr_status: "needs native review"
  },
  footer_right_caption: {
    en: "The&nbsp;Dolomites<br>By&nbsp;Raphaël",
    fr: "Les&nbsp;Dolomites<br>Par&nbsp;Raphaël",
    fr_status: "needs native review"
  },
  footer_right_alt: {
    en: "Kassia skiing below a frozen waterfall in the Dolomites, looking back",
    fr: "Kassia à ski sous une cascade gelée dans les Dolomites, se retournant",
    fr_status: "needs native review"
  },
  footer_motto: { text: "Horas non numero nisi serenas" },
  palazzo_caption: { en: "Palazzo Pontificio<br>Castel&nbsp;Gandolfo", fr: "Palais pontifical<br>Castel&nbsp;Gandolfo", fr_status: "needs native review" },
  palazzo_alt: {
    en: "Line drawing by Kassia of the papal palace at Castel Gandolfo, with its clock and central gateway",
    fr: "Dessin au trait de Kassia du palais pontifical de Castel Gandolfo, avec son horloge et son portail central",
    fr_status: "needs native review"
  },
  fountain_caption: { en: "Bernini’s fountain<br>Piazza&nbsp;della&nbsp;Libertà", fr: "Fontaine du Bernin<br>Piazza&nbsp;della&nbsp;Libertà", fr_status: "needs native review" },
  fountain_alt: {
    en: "Line drawing by Kassia of Bernini’s fountain in the square in front of the papal palace",
    fr: "Dessin au trait de Kassia de la fontaine du Bernin, sur la place devant le palais pontifical",
    fr_status: "needs native review"
  },
  footer_translation: {
    en: "Inscribed on the villa’s sundial in 1629. Look up when you first walk in, and you’ll recognize it. Sundials of the age typically warned of time running out. This one chooses to count only the hours when the sun shines: <em>I only count the serene hours</em>. Our ceremony falls within those serene hours, and we hope the years after it will too. The dancing comes after dark; we doubt Cardinal Colonna ever pictured E&#8209;40 being played in his&nbsp;hunting&nbsp;lodge.",
    fr: "Inscrite sur le cadran solaire de la villa en 1629. Levez les yeux en arrivant, vous la reconnaîtrez. Les cadrans solaires de l’époque rappelaient en général que le temps passe. Celui-ci a choisi de ne compter que les heures de soleil&nbsp;: <em>je ne compte que les heures sereines</em>. Notre cérémonie s’inscrit dans ces heures sereines, et nous espérons que les années qui suivront aussi. La danse viendra à la nuit tombée&nbsp;; nous doutons que le Cardinal Colonna ait jamais imaginé du rap californien résonner dans son&nbsp;pavillon&nbsp;de&nbsp;chasse.",
    fr_status: "needs native review"
  },
  colophon: {
    en: "Words&nbsp;by&nbsp;Kassia&nbsp;· Site&nbsp;by&nbsp;Raphaël<br>Film&nbsp;photographs&nbsp;by&nbsp;Nick&nbsp;Dean<br>Set&nbsp;in&nbsp;Neuton",
    fr: "Textes&nbsp;de&nbsp;Kassia&nbsp;· Site&nbsp;de&nbsp;Raphaël<br>Photographies&nbsp;argentiques de&nbsp;Nick&nbsp;Dean<br>Composé&nbsp;en&nbsp;Neuton",
    fr_status: "needs native review"
  },
  footer_names: {
    en: "Kassia&nbsp;&amp;&nbsp;Raphaël · October&nbsp;8,&nbsp;2027",
    fr: "Kassia&nbsp;&amp;&nbsp;Raphaël · 8&nbsp;octobre&nbsp;2027",
    fr_status: "needs native review"
  }
};
