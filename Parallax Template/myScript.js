let navbar = document.getElementById("navbar");

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "navbar-parallax";
    }
    else {
        navbar.className = "navbar";
    }
}

let bars = document.getElementById("bars");
let close = document.getElementById("close");
let menu = document.getElementById("menu");

bars.onclick = function() {
    menu.style.display = "block";
}

close.onclick = function() {
    menu.style.display = "none";
}

function hideMenu() {
    menu.style.display = "none";
}