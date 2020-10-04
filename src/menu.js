import { clearDynamicDisplay } from "./index.js";

let foodList  = [
    {
        name : "Pizza",
        price : 12
    },
    {
        name : "Beer",
        price : 5
    },
    {
        name : "Burger",
        price : 10
    },
    {
        name : "Coffee",
        price : 3
    },
    {
        name : "Cookie",
        price : 4
    },
    {
        name : "Corn",
        price : 4
    },
    {
        name : "Egg",
        price : 5
    },
    {
        name : "Hotdog",
        price : 7.50
    },
    {
        name : "Icecream",
        price : 8
    }

]


function createMenuElement(name, price) {
    let foodCard = document.createElement('div');
    foodCard.classList.add('foodCard');

    let foodImage = document.createElement('img');
    foodImage.classList.add('foodImage');
    foodImage.setAttribute('src', `../dist/assets/images/${name.toLowerCase()}.png`)

    let foodName = document.createElement('p');
    foodName.classList.add('foodName');
    foodName.textContent = name + " - " + price + " €";

    foodCard.appendChild(foodImage);
    foodCard.appendChild(foodName);
    

    return foodCard;
}

export function displayMenuContent(){
    clearDynamicDisplay();
    const menuButton = document.querySelector('#menuButton');
    menuButton.classList.add('active');

    const dynamicContentDiv = document.querySelector('#dynamicContentDiv');
  
    dynamicContentDiv.classList.add('grid9');

    foodList.forEach(element => {
        let menuCard = createMenuElement(element.name, element.price);
        dynamicContentDiv.appendChild(menuCard);
    });

}