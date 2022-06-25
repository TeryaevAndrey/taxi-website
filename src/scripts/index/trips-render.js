export const tripsRender = (tripsItem) => {
    const tripsList = document.querySelector('.trips__list');

    let html = `
        <div class="trips__item">
        <span class="trips__item-date">${tripsItem.date}</span>
        <div class="trips__item-inner">
        <div class="trips__header">
            <p class="trips__header-time">
            ${tripsItem.fromTime}
            <span class="trips__header-time trips__header-time_opacity">
                - ${tripsItem.toTime}
            </span>
            </p>
            <p class="trips__header-price">${tripsItem.price} ₽</p>
        </div>
        <div class="trips__way">
            <p class="trips__way-text">${tripsItem.from}</p>
            <p class="trips__way-text">${tripsItem.to}</p>
        </div>
        <div class="trips__info">
            <p class="trips__info-location">
            <i class="icon-location"></i>
            ${tripsItem.location}
            </p>
            <p class="trips__info-free">
            ${tripsItem.placeFree} места
            <span class="trips__info-free_opacity">из ${tripsItem.allPlace} свободно</span>
            </p>
        </div>
        <div class="trips__user">
            <img
            class="trips__user-img"
            src="${tripsItem.user.img}"
            alt="user"
            />
            <div class="user__info">
                <h4 class="user__info-name">${tripsItem.user.name},${tripsItem.user.age}</h4>
                <p class="user__info-car">${tripsItem.user.car}, ${tripsItem.user.yearCar}</p>
            <div class="rating-result">
                <span class="rating-item active"></span>
                <span class="rating-item"></span>
                <span class="rating-item"></span>
                <span class="rating-item"></span>
                <span class="rating-item"></span>
            </div>
            </div>
        </div>
        </div>
    </div>    
    `;

    return tripsList.insertAdjacentHTML('beforeend', html);
};
