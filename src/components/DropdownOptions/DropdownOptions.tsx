import classNames from 'classnames';
import { SortSVG } from '../Imgs/SortSVG';
import { Arrow } from '../Imgs/Arrow';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { CheckboxRound } from '../Imgs/CheckboxRound';
import { Close } from '../Imgs/Close';
import { MopSVG } from '../Imgs/MopSVG';
import { useEffect, useRef, useState } from 'react';

type Sortings = {
  id: number;
  name: string;
  types: string[];
};

type Props = {
  sortings: Sortings[];
};

export const DropdownOptions: React.FC<Props> = ({ sortings }) => {
  const [currentHeight, setCurrentHeight] = useState<number>(0);
  const [activeSortings, setActiveSortings] = useState(false);
  const [activeSortType, setActiveSortType] = useState<null | number>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const refsMob = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activeSortType === null) {
      setCurrentHeight(0);
      return;
    }

    const index = sortings.findIndex((s) => s.id === activeSortType);
    const el = refs.current[index];

    if (el?.clientHeight) {
      setCurrentHeight(el.clientHeight);
    }
  }, [activeSortType]);

  useEffect(() => {
    if (activeSortType === null) {
      setCurrentHeight(0);
      return;
    }

    const index = sortings.findIndex((s) => s.id === activeSortType);
    const el = refsMob.current[index];

    if (el?.clientHeight) {
      setCurrentHeight(el.clientHeight);
    }
  }, [activeSortType]);

  return (
    <div className="dropdown-options">
      <button
        onClick={() => setActiveSortings(!activeSortings)}
        className={classNames('dropdown-options__sorting-button', {
          isActive: activeSortings,
        })}
      >
        <SortSVG className="dropdown-options__sort-search" />
        <h4 className="dropdown-options__sort-text descktop">Сортування</h4>
        <Arrow
          className={classNames('dropdown-options__sort-arrow', {
            isActive: activeSortings,
          })}
        />
      </button>

      <div
        className={classNames('dropdown-options__sort-list', {
          isActive: activeSortings,
        })}
      >
        {sortings.map((a, index) => (
          <div
            key={a.id}
            className="dropdown-options__sort-list-item"
          >
            <div
              className={classNames('dropdown-options__item-title', {
                isActive: a.id === activeSortType,
              })}
              onClick={() => {
                setActiveSortType(a.id === activeSortType ? null : a.id);
              }}
            >
              <p className="dropdown-options__item-name">{a.name}</p>
              <Arrow
                className={classNames('dropdown-options__item-sort-arrow', {
                  isActive: a.id === activeSortType,
                })}
              />
            </div>
            <div
              style={{
                height: activeSortType === a.id ? currentHeight : 0,
              }}
              className={classNames('dropdown-options__list-item-container', {
                isActive: activeSortType === a.id,
              })}
            >
              <div
                ref={(el) => (refs.current[index] = el)}
                className="dropdown-options__list-item-items"
              >
                {a.types.map((b) => (
                  <div
                    key={b}
                    className="dropdown-options__list-item-item"
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
        visibility="dropdown-options__modal-visibility"
        setOpenModal={setActiveSortings}
        openModal={activeSortings}
      >
        <div className="dropdown-options__modal-position">
          <Close
            className="dropdown-options__close"
            onClick={() => setActiveSortings(false)}
          />
          <div className="dropdown-options__modal-content">
            <div
              className={classNames('dropdown-options__sorting-button', {
                isActive: activeSortings,
              })}
            >
              <SortSVG className="dropdown-options__sort-search" />
              <h4 className="dropdown-options__sort-text">Сортування</h4>
              <Arrow
                className={classNames('dropdown-options__sort-arrow', {
                  isActive: activeSortings,
                })}
              />
              <MopSVG className="dropdown-options__mop" />
            </div>
            {sortings.map((a, index) => (
              <div
                key={a.id}
                className="dropdown-options__sort-list-item"
              >
                <div
                  className={classNames('dropdown-options__item-title', {
                    isActive: a.id === activeSortType,
                  })}
                  onClick={() =>
                    setActiveSortType(a.id === activeSortType ? null : a.id)
                  }
                >
                  <p className="dropdown-options__item-name">{a.name}</p>
                  <Arrow
                    className={classNames('dropdown-options__item-sort-arrow', {
                      isActive: a.id === activeSortType,
                    })}
                  />
                </div>
                <div
                  style={{
                    height: activeSortType === a.id ? currentHeight : 0,
                  }}
                  className={classNames(
                    'dropdown-options__list-item-container',
                    {
                      isActive: activeSortType === a.id,
                    },
                  )}
                >
                  <div
                    ref={(el) => (refsMob.current[index] = el)}
                    className="dropdown-options__list-item-items"
                  >
                    {a.types.map((b) => (
                      <div
                        key={b}
                        className="dropdown-options__list-item-item"
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
        </div>
      </ModalWindow>
    </div>
  );
};
