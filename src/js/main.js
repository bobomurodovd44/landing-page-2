// Navbar scroll behavior
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.classList.add("hide");
    } else {
        // Scrolling up
        navbar.classList.remove("hide");
    }

    lastScroll = currentScroll;
});

// Mobile menu functionality
const navActions = document.querySelector('.nav-actions');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', () => {
    navActions.classList.add('open');
    document.body.classList.add('no-scroll'); // Block scrolling
});

closeBtn.addEventListener('click', () => {
    navActions.classList.remove('open');
    document.body.classList.remove('no-scroll'); // Restore scrolling
});

// Initialize Swiper when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Wait for Swiper library to load
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
                nextEl: ".swiper1-right", // Right button
                prevEl: ".swiper1-left",  // Left button
                disabledClass: "is-disabled", // Swiper adds this class
            },
        });
    }
});

// Initialize AOS when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Wait for AOS library to load
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
});
