var swiper = new Swiper('.slide-content', {
    slidesPerView: 3,
    spacebetween: 30,
    loop: true,
    centerSlide: true,
    fade: 'true',
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
})
function openNav() {
    document.getElementById('myNav').style.height = '50%'
}
function closeNav() {
    document.getElementById('myNav').style.height = 0
}
// $("#myNav").blur(function () {
//     var height = '60%'
//     if (height < '60%') {
//         document.getElementById('myNav').style.height = 0
//     }
// });