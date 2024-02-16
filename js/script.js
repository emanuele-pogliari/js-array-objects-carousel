const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
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
<i class="fa-solid fa-circle-chevron-up arrow-up"></i>
<i class="fa-solid fa-circle-chevron-down arrow-down"></i>
</div>`

sliderElement.setAttribute("id", "slider");
asideElement.setAttribute("id", "aside");

sliderElement.classList.add("slider", "col-9", "p-0", "overflow-hidden");

rowElement.append(sliderElement, asideElement);


images.forEach(element => {

    // create three elements
    const img = element['image'];
    const title = element['title'];
    const text = element['text'];

    // create cols for aside
    const colElement = document.createElement("div");
    colElement.classList.add("col", "overflow-hidden", "thumb");

    // create img and take object photo value
    const imgAsideElement = document.createElement("img");
    imgAsideElement.classList.add("img-fluid", "w-100", "h-100", "object-fit-cover");
    imgAsideElement.src = img;

    // create element blocks for the slider
    sliderElement.innerHTML += `
        <div class="mySlide h-100 position-relative">
            <img class="img-fluid w-100 h-100 object-fit-cover" src="${img}" />
            <div class="text-container col-12 position-absolute my-text-container">
                <h2>${title}</h2>
                <p class="small">${text}</p>
            </div>
        </div>`


    // append every cols to the aside
    asideElement.append(colElement);

    // appen images to cols
    colElement.append(imgAsideElement)
});

const slideImgs = document.getElementsByClassName('mySlide');

slideImgs[0].className += " active";


function showSlide(n) {

    const arraySlides = document.getElementsByClassName('mySlide');

    if (n >= images.length) {
        n = 0;
    }
    else if (n < 0) {
        n = images.length - 1;
    }

    for (let i = 0; i < arraySlides.length; i++) {

        if (i == n) {
            arraySlides[i].classList.add("active");
        }
        else {
            arraySlides[i].classList.remove("active");
        }
    }
    arraySlides[n].classList.add("active");

}

let slideNumber = 0;
showSlide(slideNumber);

document.querySelector(".arrow-up").addEventListener("click", function () {
    slideNumber--;
    if (slideNumber < 0) {
        slideNumber = images.length - 1;
    }
    showSlide(slideNumber % images.length);
});

document.querySelector(".arrow-down").addEventListener("click", function () {
    slideNumber++;
    showSlide(slideNumber % images.length);
});



const thumbnailsElements = document.querySelectorAll("#aside .thumb");

thumbnailsElements.forEach(((currentThumbnail, index) => {

    currentThumbnail.addEventListener("click", () => {

        slideNumber = index;
        showSlide(slideNumber);
    })
}));

