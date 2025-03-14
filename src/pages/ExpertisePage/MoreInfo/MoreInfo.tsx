import { Close } from '../../../components/Imgs/Close';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { Assessment } from '../../../types/assessment';

type Props = {
  closeModal: Dispatch<SetStateAction<boolean>>;
  assessment: Assessment;
};

export const MoreInfo: React.FC<Props> = ({ closeModal, assessment }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="more-info">
      <div className="more-info__container">
        <div className="more-info__title">
          <h3 className="more-info__header">
            Детальніше <br />
            {assessment.title}
          </h3>
          <Close
            className={`more-info__icon`}
            onClick={() => closeModal(false)}
          />
        </div>
        <div className="more-info__info">
          <div className="more-info__what-is-it">
            <p className="more-info__what-is-it-title">Що це:</p>
            <p className="more-info__what-is-it-text">{assessment.text1}</p>
            <div className="more-info__what-is-it-important">
              <h4 className="more-info__what-is-it-important-h4">ВАЖЛИВО!</h4>
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
            <p className="more-info__price-title">Середня вартість:</p>
            <p className="more-info__price-text">{assessment.price}</p>
          </div>
          <div className="more-info__underline"></div>
          <ul className="more-info__what-you-get">
            <p className="more-info__what-you-get-title">
              Що отримає власник лоту:
            </p>
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
        <button className="more-info__button">Подати заявку</button>
      </div>
      <div
        onClick={() => closeModal(false)}
        className="more-info__backdrop"
      />
    </div>
  );
};
