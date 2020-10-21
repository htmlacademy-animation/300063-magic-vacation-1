import AccentTypographyBuild from './accent-typography-build';

const TITLE_ANIMATION_DELAY = 500;
const DATE_ANIMATION_DELAY = 1500;
const TITLE_LETTER_ANIMATION_DURATION = 500;
const LETTER_DELAY_INCREMENT = 50;

export default () => {
  const titleTypography = new AccentTypographyBuild({
    selector: `.intro__title`,
    classForWordContainer: `intro__title-word`,
    classForActivate: `active`,
    property: `transform`,
    duration: TITLE_LETTER_ANIMATION_DURATION,
    delayIncrement: LETTER_DELAY_INCREMENT,
  });

  const dateTypography = new AccentTypographyBuild({
    selector: `.intro__date`,
    classForWordContainer: `intro__date-word`,
    classForActivate: `active`,
    property: `transform`,
    duration: TITLE_LETTER_ANIMATION_DURATION,
    delayIncrement: LETTER_DELAY_INCREMENT,
  });

  const showTitle = () => {
    const hash = window.location.hash.slice(1);
    if (hash === `top`) {
      titleTypography.run(TITLE_ANIMATION_DELAY);
      dateTypography.run(DATE_ANIMATION_DELAY);
    }
  };
  window.addEventListener(`hashchange`, (event) => {
    const oldHash = event.oldURL.split(`#`).pop();
    if (oldHash === `top`) {
      titleTypography.cancel();
      dateTypography.cancel();
    }
    showTitle();
  });
  showTitle();
};
