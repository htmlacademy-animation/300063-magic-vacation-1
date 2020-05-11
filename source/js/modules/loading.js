export default () => {
  const loadPageHandler = () => {
    const page = document.querySelector(`.page`);
    const isLoadingPage = page.classList.contains(`page--loading`);
    if (isLoadingPage) {
      page.classList.remove(`page--loading`);
    }
  };
  window.addEventListener(`load`, loadPageHandler, {once: true});
};
