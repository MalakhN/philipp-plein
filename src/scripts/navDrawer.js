const burgerMenu = document.querySelector('.nav-drawer');
const burgerMenuContainer = document.querySelector('.nav-drawer__container');
const burgerMenuBtn = document.querySelector('.navigation__burger');
const burgerMenuCloseBtn = document.querySelector('.nav-drawer__close-button');
const pageUnderMenu = document.querySelector('.page');

function openBurgerMenu () {
  burgerMenu.classList.add('open-nav-drawer');
  setTimeout(function () {
    burgerMenuContainer.classList.add('open-nav-drawer__container')
  }, 5);
  pageUnderMenu.classList.add('page_under-menu');
}

function closeBurgerMenu () {
  burgerMenuContainer.classList.remove('open-nav-drawer__container')
  setTimeout(function () {
    burgerMenu.classList.remove('open-nav-drawer');
  }, 500);
  pageUnderMenu.classList.remove('page_under-menu');
}

burgerMenuBtn.addEventListener('click', openBurgerMenu);
burgerMenuCloseBtn.addEventListener('click', closeBurgerMenu);
