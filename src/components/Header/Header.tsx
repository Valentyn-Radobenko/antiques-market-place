export const Header = () => {
  return (
    <header className="header page__header">
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
  );
};
