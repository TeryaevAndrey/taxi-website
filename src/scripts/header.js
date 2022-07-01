export const displayHeader = () => {
    let html = `
        <header class="header" id="header">
            <div class="container">
                <div class="header__inner">
                    <img class="burger-menu" src="images/menu.svg" alt="menu">
                    <a class="logo" href="#">
                        <img class="logo__img" src="images/logo.png" alt="logo">
                    </a>
                    <nav class="header__nav">
                        <a class="header__link" href="#">Совместные путешествия</a>
                        <a class="header__link" href="#">Сосед поможет</a>
                    </nav>
                    <form class="header__form">
                        <i class="icon-search"></i>
                        <input class="header__form-search" placeholder="Поиск">
                    </form>
                    <button class="header__btn btn_blue btn_transparent">
                        <i class="icon-plus"></i>
                        <span class="header__btn-text">Опубликовать поездку</span>
                    </button>
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

    return document.querySelector('body').insertAdjacentHTML('afterbegin', html);
}
