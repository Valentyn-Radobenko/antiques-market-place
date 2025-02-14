import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { useEffect } from 'react';
import { fetchUserData } from './store/slices/userSlice';

export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData());
    }
  }, [token, dispatch]);
  return (
    <>
      <Header />

      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
