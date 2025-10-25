import { useEffect, useRef, useState, Dispatch, SetStateAction } from 'react';
import { Arrow } from '../Imgs/Arrow';
import { Close } from '../Imgs/Close';
import classNames from 'classnames';
import SimpleBar from 'simplebar-react';
import { SettingsSVG } from '../Imgs/SettingsSVG';
import { ShiledSVG } from '../Imgs/ShieldSVG';
import { HandsSVG } from '../Imgs/HandsSVG';
import { ChatSVG } from '../Imgs/ChatSVG';
import { DocsSVG } from '../Imgs/DocsSVG';
import { CheckBookSVG } from '../Imgs/CheckBookSVG';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';

const rules = {
  ua: [
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
  ],
  en: [
    {
      name: 'General provisions',
      icon: <DocsSVG />,
      text: [
        'The Dukat platform community is created for communication between users, exchange of experiences, discussion of collectibles, antiques and other valuables.',
        'By registering in the community, the user agrees to these rules and undertakes to comply with them.',
        'The administration reserves the right to moderate content and take measures in case of violation of the rules.',
      ],
    },
    {
      name: 'Behavior in the community',
      icon: <HandsSVG />,
      text: [
        'Users are obliged to comply with the rules of politeness and respect in communication.',
        'The use of offensive, discriminatory or provocative language, as well as the publication of materials that incite hostility or hatred, is prohibited.',
        'The publication of spam, advertising or links to third-party resources without the consent of the administration is prohibited.',
        'It is forbidden to create accounts with fake or misleading data.',
      ],
    },
    {
      name: 'Content and publications',
      icon: <CheckBookSVG />,
      text: [
        "All materials that users publish in the community must correspond to the platform's theme - antiques, collecting, item evaluation, history, etc.",
        'It is forbidden to post materials that violate copyright or current legislation of Ukraine.',
        'In case of using images or texts from other sources, a link to the original must be provided.',
        'The administration reserves the right to delete content that violates the rules without warning.',
      ],
    },
    {
      name: 'User responsibility',
      icon: <ShiledSVG />,
      text: [
        'Users are fully responsible for the accuracy and reliability of the information they publish in the community.',
        'In case of violation of the community rules by the user access may be restricted or the account blocked.',
        'The administration is not responsible for the statements and actions of users, but will respond to violations of the rules if necessary.',
      ],
    },
    {
      name: 'Conflict resolution',
      icon: <ChatSVG />,
      text: [
        'In the event of conflict situations, the user is obliged to contact the administration to resolve them.',
        'Users are obliged to discuss the actions of the administration or the resolution of conflicts in the community.',
      ],
    },
    {
      name: 'Changes to the rules',
      icon: <SettingsSVG />,
      text: [
        'The platform administration reserves the right to change or supplement the rules for using the community.',
        'Continued participation in the community after making changes means automatic agreement with the updated rules.',
      ],
    },
  ],
};

type Props = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const DiscussionRules: React.FC<Props> = ({ setOpenModal }) => {
  const ref = useRef<(HTMLUListElement | null)[]>([]);
  const [openOptions, setOpenOptions] = useState<string[]>([]);

  const { t } = useTranslation();
  const lang = useSelector((state: SavingState) => state.language.language);

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
          openOptions.includes(rules[lang][index].name) ?
            `${ref.scrollHeight}px`
          : '0';
      }
    });
  }, [openOptions]);

  return (
    <div className="discussion-rules">
      <div className="discussion-rules__top-bar">
        <h2 className="discussion-rules__title">
          {t('discussion-rules__title')}
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
              {t('discussion-rules__helper')}
            </p>
            <div className="discussion-rules__wrapper">
              {rules[lang].map((rule, i) => {
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
            {t('discussion-rules__bottom-text')}
          </p>
        </div>
      </SimpleBar>
    </div>
  );
};
