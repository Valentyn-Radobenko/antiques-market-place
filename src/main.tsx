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
import { ProfileAccount } from './pages/ProfilePage/ProfileAccount/ProfileAccount';
import { Cart } from './pages/ProfilePage/Cart/Cart';
import { Discussions } from './pages/ProfilePage/Discussions/Discussions';
import { Messages } from './pages/ProfilePage/Messages/Messages';
import { Orders } from './pages/ProfilePage/Orders/Orders';
import { Security } from './pages/ProfilePage/Security/Security';
import { Settings } from './pages/ProfilePage/Settings/Settings';
import { ArticlesPage } from './pages/ArticlesPage/ArticlesPage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { ExhibitionPage } from './pages/ExhibitionPage/ExhibitionPage';
import { ExhibitionsNoContent } from './pages/ExhibitionsPage/ExhibitionsNoContent';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
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

              <Route
                path="product/:slug"
                element={<ProductPage />}
              />
            </Route>

            <Route path="club">
              <Route element={<ClubPage />} />
              <Route
                path=":slug?"
                element={<ClubPage />}
              />

              <Route
                path="exhibition/:slug"
                element={<ExhibitionPage />}
              />
            </Route>

            <Route
              path="exhibition"
              element={<ExhibitionPage />}
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
              <Route
                path="no-content"
                element={<ExhibitionsNoContent />}
              />
            </Route>
            <Route
              path="club/articles"
              element={<ArticlesPage />}
            />
            <Route
              path="expertise"
              element={<ExpertisePage />}
            />
            <Route element={<PrivateRoute />}>
              <Route
                path="me"
                element={<ProfilePage />}
              >
                <Route
                  index
                  element={<ProfileAccount />}
                />
                <Route
                  path="account"
                  element={<ProfileAccount />}
                />
                <Route
                  path="cart"
                  element={<Cart />}
                />
                <Route
                  path="discussions"
                  element={<Discussions />}
                />
                <Route
                  path="messages"
                  element={<Messages />}
                />
                <Route
                  path="orders"
                  element={<Orders />}
                />
                <Route
                  path="security"
                  element={<Security />}
                />
                <Route
                  path="settings"
                  element={<Settings />}
                />
              </Route>
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
