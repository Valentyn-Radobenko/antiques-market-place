import { Link } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <div className="not-found-page">
      <div className="no-content__wrapper">
        <div className="no-content">
          <div className="no-content__block reveal hidden">
            <div className="no-content__block-top">
              <p className="no-content__block-top-text">
                {t('no-content__block-top-text')}
              </p>
              <h4 className="no-content__block-top-title">
                {t('no-content__block-top-title3')}
              </h4>
            </div>
            {!isMobile && (
              <>
                <p className="no-content__block-bottom">
                  {t('no-content__block-bottom3')}
                </p>
                <Link
                  to={'/market'}
                  className="not-found-page__link"
                >
                  {t('not-found-page__link')}
                </Link>
              </>
            )}
          </div>
          <img
            className="no-content__img reveal hidden"
            src="images/404.png"
            alt="no-content"
          />
        </div>
        {isMobile && (
          <>
            <p className="no-content__block-bottom">
              {t('no-content__block-bottom3')}
            </p>

            <Link
              to={'/market'}
              className="not-found-page__link"
            >
              {t('not-found-page__link')}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
