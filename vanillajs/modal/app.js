document.querySelector(".modal-btn").addEventListener("click", createModal);

function createModal() {
  const content = `
    <div class="modal-container">
      <h1 class="greeting">Hello World</h1>
      <button class="modal-close">Close</button>
    </div>`;
  const newModal = new Modal(".container-container", content);
  newModal.init();
}

class Modal {
  constructor(container, content) {
    this.container = document.querySelector(container);
    this.content = content;
  }

  init() {
    this.container.innerHTML = this.content;
    this.container.classList.remove("hide");
    document.querySelector(".greeting").addEventListener("focus", function() {
      console.log("mew");
    });
    document.querySelector(".greeting").focus();
    this.addEventListeners();
  }

  addEventListeners() {
    document
      .querySelector(".modal-close")
      .addEventListener("click", e => this.modalClose());
    //document.querySelector('.modal-container')
  }

  modalClose() {
    this.container.classList.add("hide");
  }
}
