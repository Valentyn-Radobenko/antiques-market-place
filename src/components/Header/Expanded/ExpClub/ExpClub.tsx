// import { useSelector } from 'react-redux';
// import { SavingState } from '../../../../store/store';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const ExpClub: React.FC = () => {
  // const isAuthenticated = useSelector(
  //   (state: SavingState) => state.auth.isAuthenticated,
  // );
  const { t } = useTranslation();

  return (
    <>
      <div
        className={classNames('exp-club__buttons', {
          'exp-club__buttons--not-auth': false,
        })}
      >
        <Link
          to={'club/exhibitions'}
          className="exp-club__button"
        >
          {t('exhibitions')}
        </Link>
        <Link
          to={'club/articles'}
          className="exp-club__button"
        >
          {t('articles')}
        </Link>
        <Link
          to={'club/discussions'}
          className="exp-club__button"
        >
          {t('discussions')}
        </Link>
      </div>
    </>
  );
};
