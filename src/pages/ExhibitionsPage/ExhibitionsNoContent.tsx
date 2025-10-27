import { useTranslation } from 'react-i18next';
import { useIsMobile } from '../../hooks/useMediaQuery';

export const ExhibitionsNoContent = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  return (
    <>
      <div className="exhibitions__articles-block">
        {isMobile ?
          <button className="exhibitions__offer-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20C11.858 20 11.739 19.952 11.643 19.856C11.547 19.76 11.4993 19.6413 11.5 19.5V12.5H4.50001C4.35801 12.5 4.23934 12.452 4.14401 12.356C4.04867 12.26 4.00067 12.141 4.00001 11.999C3.99934 11.857 4.04734 11.7383 4.14401 11.643C4.24067 11.5477 4.35934 11.5 4.50001 11.5H11.5V4.50001C11.5 4.35801 11.548 4.23934 11.644 4.14401C11.74 4.04867 11.859 4.00067 12.001 4.00001C12.143 3.99934 12.2617 4.04734 12.357 4.14401C12.4523 4.24067 12.5 4.35934 12.5 4.50001V11.5H19.5C19.642 11.5 19.7607 11.548 19.856 11.644C19.9513 11.74 19.9993 11.859 20 12.001C20.0007 12.143 19.9527 12.2617 19.856 12.357C19.7593 12.4523 19.6407 12.5 19.5 12.5H12.5V19.5C12.5 19.642 12.452 19.7607 12.356 19.856C12.26 19.9513 12.141 19.9993 11.999 20"
                fill="#F7FFFD"
              />
            </svg>
          </button>
        : <div className="exhibitions__offer">
            <div className="exhibitions__offer-heading">
              <h3 className="exhibitions__offer-title">
                {t('create-exhibition__title')}
              </h3>
              <div className="exhibitions__offer-icon"></div>
            </div>
            <button className="exhibitions__offer-button">
              {t('exhibitions__offer-button2')}
            </button>
          </div>
        }
        <div className="no-content__wrapper">
          <div className="no-content">
            <div className="no-content__block">
              <div className="no-content__block-top">
                <p className="no-content__block-top-text">
                  {t('no-content__block-top-text2')}
                </p>
                <h4 className="no-content__block-top-title">
                  {t('no-content__block-top-title')}
                </h4>
              </div>
              {!isMobile && (
                <p className="no-content__block-bottom">
                  {t('no-content__block-bottom2')}
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
              {t('no-content__block-bottom2')}
            </p>
          )}
        </div>
      </div>
    </>
  );
};
