var projectSwiper = new Swiper(".project__partners-mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".project-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".project__partners-button--next",
        prevEl: ".project__partners-button--prev"
    },
    watchOverflow: true,
    breakpoints: {
        1: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        560: {
            slidesPerView: 2,
            spaceBetween: 34
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 50
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    },
});
