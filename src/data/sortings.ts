import { OptionType } from '../types/optionType';

export const sortings: OptionType = {
  nameUa: 'Сортування',
  nameEng: 'Sorting',
  slug: 'sort',
  type: 'single',
  options: [
    {
      id: '1',
      nameUa: 'За ціною',
      nameEng: 'By price',
      slug: 'by-price',
      subcategories: [
        { id: '1', nameUa: 'За зростанням', nameEng: 'Ascending', slug: 'asc' },
        {
          id: '2',
          nameUa: 'За спаданням',
          nameEng: 'Descending',
          slug: 'desc',
        },
      ],
    },
    {
      id: '2',
      nameUa: 'За новизною',
      nameEng: 'By novelty',
      slug: 'by-novelty',
      subcategories: [
        {
          id: '1',
          nameUa: 'Спочатку нові',
          nameEng: 'Newest first',
          slug: 'new-first',
        },
        {
          id: '2',
          nameUa: 'Спочатку старі',
          nameEng: 'Oldest first',
          slug: 'old-first',
        },
      ],
    },
    {
      id: '3',
      nameUa: 'За алфавітом',
      nameEng: 'Alphabetically',
      slug: 'alphabetically',
      subcategories: [
        { id: '3', nameUa: 'Від А до Я', nameEng: 'A to Z', slug: 'a-z' },
        { id: '4', nameUa: 'Від Я до А', nameEng: 'Z to A', slug: 'z-a' },
      ],
    },
    {
      id: '4',
      nameUa: 'За роком',
      nameEng: 'By year',
      slug: 'by-year',
      subcategories: [
        {
          id: '5',
          nameUa: 'Від нового до старого',
          nameEng: 'From new to old',
          slug: 'newest',
        },
        {
          id: '6',
          nameUa: 'Від старого до нового',
          nameEng: 'From old to new',
          slug: 'oldest',
        },
      ],
    },
  ],
};
