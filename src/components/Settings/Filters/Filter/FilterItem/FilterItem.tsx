import { FilterType } from '../../../../../types/filters';
import { SearchLink } from '../../../../../utils/SearchLink';

type Props = {
  filterItem: FilterType;
};

export const FilterItem: React.FC<Props> = ({ filterItem }) => {
  // const toggleMenu = function () {
  //   if (activeFilter === filterItem.id) {

  //     setActiveFilterType(null)
  //   } else  {

  //     setActiveFilterType(filterItem.id)
  //   }
  // }

  return (
    <div className="filteritem">
      <div className="filteritem__title">
        <SearchLink
          className="filteritem__link"
          params={{}}
        >
          {filterItem.nameUa}
        </SearchLink>

        {/* <button
          onClick={() => {
            toggleMenu()
          }}
        >
          <svg
            className={classNames('filteritem__arrow', {
              'isActive-arrow': activeFilter === filterItem.id,
            })}
            width="24" fill="currentColor" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9991 14.3787C11.8918 14.3787 11.7925 14.3611 11.7011 14.3257C11.6098 14.2904 11.5208 14.2291 11.4341 14.1417L7.04512 9.75374C6.95179 9.66041 6.90179 9.54574 6.89512 9.40974C6.88845 9.27374 6.93845 9.15241 7.04512 9.04574C7.15179 8.93908 7.26979 8.88574 7.39912 8.88574C7.52845 8.88574 7.64645 8.93908 7.75312 9.04574L11.9991 13.2917L16.2451 9.04574C16.3385 8.95241 16.4535 8.90241 16.5901 8.89574C16.7255 8.88908 16.8465 8.93908 16.9531 9.04574C17.0598 9.15241 17.1131 9.27041 17.1131 9.39974C17.1131 9.52908 17.0598 9.64708 16.9531 9.75374L12.5641 14.1417C12.4775 14.2291 12.3885 14.2904 12.2971 14.3257C12.2065 14.3611 12.1071 14.3787 11.9991 14.3787Z" />
          </svg>
        </button> */}
      </div>
    </div>
  );
};
