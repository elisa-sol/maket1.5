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






// 2

document.addEventListener("DOMContentLoaded", function() {
    let showAllButton = document.querySelector(".show-all-button"); //находит первый элемент в документе с классом show-all-button
                                                                    // и присваивает его переменной showAllButton.Эта переменная
                                                                    // теперь ссылается на этот элемент DOM, и вы можете
                                                                    // взаимодействовать с ним через переменную showAllButton.
                                                                    // Например, вы можете добавить обработчик событий к
                                                                    // этому элементу, изменить его содержимое или стиль, и т.д.

    let brandItems = document.querySelectorAll(".brand__company"); // Выражение находит все элементы в документе с классом
                                                                    // brand__company и присваивает их NodeList (типа массива) переменной
                                                                    // brandItems.Переменная brandItems теперь ссылается
                                                                    // на коллекцию элементов DOM, и вы можете взаимодействовать
                                                                    // с каждым из них через переменную brandItems.
                                                                    // Например, вы можете перебрать все элементы в коллекции,
                                                                    // изменить их содержимое или стиль, и т.д.
        let isExpanded = false; //Эта переменная будет использоваться для отслеживания состояния раскрытости или свернутости
                                // кнопки "Показать всё".

    // Скрываем элементы, начиная с седьмого
    for (let i = 6; i < brandItems.length; i++) {   // Цикл начинается с индекса 6 и продолжается до brandItems.length,
        brandItems[i].style.display = "none";       // то есть до конца коллекции. Внутри цикла для каждого элемента в
    }                                               // коллекции устанавливается свойство style.display в значение "none",
                                                    // что приводит к тому, что элемент становится невидимым (display: none)
                                                    // на странице.

   //  var makeElement = function (tagName, className, text) {
   //      var element = document.createElement(tagName);
   //      element.classList.add(className);
   //      if (text) {
   //          element.textContent = text;
   //      }
   //      return element;
   //  };
   //
   // let addAdditionalElement = function() {
   //      // Создаем новый элемент с помощью функции makeElement
   //      let additionalElement = makeElement("div", "swiper-slide brand__company");
   //      // Создаем элемент img с помощью функции makeElement
   //      let imgElement = makeElement("img");
   //      imgElement.src = "svg/lenovo.svg";
   //      imgElement.alt = "Lenovo";
   //      // Добавляем элемент img в созданный div
   //      additionalElement.appendChild(imgElement);
   //
   //      // Вставляем созданный элемент перед следующим элементом после шестого элемента в brandItems
   //      brandItems[7].parentNode.insertBefore(additionalElement, brandItems[7]);
   //  }
   //  addAdditionalElement();


    // // Функция для добавления дополнительного элемента
    // function addAdditionalElement() {
    //     let additionalElement = document.createElement("div");
    //     additionalElement.classList.add("brand__company");
    //     additionalElement.innerHTML = '<img class="image" src="svg/lenovo.svg" alt="Lenovo"> <img src="svg/button.svg" alt="Button">';
    //     brandItems[7].parentNode.insertBefore(additionalElement, brandItems[7].nextSibling);
    // }
    //
    // // Добавляем дополнительный элемент
    //         addAdditionalElement();


    showAllButton.addEventListener("click", function() {
        if (!isExpanded) {
            // Показываем скрытые элементы
            for (let i = 6; i < brandItems.length; i++) {
                brandItems[i].style.display = "block";
            }
            showAllButton.textContent = "Скрыть";
            isExpanded = true;
        } else {
            // Скрываем элементы, начиная с седьмого
            for (let i = 6; i < brandItems.length; i++) {
                brandItems[i].style.display = "none";
            }
            showAllButton.textContent = "Показать все";
            isExpanded = false;
        }
    });
});







// document.addEventListener("DOMContentLoaded", function() {
//     let showAllButton = document.querySelector(".show-all-button");
//     let brandItems = document.querySelectorAll(".swiper-wrapper.brand .swiper-slide");
//     let isExpanded = false;
//
//     // Скрываем элементы, начиная с седьмого
//     for (var i = 6; i < brandItems.length; i++) {
//         brandItems[i].style.display = "none";
//     }
//
//     // Функция для добавления дополнительного элемента
//     function addAdditionalElement() {
//         var additionalElement = document.createElement("div");
//         additionalElement.classList.add("swiper-slide", "brand__company");
//         additionalElement.innerHTML = '<img class="image" src="svg/lenovo.svg" alt="Lenovo">';
//         brandItems[6].parentNode.insertBefore(additionalElement, brandItems[6].nextSibling);
//     }
//
//     // Добавляем дополнительный элемент
//     addAdditionalElement();
//
//     showAllButton.addEventListener("click", function() {
//         if (!isExpanded) {
//             // Показываем скрытые элементы
//             for (var i = 6; i < brandItems.length; i++) {
//                 brandItems[i].style.display = "block";
//             }
//             showAllButton.textContent = "Скрыть";
//             isExpanded = true;
//         } else {
//             // Скрываем элементы, начиная с седьмого
//             for (var i = 6; i < brandItems.length; i++) {
//                 brandItems[i].style.display = "none";
//             }
//             showAllButton.textContent = "Показать все";
//             isExpanded = false;
//         }
//     });
// });
