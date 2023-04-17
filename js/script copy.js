const hamburger_menu = document.querySelector(".hamburger-menu");

const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})
const activ_link = document.querySelector(".active_link");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})



var x = document.getElementById("container31");

x.addEventListener("click", myFunction);

function myFunction() {
  var element = document.getElementById("nav31");
  element.classList.toggle("open");
  
  x.classList.toggle("change");
}