const mainImage = document.querySelector(".main-image");
const subImgs = document.querySelectorAll(".subImg");
const caption = document.querySelector(".captionText");
const bars = document.querySelector(".bars");
const overlay = document.querySelector(".overlay");
const section = document.querySelector("section");

subImgs.forEach((item) => {
  item.addEventListener("click", function () {
    mainImage.src = item.src;
    caption.innerHTML = item.alt;
  });
});

bars.addEventListener("click", function () {
  if (bars.dataset.status === "close") {
    bars.innerHTML = `<a href="#"><i class="fas fa-times"></i></a>`;
    bars.dataset.status = "open";
  } else if (bars.dataset.status === "open") {
    bars.innerHTML = `<a href="#"><i class="fas fa-bars"></i></a>`;
    bars.dataset.status = "close";
  }
  overlay.classList.toggle("open");
  section.classList.toggle("open");
});

overlay.onclick = function () {
  overlay.style.display = "none";
};
