const dropdown = document.getElementsByClassName("dropdown");

function dropFunction(index) {
  dropdown[index].style.display = "block";
}

const note = document.querySelector(".notification");

function notification() {
  note.style.display = "none";
}

function hide(index) {
  dropdown[index].style.display = "none";
}

const menu = document.querySelector(".mobile-menu");
const bars = document.getElementById("bars");

bars.onclick = function () {
  if (bars.dataset.status === "off") {
    menu.style.display = "block";
    bars.dataset.status = "on";
    bars.innerHTML = `<a href="#"><i class="fas fa-times"></i></a>`;
  } else {
    menu.style.display = "none";
    bars.dataset.status = "off";
    bars.innerHTML = `<a href="#"><i class="fas fa-bars"></i></a>`;
  }
};

function hideMenu() {
  menu.style.display = "none";
}
