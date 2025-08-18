import { OptionType } from '../types/optionType';

export const categories: OptionType = {
  nameUa: 'Категорії',
  slug: 'categories',
  type: 'single',
  options: [
    {
      id: '1',
      nameUa: 'Нумізматика',
      nameEng: 'Numismatics',
      slug: 'numismatics',
      subcategories: [
        {
          id: '101',
          nameUa: 'Монети України',
          nameEng: 'Coins of Ukraine',
          slug: 'coins-ukraine',
        },
        {
          id: '102',
          nameUa: 'Монети Античних Держав',
          nameEng: 'Coins of Ancient States',
          slug: 'coins-ancient-states',
        },
        {
          id: '103',
          nameUa: 'Монети Стародавнього Риму',
          nameEng: 'Coins of Ancient Rome',
          slug: 'coins-ancient-rome',
        },
        {
          id: '104',
          nameUa: 'Монети середньовіччя',
          nameEng: 'Medieval Coins',
          slug: 'medieval-coins',
        },
        {
          id: '105',
          nameUa: 'Монети Європи',
          nameEng: 'Coins of Europe',
          slug: 'coins-europe',
        },
        {
          id: '106',
          nameUa: 'Монети СРСР',
          nameEng: 'Coins of USSR',
          slug: 'coins-ussr',
        },
        {
          id: '107',
          nameUa: 'Монети Росії',
          nameEng: 'Coins of Russia',
          slug: 'coins-russia',
        },
        {
          id: '108',
          nameUa: 'Монети Польщі',
          nameEng: 'Coins of Poland',
          slug: 'coins-poland',
        },
        {
          id: '109',
          nameUa: 'Інші монети',
          nameEng: 'Other Coins',
          slug: 'other-coins',
        },
      ],
    },
    {
      id: '2',
      nameUa: "Інтер'єрна спадщина",
      nameEng: 'Interior Heritage',
      slug: 'interior-heritage',
      subcategories: [
        { id: '201', nameUa: 'Живопис', nameEng: 'Painting', slug: 'painting' },
        { id: '202', nameUa: 'Тканини', nameEng: 'Fabrics', slug: 'fabrics' },
        {
          id: '203',
          nameUa: 'Предмети з металу',
          nameEng: 'Metal Objects',
          slug: 'metal-objects',
        },
        {
          id: '204',
          nameUa: "Предмети інтер'єру",
          nameEng: 'Interior Items',
          slug: 'interior-items',
        },
        {
          id: '205',
          nameUa: 'Порцеляна',
          nameEng: 'Porcelain',
          slug: 'porcelain',
        },
        { id: '206', nameUa: 'Ікони', nameEng: 'Icons', slug: 'icons' },
      ],
    },
    {
      id: '3',
      nameUa: 'Паперові колекції',
      nameEng: 'Paper Collections',
      slug: 'paper-collections',
      subcategories: [
        {
          id: '301',
          nameUa: 'Філателія',
          nameEng: 'Philately',
          slug: 'philately',
        },
        {
          id: '302',
          nameUa: 'Філокартія',
          nameEng: 'Deltiology',
          slug: 'deltiology',
        },
        {
          id: '303',
          nameUa: 'Боністика',
          nameEng: 'Notaphily',
          slug: 'notaphily',
        },
        { id: '304', nameUa: 'Книги', nameEng: 'Books', slug: 'books' },
        { id: '305', nameUa: 'Плакати', nameEng: 'Posters', slug: 'posters' },
      ],
    },
    {
      id: '4',
      nameUa: 'Інші предмети',
      nameEng: 'Other Items',
      slug: 'other-items',
      subcategories: [
        {
          id: '401',
          nameUa: 'Фалеристика',
          nameEng: 'Phaleristics',
          slug: 'phaleristics',
        },
        { id: '402', nameUa: 'Інше', nameEng: 'Other', slug: 'other' },
      ],
    },
  ],
};
