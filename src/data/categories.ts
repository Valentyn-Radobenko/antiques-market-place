import { OptionType } from '../types/optionType';

export const categories: OptionType = {
  nameUa: 'Категорії',
  slug: 'category',
  type: 'single',
  options: [
    {
      id: '1',
      nameUa: 'Нумізматика',
      nameEng: 'Numismatics',
      slug: 'numismatics',
      subcategories: [
        {
          id: '100',
          nameUa: 'Вся нумізматика',
          nameEng: 'All numismatics',
          slug: 'numismatics',
        },
        {
          id: '101',
          nameUa: 'Монети України',
          nameEng: 'Coins of Ukraine',
          slug: 'coins-of-ukraine',
        },
        {
          id: '102',
          nameUa: 'Монети Античних Держав',
          nameEng: 'Coins of Ancient States',
          slug: 'coins-of-ancient-states',
        },
        {
          id: '103',
          nameUa: 'Монети Стародавнього Риму',
          nameEng: 'Coins of Ancient Rome',
          slug: 'coins-of-ancient-rome',
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
          slug: 'coins-of-europe',
        },
        {
          id: '106',
          nameUa: 'Монети СРСР',
          nameEng: 'Coins of USSR',
          slug: 'coins-of-ussr',
        },
        {
          id: '107',
          nameUa: 'Монети Росії',
          nameEng: 'Coins of Russia',
          slug: 'coins-of-russia',
        },
        {
          id: '108',
          nameUa: 'Монети Польщі',
          nameEng: 'Coins of Poland',
          slug: 'coins-of-poland',
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
        {
          id: '200',
          nameUa: "Вся інтер'єрна спадщина",
          nameEng: 'all interior Heritage',
          slug: 'interior-heritage',
        },
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
          id: '300',
          nameUa: 'Всі паперові колекції',
          nameEng: 'All paper Collections',
          slug: 'paper-collections',
        },
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
          id: '400',
          nameUa: 'Всі інші предмети',
          nameEng: 'All other Items',
          slug: 'other-items',
        },
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
