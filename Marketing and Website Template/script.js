const dropBtn = document.querySelector(".dropBtn");
const dropdown = document.querySelector(".dropdown");

dropBtn.onmouseenter = function () {
  dropdown.style.display = "block";
};

dropBtn.onmouseleave = function () {
  dropdown.style.display = "none";
};

const add = document.getElementById("add");
const side_menu = document.querySelector(".side-bar");
const side_close = document.getElementById("side-close");

add.onclick = function () {
  side_menu.style.display = "block";
};

side_close.onclick = function () {
  side_menu.style.display = "none";
};

const data = document.getElementById("data");
const top_btn = document.getElementById("to-the-top");

top_btn.onmouseenter = function () {
  data.style.display = "block";
};

top_btn.onmouseleave = function () {
  data.style.display = "none";
};

const bars = document.getElementById("bars");
const menu = document.getElementById("menu");

bars.onclick = function () {
  menu.style.display = "block";
};

function hide() {
  menu.style.display = "none";
}
