import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './styles/index.scss';
import { App } from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { MarketPage } from './pages/MarketPage/MarketPage';
import { ExpertisePage } from './pages/ExpertisePage/ExpertisePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { StrictMode } from 'react';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
);
