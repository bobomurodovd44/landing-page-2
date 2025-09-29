let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // pastga scrollda
    navbar.classList.add("hide");
  } else {
    // yuqoriga scrollda
    navbar.classList.remove("hide");
  }

  lastScroll = currentScroll;
});

const navActions = document.querySelector('.nav-actions');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', () => {
  navActions.classList.add('open');
  document.body.classList.add('no-scroll'); // scrollni bloklash
});

closeBtn.addEventListener('click', () => {
  navActions.classList.remove('open');
  document.body.classList.remove('no-scroll'); // scrollni tiklash
});


