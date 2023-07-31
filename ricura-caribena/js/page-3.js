import {Observable} from "rxjs";

export const contentImagesPage_3 = document.getElementsByClassName('products-list__container__content');
export const observeContentImagesPage_3 = (element) => {
  return new Observable((subscriber) => {
    const observer = new IntersectionObserver((entries) => {
      subscriber.next(entries);
    });
    observer.observe(element);

    return () => observer.disconnect();
  });
};
