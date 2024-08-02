const burgerMenu = document.querySelector('.nav-drawer');
const burgerMenuBtn = document.querySelector('.navigation__burger');
const burgerMenuCloseBtn = document.querySelector('.nav-drawer__close-button');

function toggleBurgerMenu () {
  burgerMenu.classList.toggle('open-nav-drawer');
}


burgerMenuBtn.addEventListener('click', toggleBurgerMenu);
burgerMenuCloseBtn.addEventListener('click', toggleBurgerMenu);