export const displayFooter = () => {
    let html = `
<footer class="footer">
    <div class="container">
        <div class="footer__inner">
            <div class="footer__list">
                <div class="footer__col">
                    <img class="logo__img" src="images/logo.png" alt="logo">
                    <p class="footer__text">Сосед подвези 2022,
                        Все права защищены</p>
                </div>
                <div class="footer__col">
                    <ul class="footer__nav">
                        <li class="footer__nav-item"><a class="footer__nav-link" href="#">О нас</a></li>
                        <li class="footer__nav-item"><a class="footer__nav-link" href="#">Как это работает</a></li>
                        <li class="footer__nav-item"><a class="footer__nav-link" href="#">Обратная связь</a></li>
                    </ul>
                </div>
                <div class="footer__col">
                    <ul class="footer__nav">
                        <li class="footer__nav-item"><a class="footer__nav-link" href="#">Политика конфиденциальности</a></li>
                        <li class="footer__nav-item"><a class="footer__nav-link" href="#">Пользовательское соглашение</a></li>
                        <li class="footer__nav-item"><a class="footer__nav-link" href="#">Правила сайта</a></li>
                    </ul>
                </div>
                <div class="footer__col">
                    <p class="footer__text">Присоединяйтесь к нам:</p>
                    <div class="footer__socials">
                        <a class="footer__socials-link" href="#">
                            <img class="footer__socials-img" src="images/socials/vk.png" alt="vk">
                        </a>
                        <a class="footer__socials-link" href="#">
                            <img class="footer__socials-img" src="images/socials/telegram.png" alt="telegram">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>    
    `;

    return document.querySelector('.page').insertAdjacentHTML('beforeend', html);
}
