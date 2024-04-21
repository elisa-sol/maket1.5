    let init = false;
    let swiper;

    function swiperCard() {
        if (window.innerWidth < 768) {
            if (!init) {
                init = true;
                swiper = new Swiper(".swiper", {
                    loop: true,
                    speed: 1000,
                    freeMode: true,
                    slidesPerView: 1.2,
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

    const addAdditionalElement = (svg, alt, apple) => {
        let brand = document.querySelector(".brand");

        let additionalElement = document.createElement("div");
        additionalElement.classList.add("brand__company");

        let img = makeImage("img", "image", svg, alt);

        let s = window.getComputedStyle(document.querySelector(".image"));

        img.style.width = s.width;
        img.style.height = s.height;
        if (apple) {
            img.style.width = "44px"
        }

        additionalElement.appendChild(img);


        let button = makeImage("img", "button", "svg/button.svg", "Button");
        additionalElement.appendChild(button);

        brand.appendChild(additionalElement);
    }

    addAdditionalElement("svg/lenovo.svg", "Lenovo", false);
    addAdditionalElement("svg/samsung.svg", "Samsung", false);
    addAdditionalElement("svg/apple.svg", "Apple", true);



    let num = window.innerWidth;
    let newCount = 0;

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

    window.addEventListener("resize", function () {
        let newNum = window.innerWidth;
        if ((newNum >= 768 && newNum <= 1119) !== (num >= 768 && num <= 1119)) {
            location.reload();
        }
        num = newNum;
    });
