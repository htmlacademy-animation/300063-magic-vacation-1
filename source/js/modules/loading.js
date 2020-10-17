export default () => {
  window.addEventListener(`load`, () => {
    const page = document.querySelector(`body`);
    page.classList.add(`loaded`);
  }, {once: true});
};
