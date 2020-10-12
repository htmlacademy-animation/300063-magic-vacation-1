import {INTRO_TO_STORY_ANIMATION_DELAY} from "../../constants";
import {EScreenName} from "../screen-name";


class StoryScreen {
  constructor() {
    this.name = EScreenName.STORY;
    this.screenElement = document.querySelector(`.screen--${this.name}`);
    this.menuItemElement = document.querySelector(`.page-header__menu .js-menu-link[data-href="${this.name}"]`);
    this._showedTimer = null;
  }

  show(lastScreen) {
    if (lastScreen !== EScreenName.INTRO) {
      this._showElements();
      return;
    }
    this._showedTimer = setTimeout(() => {
      this._showElements();
    }, INTRO_TO_STORY_ANIMATION_DELAY);
  }

  hide() {
    clearTimeout(this._showedTimer);
    this.screenElement.classList.add(`screen--hidden`);
    this.screenElement.classList.remove(`active`);
    this.menuItemElement.classList.remove(`active`);
  }

  _showElements() {
    this.screenElement.classList.remove(`screen--hidden`);
    this.screenElement.classList.add(`active`);
    this.menuItemElement.classList.add(`active`);
  }
}

export {
  StoryScreen,
};
