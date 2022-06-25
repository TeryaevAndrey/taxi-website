import '../scss/main.scss';
import Swiper, { Navigation, Pagination } from 'swiper';
import {displayHeader} from "./header";
import {tripsItems} from "./trips-items";
import {tripsRender} from "./index/trips-render";
import {reviews} from "./reviews";
import {reviewsRender} from "./index/reviews-render";

displayHeader();

tripsItems.map(tripsRender);
reviews.map(reviewsRender);

Swiper.use([Navigation, Pagination]);

let reviewsSwiper = new Swiper('.reviews__list', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});
