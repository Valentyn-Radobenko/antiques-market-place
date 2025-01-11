import infoOutline from '/images/expertise/info-outline.svg';
import examplePhoto from '/images/expertise/Photo.png';
import { Tooltip } from '../../components/Tooltip/Tooltip';

export const ExpertisePage = () => {
  return (
    <section className="expertise">
      <div className="expertise__heading">
        <h2 className="expertise__heading-text">
          Оцінювання та експертиза лотів
        </h2>
        <Tooltip
          customTooltipClassName="expertise__tooltip"
          customContentClassName="expertise__tooltip-content"
          renderButton={() => (
            <img
              className="expertise__heading-icon"
              alt="Info icon"
              src={infoOutline}
            />
          )}
          renderContent={() => (
            <>
              <h4 className="expertise__tooltip-title">
                Рекомендації для вибору послуги:
              </h4>
              <br />
              <ul className="expertise__tooltip-list">
                <li className="expertise__tooltip-item">
                  Якщо ви <b>лише цікавитесь вартістю</b> — достатньо базової
                  оцінки.
                </li>
                <br />
                <li className="expertise__tooltip-item">
                  Для
                  <b> продажу, страхування чи підтвердження автентичності</b> —
                  підходить детальна оцінка та сертифікація автентичності.
                </li>
              </ul>
              <br />
              <p className="expertise__tooltip-info">
                Це не тільки забезпечить вас потрібною інформацією, але й
                дозволить максимально ефективно використати ваш бюджет.
              </p>
            </>
          )}
        />
      </div>

      <article className="expertise__steps">
        <h3 className="expertise__steps-title">
          Отримайте професійну оцінку вашого предмета.
        </h3>
        <h4 className="expertise__steps-minor-title">
          Виконайте п’ять простих кроків:
        </h4>
        <div className="expertise__steps-list">
          <div className="expertise__steps-item">
            <div className="expertise__steps-item-img-wrapper">
              <img
                className="expertise__steps-item-img"
                alt="Step icon"
                src={examplePhoto}
              />
            </div>
            <div className="expertise__steps-item-content">
              <h5 className="expertise__steps-item-title">
                1. Ознайомтеся з видами оцінки.
              </h5>

              <p className="expertise__steps-item-text">
                Оберіть послугу, яка найкраще відповідає вашим потребам: базова
                оцінка чи підготовка сертифіката автентичності.
              </p>
            </div>
          </div>
          <div className="expertise__steps-item">
            <div className="expertise__steps-item-img-wrapper">
              <img
                className="expertise__steps-item-img"
                alt="Step icon"
                src={examplePhoto}
              />
            </div>
            <div className="expertise__steps-item-content">
              <h5 className="expertise__steps-item-title">
                2. Заповніть коротку форму
              </h5>

              <p className="expertise__steps-item-text">
                Додайте відому інформацію про ваш лот та завантажте якісні
                фотографії, які чітко відображають предмет з різних ракурсів.
              </p>
            </div>
          </div>
          <div className="expertise__steps-item">
            <div className="expertise__steps-item-img-wrapper">
              <img
                className="expertise__steps-item-img"
                alt="Step icon"
                src={examplePhoto}
              />
            </div>
            <div className="expertise__steps-item-content">
              <h5 className="expertise__steps-item-title">
                3. Надішліть заявку.
              </h5>

              <p className="expertise__steps-item-text">
                Після відправки наші експерти почнуть опрацьовувати ваш запит.
              </p>
            </div>
          </div>
          <div className="expertise__steps-item">
            <div className="expertise__steps-item-img-wrapper">
              <img
                className="expertise__steps-item-img"
                alt="Step icon"
                src={examplePhoto}
              />
            </div>
            <div className="expertise__steps-item-content">
              <h5 className="expertise__steps-item-title">
                4. Очікуйте на відповідь
              </h5>

              <p className="expertise__steps-item-text">
                Ви отримаєте попередню інформацію щодо цінності предмету та
                вартості обраної послуги.
              </p>
            </div>
          </div>
          <div className="expertise__steps-item">
            <div className="expertise__steps-item-img-wrapper">
              <img
                className="expertise__steps-item-img"
                alt="Step icon"
                src={examplePhoto}
              />
            </div>
            <div className="expertise__steps-item-content">
              <h5 className="expertise__steps-item-title">
                5. Підтвердіть запит.
              </h5>

              <p className="expertise__steps-item-text">
                Оплатіть послугу та отримайте змістовну оцінку.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="expertise__options">
        <h3 className="expertise__options-title">
          Оберіть необхідний варіант оцінювання предмета:
        </h3>
        <div className="expertise__options-items">
          <div className="expertise__options-item">
            <b className="expertise__options-item-header">
              1. Базова оцінка предмета
            </b>
            <div className="expertise__options-item-content">
              <div className="expertise__options-item-details">
                <div className="expertise__options-item-details-label">
                  Що це:
                </div>
                <p className="expertise__options-item-details-description">
                  Коротка консультація або базова оцінка, яка дає загальне
                  уявлення про предмет. Ви дізнаєтеся його орієнтовну вартість
                  та контекст: історію, приблизний вік, стиль чи значення.
                </p>
                <p className="expertise__options-item-details-description">
                  ВАЖЛИВО! Оцінка проводиться за візуальними характеристиками;
                  обов’язково надайте фото хорошої якості.
                </p>
              </div>
              <div className="expertise__options-item-details">
                <div className="expertise__options-item-details-label">
                  Середня вартість:
                </div>
                <p className="expertise__options-item-details-description">
                  400 грн. + 2% від вартості предмету
                </p>
              </div>
            </div>
            <button className="expertise__options-item-button">
              Подати заявку
            </button>
          </div>
          <div className="expertise__options-item">
            <b className="expertise__options-item-header">
              2. Експертиза. <br />
              Отримати сертифікат автентичності
            </b>
            <div className="expertise__options-item-content">
              <div className="expertise__options-item-details">
                <div className="expertise__options-item-details-label">
                  Що це:
                </div>
                <p className="expertise__options-item-details-description">
                  Професійний висновок, що підтверджує оригінальність предмета.
                  Підписується експертом і може бути використаний для продажу,
                  розміщення в музеях, аукціонах та інших платформах.
                </p>
                <p className="expertise__options-item-details-description">
                  ВАЖЛИВО! Експертиза завжди проводиться за допомогою фізичного
                  контакту з предметом, тому для отримання об’єктивного
                  результату необхідно надати предмет оцінки.
                </p>
                <p className="expertise__options-item-details-description">
                  Предмет можна передати на експертизу за допомогою послуг нової
                  пошти або при особистій зустрічі. Експертиза займає від 10
                  днів до 1 місяця.
                </p>
              </div>
              <div className="expertise__options-item-details">
                <div className="expertise__options-item-details-label">
                  Середня вартість:
                </div>
                <ul className="expertise__options-item-details-price-list">
                  <li
                    className="expertise__options-item-details-description
                  expertise__options-item-details-description--list-style-disc"
                  >
                    Проста експертиза: 2000 грн + 2% від оцінки вартості.
                  </li>
                  <li
                    className="expertise__options-item-details-description
                  expertise__options-item-details-description--list-style-disc"
                  >
                    Розширена: 10 000 грн (залежно від складності досліджень).
                  </li>
                </ul>
              </div>
              <div className="expertise__options-item-details">
                <div className="expertise__options-item-details-label">
                  Що отримає власник лоту:
                </div>
                <ul className="expertise__options-item-details-benefits-list">
                  <li
                    className="expertise__options-item-details-description
                  expertise__options-item-details-description--list-style-disc"
                  >
                    Офіційний сертифікат автентичності.
                  </li>
                  <li
                    className="expertise__options-item-details-description
                  expertise__options-item-details-description--list-style-disc"
                  >
                    Опис характеристик предмета.
                  </li>
                  <li
                    className="expertise__options-item-details-description
                  expertise__options-item-details-description--list-style-disc"
                  >
                    Підтвердження, яке визнається професійною спільнотою.
                  </li>
                </ul>
              </div>
            </div>
            <button className="expertise__options-item-button">
              Подати заявку
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};
