import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__content">
        <Link
          to={'./'}
          className="footer__logo"
        >
          D&KO
        </Link>
        <div className="footer__columns">
          <div className="footer__column">
            <h4 className="footer__title">{t('footer.help')}</h4>
            <ul className="footer__list">
              <li>
                <a
                  href="#"
                  className="footer__link"
                >
                  {t('footer.tradeWithDucat')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__link"
                >
                  {t('footer.askQuestion')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__link"
                >
                  {t('footer.auctions')}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__title">{t('footer.policiesAndRules')}</h4>
            <ul className="footer__list">
              <li>
                <a
                  href="#"
                  className="footer__link"
                >
                  {t('footer.privacyPolicy')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__link"
                >
                  {t('footer.termsOfUse')}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__title">{t('footer.getToKnowUs')}</h4>
            <ul className="footer__list">
              <li>
                <a
                  href="#"
                  className="footer__link"
                >
                  {t('footer.aboutDucat')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__link"
                >
                  {t('footer.careers')}
                </a>
              </li>
            </ul>
          </div>
        </div>
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
      <div className="footer__copyright">©Ducat Dubovyk&KO 2004 - 2025</div>
    </footer>
  );
};
