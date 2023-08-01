const closeButton = document.getElementById('overlay');
const mainMenu = document.getElementsByClassName('burger-menu')[0];
const burger = mainMenu.querySelector('.burger');

closeButton.addEventListener('click', () => {
  mainMenu.classList.toggle('show');
  closeButton.classList.toggle('active');

});
