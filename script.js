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

  // Access request form — builds a mailto so it works with zero backend
  var form = document.getElementById('accessForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = (document.getElementById('req-name') || {}).value || '';
      var email = (document.getElementById('req-email') || {}).value || '';
      var reason = (document.getElementById('req-reason') || {}).value || '';
      var notes = (document.getElementById('req-notes') || {}).value || '';

      var subject = encodeURIComponent('Access Request — Nebula Services');
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Reason: ' + reason + '\n\n' +
        'Notes:\n' + notes + '\n\n' +
        '— Sent from nebulaservices.live access form'
      );

      var mailto = 'mailto:milnerg-admin@nebulaservices.live?subject=' + subject + '&body=' + body;

      // Show success message
      var success = document.getElementById('formSuccess');
      if (success) {
        success.classList.add('show');
        success.textContent = 'Opening your email client… If nothing happens, email milnerg-admin@nebulaservices.live directly with the details above.';
      }

      // Open mailto
      window.location.href = mailto;

      // Optional: clear form after a short delay
      setTimeout(function () {
        form.reset();
      }, 800);
    });
  }
})();
