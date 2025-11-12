// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../../store/store';
// import { logout } from '../../store/slices/authSlice';
import { useState, useRef } from 'react';
// import { useEffect, useState } from 'react';
import { ProfileMenu } from './ProfileMenu/ProfileMenu';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';

export const ProfilePage = () => {
  // const { verified } = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch<AppDispatch>();
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // const client = useSelector((state: RootState) => state.user);

  // useEffect(() => {
  //   if (!verified) {
  //     dispatch(logout());
  //   }
  // }, [verified]);

  console.log(ref.current?.clientHeight);

  return (
    <div
      style={{ height: !openMenu ? ref.current?.clientHeight : 'auto' }}
      className="profile-page"
    >
      <h1 className="profile-page__h2">Мій кабінет</h1>
      <div
        className={classNames('profile-page__wrapper', {
          nonActiveMenu: openMenu,
          isActive: !openMenu,
        })}
      >
        <ProfileMenu
          ref={ref}
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
