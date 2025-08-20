(function () {
  function ready(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  ready(function () {
    var btn = document.getElementById('navToggle');
    var menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;

    // inicia oculto
    menu.setAttribute('hidden', 'hidden');

    btn.addEventListener('click', function () {
      var isHidden = menu.hasAttribute('hidden');
      if (isHidden) { menu.removeAttribute('hidden'); btn.setAttribute('aria-expanded', 'true'); }
      else { menu.setAttribute('hidden','hidden'); btn.setAttribute('aria-expanded', 'false'); }
    });

    // cierra al hacer click en cualquier enlace del menú móvil
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { menu.setAttribute('hidden','hidden'); btn.setAttribute('aria-expanded','false'); }
    });

    // cierra al cambiar a desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 992) { menu.setAttribute('hidden','hidden'); btn.setAttribute('aria-expanded','false'); }
    });
  });
})();
