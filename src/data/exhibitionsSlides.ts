import exhibition1 from '/images/exhibitions/exhibition-1.jfif';
import exhibition2 from '/images/exhibitions/exhibition-2.jfif';
import exhibition3 from '/images/exhibitions/exhibition-3.jfif';

export const exhibitionsSlides = [
  {
    id: 1,
    title: {
      ua: 'Виставка народного Художника України Володимира Козюка',
      en: "Exhibition of People's Artist of Ukraine Volodymyr Kozyuk",
    },
    status: {
      ua: 'Відбулася',
      en: 'Completed',
    },
    imageUrl: exhibition1,
  },
  {
    id: 2,
    title: {
      ua: 'Інша виставка',
      en: 'Another Exhibition',
    },
    status: {
      ua: 'Триває',
      en: 'Ongoing',
    },
    imageUrl: exhibition2,
  },
  {
    id: 3,
    title: {
      ua: 'Ще одна виставка',
      en: 'Yet Another Exhibition',
    },
    status: {
      ua: 'Скоро',
      en: 'Coming Soon',
    },
    imageUrl: exhibition3,
  },
];
