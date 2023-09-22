const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');
const bannerImg = document.querySelector('.banner-img');
const dotsContainer = document.getElementById('dots');

let currentSlideIndex = 0;

function updateSlide(index) {
    if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlideIndex = 0;
    }

    bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
    
    
    const tagLine = document.querySelector('#banner p');
    tagLine.innerHTML = slides[currentSlideIndex].tagLine;
    
    updateDots(); 
}

arrowLeft.addEventListener('click', function() {
    currentSlideIndex--;
    updateSlide(currentSlideIndex);
});

arrowRight.addEventListener('click', function() {
    currentSlideIndex++;
    updateSlide(currentSlideIndex);
});


function createDots() {
    for (let index = 0; index < slides.length; index++) {
        const dot = document.createElement('div'); 
        dot.classList.add('dot'); 
        dotsContainer.appendChild(dot); 
    }
}

createDots();


function updateDots() {
    const dots = document.querySelectorAll('.dot');
    for (let index = 0; index < dots.length; index++) {
        const dot = dots[index];
        if (index === currentSlideIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    }
}

updateSlide(currentSlideIndex);



