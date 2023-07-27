// const x = document.getElementById("burger-menu");
// x.addEventListener('click', showMenu)
//
// function showMenu() {
//   const navMenu = document.querySelector(".myNav");
//   navMenu.classList.toggle("show");
// }

import img1 from '../img/still-in-use-gallery/1.jpg';
import img2 from '../img/still-in-use-gallery/2.jpg';
import img3 from '../img/still-in-use-gallery/3.jpg';
import img4 from '../img/still-in-use-gallery/4.jpg';
import img5 from '../img/still-in-use-gallery/5.jpg';

let images = [
  img1,
  img2,
  img3,
  img4,
  img5,
]; // массив изображений
let index = 0;

document.getElementById('prev').addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = images.length - 1; // циклическое перелистывание влево
  }
  document.getElementById('image').src = images[index];
});

document.getElementById('next').addEventListener('click', () => {
  index++;
  if (index > images.length - 1) {
    index = 0; // циклическое перелистывание вправо
  }
  document.getElementById('image').src = images[index];
});


document.getElementById('burger-menu').addEventListener('click', function() {
  console.log('click')
  const overlay = document.getElementById('overlay')
  console.log(overlay)
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';  // disable scrolling
});

document.getElementById('overlay').addEventListener('click', function() {
  this.classList.add('hidden');
  document.body.style.overflow = '';  // enable scrolling
});
