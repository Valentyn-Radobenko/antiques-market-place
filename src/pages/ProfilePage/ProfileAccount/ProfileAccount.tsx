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

export const ProfileAccount = () => {
  const { firstName, lastName } = useSelector((state: RootState) => state.user);
  const windowSize = useWindowSize();
  const [setOpenMenu] = useOutletContext<OutletContextType>();

  return (
    <div className="profile-account">
      <div className="profile-account__main-section">
        <div className="profile-page__section-title">
          <ArrowTale
            onClick={() => setOpenMenu(false)}
            className="profile-page__section-arrow"
          />
          <h2 className="profile-page__section-h2">Акаунт</h2>
        </div>

        <AccountMainInfo
          firstName={firstName}
          lastName={lastName}
        />
        {windowSize.width < 1440 && <AccountFullfiling />}
        <AccountGeneral />

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
      {windowSize.width >= 1440 && <AccountFullfiling />}
    </div>
  );
};
