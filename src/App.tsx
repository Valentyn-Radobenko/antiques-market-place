import { Exhibitions } from './components/Exhibitions';

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

        <Exhibitions />

        <section className="articles">
          <div className="section-header">
            <h2 className="section-header__title">Статті</h2>
            <a href="#" className="section-header__link">
              дізнатися більше
            </a>
          </div>
          <div className="articles__list">
            <div className="article-card">
              <div className="article-card__image"></div>
              <div className="article-card__details">
                <h3 className="article-card__title">
                  Виставка народного Художника України Володимира Козюка
                </h3>
                <div className="article-card__tags">
                  <span className="article-card__tag">Нова</span>
                  <span className="article-card__tag">Живопис</span>
                </div>
                <button className="article-card__button">Читати</button>
              </div>
            </div>
          </div>
        </section>

        <section className="discussions">
          <div className="section-header">
            <h2 className="section-header__title">Обговорення</h2>
            <button className="section-header__button">Додати тему</button>
          </div>
          <div className="discussions__list">
            <div className="discussion-card">
              <div className="discussion-card__header">
                <span className="discussion-card__id">037645</span>
                <span className="discussion-card__time">08:09 14.07</span>
              </div>
              <h3 className="discussion-card__title">
                Архістратіг іпрчлвкопд в вкп щупту к чертветк...
              </h3>
              <div className="discussion-card__footer">
                <span className="discussion-card__category">Живопис</span>
                <span className="discussion-card__comments">58 коментарів</span>
              </div>
            </div>
          </div>
        </section>
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
          Вячеслав Вікторович. Всі права захищені. Для офіційних звернень:
          administration@ducat.ua
        </div>
      </footer>
    </>
  );
};
