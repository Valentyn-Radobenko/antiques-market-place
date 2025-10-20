import { useSelector } from 'react-redux';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { useWindowSize } from '../../../utils/useWindowSize';
import { AccountFullfiling } from './AccountFullfiling/AccountFullfiling';
import { AccountMainInfo } from './AccountMainInfo/AccountMainInfo';
import { RootState } from '../../../store/store';
import { AccountGeneral } from './AccountGeneral/AccountGeneral';
import { ExitSVG } from '../../../components/Imgs/ExitSVG';
import { ShiledCrossSVG } from '../../../components/Imgs/ShiledCrossSVG';
import { Verification } from './Verification/Verification';
import { useOutletContext } from 'react-router-dom';
import { OutletContextType } from '../../../types/openMenuOtlet';
import { PasswordEmail } from './PasswordEmail/PasswordEmail';
import { User } from '../../../types/user';

export const ProfileAccount = () => {
  const user: User = useSelector((state: RootState) => state.user);
  const windowSize = useWindowSize();
  const [setOpenMenu] = useOutletContext<OutletContextType>();

  return (
    <div className="profile-account">
      <div className="profile-page__section">
        <div className="profile-page__section-title">
          <ArrowTale
            onClick={() => setOpenMenu(false)}
            className="profile-page__section-arrow"
          />
          <h2 className="profile-page__section-h2">Акаунт</h2>
        </div>

        <AccountMainInfo
          firstName={user.firstName}
          lastName={user.lastName}
          city={user.city}
          country={user.country}
          verified={user.verified}
        />

        {windowSize.width < 1440 && <AccountFullfiling user={user} />}

        <PasswordEmail email={user.email || 'Додайте пошту'} />

        <AccountGeneral user={user} />

        <Verification />

        <div className="profile-account__exit-deleting">
          <div className="profile-account__exit">
            <ExitSVG />
            <p className="profile-account__exit-deleting-text">
              Вийти з акаунта
            </p>
          </div>
          <div className="profile-account__delete">
            <ShiledCrossSVG />
            <p className="profile-account__exit-deleting-text">
              Видалити акаунт{' '}
            </p>
          </div>
        </div>
      </div>
      {windowSize.width >= 1440 && <AccountFullfiling user={user} />}
    </div>
  );
};
