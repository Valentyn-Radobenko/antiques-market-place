import { ShiledSVG } from '../components/Imgs/ShieldSVG';

export const verifivationData = {
  title: {
    nameUa: 'Верифікація',
    nameEng: '',
  },

  steps: [
    {
      svg: <ShiledSVG className="account-verification__svg" />,
      title: {
        nameUa: 'Навіщо проходити верифікацію?',
        nameEng: '',
      },
      list: [
        {
          nameUa: 'Уникнути шахрайства та підробок',
          nameEng: '',
        },
        {
          nameUa: 'Отримати доступ до ексклюзивних аукціонів та угод',
          nameEng: '',
        },
        {
          nameUa: 'Стати перевіреним продавцем або покупцем',
          nameEng: '',
        },
      ],
    },
    {
      svg: <ShiledSVG className="account-verification__svg" />,
      title: {
        nameUa: 'Як пройти верифікацію?',
        nameEng: '',
      },
      list: [
        {
          nameUa:
            'Завантажте фото документа (на вибір: паспорт, ID-картка, водійське посвідчення).',
          nameEng: '',
        },
        {
          nameUa: 'Очікуйте перевірку модератором.',
          nameEng: '',
        },
        {
          nameUa: '3️. Отримайте сповіщення про статус верифікації.',
          nameEng: '',
        },
      ],
    },
    {
      svg: <ShiledSVG className="account-verification__svg" />,
      title: {
        nameUa: 'Завантаження документа',
        nameEng: '',
      },
      list: [
        {
          nameUa: 'Виберіть файл – JPG, PNG, PDF',
          nameEng: '',
        },
        {
          nameUa: 'Фото має бути чітким, без розмиття та відблисків.',
          nameEng: '',
        },
      ],
    },
  ],
};
