import { Close } from '../../../components/Imgs/Close';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { AssessmentInfo } from '../../../types/assessment';
import SimpleBar from 'simplebar-react';
import { useTranslation } from 'react-i18next';

type Props = {
  closeModal: Dispatch<SetStateAction<boolean>>;
  request: Dispatch<SetStateAction<boolean>>;
  assessment: AssessmentInfo;
  activeState: boolean;
};

export const MoreInfo: React.FC<Props> = ({
  closeModal,
  request,
  assessment,
  activeState,
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (activeState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeState]);

  return (
    // <div
    //   className={classNames('more-info', {
    //     isActive: activeState,
    //   })}
    // >
    <SimpleBar className="more-info__bar">
      <div className="more-info__container">
        <div className="more-info__title">
          <h3 className="more-info__header">
            {t('more-info__header')} <br />
            {assessment.title}
          </h3>
          <Close
            className={`more-info__icon`}
            onClick={() => closeModal(false)}
          />
        </div>
        <div className="more-info__info">
          <div className="more-info__what-is-it">
            <p className="more-info__what-is-it-title">
              {t('more-info__what-is-it-title')}
            </p>
            <p className="more-info__what-is-it-text">{assessment.text1}</p>
            <div className="more-info__what-is-it-important">
              <h4 className="more-info__what-is-it-important-h4">
                {t('more-info__what-is-it-important-h4')}
              </h4>
              <p className="more-info__what-is-it-important-text">
                {assessment.important}
              </p>
            </div>
            {assessment.text2 && (
              <p className="more-info__what-is-it-text">{assessment.text2}</p>
            )}
          </div>
          <div className="more-info__underline"></div>
          <div className="more-info__price">
            <p className="more-info__price-title">{t('card__price-h4')}</p>
            <p className="more-info__price-text">{assessment.price}</p>
          </div>
          <div className="more-info__underline"></div>
          <ul className="more-info__what-you-get">
            <p className="more-info__what-you-get-title">{t('card__h4')}</p>
            {assessment.list.map((a, index) => (
              <li
                key={index}
                className="more-info__what-you-get-item"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => {
            closeModal(false);
            request(true);
          }}
          className="more-info__button"
        >
          {t('card__button2')}
        </button>
      </div>
    </SimpleBar>

    //   <div
    //     onClick={() => closeModal(false)}
    //     className="more-info__backdrop"
    //   />
    // </div>
  );
};
