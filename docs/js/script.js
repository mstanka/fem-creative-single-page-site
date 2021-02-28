///// Hamburger menu

const nav = document.querySelector(".nav");
const menu = document.querySelector(".nav__menu");
const menuIcon = document.querySelector(".nav__menu--icon");

menu.addEventListener("click", () => {
  nav.classList.toggle("nav__menu--active");

  nav.classList.contains("nav__menu--active")
    ? menuIcon.setAttribute("src", "./assets/mobile/icon-cross.svg")
    : menuIcon.setAttribute("src", "./assets/mobile/icon-hamburger.svg");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("nav__menu--active")) {
    nav.classList.remove("nav__menu--active");
    menuIcon.setAttribute("src", "./assets/mobile/icon-hamburger.svg");
  }
});

///// Slider

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
let curSlide = 0;
const maxSlide = slides.length - 1;

const goToSlide = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${150 * (i - slide)}%)`;
  });
};

const nextSlide = () => {
  if (curSlide === maxSlide) curSlide = 0;
  else curSlide++;
  goToSlide(curSlide);
};

const prevSlide = () => {
  if (curSlide === 0) curSlide = maxSlide;
  else curSlide--;
  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});
