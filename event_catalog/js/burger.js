const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});

document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});
