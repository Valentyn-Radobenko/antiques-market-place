import { useSelector } from 'react-redux';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { useWindowSize } from '../../../utils/useWindowSize';
import { AccountFullfiling } from './AccountFullfiling/AccountFullfiling';
import { AccountMainInfo } from './AccountMainInfo/AccountMainInfo';
import { RootState } from '../../../store/store';

export const ProfileAccount = () => {
  const { firstName, lastName } = useSelector((state: RootState) => state.user);
  const windowSize = useWindowSize();

  return (
    <div className="profile-account">
      <div className="profile-account__main-section">
        <div className="profile-account__title">
          <ArrowTale className="profile-account__arrow" />
          <h2 className="profile-account__h2">Акаунт</h2>
        </div>

        <AccountMainInfo
          firstName={firstName}
          lastName={lastName}
        />
        {windowSize.width < 1440 && <AccountFullfiling />}
        <div className="profile-account__info">
          <div className="profile-account__personal-info"></div>
          <div className="profile-account__contact-info"></div>
        </div>
        <div className="profile-account__verification"></div>
        <div className="profile-account__exit-deleting"></div>
      </div>
      {windowSize.width >= 1440 && <AccountFullfiling />}
    </div>
  );
};
