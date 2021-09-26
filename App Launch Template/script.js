let slideIndex = 1;
slideShow(slideIndex);

function plusDivs(count) {
  slideShow(slideIndex += count);
}

function slideShow(index) {
  const slides = document.getElementsByClassName('slide');
  if (index > slides.length) {slideIndex = 1};
  for (let i = 0; i <slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}