const footerMenuTitles = document.querySelectorAll('.footer__menu-title');
const footerMenuItems = document.querySelectorAll('.footer__menu-items');
const countryMenuBtn = document.querySelector('#footer__menu-region-btn-country');
const countryMenuPopup = document.querySelector('#footer__menu-region-popup-country');

// Аккордеон для мобильной версии меню
for (let i = 0; i < (footerMenuTitles.length - 1); ++i) {
  const footerMenuTitle = footerMenuTitles[i]

  footerMenuTitle.addEventListener('click', e => {
    const targetElem = e.target;
    const openedElem = targetElem.nextElementSibling;

    if(openedElem.style.maxHeight) {
      footerMenuTitles.forEach((el) => el.classList.remove('footer__menu-title_active'));
      targetElem.classList.remove('footer__menu-title_active');
      footerMenuItems.forEach((el) => el.style.maxHeight = null);
      openedElem.style.maxHeight = null;
    } else {
      footerMenuTitles.forEach((el) => el.classList.remove('footer__menu-title_active'));
      targetElem.classList.add('footer__menu-title_active');
      footerMenuItems.forEach((el) => el.style.maxHeight = null);
      openedElem.style.maxHeight = openedElem.scrollHeight + 'px';
    }
  })
}

// Открываем или закрываем попап выбора страны
countryMenuBtn.addEventListener('click', e => {
  countryMenuPopup.classList.toggle('popup-opened');
})

window.addEventListener('scroll', e => {
  if (document.documentElement.scrollWidth >= 1023) {
    countryMenuPopup.classList.remove('popup-opened');
  }
})

