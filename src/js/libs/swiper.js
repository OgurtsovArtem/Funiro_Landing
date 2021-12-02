/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-dupe-keys */
const introSlider = new Swiper(".slider-block__swiper", {
  // Optional parameters
  loop: true,
  observer: true,
  observerParents: true,
  slidesPerView: 1,
  spaceBetween: 32,
  watchOverflow: true,
  speed: 800,
  loop: true,
  loopAdditionalSlides: 5,
  preloadImages: false,
  parallax: true,

  // If we need pagination
  pagination: {
    el: ".slider-block__pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider-block__arrow-right",
    prevEl: ".slider-block__arrow-left",
  },
});

const compilationSlider = new Swiper(".compilation-slider", {
  // Optional parameters
  loop: true,
  observer: true,
  observerParents: true,
  slidesPerView: "auto",
  spaceBetween: 24,
  watchOverflow: true,
  loop: true,
  speed: 1000,
  loopAdditionalSlides: 5,
  preloadImages: false,
  parallax: true,

  // If we need pagination
  // pagination: {
  //   el: ".slider-block__pagination",
  //   clickable: true,
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: ".slider-block__arrow-right",
  //   prevEl: ".slider-block__arrow-left",
  // },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    540: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    780: {
      slidesPerView: "auto",
      spaceBetween: 24,
    },
  },
});

const blogSlider = new Swiper(".blog-slider__items", {
  // Optional parameters
  loop: true,
  observer: true,
  observerParents: true,
  slidesPerView: 1,
  spaceBetween: 32,
  watchOverflow: true,
  loop: true,
  speed: 1000,
  loopAdditionalSlides: 5,
  preloadImages: false,
  parallax: true,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".blog-slider__arrow-right",
    prevEl: ".blog-slider__arrow-left",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    540: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    780: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

const gallary = new Swiper(".gallary__slider", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  speed: 50000,
  watchOverflow: true,
  observer: true,
  slidesOffsetAfter: 0,
  observerParents: true,
  allowTouchMove: false,
  spaceBetween: 16,
  autoplay: {
    enabled: true,
    delay: 0,
  },
});
