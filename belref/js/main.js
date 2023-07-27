
const x = document.getElementById("burger-menu");
x.addEventListener('click', showMenu)
function showMenu() {
  const navMenu = document.querySelector(".myNav");
  navMenu.classList.toggle("show");
}
