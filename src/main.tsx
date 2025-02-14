import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './styles/index.scss';
import { App } from './App';
import { HomePage } from './pages/ClubPage/ClubPage';
import { MarketPage } from './pages/MarketPage/MarketPage';
import { ExpertisePage } from './pages/ExpertisePage/ExpertisePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { StrictMode } from 'react';
import './i18n/i18n';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<App />}
          >
            <Route
              index
              element={<HomePage />}
            />
            <Route
              path="/market"
              element={<MarketPage />}
            />
            <Route
              path="/expertise"
              element={<ExpertisePage />}
            />
            <Route element={<PrivateRoute />}>
              <Route
                path="/me"
                element={<ProfilePage />}
              />
            </Route>
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
);
