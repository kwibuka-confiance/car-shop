class Car {
  constructor(title, imgUrl, price, description) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.price = price;
    this.description = description;
  }
}

class CarList {
  carlist = [
    new Car(
      "Cheverloret Camaro",
      "https://www.chevrolet.ca/content/dam/chevrolet/na/canada/english/index/performance/2022-camaro/mov/new/2022-camaro-masthead-01.jpg?imwidth=960",
      200000,
      "A better and fast car"
    ),
    new Car(
      "Hyundai Tucson",
      "https://www.indiacarnews.com/wp-content/uploads/2022/03/2022-Hyundai-Tucson-7-Seater.jpg",
      203000,
      "A better and family car"
    ),
  ];

  // todo create the class called CarElement and then
  // todo  paste the car element inside then call it inside the carList

  render() {
    const rootApp = document.querySelector("#app");
    const header = document.createElement("div");
    header.className = "header";
    header.innerHTML = `
    <div class="header-title" >
    <div>Car SHop</div>
    <div>Cart</div>
    </div>
    `;

    const carListDOM = document.createElement("ul");
    carListDOM.className = "list";
    for (let car of this.carlist) {
      const carItem = document.createElement("li");
      carItem.innerHTML = `
      <div>
      <div class="list-image">
      <img src="${car.imgUrl}" alt="${car.title}"/>
      </div>
      <div class="title">${car.title}</div>
      <div class="description">${car.description}</div>
      <button>Add to Cart</button>
      </div>
      `;
      carListDOM.append(carItem);
    }

    rootApp.append(header, carListDOM);
  }
}

const app = new CarList();
app.render();
