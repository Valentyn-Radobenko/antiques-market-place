// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import { Item } from '../../types/item';
import { MarketItem } from '../MarketItem/MatketItem';

const items: Item[] = [
  {
    id: 1,
    name: 'Монета 1',
    category: 'numismatics',
    subcategory: 'coins-ukraine',
    img: 'public/images/expertise/Photo.png',
    price: 500,
    year: 1991,
    country: 'Україна',
    material: 'Срібло',
  },
  {
    id: 2,
    name: 'Монета 2',
    category: 'numismatics',
    subcategory: 'coins-ancient-states',
    img: 'public/images/expertise/Photo.png',
    price: 1200,
    year: -300,
    country: 'Греція',
    material: 'Бронза',
  },
  {
    id: 3,
    name: 'Монета 3',
    category: 'numismatics',
    subcategory: 'coins-ancient-rome',
    img: 'public/images/expertise/Photo.png',
    price: 800,
    year: 100,
    country: 'Рим',
    material: 'Срібло',
  },
  {
    id: 4,
    name: 'Монета 4',
    category: 'numismatics',
    subcategory: 'medieval-coins',
    img: 'public/images/expertise/Photo.png',
    price: 1500,
    year: 1400,
    country: 'Франція',
    material: 'Золото',
  },
  {
    id: 5,
    name: 'Монета 5',
    category: 'numismatics',
    subcategory: 'coins-europe',
    img: 'public/images/expertise/Photo.png',
    price: 950,
    year: 1800,
    country: 'Німеччина',
    material: 'Мідь',
  },
  {
    id: 6,
    name: 'Живопис 1',
    category: 'interior-heritage',
    subcategory: 'painting',
    img: 'public/images/expertise/Photo.png',
    price: 5000,
    year: 1950,
    country: 'Україна',
    material: 'Полотно, олія',
  },
  {
    id: 7,
    name: 'Живопис 2',
    category: 'interior-heritage',
    subcategory: 'painting',
    img: 'public/images/expertise/Photo.png',
    price: 7000,
    year: 1870,
    country: 'Франція',
    material: 'Полотно, олія',
  },
  {
    id: 8,
    name: 'Тканина 1',
    category: 'interior-heritage',
    subcategory: 'fabrics',
    img: 'public/images/expertise/Photo.png',
    price: 3000,
    year: 1920,
    country: 'Індія',
    material: 'Шовк',
  },
  {
    id: 9,
    name: 'Металевий предмет 1',
    category: 'interior-heritage',
    subcategory: 'metal-objects',
    img: 'public/images/expertise/Photo.png',
    price: 2500,
    year: 1850,
    country: 'Англія',
    material: 'Срібло',
  },
  {
    id: 10,
    name: 'Ікона 1',
    category: 'interior-heritage',
    subcategory: 'icons',
    img: 'public/images/expertise/Photo.png',
    price: 8000,
    year: 1700,
    country: 'Росія',
    material: 'Дерево, темпера',
  },
  {
    id: 11,
    name: 'Марка 1',
    category: 'paper-collections',
    subcategory: 'philately',
    img: 'public/images/expertise/Photo.png',
    price: 300,
    year: 1960,
    country: 'США',
    material: 'Папір',
  },
  {
    id: 12,
    name: 'Листівка 1',
    category: 'paper-collections',
    subcategory: 'deltiology',
    img: 'public/images/expertise/Photo.png',
    price: 200,
    year: 1910,
    country: 'Франція',
    material: 'Картон',
  },
  {
    id: 13,
    name: 'Банкнота 1',
    category: 'paper-collections',
    subcategory: 'notaphily',
    img: 'public/images/expertise/Photo.png',
    price: 1500,
    year: 1945,
    country: 'Німеччина',
    material: 'Папір',
  },
  {
    id: 14,
    name: 'Книга 1',
    category: 'paper-collections',
    subcategory: 'books',
    img: 'public/images/expertise/Photo.png',
    price: 5000,
    year: 1850,
    country: 'Англія',
    material: 'Папір, шкіра',
  },
  {
    id: 15,
    name: 'Плакат 1',
    category: 'paper-collections',
    subcategory: 'posters',
    img: 'public/images/expertise/Photo.png',
    price: 1000,
    year: 1920,
    country: 'СРСР',
    material: 'Папір',
  },
  {
    id: 16,
    name: 'Нагорода 1',
    category: 'other-items',
    subcategory: 'phaleristics',
    img: 'public/images/expertise/Photo.png',
    price: 5000,
    year: 1939,
    country: 'СРСР',
    material: 'Бронза',
  },
  {
    id: 17,
    name: 'Монета 6',
    category: 'numismatics',
    subcategory: 'coins-ussr',
    img: 'public/images/expertise/Photo.png',
    price: 700,
    year: 1980,
    country: 'СРСР',
    material: 'Нікель',
  },
  {
    id: 18,
    name: 'Монета 7',
    category: 'numismatics',
    subcategory: 'coins-russia',
    img: 'public/images/expertise/Photo.png',
    price: 1000,
    year: 1900,
    country: 'Росія',
    material: 'Срібло',
  },
  {
    id: 19,
    name: 'Монета 8',
    category: 'numismatics',
    subcategory: 'coins-poland',
    img: 'public/images/expertise/Photo.png',
    price: 800,
    year: 1750,
    country: 'Польща',
    material: 'Мідь',
  },
  {
    id: 20,
    name: 'Монета 9',
    category: 'numismatics',
    subcategory: 'other-coins',
    img: 'public/images/expertise/Photo.png',
    price: 600,
    year: 2000,
    country: 'Канада',
    material: 'Нікель',
  },
  {
    id: 21,
    name: 'Порцелянова статуетка',
    category: 'interior-heritage',
    subcategory: 'porcelain',
    img: 'public/images/expertise/Photo.png',
    price: 4500,
    year: 1890,
    country: 'Австрія',
    material: 'Порцеляна',
  },
  {
    id: 22,
    name: "Інтер'єрний предмет 1",
    category: 'interior-heritage',
    subcategory: 'interior-items',
    img: 'public/images/expertise/Photo.png',
    price: 3500,
    year: 1820,
    country: 'Англія',
    material: 'Дерево',
  },
  {
    id: 23,
    name: 'Тканина 2',
    category: 'interior-heritage',
    subcategory: 'fabrics',
    img: 'public/images/expertise/Photo.png',
    price: 2800,
    year: 1910,
    country: 'Франція',
    material: 'Бавовна',
  },
  {
    id: 24,
    name: 'Металевий предмет 2',
    category: 'interior-heritage',
    subcategory: 'metal-objects',
    img: 'public/images/expertise/Photo.png',
    price: 2700,
    year: 1750,
    country: 'Італія',
    material: 'Бронза',
  },
  {
    id: 25,
    name: 'Ікона 2',
    category: 'interior-heritage',
    subcategory: 'icons',
    img: 'public/images/expertise/Photo.png',
    price: 9000,
    year: 1600,
    country: 'Україна',
    material: 'Дерево, темпера',
  },
  {
    id: 26,
    name: 'Монета 10',
    category: 'numismatics',
    subcategory: 'coins-europe',
    img: 'public/images/expertise/Photo.png',
    price: 1100,
    year: 1550,
    country: 'Іспанія',
    material: 'Срібло',
  },
  {
    id: 27,
    name: 'Книга 2',
    category: 'paper-collections',
    subcategory: 'books',
    img: 'public/images/expertise/Photo.png',
    price: 5500,
    year: 1700,
    country: 'Італія',
    material: 'Папір, шкіра',
  },
  {
    id: 28,
    name: 'Фалеристика 2',
    category: 'other-items',
    subcategory: 'phaleristics',
    img: 'public/images/expertise/Photo.png',
    price: 7000,
    year: 1945,
    country: 'Франція',
    material: 'Бронза',
  },
  {
    id: 29,
    name: 'Інше 1',
    category: 'other-items',
    subcategory: 'other',
    img: 'public/images/expertise/Photo.png',
    price: 1500,
    year: 2005,
    country: 'Японія',
    material: 'Метал',
  },
  {
    id: 30,
    name: 'Інше 2',
    category: 'other-items',
    subcategory: 'other',
    img: 'public/images/expertise/Photo.png',
    price: 1800,
    year: 2010,
    country: 'США',
    material: 'Пластик',
  },
];

export const Catalog = () => {
  // const [searchParams] = useSearchParams();
  // const [itemsToShow, setItemsToShow] = useState<Item[]>([])
  // const category = searchParams.get('category')
  // const subCategory = searchParams.get('subcategory')
  // useEffect(() => {
  //   setItemsToShow(items)
  // }, [])

  // const itemsToRender = function () {
  //   const newArrayOfItems = [...itemsToShow]

  //   if (subCategory) {
  //     return newArrayOfItems.filter((item) => {
  //     return  item.subcategory === subCategory
  //     })
  //   }

  //   if (category) {
  //     return newArrayOfItems.filter(item => item.category === category)
  //   }

  //   return newArrayOfItems;
  // }

  return (
    <>
      {/* <h1>Catalog</h1> */}
      <div className="items">
        {items.map((item) => (
          <MarketItem
            item={item}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
};
