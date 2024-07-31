const carousel = document.querySelector(".sale-clothes__slider");
let width = carousel.offsetWidth;

function scrollCarousel() {
  carousel.scrollBy(width, 0);
};

const interval = setInterval(scrollCarousel(), 1000)

