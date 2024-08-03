var swiperRunway = new Swiper('.sale-runway__slider', {
  spaceBetween: 10,
  loop: true,
  slidesPerView: 1.2,
  keyboard: true,
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 26,
    }
  },
});

//Отображаем попапы на карточках последнего слайдера
const sliderPopupBtns = document.querySelectorAll('.sale-runway__item-button');

for (let i = 0; i < sliderPopupBtns.length; ++i) {
  const sliderPopupBtn = sliderPopupBtns[i]

  sliderPopupBtn.addEventListener('click', e => {
    const targetElem = e.target;
    const openedElem = targetElem.nextElementSibling;

    openedElem.classList.toggle('popup_opened');
  });
}
