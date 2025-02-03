import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { setAuthMode } from '../../../../store/slices/authModeSlice';

export const ExpAccount = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className="exp-account__buttons">
        <button
          onClick={() => dispatch(setAuthMode('login'))}
          className="exp-account__button"
        >
          Увійти
        </button>
        <button
          onClick={() => dispatch(setAuthMode('registration'))}
          className="exp-account__button"
        >
          Зареєструватись
        </button>
      </div>
    </>
  );
};
