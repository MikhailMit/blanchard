var swiper = new Swiper(".publication-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,

    navigation: {
        nextEl: ".publication__swiper-button--next",
        prevEl: ".publication__swiper-button--prev",
    },
    pagination: {
        el: ".publication__swiper-pagination",
        type: "fraction"
    },
    breakpoints: {
        1: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 30,


        },
        561: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 30,

            grid: {
                rows: 1
            },
        },
        1024: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 50
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
});
