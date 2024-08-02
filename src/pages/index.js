//Класс карточки слайдера
class Card {
  constructor({ item, templateSelector }) {
    this._name = item.name;
    this._link = item.link;
    this._linkProduct = item.linkProduct;
    this._class = item.class;
    this._templateSelector = templateSelector;
  }
  // Приватный метод для получения копии шаблона карточки слайдера
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".swiper-slide")
      .cloneNode(true);
    return cardElement;
  }
  // Публичный метод, который возвращает наполненный данными элемент карточки слайдера
  generateCard() {
    this._newCard = this._getTemplate();
    this._imageElement = this._newCard.querySelector("img");
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    return this._newCard;
  }
  generateCardWithText() {
    this._newCard = this._getTemplate();
    this._imageElement = this._newCard.querySelector("img");
    this._spanElement = this._newCard.querySelector("span");
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._spanElement.textContent = this._name;
    return this._newCard;
  }
  generateCardWithBtn() {
    this._newCard = this._getTemplate();
    this._imageElement = this._newCard.querySelector("img");
    this._buttonElement = this._newCard.querySelector("button");
    this._imagePopupElement = this._newCard.querySelector("div a img");
    this._spanPopupElement = this._newCard.querySelector("div a span");
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._buttonElement.classList = this._class;
    this._imagePopupElement.src = this._linkProduct;
    this._imagePopupElement.alt = this._name;
    this._spanPopupElement.textContent = this._name;
    return this._newCard;
  }
}

//Класс слайдера
class SliderSection {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }
  // Публичный метод, который отвечает за отрисовку всех элементов слайдера
  renderItems(items) {
    this._initialArray = items;
    this._initialArray.forEach((item) => {
      this._renderer(item);
    });
  }
  // Публичный метод, который принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._container.prepend(element);
  }
}

//Массивы со ссылками на контент карточек слайдеров
const vipSliderMenImgs = [
  { link: "./images/vip-slider/men/bag.png", name: "Bag" },
  { link: "./images/vip-slider/men/polo3.png", name: "Polo" },
  { link: "./images/vip-slider/men/shorts3.png", name: "Shorts" },
  { link: "./images/vip-slider/men/sneakers3.png", name: "Sneakers" },
  { link: "./images/vip-slider/men/watch.png", name: "Watch" },
];
const vipSliderWomenImgs = [
  { link: "./images/vip-slider/women/dress.png", name: "Dress" },
  { link: "./images/vip-slider/women/dress2.png", name: "Dress" },
  { link: "./images/vip-slider/women/jacket.png", name: "Jacket" },
  { link: "./images/vip-slider/women/swimsuit.png", name: "Swimsuit" },
  { link: "./images/vip-slider/women/w-bag.png", name: "Bag" },
  { link: "./images/vip-slider/women/w-shoes.png", name: "Shoes" },
];
const clothesSliderMenImgs = [
  { link: "./images/clothes-slider/men/polo.png" },
  { link: "./images/clothes-slider/men/shirt.png" },
  { link: "./images/clothes-slider/men/shorts.png" },
  { link: "./images/clothes-slider/men/shorts2.png" },
  { link: "./images/clothes-slider/men/sneakers.png" },
  { link: "./images/clothes-slider/men/t-shirt.png" },
];
const clothesSliderWomenImgs = [
  { link: "./images/clothes-slider/women/heels.png" },
  { link: "./images/clothes-slider/women/heels2.png" },
  { link: "./images/clothes-slider/women/long-dress.png" },
  { link: "./images/clothes-slider/women/long-dress2.png" },
  { link: "./images/clothes-slider/women/w-shirt.png" },
];
const categoriesSliderMenImgs = [
  { link: "./images/categories-slider/men/men-bags-desk.png", name: "Sale Bags" },
  { link: "./images/categories-slider/men/men-shoes-desk.png", name: "Sale Shoes" },
  { link: "./images/categories-slider/men/men-tshirts-desk.png", name: "Sale T-shirts" },
];
const categoriesSliderWomenImgs = [
  { link: "./images/categories-slider/women/women_bags_desk.png", name: "Sale Bags" },
  { link: "./images/categories-slider/women/women_dresses_desk.png", name: "Sale Dresses" },
  { link: "./images/categories-slider/women/women_shoes_desk.png", name: "Sale Shoes" },
];
const runwaySliderMenImgs = [
  { link: "./images/runway-slider/men/runway_look_1.png",
    linkProduct: "./images/clothes-slider/men/shirt.png",
    name: "Shirt",
    class: "sale-runway__item-button product-top" },
  { link: "./images/runway-slider/men/runway_look_2.png",
    linkProduct: "./images/clothes-slider/men/shorts.png",
    name: "Shorts",
    class: "sale-runway__item-button product-bottom" },
  { link: "./images/runway-slider/men/runway_look_3.png",
    linkProduct: "./images/clothes-slider/men/sneakers.png",
    name: "Shoes",
    class: "sale-runway__item-button product-shoes" },
];
const runwaySliderWomenImgs = [
  { link: "./images/runway-slider/women/runway_look_1.png", class: "sale-runway__item-button product-top" },
  { link: "./images/runway-slider/women/runway_look_2.png", class: "sale-runway__item-button product-bottom" },
  { link: "./images/runway-slider/women/runway_look_3.png", class: "sale-runway__item-button product-bottom" },
];

//Секции размещения слайдеров
const vipSlider = document.querySelector("#vip-sale__wrapper");
const clothesSlider = document.querySelector("#sale-clothes__wrapper");
const categoriesSlider = document.querySelector("#sale-categories__wrapper");
const runwaySlider = document.querySelector("#sale-runway__wrapper");

// Создание экземпляра карточек слайдеров
const createCardVip = (cardItem) => {
  const cardVip = new Card({
    item: cardItem,
    templateSelector: "#vip-sale__item-template",
  });
  return cardVip.generateCardWithText();
};

const createCardClothes = (cardItem) => {
  const cardClothes = new Card({
    item: cardItem,
    templateSelector: "#sale-clothes__item-template",
  });
  return cardClothes.generateCard();
};

const createCardCategories = (cardItem) => {
  const cardCategories = new Card({
    item: cardItem,
    templateSelector: "#sale-categories__item-template",
  });
  return cardCategories.generateCardWithText();
};

const createCardRunway = (cardItem) => {
  const cardRunway = new Card({
    item: cardItem,
    templateSelector: "#sale-runway__item-template",
  });
  return cardRunway.generateCardWithBtn();
};

// Отрисовка экземпляра слайдеров
const vipList = new SliderSection(
  {
    renderer: (cardItem) => {
      vipList.addItem(createCardVip(cardItem));
    },
  },
  vipSlider
);

const clothesList = new SliderSection(
  {
    renderer: (cardItem) => {
      clothesList.addItem(createCardClothes(cardItem));
    },
  },
  clothesSlider
);

const categoriesList = new SliderSection(
  {
    renderer: (cardItem) => {
      categoriesList.addItem(createCardCategories(cardItem));
    },
  },
  categoriesSlider
);

const runwayList = new SliderSection(
  {
    renderer: (cardItem) => {
      runwayList.addItem(createCardRunway(cardItem));
    },
  },
  runwaySlider
);

// Отрисовка слайдеров из массивов
vipList.renderItems(vipSliderMenImgs);
clothesList.renderItems(clothesSliderMenImgs);
categoriesList.renderItems(categoriesSliderMenImgs);
runwayList.renderItems(runwaySliderMenImgs);

//Меняем контент при нажатии на кнопки + меняем стили свитчера + устанавливаем слушатели
const menBtnContents = document.querySelectorAll('.btn-men');
const womenBtnContents = document.querySelectorAll('.btn-women');

function changeContentMen() {
  document.querySelector('.sale-filter__switcher-btn.btn-men').classList.add('sale-filter__switcher-btn_active');
  document.querySelector('.sale-filter__switcher-btn.btn-women').classList.remove('sale-filter__switcher-btn_active');

  document.querySelector('.sale-shoes__img').src = './images/SNEAKERS1.png';
  vipList.renderItems(vipSliderMenImgs);
  document.querySelector('.sale-clothes__img').src = './images/MattiaGuolo_PHILIPPLEIN_22092023_LIFESTYLE_02_0571 1.png';
  clothesList.renderItems(clothesSliderMenImgs);
  categoriesList.renderItems(categoriesSliderMenImgs);
  runwayList.renderItems(runwaySliderMenImgs);
}

function changeContentWomen() {
  document.querySelector('.sale-filter__switcher-btn.btn-men').classList.remove('sale-filter__switcher-btn_active');
  document.querySelector('.sale-filter__switcher-btn.btn-women').classList.add('sale-filter__switcher-btn_active');

  document.querySelector('.sale-shoes__img').src = './images/women_heels.png';
  vipList.renderItems(vipSliderWomenImgs);
  document.querySelector('.sale-clothes__img').src = './images/w-clothes-banner.png';
  clothesList.renderItems(clothesSliderWomenImgs);
  categoriesList.renderItems(categoriesSliderWomenImgs);
  runwayList.renderItems(runwaySliderWomenImgs);
}

for (let i = 0; i < menBtnContents.length; ++i) {
  const menBtnContent = menBtnContents[i]
  menBtnContent.onclick = changeContentMen;
}

for (let i = 0; i < womenBtnContents.length; ++i) {
  const womenBtnContent = womenBtnContents[i]
  womenBtnContent.onclick = changeContentWomen;
}



const sliderPupupBtns = document.querySelectorAll('.sale-runway__item-button');

for (let i = 0; i < sliderPupupBtns.length; ++i) {
  const sliderPupupBtn = sliderPupupBtns[i]

  sliderPupupBtn.addEventListener('click', e => {
    const targetElem = e.target;
    const openedElem = targetElem.nextElementSibling;

    openedElem.classList.add('popup_opened');
  });
}