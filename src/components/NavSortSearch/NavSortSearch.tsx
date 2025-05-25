import classNames from 'classnames';
import { Arrow } from '../Imgs/Arrow';
import { SortSVG } from '../Imgs/SortSVG';
import { MopSVG } from '../Imgs/MopSVG';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { SearchSVG } from '../Imgs/SearchSVG';
import { CheckboxRound } from '../Imgs/CheckboxRound';
import { useEffect, useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';

type Sortings = {
  id: number;
  name: string;
  types: string[];
};

type Props = {
  sortings: Sortings[];
};

export const NavSortSearch: React.FC<Props> = ({ sortings }) => {
  const [currentHeight, setCurrentHeight] = useState<number>(0);
  const [activeInput, setActiveInput] = useState<boolean>(false);
  const [activeSortings, setActiveSortings] = useState(false);
  const [activeSortType, setActiveSortType] = useState<null | number>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current?.clientHeight) {
      setCurrentHeight(ref.current?.clientHeight);
    }
  }, [activeSortType]);

  return (
    <div className="nav-sort-serach">
      <SimpleBar className="nav-sort-serach__wrapper-filters">
        <div className="nav-sort-serach__filters">
          <p className="nav-sort-serach__filter isActive">Усі замовлення</p>
          <p className="nav-sort-serach__filter">Куплені</p>
          <p className="nav-sort-serach__filter">Відправлені</p>
          <p className="nav-sort-serach__filter">Отримані</p>
          <p className="nav-sort-serach__filter">Скасовані</p>
        </div>
      </SimpleBar>
      <div
        className={classNames('nav-sort-serach__search-sorting', {
          isActive: activeInput,
        })}
      >
        <div
          className={classNames('nav-sort-serach__search', {
            isActive: activeInput,
          })}
        >
          <SearchSVG className="nav-sort-serach__search-svg" />
          <input
            onBlur={() => setActiveInput(false)}
            onFocus={() => setActiveInput(true)}
            placeholder="Пошук товару"
            type="text"
            className="nav-sort-serach__input"
          />
        </div>
        <button
          className={classNames('nav-sort-serach__search-button', {
            isActive: activeInput,
          })}
        >
          Знайти
        </button>
        <div
          className={classNames('nav-sort-serach__sorting', {
            isActive: !activeInput,
          })}
        >
          <button
            onClick={() => setActiveSortings(!activeSortings)}
            className={classNames('nav-sort-serach__sorting-button', {
              isActive: activeSortings,
            })}
          >
            <SortSVG className="nav-sort-serach__sort-search" />
            <h4 className="nav-sort-serach__sort-text descktop">Сортування</h4>
            <Arrow
              className={classNames('nav-sort-serach__sort-arrow', {
                isActive: activeSortings,
              })}
            />
          </button>

          <div
            className={classNames('nav-sort-serach__sort-list descktop', {
              isActive: activeSortings,
            })}
          >
            {sortings.map((a) => (
              <div
                key={a.id}
                className="nav-sort-serach__sort-list-item"
              >
                <div
                  className={classNames('nav-sort-serach__item-title', {
                    isActive: a.id === activeSortType,
                  })}
                  onClick={() =>
                    setActiveSortType(a.id === activeSortType ? null : a.id)
                  }
                >
                  <p className="nav-sort-serach__item-name">{a.name}</p>
                  <Arrow
                    className={classNames('nav-sort-serach__item-sort-arrow', {
                      isActive: a.id === activeSortType,
                    })}
                  />
                </div>
                <div
                  style={{
                    height: activeSortType === a.id ? currentHeight : 0,
                  }}
                  className={classNames(
                    'nav-sort-serach__list-item-container',
                    {
                      isActive: activeSortType === a.id,
                    },
                  )}
                >
                  <div
                    ref={ref}
                    className="nav-sort-serach__list-item-items"
                  >
                    {a.types.map((b) => (
                      <div
                        key={b}
                        className="nav-sort-serach__list-item-item"
                      >
                        <p>{b}</p>
                        <CheckboxRound value="defoult" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ModalWindow
            visibility="nav-sort-serach__modal-visibility"
            modalContent={'nav-sort-serach__modal-position'}
            setOpenModal={setActiveSortings}
            openModal={activeSortings}
          >
            <div className="nav-sort-serach__modal-content">
              <div
                className={classNames('nav-sort-serach__sorting-button', {
                  isActive: activeSortings,
                })}
              >
                <SortSVG className="nav-sort-serach__sort-search" />
                <h4 className="nav-sort-serach__sort-text">Сортування</h4>
                <Arrow
                  className={classNames('nav-sort-serach__sort-arrow', {
                    isActive: activeSortings,
                  })}
                />
                <MopSVG className="nav-sort-serach__mop" />
              </div>
              {sortings.map((a) => (
                <div
                  key={a.id}
                  className="nav-sort-serach__sort-list-item"
                >
                  <div
                    className={classNames('nav-sort-serach__item-title', {
                      isActive: a.id === activeSortType,
                    })}
                    onClick={() =>
                      setActiveSortType(a.id === activeSortType ? null : a.id)
                    }
                  >
                    <p className="nav-sort-serach__item-name">{a.name}</p>
                    <Arrow
                      className={classNames(
                        'nav-sort-serach__item-sort-arrow',
                        {
                          isActive: a.id === activeSortType,
                        },
                      )}
                    />
                  </div>
                  <div
                    style={{
                      height: activeSortType === a.id ? currentHeight : 0,
                    }}
                    className={classNames(
                      'nav-sort-serach__list-item-container',
                      {
                        isActive: activeSortType === a.id,
                      },
                    )}
                  >
                    <div
                      ref={ref}
                      className="nav-sort-serach__list-item-items"
                    >
                      {a.types.map((b) => (
                        <div
                          key={b}
                          className="nav-sort-serach__list-item-item"
                        >
                          <p>{b}</p>
                          <CheckboxRound value="defoult" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ModalWindow>
        </div>
      </div>
    </div>
  );
};
