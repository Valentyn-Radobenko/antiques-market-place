import { EditSVG } from '../../../../components/Imgs/EditSVG';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { updateUserField } from '../../../../store/slices/userSlice';
import { User } from '../../../../types/user';
import { CheckCircleOutlineSVG } from '../../../../components/Imgs/CheckCircleOutlineSVG';
import classNames from 'classnames';

type Props = {
  user: User;
};
export const AccountGeneral: React.FC<Props> = ({ user }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [changeName, setChangeName] = useState<boolean>(false);
  const [changeLocation, setChangeLocation] = useState<boolean>(false);
  const [changePhone, setChangePhone] = useState<boolean>(false);
  const [changeEmail, setChangeEmail] = useState<boolean>(false);

  const [userData, setUserData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    country: user.country,
    city: user.city,
    phoneNumber: user.phoneNumber,
    email: user.email,
  });

  return (
    <div className="account-general">
      <div className="account-general__block">
        <h3 className="account-general__title">Особисті дані</h3>
        <div className="account-general__data">
          <div className="account-general__single-option-wrapper">
            <div
              className={classNames('account-general__single-data', {
                isActive: changeName,
              })}
            >
              <p className="account-general__data-text">
                {user.firstName || "ім'я"} {user.lastName || 'прізвище'}
              </p>
              <EditSVG
                onClick={() => setChangeName(!changeName)}
                className={classNames('account-general__data-ico', {
                  isActive: changeName,
                })}
              />
            </div>

            {changeName && (
              <div className="account-general__change-data-wrapper">
                <div className="account-general__change-data">
                  <p className="account-general__change-data-title">ім'я</p>
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
                  <p className="account-general__change-data-title">Прізвище</p>
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
                  <p>Підтвердити</p>
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
                {user.country || 'Країна'}, {user.city || 'місто'}
              </p>
              <EditSVG
                onClick={() => setChangeLocation(!changeLocation)}
                className={classNames('account-general__data-ico', {
                  isActive: changeLocation,
                })}
              />
            </div>
            {changeLocation && (
              <div className="account-general__change-data-wrapper">
                <div className="account-general__change-data">
                  <p className="account-general__change-data-title">Місто</p>
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
                  <p className="account-general__change-data-title">Країна</p>
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
                  <p>Підтвердити</p>
                  <CheckCircleOutlineSVG />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="account-general__block">
        <h3 className="account-general__title">Контактні дані</h3>
        <div className="account-general__data">
          <div className="account-general__single-option-wrapper">
            <div
              className={classNames('account-general__single-data', {
                isActive: changePhone,
              })}
            >
              <p className="account-general__data-text">
                {user.phoneNumber || 'Номер телефону'}
              </p>
              <EditSVG
                onClick={() => setChangePhone(!changePhone)}
                className={classNames('account-general__data-ico', {
                  isActive: changePhone,
                })}
              />
            </div>
            {changePhone && (
              <div className="account-general__change-data-wrapper">
                <div className="account-general__change-data">
                  <p className="account-general__change-data-title">
                    Номер телефону
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
                  <p>Підтвердити</p>
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
                {user.email || 'Пошта'}
              </p>
              <EditSVG
                onClick={() => setChangeEmail(!changeEmail)}
                className={classNames('account-general__data-ico', {
                  isActive: changeEmail,
                })}
              />
            </div>
            {changeEmail && (
              <div className="account-general__change-data-wrapper">
                <div className="account-general__change-data">
                  <p className="account-general__change-data-title">Пошта</p>
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
                  <p>Підтвердити</p>
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
