import { useSelector } from 'react-redux';
import { SavingState } from '../../../../store/store';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const ExpClub: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: SavingState) => state.auth.isAuthenticated,
  );

  return (
    <>
      <div
        className={classNames('exp-club__buttons', {
          'exp-club__buttons--not-auth': !isAuthenticated,
        })}
      >
        <Link
          to={'club/exhibitions'}
          className="exp-club__button"
        >
          Виставки
        </Link>
        <button className="exp-club__button">Статті</button>
        <button className="exp-club__button">Обговорення</button>
      </div>
    </>
  );
};
