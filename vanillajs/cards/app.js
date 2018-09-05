const placeholderInfo = {
  image: "https://via.placeholder.com/150/771796",
  name: "Jane Doe",
  title: "VP Engineering"
};

class Card {
  constructor(container) {
    this.container = document.querySelector(container);
  }

  init() {
    const card = `
    <div class="card">
      <img src=${placeholderInfo.image} alt="placeholder">
      <h1>${placeholderInfo.name}</h1>
      <p>${placeholderInfo.title}</p>
    </div>
    `;
    this.container.innerHTML = card;
  }
}

const newCard = new Card(".root");
newCard.init();
