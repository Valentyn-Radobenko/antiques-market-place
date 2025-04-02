import { ChatSVG } from '../components/Imgs/ChatSVG';
import { DownliadSVG } from '../components/Imgs/Download.SVG';
import { ShiledSVG } from '../components/Imgs/ShieldSVG';

export const verifivationData = {
  title: {
    nameUa: 'Верифікація',
    nameEng: 'Verification',
  },

  steps: [
    {
      svg: <ShiledSVG className="account-verification__svg" />,
      title: {
        nameUa: 'Навіщо проходити верифікацію?',
        nameEng: 'Why undergo verification?',
      },
      list: [
        {
          nameUa: 'Уникнути шахрайства та підробок',
          nameEng: 'Prevent fraud and forgery',
        },
        {
          nameUa: 'Отримати доступ до ексклюзивних аукціонів та угод',
          nameEng: 'Access exclusive auctions and deals',
        },
        {
          nameUa: 'Стати перевіреним продавцем або покупцем',
          nameEng: 'Become a verified seller or buyer',
        },
      ],
    },
    {
      svg: <ChatSVG className="account-verification__svg" />,
      title: {
        nameUa: 'Як пройти верифікацію?',
        nameEng: 'How to undergo verification?',
      },
      list: [
        {
          nameUa:
            'Завантажте фото документа (на вибір: паспорт, ID-картка, водійське посвідчення).',
          nameEng:
            "Upload a document photo (choose: passport, ID card, driver's license).",
        },
        {
          nameUa: 'Очікуйте перевірку модератором.',
          nameEng: 'Await moderation review.',
        },
        {
          nameUa: 'Отримайте сповіщення про статус верифікації.',
          nameEng: 'Receive notification of verification status.',
        },
      ],
    },
    {
      svg: <DownliadSVG className="account-verification__svg" />,
      title: {
        nameUa: 'Завантаження документа',
        nameEng: 'Document upload',
      },
      list: [
        {
          nameUa: 'Виберіть файл – JPG, PNG, PDF',
          nameEng: 'Select file – JPG, PNG, PDF',
        },
        {
          nameUa: 'Фото має бути чітким, без розмиття та відблисків.',
          nameEng: 'Photo must be clear, without blurring or reflections.',
        },
      ],
    },
  ],
};
