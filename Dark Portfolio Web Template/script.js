const menu = document.getElementById('menu');
const bars = document.getElementById('bars');
const close = document.getElementById('close');

bars.onclick = function() {
    menu.style.display = 'block';
}

close.onclick = function() {
    menu.style.display = 'none';
}

function hide() {
    menu.style.display = 'none';
}