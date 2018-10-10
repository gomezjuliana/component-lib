class Modal {
  constructor(container, content) {
    this.container = document.querySelector(container);
    this.content = content;
    this.lastActiveElement = null;
  }

  init() {
    this.container.innerHTML = this.content;
    this.container.classList.remove('hide');
    this.lastActiveElement = document.activeElement;
    this.container.setAttribute('tabindex', '0');
    this.container.focus();

    this.addEventListeners();
  }

  addEventListeners() {
    document
      .querySelector('.modal-close')
      .addEventListener('click', e => this.modalClose());
    //document.querySelector('.modal-container')
  }

  modalClose() {
    this.container.classList.add('hide');
    this.lastActiveElement.focus();
  }
}

export default Modal;
