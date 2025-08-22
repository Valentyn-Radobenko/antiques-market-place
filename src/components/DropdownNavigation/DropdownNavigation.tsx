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
  const [activeOptionType, setActiveOptionType] = useState<null | string>(null);
  const [currentHeight, setCurrentHeight] = useState<number>(0);
  const [currentHeightMob, setCurrentHeightMob] = useState<number>(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const refsMob = useRef<(HTMLDivElement | null)[]>([]);

  const [openModal, setOpenModal] = useState<boolean>(false);

  function getFilterKeys() {
    const serchParamsKeys = Array.from(searchParams.keys());
    const filterKeys = optionType.options.map((a) => a.slug);

    for (let i = 0; i < filterKeys.length; i++) {
      if (serchParamsKeys.includes(filterKeys[i])) {
        return true;
      }
    }

    return false;
  }

  function getActiveClass(type: string, option: string, slug: string) {
    if (type === 'multiple') {
      return searchParams.getAll(option) || '';
    } else {
      return searchParams.get(slug) || '';
    }
  }

  function toggleOptions(
    param: string,
    option: string,
    type: string,
    slug: string,
  ) {
    if (type === 'multiple') {
      const currentSearchParam = searchParams.getAll(option) || '';
      return {
        [option]:
          currentSearchParam.includes(param) ?
            currentSearchParam.filter((a) => a !== param)
          : [...currentSearchParam, param],
      };
    } else
      return {
        [slug]: param,
      };
  }

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
      {optionType.slug !== 'category' && (
        <div className="dropdown-navigation desktop">
          <div className="dropdown-navigation__top-bar">
            {optionType.slug === 'filters' && (
              <InstantMixRounded className="dropdown-navigation__nav-icon" />
            )}
            {/* {optionType.slug === 'categories' && (
            <ActionKeySVG className="dropdown-navigation__nav-icon" />
          )} */}
            {optionType.slug === 'sort' && (
              <SortArrowSVG className="dropdown-navigation__nav-icon" />
            )}
            <h4 className="dropdown-navigation__h4">{optionType.nameUa}</h4>
            <SearchLink
              params={
                optionType.type === 'multiple' ?
                  Object.fromEntries(
                    optionType.options.map((a) => [a.slug, null]),
                  )
                : { [optionType.slug]: null }
              }
              className={classNames('dropdown-navigation__mop-wrapper', {
                isActive:
                  optionType.type === 'multiple' ?
                    getFilterKeys()
                  : searchParams.get(optionType.slug),
              })}
            >
              <MopSVG className="dropdown-navigation__mop" />
            </SearchLink>
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
                  className={classNames('dropdown-navigation__option-top-bar', {
                    isActive: activeOptionType === option.id,
                  })}
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
                    height: activeOptionType === option.id ? currentHeight : 0,
                  }}
                  className="dropdown-navigation__list-of-suboptions-wrapper"
                >
                  <div
                    ref={(el) => (refs.current[index] = el)}
                    className="dropdown-navigation__list-of-suboptions"
                  >
                    <SimpleBar
                      className="dropdown-navigation__simplebar"
                      style={{ maxHeight: MAXHEIGHT }}
                    >
                      {option.subcategories.map((subcategorie) => (
                        <SearchLink
                          params={toggleOptions(
                            subcategorie.slug,
                            option.slug,
                            optionType.type,
                            optionType.slug,
                          )}
                          style={{
                            marginRight:
                              MAXHEIGHT <= currentHeight ? '8px' : '0',
                          }}
                          className={classNames(
                            'dropdown-navigation__suboption hoverable',
                            {
                              isActive: getActiveClass(
                                optionType.type,
                                option.slug,
                                optionType.slug,
                              ).includes(subcategorie.slug),
                            },
                          )} // add 'hoverable' class in case we need hover effect on svg bellow
                        >
                          <p>{subcategorie.nameUa}</p>
                          {optionType.slug === 'filters' && (
                            <CheckBoxSquare
                              isActive={getActiveClass(
                                optionType.type,
                                option.slug,
                                optionType.slug,
                              ).includes(subcategorie.slug)}
                            />
                          )}
                          {optionType.slug === 'sort' && (
                            <CheckboxRound
                              isActive={getActiveClass(
                                optionType.type,
                                option.slug,
                                optionType.slug,
                              ).includes(subcategorie.slug)}
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
      )}
      {optionType.slug === 'category' && (
        <div
          className={classNames('dropdown-navigation__categories', {
            isActive: activeOptionType,
          })}
        >
          {optionType.options.map((option) => (
            <div className="dropdown-navigation__categories-border-wrapper">
              <div
                onClick={() =>
                  setActiveOptionType(
                    option.id === activeOptionType ? null : option.id,
                  )
                }
                className={classNames(
                  'dropdown-navigation__categories-option',
                  {
                    isActive: option.id === activeOptionType,
                    notActive:
                      option.id !== activeOptionType &&
                      activeOptionType !== null,
                  },
                )}
              >
                <p className="dropdown-navigation__categories-option-name">
                  {option.nameUa}
                </p>
                <Arrow
                  className={classNames(
                    'dropdown-navigation__categories-arrow',
                    {
                      isActive: option.id === activeOptionType,
                    },
                  )}
                />
                {activeOptionType === option.id && (
                  <div className="dropdown-navigation__categories-subcategories-list">
                    {option.subcategories.map((subcategorie) => (
                      <SearchLink
                        params={toggleOptions(
                          subcategorie.slug,
                          option.slug,
                          optionType.type,
                          optionType.slug,
                        )}
                        className={classNames(
                          'dropdown-navigation__categories-subcategories',
                          {
                            isActive: getActiveClass(
                              optionType.type,
                              option.slug,
                              optionType.slug,
                            ).includes(subcategorie.slug),
                          },
                        )}
                      >
                        {subcategorie.nameUa}
                      </SearchLink>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpenModal(true)}
        className={classNames('dropdown-navigation__top-bar tablet-phone', {
          categories: optionType.slug === 'category',
        })}
      >
        {optionType.slug === 'filters' && (
          <InstantMixRounded className="dropdown-navigation__nav-icon" />
        )}
        {optionType.slug === 'category' && (
          <ActionKeySVG className="dropdown-navigation__nav-icon" />
        )}
        {optionType.slug === 'sort' && (
          <SortArrowSVG className="dropdown-navigation__nav-icon" />
        )}
        <h4 className="dropdown-navigation__h4">{optionType.nameUa}</h4>
        <Arrow className="dropdown-navigation__arrow phone" />
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
            <div
              className={classNames('dropdown-navigation__top-bar', {
                categories: optionType.slug === 'category',
              })}
            >
              {optionType.slug === 'filters' && (
                <InstantMixRounded className="dropdown-navigation__nav-icon" />
              )}
              {optionType.slug === 'category' && (
                <ActionKeySVG className="dropdown-navigation__nav-icon" />
              )}
              {optionType.slug === 'sort' && (
                <SortArrowSVG className="dropdown-navigation__nav-icon" />
              )}
              <h4 className="dropdown-navigation__h4">{optionType.nameUa}</h4>
              {optionType.slug !== 'category' && (
                <SearchLink
                  params={
                    optionType.type === 'multiple' ?
                      Object.fromEntries(
                        optionType.options.map((a) => [a.slug, null]),
                      )
                    : { [optionType.slug]: null }
                  }
                  className={classNames('dropdown-navigation__mop-wrapper', {
                    isActive:
                      optionType.type === 'multiple' ?
                        getFilterKeys()
                      : searchParams.get(optionType.slug),
                  })}
                >
                  <MopSVG className="dropdown-navigation__mop" />
                </SearchLink>
              )}
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
                        categories: optionType.slug === 'category',
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
                            params={toggleOptions(
                              subcategorie.slug,
                              option.slug,
                              optionType.type,
                              optionType.slug,
                            )}
                            style={{
                              marginRight:
                                MAXHEIGHTTABLET <= currentHeightMob ? '24px' : (
                                  '0'
                                ),
                            }}
                            className={classNames(
                              'dropdown-navigation__suboption hoverable',
                              {
                                isActive: getActiveClass(
                                  optionType.type,
                                  option.slug,
                                  optionType.slug,
                                ).includes(subcategorie.slug),
                              },
                            )} // add 'hoverable' class in case we need hover effect on svg bellow
                          >
                            <p>{subcategorie.nameUa}</p>
                            {optionType.slug === 'filters' && (
                              <CheckBoxSquare
                                isActive={getActiveClass(
                                  optionType.type,
                                  option.slug,
                                  optionType.slug,
                                ).includes(subcategorie.slug)}
                              />
                            )}
                            {optionType.slug === 'sort' && (
                              <CheckboxRound
                                isActive={getActiveClass(
                                  optionType.type,
                                  option.slug,
                                  optionType.slug,
                                ).includes(subcategorie.slug)}
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

// add borders on modal
// stretch filters on tablet/phone
//fix problem with existing mop (відкривається багато модалок???), скоріш треба приховувати модалку взагалі, чи хоча б її контент
