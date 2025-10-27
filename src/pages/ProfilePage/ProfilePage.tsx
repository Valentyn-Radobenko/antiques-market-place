// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../../store/store';
// import { logout } from '../../store/slices/authSlice';
import { useState } from 'react';
// import { useEffect, useState } from 'react';
import { ProfileMenu } from './ProfileMenu/ProfileMenu';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export const ProfilePage = () => {
  // const { verified } = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch<AppDispatch>();
  const [openMenu, setOpenMenu] = useState(true);
  // const client = useSelector((state: RootState) => state.user);

  const { t } = useTranslation();

  // useEffect(() => {
  //   if (!verified) {
  //     dispatch(logout());
  //   }
  // }, [verified]);

  return (
    <div className="profile-page">
      <h1 className="profile-page__h2">{t('profile-menu__h2')}</h1>
      <div
        className={classNames('profile-page__wrapper', {
          nonActiveMenu: openMenu,
          isActive: !openMenu,
        })}
      >
        <ProfileMenu
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <div className="profile-page__content-wrapper">
          <Outlet context={[setOpenMenu]} />
        </div>
      </div>
    </div>
  );
};
