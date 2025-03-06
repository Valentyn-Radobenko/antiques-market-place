import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { SearchLink } from '../../../utils/SearchLink';
import classNames from 'classnames';
import { FiltersType } from '../../../types/filters';
import { FilterItem } from '../FilterItem/FilterItem';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

type Props = {
  filter: FiltersType;
  setActiveFilter: Dispatch<SetStateAction<number | null>>;
  activeFilter: number | null;
};

const MAXHEIGHT = 266;

export const Filter: React.FC<Props> = ({
  filter,
  setActiveFilter,
  activeFilter,
}) => {
  // const [activeFilterType, setActiveFilterType] = useState<number | null>(null);
  const [height, setHeight] = useState<number>(0);
  const [scrollHeight, seScrollHeight] = useState<number>(0);

  const toggleMenu = function () {
    if (activeFilter === filter.id) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filter.id);
    }
  };

  const heightItemRef = useRef<HTMLDivElement | null>(null);
  const refScrollWidth = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heightItemRef.current) {
      setHeight(heightItemRef.current.clientHeight);
    }
    if (refScrollWidth.current) {
      seScrollHeight(refScrollWidth.current.clientHeight);
    }
  }, [activeFilter]);

  return (
    <div className="filter">
      <div
        className={classNames('filter__title', {
          isActive: activeFilter === filter.id,
        })}
        onClick={() => {
          toggleMenu();
        }}
      >
        <SearchLink params={{}}>{filter.nameUa}</SearchLink>
        <button>
          <svg
            className={classNames('filter__arrow', {
              isActive: activeFilter === filter.id,
            })}
            width="24"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.9991 14.3787C11.8918 14.3787 11.7925 14.3611 11.7011 14.3257C11.6098 14.2904 11.5208 14.2291 11.4341 14.1417L7.04512 9.75374C6.95179 9.66041 6.90179 9.54574 6.89512 9.40974C6.88845 9.27374 6.93845 9.15241 7.04512 9.04574C7.15179 8.93908 7.26979 8.88574 7.39912 8.88574C7.52845 8.88574 7.64645 8.93908 7.75312 9.04574L11.9991 13.2917L16.2451 9.04574C16.3385 8.95241 16.4535 8.90241 16.5901 8.89574C16.7255 8.88908 16.8465 8.93908 16.9531 9.04574C17.0598 9.15241 17.1131 9.27041 17.1131 9.39974C17.1131 9.52908 17.0598 9.64708 16.9531 9.75374L12.5641 14.1417C12.4775 14.2291 12.3885 14.2904 12.2971 14.3257C12.2065 14.3611 12.1071 14.3787 11.9991 14.3787Z" />
          </svg>
        </button>
      </div>
      <div
        className="filter__container"
        style={{ height: activeFilter === filter.id ? height : 0 }}
      >
        <div
          ref={heightItemRef}
          className={classNames('filter__sub-options', {
            isActive: activeFilter === filter.id,
          })}
        >
          <SimpleBar style={{ maxHeight: 266 }}>
            <div
              ref={refScrollWidth}
              className={classNames('filter__simplebar-box', {
                simplebarPadding: scrollHeight > MAXHEIGHT,
              })}
            >
              {filter.filterType.map((filterItem) => (
                <FilterItem
                  key={filterItem.id}
                  filterItem={filterItem}
                  filterParam={filter.slug}
                />
              ))}
            </div>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};
