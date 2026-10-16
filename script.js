(function () {
  var btn = document.getElementById('menuBtn');
  if (btn) {
    btn.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.querySelectorAll('.nav-drawer a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Show success message when redirected back with ?sent=1
  if (window.location.search.indexOf('sent=1') !== -1) {
    var success = document.getElementById('formSuccess');
    if (success) {
      success.classList.add('show');
      success.textContent = 'Request sent. Check your inbox for a confirmation from FormSubmit the first time — after that, requests go straight to milnerg-admin@nebulaservices.live.';
    }
    // Clean URL without reload
    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }
})();
