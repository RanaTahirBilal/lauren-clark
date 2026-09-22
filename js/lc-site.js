(function () {
  var drawer = document.getElementById('lc-drawer');
  var burger = document.getElementById('lc-burger');
  var closeBtn = document.getElementById('lc-drawer-close');
  function setOpen(open) {
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) { closeBtn.focus(); } else { burger.focus(); }
  }
  if (drawer && burger && closeBtn) {
    burger.addEventListener('click', function () { setOpen(true); });
    closeBtn.addEventListener('click', function () { setOpen(false); });
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden', 'true'); burger.setAttribute('aria-expanded', 'false'); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) { setOpen(false); }
    });
  }
  var y = document.getElementById('lc-year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();
