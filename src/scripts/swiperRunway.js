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