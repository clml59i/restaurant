import { clearDynamicDisplay } from "./index.js";



export function displayHomeContent(){
    const dynamicContentDiv = document.querySelector('#dynamicContentDiv');
    const homeButton = document.querySelector('#homeButton');   

    clearDynamicDisplay();

    homeButton.classList.add('active');

    dynamicContentDiv.classList.add('textContainer');

    let span = document.createElement('span');
    span.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus pretium arcu a congue. Mauris mollis porta facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris a gravida metus. Phasellus tempor sem id molestie aliquet. Cras in varius lectus. Ut at lectus dui. Integer leo nisl, auctor at elit non, eleifend volutpat mauris. Pellentesque ornare enim vitae luctus congue. Morbi ac felis eu ex pharetra placerat ornare at lacus. Sed non odio fermentum, fermentum turpis vel, laoreet ipsum. Maecenas fermentum imperdiet fermentum. Suspendisse vitae mattis libero. Maecenas tincidunt non orci mollis elementum. Maecenas a leo lobortis, posuere quam eget, congue magna."

    dynamicContentDiv.appendChild(span);
}

