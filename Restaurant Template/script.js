const pizza = document.querySelector('.pizza');
const salad = document.querySelector('.salad');
const starter = document.querySelector('.starter');

const pizza_menu = document.querySelector(".menu-items-pizza");
const salad_menu = document.querySelector(".menu-items-salads");
const starter_menu = document.querySelector(".menu-items-starter");

pizza.onclick = () => {
    pizza.style.backgroundColor = 'tomato';
    salad.style.backgroundColor = 'black';
    starter.style.backgroundColor = 'black';
    pizza_menu.style.display = 'block';
    salad_menu.style.display = 'none';
    starter_menu.style.display = 'none';
}

salad.onclick = () => {
    pizza.style.backgroundColor = 'black';
    salad.style.backgroundColor = 'tomato';
    starter.style.backgroundColor = 'black';
    pizza_menu.style.display = 'none';
    salad_menu.style.display = 'block';
    starter_menu.style.display = 'none';
}

starter.onclick = () => {
    pizza.style.backgroundColor = 'black';
    salad.style.backgroundColor = 'black';
    starter.style.backgroundColor = 'tomato';
    pizza_menu.style.display = 'none';
    salad_menu.style.display = 'none';
    starter_menu.style.display = 'block';
}