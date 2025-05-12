// import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Footer = () => {
  // const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__vector"></div>
      <div className="footer__row">
        <Link to={'market'}>
          <div className="header__logo">
            <img
              className="header__logo-title-main"
              src="images/header/logo.svg"
              alt="DIKO logo"
            />
            <img
              className="header__logo-rectangle"
              src="images/header/Rectangle-91.png"
              alt="rectangle"
            />
            <p className="header__logo-title-minor">антикварна платформа </p>
          </div>
        </Link>

        <div className="footer__sm">
          <a
            href="telegram.com"
            className="footer__media footer__media--tg"
          ></a>
          <a
            href="facebook.com"
            className="footer__media footer__media--fb"
          ></a>
          <a
            href="mailto:valikradobenko@gmail.com"
            className="footer__media footer__media--email"
          ></a>
        </div>
      </div>
      <div className="footer__columns">
        <div className="footer__column">
          <h4 className="footer__title">Правила користування</h4>
          <ul className="footer__list">
            <li>
              <a
                href="#"
                className="footer__link"
              >
                Умови використання
              </a>
            </li>
            <li>
              <a
                href="#"
                className="footer__link"
              >
                Політика конфіденційності
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4 className="footer__title">Підтримка та поради</h4>
          <ul className="footer__list">
            <li>
              <a
                href="#"
                className="footer__link"
              >
                Торгуйте з нами
              </a>
            </li>
            <li>
              <a
                href="#"
                className="footer__link"
              >
                Популярні питання
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4 className="footer__title">Про нас</h4>
          <ul className="footer__list">
            <li>
              <a
                href="#"
                className="footer__link"
              >
                Про платформу DIKO
              </a>
            </li>
            <li>
              <a
                href="#"
                className="footer__link"
              >
                Наші продукти та послуги
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        © 2004 – 2025 | DIKO | Усі права захищено.
      </div>
    </footer>
  );
};
