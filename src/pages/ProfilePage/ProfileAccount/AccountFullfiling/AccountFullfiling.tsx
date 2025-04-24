import { useRef, useState } from 'react';
import { Arrow } from '../../../../components/Imgs/Arrow';
import { VerLineSVG } from '../../../../components/Imgs/VerLineSVG';
import { VerifiedSVG } from '../../../../components/Imgs/VerifiedSVG';
import classNames from 'classnames';

export const AccountFullfiling = () => {
  const [steps, setSteps] = useState<boolean>(false);
  const refHeight = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="account-fullfiling">
        <p className="account-fullfiling__text desctop">
          Прогрес заповнення акаунту
        </p>
        <div className="account-fullfiling__circle">
          <div className="account-fullfiling__circle-out">
            <p className="account-fullfiling__circle-text">
              Додайте{' '}
              <span className="account-fullfiling__attention">контакти</span> та{' '}
              <span className="account-fullfiling__attention">верифікацію</span>
              , щоб завершити профіль.
            </p>
          </div>
          <VerLineSVG
            rotate="rotate(-85 98 98)"
            className="account-fullfiling__circle-line isActive"
          />
          <VerLineSVG
            rotate="rotate(35 98 98)"
            className="account-fullfiling__circle-line"
          />
          <VerLineSVG
            rotate="rotate(-205 98 98)"
            className="account-fullfiling__circle-line"
          />
        </div>
        <div className="account-fullfiling__tablet-container">
          <p className="account-fullfiling__text tablet">
            Прогрес заповнення акаунту
          </p>
          <div className="account-fullfiling__steps">
            <div className="account-fullfiling__step isActive">
              <p className="account-fullfiling__step-text">Особисті дані</p>
              <VerifiedSVG className="account-fullfiling__step-svg isActive" />
            </div>
            <div className="account-fullfiling__step">
              <p className="account-fullfiling__step-text">Контактні дані</p>
              <VerifiedSVG className="account-fullfiling__step-svg" />
            </div>
            <div className="account-fullfiling__step">
              <p className="account-fullfiling__step-text">Верифікація</p>
              <VerifiedSVG className="account-fullfiling__step-svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="account-fullfiling-mobile">
        <div className="account-fullfiling-mobile__title">
          <p className="account-fullfiling__text">Прогрес заповнення акаунту</p>
          <Arrow
            onClick={() => setSteps(!steps)}
            className={classNames('account-fullfiling-mobile__arrow', {
              isActive: steps,
            })}
          />
        </div>
        <div className="account-fullfiling-mobile__progres">
          <div className="account-fullfiling-mobile__lines">
            <div className="account-fullfiling-mobile__line isActive"></div>
            <div className="account-fullfiling-mobile__line"></div>
            <div className="account-fullfiling-mobile__line"></div>
          </div>
          <p className="account-fullfiling-mobile__lines-text">
            Додайте{' '}
            <span className="account-fullfiling__attention">контакти</span> та{' '}
            <span className="account-fullfiling__attention">верифікацію</span>,
            щоб завершити профіль.
          </p>
        </div>
        <div
          style={{ height: steps ? refHeight.current?.clientHeight : 0 }}
          className="account-fullfiling__steps-container"
        >
          <div
            ref={refHeight}
            className="account-fullfiling__steps"
          >
            <div className="account-fullfiling__step isActive">
              <p className="account-fullfiling__step-text">Особисті дані</p>
              <VerifiedSVG className="account-fullfiling__step-svg isActive" />
            </div>
            <div className="account-fullfiling__step">
              <p className="account-fullfiling__step-text">Контактні дані</p>
              <VerifiedSVG className="account-fullfiling__step-svg" />
            </div>
            <div className="account-fullfiling__step">
              <p className="account-fullfiling__step-text">Верифікація</p>
              <VerifiedSVG className="account-fullfiling__step-svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
