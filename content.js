/*
 * ALL SITE COPY LIVES HERE. Edit text in this file only; index.html just has slots.
 *
 * Each entry: { en, fr, fr_status }. An entry with only "text" is the same in both languages.
 * Simple inline HTML is allowed (<em>, <strong>, <sup>).
 *
 * French typography: type ordinary spaces. Before : ; ! ? », after «, and in "15 h",
 * script.js swaps them for the correct non-breaking spaces automatically.
 *
 * Every FR string is a draft and marked "needs native review". Change fr_status to
 * "reviewed" once Raph's family has checked it.
 */
window.SITE_CONTENT = {
  meta_title: {
    en: "Kassia & Raphaël · October 8, 2027",
    fr: "Kassia & Raphaël · 8 octobre 2027",
    fr_status: "needs native review"
  },
  meta_description: {
    en: "Kassia & Raphaël are getting married on Friday, October 8, 2027 at Villa del Cardinale, near Castel Gandolfo, Italy.",
    fr: "Kassia & Raphaël se marient le vendredi 8 octobre 2027 à la Villa del Cardinale, près de Castel Gandolfo, en Italie.",
    fr_status: "needs native review"
  },
  skip_link: { en: "Skip to content", fr: "Aller au contenu", fr_status: "needs native review" },
  lang_label: { en: "Language", fr: "Langue", fr_status: "needs native review" },
  noscript: {
    en: "This page needs JavaScript to show its text.",
    fr: "Cette page a besoin de JavaScript pour afficher son texte.",
    fr_status: "needs native review"
  },

  /* Navigation */
  nav_label: { en: "Sections", fr: "Rubriques", fr_status: "needs native review" },
  nav_venue: { en: "Venue", fr: "Lieu", fr_status: "needs native review" },
  nav_weekend: { en: "Weekend", fr: "Week-end", fr_status: "needs native review" },
  nav_travel: { en: "Travel", fr: "Venir", fr_status: "needs native review" },
  nav_stay: { en: "Stay", fr: "Hébergement", fr_status: "needs native review" },
  nav_questions: { en: "Questions", fr: "Questions", fr_status: "needs native review" },

  /* Hero */
  hero_photo_alt: {
    en: "Kassia and Raphaël laughing together in a garden, black-and-white photograph",
    fr: "Kassia et Raphaël riant ensemble dans un jardin, photographie en noir et blanc",
    fr_status: "needs native review"
  },
  couple_2_alt: {
    en: "Kassia and Raphaël spinning around on a garden lawn, black-and-white photograph",
    fr: "Kassia et Raphaël tournoyant sur la pelouse d’un jardin, photographie en noir et blanc",
    fr_status: "needs native review"
  },
  hero_date: { en: "Friday, October 8, 2027", fr: "vendredi 8 octobre 2027", fr_status: "needs native review" },
  hero_place: { en: "Castel Gandolfo, Italy", fr: "Castel Gandolfo, Italie", fr_status: "needs native review" },
  hero_note: { en: "Formal invitation to follow", fr: "Les détails suivront.", fr_status: "needs native review" },

  /* Welcome + venue */
  welcome_label: { en: "Welcome", fr: "Bienvenue", fr_status: "needs native review" },
  welcome_text: {
    en: "We’re getting married in Italy! The wedding is at a villa above Lake Albano, about 40 minutes outside Rome. Please hold the date. A real invitation and the practical stuff will come later, but we wanted you to have plenty of time to plan.",
    fr: "Nous nous marions en Italie ! Le mariage aura lieu dans une villa qui domine le lac Albano, à une quarantaine de minutes de Rome. Merci de réserver la date. Une véritable invitation et les informations pratiques suivront, mais nous voulions vous laisser tout le temps de vous organiser.",
    fr_status: "needs native review"
  },
  venue_label: { en: "The venue", fr: "Le lieu", fr_status: "needs native review" },
  venue_title: { text: "Villa del Cardinale" },
  venue_img_alt: {
    en: "Villa del Cardinale and its gardens, above Lake Albano",
    fr: "La Villa del Cardinale et ses jardins, au-dessus du lac Albano",
    fr_status: "needs native review"
  },
  venue_img_caption: { text: "Villa del Cardinale · Rocca di Papa" },
  venue_text: {
    en: "Villa del Cardinale was built in 1629 as a hunting lodge for a Colonna cardinal. It still has its original frescoes and a view over the whole lake, and it’s not far from Castel Gandolfo, where the popes have gone for the summer since the 1600s. We looked at a lot of villas in one week, and this is the one we kept comparing everything else to.",
    fr: "La Villa del Cardinale a été construite en 1629 comme pavillon de chasse pour un cardinal de la famille Colonna. Elle a conservé ses fresques d’origine et sa vue sur tout le lac, et se trouve tout près de Castel Gandolfo, où les papes passent l’été depuis le XVII<sup>e</sup> siècle. Nous avons visité beaucoup de villas en une semaine, et c’est à celle-ci que nous avons comparé toutes les autres.",
    fr_status: "needs native review"
  },
  venue_aside: {
    en: "Tradition places Alba Longa, the mother city of Rome, on these shores.",
    fr: "La tradition situe sur ces rives Albe la Longue, la cité mère de Rome.",
    fr_status: "needs native review"
  },

  /* Weekend */
  weekend_label: { en: "The weekend", fr: "Le week-end", fr_status: "needs native review" },
  weekend_note: { en: "Loose for now", fr: "Programme encore souple", fr_status: "needs native review" },
  thu_day: { en: "Thursday, October 7", fr: "jeudi 7 octobre", fr_status: "needs native review" },
  thu_text: {
    en: "If you’re in town early, we’ll walk from the hotel into Castel Gandolfo around 3 and get a drink. Come for as much or as little as you like.",
    fr: "Si vous êtes déjà sur place, nous irons à pied de l’hôtel jusqu’à Castel Gandolfo vers 15 h pour boire un verre. Joignez-vous à nous le temps que vous voudrez.",
    fr_status: "needs native review"
  },
  fri_day: { en: "Friday, October 8", fr: "vendredi 8 octobre", fr_status: "needs native review" },
  fri_text: {
    en: "Please arrive by 4:30. The ceremony is at 5, then dinner and a party.",
    fr: "Merci d’arriver avant 16 h 30. La cérémonie est à 17 h, suivie du dîner et de la fête.",
    fr_status: "needs native review"
  },
  sat_day: { en: "Saturday, October 9", fr: "samedi 9 octobre", fr_status: "needs native review" },
  sat_text: {
    en: "Nothing planned. Sleep in, hang out, or take a train into Rome.",
    fr: "Rien de prévu. Grasse matinée, détente, ou train pour Rome.",
    fr_status: "needs native review"
  },
  sun_day: { en: "Sunday, October 10", fr: "dimanche 10 octobre", fr_status: "needs native review" },
  sun_text: { en: "Everyone heads home.", fr: "Chacun rentre chez soi.", fr_status: "needs native review" },

  /* Getting there + where to stay */
  travel_label: { en: "Getting there", fr: "Comment venir", fr_status: "needs native review" },
  lake_img_alt: {
    en: "Lake Albano seen from the hills above Castel Gandolfo",
    fr: "Le lac Albano vu des collines au-dessus de Castel Gandolfo",
    fr_status: "needs native review"
  },
  lake_img_caption: { text: "Lago Albano" },
  travel_1: {
    en: "Fly into Rome Fiumicino (FCO), about 40 km away. If you’re coming from elsewhere in Europe, Ciampino is a lot closer.",
    fr: "Le plus simple est d’atterrir à Rome Fiumicino (FCO), à environ 40 km. Si vous venez d’ailleurs en Europe, Ciampino est beaucoup plus proche.",
    fr_status: "needs native review"
  },
  travel_2: {
    _todo: "Verify before launch on Trenitalia: train route, station name, journey time.",
    en: "There’s no direct train from the airport. If you’re arriving early, we’d go into Rome first, stay a night or two, and take the regional train from Termini out to Castel Gandolfo station on Thursday. It’s about 45 minutes. If you have big bags, a taxi from Rome is easier.",
    fr: "Il n’y a pas de train direct depuis l’aéroport. Si vous arrivez en avance, nous vous conseillons de passer d’abord par Rome, d’y rester une nuit ou deux, puis de prendre le jeudi le train régional de Termini jusqu’à la gare de Castel Gandolfo. Le trajet dure environ 45 minutes. Avec de gros bagages, un taxi depuis Rome est plus simple.",
    fr_status: "needs native review"
  },
  travel_3: {
    en: "The villa is up the hill in Rocca di Papa, so you’ll need a car, taxi, or shuttle from the hotel. We’re sorting out a shuttle and will post it here.",
    fr: "La villa se trouve en haut de la colline, à Rocca di Papa : il vous faudra une voiture, un taxi ou la navette depuis l’hôtel. Nous organisons une navette et en donnerons les détails ici.",
    fr_status: "needs native review"
  },
  stay_label: { en: "Where to stay", fr: "Où dormir", fr_status: "needs native review" },
  stay_text: {
    en: "Hotel Castel Vecchio in Castel Gandolfo is the hotel the villa works with, and it’s a short walk to town. Booking info is coming soon, along with a few other places at different prices.",
    fr: "L’hôtel Castel Vecchio, à Castel Gandolfo, est l’hôtel partenaire de la villa, à quelques pas du centre. Les informations de réservation arrivent bientôt, avec quelques autres adresses à différents prix.",
    fr_status: "needs native review"
  },

  /* Dress + questions */
  dress_label: { en: "What to wear", fr: "Tenue", fr_status: "needs native review" },
  dress_text: {
    en: "Black tie optional: tuxedo or long dress. We mean it a little. It’s a very fancy villa. More soon.",
    fr: "Tenue de soirée : smoking ou robe longue souhaités. Nous y tenons un peu, la villa est très chic. Plus de détails bientôt.",
    fr_status: "needs native review"
  },
  questions_label: { en: "Questions?", fr: "Des questions ?", fr_status: "needs native review" },
  questions_text: {
    en: "Write to us anytime.",
    fr: "Écrivez-nous quand vous voulez.",
    fr_status: "needs native review"
  },
  email: { text: "raphaelkassia2027@gmail.com" },

  /* Footer */
  footer_motto: { text: "Horas non numero nisi serenas" },
  footer_translation: {
    en: "I count only the serene hours. Sundial at Villa del Cardinale.",
    fr: "Je ne compte que les heures sereines. Cadran solaire de la Villa del Cardinale.",
    fr_status: "needs native review"
  },
  footer_names: {
    en: "Kassia & Raphaël · October 8, 2027",
    fr: "Kassia & Raphaël · 8 octobre 2027",
    fr_status: "needs native review"
  }
};
