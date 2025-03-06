import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './styles/index.scss';
import { App } from './App';
import { ClubPage } from './pages/ClubPage/ClubPage';
import { MarketPage } from './pages/MarketPage/MarketPage';
import { ExpertisePage } from './pages/ExpertisePage/ExpertisePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { StrictMode } from 'react';
import './i18n/i18n';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { ExhibitionsPage } from './pages/ExhibitionsPage/ExhibitionsPage';
import { AllExhibitions } from './pages/ExhibitionsPage/Exhibitions/AllExhibitions';
import { OngoingExhibitions } from './pages/ExhibitionsPage/Exhibitions/OngoingExhibitions';
import { CompletedExhibitions } from './pages/ExhibitionsPage/Exhibitions/CompletedExhibitions';
import { PlannedExhibitions } from './pages/ExhibitionsPage/Exhibitions/PlannedExhibitions';

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
              element={<MarketPage />}
            />

            <Route path="market">
              <Route element={<MarketPage />} />
              <Route
                path=":slug?"
                element={<MarketPage />}
              />
            </Route>

            <Route
              path="club"
              element={<ClubPage />}
            />

            <Route
              path="club/exhibitions"
              element={<ExhibitionsPage />}
            >
              <Route
                index
                element={<AllExhibitions />}
              />
              <Route
                path="all"
                element={<AllExhibitions />}
              />
              <Route
                path="ongoing"
                element={<OngoingExhibitions />}
              />
              <Route
                path="completed"
                element={<CompletedExhibitions />}
              />
              <Route
                path="planned"
                element={<PlannedExhibitions />}
              />
            </Route>

            <Route
              path="expertise"
              element={<ExpertisePage />}
            />

            <Route element={<PrivateRoute />}>
              <Route
                path="me"
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
