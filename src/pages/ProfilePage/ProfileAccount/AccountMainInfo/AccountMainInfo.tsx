import classNames from 'classnames';
import { AccountSVG } from '../../../../components/Imgs/AccountSVG';
import { AddImgsPlus } from '../../../../components/Imgs/AddImgsPlus';
import { ShiledSVG } from '../../../../components/Imgs/ShieldSVG';
import { VerifiedSVG } from '../../../../components/Imgs/VerifiedSVG';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { updateUserField } from '../../../../store/slices/userSlice';

type Props = {
  firstName: string | null;
  lastName: string | null;
  city: string | null;
  country: string | null;
  verified: boolean;
  img: string;
};

export const AccountMainInfo: React.FC<Props> = ({
  lastName,
  firstName,
  city,
  country,
  verified,
  img,
}) => {
  const { t } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      dispatch(updateUserField({ picture: URL.createObjectURL(file) }));
    }
  };

  return (
    <div className="account-main-info reveal hidden">
      <div className="account-main-info__container">
        <div className="account-main-info__img-block">
          {img ?
            <img
              className="account-main-info__img"
              src={img}
              alt=""
            />
          : <AccountSVG className="account-main-info__placehilder" />}
          <label className="account-main-info__label">
            <input
              onChange={handleChangeImg}
              hidden
              className="account-main-info__input"
              type="file"
            />
            <AddImgsPlus className="account-main-info__svg" />
          </label>
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
              {verified ?
                `${t('account-verified')}`
              : `${t('account-not-verified')}`}
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
          {verified ?
            `${t('account-verified')}`
          : `${t('account-not-verified')}`}
        </p>
      </div>
    </div>
  );
};
