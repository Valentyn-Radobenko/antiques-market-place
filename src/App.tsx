import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Hero />

        <Outlet />
      </main>
      <Footer />
    </>
  );
};
