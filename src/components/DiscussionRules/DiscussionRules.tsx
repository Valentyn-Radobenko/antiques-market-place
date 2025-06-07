import { useEffect, useRef, useState, Dispatch, SetStateAction } from 'react';
import { Arrow } from '../Imgs/Arrow';
import { Close } from '../Imgs/Close';
import { Info } from '../Imgs/Info';
import classNames from 'classnames';
import SimpleBar from 'simplebar-react';
import { SettingsSVG } from '../Imgs/SettingsSVG';
import { ShiledSVG } from '../Imgs/ShieldSVG';
import { HandsSVG } from '../Imgs/HandsSVG';
import { ChatSVG } from '../Imgs/ChatSVG';
import { DocsSVG } from '../Imgs/DocsSVG';
import { CheckBookSVG } from '../Imgs/CheckBookSVG';

const rules = [
  {
    name: 'Загальні положення',
    icon: <DocsSVG />,
    text: [
      'Спільнота платформи "Дукат" створена для спілкування між користувачами, обміну досвідом, обговорення колекційних предметів, антикваріату та інших цінностей.',
      'Реєструючись у спільноті, користувач погоджується з даними правилами та зобов’язується їх дотримуватися.',
      'Адміністрація залишає за собою право модерувати контент і вживати заходів у разі порушення правил.',
    ],
  },
  {
    name: 'Поведінка в спільноті',
    icon: <HandsSVG />,
    text: [
      'Користувачі зобов’язані дотримуватися правил ввічливості та поваги у спілкуванні.',
      'Заборонено використання образливої, дискримінаційної або провокаційної мови, а також публікація матеріалів, що розпалюють ворожнечу чи ненависть.',
      'Забороняється публікація спаму, реклами або посилань на сторонні ресурси без погодження з адміністрацією.',
      'Заборонено створювати облікові записи з фейковими або оманливими даними.',
    ],
  },
  {
    name: 'Контент і публікації',
    icon: <CheckBookSVG />,
    text: [
      'Усі матеріали, які користувачі публікують у спільноті, повинні відповідати тематиці платформи – антикваріат, колекціонування, оцінка предметів, історія тощо.',
      'Забороняється розміщення матеріалів, які порушують авторські права або чинне законодавство України.',
      'У разі використання зображень чи текстів з інших джерел необхідно вказувати посилання на оригінал.',
      'Адміністрація залишає за собою право видаляти контент, що суперечить правилам, без попередження.',
    ],
  },
  {
    name: 'Відповідальність користувачів',
    icon: <ShiledSVG />,
    text: [
      'Користувачі несуть повну відповідальність за точність та достовірність інформації, яку вони публікують у спільноті.',
      'У разі порушення правил спільноти користувачем може бути обмежено доступ або обліковий запис заблоковано.',
      'Адміністрація не несе відповідальності за висловлювання та дії користувачів, але за необхідності реагуватиме на порушення правил.',
    ],
  },
  {
    name: 'Вирішення конфліктів',
    icon: <ChatSVG />,
    text: [
      'У разі конфліктних ситуацій користувач зобов’язаний звертатися до адміністрації для їхнього вирішення.',
      'Користувачі зобов’язані обговорювати дії адміністрації або вирішення конфліктів у спільноті.',
    ],
  },
  {
    name: 'Зміни правил',
    icon: <SettingsSVG />,
    text: [
      'Адміністрація платформи залишає за собою право змінювати або доповнювати правила користування спільнотою.',
      'Продовження участі в спільноті після внесення змін означає автоматичну згоду з оновленими правилами.',
    ],
  },
];

type Props = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const DiscussionRules: React.FC<Props> = ({ setOpenModal }) => {
  const ref = useRef<(HTMLUListElement | null)[]>([]);
  const [openOptions, setOpenOptions] = useState<string[]>([]);

  const filterActiveOptions = (value: string) => {
    if (openOptions.includes(value)) {
      setOpenOptions(() => openOptions.filter((option) => option !== value));
    } else {
      setOpenOptions([...openOptions, value]);
    }
  };

  useEffect(() => {
    ref.current.forEach((ref, index) => {
      if (ref) {
        ref.style.height =
          openOptions.includes(rules[index].name) ?
            `${ref.scrollHeight}px`
          : '0';
      }
    });
  }, [openOptions]);

  return (
    <div className="discussion-rules">
      <div className="discussion-rules__top-bar">
        <Info className="discussion-rules__info-icon" />
        <h2 className="discussion-rules__title">
          Правила обговорень спільноти "DIKO"
        </h2>
        <Close
          onClick={() => setOpenModal(false)}
          className="discussion-rules__close-icon"
        />
      </div>
      <SimpleBar className="discussion-rules__simple-bar">
        <div className="discussion-rules__main">
          <div className="discussion-rules__list">
            <p className="discussion-rules__helper">
              Натисніть на розділ, щоб переглянути деталі.
            </p>
            <div className="discussion-rules__wrapper">
              {rules.map((rule, i) => {
                const isActive = openOptions.includes(rule.name);
                return (
                  <div
                    key={rule.name}
                    className="discussion-rules__item"
                  >
                    <div
                      onClick={() => filterActiveOptions(rule.name)}
                      className="discussion-rules__item-title"
                    >
                      <p
                        className={classNames('discussion-rules__special-ico', {
                          isActive: isActive,
                        })}
                      >
                        {rule.icon}
                      </p>
                      <p
                        className={classNames('discussion-rules__item-name', {
                          isActive: isActive,
                        })}
                      >
                        {rule.name}
                      </p>
                      <Arrow
                        className={classNames('discussion-rules__arrow', {
                          isActive: isActive,
                        })}
                      />
                    </div>
                    <ul
                      className="discussion-rules__rule-texts-list"
                      ref={(element) => (ref.current[i] = element)}
                    >
                      {rule.text.map((text, i) => (
                        <li
                          className="discussion-rules__rule-text"
                          key={i}
                        >
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="discussion-rules__bottom-text">
            Дані правила покликані створити комфортний простір для спілкування
            та обміну досвідом у спільноті платформи "DIKO".
          </p>
        </div>
      </SimpleBar>
    </div>
  );
};
