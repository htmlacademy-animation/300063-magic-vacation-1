export default () => {
  const loadPageHandler = () => {
    const page = document.querySelector(`body`);
    page.classList.add(`loaded`);
  };
  window.addEventListener(`load`, loadPageHandler, {once: true});
};
