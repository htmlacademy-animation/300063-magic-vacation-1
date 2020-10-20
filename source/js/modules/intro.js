import AccentTypographyBuild from './accent-typography-build';

const TITLE_ANIMATION_DELAY = 500;
const TITLE_LETTER_ANIMATION_DURATION = 500;
const TITLE_DELAY_INCREMENT = 50;

export default () => {
  const accentTypographyBuild = new AccentTypographyBuild({
    selector: `.intro__title`,
    classForWordContainer: `intro__title-word`,
    classForActivate: `active`,
    property: `transform`,
    duration: TITLE_LETTER_ANIMATION_DURATION,
    delayIncrement: TITLE_DELAY_INCREMENT,
  });

  const showTitle = () => {
    const hash = window.location.hash.slice(1);
    if (hash === `top`) {
      accentTypographyBuild.run(TITLE_ANIMATION_DELAY);
    }
  };
  window.addEventListener(`hashchange`, (event) => {
    const oldHash = event.oldURL.split(`#`).pop();
    if (oldHash === `top`) {
      accentTypographyBuild.cancel();
    }
    showTitle();
  });
  showTitle();
};
