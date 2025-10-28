import { NavLink, useLocation } from 'react-router-dom';
import { AccountSVG } from '../../../components/Imgs/AccountSVG';
import { CartSVG } from '../../../components/Imgs/CartSVG';
import { DiscussonsSVG } from '../../../components/Imgs/DiscussionsSVG';
import { Messaging } from '../../../components/Imgs/Messaging';
import { OrdersSVG } from '../../../components/Imgs/OrdersSVG';
import { SettingsSVG } from '../../../components/Imgs/SettingsSVG';
import { profileNav } from '../../../types/ProfileNav';
import { SetStateAction, Dispatch, useEffect } from 'react';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../../store/store';
import { useTranslation } from 'react-i18next';
import { setIsCartOpen } from '../../../store/slices/shoppingCartSlice';

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
  const location = useLocation();
  const currentPath = location.pathname
    .split('/')
    .filter((a) => a !== '')
    .at(-1);

  const dispatch = useDispatch<AppDispatch>();

  const lang = useSelector((state: SavingState) => state.language.language);
  const { t } = useTranslation();

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
      <h2 className="profile-menu__h2">{t('profile-menu__h2')}</h2>
      <div className="profile-menu__wrapper">
        {profileNavigation.map((item) => {
          return (
            <>
              {item.nameUa !== 'Корзина' && (
                <NavLink
                  onClick={() => setOpenMenu(true)}
                  to={`${item.slug}`}
                  key={item.slug}
                  className="profile-menu__item"
                >
                  <div
                    className={classNames('profile-menu__name', {
                      isActive:
                        currentPath === item.slug ||
                        (item.slug === 'account' && currentPath === 'me'),
                    })}
                  >
                    {item.svg}
                    <p>
                      {lang === 'ua' && item.nameUa}{' '}
                      {lang === 'en' && item.nameEng}
                    </p>
                  </div>
                  <ArrowTale className="profile-menu__svg" />
                </NavLink>
              )}
              {item.nameUa === 'Корзина' && (
                <div
                  onClick={() => {
                    setOpenMenu(true);
                    dispatch(setIsCartOpen(true));
                  }}
                  key={item.slug}
                  className="profile-menu__item"
                >
                  <div
                    className={classNames('profile-menu__name', {
                      isActive:
                        currentPath === item.slug ||
                        (item.slug === 'account' && currentPath === 'me'),
                    })}
                  >
                    {item.svg}
                    <p>
                      {lang === 'ua' && item.nameUa}{' '}
                      {lang === 'en' && item.nameEng}
                    </p>
                  </div>
                  <ArrowTale className="profile-menu__svg" />
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
