import {fromEvent, Observable} from 'rxjs';
import {filter, map, } from 'rxjs/operators';
import { observeTextBlock,  text_blockPage_2 } from "./page-2";
import {contentImagesPage_3} from "./page-3";
import {observeWallpapersGallery, wallpapersGallery} from "./page-5";


observeTextBlock(text_blockPage_2[0]).pipe(
  filter(Boolean),
  map(([entry]) => entry.isIntersecting)
).subscribe(isIntersecting => {
  if (isIntersecting) {
    const {children} = text_blockPage_2[0];
    for (let child of children) {
      child.style.opacity = '1';
      child.style.transform = "translateX(0px)";
    }
  } else {
    //   // Элемент не в зоне видимости
  }
});
observeTextBlock(contentImagesPage_3[0]).pipe(
  filter(Boolean),
  map(([entry]) => entry.isIntersecting)
).subscribe(isIntersecting => {
  if (isIntersecting) {
    const {children} = contentImagesPage_3[0];
    for (let child of children) {
      child.style.opacity = '1';
      child.style.transform = "translateX(0px)";
    }
  } else {
    //   // Элемент не в зоне видимости
  }
});
observeWallpapersGallery(wallpapersGallery[0]).pipe(
  filter(Boolean),
  map(([entry]) => entry.isIntersecting)
).subscribe(isIntersecting => {
  if (isIntersecting) {
    const {children} = wallpapersGallery[0];
    let current = 0;

    children[current].style.display = 'block';

    setInterval(() => {
      children[current].style.display = 'none';
      current = (current + 1) % children.length;
      children[current].style.display = 'block';
    }, 1000);
  } else {
    //   // Элемент не в зоне видимости
  }
});

let lastScrollTop = 0;
const header = document.querySelector('header'); // замените на селектор вашего заголовка

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.add('hide'); // Добавляем класс, когда прокрутка вниз
  } else {
    header.classList.remove('hide'); // Удаляем класс, когда прокрутка вверх
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Берем значение для сравнения в следующей итерации
}, false);

