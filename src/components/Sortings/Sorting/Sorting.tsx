import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { SearchLink } from '../../../utils/SearchLink';
import classNames from 'classnames';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { SortingType } from '../../../types/sorting';
import { SortingItem } from '../SortingItem/SortingItem';

type Props = {
  sorting: SortingType;
  setActiveSortType: Dispatch<SetStateAction<number | null>>;
  activeSortType: number | null;
};

export const Sorting: React.FC<Props> = ({
  sorting,
  setActiveSortType,
  activeSortType,
}) => {
  // const [activeSortTypeType, setActiveSortTypeType] = useState<number | null>(null);
  const [height, setHeight] = useState<number>(0);
  const toggleMenu = function () {
    if (activeSortType === sorting.id) {
      setActiveSortType(null);
    } else {
      setActiveSortType(sorting.id);
    }
  };

  const heightItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heightItemRef.current) {
      setHeight(heightItemRef.current.clientHeight);
    }
  }, [activeSortType]);

  return (
    <div className="sorting">
      <div className="sorting__title">
        <SearchLink
          className="sorting__link"
          params={{}}
        >
          {sorting.nameUa}
        </SearchLink>
        <button
          onClick={() => {
            toggleMenu();
          }}
        >
          <svg
            className={classNames('sorting__arrow', {
              'isActive-arrow': activeSortType === sorting.id,
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
        className="sorting__container"
        style={{ height: activeSortType === sorting.id ? height : 0 }}
      >
        <div
          ref={heightItemRef}
          className={classNames('sorting__sub-options', {
            isActive: activeSortType === sorting.id,
          })}
        >
          <SimpleBar style={{ maxHeight: 266 }}>
            {sorting.sortType.map((sortType) => (
              <SortingItem
                key={sortType.id}
                sortType={sortType}
              />
            ))}
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};
