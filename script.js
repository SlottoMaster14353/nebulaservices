(function () {
  var btn = document.getElementById('menuBtn');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close drawer when a link is tapped
  document.querySelectorAll('.nav-drawer a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();
