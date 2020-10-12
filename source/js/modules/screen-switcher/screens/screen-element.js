class ScreenElement {
  constructor(screenName) {
    this.name = screenName;
    this.screenElement = document.querySelector(`.screen--${this.name}`);
    this.menuItemElement = document.querySelector(`.page-header__menu .js-menu-link[data-href="${this.name}"]`);
  }

  show() {
    this.screenElement.classList.remove(`screen--hidden`);
    this.screenElement.classList.add(`active`);
    this.menuItemElement.classList.add(`active`);
  }

  hide() {
    this.screenElement.classList.add(`screen--hidden`);
    this.screenElement.classList.remove(`active`);
    this.menuItemElement.classList.remove(`active`);
  }
}

export {
  ScreenElement,
};
