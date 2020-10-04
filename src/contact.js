import { clearDynamicDisplay } from "./index.js";

export function displayContactContent(){
    const dynamicContentDiv = document.querySelector('#dynamicContentDiv');
    const contactButton = document.querySelector('#contactButton');

    clearDynamicDisplay();

    contactButton.classList.add("active");
    
    dynamicContentDiv.classList.add('contactContainer');

    let span = document.createElement('p');
    span.textContent = "This small project was done as part of the odin project curriculum. You can check the source code and my other work on github or contact me via linkedin !"

    let socialMediaDiv = document.createElement('div');
    socialMediaDiv.classList.add('socialMediaDiv')

    let linkedinLink = document.createElement('a');
    linkedinLink.classList.add('paddingLeft40');
    linkedinLink.setAttribute("href", "https://www.linkedin.com/in/cl%C3%A9ment-lance-6a9124a1/");
    let linkedinLogo = document.createElement('img');
    linkedinLogo.setAttribute('src', '../dist/assets/images/linkedin_logo.png');
    linkedinLink.appendChild(linkedinLogo);


    let githubLink = document.createElement('a');
    githubLink.setAttribute("href", "https://github.com/clml59i");
    let githubLogo = document.createElement('img');
    githubLogo.setAttribute('src', '../dist/assets/images/github_logo.png');
    githubLink.appendChild(githubLogo);

    socialMediaDiv.appendChild(linkedinLink);
    socialMediaDiv.appendChild(githubLink);


    dynamicContentDiv.appendChild(span);
    dynamicContentDiv.appendChild(socialMediaDiv);



}

