// JavaScript to manage the slider
const slidesContainer = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentIndex = 1; // Start from the first real slide (after cloning)
let slideInterval = setInterval(nextSlide, 2000);

// Clone first and last slides for seamless looping
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slides[0]);

// Function to move to the next slide
function nextSlide() {
  currentIndex++;
  updateSlide();
}

// Function to update the active slide
function updateSlide() {
  slidesContainer.style.transition = "transform 0.5s ease-in-out";
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Loop to the first real slide
  if (currentIndex === slides.length + 1) {
    setTimeout(() => {
      slidesContainer.style.transition = "none"; // Disable transition temporarily
      currentIndex = 1; // Reset to the first real slide
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 500);
  }

  // Loop to the last real slide
  if (currentIndex === 0) {
    setTimeout(() => {
      slidesContainer.style.transition = "none"; // Disable transition temporarily
      currentIndex = slides.length; // Reset to the last real slide
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 500);
  }

  updateDots();
}

// Function to update active dots
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === (currentIndex - 1) % slides.length);
  });
}

// Event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(slideInterval); // Stop automatic sliding
    currentIndex = index + 1; // Adjust for the cloned slides
    updateSlide();
    slideInterval = setInterval(nextSlide, 2000); // Restart automatic sliding
  });
});

// Initialize the slider
slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
updateDots();




// BRAND CAROUSAL
const carousel = document.querySelector('.carousel-wrapper');
carousel.addEventListener('mouseenter', () => {
  carousel.style.animationPlayState = 'paused';
});

// Resume animation on mouse leave
carousel.addEventListener('mouseleave', () => {
  carousel.style.animationPlayState = 'runn-ing';
});


// FOR Arrows at the trending products
const trendingContainer = document.querySelector('.trending-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const cards = document.querySelectorAll('.card'); // All cards
const cardWidth = cards[0].offsetWidth + 20; // Card width + gap
let currentScroll = 0;

// Move one card to the right
rightArrow.addEventListener('click', () => {
  const maxScroll = (cards.length - 4) * cardWidth; // Stop after the last set of visible cards
  if (currentScroll < maxScroll) {
    currentScroll += cardWidth;
    trendingContainer.style.transform = `translateX(-${currentScroll}px)`;
  }
});

// Move one card to the left
leftArrow.addEventListener('click', () => {
  if (currentScroll > 0) {
    currentScroll -= cardWidth;
    trendingContainer.style.transform = `translateX(-${currentScroll}px)`;
  }
});





// TRENDINGG






// Select the popup and close button
const popup = document.getElementById('black-friday-popup');
const closeButton = document.querySelector('.popup-close');

// Close the popup when the close button is clicked
closeButton.addEventListener('click', function () {
  popup.style.display = 'none';
});

// Optional: Show the popup automatically after a delay
setTimeout(() => {
  popup.style.display = 'flex'; // Ensure the popup is visible
}, 1000); // 1-second delay








