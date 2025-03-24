import { useState } from 'react';
import { MoreInfo } from '../MoreInfo/MoreInfo';
import { assessmentInfo, assessmentForm } from '../../../data/assessment';
import { ValuabilityForm } from '../ValuabilityForm/ValuabilityForm';
import classNames from 'classnames';
interface Props {
  sectionRef: React.RefObject<HTMLDivElement>;
}

export const ItemEvaluation: React.FC<Props> = ({ sectionRef }) => {
  const [moreInfoBase, setMoreInfoBase] = useState(false);
  const [moreInfoExpert, setMoreInfoExpert] = useState(false);
  const [valuabilityForm, setValuabilityForm] = useState(false);
  const [expertiseForm, setExpertiseForm] = useState(false);

  return (
    <div className="item-evaluation">
      <h2
        ref={sectionRef}
        className="item-evaluation__h2"
      >
        Оберіть необхідний варіант оцінювання предмета :
      </h2>
      <div className="item-evaluation__cards">
        <div className="item-evaluation__card card">
          <div className="card__text-block">
            <div className="card__text">
              <h2 className="card__h2">Базова оцінка предмета</h2>
              <div className="card__price">
                <h4 className="card__price-h4">Середня вартість:</h4>
                <p className="card__price-text">
                  Оцінка: 400 грн. + 2% від вартості предмету
                </p>
              </div>
              <ul className="card__list">
                <h4 className="card__h4">Що отримає власник лоту:</h4>
                <li className="card__item">Опис характеристик предмета.</li>
                <li className="card__item">
                  Оцінка (в якому стані предмет) та орієнтовна вартість.
                </li>
              </ul>
            </div>
            <div className="card__buttons">
              <button
                onClick={() => setMoreInfoBase(true)}
                className={classNames('card__button light', {
                  isActive: moreInfoBase,
                })}
              >
                Дізнатися більше
              </button>
              {moreInfoBase && (
                <MoreInfo
                  request={setValuabilityForm}
                  closeModal={setMoreInfoBase}
                  assessment={assessmentInfo[0]}
                />
              )}
              <button
                onClick={() => setValuabilityForm(true)}
                className={classNames('card__button dark', {
                  isActive: valuabilityForm,
                })}
              >
                Подати заявку
              </button>
              {valuabilityForm && (
                <ValuabilityForm
                  assessment={assessmentForm[0]}
                  closeModal={setValuabilityForm}
                />
              )}
            </div>
          </div>
          <img
            className="card__img"
            src="images\expertise\expertise-1.png"
            alt=""
          />
        </div>
        <div className="item-evaluation__card card">
          <div className="card__text-block">
            <div className="card__text">
              <h2 className="card__h2">Експертиза</h2>
              <div className="card__price">
                <h4 className="card__price-h4">Середня вартість:</h4>
                <p className="card__price-text">
                  Проста експертиза: 2000 грн + 2% від оцінки вартості.
                </p>
              </div>
              <ul className="card__list">
                <h4 className="card__h4">Що отримає власник лоту:</h4>
                <li className="card__item">
                  Офіційний сертифікат автентичності.
                </li>
                <li className="card__item">Опис характеристик предмета.</li>
                <li className="card__item">
                  Підтвердження, яке визнається професійною спільнотою. <br />{' '}
                  Міжнародний сертифікат.
                </li>
              </ul>
            </div>
            <div className="card__buttons">
              <button
                onClick={() => setMoreInfoExpert(true)}
                className={classNames('card__button light', {
                  isActive: moreInfoExpert,
                })}
              >
                Дізнатися більше
              </button>
              {moreInfoExpert && (
                <MoreInfo
                  request={setExpertiseForm}
                  assessment={assessmentInfo[1]}
                  closeModal={setMoreInfoExpert}
                />
              )}
              <button
                onClick={() => setExpertiseForm(true)}
                className={classNames('card__button dark', {
                  isActive: expertiseForm,
                })}
              >
                Подати заявку
              </button>
              {expertiseForm && (
                <ValuabilityForm
                  assessment={assessmentForm[1]}
                  closeModal={setExpertiseForm}
                />
              )}
            </div>
          </div>
          <img
            className="card__img"
            src="images\expertise\expertise-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
