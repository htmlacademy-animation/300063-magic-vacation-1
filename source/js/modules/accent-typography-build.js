const LETTER_STEP = 3;
const DEFAULT_DELAY_INCREMENT = 50;
const DEFAULT_DURATION = 0;
const DEFAULT_TIMER = 0;
const EShiftDelayType = {
  POSITIVE: 1,
  NEGATIVE: 2,
};

class AccentTypographyBuild {
  constructor(params) {
    this._init(params);
    this._prepareText();
  }

  run(delay = DEFAULT_TIMER) {
    if (!this._element) {
      return;
    }
    setTimeout(() => {
      this._element.classList.add(this._classForActivate);
    }, delay);
  }

  cancel() {
    if (this._element) {
      this._element.classList.remove(this._classForActivate);
    }
  }

  _init(params) {
    const {
      selector,
      classForActivate,
      property,
      classForWordContainer,
      duration = DEFAULT_DURATION,
      delayIncrement = DEFAULT_DELAY_INCREMENT,
    } = params;
    this._elementSelector = selector;
    this._classForWordContainer = classForWordContainer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._duration = duration;
    this._delayIncrement = delayIncrement;
    this._element = document.querySelector(this._elementSelector);
    this._delay = 0;
  }

  _prepareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim().split(/\s+/g);
    const content = text.reduce((parentFragment, word) => {
      const wordElement = this._getWordFragmentContainer(word);
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(this._classForWordContainer);
      const textNode = document.createTextNode(` `);
      wordContainer.appendChild(wordElement);
      wordContainer.appendChild(textNode);
      parentFragment.appendChild(wordContainer);
      return parentFragment;
    }, document.createDocumentFragment());
    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  _getWordFragmentContainer(word) {
    return Array.from(word).reduce((fragment, letter, index) => {
      const delay = this._getShiftedDelay(index);

      const letterContainer = document.createElement(`span`);
      letterContainer.textContent = letter;
      letterContainer.style.transition = `${this._property} ${this._duration}ms ease ${delay}ms`;
      fragment.appendChild(letterContainer);

      this._delay += this._delayIncrement;
      return fragment;
    }, document.createDocumentFragment());
  }


  _getShiftedDelay(index) {
    const shift = index % LETTER_STEP;
    let delta = 0;
    if (shift === EShiftDelayType.POSITIVE) {
      delta = this._delayIncrement;
    }
    if (shift === EShiftDelayType.NEGATIVE) {
      delta = -this._delayIncrement;
    }
    return this._delay + delta;
  }
}

export default AccentTypographyBuild;
