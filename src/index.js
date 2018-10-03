import Modal from './modal.js';

document.querySelector('.modal-btn').addEventListener('click', createModal);

function createModal() {
  const content = `
    <div class="modal-container">
      <h1 class="greeting">Hello World</h1>
      <button class="modal-close">Close</button>
    </div>`;
  const newModal = new Modal('.container-container', content);
  newModal.init();
}
