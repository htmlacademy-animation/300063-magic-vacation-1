import {
  IntroScreen,
  StoryScreen,
} from "./screens";
import {EScreenName} from "./screen-name";
import {ScreenSwitcher} from "./screen-switcher";
import {ScreenElement} from "./screens/screen-element";


const initScreenSwitcher = () => {
  const screenSwitcher = new ScreenSwitcher();
  const introScreen = new IntroScreen();
  const storyScreen = new StoryScreen();
  const prizesScreen = new ScreenElement(EScreenName.PRIZES);
  const rulesScreen = new ScreenElement(EScreenName.RULES);
  const gameScreen = new ScreenElement(EScreenName.GAME);
  [introScreen, storyScreen, prizesScreen, rulesScreen, gameScreen].forEach(screenSwitcher.addScreen);
  screenSwitcher.init(EScreenName.INTRO);
};

export {
  initScreenSwitcher,
};
