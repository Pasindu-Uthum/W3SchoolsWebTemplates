const menu = document.querySelector(".left-side-navigation-clone");
const bars = document.getElementById("bars");

bars.onclick = function () {
  if (bars.dataset.status === "off") {
    menu.style.display = "block";
    bars.innerHTML = `<a href="#"><i class="fas fa-times"></i> Close Menu</a>`;
    bars.dataset.status = "on";
  } else if (bars.dataset.status === "on") {
    menu.style.display = "none";
    bars.innerHTML = `<a href="#"><i class="fas fa-bars"></i> Menu</a>`;
    bars.dataset.status = "off";
  }
};
