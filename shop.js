let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;
const dotsContainer = document.querySelector('.dots');

// Dynamically create dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dots span');

function showSlide(index) {
  // Loop around correctly
  slideIndex = (index + totalSlides) % totalSlides;

  // Correctly calculate width
  slides.style.transform = `translateX(-${slideIndex * (100 / totalSlides)}%)`;

  updateDots();
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === slideIndex);
  });
}

document.querySelector('.next').addEventListener('click', () => {
  showSlide(slideIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

// Auto slide
let autoSlide = setInterval(() => showSlide(slideIndex + 1), 4000);

const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
sliderContainer.addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => showSlide(slideIndex + 1), 4000);
});

// Initialize the first slide
showSlide(slideIndex);




