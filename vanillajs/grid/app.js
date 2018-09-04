class Grid {
  constructor(container, numberOfItems) {
    this.container = document.querySelector(container);
    this.numberOfTimesToRepeat = numberOfItems;
  }

  init() {
    const item = `<span class="item"></span>`;
    this.container.innerHTML = item.repeat(this.numberOfTimesToRepeat);
  }
}

const newGrid = new Grid(".root", 6);
newGrid.init();
