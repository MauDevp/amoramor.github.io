var slideIndex = 1;
var timer;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  timer = setTimeout(function() {
    showSlides(slideIndex += 1);
  }, 4000); // tiempo en milisegundos (5 segundos)
}

function pauseSlides() {
  clearTimeout(timer);
}

function resumeSlides() {
  showSlides(slideIndex);
}
