export class CarElement {
  constructor(carObj) {
    this.car = carObj;
  }
  render() {
    const carItem = document.createElement("li");
    carItem.innerHTML = `
      <div>
      <div class="list-image">
      <img src="${this.car.imgUrl}" alt="${this.car.title}"/>
      </div>
      <div class="title">${this.car.title}</div>
      <div class="description">${this.car.description}</div>
      <button>Add to Cart</button>
      </div>
      `;
    return carItem;
  }
}
