import { Link } from 'react-router-dom';
import { Close } from '../../../../components/Imgs/Close';
import { ArrowTale } from '../../../../components/Imgs/ArrowTale';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { InkHighlighterMoveSVG } from '../../../../components/Imgs/InkHighlighterMoveSVG';

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

  const { t } = useTranslation();

  const submitPassword = () => {
    if (!password.pas) {
      setError(`${t('set-password')}`);
      return;
    }

    if (password.pas !== password.confirmedPas) {
      setError(`${t('passwords-do-not-match')}`);
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
          <h2 className="change-password__h2">{t('change-password__h2')}</h2>
          <div
            className={classNames('change-password__info-texts', {
              isActive: !acceptedChange,
            })}
          >
            <p className="change-password__text">
              {t('change-password__text')}
            </p>
            <div className="change-password__email">
              <p className="change-password__email-text">
                {t('change-password__email-text')}
              </p>
              <InkHighlighterMoveSVG />
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
                <p className="change-password__title">
                  {t('change-password__title')}
                </p>
                <input
                  placeholder="44 55 66"
                  type="text"
                  className="change-password__input"
                />
                <p className="change-password__time-to-put">
                  {t('change-password__time-to-put')}
                </p>
              </div>
              <Link
                to={''}
                className="change-password__send-again"
              >
                {t('change-password__send-again')}
              </Link>
            </div>
            <button
              onClick={() => setAcceptedChange(true)}
              className="change-password__button"
            >
              {t('change-password__button')}
            </button>
          </div>
          <div
            className={classNames('change-password__form', {
              isActive: acceptedChange,
            })}
          >
            <div className="change-password__change-password">
              <div className="change-password__input-block">
                <p className="change-password__title">
                  {t('change-password__title2')}
                </p>
                <input
                  value={password.pas}
                  onChange={(e) =>
                    setPassword({ ...password, pas: e.target.value })
                  }
                  placeholder={t('change-password__input')}
                  type="password"
                  className="change-password__input"
                />
                <p className="change-password__error">{error || ' '} </p>
              </div>
              <div className="change-password__input-block">
                <p className="change-password__title">
                  {t('change-password__title3')}
                </p>
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
              {t('change-password__button2')}
            </button>
            {successPas && (
              <p className="change-password__successes">
                {t('change-password__successes')}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
