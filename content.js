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
  nav_label: { en: "Sections", fr: "Rubriques", fr_status: "needs native review" },

  /* Hero */
  hero_photo_alt: {
    en: "Kassia and Raphaël laughing together in a garden, black-and-white photograph",
    fr: "Kassia et Raphaël riant ensemble dans un jardin, photographie en noir et blanc",
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
    en: "Meeting at SF State",
    fr: "Rencontre à SF State",
    fr_status: "needs native review"
  },
  story_photo_alt: {
    en: "Raphaël kissing Kassia’s cheek at their graduation, both in caps and gowns, black-and-white photograph",
    fr: "Raphaël embrasse Kassia sur la joue le jour de leur remise de diplômes, en toge et toque, photographie en noir et blanc",
    fr_status: "needs native review"
  },
  story_caption: {
    en: "San Francisco State · Graduation",
    fr: "San Francisco State · Remise des diplômes",
    fr_status: "needs native review"
  },
  story_p1: {
    en: "We met in our first week at San Francisco State University and quickly became friends. Then Raphaël left for a year in Paris. Even with nine hours between us, we stayed in&nbsp;touch.",
    fr: "On s’est rencontrés dès la première semaine à San Francisco State University, et on est rapidement devenus amis. Puis Raphaël est parti un an à Paris. Même avec neuf heures de décalage, on est restés en&nbsp;contact.",
    fr_status: "needs native review"
  },
  story_p2: {
    en: "Back in the States, Raphaël traded school for the river: the American River in Sacramento, where he spent his summers in a chase kayak, ferrying sailors back to the dock, some a little tipsy, some sunburnt. That summer left him tanned (for once) and noticeably stronger. Kassia noticed. By spring of our senior year he was a fixture at the house Kassia shared with other girls, sometimes the only man at wine nights and rom&nbsp;coms. At the end of the year, we decided to stay together in San&nbsp;Francisco.",
    fr: "De retour aux États-Unis, Raphaël a troqué l’école pour la rivière : l’American River, à Sacramento, où il a passé ses étés en kayak de sécurité, à ramener au ponton des marins un peu pompettes ou grillés par le soleil. Cet été-là lui a permis d’être bronzé (pour une fois) et apparemment plus costaud. Kassia l’a bien remarqué. Au printemps de notre dernière année, il était devenu un habitué de la maison où Kassia vivait en colocation avec d’autres filles, parfois seul homme aux soirées vin et comédies romantiques. À la fin de l’année, on a décidé de rester ensemble à San&nbsp;Francisco.",
    fr_status: "needs native review",
    fr_flag: "Check: “marins un peu pompettes ou grillés par le soleil” (playful for the kayak-rescue crowd), the end of the paragraph (“rester ensemble à San Francisco”)."
  },
  story_p3: {
    en: "Then came the firsts. Raphaël taught Kassia to drive, then to ski. During the pandemic we spent six months on the road, from Mammoth in California to Jackson in Wyoming and Taos in New Mexico, stringing together more than thirty days of skiing in a single season. In return, Kassia taught him not to burn the eggs. There were the Alps, and trips with Raphaël’s family in France, in Italy, and all over the&nbsp;world.",
    fr: "Puis sont venues les premières fois. Raphaël a appris à Kassia à conduire, puis à skier. Pendant la pandémie, on a passé six mois sur la route, de Mammoth en Californie à Jackson dans le Wyoming, puis à Taos au Nouveau-Mexique, en enchaînant plus de trente jours de ski en une seule saison. En échange, Kassia lui a appris à ne pas brûler les œufs. Il y a eu les Alpes, et aussi les voyages avec la famille de Raph, en France, en Italie, et partout dans le&nbsp;monde.",
    fr_status: "needs native review"
  },
  story_p4: {
    en: "Ten years in, we are finally ready to get married. We hope you’ll be there.",
    fr: "Dix ans plus tard, on est enfin prêts à se marier. On espère que vous serez&nbsp;là.",
    fr_status: "needs native review"
  },

  /* Why Italy (small block above the venue, no heading) */
  italy_label: { en: "Why Italy", fr: "Pourquoi l’Italie", fr_status: "needs native review" },
  italy_text: {
    en: "Italy came to us in stages. Kassia’s aunt and cousins lived in Florence for several years, where she was lucky enough to visit often. Then Barbara and Michel settled in the Castelli Romani, a few minutes from Lake Albano. Looking at different places, we thought that somewhere close to family in Italy, with beautiful views, good food and good wine, was a very good option.",
    fr: "L’Italie est venue à nous par étapes. La tante et les cousins de Kassia ont vécu plusieurs années à Florence, où elle a eu la chance de leur rendre visite souvent. Puis Barbara et Michel se sont installés dans les Castelli Romani, à quelques minutes du lac Albano. En regardant différents endroits, on s’est dit qu’un lieu proche des parents, en Italie, avec de belles vues, de la bonne bouffe et du bon vin, était une très bonne option.",
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
    en: "We’ll show you the rest in person. In the meantime, <a href=\"#lore\">the legends of the lake</a>.",
    fr: "Le reste, nous vous le montrerons sur place. En attendant, <a href=\"#lore\">les légendes du lac</a>.",
    fr_status: "needs native review"
  },

  /* Weekend (What to wear is its last row) */
  weekend_label: { en: "Weekend", fr: "Week-end", fr_status: "needs native review" },
  weekend_title: { en: "Thursday to Sunday", fr: "Du jeudi au dimanche", fr_status: "needs native review" },
  toast_alt: {
    en: "Kassia laughing as Raphaël smiles at her on the lawn, the white glasshouse dome of the Conservatory of Flowers behind them, black-and-white photograph",
    fr: "Kassia rit et Raphaël lui sourit sur la pelouse, devant le dôme de verre blanc du Conservatoire des fleurs, photographie en noir et blanc",
    fr_status: "needs native review"
  },
  toast_caption: {
    en: "The Conservatory of&nbsp;Flowers · The day we got engaged",
    fr: "Le Conservatory of&nbsp;Flowers · Le jour de nos fiançailles",
    fr_status: "needs native review"
  },
  thu_day: { en: "Thursday, October&nbsp;7", fr: "jeudi 7&nbsp;octobre", fr_status: "needs native review" },
  thu_text: {
    en: "Arriving early? Join us on Thursday for a walk into the town of Castel Gandolfo, followed by an aperitivo hosted by us. Details to follow.",
    fr: "Vous arrivez en avance ? Rejoignez-nous le jeudi pour une promenade dans la ville de Castel Gandolfo, suivie d’un aperitivo que nous offrons. Détails à suivre.",
    fr_status: "needs native review"
  },
  fri_day: { en: "Friday, October&nbsp;8", fr: "vendredi 8&nbsp;octobre", fr_status: "needs native review" },
  fri_time: { en: "5:00 pm, Villa del Cardinale", fr: "17 h, Villa del Cardinale", fr_status: "needs native review" },
  fri_text: {
    en: "Guests are asked to arrive by 4:30. Cocktails will be served while you wait. The ceremony begins at five, followed by dinner and a party.",
    fr: "Merci d’arriver avant 16 h 30. Des cocktails seront servis en attendant la cérémonie, qui commence à 17 h, suivie du dîner et d’une fête.",
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
    fr: "Carte au trait : la côte à Fiumicino, Rome, les aéroports de Fiumicino et de Ciampino, le train de Termini à Castel Gandolfo, le lac Albano et la villa",
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
    en: "The villa is up the hill in Rocca di Papa, so you’ll need a car, taxi, or shuttle from the hotel. We’re sorting out a shuttle and will post it here.",
    fr: "La villa se trouve en haut de la colline, à Rocca di Papa : il vous faudra une voiture, un taxi ou la navette depuis l’hôtel. Nous organisons une navette et en donnerons les détails ici.",
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

  /* Lore: the legends of the lake, as the villa tells them. Placed below Stay, above Questions. Not in the nav. */
  lore_label: { en: "Lore", fr: "Légendes", fr_status: "needs native review" },
  lore_title: { en: "The Lore of the Lake", fr: "Les légendes du lac", fr_status: "needs native review" },
  lore_standfirst: {
    en: "Every great city needs a founding myth. Rome’s begins a few minutes from the villa.",
    fr: "Toute grande ville a besoin d’un mythe fondateur. Celui de Rome commence à quelques minutes de la villa.",
    fr_status: "needs native review"
  },
  lore_one: { en: "One", fr: "Un", fr_status: "needs native review" },
  lore_two: { en: "Two", fr: "Deux", fr_status: "needs native review" },
  lore_three: { en: "Three", fr: "Trois", fr_status: "needs native review" },
  lore_c1_title: { en: "Before Rome", fr: "Avant Rome", fr_status: "needs native review" },
  lore_c1_p1: {
    en: "According to legend, Ascanius, son of Aeneas, founded the city of Alba Longa on these slopes after Troy fell. Nobody has ever pinned down exactly where. Scholars have a soft spot for the heights above the lake, close to the villa.",
    fr: "Selon la légende, Ascagne, fils d’Énée, fonda la ville d’Albe-la-Longue sur ces pentes après la chute de Troie. Nul n’a jamais pu en fixer l’emplacement exact. Les savants ont un faible pour les hauteurs au-dessus du lac, tout près de la villa.",
    fr_status: "needs native review"
  },
  lore_c1_p2: {
    en: "Alba Longa ran the Latin League, a club of neighboring towns whose headquarters was a temple of Jupiter on the summit of Monte Cavo. Once a year the members climbed up in procession along the Sacred Way for the Feriae Latinae, sacrificed a white bull, and renewed their pact. Think of it as the original annual meeting, with better views.",
    fr: "Albe-la-Longue présidait la Ligue latine, une sorte de club de villes voisines dont le siège était un temple de Jupiter au sommet du mont Cavo. Chaque année, les membres y montaient en procession par la Voie sacrée pour les Féries latines, sacrifiaient un taureau blanc et renouvelaient leur pacte. Une assemblée générale annuelle, en somme, avec une meilleure vue.",
    fr_status: "needs native review",
    fr_flag: "“Original annual meeting, with better views” (assemblée générale annuelle, avec une meilleure vue): does the joke work in French?"
  },
  lore_c1_p3: {
    en: "Then came a succession dispute. The rightful king, Numitor, was deposed by his brother Amulius, who made Numitor’s daughter, Rhea Silvia, a Vestal. It did not go to plan: she had twins by the god Mars. Romulus and Remus were abandoned, suckled by a she-wolf, and raised by shepherds. Grown, they restored their grandfather to the throne, then left to found a city of their own on the Tiber. You may have heard of it.",
    fr: "Puis vint une querelle de succession. Le roi légitime, Numitor, fut détrôné par son frère Amulius, qui fit de la fille de Numitor, Rhéa Silvia, une vestale. Cela ne se passa pas comme prévu : elle eut des jumeaux du dieu Mars. Romulus et Rémus furent abandonnés, allaités par une louve, puis recueillis par des bergers. Devenus grands, ils rendirent le trône à leur grand-père, puis partirent fonder leur propre cité sur le Tibre. Vous en avez peut-être entendu parler.",
    fr_status: "needs native review"
  },
  lore_pull: {
    en: "Before there was a Rome, the story goes, there was a family feud on this lake.",
    fr: "Avant qu’il y ait une Rome, dit la légende, il y avait une querelle de famille sur ce lac.",
    fr_status: "needs native review"
  },
  lore_c2_title: { en: "The summer court", fr: "La cour d’été", fr_status: "needs native review" },
  lore_c2_p1: {
    en: "The Romans loved this landscape long before the popes did. From the late Republic, wealthy families built villas around the shore. In the 1600s history repeated itself with better tailoring: when Urban VIII made Castel Gandolfo his summer residence, the noble families of his court wanted to be nearby, and built country houses of their own, often on the ruins of the old ones.",
    fr: "Les Romains aimaient ce paysage bien avant les papes. Dès la fin de la République, de riches familles bâtirent des villas autour du lac. Au XVII<sup>e</sup> siècle, l’histoire se répéta, en mieux habillée : lorsque Urbain VIII fit de Castel Gandolfo sa résidence d’été, les grandes familles de sa cour voulurent s’installer à proximité et firent construire leurs propres maisons de campagne, souvent sur les ruines des anciennes.",
    fr_status: "needs native review",
    fr_flag: "“Better tailoring” (en mieux habillée): check the register."
  },
  lore_c2_p2: {
    en: "Villa del Cardinale is one of them. The house that stood here first was Roman: according to historical sources, it received consuls and generals during the Feriae Latinae. The villa you will visit was built in 1629 by Cardinal Gerolamo Colonna, born in 1604 and a cardinal at twenty-three, which is the kind of head start one does not forget.",
    fr: "La Villa del Cardinale est l’une d’elles. La maison qui s’élevait ici d’abord était romaine : selon les sources historiques, elle recevait consuls et généraux lors des Féries latines. La villa que vous découvrirez fut construite en 1629 par le cardinal Gerolamo Colonna, né en 1604 et cardinal à vingt-trois ans, ce qui est le genre d’avance qu’on n’oublie pas.",
    fr_status: "needs native review"
  },
  lore_c2_p3: {
    en: "The land came through his sister Anna: when she married Taddeo Barberini, the pope’s nephew, Urban VIII gave her the ground. The villa’s story, in other words, begins with a wedding. We take it as a good sign.",
    fr: "Le terrain lui vint par sa sœur Anna : lorsqu’elle épousa Taddeo Barberini, neveu du pape, Urbain VIII lui offrit le domaine. L’histoire de la villa commence donc par un mariage. Nous y voyons un bon présage.",
    fr_status: "needs native review"
  },
  lore_c2_p4: {
    en: "The architect was Antonio Del Grande, who later worked on the Palazzo Colonna in Rome. The style is late Renaissance with touches of Mannerism: a three-arched entrance onto the Italian garden, and interiors that are enclosed and intimate against the open views outside. Light and shadow, soul and reason, a very seventeenth-century contrast.",
    fr: "L’architecte fut Antonio Del Grande, qui travailla plus tard au palais Colonna, à Rome. Le style est celui de la fin de la Renaissance, avec des touches maniéristes : une entrée à trois arcades donnant sur le jardin à l’italienne, et des intérieurs clos et intimes face à l’ouverture des vues extérieures. L’ombre et la lumière, l’âme et la raison : un contraste très XVII<sup>e</sup> siècle.",
    fr_status: "needs native review"
  },
  lore_c3_title: { en: "The sundial that counts only the good hours", fr: "Le cadran solaire qui ne compte que les bonnes heures", fr_status: "needs native review" },
  lore_c3_p1: {
    en: "Later, Archbishop Egidio Colonna opened the villa to the papal court at Castel Gandolfo, and it became a favorite place for celebrations. Pope Alexander VII Chigi was among the guests, and he gave Egidio the sundial on the tower. Its inscription is the one set in large type under the Venue, and a fair motto for the weekend. The festivities in the pope’s honor led to the Via Alessandrina, a wooded path along the lake to the Pontifical Palace. The villa says it still connects the two.",
    fr: "Plus tard, l’archevêque Egidio Colonna ouvrit la villa à la cour pontificale de Castel Gandolfo, et elle devint un lieu de fêtes très prisé. Le pape Alexandre VII Chigi compta parmi ses hôtes et offrit à Egidio le cadran solaire de la tour. Son inscription est celle qui est écrite en grand sous la section Lieu, une devise qui convient bien à ce week-end. Les fêtes données en l’honneur du pape donnèrent naissance à la via Alessandrina, un chemin boisé qui longe le lac jusqu’au palais pontifical. La villa affirme qu’il relie encore les deux.",
    fr_status: "needs native review"
  },
  lore_c3_p2: {
    en: "The villa also tells a story about Egidio’s youth, back when he was still Carlo. As the tale goes, he took holy orders and a new name after a fatal quarrel with a Caetani prince, and Alessandro Manzoni borrowed the episode for Fra Cristoforo, the friar with a past in <em>The Betrothed</em>. We pass it along the way the villa does: as lore.",
    fr: "La villa raconte aussi une histoire sur la jeunesse d’Egidio, quand il s’appelait encore Carlo. Selon la tradition, il prit les ordres et un nouveau nom après une querelle fatale avec un prince Caetani, et Alessandro Manzoni aurait emprunté l’épisode pour Fra Cristoforo, le frère au passé trouble des <em>Fiancés</em>. Nous le rapportons comme la villa le fait : en légende.",
    fr_status: "needs native review"
  },
  lore_note_label: { en: "Found in the garden", fr: "Trouvé dans le jardin", fr_status: "needs native review" },
  lore_note_text: {
    en: "Among the classical finds on the grounds is a rock tomb attributed to the consul Gnaeus Cornelius Scipio Hispallus, cut into the cliff above the lake. Its façade is carved with twelve fasces and a curule chair, which was the Roman way of writing “very important person” on a gravestone.",
    fr: "Parmi les vestiges antiques du domaine figure une tombe rupestre attribuée au consul Cnaeus Cornelius Scipio Hispallus, taillée dans la falaise au-dessus du lac. Sa façade est ornée de douze faisceaux et d’une chaise curule, ce qui était la façon romaine d’écrire « personnage important » sur une tombe.",
    fr_status: "needs native review"
  },
  reading_label: { en: "Optional reading", fr: "Lectures facultatives", fr_status: "needs native review" },
  reading1_title: { en: "The Aeneid", fr: "L’Énéide", fr_status: "needs native review" },
  reading1_by: { en: "Virgil", fr: "Virgile", fr_status: "needs native review" },
  reading1_text: {
    en: "The poem behind the legend. Aeneas flees Troy and reaches Italy, and Jupiter promises that his son Ascanius will found Alba Longa. If you read only three bits: Book 1 (Jupiter’s prophecy of Rome), Book 6 (the parade of Rome’s future heroes, including the kings of Alba), and Book 8 (the shield, with the she-wolf and the twins). Translations: Robert Fagles, Robert Fitzgerald or Shadi Bartsch.",
    fr: "Le poème derrière la légende. Énée fuit Troie et gagne l’Italie, et Jupiter promet que son fils Ascagne fondera Albe-la-Longue. Si vous n’en lisez que trois passages : le livre I (la prophétie de Jupiter sur Rome), le livre VI (le défilé des futurs héros de Rome, dont les rois d’Albe) et le livre VIII (le bouclier, avec la louve et les jumeaux).",
    fr_status: "needs native review",
    fr_flag: "French translation(s) to recommend: to be confirmed."
  },
  reading2_title: { en: "I promessi sposi <span class=\"alt\">(The Betrothed)</span>", fr: "Les Fiancés <span class=\"alt\">(I promessi sposi)</span>", fr_status: "needs native review" },
  reading2_by: { en: "Alessandro Manzoni", fr: "Alessandro Manzoni", fr_status: "needs native review" },
  reading2_text: {
    en: "Italy’s great novel, set in 1628 to 1630, the very years the villa went up. Two villagers want to marry and spend most of the book prevented from doing so. We’d like to report a smoother experience. Lore has it that a Colonna prince from this villa inspired Fra Cristoforo, the friar with a past. It opens beside a lake. Try the first eight chapters, which end with the famously botched “surprise wedding”. Translation: Bruce Penman (Penguin Classics).",
    fr: "Le grand roman italien, qui se déroule de 1628 à 1630, les années mêmes où la villa fut bâtie. Deux villageois veulent se marier et passent presque tout le livre empêchés de le faire. Nous aimerions annoncer un parcours plus tranquille. La légende veut qu’un prince Colonna de cette villa ait inspiré Fra Cristoforo, le frère au passé trouble. Le roman s’ouvre au bord d’un lac. Essayez les huit premiers chapitres, qui s’achèvent sur le fameux « mariage par surprise » raté.",
    fr_status: "needs native review",
    fr_flag: "French edition of Les Fiancés to recommend: to be confirmed."
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
    en: "Jackson&nbsp;Hole<br>Photographed&nbsp;by&nbsp;Kassia",
    fr: "Jackson&nbsp;Hole<br>Photo : Kassia",
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
    en: "The&nbsp;Dolomites<br>Photographed&nbsp;by&nbsp;Raphaël",
    fr: "Les&nbsp;Dolomites<br>Photo : Raphaël",
    fr_status: "needs native review"
  },
  footer_right_alt: {
    en: "Kassia skiing below a frozen waterfall in the Dolomites, looking back",
    fr: "Kassia à ski sous une cascade gelée dans les Dolomites, se retournant",
    fr_status: "needs native review"
  },
  footer_motto: { text: "Horas non numero nisi serenas" },
  footer_translation: {
    en: "I count only the serene hours. Sundial at Villa del Cardinale.",
    fr: "Je ne compte que les heures sereines. Cadran solaire de la Villa del Cardinale.",
    fr_status: "needs native review"
  },
  colophon: {
    en: "Set in Neuton. Built by Raphaël.",
    fr: "Composé en Neuton. Réalisé par Raphaël.",
    fr_status: "needs native review"
  },
  footer_names: {
    en: "Kassia&nbsp;&amp;&nbsp;Raphaël · October&nbsp;8,&nbsp;2027",
    fr: "Kassia&nbsp;&amp;&nbsp;Raphaël · 8&nbsp;octobre&nbsp;2027",
    fr_status: "needs native review"
  }
};
