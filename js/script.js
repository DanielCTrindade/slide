import SlideNav from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
console.log(slide);

slide.changeSlide(3);

slide.addControl('.custom-controls');
slide.addArrow('.prev','.next');