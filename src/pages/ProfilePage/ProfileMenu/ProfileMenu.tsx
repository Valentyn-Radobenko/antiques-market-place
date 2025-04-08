import { NavLink } from 'react-router-dom';
import { AccountSVG } from '../../../components/Imgs/AccountSVG';
import { CartSVG } from '../../../components/Imgs/CartSVG';
import { DiscussonsSVG } from '../../../components/Imgs/DiscussionsSVG';
import { Messaging } from '../../../components/Imgs/Messaging';
import { OrdersSVG } from '../../../components/Imgs/OrdersSVG';
import { SecuritySVG } from '../../../components/Imgs/SecuritySVG';
import { SettingsSVG } from '../../../components/Imgs/SettingsSVG';
import { profileNav } from '../../../types/ProfileNav';
import { SetStateAction, Dispatch, useEffect } from 'react';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';

const profileNavigation: profileNav[] = [
  {
    nameUa: 'Акаунт',
    nameEng: 'Account',
    slug: 'account',
    svg: <AccountSVG />,
  },
  {
    nameUa: 'Листування',
    nameEng: 'Messages',
    slug: 'messages',
    svg: <Messaging />,
  },
  {
    nameUa: 'Корзина',
    nameEng: 'Cart',
    slug: 'cart',
    svg: <CartSVG />,
  },
  {
    nameUa: 'Замовлення',
    nameEng: 'Orders',
    slug: 'orders',
    svg: <OrdersSVG />,
  },
  {
    nameUa: 'Обговорення',
    nameEng: 'Discussions',
    slug: 'discussions',
    svg: <DiscussonsSVG />,
  },
  {
    nameUa: 'Вхід і безпека',
    nameEng: 'Login and Security',
    slug: 'security',
    svg: <SecuritySVG />,
  },
  {
    nameUa: 'Налаштування',
    nameEng: 'Settings',
    slug: 'settings',
    svg: <SettingsSVG />,
  },
];

type Props = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  openMenu: boolean;
};

export const ProfileMenu: React.FC<Props> = ({ openMenu, setOpenMenu }) => {
  useEffect(() => {
    if (!openMenu) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openMenu]);

  return (
    <div className="profile-menu">
      {profileNavigation.map((item) => (
        <NavLink
          onClick={() => setOpenMenu(true)}
          to={`${item.slug}`}
          key={item.slug}
          className="profile-menu__item"
        >
          <div className="profile-menu__name">
            {item.svg}
            <p>{item.nameUa}</p>
          </div>
          <ArrowTale className="" />
        </NavLink>
      ))}
    </div>
  );
};
