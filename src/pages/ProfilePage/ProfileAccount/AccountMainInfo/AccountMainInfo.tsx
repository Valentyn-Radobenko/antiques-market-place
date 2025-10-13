import classNames from 'classnames';
import { AccountSVG } from '../../../../components/Imgs/AccountSVG';
import { AddImgsPlus } from '../../../../components/Imgs/AddImgsPlus';
import { ShiledSVG } from '../../../../components/Imgs/ShieldSVG';
import { VerifiedSVG } from '../../../../components/Imgs/VerifiedSVG';

type Props = {
  firstName: string | null;
  lastName: string | null;
  city: string | null;
  country: string | null;
  verified: boolean;
};

export const AccountMainInfo: React.FC<Props> = ({
  lastName,
  firstName,
  city,
  country,
  verified,
}) => {
  return (
    <div className="account-main-info">
      <div className="account-main-info__container">
        <div className="account-main-info__img-block">
          <AccountSVG className="account-main-info__placehilder" />
          <AddImgsPlus className="account-main-info__svg" />
        </div>
        <div className="account-main-info__text-block">
          <p className="account-main-info__name">{`${firstName} ${lastName}`}</p>
          <p className="account-main-info__location">
            {country}, {city}{' '}
          </p>
          <div
            className={classNames(
              'account-main-info__veryfic-status desc-tab',
              {
                isActive: verified,
              },
            )}
          >
            {verified ?
              <VerifiedSVG className="account-main-info__veryfic-svg-true" />
            : <ShiledSVG className="account-main-info__veryfic-svg-false" />}
            <p className="account-main-info__veryfic-text">
              {verified ? 'Акаунт верифікований' : 'Акаунт не верифікований'}
            </p>
          </div>
        </div>
      </div>
      <div
        className={classNames('account-main-info__veryfic-status phone', {
          isActive: verified,
        })}
      >
        {verified ?
          <VerifiedSVG className="account-main-info__veryfic-svg-true" />
        : <ShiledSVG className="account-main-info__veryfic-svg-false" />}
        <p className="account-main-info__veryfic-text">
          {verified ? 'Акаунт верифікований' : 'Акаунт не верифікований'}
        </p>
      </div>
    </div>
  );
};
