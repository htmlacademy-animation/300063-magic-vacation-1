export default () => {
  const screenRulesElement = document.querySelector(`.screen--rules`);
  const ruleElements = screenRulesElement.querySelectorAll(`.rules__item`);
  const ruleLinkElement = screenRulesElement.querySelector(`.rules__link`);
  const lastRuleElement = Array.from(ruleElements).pop();
  lastRuleElement.addEventListener(`animationend`, (event) => {
    if (event.animationName === `show-round`) {
      ruleLinkElement.classList.remove(`rules__link--hidden`);
    }
  });
  window.addEventListener(`hashchange`, (event) => {
    const oldHash = event.oldURL.split(`#`).pop();
    if (oldHash === `rules`) {
      ruleLinkElement.classList.add(`rules__link--hidden`);
    }
  });
};
