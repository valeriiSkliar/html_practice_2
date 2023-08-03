const overlay = document.getElementById('overlay');
console.log(overlay)
const mainMenu = document.getElementsByClassName('burger-menu')[0];
const burger = mainMenu.querySelector('.burger');
const backgroundImage = "url('https://assets.website-files.com/6245ee93f9819c6dcc56fc72/6245ee93f9819c338156fd03_Rent_Photo.jpg')";
const header = document.querySelector('header');
const logo_link = document.querySelector('.logo-link');
const header_item = document.querySelector('.header-item');
const services = document.querySelector('.services');
const buyBlock = document.querySelector('.buy-block');
const rentBlock = document.querySelector('.rent-block');
const buyBlock_upperLevel = document.querySelector('.div-block-7');
const rentBlock_upperLevel = document.querySelector('.div-block-7-2');
const useful_info_wrapper = document.querySelector('.useful-info__wrapper');
const slide_from_left = document.querySelector('.slide-from-left');
const useful_info__home_properties = document.querySelector('.useful-info__home-properties');

const originalBackgroundColor = 'rgba(0, 0, 0, 0.15)';
const originalServicesColor = 'white';


overlay.addEventListener('click', () => {
  console.log('burg')
  mainMenu.classList.toggle('show');
  overlay.classList.toggle('active');
  header_item.classList.toggle('active');
});


const observerServices = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.2) {
      header.style.backgroundColor = '#cab48c';
      services.children[0].style.backgroundColor = '#cab48c';

      // Применяется только при видимости больше чем на 20%
      const wrapper_h1 = services.children[0].querySelector('.service-wrapper');
      wrapper_h1.style.transform = `translateY(-1.3rem)`;
      services.children[0].style.backgroundPosition = `0 5rem`
    } else {
      // Сброс стилей при видимости менее чем 20%
      header.style.backgroundColor = originalBackgroundColor;
      services.children[0].style.backgroundColor = originalServicesColor;

      // Сброс преобразования и позиции фона
      const wrapper_h1 = services.children[0].querySelector('.service-wrapper');
      wrapper_h1.style.transform = 'none';
      services.children[0].style.backgroundPosition = 'initial'
    }
  });
}, {
  threshold: [0.2,0.3,0.4,0.5]
});


const observerServicesRent = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.7) {
      services.children[0].style.backgroundColor = '#4d4d4d';
      services.children[0].style.backgroundImage = 'none';
    } else {
      services.children[0].style.backgroundColor = '#cab48c';
      services.children[0].style.backgroundImage = `${backgroundImage}`;
    }
  });
}, {
  threshold: [0.7]
});

const observerSlideBuyBlock = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.4) {
      buyBlock_upperLevel.style.opacity = '1'
      buyBlock.style.transform = 'translateX(0)'
      observerSlideBuyBlock.disconnect()
    }
  });
}, {
  threshold: [0.4]
});

const observerSlideRentBlock = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.4) {
      rentBlock_upperLevel.style.opacity = '1'
      rentBlock.style.transform = 'translateX(0)'
      observerSlideRentBlock.disconnect()
    }
  });
}, {
  threshold: [0.4]
});
const observerUseful_info_wrapper = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.3) {
      useful_info__home_properties.style.transform = 'translateX(0)'
      slide_from_left.style.transform = 'translateX(0)'
      observerUseful_info_wrapper.disconnect()
    }
  });
}, {
  threshold: [0.3]
});

observerServices.observe(services);
observerServicesRent.observe(services.children[1]);
observerSlideBuyBlock.observe(buyBlock_upperLevel);
observerSlideRentBlock.observe(rentBlock_upperLevel);
observerUseful_info_wrapper.observe(useful_info_wrapper);


let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    logo_link.classList.add('hide');
    overlay.classList.add('hide');
  } else {
    logo_link.classList.remove('hide');
    overlay.classList.remove('hide');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);
