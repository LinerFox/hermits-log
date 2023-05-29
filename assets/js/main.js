"use strict";

// Add event listener on multiple events
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// Mobile Navbar toggler
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const toggleNav = () => navbar.classList.toggle("active");

addEventOnElements(navToggler, "click", toggleNav);

// HEADER ANIMATION - when scrolling down to 100px the header will be active
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// SLIDER
const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalVisibleSliderItems = Number(
  getComputedStyle(slider).getPropertyValue("--slider-items")
);

let totalSlidableItems =
  sliderContainer.childElementCount - totalVisibleSliderItems;

let currentSliderPosition = 0;

const moveSliderPosition = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSliderPosition].offsetLeft}px)`;
};
// NEXT SLIDER ITEM
const nextSliderItem = function () {
  const slideEnd = currentSliderPosition >= totalSlidableItems;
  if (slideEnd) {
    currentSliderPosition = 0;
  } else {
    currentSliderPosition++;
  }
  moveSliderPosition();
};

sliderNextBtn.addEventListener("click", nextSliderItem);

// PREV SLIDER ITEM
const prevSliderItem = function () {
  const slideEnd = currentSliderPosition >= totalSlidableItems;
  if (currentSliderPosition <= 0) {
    currentSliderPosition = totalSlidableItems;
  } else {
    currentSliderPosition--;
  }
  moveSliderPosition();
};

sliderPrevBtn.addEventListener("click", prevSliderItem);

// RESPONSIVE
window.addEventListener("resize", () => {
  totalVisibleSliderItems = Number(
    getComputedStyle(slider).getPropertyValue("--slider-items")
  );
  totalSlidableItems =
    sliderContainer.childElementCount - totalVisibleSliderItems;
  moveSliderPosition();
});
