import { OptionType } from '../types/optionType';

export const filters: OptionType = {
  nameUa: 'Фільтри',
  slug: 'filters',
  type: 'multiple',
  options: [
    {
      id: '1',
      nameUa: 'Країна',
      nameEng: 'Country',
      slug: 'kraina',
      subcategories: [
        {
          id: '1',
          nameUa: 'Україна',
          nameEng: 'Ukraine',
          slug: 'ukraine',
        },
        {
          id: '2',
          nameUa: 'Німеччина',
          nameEng: 'Germany',
          slug: 'germany',
        },
        {
          id: '3',
          nameUa: 'Італія',
          nameEng: 'Italy',
          slug: 'italy',
        },
        {
          id: '4',
          nameUa: 'Франція',
          nameEng: 'France',
          slug: 'france',
        },
        {
          id: '5',
          nameUa: 'Іспанія',
          nameEng: 'Spain',
          slug: 'spain',
        },
        {
          id: '6',
          nameUa: 'Великобританія',
          nameEng: 'United Kingdom',
          slug: 'united-kingdom',
        },
        {
          id: '7',
          nameUa: 'Польща',
          nameEng: 'Poland',
          slug: 'poland',
        },
        {
          id: '8',
          nameUa: 'Чехія',
          nameEng: 'Czech Republic',
          slug: 'czech-republic',
        },
        {
          id: '9',
          nameUa: 'Австрія',
          nameEng: 'Austria',
          slug: 'austria',
        },
        {
          id: '10',
          nameUa: 'Швеція',
          nameEng: 'Sweden',
          slug: 'sweden',
        },
      ],
    },
    {
      id: '2',
      nameUa: 'Матеріал',
      nameEng: 'Material',
      slug: 'material',
      subcategories: [
        {
          id: '1',
          nameUa: 'Дерево',
          nameEng: 'Wood',
          slug: 'wood',
        },
        {
          id: '2',
          nameUa: 'Метал',
          nameEng: 'Metal',
          slug: 'metal',
        },
        {
          id: '3',
          nameUa: 'Пластик',
          nameEng: 'Plastic',
          slug: 'plastic',
        },
      ],
    },
    {
      id: '3',
      nameUa: 'Рік',
      nameEng: 'Year',
      slug: 'rik',
      subcategories: [
        {
          id: '1',
          nameUa: '2020',
          nameEng: '2020',
          slug: '2020',
        },
        {
          id: '2',
          nameUa: '2021',
          nameEng: '2021',
          slug: '2021',
        },
        {
          id: '3',
          nameUa: '2022',
          nameEng: '2022',
          slug: '2022',
        },
      ],
    },
  ],
};
