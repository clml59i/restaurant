import { displayHomeContent } from "./home.js";
import { displayContactContent } from "./contact.js";
import { displayMenuContent } from "./menu.js";

const container = document.querySelector('#content');

function createHeader(){
    let header = document.createElement('header');
    let title = document.createElement('h1');
    title.textContent = "Clem's restaurant";
    header.appendChild(title);
    container.appendChild(header);
} 

function createNavBar(){
    let navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    let navHome = document.createElement('a');
    navHome.textContent = 'HOME';
    navHome.setAttribute('id', 'homeButton');
    navHome.classList.add('active');
    navHome.href = "#";
    navHome.addEventListener('click', displayHomeContent);

    let navMenu = document.createElement('a');
    navMenu.textContent = 'MENU';
    navMenu.setAttribute('id', 'menuButton');
    navMenu.href = "#";
    navMenu.addEventListener('click', displayMenuContent);

    let navContact = document.createElement('a');
    navContact.textContent = 'CONTACT';
    navContact.setAttribute('id', 'contactButton');
    navContact.href = "#";
    navContact.addEventListener('click', displayContactContent);

    navbar.appendChild(navHome);
    navbar.appendChild(navMenu);
    navbar.appendChild(navContact);
    container.appendChild(navbar);
}

function createDynamicDiv(){
    let dynamicContentDiv = document.createElement('div');
    dynamicContentDiv.setAttribute('id', 'dynamicContentDiv');
    container.appendChild(dynamicContentDiv);
}

export function clearDynamicDisplay(){
    //remove the active class on the previously clicked button
    let previousActiveButton = document.querySelector('.active');
    previousActiveButton.classList.remove("active");

    // Reset the display of the div containing the dynamic content
    dynamicContentDiv.className = "";
    while (dynamicContentDiv.hasChildNodes()){
        dynamicContentDiv.removeChild(dynamicContentDiv.firstChild);
    }

}

(function init (){
    createHeader();
    createNavBar();
    createDynamicDiv()
    // By default, we show the content of the home tab
    displayHomeContent();
})();