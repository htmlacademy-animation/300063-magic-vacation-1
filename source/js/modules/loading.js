export default () => {
  window.addEventListener(`load`, () => {
    const page = document.querySelector(`.page`);
    const isHiddenHeader = page.classList.contains(`page--loading`);
    if (isHiddenHeader) {
      page.classList.remove(`page--loading`);
    }
  });
};
