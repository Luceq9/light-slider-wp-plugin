document.addEventListener('DOMContentLoaded', function () {
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;
  const slideInterval = 3000; // 3 seconds

  slidesContainer.style.position = 'relative';
  slides.forEach((slide, index) => {
    slide.style.position = 'absolute';
    slide.style.top = '0';
    slide.style.left = '0';
    slide.style.opacity = index === 0 ? '1' : '0';
    slide.style.transition = 'opacity 1s';
  });

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
    });
  }

  function showNextSlide() {
    slides[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.opacity = '1';
  }

  function showPrevSlide() {
    slides[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].style.opacity = '1';
  }

  prevButton.addEventListener('click', showPrevSlide);
  nextButton.addEventListener('click', showNextSlide);

  // Initialize the slider
  showSlide(currentIndex);

  // Set up automatic slide transition
  setInterval(showNextSlide, slideInterval);
});
