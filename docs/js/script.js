const nav = document.querySelector(".nav");
const menu = document.querySelector(".nav__menu");
const menuIcon = document.querySelector(".nav__menu--icon");

menu.addEventListener("click", () => {
  nav.classList.toggle("nav__menu--active");

  nav.classList.contains("nav__menu--active")
    ? menuIcon.setAttribute("src", "./assets/mobile/icon-cross.svg")
    : menuIcon.setAttribute("src", "./assets/mobile/icon-hamburger.svg");
});
