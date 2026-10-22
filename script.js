// Renders copy from content.js, handles EN | FR, and the scroll fade-in.
(function () {
  var C = window.SITE_CONTENT || {};
  var root = document.documentElement;

  // French typography: non-breaking spaces before high punctuation, inside guillemets, and in "15 h".
  function frenchSpacing(s) {
    return s
      .replace(/ ([;!?])/g, " $1")
      .replace(/ :/g, " :")
      .replace(/« /g, "« ")
      .replace(/ »/g, " »")
      .replace(/(\d) h\b/g, "$1 h")
      .replace(/(\d h) (\d)/g, "$1 $2");
  }

  function t(key, lang) {
    var e = C[key];
    if (!e) return "";
    if (e.text != null) return e.text;
    return lang === "fr" ? frenchSpacing(e.fr || e.en || "") : (e.en || "");
  }

  function each(sel, fn) { [].forEach.call(document.querySelectorAll(sel), fn); }

  function render(lang) {
    root.lang = lang;
    each("[data-t]", function (n) { n.innerHTML = t(n.getAttribute("data-t"), lang); });
    each("[data-t-alt]", function (n) { n.alt = t(n.getAttribute("data-t-alt"), lang); });
    each("[data-t-aria]", function (n) { n.setAttribute("aria-label", t(n.getAttribute("data-t-aria"), lang)); });
    each("[data-t-mailto]", function (n) { n.href = "mailto:" + t(n.getAttribute("data-t-mailto"), lang); });
    each(".lang button", function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    document.title = t("meta_title", lang);
    document.querySelector('meta[name="description"]').content = t("meta_description", lang);
  }

  // Language: /fr (or ?lang=) wins, then the saved choice, then the browser language.
  var path = /^\/fr\/?$/.test(location.pathname) ? "fr" : null;
  var query = (/[?&]lang=(en|fr)\b/.exec(location.search) || [])[1];
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var browser = /^fr\b/i.test(navigator.language || "") ? "fr" : "en";
  var lang = path || query || (saved === "fr" || saved === "en" ? saved : null) || browser;
  render(lang);

  each(".lang button", function (b) {
    b.addEventListener("click", function () {
      lang = b.dataset.lang;
      // Keep the reader's place: pin the first block below the sticky bar across the re-render.
      var barBottom = document.querySelector(".topbar").getBoundingClientRect().bottom;
      var anchor = [].filter.call(document.querySelectorAll("main [data-t], footer [data-t]"), function (n) {
        // skip text inside sticky headings: they don't move with the page, so they can't hold the place
        for (var el = n; el && el !== document.body; el = el.parentElement) {
          if (getComputedStyle(el).position === "sticky") return false;
        }
        return n.getBoundingClientRect().top >= barBottom;
      })[0];
      var before = anchor && anchor.getBoundingClientRect().top;
      render(lang);
      if (anchor && window.scrollY > 0) window.scrollBy({ top: anchor.getBoundingClientRect().top - before, behavior: "instant" });
      try { localStorage.setItem("lang", lang); } catch (e) {}
      // Keep the address bar in step (/ or /fr) when served over http(s).
      if (/^https?:$/.test(location.protocol) && history.replaceState) {
        history.replaceState(null, "", (lang === "fr" ? "/fr" : "/") + location.hash);
      }
    });
  });

  // Sticky top bar: show its hairline once the page has scrolled.
  var bar = document.querySelector(".topbar");
  function onScroll() { bar.classList.toggle("stuck", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Phone menu: "Menu" opens the sections as a full page under the bar; a section link, "Close" or Escape closes it.
  var menuBtn = document.querySelector(".menu-btn"), menu = document.getElementById("menu");
  if (menuBtn && menu) {
    var setMenu = function (open, returnFocus) {
      menuBtn.setAttribute("aria-expanded", String(open));
      if (open) menu.style.top = bar.getBoundingClientRect().bottom + "px";
      menu.hidden = !open;
      root.classList.toggle("menu-open", open);
      if (open) { var first = menu.querySelector("a"); if (first) first.focus({ preventScroll: true }); }
      else if (returnFocus) menuBtn.focus();
    };
    menuBtn.addEventListener("click", function () { setMenu(menuBtn.getAttribute("aria-expanded") !== "true", false); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false, false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) setMenu(false, true);
    });
    window.matchMedia("(min-width: 768px)").addEventListener("change", function (m) { if (m.matches) setMenu(false, false); });
  }

  // Slow fade-in on scroll. CSS skips it entirely for prefers-reduced-motion.
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    each(".reveal", function (n) { n.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  [].forEach.call(items, function (n) { io.observe(n); });
})();
