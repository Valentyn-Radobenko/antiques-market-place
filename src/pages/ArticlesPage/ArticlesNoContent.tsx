import { useTranslation } from 'react-i18next';
import { useIsMobile } from '../../hooks/useMediaQuery';

export const ArticlesNoContent = () => {
  const isMobile = useIsMobile();

  const { t } = useTranslation();

  return (
    <div className="articles__no-content">
      <div className="no-content__wrapper">
        <div className="no-content">
          <div className="no-content__block">
            <div className="no-content__block-top">
              <p className="no-content__block-top-text">
                {t('no-content__block-top-text')}
              </p>
              <h4 className="no-content__block-top-title">
                {t('no-content__block-top-title')}
              </h4>
            </div>
            {!isMobile && (
              <p className="no-content__block-bottom">
                {t('no-content__block-bottom')}
              </p>
            )}
          </div>
          <img
            className="no-content__img"
            src="./images/exhibitions/no-content.png"
            alt="no-content"
          />
        </div>
        {isMobile && (
          <p className="no-content__block-bottom">
            {t('no-content__block-bottom')}
          </p>
        )}
      </div>
    </div>
  );
};
