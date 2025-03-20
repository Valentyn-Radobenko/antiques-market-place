import classNames from 'classnames';
import { Info } from '../../../components/Imgs/Info';
import { Close } from '../../../components/Imgs/Close';
import { Dispatch, SetStateAction } from 'react';
type Props = {
  helperOn: boolean;
  onMouseLeave: () => void;
  onMouseEnter: () => void;
  setHelperOn: Dispatch<SetStateAction<boolean>>;
};

export const PageHelper: React.FC<Props> = ({
  setHelperOn,
  helperOn,
  onMouseLeave,
  onMouseEnter,
}) => {
  return (
    <div
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={classNames('pagehelper', {
        isActive: helperOn,
      })}
    >
      <div className="pagehelper__container">
        <div className="pagehelper__icons">
          <Info className="pagehelper__icon" />
          <Close
            onClick={() => setHelperOn(false)}
            className="pagehelper__close"
          />
        </div>
        <div className="pagehelper__text-block">
          <h3 className="pagehelper__h3">Рекомендації для вибору послуги:</h3>
          <ul className="pagehelper__list">
            <li className="pagehelper__item">
              Якщо ви лише цікавитеся вартістю —{' '}
              <strong>достатньо базової оцінки.</strong>
            </li>
            <li className="pagehelper__item">
              Для продажу, страхування чи підтвердеженні автентичності —
              підходить{' '}
              <strong>детальна оцінка та сертифікація аутентичності.</strong>
            </li>
          </ul>
          <p className="pagehelper__text">
            Це не тільки забезпечить вас потрібною інформацією, але й дозволить
            максимально ефективно використати ваш бюджет.
          </p>
        </div>
      </div>
      <div
        onClick={() => setHelperOn(false)}
        className="pagehelper__backdrop"
      />
    </div>
  );
};
