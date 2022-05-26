// import axios from 'axios'
import { Car } from "./models/car.js";
import { CarElement } from "./carElement.js";

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

  async render() {
    const rootApp = document.querySelector("#app");
    const header = document.createElement("div");
    const main = document.getElementById("main");
    header.className = "header";
    header.innerHTML = `
    <div class="header-title" >
    <div>Car SHop</div>
    <a href="../car.html"><div class="add-car">Add Car</div></a>
    </div>
    `;

    const carListDOM = document.createElement("ul");
    carListDOM.className = "list";

    try {
      const response = await axios.get(
        "https://car-shop-3164a-default-rtdb.firebaseio.com/cars.json"
      );
      const results = response.data;
      for (let carId in results) {
        console.log(
          new Car(
            results[carId].title,
            results[carId].imgUrl,
            results[carId].price,
            results[carId].description
          )
        );
        const carItem = new CarElement(
          new Car(
            results[carId].title,
            results[carId].imgUrl,
            results[carId].price,
            results[carId].description
          )
        );
        carListDOM.append(carItem.render());
      }
    } catch (error) {
      console.log(error);
    }

    rootApp.append(header, carListDOM);
  }
}


const app = new CarList();
app.render();
