import {Observable} from "rxjs";

export const wallpapersGallery = document.getElementsByClassName('pages-page-5__wallpapers-album');

export const observeWallpapersGallery = (element) => {
  return new Observable((subscriber) => {
    const observer = new IntersectionObserver((entries) => {
      subscriber.next(entries);
    });
    observer.observe(element);

    return () => observer.disconnect();
  });
};
