import { useEffect, useState } from 'react';
import { Info } from '../../../../components/Imgs/Info';
import { VpnKeySVG } from '../../../../components/Imgs/VpnKeySVG';
import classNames from 'classnames';
import { ModalWindow } from '../../../../components/ModalWindow/ModalWindow';
import { ChangePasswordModal } from '../ChangePasswordModal/ChangePasswordModal';

// type Props = {

// };

export const PasswordEmail: React.FC = () => {
  const [passwordHelper, setPasswordHelper] = useState<boolean>(false);
  const [changePass, setChangePass] = useState<boolean>(false);

  useEffect(() => {
    if (passwordHelper) {
      setTimeout(() => {
        setPasswordHelper(false);
      }, 5000);
    }
  }, [passwordHelper]);

  return (
    <div className="password-email">
      <h3 className="password-email__h3">Данні входу в акаунт</h3>
      <div className="password-email__main-info">
        <div className="password-email__texts">
          <div className="password-email__section">
            <p className="password-email__section-title">E-mail</p>
            <p className="password-email__section-value">dukat.ua@gmail.com</p>
          </div>
          <div className="password-email__section">
            <div className="password-email__password-block">
              <p className="password-email__section-title">Пароль</p>
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
                  Якщо ви хочете змінити пароль, вам потрібно{' '}
                  <span className="password-email__change-pass-info-text-bold">
                    підтвердіть особистість через пошту.
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
          <p className="password-email__button-text">Змінити пароль</p>
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
