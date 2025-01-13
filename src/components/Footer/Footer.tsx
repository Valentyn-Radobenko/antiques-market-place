import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
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
      <div className="footer__copyright">
        {t('footer.copyright')}&nbsp;
        {t('footer.officialInquiries')}&nbsp;
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
