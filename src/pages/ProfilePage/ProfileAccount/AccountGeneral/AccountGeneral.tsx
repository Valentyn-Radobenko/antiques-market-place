import { EditSVG } from '../../../../components/Imgs/EditSVG';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { updateUserField } from '../../../../store/slices/userSlice';
import { User } from '../../../../types/user';
import { CheckCircleOutlineSVG } from '../../../../components/Imgs/CheckCircleOutlineSVG';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Close } from '../../../../components/Imgs/Close';

type Props = {
  user: User;
};
export const AccountGeneral: React.FC<Props> = ({ user }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [changeName, setChangeName] = useState<boolean>(false);
  const [changeLocation, setChangeLocation] = useState<boolean>(false);
  const [changePhone, setChangePhone] = useState<boolean>(false);
  const [changeEmail, setChangeEmail] = useState<boolean>(false);

  const { t } = useTranslation();

  const [userData, setUserData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    country: user.country,
    city: user.city,
    phoneNumber: user.phoneNumber,
    email: user.email,
  });

  return (
    <div className="account-general reveal hidden">
      <div className="account-general__block">
        <h3 className="account-general__title">
          {t('account-fullfiling__step-text')}
        </h3>
        <div className="account-general__data">
          <div className="account-general__single-option-wrapper">
            <div
              className={classNames('account-general__single-data', {
                isActive: changeName,
              })}
            >
              <p className="account-general__data-text">
                {user.firstName ||
                  `${t('shopping-cart__order-block-placeholder-firstname')}`}{' '}
                {user.lastName ||
                  `${t('shopping-cart__order-block-placeholder-lastname')}`}
              </p>
              {changeName ?
                <Close
                  onClick={() => setChangeName(!changeName)}
                  className={classNames('account-general__data-ico', {
                    // isActive: changeName,
                  })}
                />
              : <EditSVG
                  onClick={() => setChangeName(!changeName)}
                  className={classNames('account-general__data-ico', {
                    // isActive: changeName,
                  })}
                />
              }
            </div>

            {changeName && (
              <div className="account-general__change-data-wrapper">
                <div className="account-general__change-data">
                  <p className="account-general__change-data-title">
                    {t('shopping-cart__order-block-placeholder-firstname')}
                  </p>
                  <input
                    value={userData.firstName || ''}
                    className="account-general__change-data-input"
                    type="text"
                    onChange={(e) =>
                      setUserData({ ...userData, firstName: e.target.value })
                    }
                  />
                </div>
                <div className="account-general__change-data">
                  <p className="account-general__change-data-title">
                    {t('shopping-cart__order-block-placeholder-lastname')}
                  </p>
                  <input
                    value={userData.lastName || ''}
                    className="account-general__change-data-input"
                    type="text"
                    onChange={(e) =>
                      setUserData({ ...userData, lastName: e.target.value })
                    }
                  />
                </div>
                <button
                  disabled={
                    userData.firstName === user.firstName &&
                    userData.lastName === user.lastName
                  }
                  onClick={() => {
                    dispatch(
                      updateUserField({
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                      }),
                    );
                    setChangeName(false);
                  }}
                  className="account-general__change-data-button"
                >
                  <p>{t('account-general__change-data-button')}</p>
                  <CheckCircleOutlineSVG />
                </button>
              </div>
            )}
          </div>

          <div className="account-general__single-option-wrapper">
            <div
              className={classNames('account-general__single-data', {
                isActive: changeLocation,
              })}
            >
              <p className="account-general__data-text">
                {user.country ||
                  `${t('shopping-cart__order-block-placeholder-country')}`}
                ,{' '}
                {user.city ||
                  `${t('shopping-cart__order-block-placeholder-city')}`}
              </p>
              {changeLocation ?
                <Close
                  onClick={() => setChangeLocation(!changeLocation)}
                  className={classNames('account-general__data-ico', {
                    // isActive: changeLocation,
                  })}
                />
              : <EditSVG
                  onClick={() => setChangeLocation(!changeLocation)}
                  className={classNames('account-general__data-ico', {
                    // isActive: changeLocation,
                  })}
                />
              }
            </div>
            {changeLocation && (
              <div className="account-general__change-data-wrapper">
                <div className="account-general__change-data">
                  <p className="account-general__change-data-title">
                    {t('shopping-cart__order-block-placeholder-city')}
                  </p>
                  <input
                    value={userData.city || ''}
                    className="account-general__change-data-input"
                    type="text"
                    onChange={(e) =>
                      setUserData({ ...userData, city: e.target.value })
                    }
                  />
                </div>
                <div className="account-general__change-data">
                  <p className="account-general__change-data-title">
                    {t('shopping-cart__order-block-placeholder-country')}
                  </p>
                  <input
                    value={userData.country || ''}
                    className="account-general__change-data-input"
                    type="text"
                    onChange={(e) =>
                      setUserData({ ...userData, country: e.target.value })
                    }
                  />
                </div>
                <button
                  disabled={
                    userData.city === user.city &&
                    userData.country === user.country
                  }
                  onClick={() => {
                    dispatch(
                      updateUserField({
                        city: userData.city,
                        country: userData.country,
                      }),
                    );
                    setChangeLocation(false);
                  }}
                  className="account-general__change-data-button"
                >
                  <p>{t('account-general__change-data-button')}</p>
                  <CheckCircleOutlineSVG />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="account-general__block">
        <h3 className="account-general__title">
          {t('account-fullfiling__step-text2')}
        </h3>
        <div className="account-general__data">
          <div className="account-general__single-option-wrapper">
            <div
              className={classNames('account-general__single-data', {
                isActive: changePhone,
              })}
            >
              <p className="account-general__data-text">
                {user.phoneNumber ||
                  `${t('shopping-cart__order-block-label3')}`}
              </p>
              {changePhone ?
                <Close
                  onClick={() => setChangePhone(!changePhone)}
                  className={classNames('account-general__data-ico', {
                    // isActive: changePhone,
                  })}
                />
              : <EditSVG
                  onClick={() => setChangePhone(!changePhone)}
                  className={classNames('account-general__data-ico', {
                    // isActive: changePhone,
                  })}
                />
              }
            </div>
            {changePhone && (
              <div className="account-general__change-data-wrapper">
                <div className="account-general__change-data">
                  <p className="account-general__change-data-title">
                    {t('shopping-cart__order-block-label3')}
                  </p>
                  <input
                    value={userData.phoneNumber || ''}
                    className="account-general__change-data-input"
                    type="tel"
                    onChange={(e) =>
                      setUserData({ ...userData, phoneNumber: e.target.value })
                    }
                  />
                </div>
                <button
                  disabled={userData.phoneNumber === user.phoneNumber}
                  onClick={() => {
                    dispatch(
                      updateUserField({ phoneNumber: userData.phoneNumber }),
                    );
                    setChangePhone(false);
                  }}
                  className="account-general__change-data-button"
                >
                  <p>{t('account-general__change-data-button')}</p>
                  <CheckCircleOutlineSVG />
                </button>
              </div>
            )}
          </div>
          <div className="account-general__single-option-wrapper">
            <div
              className={classNames('account-general__single-data', {
                isActive: changeEmail,
              })}
            >
              <p className="account-general__data-text">
                {user.email || `${t('shopping-cart__order-block-label5')}`}
              </p>
              {changeEmail ?
                <Close
                  onClick={() => setChangeEmail(!changeEmail)}
                  className={classNames('account-general__data-ico', {
                    // isActive: changeEmail,
                  })}
                />
              : <EditSVG
                  onClick={() => setChangeEmail(!changeEmail)}
                  className={classNames('account-general__data-ico', {
                    // isActive: changeEmail,
                  })}
                />
              }
            </div>
            {changeEmail && (
              <div className="account-general__change-data-wrapper">
                <div className="account-general__change-data">
                  <p className="account-general__change-data-title">
                    {t('shopping-cart__order-block-label5')}
                  </p>
                  <input
                    value={userData.email || ''}
                    className="account-general__change-data-input"
                    type="email"
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                </div>
                <button
                  disabled={userData.email === user.email}
                  onClick={() => {
                    setChangeEmail(false);
                    dispatch(updateUserField({ email: userData.email }));
                  }}
                  className="account-general__change-data-button"
                >
                  <p>{t('account-general__change-data-button')}</p>
                  <CheckCircleOutlineSVG />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
