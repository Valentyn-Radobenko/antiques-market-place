import { AccountSVG } from '../../../../components/Imgs/AccountSVG';
import { AddImgsPlus } from '../../../../components/Imgs/AddImgsPlus';
import { ShiledSVG } from '../../../../components/Imgs/ShieldSVG';

type Props = {
  firstName: string | null;
  lastName: string | null;
};

export const AccountMainInfo: React.FC<Props> = ({ lastName, firstName }) => {
  return (
    <div className="account-main-info">
      <div className="account-main-info__container">
        <div className="account-main-info__img-block">
          <AccountSVG className="account-main-info__placehilder" />
          <AddImgsPlus className="account-main-info__svg" />
        </div>
        <div className="account-main-info__text-block">
          <p className="account-main-info__name">{`${firstName} ${lastName}`}</p>
          <p className="account-main-info__location">Україна, Київ </p>
          <div className="account-main-info__veryfic-status desc-tab">
            <ShiledSVG className="account-main-info__veryfic-svg" />
            <p className="account-main-info__veryfic-text">
              Акаунт не верифікований
            </p>
          </div>
        </div>
      </div>
      <div className="account-main-info__veryfic-status phone">
        <ShiledSVG className="account-main-info__veryfic-svg" />
        <p className="account-main-info__veryfic-text">
          Акаунт не верифікований
        </p>
      </div>
    </div>
  );
};
