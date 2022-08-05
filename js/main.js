var elBtn = document.querySelector(".header__btn");
var elInner = document.querySelector(".header__inner");

elBtn.addEventListener("click" , function(){
  elInner.classList.toggle("header__inner--active");
})