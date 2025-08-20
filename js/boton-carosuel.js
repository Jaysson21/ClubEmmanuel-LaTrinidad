(function () {
  function ready(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  ready(function () {
    var root = document.getElementById('heroCarousel');
    if (!root) return;

    var track = root.querySelector('.carousel-track');
    var slides = Array.prototype.slice.call(root.querySelectorAll('.carousel-slide'));
    var prev = root.querySelector('.carousel-btn.prev');
    var next = root.querySelector('.carousel-btn.next');
    var dots = Array.prototype.slice.call(root.querySelectorAll('.dot'));

    var index = 0;
    var autoplayMs = 3500;   // ⏱ velocidad del auto-play
    var timer = null;

    function goTo(i, opts){
      index = (i + slides.length) % slides.length;
      track.style.transform = 'translateX(' + (-index * 100) + '%)';

      // estado activo
      slides.forEach(function(s, k){ s.classList.toggle('is-active', k === index); });
      dots.forEach(function(d, k){
        var active = (k === index);
        d.classList.toggle('is-active', active);
        d.setAttribute('aria-current', active ? 'true' : 'false');
      });

      if (!opts || !opts.silent) restartAutoplay();
    }

    function nextSlide(){ goTo(index + 1); }
    function prevSlide(){ goTo(index - 1); }

    // autoplay
    function startAutoplay(){
      stopAutoplay();
      timer = setInterval(nextSlide, autoplayMs);
    }
    function stopAutoplay(){
      if (timer) clearInterval(timer);
      timer = null;
    }
    function restartAutoplay(){ startAutoplay(); }

    // Controles
    if (prev) prev.addEventListener('click', prevSlide);
    if (next) next.addEventListener('click', nextSlide);

    dots.forEach(function(btn){
      btn.addEventListener('click', function(){
        var i = parseInt(btn.getAttribute('data-slide'), 10) || 0;
        goTo(i);
      });
    });

    // Pausa al hover / foco (accesible)
    root.addEventListener('mouseenter', stopAutoplay);
    root.addEventListener('mouseleave', startAutoplay);
    root.addEventListener('focusin', stopAutoplay);
    root.addEventListener('focusout', startAutoplay);

    // Swipe / drag
    var startX = 0, dragging = false, lastX = 0;
    var viewport = root.querySelector('.carousel-viewport');

    function onStart(x){
      dragging = true; startX = x; lastX = x;
      root.classList.add('dragging');
      stopAutoplay();
    }
    function onMove(x){
      if (!dragging) return;
      lastX = x;
      var dx = x - startX;
      track.style.transform = 'translateX(calc(' + (-index*100) + '% + ' + dx + 'px))';
    }
    function onEnd(){
      if (!dragging) return;
      dragging = false;
      root.classList.remove('dragging');
      var dx = lastX - startX;
      var threshold = (viewport.clientWidth || 300) * 0.15;
      if (dx > threshold) prevSlide();
      else if (dx < -threshold) nextSlide();
      else goTo(index, { silent:true });
      startAutoplay();
    }

    // Pointer/touch/mouse
    viewport.addEventListener('touchstart', function(e){ onStart(e.touches[0].clientX); }, {passive:true});
    viewport.addEventListener('touchmove', function(e){ onMove(e.touches[0].clientX); }, {passive:true});
    viewport.addEventListener('touchend', onEnd);

    viewport.addEventListener('mousedown', function(e){ onStart(e.clientX); });
    window.addEventListener('mousemove', function(e){ onMove(e.clientX); });
    window.addEventListener('mouseup', onEnd);

    // Teclado
    root.addEventListener('keydown', function(e){
      if (e.key === 'ArrowRight') { e.preventDefault(); nextSlide(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); prevSlide(); }
    });

    // init
    goTo(0, { silent:true });
    startAutoplay();
  });
})();
