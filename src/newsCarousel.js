var newsSwiper = new Swiper(".news-swiper", {
    slidesPerView: 3,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    autoplay:{
        delay: 2000,
    },

    navigation: {
        nextEl: ".news-swiper-next",
        prevEl: ".news-swiper-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 31
        },
    },
});

// export default newsSwiper;