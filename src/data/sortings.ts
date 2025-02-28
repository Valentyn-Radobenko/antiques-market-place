import { SortingType } from '../types/sorting';

export const sortings: SortingType[] = [
  {
    id: 1,
    nameUa: 'За ціною',
    nameEng: 'By price',
    slug: 'by-price',
    sortType: [
      { id: 1, nameUa: 'За зростанням', nameEng: 'Ascending', slug: 'asc' },
      { id: 2, nameUa: 'За спаданням', nameEng: 'Descending', slug: 'desc' },
    ],
  },
  {
    id: 3,
    nameUa: 'За алфавітом',
    nameEng: 'Alphabetically',
    slug: 'alphabetically',
    sortType: [
      { id: 3, nameUa: 'Від А до Я', nameEng: 'A to Z', slug: 'a-z' },
      { id: 4, nameUa: 'Від Я до А', nameEng: 'Z to A', slug: 'z-a' },
    ],
  },
  {
    id: 4,
    nameUa: 'За роком',
    nameEng: 'By year',
    slug: 'by-year',
    sortType: [
      {
        id: 5,
        nameUa: 'Спочатку нові',
        nameEng: 'Newest first',
        slug: 'newest',
      },
      {
        id: 6,
        nameUa: 'Спочатку старі',
        nameEng: 'Oldest first',
        slug: 'oldest',
      },
    ],
  },
];
