import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const ProfilePage = () => {
  const { firstName, lastName, phoneNumber, email, auctionNumber, verified } =
    useSelector((state: RootState) => state.user);

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
    </>
  );
};
