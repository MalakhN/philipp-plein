export default class Card {
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

