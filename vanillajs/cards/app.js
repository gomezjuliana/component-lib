/** Creating placeholder info but will fetch this from an API or a json later**/
const placeholderInfo = {
  image: "https://via.placeholder.com/150/771796",
  alt: "some placeholder text",
  name: "Jane Doe",
  title: "VP Engineering"
};

class Card {
  constructor( {rootClass, dataObj, cardClass = "card"} ) {
    this.container = document.querySelector(rootClass);
    this.data = dataObj;
    this.classes = {
      main: cardClass
    }
  }

  init() {
    const card = `
    <div class="${this.classes.main}">
      <img src=${this.data.image} alt="${this.data.alt}">
      <h1>${this.data.name}</h1>
      <p>${this.data.title}</p>
    </div>
    `;
    this.container.innerHTML = card;
  }
}

const configuration = {
  rootClass: ".root",
  dataObj: placeholderInfo,
  cardClass: "card-container"
};

const newCard = new Card(configuration);
newCard.init();
