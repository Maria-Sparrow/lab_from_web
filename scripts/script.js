const btnBurger = document.getElementById("burger-btn");
const headerNav = document.getElementById("header-nav");
const burgerMenu = document.getElementById("burger-menu");


var el = document.getElementById('burger-btn');
if(el) {

  btnBurger.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    headerNav.classList.toggle("active");
    btnBurger.classList.toggle("active-burger");
  });
}