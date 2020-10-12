import throttle from "lodash/throttle";


const THROTTLE_TIMEOUT = 300;

class ScreenSwitcher {
  constructor() {
    this._screens = [];

    this.addScreen = this.addScreen.bind(this);
    this._onScrollHandler = this._onScrollHandler.bind(this);
    this._onUrlHashChangedHandler = this._onUrlHashChangedHandler.bind(this);
  }

  init(currentScreen) {
    this._activeScreen = currentScreen;
    document.addEventListener(`wheel`, throttle(this._onScrollHandler, THROTTLE_TIMEOUT, {trailing: false}));
    window.addEventListener(`popstate`, this._onUrlHashChangedHandler);
    this._showNextScreen(null, currentScreen);
  }

  addScreen(screen) {
    this._screens.push(screen);
  }

  _onScrollHandler(event) {
    if (event.deltaY > 0) {
      this._nextScreen();
    } else {
      this._backScreen();
    }
  }

  _onUrlHashChangedHandler() {
    const nextScreen = location.hash.slice(1);
    this._switchScreen(nextScreen);
  }

  _nextScreen() {
    const activeScreenIndex = this._screens.findIndex((screen) => screen.name === this._activeScreen) + 1;
    const nextScreenIndex = activeScreenIndex >= this._screens.length ? this._screens.length - 1 : activeScreenIndex;
    const nextScreen = this._screens[nextScreenIndex].name;
    this._switchScreen(nextScreen);
  }

  _backScreen() {
    const activeScreenIndex = this._screens.findIndex((screen) => screen.name === this._activeScreen) - 1;
    const nextScreenIndex = activeScreenIndex < 0 ? 0 : activeScreenIndex;
    const nextScreen = this._screens[nextScreenIndex].name;
    this._switchScreen(nextScreen);
  }

  _switchScreen(nextScreen) {
    this._hideAll(nextScreen);
    this._showNextScreen(this._activeScreen, nextScreen);
    this._activeScreen = nextScreen;
    this._emitChangeDisplayEvent();
  }

  _hideAll(nextScreen) {
    this._screens.forEach((screen) => screen.hide(nextScreen));
  }

  _showNextScreen(lastScreen, screenName) {
    const currentScreen = this._screens.find((screen) => screenName === screen.name);
    currentScreen.show(lastScreen);
  }

  _emitChangeDisplayEvent() {
    const currentScreen = this._screens.find((screen) => screen.name === this._activeScreen);
    const event = new CustomEvent(`screenChanged`, {
      detail: {
        'screenId': currentScreen.name,
        'screenName': currentScreen.screenElement.id,
        'screenElement': currentScreen.screenElement,
      }
    });
    document.body.dispatchEvent(event);
  }
}

export {
  ScreenSwitcher,
};
