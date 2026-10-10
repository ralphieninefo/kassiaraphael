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
    en: "We’ll show you the rest in person.",
    fr: "Le reste, nous vous le montrerons sur place.",
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
