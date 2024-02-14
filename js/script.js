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


images.forEach((element, index) => {

    // create three elements
    const img = element['image'];
    const title = element['title'];
    const text = element['text'];

    // create cols for aside
    const colElement = document.createElement("div");
    colElement.classList.add("col", "overflow-hidden");

    // create img and take object photo value
    const imgAsideElement = document.createElement("img");
    imgAsideElement.classList.add("img-fluid", "w-100", "h-100", "object-fit-cover");
    imgAsideElement.src = img;

    // create element blocks for the slider
    sliderElement.innerHTML += `
        <div class="mySlide h-100">
            <img class="img-fluid w-100 h-100 object-fit-cover" src="${img}" />
            <h2>${title}</h2>
            <p>${text}</p>
        </div>`


    // append every cols to the aside
    asideElement.append(colElement);

    // appen images to cols
    colElement.append(imgAsideElement)
});

const slideImgs = document.getElementsByClassName('mySlide');
console.log(slideImgs);

slideImgs[0].className += " active";


let slideNumber = 0;

document.querySelector(".arrow-up").addEventListener("click", function () {


    if (slideNumber < slideImgs.length) {

        slideImgs[slideNumber].classList.remove("active");

        slideNumber++;

        slideImgs[slideNumber].classList.add("active");

        console.log(slideNumber);

    } else {

        slideImgs[slideNumber].classList.remove("active");

        slideNumber = 0;

        slideImgs[slideNumber].classList.add("active");

    }


});


document.querySelector(".arrow-down").addEventListener("click", function () {

    if (slideNumber > 0) {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        slideImgs[slideNumber].classList.remove("active");

        // - diminuisco il contatore di 1
        slideNumber--;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        slideImgs[slideNumber].classList.add("active");

        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        slideImgs[slideNumber].classList.remove("active");

        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        slideNumber = slideImgs.length;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        slideImgs[slideNumber].classList.add("active");

    }

});



/* <div class="col overflow-hidden">
    <img src="./img/05.webp" class="img-fluid w-100 h-100 object-fit-cover" alt="">
    </div> */