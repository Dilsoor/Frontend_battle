var teamSwiper = new Swiper('.team-swiper', {
    slidesPerView: 4,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    autoplay:{
        delay: 2500,
    },
    navigation: {
        nextEl: '.team-swiper-next',
        prevEl: '.team-swiper-prev',
    },
    breakpoints: {
        // when window width is <= 480px
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is <= 768px
        588: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is <= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1240: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});


// export default teamSwiper;
