export const ItemEvaluation = () => {
  return (
    <div className="item-evaluation">
      <h2 className="item-evaluation__h2">
        Оберіть необхідний варіант оцінювання предмета :
      </h2>
      <div className="item-evaluation__cards">
        <div className="item-evaluation__card card">
          <div className="card__text-block">
            <div className="card__text">
              <h2 className="card__h2">Базова оцінка предмета</h2>
              <div className="card__price">
                <h4 className="card__price-h4">Середня вартість:</h4>
                <p className="card__price-text">
                  Оцінка: 400 грн. + 2% від вартості предмету
                </p>
              </div>
              <ul className="card__list">
                <h4 className="card__h4">Що отримає власник лоту:</h4>
                <li className="card__item">Опис характеристик предмета.</li>
                <li className="card__item">
                  Оцінка (в якому стані предмет) та орієнтовна вартість.
                </li>
              </ul>
            </div>
            <div className="card__buttons">
              <button className="card__button light">Дізнатися більше</button>
              <button className="card__button dark">Подати заявку</button>
            </div>
          </div>
          <img
            className="card__img"
            src="images\expertise\Photo.png"
            alt=""
          />
        </div>
      </div>
      <div className="item-evaluation__cards">
        <div className="item-evaluation__card card">
          <div className="card__text-block">
            <div className="card__text">
              <h2 className="card__h2">Експертиза</h2>
              <div className="card__price">
                <h4 className="card__price-h4">Середня вартість:</h4>
                <p className="card__price-text">
                  Проста експертиза: 2000 грн + 2% від оцінки вартості.
                </p>
              </div>
              <ul className="card__list">
                <h4 className="card__h4">Що отримає власник лоту:</h4>
                <li className="card__item">
                  Офіційний сертифікат автентичності.
                </li>
                <li className="card__item">Опис характеристик предмета.</li>
                <li className="card__item">
                  Підтвердження, яке визнається професійною спільнотою. <br />{' '}
                  Міжнародний сертифікат.
                </li>
              </ul>
            </div>
            <div className="card__buttons">
              <button className="card__button light">Дізнатися більше</button>
              <button className="card__button dark">Подати заявку</button>
            </div>
          </div>
          <img
            className="card__img"
            src="images\expertise\Photo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
