//
// const swiper = new Swiper('.sample-slider', {
//     loop: true,
//     autoplay: {
//         delay: 2000,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     on: {
//         resize: function enableOnlyMobile(swiper){
//             // Disable the slider when the window width is less than or equal to 960
//             if(960 < window.innerWidth){
//                 swiper.disable()
//                 swiper.el.classList.add('-non-slider')
//             }else{
//                 swiper.enable()
//                 swiper.el.classList.remove('-non-slider')
//             }
//         },
//     }
// })

// function sliderInit() {
//     const swiper = new Swiper ('.swiper', {
//         modules: [Navigation, Pagination], pagination: {
//             el: '.swiper-pagination',
//             clickable: true
//         },
//         breakpoints: {
//             320: {
//                 enabled: true,
//         slidesPerView: 'auto',
//         spaceBetween: 30
// },
//     768: {
//         enabled: false,
//             slidesPerView: 'auto'
//     },
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true, // true - Пагинация становится кликабельной
//             },
// }
// })
// }

let init = false;
let swiper;
function swiperCard() {
    if (window.innerWidth <= 768) {
        if (!init) {
            init = true;
            swiper = new Swiper(".swiper", {
                loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
                speed: 1000, // скорость переключения слайдов
                freeMode: true, // можно перетаскивать как ленту
                slidesPerView: 1.2, // кол-во активных слайдов
                spaceBetween: 10,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);



// const swiper = new Swiper('.swiper', {
//     loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
//     speed: 1000, // скорость переключения слайдов
//     freeMode: true, // можно перетаскивать как ленту
//     slidesPerView: 1.2, // кол-во активных слайдов
//     spaceBetween: 10,
                                                // centeredSlides : true,
                                                // direction: 'horizontal', // 'vertical', 'horizontal'
                                                // effect: 'slider', // cards, coverflow, flip, fade, cube
                                                // initialSlide: 2, // Начинаем со 2 слайдера
                                                // loopedSlides: 2,
                                                // centeredSlides: true, // центрирование слайдов
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true, // true - Пагинация становится кликабельной
//     },
// });






// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },
//
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//
//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });



// Инициализация Swiper
// const swiper = new Swiper('.swiper-container', {
//     // Параметры свайпера
//     direction: 'horizontal', // направление слайда
//     loop: true, // зацикливание слайдов
//     pagination: {
//         el: '.swiper-pagination', // селектор для пагинации
//         clickable: true, // кликабельность пагинации
//     },
//     navigation: {
//         nextEl: '.swiper-button-next', // селектор для кнопки "следующий"
//         prevEl: '.swiper-button-prev', // селектор для кнопки "предыдущий"
//     },
// });
//
// const swiper = new Swiper(".mySwiper", {
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });