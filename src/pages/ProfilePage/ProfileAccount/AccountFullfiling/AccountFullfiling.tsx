import { useRef, useState } from 'react';
import { Arrow } from '../../../../components/Imgs/Arrow';
import { VerLineSVG } from '../../../../components/Imgs/VerLineSVG';
import { VerifiedSVG } from '../../../../components/Imgs/VerifiedSVG';
import classNames from 'classnames';
import { UserState } from '../../../../types/user';

type Props = {
  user: UserState;
};

export const AccountFullfiling: React.FC<Props> = ({ user }) => {
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
            {(
              user.city &&
              user.country &&
              user.firstName &&
              user.lastName &&
              user.email &&
              user.verified &&
              user.phoneNumber
            ) ?
              <div className="account-fullfiling__fullfield">
                <p>Всі дані заповнено.</p>
                <VerifiedSVG className="account-fullfiling__svg-fullfield" />
              </div>
            : <p className="account-fullfiling__circle-text">
                Додайте{' '}
                {(!user.firstName ||
                  !user.lastName ||
                  !user.city ||
                  !user.country) && (
                  <span className="account-fullfiling__attention">
                    особситі дані,
                  </span>
                )}
                {(!user.email || !user.phoneNumber) && (
                  <span className="account-fullfiling__attention">
                    контакти,
                  </span>
                )}
                {!user.verified && (
                  <span className="account-fullfiling__attention">
                    верифікацію,
                  </span>
                )}{' '}
                щоб завершити профіль.
              </p>
            }
          </div>
          <VerLineSVG
            rotate="rotate(-85 98 98)"
            className={classNames('account-fullfiling__circle-line', {
              isActive:
                user.city && user.country && user.firstName && user.lastName,
            })}
          />
          <VerLineSVG
            rotate="rotate(35 98 98)"
            className={classNames('account-fullfiling__circle-line', {
              isActive: user.email && user.phoneNumber,
            })}
          />
          <VerLineSVG
            rotate="rotate(-205 98 98)"
            className={classNames('account-fullfiling__circle-line', {
              isActive: user.verified,
            })}
          />
        </div>
        <div className="account-fullfiling__tablet-container">
          <p className="account-fullfiling__text tablet">
            Прогрес заповнення акаунту
          </p>

          <div className="account-fullfiling__steps">
            <div
              className={classNames('account-fullfiling__step', {
                isActive:
                  user.city && user.country && user.firstName && user.lastName,
              })}
            >
              <p className="account-fullfiling__step-text">Особисті дані</p>
              <VerifiedSVG
                className={classNames('account-fullfiling__step-svg', {
                  isActive:
                    user.city &&
                    user.country &&
                    user.firstName &&
                    user.lastName,
                })}
              />
            </div>
            <div
              className={classNames('account-fullfiling__step', {
                isActive: user.email && user.phoneNumber,
              })}
            >
              <p className="account-fullfiling__step-text">Контактні дані</p>
              <VerifiedSVG
                className={classNames('account-fullfiling__step-svg', {
                  isActive: user.email && user.phoneNumber,
                })}
              />
            </div>
            <div
              className={classNames('account-fullfiling__step', {
                isActive: user.verified,
              })}
            >
              <p className="account-fullfiling__step-text">Верифікація</p>
              <VerifiedSVG
                className={classNames('account-fullfiling__step-svg', {
                  isActive: user.verified,
                })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="account-fullfiling-mobile">
        <div className="account-fullfiling-mobile__title">
          <p
            className={classNames('account-fullfiling__text', {
              isActive: steps,
            })}
          >
            Прогрес заповнення акаунту
          </p>
          <div className="account-fullfiling-mobile__arrow-wrapper">
            <Arrow
              onClick={() => setSteps(!steps)}
              className={classNames('account-fullfiling-mobile__arrow', {
                isActive: steps,
              })}
            />
          </div>
        </div>
        <div className="account-fullfiling-mobile__progres">
          <div className="account-fullfiling-mobile__lines">
            <div
              className={classNames('account-fullfiling-mobile__line', {
                isActive:
                  user.city && user.country && user.firstName && user.lastName,
              })}
            ></div>
            <div
              className={classNames('account-fullfiling-mobile__line', {
                isActive: user.email && user.phoneNumber,
              })}
            ></div>
            <div
              className={classNames('account-fullfiling-mobile__line', {
                isActive: user.verified,
              })}
            ></div>
          </div>
          {(
            user.city &&
            user.country &&
            user.firstName &&
            user.lastName &&
            user.email &&
            user.verified &&
            user.phoneNumber
          ) ?
            <div className="account-fullfiling__fullfield">
              <p>Всі дані заповнено.</p>
              <VerifiedSVG className="account-fullfiling__svg-fullfield" />
            </div>
          : <p className="account-fullfiling__circle-text">
              Додайте{' '}
              {(!user.firstName ||
                !user.lastName ||
                !user.city ||
                !user.country) && (
                <span className="account-fullfiling__attention">
                  особситі дані,
                </span>
              )}
              {(!user.email || !user.phoneNumber) && (
                <span className="account-fullfiling__attention">
                  {' '}
                  контакти,
                </span>
              )}
              {!user.verified && (
                <span className="account-fullfiling__attention">
                  {' '}
                  верифікацію,
                </span>
              )}{' '}
              щоб завершити профіль.
            </p>
          }
        </div>
        <div
          style={{ height: steps ? refHeight.current?.clientHeight : 0 }}
          className="account-fullfiling__steps-container"
        >
          <div
            ref={refHeight}
            className="account-fullfiling__steps"
          >
            <div
              className={classNames('account-fullfiling__step', {
                isActive:
                  user.city && user.country && user.firstName && user.lastName,
              })}
            >
              <p className="account-fullfiling__step-text">Особисті дані</p>
              <VerifiedSVG
                className={classNames('account-fullfiling__step-svg', {
                  isActive:
                    user.city &&
                    user.country &&
                    user.firstName &&
                    user.lastName,
                })}
              />
            </div>
            <div
              className={classNames('account-fullfiling__step', {
                isActive: user.email && user.phoneNumber,
              })}
            >
              <p className="account-fullfiling__step-text">Контактні дані</p>
              <VerifiedSVG
                className={classNames('account-fullfiling__step-svg', {
                  isActive: user.email && user.phoneNumber,
                })}
              />
            </div>
            <div
              className={classNames('account-fullfiling__step', {
                isActive: user.verified,
              })}
            >
              <p className="account-fullfiling__step-text">Верифікація</p>
              <VerifiedSVG
                className={classNames('account-fullfiling__step-svg', {
                  isActive: user.verified,
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
