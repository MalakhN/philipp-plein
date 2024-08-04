var swiperVip = new Swiper('.vip-sale__slider', {
  spaceBetween: 10,
  loop: true,
  slidesPerView: 1.2,
  keyboard: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },
});

//Выравниваем боковой статичный банер по размеру первого изображения в слайдере
const sliderImages = document.querySelectorAll('.vip-sale__slider-img');
const sliderTextContainer = document.querySelector('.vip-sale__text-container');

let sliderHeight = sliderImages[0].clientHeight;

function sliderEven() {
  if (document.documentElement.scrollWidth >= 550) {
    sliderTextContainer.style.height = sliderHeight + 'px';
  }
}

window.addEventListener("load", e => {
  sliderEven();
});

window.addEventListener("resize", e => {
  sliderEven();
});
