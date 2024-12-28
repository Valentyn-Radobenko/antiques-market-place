export const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">Logo</div>
          <label htmlFor="header__search-input" className="header__search">
            <input
              id="header__search-input"
              type="text"
              className="header__search-input"
              placeholder="Пошук"
            />
            <input
              type="search"
              className="header__search-button"
              placeholder="Пошук"
            />
          </label>
          <div className="header__actions">
            <span className="header__currency">₴</span>
            <span className="header__language">UA</span>
            <span className="header__profile">🔒</span>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <h1 className="hero__title">
            Колекційна спадщина - якість перевірена часом.
          </h1>
          <nav className="hero__nav">
            <button className="hero__nav-button">Маркет</button>
            <button className="hero__nav-button">Клуб колекціонерів</button>
            <button className="hero__nav-button">Експертиза</button>
          </nav>
        </section>

        <section className="exhibitions">
          <div className="section-header">
            <h2 className="section-header__title">Виставки</h2>
            <a href="#" className="section-header__link">
              дізнатися більше
            </a>
          </div>
          <div className="exhibitions__carousel">
            <div className="exhibition-card">
              <div className="exhibition-card__image"></div>
              <div className="exhibition-card__details">
                <h3 className="exhibition-card__title">
                  Виставка народного Художника України Володимира Козюка
                </h3>
                <span className="exhibition-card__status">Відбулася</span>
              </div>
            </div>
          </div>
        </section>

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
