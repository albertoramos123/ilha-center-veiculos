// Exemplo simples de código JavaScript que pode ser expandido conforme necessário

document.addEventListener('DOMContentLoaded', function() {
    // Código para manipular interações, adicionar funcionalidades, etc.
});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);
});
