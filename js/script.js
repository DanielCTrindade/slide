import {Slide,SlideNav} from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
console.log(slide);

slide.changeSlide(3);

slide.addControl();
slide.addArrow('.prev','.next');