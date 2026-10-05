// Days-until countdown to the ceremony (5pm Italy time, Oct 8 2027 = 15:00 UTC).
(function () {
  var el = document.getElementById("countdown");
  if (!el) return;
  var ms = Date.UTC(2027, 9, 8, 15, 0, 0) - Date.now();
  if (ms <= 0) return;
  document.getElementById("cd-days").textContent = Math.ceil(ms / 86400000);
  el.hidden = false;
})();
