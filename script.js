let init = false;
let swiper;

function swiperCard() {
    if (window.innerWidth < 768) {
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

    let makeImage = function (tagName, className, src, alt) {
        let element = document.createElement(tagName);
        element.classList.add(className);
        element.src = src;
        element.alt = alt;

        return element;
    };

    const addAdditionalElement = () => {
            let brand = document.querySelector(".brand");

            let additionalElement = document.createElement("div");
            additionalElement.classList.add("brand__company");

            let img = makeImage("img", "image", "svg/lenovo.svg", "Lenovo");

            let styleImage = document.querySelector(".image");
            let s = window.getComputedStyle(styleImage);

            img.style.width = s.width;
            img.style.height = s.height;

            additionalElement.appendChild(img);


            let button = makeImage("img", "button", "svg/button.svg", "Button");
            additionalElement.appendChild(button);

            brand.appendChild(additionalElement);
        }

    addAdditionalElement();

    let num = window.innerWidth;
    let newCount = 0
    // let currentCount = 0;

    if (num >= 768 && num <= 1119) {
        newCount = 6;
    } else {
        newCount = 8;
    }

    document.addEventListener("DOMContentLoaded", function () {
        let brandItems = document.querySelectorAll(".brand__company");

        for (let i = newCount; i < brandItems.length; i++) {
            brandItems[i].style.display = "none";
        }

        let showAllButton = document.querySelector(".buttonBlock__show-all-button");
        let isExpanded = false;


        let style = document.querySelector(".brand__company");
        let s = window.getComputedStyle(style);

        showAllButton.addEventListener("click", function () {
            if (!isExpanded) {
                for (let i = newCount; i < brandItems.length; i++) {
                    brandItems[i].style.display = s.display;
                }
                showAllButton.textContent = "Скрыть";
                document.querySelector('.up').style.display = 'block';
                document.querySelector('.down').style.display = 'none';
                isExpanded = true;
            } else {
                for (let i = newCount; i < brandItems.length; i++) {
                    brandItems[i].style.display = "none";
                }
                showAllButton.textContent = "Показать все";
                document.querySelector('.up').style.display = 'none';
                document.querySelector('.down').style.display = 'block';
                isExpanded = false;
            }
        });
    });

// let num = window.innerWidth;
// let newCount = 0
// let currentCount = 0; // Глобальная переменная для отслеживания текущего значения count
//
// function updateCount() {
//     let num = window.innerWidth;
//     // let newCount;
//
//     if (num >= 768 && num <= 1119) {
//         newCount = 6;
//     } else {
//         newCount = 8;
//     }
//
//     if (newCount !== currentCount) { // Проверяем, изменилось ли значение count
//         location.reload(); // Если изменилось, перезагружаем страницу
//     }
//
//     currentCount = newCount; // Обновляем текущее значение count
// }
//
// // updateCount(); // Вызываем функцию при загрузке страницы
//
//  window.addEventListener("resize", location.reload());