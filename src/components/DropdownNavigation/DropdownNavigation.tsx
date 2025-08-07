import { useEffect, useRef, useState } from 'react';
import { Arrow } from '../Imgs/Arrow';
import { MopSVG } from '../Imgs/MopSVG';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { Close } from '../Imgs/Close';
import { InstantMixRounded } from '../Imgs/InstantMixRounded';
import { ActionKeySVG } from '../Imgs/ActionKeySVG';
import { SortArrowSVG } from '../Imgs/SortArrowSVG';
import { OptionType } from '../../types/optionType';
import { useSearchParams } from 'react-router-dom';
import { SearchLink } from '../../utils/SearchLink';
import { CheckboxRound } from '../Imgs/CheckBoxRound/CheckBoxRound';
import { CheckBoxSquare } from '../Imgs/CheckBoxSquare/CheckBoxSquare';

const MAXHEIGHT = 266;
const MAXHEIGHTTABLET = 416;

type Props = {
  optionType: OptionType;
};

export const DropdownNavigation: React.FC<Props> = ({ optionType }) => {
  const [searchParams] = useSearchParams();
  const currentOptionNav =
    optionType.slug === 'filters' ?
      searchParams.getAll(optionType.slug) || ''
    : searchParams.get(optionType.slug) || '';

  const [activeOptionType, setActiveOptionType] = useState<null | number>(null);
  const [currentHeight, setCurrentHeight] = useState<number>(0);
  const [currentHeightMob, setCurrentHeightMob] = useState<number>(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const refsMob = useRef<(HTMLDivElement | null)[]>([]);

  const [openModal, setOpenModal] = useState<boolean>(false);

  // function toggleOptions(param: string, type: string) {
  //   console.log(123);

  //   if (type === 'sort') {
  //     return param
  //   }
  //   if (type === 'filter') {
  //     return currentOptionNav.includes(param) ?
  //       currentOptionNav.split('&').filter(a => a !== param).join('&') :
  //       `${currentOptionNav}&${param}`
  //   }
  // }

  useEffect(() => {
    if (activeOptionType === null) {
      setCurrentHeight(0);
      return;
    }

    const index = optionType.options.findIndex(
      (s) => s.id === activeOptionType,
    );
    const el = refs.current[index];
    const elMob = refsMob.current[index];

    if (el?.clientHeight) {
      setCurrentHeight(el.clientHeight);
    }
    if (elMob?.clientHeight) {
      setCurrentHeightMob(elMob.clientHeight);
    }
  }, [activeOptionType]);

  return (
    <>
      <div className="dropdown-navigation desktop">
        <div className="dropdown-navigation__top-bar">
          {optionType.slug === 'filters' && <InstantMixRounded />}
          {optionType.slug === 'categories' && <ActionKeySVG />}
          {optionType.slug === 'sort' && <SortArrowSVG />}
          <h4 className="dropdown-navigation__h4">{optionType.nameUa}</h4>
          <MopSVG className="dropdown-navigation__mop" />
        </div>
        <div className="dropdown-navigation__list-of-options">
          {optionType.options.map((option, index) => (
            <div
              key={option.id}
              className="dropdown-navigation__option"
            >
              <div
                onClick={() =>
                  setActiveOptionType(
                    option.id === activeOptionType ? null : option.id,
                  )
                }
                className="dropdown-navigation__option-top-bar"
              >
                <p>{option.nameUa}</p>
                <Arrow />
              </div>
              <div
                style={{
                  height: activeOptionType === option.id ? currentHeight : 0,
                }}
                className="dropdown-navigation__list-of-suboptions-wrapper"
              >
                <div
                  ref={(el) => (refs.current[index] = el)}
                  className="dropdown-navigation__list-of-suboptions"
                >
                  <SimpleBar
                    style={{ maxHeight: MAXHEIGHT }}
                    className="dropdown-navigation__simplebar"
                  >
                    {option.subcategories.map((subcategorie) => (
                      <p>{subcategorie.nameEng}</p>
                      // <SearchLink
                      //   style={{ marginRight: MAXHEIGHT < currentHeightMob ? '8px' : '0' }}
                      //   params={{ [optionType.slug]: toggleOptions(subcategorie.slug, optionType.type) || '' }}
                      //   className="dropdown-navigation__suboption hoverable " // add 'hoverable' class in case we need hover effect on svg bellow
                      // >
                      //   <p>{subcategorie.nameUa}</p>
                      //   {optionType.slug === 'filters' && <CheckBoxSquare isActive={currentOptionNav.includes(subcategorie.slug)} />}
                      //   {optionType.slug === 'sort' && <CheckboxRound isActive={currentOptionNav.includes(subcategorie.slug)} />}
                      // </SearchLink>
                    ))}
                  </SimpleBar>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => setOpenModal(true)}
        className="dropdown-navigation__top-bar tablet-phone"
      >
        {optionType.slug === 'filters' && (
          <InstantMixRounded className="dropdown-navigation__nav-icon" />
        )}
        {optionType.slug === 'categories' && (
          <ActionKeySVG className="dropdown-navigation__nav-icon" />
        )}
        {optionType.slug === 'sort' && (
          <SortArrowSVG className="dropdown-navigation__nav-icon" />
        )}
        <h4 className="dropdown-navigation__h4">{optionType.nameUa}</h4>
        <Arrow className="dropdown-navigation__arrow" />
      </button>
      <ModalWindow
        openModal={openModal}
        setOpenModal={setOpenModal}
        visibility="dropdown-navigation__modal-visibility"
        secondModal={false}
      >
        <div className="dropdown-navigation__modal-window">
          <Close
            className="dropdown-navigation__close"
            onClick={() => setOpenModal(false)}
          />
          <div className="dropdown-navigation">
            <div className="dropdown-navigation__top-bar">
              {optionType.slug === 'filters' && (
                <InstantMixRounded className="dropdown-navigation__nav-icon" />
              )}
              {optionType.slug === 'categories' && (
                <ActionKeySVG className="dropdown-navigation__nav-icon" />
              )}
              {optionType.slug === 'sort' && (
                <SortArrowSVG className="dropdown-navigation__nav-icon" />
              )}
              <h4 className="dropdown-navigation__h4">{optionType.nameUa}</h4>
              <MopSVG
                className={classNames('dropdown-navigation__mop', {
                  isActive: currentOptionNav,
                })}
              />
            </div>
            <div className="dropdown-navigation__list-of-options">
              {optionType.options.map((option, index) => (
                <div className="dropdown-navigation__option">
                  <div
                    onClick={() =>
                      setActiveOptionType(
                        option.id === activeOptionType ? null : option.id,
                      )
                    }
                    className={classNames(
                      'dropdown-navigation__option-top-bar',
                      {
                        isActive: activeOptionType === option.id,
                      },
                    )}
                  >
                    <p>{option.nameUa}</p>
                    <Arrow
                      className={classNames('dropdown-navigation__arrow', {
                        isActive: activeOptionType === option.id,
                      })}
                    />
                  </div>
                  <div
                    style={{
                      height:
                        activeOptionType === option.id ? currentHeightMob : 0,
                    }}
                    className="dropdown-navigation__list-of-suboptions-wrapper"
                  >
                    <div
                      ref={(el) => (refsMob.current[index] = el)}
                      className="dropdown-navigation__list-of-suboptions"
                    >
                      <SimpleBar
                        className="dropdown-navigation__simplebar"
                        style={{ maxHeight: MAXHEIGHTTABLET }}
                      >
                        {option.subcategories.map((subcategorie) => (
                          <SearchLink
                            params={{
                              [optionType.slug]: [
                                ...currentOptionNav,
                                subcategorie.slug,
                              ],
                            }}
                            style={{
                              marginRight:
                                MAXHEIGHT < currentHeightMob ? '24px' : '0',
                            }}
                            className={classNames(
                              'dropdown-navigation__suboption hoverable',
                              {
                                isActive: currentOptionNav.includes(
                                  subcategorie.slug,
                                ),
                              },
                            )} // add 'hoverable' class in case we need hover effect on svg bellow
                          >
                            <p>{subcategorie.nameUa}</p>
                            {optionType.slug === 'filters' && (
                              <CheckBoxSquare
                                isActive={currentOptionNav.includes(
                                  subcategorie.slug,
                                )}
                              />
                            )}
                            {optionType.slug === 'sort' && (
                              <CheckboxRound
                                isActive={currentOptionNav.includes(
                                  subcategorie.slug,
                                )}
                              />
                            )}
                          </SearchLink>
                        ))}
                      </SimpleBar>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ModalWindow>
    </>
  );
};
