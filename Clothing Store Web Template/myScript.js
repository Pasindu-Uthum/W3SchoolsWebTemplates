let button = document.getElementById("sale");
let button2 = document.getElementById("sale2");
let second = document.getElementById("second");
let first = document.getElementById("first-sale-item");

first.onmouseover = function() {
    button.style.display = "block";
}

first.onmouseleave = function() {
    button.style.display = "none";
}

button.onmouseover = function () {
    button.style.display = "block";
}

second.onmouseover = function() {
    button2.style.display = "block";
}

second.onmouseleave = function() {
    button2.style.display = "none";
}

button2.onmouseover = function () {
    button2.style.display = "block";
}

let jeans = document.getElementById("jeans");
let hidden = document.getElementById("hidden");

jeans.onclick = function() {
    if (hidden.className === "hidden") {
        hidden.className = "open";
    }
    else {
        hidden.className = "hidden";
    }
}

let jeans_hidden = document.getElementById("jeans-hidden");
let hidden_hidden = document.getElementById("hidden-hidden");

jeans_hidden.onclick = function() {
    if (hidden_hidden.className === "hidden") {
        hidden_hidden.className = "open";
    }
    else {
        hidden_hidden.className = "hidden";
    }
}

let newsletter = document.getElementById("newsletter");
let close = document.getElementById("close");
let newsletter_link = document.getElementById("newsletter-link");
let newsletter_link_hidden = document.getElementById("newsletter-link-hidden");
let subscribe = document.getElementById("subscribe");
let email = document.getElementById("email");

close.onclick =function () {
    newsletter.style.display = "none";
}

newsletter_link.onclick = function() {
    newsletter.style.display = "block";
}

newsletter_link_hidden.onclick = function() {
    newsletter.style.display = "block";
}

subscribe.onclick = function() {
    if (email.value === "") {
        window.alert("Please enter you Email or click close button");
    }
    else {
        window.alert("You have successfully subscribed.");
        newsletter.style.display = "none";
    }
}

let  vip = document.getElementById("vip-sub-btn");
let vip_input = document.getElementById("vip-input");

vip.onclick = function() {
    if (vip_input.value === "") {
        window.alert("Please enter you Email and the click the subscribe button");
    }
    else {
        window.alert("You have successfully subscribed.");
        vip_input.value = "";
    }
}


let hidden_menu = document.getElementById("hidden-menu");
let bars = document.getElementById("menu");
let hidden_close = document.getElementById("hidden-close");

bars.onclick = function() {
    hidden_menu.style.display = "block";
}

hidden_close.onclick = function() {
    hidden_menu.style.display = "none";
}





