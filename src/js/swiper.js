// var swiper = new Swiper('.swiper', {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   keyboard: {
//     enabled: true,
//   },
//   breakpoints: {
//     375: {
//       slidesPerView: 1,
//       spaceBetween: 18,
//     },
//     // when window width is >= 768px
//     768: {
//       slidesPerView: 2.3,
//       spaceBetween: 18,
//     },
//     // when window width is >= 1200px
//     1200: {
//       slidesPerView: 4,
//       spaceBetween: 18,
//     },
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 18,

  keyboard: {
    enabled: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2.5,
      spaceBetween: 18,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper('.swiper-review', {
  slidesPerView: 1,
  spaceBetween: 18,

  keyboard: {
    enabled: true,
  },
  breakpoints: {
    // 375: {
    //   slidesPerView: 1,
    //   spaceBetween: 0,
    // },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
