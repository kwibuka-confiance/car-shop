const carListOb = {
  carlist: [
    {
      title: "Cheverloret Camaro",
      imgUrl:
        "https://www.chevrolet.ca/content/dam/chevrolet/na/canada/english/index/performance/2022-camaro/mov/new/2022-camaro-masthead-01.jpg?imwidth=960",
      price: 230000,
      description: "A better and fast car",
    },
    {
      title: "Hyundai Tucson",
      imgUrl:
        "https://www.indiacarnews.com/wp-content/uploads/2022/03/2022-Hyundai-Tucson-7-Seater.jpg",
      price: 260000,
      description: "A better and family car",
    },
    {
      title: "Hyundai Tucson",
      imgUrl:
        "https://www.indiacarnews.com/wp-content/uploads/2022/03/2022-Hyundai-Tucson-7-Seater.jpg",
      price: 260000,
      description: "A better and family car",
    },
    {
      title: "Cheverloret Camaro",
      imgUrl:
        "https://www.chevrolet.ca/content/dam/chevrolet/na/canada/english/index/performance/2022-camaro/mov/new/2022-camaro-masthead-01.jpg?imwidth=960",
      price: 230000,
      description: "A better and fast car",
    },
  ],
  render() {
    const rootApp = document.getElementById("app");
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
      <div  >
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
  },
};

carListOb.render();
