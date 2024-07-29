const gap = 20;

const carousel = document.querySelector(".players__carousel");
const content = document.querySelector(".players__content");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const count = document.querySelector("#count");
const total = document.querySelector("#total");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  prev.disabled = false;
  next.disabled = true;
  prev.classList.toggle('players__carousel-button_disabled');
  next.classList.toggle('players__carousel-button_disabled');
  count.textContent = '6 ';
  total.style.opacity = '100%';
});

prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  prev.disabled = true;
  next.disabled = false;
  next.classList.toggle('players__carousel-button_disabled');
  prev.classList.toggle('players__carousel-button_disabled');
  count.textContent = '3 ';
  total.style.opacity = '60%';
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));