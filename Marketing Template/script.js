let slideIndex = 1;
slideShow(slideIndex);

function plusDivs(count) {
  slideShow((slideIndex += count));
}

function slideShow(index) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].style.backgroundColor = "white";
  }
  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length - 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.backgroundColor = "rgb(114, 114, 114)";
}

const menu = document.querySelector(".mobile-menu");
const bars = document.getElementById("bars");
const close = document.getElementById("close");

bars.onclick = function () {
  menu.style.display = "block";
};

close.onclick = function () {
  hide();
};

function hide() {
  menu.style.display = "none";
}
