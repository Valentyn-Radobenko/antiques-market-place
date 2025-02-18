import { useSelector } from 'react-redux';
import { SavingState } from '../../../../store/store';
import classNames from 'classnames';

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
        <button className="exp-club__button">Виставки</button>
        <button className="exp-club__button">Статті</button>
        <button className="exp-club__button">Обговорення</button>
      </div>
    </>
  );
};
