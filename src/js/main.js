let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
    }

    lastScroll = currentScroll;
});

const navActions = document.querySelector('.nav-actions');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', () => {
    navActions.classList.add('open');
    document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', () => {
    navActions.classList.remove('open');
    document.body.classList.remove('no-scroll');
});

document.addEventListener('DOMContentLoaded', function () {
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper(".mySwiper", {
            autoHeight: true,
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                1200: {
                    slidesPerView: 4.3
                },
                centeredSlides: true,
                800: {
                    slidesPerView: 3
                },
                550: {
                    slidesPerView: 2
                },
                400: {
                    slidesPerView: 1.5
                }
            },
            navigation: {
                nextEl: ".swiper1-right",
                prevEl: ".swiper1-left",
                disabledClass: "is-disabled",
            },
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper(".mySwiper2", {
            autoHeight: true,
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                1200: {
                    slidesPerView: 4.3
                },
                centeredSlides: true,
                800: {
                    slidesPerView: 3
                },
                550: {
                    slidesPerView: 2
                },
                400: {
                    slidesPerView: 1.5
                }
            },
            navigation: {
                nextEl: ".swiper1-right",
                prevEl: ".swiper1-left",
                disabledClass: "is-disabled",
            },
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {

    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
});


const triggers = document.querySelectorAll('.accordion-trigger');

triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const icon = trigger.querySelector('i');

        content.classList.toggle('open');
        icon.classList.toggle('rotated');
    });
});
