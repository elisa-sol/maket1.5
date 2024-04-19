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
