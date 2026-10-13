// ----------------
// - NAV BAR MENU -
// ----------------
const divElem = document.querySelector("#navLinks");
// Function runs when button is pressed
function mobileMenu() {
  // The menu is open, so close it
  if (divElem.classList[0] === "menu-in") {
    divElem.classList.remove("menu-in");
    divElem.classList.add("menu-out");
    // or the menu is closed so open it
  } else {
    divElem.classList.remove("menu-out");
    divElem.classList.add("menu-in");
  }
}
// -----------------------
// - RANDOM BUTTON COLOR -
// -----------------------
const buttons = document.querySelectorAll(".randomButton");
buttons.forEach((button) => {
  randomColor = Math.floor(Math.random()*16777215).toString(16);
  button.style.backgroundColor = '#' + randomColor;
  button.style.boxShadow = '0 9px #' + randomColor + '83';
})