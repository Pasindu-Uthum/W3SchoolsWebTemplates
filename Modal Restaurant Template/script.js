const menu = document.querySelector('.menu-container');
const contact = document.querySelector('.contact-container');
const close = document.getElementsByClassName('close');
const button = document.getElementsByClassName('access-menu');

button[0].onclick = function() {menu.style.display = 'block';}
button[1].onclick = function() {contact.style.display = 'block';}
close[0].onclick = function() {menu.style.display = 'none';}
close[1].onclick = function() {contact.style.display = 'none';}