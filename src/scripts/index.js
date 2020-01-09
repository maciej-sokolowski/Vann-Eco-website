import '../styles/index.scss';


//hamburger animations

let hamburgerAnimation = function() {
  this.classList.toggle("change");
  document.querySelector(".header__nav-list").classList.toggle("header__nav-list--active");
};

document.querySelector(".header__hamburger").addEventListener("click", hamburgerAnimation);