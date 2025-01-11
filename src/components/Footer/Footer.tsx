export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__columns">
        <div className="footer__column">
          <h4 className="footer__title">Допомога</h4>
          <ul className="footer__list">
            <li>
              <a
                href="#"
                className="footer__link"
              >
                Торгуйте разом з Ducat
              </a>
            </li>
            <li>
              <a
                href="#"
                className="footer__link"
              >
                Задати питання
              </a>
            </li>
            <li>
              <a
                href="#"
                className="footer__link"
              >
                Аукціони
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4 className="footer__title">Політики та правила</h4>
          <ul className="footer__list">
            <li>
              <a
                href="#"
                className="footer__link"
              >
                Політика конфіденційності
              </a>
            </li>
            <li>
              <a
                href="#"
                className="footer__link"
              >
                Умови використання
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4 className="footer__title">Познайомтесь з нами</h4>
          <ul className="footer__list">
            <li>
              <a
                href="#"
                className="footer__link"
              >
                Про Ducat
              </a>
            </li>
            <li>
              <a
                href="#"
                className="footer__link"
              >
                Вакансії
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        © 2004 - 2025 Ducat Dubovyk&Ko. ТОВ «Ducat Dubovyk&Ko» / ЄОП Дубовик
        Вячеслав Вікторович. Всі права захищені. Для офіційних звернень:&nbsp;
        <a
          href="mailto:administration@ducat.ua"
          className="footer__copyright-link"
        >
          administration@ducat.ua
        </a>
      </div>
    </footer>
  );
};
