const menuButton = document.querySelector(".more-btn");
let menuOpen = false;
menuButton.addEventListener("click", () => {
  if (!menuOpen) {
    menuButton.classList.add("open");
    menuOpen = true;
  } else {
    menuButton.classList.remove("open");
    menuOpen = false;
  }
});

const buttonOne = document.querySelector("menu-btn-one");
let btnOpen = false;
buttonOne.addEventListener("click", () => {
  if (!btnOpen) {
    buttonOne.classList.add("open");
    btnOpen = true;
  } else {
    buttonOne.classList.remove("open");
    btnOpen = false;
  }
});
