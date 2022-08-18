const menuButton = document.querySelector(".menu-btn-one");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const lineThree = document.querySelector(".line-three");
const boxMenu = document.querySelector(".menu-box");
const button = document.querySelector(".modal-btn");
const modalClosed = document.querySelector(".login-btn");
const modal = document.querySelector(".modal-block");

menuButton.addEventListener("click", function () {
  lineOne.classList.toggle("open");
  lineTwo.classList.toggle("open");
  lineThree.classList.toggle("open");
  boxMenu.classList.toggle("open");
});

button.addEventListener("click", function () {
  modal.classList.toggle("open");
});

modalClosed.addEventListener("click", function () {
  modal.classList.toggle("open");
});

const blueButtonOne = document.querySelector(".carousel-button-one");
const blueButtonTwo = document.querySelector(".carousel-button-two");
const blueButtonThree = document.querySelector(".carousel-button-three");

const blueImageOne = document.querySelector(".candle-one");
const blueImageTwo = document.querySelector(".image-blue-two");
const blueImageThree = document.querySelector(".image-blue-three");

blueButtonOne.addEventListener("click", function () {
  blueImageTwo.classList.toggle("open");
});

blueButtonTwo.addEventListener("click", function () {
  blueImageOne.classList.toggle("open");
});

blueButtonThree.addEventListener("click", function () {
  blueImageThree.classList.toggle("open");
});
