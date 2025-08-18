import { Link } from 'react-router-dom';
import { Close } from '../../../../components/Imgs/Close';
import { ArrowTale } from '../../../../components/Imgs/ArrowTale';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import classNames from 'classnames';

type Props = {
  setChangePass: Dispatch<SetStateAction<boolean>>;
};

type Password = {
  pas: string;
  confirmedPas: string;
};

export const ChangePasswordModal: React.FC<Props> = ({ setChangePass }) => {
  const [acceptedChange, setAcceptedChange] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState<Password>({
    pas: '',
    confirmedPas: '',
  });
  const [successPas, setSuccessesPas] = useState<boolean>(false);

  const submitPassword = () => {
    if (!password.pas) {
      setError('Введіть пароль.');
      return;
    }

    if (password.pas !== password.confirmedPas) {
      setError('Паролі не співпадають');
      return;
    }

    setSuccessesPas(true);
  };

  useEffect(() => {
    if (successPas) {
      setTimeout(() => setChangePass(false), 5000);
    }
  }, [successPas]);

  return (
    <div className="change-password">
      <div className="change-password__top-bar">
        <ArrowTale
          onClick={() => setAcceptedChange(false)}
          className={classNames('change-password__arrow', {
            isActive: acceptedChange,
          })}
        />
        <Close
          onClick={() => setChangePass(false)}
          className="change-password__close"
        />
      </div>
      <div className="change-password__main">
        <div className="change-password__info">
          <h2 className="change-password__h2">Зміна пароля</h2>
          <div
            className={classNames('change-password__info-texts', {
              isActive: !acceptedChange,
            })}
          >
            <p className="change-password__text">
              Для зміни паролю введіть код підтвердження з повідомлення,
              відправлений на вашу пошту
            </p>
            <div className="change-password__email">
              <p className="change-password__email-text">ducat.ua@gmail.com</p>
              icon
            </div>
          </div>
        </div>
        <div className="change-password__form-wrapper">
          <div
            className={classNames('change-password__form', {
              isActive: !acceptedChange,
            })}
          >
            <div className="change-password__general-form-part">
              <div className="change-password__input-block">
                <p className="change-password__title">Код підтвердження</p>
                <input
                  placeholder="44 55 66"
                  type="text"
                  className="change-password__input"
                />
                <p className="change-password__time-to-put">
                  Час для введеня коду 30 секунд.
                </p>
              </div>
              <Link
                to={''}
                className="change-password__send-again"
              >
                Надіслати код повторно
              </Link>
            </div>
            <button
              onClick={() => setAcceptedChange(true)}
              className="change-password__button"
            >
              Продовжити
            </button>
          </div>
          <div
            className={classNames('change-password__form', {
              isActive: acceptedChange,
            })}
          >
            <div className="change-password__change-password">
              <div className="change-password__input-block">
                <p className="change-password__title">Створіть пароль</p>
                <input
                  value={password.pas}
                  onChange={(e) =>
                    setPassword({ ...password, pas: e.target.value })
                  }
                  placeholder="новий пароль"
                  type="password"
                  className="change-password__input"
                />
                <p className="change-password__error">{error || ' '} </p>
              </div>
              <div className="change-password__input-block">
                <p className="change-password__title">Підтвердіть пароль</p>
                <input
                  value={password?.confirmedPas}
                  onChange={(e) =>
                    setPassword({ ...password, confirmedPas: e.target.value })
                  }
                  placeholder="підтвердіть пароль"
                  type="password"
                  className="change-password__input"
                />
              </div>
            </div>
            <button
              onClick={submitPassword}
              className="change-password__button"
            >
              Відновити пароль
            </button>
            {successPas && (
              <p className="change-password__successes">
                Пароль змінено успшно
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
