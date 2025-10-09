import { Link } from 'react-router-dom';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { FacebookLogoSVG } from '../../components/Imgs/FacebookLogoSVG';
import { MailSVG } from '../../components/Imgs/MailSVG';
import { TelegramLogoSVG } from '../../components/Imgs/TelegramLogoSVG';

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
          <div className="exhibition__content-articles">
            <article className="exhibition__content-article">
              <h4 className="exhibition__content-article-title">
                Історія VLP: Витоки та Вплив
              </h4>
              <p className="exhibition__content-article-text">
                Група VLP була заснована на початку 1980-х років і з тих пір
                стала символом французького вуличного мистецтва. Сьогодні у
                складі VLP – Мішель Еспаньйон та Жан Габаре – продовжують
                надихати нові покоління митців. Їхній внесок у розвиток
                урбаністичного мистецтва важко переоцінити: від перших
                аерозольних малюнків у районі Галлес до престижних виставок у
                провідних музеях та галереях світу.
                <br />
                Виставка "До/після": Мозаїка Часу та Творчості
                <br />
                Виставка "До/після" є унікальною можливістю зануритися у
                40-річну кар'єру VLP. Відвідувачі матимуть змогу побачити
                численні роботи, що демонструють еволюцію стилю та технік
                художників.
              </p>
            </article>

            <article className="exhibition__content-article">
              <h4 className="exhibition__content-article-title">
                Експозиція включає:
              </h4>
              <ul className="exhibition__content-article-list">
                <li className="exhibition__content-article-text">
                  Перші Аерозольні Малюнки: Відкрийте для себе перші кроки VLP у
                  світі стріт-арту, де простір міста стає полотном для
                  творчості.
                </li>

                <li className="exhibition__content-article-text">
                  Емблематичні Символи: Побачте народження та розвиток знакових
                  образів, які стали впізнаваними символами урбаністичного
                  мистецтва.
                </li>

                <li className="exhibition__content-article-text">
                  Тематичні Переходи: Дослідіть важливі теми, що проходять через
                  творчість VLP, від соціальних коментарів до естетичних
                  експериментів.
                </li>

                <li className="exhibition__content-article-text">
                  Виняткові Роботи: Особливі експонати, зібрані для цієї
                  виставки, ілюструють ключові моменти в кар'єрі VLP,
                  підкреслюючи їхній вплив та значущість.
                </li>
              </ul>
            </article>

            <article className="exhibition__content-article">
              <h4 className="exhibition__content-article-title">
                Повага до Майстерності та Спадщини
              </h4>
              <p className="exhibition__content-article-text">
                Fluctuart віддає належне VLP як ключовим постатям французького
                урбаністичного мистецтва. Ця виставка не лише демонструє їхні
                найкращі роботи, але й надає відвідувачам можливість глибше
                зрозуміти творчість та цінності, що стоять за кожним твором.
                Відкрийте для себе, як VLP трансформували вулиці Парижа та інших
                міст у живі галереї, де кожен штрих аерозолю розповідає свою
                унікальну історію.
                <br />
                Не Пропустіть!
                <br />
                Ця безкоштовна виставка – справжній must-see подія цієї зими.
                Відвідайте Fluctuart з 16 січня по 9 березня 2025 року та
                станьте свідками історії урбаністичного мистецтва, що
                формувалася протягом чотирьох десятиліть. Незалежно від того, чи
                ви шанувальник стріт-арту, чи просто шукаєте натхнення, виставка
                VLP обіцяє залишити незабутнє враження.
                <br />
                Приєднуйтесь до Подорожі в Часі з VLP у Fluctuart!
              </p>
            </article>

            <article className="exhibition__content-article">
              <h4 className="exhibition__content-article-title">
                Деталі Виставки:
              </h4>
              <ul className="exhibition__content-article-list">
                <li className="exhibition__content-article-text">
                  Назва: До/після: 40 Років VLP
                </li>

                <li className="exhibition__content-article-text">
                  Місце: Арт-центр Fluctuart
                </li>

                <li className="exhibition__content-article-text">
                  Адреса: 2 port du Gros Caillou, 75007 Paris, Франція
                </li>

                <li className="exhibition__content-article-text">
                  Тривалість: 16 січня – 9 березня 2025 року
                </li>

                <li className="exhibition__content-article-text">
                  Вхід: Безкоштовний
                </li>
                <p className="exhibition__content-article-text">
                  Не втрачайте можливість стати частиною історії вуличного
                  мистецтва разом із VLP. Чекаємо на вас у Fluctuart!
                </p>
              </ul>
            </article>
          </div>
        </div>
        <div className="exhibition__additional">
          <div className="exhibitions__offer exhibitions__offer--exhibition">
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

          <div className="exhibition__sm">
            <Link
              to={'https://web.telegram.org/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramLogoSVG className="exhibition__sm-icon" />
            </Link>
            <Link
              to={'https://www.facebook.com/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogoSVG className="exhibition__sm-icon" />
            </Link>
            <Link
              to="mailto:example@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailSVG className="exhibition__sm-icon" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
