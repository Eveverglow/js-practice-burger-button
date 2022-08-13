const menuButton = document.querySelector(".menu-btn-one");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const lineThree = document.querySelector(".line-three");
const boxMenu = document.querySelector(".menu-box");

console.log(boxMenu);

menuButton.addEventListener("click", function () {
  lineOne.classList.toggle("open");
  lineTwo.classList.toggle("open");
  lineThree.classList.toggle("open");
  boxMenu.classList.toggle("open");
});
