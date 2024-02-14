const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


let sliderElement = document.createElement("div");
let asideElement = document.createElement("div");
let rowElement = document.querySelector(".my-row");

asideElement.classList.add("col-3", "p-0", "position-relative");
asideElement.innerHTML = `<div id="arrows">
<i class="fa-solid fa-circle-chevron-up"></i>
<i class="fa-solid fa-circle-chevron-down"></i>
</div>`

sliderElement.setAttribute("id", "slider");
asideElement.setAttribute("id", "aside");

sliderElement.classList.add("slider", "col-9", "p-0", "overflow-hidden");

rowElement.append(sliderElement, asideElement);


images.forEach(element => {
    const colElement = document.createElement("div");
    colElement.classList.add("col", "overflow-hidden");
    const imgAsideElement = document.createElement("img");
    imgAsideElement.classList.add("img-fluid", "w-100", "h-100", "object-fit-cover");
    imgAsideElement.src = element['image'];
    asideElement.append(colElement);
    colElement.append(imgAsideElement)
});






// document.querySelector("#up-arrow").addEventListener("click", function () {
//     if (slideNumber < images.length) {
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");
//         slideNumber++;
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");
//         console.log(slideNumber);
//     } else {
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");
//         slideNumber = 1;
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");
//     }
// });






/* <div class="col overflow-hidden">
    <img src="./img/05.webp" class="img-fluid w-100 h-100 object-fit-cover" alt="">
    </div> */