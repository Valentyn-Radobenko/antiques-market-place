import { useEffect, useState } from 'react';
import { Info } from '../../../../components/Imgs/Info';
import { VpnKeySVG } from '../../../../components/Imgs/VpnKeySVG';
import classNames from 'classnames';
import { ModalWindow } from '../../../../components/ModalWindow/ModalWindow';
import { ChangePasswordModal } from '../ChangePasswordModal/ChangePasswordModal';
import { useTranslation } from 'react-i18next';

type Props = {
  email: string;
};

export const PasswordEmail: React.FC<Props> = ({ email }) => {
  const [passwordHelper, setPasswordHelper] = useState<boolean>(false);
  const [changePass, setChangePass] = useState<boolean>(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (passwordHelper) {
      setTimeout(() => {
        setPasswordHelper(false);
      }, 5000);
    }
  }, [passwordHelper]);

  return (
    <div className="password-email reveal hidden">
      <h3 className="password-email__h3">{t('password-email__h3')}</h3>
      <div className="password-email__main-info">
        <div className="password-email__texts">
          <div className="password-email__section">
            <p className="password-email__section-title">
              {t('shopping-cart__order-block-label5')}
            </p>
            <p className="password-email__section-value">{email}</p>
          </div>
          <div className="password-email__section">
            <div className="password-email__password-block">
              <p className="password-email__section-title">
                {t('password-email__section-title')}
              </p>
              <Info
                onClick={() => setPasswordHelper(true)}
                className="password-email__info-svg"
              />
              <div
                className={classNames('password-email__change-pass-info', {
                  isActive: passwordHelper,
                })}
              >
                <Info className="password-email__info-svg" />
                <p className="password-email__change-pass-info-text">
                  {t('password-email__change-pass-info-text')}{' '}
                  <span className="password-email__change-pass-info-text-bold">
                    {t('password-email__change-pass-info-text-bold')}
                  </span>
                </p>
              </div>
            </div>
            <p className="password-email__section-value">***********</p>
          </div>
        </div>
        <button
          onClick={() => setChangePass(true)}
          className="password-email__button"
        >
          <p className="password-email__button-text">
            {t('password-email__button-text')}
          </p>
          <VpnKeySVG />
        </button>
      </div>
      <ModalWindow
        openModal={changePass}
        setOpenModal={setChangePass}
        secondModal={false}
        visibility="password-email__change-modal"
      >
        {changePass && <ChangePasswordModal setChangePass={setChangePass} />}
      </ModalWindow>
    </div>
  );
};
