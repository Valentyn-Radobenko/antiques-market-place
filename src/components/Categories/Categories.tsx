import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import '../../styles/scrollbar.scss';

const categories = [
  {
    id: 1,
    nameUa: 'Нумізматика',
    nameEng: 'Numismatics',
    slug: 'numismatics',
    subcategories: [
      {
        id: 101,
        nameUa: 'Монети України',
        nameEng: 'Coins of Ukraine',
        slug: 'coins-ukraine',
      },
      {
        id: 102,
        nameUa: 'Монети Античних Держав',
        nameEng: 'Coins of Ancient States',
        slug: 'coins-ancient-states',
      },
      {
        id: 103,
        nameUa: 'Монети Стародавнього Риму',
        nameEng: 'Coins of Ancient Rome',
        slug: 'coins-ancient-rome',
      },
      {
        id: 104,
        nameUa: 'Монети середньовіччя',
        nameEng: 'Medieval Coins',
        slug: 'medieval-coins',
      },
      {
        id: 105,
        nameUa: 'Монети Європи',
        nameEng: 'Coins of Europe',
        slug: 'coins-europe',
      },
      {
        id: 106,
        nameUa: 'Монети СРСР',
        nameEng: 'Coins of USSR',
        slug: 'coins-ussr',
      },
      {
        id: 107,
        nameUa: 'Монети Росії',
        nameEng: 'Coins of Russia',
        slug: 'coins-russia',
      },
      {
        id: 108,
        nameUa: 'Монети Польщі',
        nameEng: 'Coins of Poland',
        slug: 'coins-poland',
      },
      {
        id: 109,
        nameUa: 'Інші монети',
        nameEng: 'Other Coins',
        slug: 'other-coins',
      },
    ],
  },
  {
    id: 2,
    nameUa: "Інтер'єрна спадщина",
    nameEng: 'Interior Heritage',
    slug: 'interior-heritage',
    subcategories: [
      { id: 201, nameUa: 'Живопис', nameEng: 'Painting', slug: 'painting' },
      { id: 202, nameUa: 'Тканини', nameEng: 'Fabrics', slug: 'fabrics' },
      {
        id: 203,
        nameUa: 'Предмети з металу',
        nameEng: 'Metal Objects',
        slug: 'metal-objects',
      },
      {
        id: 204,
        nameUa: "Предмети інтер'єру",
        nameEng: 'Interior Items',
        slug: 'interior-items',
      },
      { id: 205, nameUa: 'Порцеляна', nameEng: 'Porcelain', slug: 'porcelain' },
      { id: 206, nameUa: 'Ікони', nameEng: 'Icons', slug: 'icons' },
    ],
  },
  {
    id: 3,
    nameUa: 'Паперові колекції',
    nameEng: 'Paper Collections',
    slug: 'paper-collections',
    subcategories: [
      { id: 301, nameUa: 'Філателія', nameEng: 'Philately', slug: 'philately' },
      {
        id: 302,
        nameUa: 'Філокартія',
        nameEng: 'Deltiology',
        slug: 'deltiology',
      },
      { id: 303, nameUa: 'Боністика', nameEng: 'Notaphily', slug: 'notaphily' },
      { id: 304, nameUa: 'Книги', nameEng: 'Books', slug: 'books' },
      { id: 305, nameUa: 'Плакати', nameEng: 'Posters', slug: 'posters' },
    ],
  },
  {
    id: 4,
    nameUa: 'Інші предмети',
    nameEng: 'Other Items',
    slug: 'other-items',
    subcategories: [
      {
        id: 401,
        nameUa: 'Фалеристика',
        nameEng: 'Phaleristics',
        slug: 'phaleristics',
      },
      { id: 402, nameUa: 'Інше', nameEng: 'Other', slug: 'other' },
    ],
  },
];

type Subcategory = {
  id: number;
  nameUa: string;
  nameEng: string;
  slug: string;
};

type Category = {
  id: number;
  nameUa: string;
  nameEng: string;
  slug: string;
  subcategories: Subcategory[];
};

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [openCategories, setOpenCategories] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const refHeight = useRef<HTMLDivElement | null>(null);

  const toggleSub = (current: Category) => {
    setHeight(0);
    if (activeCategory?.id === current.id) {
      setActiveCategory(null);
    } else {
      setActiveCategory(current);
    }
  };

  useEffect(() => {
    if (refHeight.current) {
      setHeight(refHeight.current.clientHeight);
    }
  }, [activeCategory]);

  useEffect(() => {
    if (openCategories) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openCategories]);

  return (
    <>
      <div
        className={classNames('categories-descktop', {
          isActive: activeCategory,
        })}
      >
        <div className="categories-descktop__container">
          {categories.map((category) => (
            <div
              key={category.id}
              className={classNames('categories-descktop__title', {
                isActive: activeCategory?.id === category.id,
                notActive: activeCategory && activeCategory.id !== category.id,
              })}
            >
              <NavLink
                to={`/market/${category.slug}`}
                className="categories-descktop__link"
              >
                {category.nameUa}
              </NavLink>
              <svg
                onClick={() => toggleSub(category)}
                className="categories-descktop__arrow"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.9991 14.3787C11.8918 14.3787 11.7925 14.3611 11.7011 14.3257C11.6098 14.2904 11.5208 14.2291 11.4341 14.1417L7.04512 9.75374C6.95179 9.66041 6.90179 9.54574 6.89512 9.40974C6.88845 9.27374 6.93845 9.15241 7.04512 9.04574C7.15179 8.93908 7.26979 8.88574 7.39912 8.88574C7.52845 8.88574 7.64645 8.93908 7.75312 9.04574L11.9991 13.2917L16.2451 9.04574C16.3385 8.95241 16.4535 8.90241 16.5901 8.89574C16.7255 8.88908 16.8465 8.93908 16.9531 9.04574C17.0598 9.15241 17.1131 9.27041 17.1131 9.39974C17.1131 9.52908 17.0598 9.64708 16.9531 9.75374L12.5641 14.1417C12.4775 14.2291 12.3885 14.2904 12.2971 14.3257C12.2065 14.3611 12.1071 14.3787 11.9991 14.3787Z" />
              </svg>
            </div>
          ))}
        </div>
        {activeCategory && (
          <div className="categories-descktop__subcategories">
            {activeCategory?.subcategories.map((subcategory) => (
              <div
                key={subcategory.id}
                className="categories-descktop__subcategory"
              >
                <NavLink
                  className="categories-descktop__subcategory-link"
                  to={`/market/${subcategory.slug}`}
                >
                  {subcategory.nameUa}
                </NavLink>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        onClick={() => setOpenCategories(true)}
        className="categories-mobile"
      >
        <div className="categories-mobile__title">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.927 21.6156L18.141 18.8536C17.8663 19.0622 17.5647 19.2222 17.236 19.3336C16.9073 19.4449 16.5593 19.5002 16.192 19.4996C15.2773 19.4996 14.494 19.1746 13.842 18.5246C13.19 17.8746 12.8643 17.0932 12.865 16.1806C12.8657 15.2679 13.1907 14.4872 13.84 13.8386C14.4893 13.1899 15.271 12.8656 16.185 12.8656C17.099 12.8656 17.8797 13.1892 18.527 13.8366C19.1743 14.4839 19.4987 15.2626 19.5 16.1726C19.5 16.5419 19.4433 16.8912 19.33 17.2206C19.218 17.5499 19.0573 17.8519 18.848 18.1266L21.616 20.9066L20.927 21.6156ZM5.807 19.5186C4.89767 19.5186 4.11933 19.1942 3.472 18.5456C2.824 17.8969 2.5 17.1059 2.5 16.1726C2.5 15.2632 2.824 14.4846 3.472 13.8366C4.11933 13.1886 4.898 12.8646 5.808 12.8646C6.74133 12.8646 7.53233 13.1886 8.181 13.8366C8.82967 14.4846 9.154 15.2632 9.154 16.1726C9.154 17.1059 8.82967 17.8969 8.181 18.5456C7.53233 19.1942 6.74033 19.5186 5.807 19.5186ZM5.808 18.5186C6.47333 18.5186 7.03067 18.2939 7.48 17.8446C7.92933 17.3952 8.154 16.8379 8.154 16.1726C8.154 15.5379 7.92933 14.9946 7.48 14.5426C7.03067 14.0906 6.47333 13.8646 5.808 13.8646C5.17333 13.8646 4.63 14.0906 4.178 14.5426C3.726 14.9946 3.5 15.5379 3.5 16.1726C3.5 16.8379 3.726 17.3952 4.178 17.8446C4.63 18.2939 5.17333 18.5186 5.808 18.5186ZM16.192 18.5186C16.8267 18.5186 17.37 18.2939 17.822 17.8446C18.274 17.3952 18.5 16.8379 18.5 16.1726C18.5 15.5379 18.274 14.9946 17.822 14.5426C17.37 14.0906 16.8267 13.8646 16.192 13.8646C15.5267 13.8646 14.9693 14.0906 14.52 14.5426C14.0707 14.9946 13.846 15.5379 13.846 16.1726C13.846 16.8379 14.0707 17.3952 14.52 17.8446C14.9693 18.2939 15.5267 18.5186 16.192 18.5186ZM5.808 9.17255C4.898 9.17255 4.11933 8.84822 3.472 8.19955C2.824 7.55089 2.5 6.75989 2.5 5.82655C2.5 4.91722 2.824 4.13855 3.472 3.49055C4.11933 2.84255 4.898 2.51855 5.808 2.51855C6.74133 2.51855 7.53233 2.84255 8.181 3.49055C8.82967 4.13855 9.154 4.91722 9.154 5.82655C9.154 6.75989 8.82967 7.55089 8.181 8.19955C7.53233 8.84822 6.74133 9.17255 5.808 9.17255ZM16.192 9.17255C15.2587 9.17255 14.4677 8.84822 13.819 8.19955C13.1703 7.55089 12.846 6.75989 12.846 5.82655C12.846 4.91655 13.1703 4.13789 13.819 3.49055C14.4677 2.84255 15.2587 2.51855 16.192 2.51855C17.102 2.51855 17.8807 2.84255 18.528 3.49055C19.176 4.13855 19.5 4.91722 19.5 5.82655C19.5 6.75989 19.176 7.55089 18.528 8.19955C17.8807 8.84822 17.102 9.17255 16.192 9.17255ZM5.808 8.17255C6.47333 8.17255 7.03067 7.94789 7.48 7.49855C7.92933 7.04922 8.154 6.49189 8.154 5.82655C8.154 5.19189 7.92933 4.64855 7.48 4.19655C7.03067 3.74455 6.47333 3.51855 5.808 3.51855C5.17333 3.51855 4.63 3.74455 4.178 4.19655C3.726 4.64855 3.5 5.19189 3.5 5.82655C3.5 6.49189 3.726 7.04922 4.178 7.49855C4.63 7.94789 5.17333 8.17255 5.808 8.17255ZM16.192 8.17255C16.8267 8.17255 17.37 7.94789 17.822 7.49855C18.274 7.04922 18.5 6.49189 18.5 5.82655C18.5 5.19189 18.274 4.64855 17.822 4.19655C17.37 3.74455 16.8267 3.51855 16.192 3.51855C15.5267 3.51855 14.9693 3.74455 14.52 4.19655C14.0707 4.64855 13.846 5.19189 13.846 5.82655C13.846 6.49189 14.0707 7.04922 14.52 7.49855C14.9693 7.94789 15.5267 8.17255 16.192 8.17255Z"
              fill="black"
            />
          </svg>
          <h4>Каталог</h4>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9991 14.3787C11.8918 14.3787 11.7925 14.3611 11.7011 14.3257C11.6098 14.2904 11.5208 14.2291 11.4341 14.1417L7.04512 9.75374C6.95179 9.66041 6.90179 9.54574 6.89512 9.40974C6.88845 9.27374 6.93845 9.15241 7.04512 9.04574C7.15179 8.93908 7.26979 8.88574 7.39912 8.88574C7.52845 8.88574 7.64645 8.93908 7.75312 9.04574L11.9991 13.2917L16.2451 9.04574C16.3385 8.95241 16.4535 8.90241 16.5901 8.89574C16.7255 8.88908 16.8465 8.93908 16.9531 9.04574C17.0598 9.15241 17.1131 9.27041 17.1131 9.39974C17.1131 9.52908 17.0598 9.64708 16.9531 9.75374L12.5641 14.1417C12.4775 14.2291 12.3885 14.2904 12.2971 14.3257C12.2065 14.3611 12.1071 14.3787 11.9991 14.3787Z"
            fill="black"
          />
        </svg>
      </div>
      {openCategories && (
        <div className="categories-mobile__container">
          <div className="categories-mobile__list-container">
            <svg
              onClick={() => setOpenCategories(false)}
              className="categories-mobile__close"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.39989 18.3079L5.69189 17.5999L11.2919 11.9999L5.69189 6.39989L6.39989 5.69189L11.9999 11.2919L17.5999 5.69189L18.3079 6.39989L12.7079 11.9999L18.3079 17.5999L17.5999 18.3079L11.9999 12.7079L6.39989 18.3079Z"
                fill="black"
              />
            </svg>

            <div className="categories-mobile__list">
              <div className="categories-mobile__list-title">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.927 21.6156L18.141 18.8536C17.8663 19.0622 17.5647 19.2222 17.236 19.3336C16.9073 19.4449 16.5593 19.5002 16.192 19.4996C15.2773 19.4996 14.494 19.1746 13.842 18.5246C13.19 17.8746 12.8643 17.0932 12.865 16.1806C12.8657 15.2679 13.1907 14.4872 13.84 13.8386C14.4893 13.1899 15.271 12.8656 16.185 12.8656C17.099 12.8656 17.8797 13.1892 18.527 13.8366C19.1743 14.4839 19.4987 15.2626 19.5 16.1726C19.5 16.5419 19.4433 16.8912 19.33 17.2206C19.218 17.5499 19.0573 17.8519 18.848 18.1266L21.616 20.9066L20.927 21.6156ZM5.807 19.5186C4.89767 19.5186 4.11933 19.1942 3.472 18.5456C2.824 17.8969 2.5 17.1059 2.5 16.1726C2.5 15.2632 2.824 14.4846 3.472 13.8366C4.11933 13.1886 4.898 12.8646 5.808 12.8646C6.74133 12.8646 7.53233 13.1886 8.181 13.8366C8.82967 14.4846 9.154 15.2632 9.154 16.1726C9.154 17.1059 8.82967 17.8969 8.181 18.5456C7.53233 19.1942 6.74033 19.5186 5.807 19.5186ZM5.808 18.5186C6.47333 18.5186 7.03067 18.2939 7.48 17.8446C7.92933 17.3952 8.154 16.8379 8.154 16.1726C8.154 15.5379 7.92933 14.9946 7.48 14.5426C7.03067 14.0906 6.47333 13.8646 5.808 13.8646C5.17333 13.8646 4.63 14.0906 4.178 14.5426C3.726 14.9946 3.5 15.5379 3.5 16.1726C3.5 16.8379 3.726 17.3952 4.178 17.8446C4.63 18.2939 5.17333 18.5186 5.808 18.5186ZM16.192 18.5186C16.8267 18.5186 17.37 18.2939 17.822 17.8446C18.274 17.3952 18.5 16.8379 18.5 16.1726C18.5 15.5379 18.274 14.9946 17.822 14.5426C17.37 14.0906 16.8267 13.8646 16.192 13.8646C15.5267 13.8646 14.9693 14.0906 14.52 14.5426C14.0707 14.9946 13.846 15.5379 13.846 16.1726C13.846 16.8379 14.0707 17.3952 14.52 17.8446C14.9693 18.2939 15.5267 18.5186 16.192 18.5186ZM5.808 9.17255C4.898 9.17255 4.11933 8.84822 3.472 8.19955C2.824 7.55089 2.5 6.75989 2.5 5.82655C2.5 4.91722 2.824 4.13855 3.472 3.49055C4.11933 2.84255 4.898 2.51855 5.808 2.51855C6.74133 2.51855 7.53233 2.84255 8.181 3.49055C8.82967 4.13855 9.154 4.91722 9.154 5.82655C9.154 6.75989 8.82967 7.55089 8.181 8.19955C7.53233 8.84822 6.74133 9.17255 5.808 9.17255ZM16.192 9.17255C15.2587 9.17255 14.4677 8.84822 13.819 8.19955C13.1703 7.55089 12.846 6.75989 12.846 5.82655C12.846 4.91655 13.1703 4.13789 13.819 3.49055C14.4677 2.84255 15.2587 2.51855 16.192 2.51855C17.102 2.51855 17.8807 2.84255 18.528 3.49055C19.176 4.13855 19.5 4.91722 19.5 5.82655C19.5 6.75989 19.176 7.55089 18.528 8.19955C17.8807 8.84822 17.102 9.17255 16.192 9.17255ZM5.808 8.17255C6.47333 8.17255 7.03067 7.94789 7.48 7.49855C7.92933 7.04922 8.154 6.49189 8.154 5.82655C8.154 5.19189 7.92933 4.64855 7.48 4.19655C7.03067 3.74455 6.47333 3.51855 5.808 3.51855C5.17333 3.51855 4.63 3.74455 4.178 4.19655C3.726 4.64855 3.5 5.19189 3.5 5.82655C3.5 6.49189 3.726 7.04922 4.178 7.49855C4.63 7.94789 5.17333 8.17255 5.808 8.17255ZM16.192 8.17255C16.8267 8.17255 17.37 7.94789 17.822 7.49855C18.274 7.04922 18.5 6.49189 18.5 5.82655C18.5 5.19189 18.274 4.64855 17.822 4.19655C17.37 3.74455 16.8267 3.51855 16.192 3.51855C15.5267 3.51855 14.9693 3.74455 14.52 4.19655C14.0707 4.64855 13.846 5.19189 13.846 5.82655C13.846 6.49189 14.0707 7.04922 14.52 7.49855C14.9693 7.94789 15.5267 8.17255 16.192 8.17255Z"
                    fill="black"
                  />
                </svg>
                <h4 className="categories-mobile__list-h">Каталог</h4>
              </div>
              <div className="categories-mobile__list-items">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={classNames(
                      'categories-mobile__list-item-container',
                      {
                        notActive:
                          activeCategory && category.id !== activeCategory.id,
                      },
                    )}
                  >
                    <div
                      className={classNames('categories-mobile__item', {
                        isActive: activeCategory?.id === category.id,
                      })}
                    >
                      <p className="categories-mobile__item-name">
                        {category.nameUa}
                      </p>
                      <svg
                        className={classNames('categories-mobile__item-arrow', {
                          isActive: activeCategory?.id === category.id,
                        })}
                        width="24"
                        onClick={() => {
                          toggleSub(category);
                        }}
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.9991 14.3787C11.8918 14.3787 11.7925 14.3611 11.7011 14.3257C11.6098 14.2904 11.5208 14.2291 11.4341 14.1417L7.04512 9.75374C6.95179 9.66041 6.90179 9.54574 6.89512 9.40974C6.88845 9.27374 6.93845 9.15241 7.04512 9.04574C7.15179 8.93908 7.26979 8.88574 7.39912 8.88574C7.52845 8.88574 7.64645 8.93908 7.75312 9.04574L11.9991 13.2917L16.2451 9.04574C16.3385 8.95241 16.4535 8.90241 16.5901 8.89574C16.7255 8.88908 16.8465 8.93908 16.9531 9.04574C17.0598 9.15241 17.1131 9.27041 17.1131 9.39974C17.1131 9.52908 17.0598 9.64708 16.9531 9.75374L12.5641 14.1417C12.4775 14.2291 12.3885 14.2904 12.2971 14.3257C12.2065 14.3611 12.1071 14.3787 11.9991 14.3787Z" />
                      </svg>
                    </div>
                    {/* {activeCategory && activeCategory.id === category.id && ( */}

                    <div
                      className="categories-mobile__item-items-container"
                      style={{
                        height: activeCategory?.id === category.id ? height : 0,
                      }}
                    >
                      <SimpleBar
                        className={classNames('categories-mobile__item-items', {
                          isActive: category.id === activeCategory?.id,
                        })}
                      >
                        {category.subcategories.map((subcategory) => (
                          <p
                            className="categories-mobile__item-item"
                            key={subcategory.id}
                          >
                            {subcategory.nameUa}
                          </p>
                        ))}
                      </SimpleBar>
                    </div>
                    {/* )} */}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            onClick={() => setOpenCategories(false)}
            className="categories-mobile__backdrop"
          />
        </div>
      )}
    </>
  );
};
