import { Crumbs } from '../../components/Crumbs/Crumbs';

export const ExhibitionPage = () => {
  return (
    <>
      <Crumbs
        customClassName="exhibition__crumbs"
        links={['/club', '/club/exhibitions', '/exhibition']}
        titles={['Клуб колекціонерів', 'Виставки', 'Тема']}
      />

      <div className="exhibition">
        <div className="exhibition__details">
          <h4 className="exhibition__details-title">Деталі виставки</h4>
          <div className="exhibition__details-content">
            <div className="exhibition__details-block">
              <p className="exhibition__details-label">Джерело:</p>
              <p className="exhibition__details-value">Дубовик&Ко</p>
            </div>

            <div className="exhibition__details-block">
              <p className="exhibition__details-label">Подія:</p>
              <p className="exhibition__details-value">Досі триває</p>
            </div>

            <div className="exhibition__details-block">
              <p className="exhibition__details-label">Вхід:</p>
              <p className="exhibition__details-value">Дубовик&Ко</p>
            </div>

            <div className="exhibition__details-block">
              <p className="exhibition__details-label">Джерело:</p>
              <p className="exhibition__details-value">Дубовик&Ко</p>
            </div>

            <div className="exhibition__details-block">
              <p className="exhibition__details-label">Джерело:</p>
              <p className="exhibition__details-value">Дубовик&Ко</p>
            </div>

            <div className="exhibition__details-block">
              <p className="exhibition__details-label">Джерело:</p>
              <p className="exhibition__details-value">Дубовик&Ко</p>
            </div>
          </div>
        </div>
        <div className="exhibition__content">
          <h2 className="exhibition__content-title">
            VLP: Чотири Десятиліття Урбаністичного Майстерства – Ексклюзивна
            Ретроспектива у Fluctuart
          </h2>
          <img
            className="exhibition__content-img"
            src="./images/exhibitions/exhibition-3.png"
            alt="виставка"
          />
        </div>
        <div className="exhibition__additional">
          <div className="exhibitions__offer">
            <div className="exhibitions__offer-heading">
              <h3 className="exhibitions__offer-title">
                Запропонувати виставку
              </h3>
              <div className="exhibitions__offer-icon"></div>
            </div>
            <button className="exhibitions__offer-button">
              Додати виставку
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
