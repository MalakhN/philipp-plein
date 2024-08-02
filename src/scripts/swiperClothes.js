var swiper = new Swiper('.sale-clothes__slider', {
  loop: true,
  autoplay: {
    delay: 1000,
  },
  speed: 2000,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: true,
});