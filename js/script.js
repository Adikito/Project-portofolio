 

let currentDetail = 0;
const details = document.querySelectorAll('.Portofolio-box .Portofolio-detail');
let currentSlide = 0;
const slides = document.querySelectorAll('.image-slide .img-item');

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
  details.forEach((detail, index) => {
    detail.classList.toggle('active', index === currentDetail);
  });
}

function nextSlide() {
  currentDetail = (currentDetail + 1) % slides.length;
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentDetail = (currentDetail - 1 + slides.length) % slides.length;
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();zz
}

// Initialize first slide
updateSlide();

// Fade
const fade = document.querySelectorAll('.fade');

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9;
    const triggerTop = window.innerHeight * 0.1;

    fade.forEach(box => {
        const fadeTop = box.getBoundingClientRect().top;
        const fadeBottom = box.getBoundingClientRect().bottom;

        if (fadeTop < triggerBottom && fadeBottom > triggerTop) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);