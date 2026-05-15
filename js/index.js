const projectSwiper = new Swiper(".project-swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 16,
  grabCursor: true,
  watchOverflow: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 24,
    },
  },

  pagination: {
    el: ".project-swiper .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".project-swiper .swiper-button-next",
    prevEl: ".project-swiper .swiper-button-prev",
  },
});
