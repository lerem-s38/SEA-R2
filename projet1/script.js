/*js menu déroulant*/
const dropdownBtn = document.querySelector(".btn");

const dropdownMenu = document.querySelector(".sous-menu");


dropdownBtn.addEventListener("click", function() {
  
  dropdownMenu.classList.toggle("visible");
});