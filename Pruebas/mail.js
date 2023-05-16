var currentSlide = 0;
var slides = document.querySelectorAll('.carousel img');
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

var nextButton = document.querySelector('.next');
nextButton.addEventListener('click', nextSlide);

  