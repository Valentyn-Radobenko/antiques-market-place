import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Item } from './item';

const items: Item[] = [
  {
    id: 1,
    name: 'Золота монета',
    category: 'Нумізматика',
    subcategory: 'coins',
    price: 1200,
    year: 1890,
  },
  {
    id: 2,
    name: 'Стара банкнота 100 грн',
    category: 'Нумізматика',
    subcategory: 'banknotes',
    price: 500,
    year: 1945,
  },
  {
    id: 3,
    name: 'Ювілейна медаль',
    category: 'Нумізматика',
    subcategory: 'medals',
    price: 3000,
    year: 1812,
  },
  {
    id: 4,
    name: "Картина 'Захід сонця'",
    category: "Інтер'єр",
    subcategory: 'paintings',
    price: 15000,
    year: 1978,
  },
  {
    id: 5,
    name: 'Грецька скульптура',
    category: "Інтер'єр",
    subcategory: 'sculptures',
    price: 8000,
    year: 1923,
  },
  {
    id: 6,
    name: 'Старовинний комод',
    category: "Інтер'єр",
    subcategory: 'furniture',
    price: 20000,
    year: 1950,
  },
  {
    id: 7,
    name: "Марка 'Олімпійські ігри'",
    category: 'Паперові колекції',
    subcategory: 'stamps',
    price: 450,
    year: 1932,
  },
  {
    id: 8,
    name: "Ретро-листівка 'Київ 1905'",
    category: 'Паперові колекції',
    subcategory: 'postcards',
    price: 150,
    year: 1905,
  },
  {
    id: 9,
    name: "Газета 'Радянська Україна'",
    category: 'Паперові колекції',
    subcategory: 'newspapers-magazines',
    price: 700,
    year: 1980,
  },
  {
    id: 10,
    name: 'Старинні годинники',
    category: 'Інше',
    subcategory: 'antiques-magazines',
    price: 50000,
    year: 1800,
  },
  {
    id: 11,
    name: 'Плівковий фотоапарат',
    category: 'Інше',
    subcategory: 'Ретро-техніка',
    price: 12000,
    year: 1965,
  },
  {
    id: 12,
    name: 'Рукописна книга 1850',
    category: 'Інше',
    subcategory: 'rare-books',
    price: 7500,
    year: 1850,
  },
  {
    id: 13,
    name: "Срібна монета 'Гетьмани'",
    category: 'Нумізматика',
    subcategory: 'coins',
    price: 1800,
    year: 1910,
  },
  {
    id: 14,
    name: 'Рідкісна банкнота 50 карбованців',
    category: 'Нумізматика',
    subcategory: 'banknotes',
    price: 650,
    year: 1955,
  },
  {
    id: 15,
    name: "Полотно 'Нічна тиша'",
    category: "Інтер'єр",
    subcategory: 'paintings',
    price: 22000,
    year: 2000,
  },
  {
    id: 16,
    name: 'Бронзова статуетка',
    category: "Інтер'єр",
    subcategory: 'sculptures',
    price: 10500,
    year: 1895,
  },
  {
    id: 17,
    name: "Поштова марка 'Шевченко'",
    category: 'Паперові колекції',
    subcategory: 'stamps',
    price: 550,
    year: 1941,
  },
  {
    id: 18,
    name: "Журнал 'Наука і життя'",
    category: 'Паперові колекції',
    subcategory: 'newspapers-magazines',
    price: 850,
    year: 1999,
  },
  {
    id: 19,
    name: 'Срібна чайна ложка',
    category: 'Інше',
    subcategory: 'antiques-magazines',
    price: 62000,
    year: 1780,
  },
  {
    id: 20,
    name: "Перше видання 'Кобзаря'",
    category: 'Інше',
    subcategory: 'rare-books',
    price: 8900,
    year: 1825,
  },
];
export const Catalog = () => {
  const [searchParams] = useSearchParams();
  const [itemsToShow, setItemsToShow] = useState<Item[]>([]);
  const category = searchParams.get('category');
  const subCategory = searchParams.get('subcategory');
  useEffect(() => {
    setItemsToShow(items);
  }, []);

  const itemsToRender = function () {
    const newArrayOfItems = [...itemsToShow];

    if (subCategory) {
      return newArrayOfItems.filter((item) => {
        return item.subcategory === subCategory;
      });
    }

    if (category) {
      return newArrayOfItems.filter((item) => item.category === category);
    }

    return newArrayOfItems;
  };

  // console.log(itemsToRender())

  return (
    <>
      <h1>Catalog</h1>
      <div className="items">
        {itemsToRender().map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.category}</p>
            <p>{item.subcategory}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};
