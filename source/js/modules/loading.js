export default () => {
  window.addEventListener(`load`, () => {
    const page = document.querySelector(`.page`);
    const isLoadingPage = page.classList.contains(`page--loading`);
    if (isLoadingPage) {
      page.classList.remove(`page--loading`);
    }
  });
};
