import { ExhibitionsSlider } from './components/Sliders/ExhibitionsSlider';
import { ArticlesSlider } from './components/Sliders/ArticlesSlider';
import { DiscussionsSlider } from './components/Sliders/DiscussionsSlider';
import { exhibitionsSlides } from './data/exhibitionsSlides';
import { articlesSlides } from './data/articlesSlides';
import { discussionsSlides } from './data/discussionsSlides';

export const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">Logo</div>
          <label className="header__search" htmlFor="search-input">
            <div className="header__search-bar">
              {''}
              <input
                id="search-input"
                type="text"
                className="header__search-input"
              />
              <button className="header__search-button">Пошук</button>
            </div>
          </label>
          <ul className="header__actions">
            <li>
              <button
                className="header__actions-item 
                  header__actions-item--currency"
                aria-label="Перемикач валюти"
              ></button>
            </li>
            <li>
              <button
                className="header__actions-item 
                  header__actions-item--language"
                aria-label="Перемикач мови"
              ></button>
            </li>
            <li>
              <button
                className="header__actions-item header__actions-item--questions"
                aria-label="Профіль користувача"
              ></button>
            </li>
            <li>
              <button
                className="header__actions-item header__actions-item--user"
                aria-label="Профіль користувача"
              ></button>
            </li>
          </ul>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <h1 className="hero__title">
            Колекційна спадщина - якість перевірена часом.
          </h1>
          <nav className="hero__nav">
            <ul className="hero__nav-list">
              <li className="hero__nav-item">
                <a className="hero__nav-link">Маркет</a>
              </li>
              <li className="hero__nav-item hero__nav-item--is-active">
                <a className="hero__nav-link">Клуб колекціонерів</a>
              </li>
              <li className="hero__nav-item">
                <a className="hero__nav-link">Експертиза</a>
              </li>
            </ul>
          </nav>
        </section>

        <ExhibitionsSlider slides={exhibitionsSlides} slidesPerView={1} />

        <ArticlesSlider slides={articlesSlides} slidesPerView={2} />

        <DiscussionsSlider slides={discussionsSlides} slidesPerView={2} />
      </main>

      <footer className="footer">
        <div className="footer__columns">
          <div className="footer__column">
            <h4 className="footer__title">Допомога</h4>
            <ul className="footer__list">
              <li>
                <a href="#" className="footer__link">
                  Торгуйте разом з Ducat
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Задати питання
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Аукціони
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__title">Політики та правила</h4>
            <ul className="footer__list">
              <li>
                <a href="#" className="footer__link">
                  Політика конфіденційності
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Умови використання
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__title">Познайомтесь з нами</h4>
            <ul className="footer__list">
              <li>
                <a href="#" className="footer__link">
                  Про Ducat
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Вакансії
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          © 2004 - 2025 Ducat Dubovyk&Ko. ТОВ «Ducat Dubovyk&Ko» / ЄОП Дубовик
          Вячеслав Вікторович. Всі права захищені. Для офіційних звернень:&nbsp;
          <a
            href="mailto:administration@ducat.ua"
            className="footer__copyright-link"
          >
            administration@ducat.ua
          </a>
        </div>
      </footer>
    </>
  );
};
