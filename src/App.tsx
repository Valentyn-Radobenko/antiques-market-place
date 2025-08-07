import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { useEffect } from 'react';
import { fetchUserData } from './store/slices/userSlice';
import 'simplebar-react/dist/simplebar.min.css';
import './styles/_scrollbar.scss';

export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('market');
    }

    if (pathname === '/club/exhibitions') {
      navigate('/club/exhibitions/all');
    }
  }, [pathname, navigate]);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData());
    }
  }, [token, dispatch]);
  return (
    <>
      <div className="page__bg"></div>
      <Header />

      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
