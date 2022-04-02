var swiper = new Swiper(".events__swiper", {
    keyboard: {
        enabled: true,
    },

    navigation: {
        nextEl: ".events-button-next",
        prevEl: ".events-button-prev",

    },
    watchOverflow: true,
    pagination: {
        el: ".events__swiper-pagination",
        clickable: true
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            spaceBetween: 30,


        },
        561: {
            slidesPerView: 2,
            spaceBetween: 34,


        },
        1024: {

            slidesPerView: 3,
            spaceBetween: 27
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
});
