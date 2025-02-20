import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { logout } from '../../store/slices/authSlice';
import { useEffect } from 'react';

export const ProfilePage = () => {
  const { firstName, lastName, phoneNumber, email, auctionNumber, verified } =
    useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!verified) {
      dispatch(logout());
    }
  }, [verified]);

  return (
    <>
      <h2>
        Тестова сторінка для перевірки роботи авторизації. Дизайн буде змінено
        після його затвердження.
      </h2>

      <p>Ім'я: {firstName}</p>
      <p>Прізвище: {lastName}</p>
      <p>Номер телефону: {phoneNumber}</p>
      <p>Логін: {email} </p>
      <p>Номер в аукціоні: {auctionNumber} </p>
      <p>
        Статус верифікації: {verified ? 'Верифікований' : 'Не верифікований'}
      </p>

      <button
        onClick={() => dispatch(logout())}
        className="logout-button"
      >
        Вийти
      </button>
    </>
  );
};
