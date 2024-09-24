// script.js
// let currentSlide = 0;

// function moveSlide(n) {
//     const slides = document.querySelectorAll('.carousel-item');
//     currentSlide = (currentSlide + n + slides.length) % slides.length;
//     document.querySelector('.carousel-inner').style.transform = `translateX(-${currentSlide * 100}%)`;
// }

let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    currentSlide++;
    if (currentSlide > slides.length) {
        currentSlide = 1;
    }
    slides[currentSlide - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener('DOMContentLoaded', showSlides);
