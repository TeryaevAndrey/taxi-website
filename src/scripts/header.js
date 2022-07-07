export const displayHeader = () => {
    let html = `
        <header class="header" id="header">
            <div class="container">
                <div class="header__inner">
                    <img class="burger-menu" src="images/menu.svg" alt="menu">
                    <a class="logo" href="index.html">
                        <img class="logo__img" src="images/logo.png" alt="logo">
                    </a>
                    <div class="header__text">
                        <p class="header__text-item" href="#">Совместные путешествия</p>
                        <p class="header__text-item" href="#">Сосед поможет</p>
                    </div>
                    <form class="header__form">
                        <i class="icon-search"></i>
                        <input class="header__form-search" placeholder="Поиск">
                    </form>
                    <a class="header__btn btn_blue btn_transparent" href="#">
                        <i class="icon-plus"></i>
                        <span class="header__btn-text">Опубликовать поездку</span>
                    </a>
                    <div class="header__entrance">
                        <a class="header__entrance-link" href="#">
                            <i class="icon-input"></i>
                            <span class="header__entrance-text">Вход</span>
                        </a>
                        <a class="header__entrance-link" href="#">
                            <i class="icon-user"></i>
                            <span class="header__entrance-text">Регистрация</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    `;

    return document.querySelector('.page').insertAdjacentHTML('afterbegin', html);
}
