import { useState } from 'react';
import { MoreInfo } from '../MoreInfo/MoreInfo';
import { assessmentInfo, assessmentForm } from '../../../data/assessment';
import { ValuabilityForm } from '../ValuabilityForm/ValuabilityForm';
import classNames from 'classnames';
import { ModalWindow } from '../../../components/ModalWindow/ModalWindow';
import { useSelector } from 'react-redux';
import { SavingState } from '../../../store/store';
import { useTranslation } from 'react-i18next';

type Props = {
  sectionRef: React.RefObject<HTMLDivElement>;
};

export const ItemEvaluation: React.FC<Props> = ({ sectionRef }) => {
  const [moreInfoBase, setMoreInfoBase] = useState(false);
  const [moreInfoExpert, setMoreInfoExpert] = useState(false);
  const [valuabilityForm, setValuabilityForm] = useState(false);
  const [expertiseForm, setExpertiseForm] = useState(false);

  const lang = useSelector((state: SavingState) => state.language.language);
  const { t } = useTranslation();

  return (
    <div className="item-evaluation">
      <h2
        ref={sectionRef}
        className="item-evaluation__h2"
      >
        {t('item-evaluation__h2')}
      </h2>

      <div className="item-evaluation__cards">
        <div className="item-evaluation__card card">
          <div className="card__text-block">
            <div className="card__text">
              <h2 className="card__h2">{t('card__h2')}</h2>

              <div className="card__price">
                <h4 className="card__price-h4">{t('card__price-h4')}</h4>
                <p className="card__price-text">{t('card__price-text')}</p>
              </div>

              <ul className="card__list">
                <h4 className="card__h4">{t('card__h4')}</h4>
                <li className="card__item">{t('card__item')}</li>
                <li className="card__item">{t('card__item2')}</li>
              </ul>
            </div>

            <div className="card__buttons">
              <button
                onClick={() => setMoreInfoBase(true)}
                className={classNames('card__button light', {
                  isActive: moreInfoBase,
                })}
              >
                {t('card__button')}
              </button>

              <ModalWindow
                openModal={moreInfoBase}
                setOpenModal={setMoreInfoBase}
                secondModal={false}
                visibility="card__modal-visibility"
              >
                <MoreInfo
                  request={setValuabilityForm}
                  closeModal={setMoreInfoBase}
                  assessment={assessmentInfo[lang][0]}
                  activeState={moreInfoBase}
                />
              </ModalWindow>

              <button
                onClick={() => setValuabilityForm(true)}
                className={classNames('card__button dark', {
                  isActive: valuabilityForm,
                })}
              >
                {t('card__button2')}
              </button>

              <ModalWindow
                openModal={valuabilityForm}
                setOpenModal={setValuabilityForm}
                secondModal={false}
                visibility="card__modal-visibility"
              >
                <ValuabilityForm
                  assessment={assessmentForm[lang][0]}
                  closeModal={setValuabilityForm}
                  activeState={valuabilityForm}
                />
              </ModalWindow>
            </div>
          </div>

          <img
            className="card__img"
            src="images\\expertise\\exp3.webp"
            alt=""
          />
        </div>

        <div className="item-evaluation__card card">
          <div className="card__text-block">
            <div className="card__text">
              <h2 className="card__h2">{t('card__h22')}</h2>

              <div className="card__price">
                <h4 className="card__price-h4">{t('card__price-h4')}</h4>
                <p className="card__price-text">{t('card__price-text2')}</p>
              </div>

              <ul className="card__list">
                <h4 className="card__h4">{t('card__h4')}</h4>
                <li className="card__item">{t('card__item3')}</li>
                <li className="card__item">{t('card__item4')}</li>
                <li
                  className="card__item"
                  dangerouslySetInnerHTML={{ __html: t('card__item5') }}
                />
              </ul>
            </div>

            <div className="card__buttons">
              <button
                onClick={() => setMoreInfoExpert(true)}
                className={classNames('card__button light', {
                  isActive: moreInfoExpert,
                })}
              >
                {t('card__button')}
              </button>

              <ModalWindow
                openModal={moreInfoExpert}
                setOpenModal={setMoreInfoExpert}
                secondModal={false}
                visibility="card__modal-visibility"
              >
                <MoreInfo
                  request={setExpertiseForm}
                  assessment={assessmentInfo[lang][1]}
                  closeModal={setMoreInfoExpert}
                  activeState={moreInfoExpert}
                />
              </ModalWindow>

              <button
                onClick={() => setExpertiseForm(true)}
                className={classNames('card__button dark', {
                  isActive: expertiseForm,
                })}
              >
                {t('card__button2')}
              </button>

              <ModalWindow
                openModal={expertiseForm}
                setOpenModal={setExpertiseForm}
                secondModal={false}
                visibility="card__modal-visibility"
              >
                <ValuabilityForm
                  assessment={assessmentForm[lang][1]}
                  closeModal={setExpertiseForm}
                  activeState={expertiseForm}
                />
              </ModalWindow>
            </div>
          </div>

          <img
            className="card__img"
            src="images\\expertise\\exp1.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
