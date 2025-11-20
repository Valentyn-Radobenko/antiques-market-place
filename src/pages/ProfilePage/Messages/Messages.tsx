import SimpleBar from 'simplebar-react';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { OutletContextType } from '../../../types/openMenuOtlet';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Chat } from './Chat/Chat';
import { ActiveChat } from './ActiveChat/ActiveChat';
import { ChatT } from '../../../types/chatTypes';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SavingState } from '../../../store/store';

const testMessages: ChatT[] = [
  {
    id: '1',
    name: 'Системні сповіщення',
    sender: 'Платформа DIKO',
    canAnswer: false,
    messages: [
      {
        id: '1',
        sender: 'webSite',
        messageTitle: 'Вітаємо на Diko!',
        messageText:
          'Ви успішно зареєструвалися! Заповніть профіль та пройдіть верифікацію, щоб отримати повний доступ до платформи.',
        date: new Date('2025-03-22T08:09:00'),
        status: 'read',
      },
      {
        id: '2',
        sender: 'webSite',
        messageTitle: 'Нові надходження у розділі "Монети України"',
        messageText:
          'Щойно додано рідкісні монети та унікальні лоти. Перегляньте, перш ніж їх розкуплять!',
        date: new Date('2025-03-23T10:20:00'),
        status: 'read',
      },
      {
        id: '3',
        sender: 'webSite',
        messageTitle: 'Знижки до Дня колекціонера!',
        messageText: 'Отримайте до 20% знижки на всі монети до кінця тижня.',
        date: new Date('2025-03-25T12:45:00'),
        status: 'unread',
      },
      {
        id: '4',
        sender: 'webSite',
        messageTitle: 'Оновлення політики безпеки',
        messageText:
          'Ми вдосконалили політику конфіденційності, щоб краще захищати ваші дані.',
        date: new Date('2025-03-26T09:10:00'),
        status: 'read',
      },
      {
        id: '5',
        sender: 'webSite',
        messageTitle: 'Покращення функціоналу чату',
        messageText:
          'Тепер ви можете надсилати зображення та документи безпосередньо у повідомленнях.',
        date: new Date('2025-03-28T15:33:00'),
        status: 'unread',
      },
    ],
  },
  {
    id: '2',
    name: 'Чат підтримки',
    sender: 'Платформа DIKO',
    canAnswer: true,
    messages: [
      {
        id: '1',
        sender: 'webSite',
        messageTitle: 'Вітаємо! Як можемо допомогти?',
        messageText: 'Опишіть, будь ласка, вашу проблему або запитання.',
        date: new Date('2025-03-22T08:09:23'),
        status: 'read',
      },
      {
        id: '2',
        sender: 'client',
        messageText: 'Добрий день! Не можу оплатити замовлення.',
        date: new Date('2025-03-22T08:21:00'),
        status: 'read',
      },
      {
        id: '3',
        sender: 'webSite',
        messageText: 'Будь ласка, уточніть, який метод оплати ви обираєте?',
        date: new Date('2025-03-22T08:23:10'),
        status: 'read',
      },
      {
        id: '4',
        sender: 'client',
        messageText: 'Карткою через LiqPay, але з’являється помилка.',
        date: new Date('2025-03-22T08:25:40'),
        status: 'read',
      },
      {
        id: '5',
        sender: 'webSite',
        messageText:
          'Ми передали інформацію технічному відділу. Спробуйте повторити оплату через 5–10 хвилин.',
        date: new Date('2025-03-22T08:30:00'),
        status: 'read',
      },
      {
        id: '6',
        sender: 'client',
        messageText: 'Дякую, все спрацювало!',
        date: new Date('2025-03-22T08:35:00'),
        status: 'read',
      },
    ],
  },
  {
    id: '3',
    name: 'Замовлення',
    sender: 'Маркет',
    canAnswer: true,
    messages: [
      {
        id: '1',
        sender: 'webSite',
        messageTitle: 'Ваше замовлення прийнято!',
        messageText: 'Номер замовлення: #10245. Очікує підтвердження.',
        date: new Date('2025-03-22T08:09:23'),
        status: 'read',
      },
      {
        id: '2',
        sender: 'webSite',
        messageText: 'Ваше замовлення передано до перевізника “Нова Пошта”.',
        date: new Date('2025-03-23T09:12:00'),
        status: 'read',
      },
      {
        id: '3',
        sender: 'client',
        messageText: 'Коли очікувати доставку?',
        date: new Date('2025-03-23T09:30:00'),
        status: 'read',
      },
      {
        id: '4',
        sender: 'webSite',
        messageText: 'Доставка очікується 25 березня.',
        date: new Date('2025-03-23T09:32:00'),
        status: 'read',
      },
      {
        id: '5',
        sender: 'client',
        messageText: 'Дякую за інформацію!',
        date: new Date('2025-03-23T09:35:00'),
        status: 'read',
      },
    ],
  },
  {
    id: '4',
    name: 'Оцінювання та сертифікація',
    sender: 'Експертиза',
    canAnswer: true,
    messages: [
      {
        id: '1',
        sender: 'webSite',
        messageTitle: 'Заявку отримано',
        messageText:
          'Вашу монету прийнято на оцінювання. Очікуйте відповідь експерта протягом 24 годин.',
        date: new Date('2025-03-22T08:09:23'),
        status: 'read',
      },
      {
        id: '2',
        sender: 'client',
        messageText: 'Доброго дня! Чи можна пришвидшити процес оцінки?',
        date: new Date('2025-03-22T08:25:00'),
        status: 'read',
      },
      {
        id: '3',
        sender: 'webSite',
        messageText:
          'Так, ви можете обрати експрес-оцінку (до 2 годин) за додаткову плату.',
        date: new Date('2025-03-22T08:30:00'),
        status: 'read',
      },
      {
        id: '4',
        sender: 'client',
        messageText: 'Добре, тоді обираю експрес.',
        date: new Date('2025-03-22T08:33:00'),
        status: 'read',
      },
      {
        id: '5',
        sender: 'webSite',
        messageText:
          'Чудово, ваш запит оновлено. Експерт зв’яжеться з вами найближчим часом.',
        date: new Date('2025-03-22T08:36:00'),
        status: 'unread',
      },
    ],
  },
  {
    id: '5',
    name: 'Пропозиції щодо виставок',
    sender: 'Виставки',
    canAnswer: true,
    messages: [
      {
        id: '1',
        sender: 'webSite',
        messageTitle: 'Запрошення до участі у виставці',
        messageText:
          'Вас запрошено взяти участь у виставці “Нумізматика 2025”.',
        date: new Date('2025-03-22T08:09:23'),
        status: 'read',
      },
      {
        id: '2',
        sender: 'client',
        messageText: 'Цікаво! Як подати заявку?',
        date: new Date('2025-03-22T08:21:00'),
        status: 'read',
      },
      {
        id: '3',
        sender: 'webSite',
        messageText: 'Заповніть коротку анкету учасника у вашому профілі.',
        date: new Date('2025-03-22T08:25:00'),
        status: 'read',
      },
      {
        id: '4',
        sender: 'client',
        messageText: 'Які вимоги до експонатів?',
        date: new Date('2025-03-22T08:28:00'),
        status: 'read',
      },
      {
        id: '5',
        sender: 'webSite',
        messageText:
          'Експонати мають бути сертифіковані або мати підтвердження автентичності.',
        date: new Date('2025-03-22T08:33:00'),
        status: 'read',
      },
      {
        id: '6',
        sender: 'client',
        messageText: 'Дякую! Обов’язково долучуся.',
        date: new Date('2025-03-22T08:36:00'),
        status: 'read',
      },
    ],
  },
];

export const Messages = () => {
  const [setOpenMenu] = useOutletContext<OutletContextType>();
  const [activeMessges, setActiveMessages] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const [activeChat, setActiveChat] = useState<ChatT>(testMessages[0]);
  const [chatHeight, setChatHeight] = useState<number>(0);
  const chatName = searchParams.get('chat');

  const { t } = useTranslation();
  const lang = useSelector((state: SavingState) => state.language.language);

  function formatDate(date: Date) {
    const months = [
      'січня',
      'лютого',
      'березня',
      'квітня',
      'травня',
      'червня',
      'липня',
      'серпня',
      'вересня',
      'жовтня',
      'листопада',
      'грудня',
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day} ${month} ${hours}:${minutes}`;
  }

  useEffect(() => {
    setActiveChat(
      testMessages.find((a) => a.name === chatName) || testMessages[0],
    );
  }, [chatName]);

  return (
    <>
      {lang === 'en' && (
        <div className="profile-page__section">
          <div className="profile-page__section-title">
            <ArrowTale
              onClick={() => {
                setOpenMenu(false);
                setActiveMessages(false);
              }}
              className="profile-page__section-arrow"
            />

            <h2 className="profile-page__section-h2">{t('no-translation')}</h2>
          </div>
        </div>
      )}
      {lang === 'ua' && (
        <div className="profile-page__section">
          <div className="profile-page__section-title onDescktop">
            <ArrowTale
              onClick={() => {
                setOpenMenu(false);
                setActiveMessages(false);
              }}
              className="profile-page__section-arrow"
            />

            <h2 className="profile-page__section-h2">Листування</h2>
          </div>

          <div
            style={{ height: activeMessges ? chatHeight : 'auto' }}
            className="profile-messages__main"
          >
            <div
              className={classNames('profile-messages__wrapper', {
                isNotActive: activeMessges,
              })}
            >
              <div className="profile-page__section-title ontablet-mob">
                <ArrowTale
                  onClick={() => {
                    setOpenMenu(false);
                    setActiveMessages(false);
                  }}
                  className="profile-page__section-arrow"
                />
                <h2 className="profile-page__section-h2">Листування</h2>
              </div>
              <SimpleBar className="profile-messages__sources-container profile-messages__simple-bar">
                <div className="profile-messages__sources">
                  {testMessages.map((chat) => (
                    <Chat
                      key={chat.id}
                      chatName={chatName}
                      formatDate={formatDate}
                      chat={chat}
                      setActiveMessages={setActiveMessages}
                    />
                  ))}
                </div>
              </SimpleBar>
            </div>

            <ActiveChat
              setChatHeight={setChatHeight}
              setActiveChat={setActiveChat}
              setActiveMessages={setActiveMessages}
              activeMessges={activeMessges}
              formatDate={formatDate}
              activeChat={activeChat}
              PHOTO_AMOUNT={5}
            />
          </div>
        </div>
      )}
    </>
  );
};
