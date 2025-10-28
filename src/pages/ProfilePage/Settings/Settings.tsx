import { useOutletContext } from 'react-router-dom';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { OutletContextType } from '../../../types/openMenuOtlet';
import classNames from 'classnames';
import { useState } from 'react';
import { CirclePlusSVG } from '../../../components/Imgs/CirclePlusSVG';
import { MarkUnreadChatSVG } from '../../../components/Imgs/MarkUnreadChatSVG';
import { MarkAsUnreadSVG } from '../../../components/Imgs/MarkAsUnreadSVG';
import { useSelector } from 'react-redux';
import { SavingState } from '../../../store/store';
import { useTranslation } from 'react-i18next';

const baseSettings = {
  ua: [
    {
      title: 'E-mail сповіщення',
      icon: <MarkAsUnreadSVG />,
      options: [
        {
          label: 'Системні сповіщення (важливі оновлення платформи)',
          enabled: true,
        },
        {
          label: 'Сповіщення про підтвердження замовлень та транзакцій',
          enabled: true,
        },
        {
          label: 'Зміни в акаунті (оновлення пароля, верифікація)',
          enabled: true,
        },
        {
          label: "Сповіщення щодо статусу запропонованих 'Виставки'",
          enabled: true,
        },
        {
          label:
            "Сповіщення про нові коментарі та відповіді в розділі 'Обговорення'",
          enabled: true,
        },
      ],
    },
    {
      title: 'Пуш-сповіщення',
      icon: <MarkUnreadChatSVG />,
      options: [
        {
          label: 'Отримання нових повідомлень та пропозицій в реальному часі',
          enabled: true,
        },
        {
          label:
            'Нагадування про необхідність оновлення профілю/заповнення деталей',
          enabled: true,
        },
        { label: 'Термінові повідомлення про безпеку акаунту', enabled: true },
      ],
    },
    {
      title: 'Додаткові налаштування',
      icon: <CirclePlusSVG />,
      options: [
        { label: 'Звуковий сигнал для нових повідомлень', enabled: true },
        { label: '“Не турбувати”', enabled: false },
      ],
    },
  ],
  en: [
    {
      title: 'Email notifications',
      icon: <MarkAsUnreadSVG />,
      options: [
        {
          label: 'System notifications (important platform updates)',
          enabled: true,
        },
        {
          label: 'Notifications about order and transaction confirmations',
          enabled: true,
        },
        {
          label: 'Account changes (password update, verification)',
          enabled: true,
        },
        {
          label: "Notifications about the status of proposed 'Exhibitions'",
          enabled: true,
        },
        {
          label:
            "Notifications about new comments and replies in the 'Discussion' section",
          enabled: true,
        },
      ],
    },
    {
      title: 'Push notifications',
      icon: <MarkUnreadChatSVG />,
      options: [
        {
          label: 'Receive new messages and offers in real time',
          enabled: true,
        },
        {
          label: 'Reminders to update profile/fill in details',
          enabled: true,
        },
        { label: 'Urgent account security notifications', enabled: true },
      ],
    },
    {
      title: 'Advanced settings',
      icon: <CirclePlusSVG />,
      options: [
        { label: 'Sound for new messages', enabled: true },
        { label: '“Do not disturb”', enabled: false },
      ],
    },
  ],
};

export const Settings = () => {
  const [setOpenMenu] = useOutletContext<OutletContextType>();

  const lang = useSelector((state: SavingState) => state.language.language);
  const { t } = useTranslation();

  const [settings, setSettings] = useState(baseSettings[lang]);

  const handleToggleEnabled = (sectionName: string, optionLabel: string) => {
    setSettings((prev) =>
      prev.map((section) =>
        section.title === sectionName ?
          {
            ...section,
            options: section.options.map((option) =>
              option.label === optionLabel ?
                { ...option, enabled: !option.enabled }
              : option,
            ),
          }
        : section,
      ),
    );
  };

  return (
    <div className="profile-page__section">
      <div className="profile-page__section-title">
        <ArrowTale
          onClick={() => {
            setOpenMenu(false);
          }}
          className="profile-page__section-arrow"
        />
        <h2 className="profile-page__section-h2">{t('settings')}</h2>
      </div>
      <div className="settings">
        <h3 className="settings__title">{t('settings__title')}</h3>
        {settings.map((section) => (
          <div
            key={section.title}
            className="settings__section"
          >
            <div className="settings__section-title">
              {section.icon}
              <h4 className="settings__section-h4">{section.title}</h4>
            </div>
            <div className="settings__options">
              {section.options.map((singleOPtioin) => (
                <div
                  key={singleOPtioin.label}
                  className="settings__option"
                >
                  <p className="settings__option-title">
                    {singleOPtioin.label}
                  </p>
                  <div
                    onClick={() =>
                      handleToggleEnabled(section.title, singleOPtioin.label)
                    }
                    className={classNames('settings__option-status', {
                      isActive: singleOPtioin.enabled,
                    })}
                  >
                    <div
                      className={classNames('settings__option-circle', {
                        isActive: singleOPtioin.enabled,
                      })}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
