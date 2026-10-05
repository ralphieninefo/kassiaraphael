// Days-until countdown to the ceremony (5pm Italy time, Oct 8 2027 = 15:00 UTC).
(function () {
  var el = document.getElementById("countdown");
  if (!el) return;
  var ms = Date.UTC(2027, 9, 8, 15, 0, 0) - Date.now();
  if (ms <= 0) return;
  document.getElementById("cd-days").textContent = Math.ceil(ms / 86400000);
  el.hidden = false;
})();

// English / French toggle. English is the page's own text; French lives here.
(function () {
  var FR = {
    nav_venue: "Lieu", nav_weekend: "Week-end", nav_travel: "Venir", nav_stay: "Séjour", nav_attire: "Tenue",
    eyebrow: "Réservez la date",
    date: "Vendredi 8 octobre 2027",
    place: "Castel Gandolfo, Italie",
    note: "Invitation officielle à suivre",
    days: "jours restants",
    intro: "Nous nous marions en Italie ! Le mariage aura lieu dans une villa surplombant le lac Albano, à environ 40 minutes de Rome. Réservez la date. Une vraie invitation et toutes les informations pratiques suivront, mais nous voulions que vous ayez largement le temps de vous organiser.",
    h_venue: "Le lieu",
    venue: "<strong>Villa del Cardinale</strong> a été construite en 1629 comme pavillon de chasse pour un cardinal de la famille Colonna. Elle a conservé ses fresques d’origine et offre une vue sur tout le lac. Elle n’est pas loin de Castel Gandolfo, où les papes passent l’été depuis le XVIIe siècle. Nous avons visité beaucoup de villas en une semaine, et c’est celle à laquelle nous comparions toutes les autres.",
    h_weekend: "Le week-end <em>(programme souple pour l’instant)</em>",
    day_thu: "Jeudi<br><span>7 oct.</span>",
    day_fri: "Vendredi<br><span>8 oct.</span>",
    day_sat: "Samedi<br><span>9 oct.</span>",
    day_sun: "Dimanche<br><span>10 oct.</span>",
    p_thu: "Si vous êtes déjà sur place, nous irons à pied de l’hôtel jusqu’à Castel Gandolfo vers 15 h pour prendre un verre. Venez pour le temps que vous voulez.",
    p_fri: "Merci d’arriver pour 16 h 30. La cérémonie est à 17 h, suivie du dîner et d’une soirée dansante.",
    p_sat: "Rien de prévu. Grasse matinée, détente, ou train pour Rome.",
    p_sun: "Chacun rentre chez soi.",
    h_travel: "Comment venir",
    t1: "Atterrissez à Rome Fiumicino (FCO), à environ 40 km. Si vous venez d’ailleurs en Europe, Ciampino est beaucoup plus proche.",
    t2: "Il n’y a pas de train direct depuis l’aéroport. Si vous arrivez en avance, nous vous conseillons de passer d’abord par Rome, d’y dormir une ou deux nuits, puis de prendre le train régional depuis Termini jusqu’à la gare de Castel Gandolfo le jeudi. Comptez environ 45 minutes. Avec de gros bagages, un taxi depuis Rome sera plus simple.",
    t3: "La villa se trouve en haut de la colline, à Rocca di Papa : il vous faudra donc une voiture, un taxi ou une navette depuis l’hôtel. Nous organisons une navette et en publierons les détails ici.",
    h_stay: "Où dormir",
    stay: "<strong>L’Hôtel Castel Vecchio</strong>, à Castel Gandolfo, est l’hôtel avec lequel travaille la villa, à quelques pas du centre. Les informations de réservation arriveront bientôt, ainsi que quelques autres adresses à différents prix.",
    h_attire: "Tenue",
    attire: "Black tie optionnel, et nous le pensons un peu. C’est une villa très chic. Plus de détails bientôt.",
    h_q: "Des questions ?",
    q: "N’hésitez pas à nous écrire.",
    email: "Écrivez-nous",
    footer: "Kassia &amp; Raphaël · 8 octobre 2027 · Castel Gandolfo"
  };
  var META = {
    en: { title: document.title, desc: document.querySelector('meta[name="description"]').content },
    fr: { title: "Kassia & Raphaël — 8 octobre 2027",
          desc: "Kassia & Raphaël se marient le vendredi 8 octobre 2027 à la Villa del Cardinale, à Castel Gandolfo, en Italie. Réservez la date." }
  };
  var nodes = [].slice.call(document.querySelectorAll("[data-i18n]"));
  var EN = {};
  nodes.forEach(function (n) { EN[n.getAttribute("data-i18n")] = n.innerHTML; });
  var buttons = [].slice.call(document.querySelectorAll(".lang button"));

  function setLang(lang, save) {
    var dict = lang === "fr" ? FR : EN;
    nodes.forEach(function (n) { n.innerHTML = dict[n.getAttribute("data-i18n")]; });
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    document.querySelector('meta[name="description"]').content = META[lang].desc;
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    if (save) { try { localStorage.setItem("lang", lang); } catch (e) {} }
  }
  buttons.forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang, true); }); });

  var q = /[?&]lang=(en|fr)/.exec(location.search);
  var saved = null; try { saved = localStorage.getItem("lang"); } catch (e) {}
  var pick = (q && q[1]) || saved || ((navigator.language || "").slice(0, 2) === "fr" ? "fr" : "en");
  if (pick === "fr") setLang("fr", false);
})();
