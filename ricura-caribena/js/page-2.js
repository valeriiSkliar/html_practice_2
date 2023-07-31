import {Observable} from "rxjs";

export const text_blockPage_2 = document.getElementsByClassName('page-2__content__text-block');
export const text_blockHeaderPage_2 = document.getElementsByClassName('text-block__header');
export const seeMorePage_2 = document.getElementsByClassName('page-2__content__text-block__link');
export const stamp = document.querySelector('.page-2__content__stamp');

export const observeTextBlock = (element) => {
  return new Observable((subscriber) => {
    const observer = new IntersectionObserver((entries) => {
      subscriber.next(entries);
    });
    observer.observe(element);

    return () => observer.disconnect();
  });
};

  let stampRotation = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      let ratio = entry.intersectionRatio; // отношение видимой области элемента к его полной высоте
      let rotation = 360 * ratio; // изменяемое значение вращения
      stamp.style.transform = `rotate(${rotation}deg)`; // применяем трансформацию
    });
  },
    {threshold: Array.from({length: 100}, (_, i) => i / 100)});

stampRotation.observe(stamp);
