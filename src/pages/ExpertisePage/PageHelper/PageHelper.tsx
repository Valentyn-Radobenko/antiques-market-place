import classNames from 'classnames';
import { Info } from '../../../components/Imgs/Info';
import { Close } from '../../../components/Imgs/Close';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <div
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={classNames('pagehelper', {
        isActive: helperOn,
      })}
    >
      <div
        className={classNames('pagehelper__container', {
          isActive: helperOn,
        })}
      >
        <div className="pagehelper__icons">
          <Info className="pagehelper__icon" />
          <Close
            onClick={() => setHelperOn(false)}
            className="pagehelper__close"
          />
        </div>
        <div className="pagehelper__text-block">
          <h3 className="pagehelper__h3">{t('pagehelper__h3')}</h3>
          <ul className="pagehelper__list">
            <li className="pagehelper__item">
              {t('pagehelper__item')} <strong>{t('pagehelper__item2')}</strong>
            </li>
            <li className="pagehelper__item">
              {t('pagehelper__item3')} <strong>{t('pagehelper__item4')}</strong>
            </li>
          </ul>
          <p className="pagehelper__text">{t('pagehelper__text')}</p>
        </div>
      </div>
      <div
        onClick={() => setHelperOn(false)}
        className="pagehelper__backdrop"
      />
    </div>
  );
};
