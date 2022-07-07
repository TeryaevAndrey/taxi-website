import '../scss/main.scss';
import Swiper, { Navigation, Pagination } from 'swiper';
import {displayHeader} from './header';
import {displayFooter} from './footer';
import {tripsItems} from './trips-items';
import {tripsRender} from './index/trips-render';
import {reviews} from './reviews';
import {reviewsRender} from './index/reviews-render';

displayHeader();
displayFooter();

if(document.querySelector('.trips')) tripsItems.map(tripsRender);
if(document.querySelector('.reviews')) reviews.map(reviewsRender);

const headerForm = document.querySelector('.header__form');

Swiper.use([Navigation, Pagination]);

let reviewsSwiper = new Swiper('.reviews__list', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        800: {
            slidesPerView: 2
        },
        1100: {
            slidesPerView: 3
        }
    }
});

headerForm.addEventListener('focusin', (event) => event.target.style.width = '100px');
headerForm.addEventListener('focusout', (event) => event.target.style.width = '50px');

