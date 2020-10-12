import {INTRO_TO_STORY_ANIMATION_DELAY} from "../../constants";
import {EScreenName} from "../screen-name";


class IntroScreen {
  constructor() {
    this.name = EScreenName.INTRO;
    this.screenElement = document.querySelector(`.screen--${this.name}`);
    this.menuItemElement = document.querySelector(`.page-header__menu .js-menu-link[data-href="${this.name}"]`);
    this._hidenTimer = null;
  }

  show() {
    this.screenElement.classList.remove(`screen--hidden`);
    this.screenElement.classList.add(`active`);
    this.menuItemElement.classList.add(`active`);
  }

  hide(nextScreen) {
    clearTimeout(this._hidenTimer);
    if (nextScreen !== EScreenName.STORY) {
      this.screenElement.classList.add(`screen--hidden`);
      this.screenElement.classList.remove(`active`);
      this.menuItemElement.classList.remove(`active`);
      return;
    }
    this._hidenTimer = setTimeout(() => {
      this.screenElement.classList.add(`screen--hidden`);
      this.menuItemElement.classList.remove(`active`);
    }, INTRO_TO_STORY_ANIMATION_DELAY);
    this.screenElement.classList.remove(`active`);
  }
}

export {
  IntroScreen,
};
