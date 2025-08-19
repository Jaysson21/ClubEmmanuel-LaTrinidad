// js/menuburguer.js
(function(){
  const btn = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  if(!btn || !menu) return;

  const toggle = () => {
    const hidden = menu.hasAttribute('hidden');
    if (hidden) {
      menu.removeAttribute('hidden');
      btn.setAttribute('aria-expanded', 'true');
      btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      menu.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  };

  btn.addEventListener('click', toggle);
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target) && !menu.hasAttribute('hidden')) toggle();
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { if (!menu.hasAttribute('hidden')) toggle(); }));
})();
 