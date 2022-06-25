export const reviewsRender = (review) => {
    const reviewsList = document.querySelector('.reviews__list .swiper-wrapper');

    let html = `
                    <div class="reviews__item swiper-slide">
                        <div class="reviews__item-inner">
                            <div class="reviews__user">
                                <img class="reviews__user-img" src="images/index/user.jpg" alt="user">
                                <div class="reviews__info user__info">
                                    <h4 class="user__info-name">${review.name}, ${review.age}</h4>
                                    <div class="rating-result">
                                        <span class="rating-item active"></span>
                                        <span class="rating-item"></span>
                                        <span class="rating-item"></span>
                                        <span class="rating-item"></span>
                                        <span class="rating-item"></span>
                                    </div>
                                </div>
                            </div>
                            <p class="reviews__text">
                                ${review.text}
                            </p>
                        </div>
                    </div>
    `;

    return reviewsList.insertAdjacentHTML('beforeend', html);
}
