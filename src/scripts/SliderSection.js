export default class SliderSection {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  // Публичный метод, который отвечает за отрисовку всех элементов
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
