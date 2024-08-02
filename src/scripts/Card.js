export default class Card {
  constructor({ item, templateSelector }) {
    this._name = item.name;
    this._link = item.link;
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
}
