import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useIsTablet } from '../../hooks/useMediaQuery';
import { Dropdown } from '../Dropdown/Dropdown';
import { TelegramLogoSVG } from '../Imgs/TelegramLogoSVG';
import { FacebookLogoSVG } from '../Imgs/FacebookLogoSVG';
import { MailSVG } from '../Imgs/MailSVG';

export const Footer = () => {
  const { t } = useTranslation();
  const isTablet = useIsTablet();

  return (
    <footer className="footer">
      <div className="footer__row">
        <Link to={'market'}>
          <div className="header__logo">
            <img
              className="header__logo-icon"
              src="images/header/logo.svg"
              alt="DIKO logo"
            />
            <p className="header__logo-title-main">
              {t('header__logo-title-main')}
            </p>
          </div>
        </Link>

        <div className="footer__sm">
          <Link
            to={'https://web.telegram.org/'}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__media"
          >
            <TelegramLogoSVG className="footer__media-svg" />
          </Link>
          <Link
            to={'https://www.facebook.com/'}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__media"
          >
            <FacebookLogoSVG className="footer__media-svg" />
          </Link>
          <Link
            to="mailto:example@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__media"
          >
            <MailSVG className="footer__media-svg" />
          </Link>
        </div>
      </div>
      {isTablet ?
        <ul className="footer__actions">
          <li>
            <Dropdown
              buttonArea="all"
              buttonTitle={() => (
                <p className="footer__dropdown-text">
                  {t('footer__dropdown-text')}
                </p>
              )}
              customClassName="footer__dropdown"
              renderContent={() => (
                <div className="footer__options">
                  <button className="footer__option">
                    {t('footer__option')}
                  </button>
                  <button className="footer__option">
                    {t('footer__option2')}
                  </button>
                </div>
              )}
            />
          </li>
          <li>
            <Dropdown
              buttonArea="all"
              buttonTitle={() => (
                <p className="footer__dropdown-text">
                  {t('footer__dropdown-text2')}
                </p>
              )}
              customClassName="footer__dropdown"
              renderContent={() => (
                <div className="footer__options">
                  <button className="footer__option">
                    {t('footer__option3')}
                  </button>
                  <button className="footer__option">
                    {t('footer__option4')}
                  </button>
                </div>
              )}
            />
          </li>
          <li>
            <Dropdown
              buttonArea="all"
              buttonTitle={() => (
                <p className="footer__dropdown-text">
                  {t('footer__dropdown-text3')}
                </p>
              )}
              customClassName="footer__dropdown"
              renderContent={() => (
                <div className="footer__options">
                  <button className="footer__option">
                    {t('footer__option5')}
                  </button>
                  <button className="footer__option">
                    {t('footer__option6')}
                  </button>
                </div>
              )}
            />
          </li>
        </ul>
      : <div className="footer__columns-wrap">
          <div className="footer__columns">
            <div className="footer__column">
              <h4 className="footer__title">{t('footer__dropdown-text')}</h4>
              <ul className="footer__list">
                <li>
                  <a
                    href="#"
                    className="footer__link"
                  >
                    {t('footer__option')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="footer__link"
                  >
                    {t('footer__option2')}
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <h4 className="footer__title">{t('footer__dropdown-text2')}</h4>
              <ul className="footer__list">
                <li>
                  <a
                    href="#"
                    className="footer__link"
                  >
                    {t('footer__option3')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="footer__link"
                  >
                    {t('footer__option4')}
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <h4 className="footer__title">{t('footer__dropdown-text3')}</h4>
              <ul className="footer__list">
                <li>
                  <a
                    href="#"
                    className="footer__link"
                  >
                    {t('footer__option5')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="footer__link"
                  >
                    {t('footer__option6')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
      <div className="footer__copyright">{t('footer__copyright')}</div>
    </footer>
  );
};
