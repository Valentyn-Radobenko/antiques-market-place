import { useEffect, useState } from 'react';
import { SortType } from '../../types/sorting';
import { sortings } from '../../data/sortings';
import { Sorting } from './Sorting/Sorting';
import { SortingMob } from './SortingMob/SortingMob';

export const Sortings = () => {
  const [activeSortType, setActiveSortType] = useState<number | null>(null);
  const [openSortings, setOpenSortings] = useState<boolean>(false);

  const toggleSub = (current: SortType) => {
    if (activeSortType === current.id) {
      setActiveSortType(null);
    } else {
      setActiveSortType(current.id);
    }
  };

  useEffect(() => {
    if (openSortings) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openSortings]);

  return (
    <>
      <div className="sortings">
        <div className="sortings__top-bar">
          <div className="sortings__title">
            <svg
              className="sortings__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="Currentcolor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 1.99997L7.646 1.64597L8 1.29297L8.354 1.64597L8 1.99997ZM8.5 17C8.5 17.1326 8.44732 17.2598 8.35355 17.3535C8.25978 17.4473 8.1326 17.5 8 17.5C7.86739 17.5 7.74021 17.4473 7.64644 17.3535C7.55267 17.2598 7.5 17.1326 7.5 17H8.5ZM3.646 5.64597L7.646 1.64597L8.354 2.35397L4.354 6.35397L3.646 5.64597ZM8.354 1.64597L12.354 5.64597L11.646 6.35397L7.646 2.35397L8.354 1.64597ZM8.5 1.99997V17H7.5V1.99997H8.5ZM16 22L15.646 22.354L16 22.707L16.354 22.354L16 22ZM16.5 6.99997C16.5 6.86736 16.4473 6.74018 16.3535 6.64642C16.2598 6.55265 16.1326 6.49997 16 6.49997C15.8674 6.49997 15.7402 6.55265 15.6464 6.64642C15.5527 6.74018 15.5 6.86736 15.5 6.99997H16.5ZM11.646 18.354L15.646 22.354L16.354 21.646L12.354 17.646L11.646 18.354ZM16.354 22.354L20.354 18.354L19.646 17.646L15.646 21.646L16.354 22.354ZM16.5 22V6.99997H15.5V22H16.5Z" />
            </svg>
            <h4 className="sortings__h">Сортування</h4>
          </div>
          <button className="sortings__clear-button">
            <svg
              className="sortings__clear-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.6931 11.4998H13.3091V4.19177C13.3091 3.83177 13.1811 3.52377 12.9251 3.26777C12.6697 3.01243 12.3617 2.88477 12.0011 2.88477C11.6404 2.88477 11.3324 3.01243 11.0771 3.26777C10.8211 3.52377 10.6931 3.83177 10.6931 4.19177V11.4998ZM4.88607 15.1158H19.1161V13.1158C19.1161 12.9358 19.0584 12.7881 18.9431 12.6728C18.8277 12.5574 18.6804 12.4998 18.5011 12.4998H5.50107C5.32107 12.4998 5.17374 12.5574 5.05907 12.6728C4.94374 12.7881 4.88607 12.9358 4.88607 13.1158V15.1158ZM4.09007 21.1158H6.69307V18.6158C6.69307 18.4738 6.74107 18.3548 6.83707 18.2588C6.93307 18.1628 7.05207 18.1151 7.19407 18.1158C7.33607 18.1164 7.45474 18.1641 7.55007 18.2588C7.6454 18.3534 7.69307 18.4724 7.69307 18.6158V21.1158H11.5011V18.6158C11.5011 18.4738 11.5491 18.3548 11.6451 18.2588C11.7411 18.1628 11.8601 18.1151 12.0021 18.1158C12.1441 18.1164 12.2627 18.1641 12.3581 18.2588C12.4534 18.3534 12.5011 18.4724 12.5011 18.6158V21.1158H16.3091V18.6158C16.3091 18.4738 16.3571 18.3548 16.4531 18.2588C16.5484 18.1634 16.6671 18.1158 16.8091 18.1158C16.9511 18.1158 17.0697 18.1634 17.1651 18.2588C17.2604 18.3541 17.3084 18.4731 17.3091 18.6158V21.1158H19.9121C20.1174 21.1158 20.2841 21.0354 20.4121 20.8748C20.5401 20.7141 20.5724 20.5378 20.5091 20.3458L19.2781 16.1158H4.72407L3.49407 20.3458C3.4294 20.5384 3.46107 20.7148 3.58907 20.8748C3.71707 21.0348 3.88374 21.1148 4.08907 21.1148M20.0671 22.1148H3.93607C3.45207 22.1148 3.0554 21.9208 2.74607 21.5328C2.4354 21.1441 2.35074 20.7101 2.49207 20.2308L3.88607 15.4418V12.9998C3.88607 12.5778 4.0304 12.2224 4.31907 11.9338C4.6084 11.6444 4.96407 11.4998 5.38607 11.4998H9.69307V4.19177C9.69307 3.5511 9.91774 3.00643 10.3671 2.55777C10.8157 2.1091 11.3604 1.88477 12.0011 1.88477C12.6417 1.88477 13.1867 2.1091 13.6361 2.55777C14.0854 3.00643 14.3097 3.5511 14.3091 4.19177V11.4998H18.6161C19.0381 11.4998 19.3937 11.6444 19.6831 11.9338C19.9717 12.2224 20.1161 12.5778 20.1161 12.9998V15.4418L21.5101 20.2688C21.6634 20.7354 21.5837 21.1598 21.2711 21.5418C20.9584 21.9238 20.5577 22.1148 20.0671 22.1148Z" />
            </svg>
          </button>
        </div>
        <div className="sortings__options">
          {sortings.map((sorting) => (
            <Sorting
              key={sorting.id}
              sorting={sorting}
              activeSortType={activeSortType}
              setActiveSortType={setActiveSortType}
            />
          ))}
        </div>
      </div>

      <div
        onClick={() => setOpenSortings(true)}
        className="settings-mobile gray"
      >
        <div className="settings-mobile__title">
          <svg
            className="sortings__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="Currentcolor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 1.99997L7.646 1.64597L8 1.29297L8.354 1.64597L8 1.99997ZM8.5 17C8.5 17.1326 8.44732 17.2598 8.35355 17.3535C8.25978 17.4473 8.1326 17.5 8 17.5C7.86739 17.5 7.74021 17.4473 7.64644 17.3535C7.55267 17.2598 7.5 17.1326 7.5 17H8.5ZM3.646 5.64597L7.646 1.64597L8.354 2.35397L4.354 6.35397L3.646 5.64597ZM8.354 1.64597L12.354 5.64597L11.646 6.35397L7.646 2.35397L8.354 1.64597ZM8.5 1.99997V17H7.5V1.99997H8.5ZM16 22L15.646 22.354L16 22.707L16.354 22.354L16 22ZM16.5 6.99997C16.5 6.86736 16.4473 6.74018 16.3535 6.64642C16.2598 6.55265 16.1326 6.49997 16 6.49997C15.8674 6.49997 15.7402 6.55265 15.6464 6.64642C15.5527 6.74018 15.5 6.86736 15.5 6.99997H16.5ZM11.646 18.354L15.646 22.354L16.354 21.646L12.354 17.646L11.646 18.354ZM16.354 22.354L20.354 18.354L19.646 17.646L15.646 21.646L16.354 22.354ZM16.5 22V6.99997H15.5V22H16.5Z" />
          </svg>
          <h4>Сортування</h4>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="settings-mobile__icon"
        >
          <path d="M11.9991 14.3787C11.8918 14.3787 11.7925 14.3611 11.7011 14.3257C11.6098 14.2904 11.5208 14.2291 11.4341 14.1417L7.04512 9.75374C6.95179 9.66041 6.90179 9.54574 6.89512 9.40974C6.88845 9.27374 6.93845 9.15241 7.04512 9.04574C7.15179 8.93908 7.26979 8.88574 7.39912 8.88574C7.52845 8.88574 7.64645 8.93908 7.75312 9.04574L11.9991 13.2917L16.2451 9.04574C16.3385 8.95241 16.4535 8.90241 16.5901 8.89574C16.7255 8.88908 16.8465 8.93908 16.9531 9.04574C17.0598 9.15241 17.1131 9.27041 17.1131 9.39974C17.1131 9.52908 17.0598 9.64708 16.9531 9.75374L12.5641 14.1417C12.4775 14.2291 12.3885 14.2904 12.2971 14.3257C12.2065 14.3611 12.1071 14.3787 11.9991 14.3787Z" />
        </svg>
      </div>

      {openSortings && (
        <div className="settings-mobile__container">
          <div className="settings-mobile__list-container">
            <svg
              onClick={() => setOpenSortings(false)}
              className="settings-mobile__close"
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
            <div className="settings-mobile__list gray">
              <div className="settings-mobile__list-title-container">
                <div className="settings-mobile__list-title">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentcolor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 1.99997L7.646 1.64597L8 1.29297L8.354 1.64597L8 1.99997ZM8.5 17C8.5 17.1326 8.44732 17.2598 8.35355 17.3535C8.25978 17.4473 8.1326 17.5 8 17.5C7.86739 17.5 7.74021 17.4473 7.64644 17.3535C7.55267 17.2598 7.5 17.1326 7.5 17H8.5ZM3.646 5.64597L7.646 1.64597L8.354 2.35397L4.354 6.35397L3.646 5.64597ZM8.354 1.64597L12.354 5.64597L11.646 6.35397L7.646 2.35397L8.354 1.64597ZM8.5 1.99997V17H7.5V1.99997H8.5ZM16 22L15.646 22.354L16 22.707L16.354 22.354L16 22ZM16.5 6.99997C16.5 6.86736 16.4473 6.74018 16.3535 6.64642C16.2598 6.55265 16.1326 6.49997 16 6.49997C15.8674 6.49997 15.7402 6.55265 15.6464 6.64642C15.5527 6.74018 15.5 6.86736 15.5 6.99997H16.5ZM11.646 18.354L15.646 22.354L16.354 21.646L12.354 17.646L11.646 18.354ZM16.354 22.354L20.354 18.354L19.646 17.646L15.646 21.646L16.354 22.354ZM16.5 22V6.99997H15.5V22H16.5Z" />
                  </svg>
                  <h4 className="settings-mobile__list-h">Сортування</h4>
                </div>
                <svg
                  className="settings-mobile__clear-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.6931 11.4998H13.3091V4.19177C13.3091 3.83177 13.1811 3.52377 12.9251 3.26777C12.6697 3.01243 12.3617 2.88477 12.0011 2.88477C11.6404 2.88477 11.3324 3.01243 11.0771 3.26777C10.8211 3.52377 10.6931 3.83177 10.6931 4.19177V11.4998ZM4.88607 15.1158H19.1161V13.1158C19.1161 12.9358 19.0584 12.7881 18.9431 12.6728C18.8277 12.5574 18.6804 12.4998 18.5011 12.4998H5.50107C5.32107 12.4998 5.17374 12.5574 5.05907 12.6728C4.94374 12.7881 4.88607 12.9358 4.88607 13.1158V15.1158ZM4.09007 21.1158H6.69307V18.6158C6.69307 18.4738 6.74107 18.3548 6.83707 18.2588C6.93307 18.1628 7.05207 18.1151 7.19407 18.1158C7.33607 18.1164 7.45474 18.1641 7.55007 18.2588C7.6454 18.3534 7.69307 18.4724 7.69307 18.6158V21.1158H11.5011V18.6158C11.5011 18.4738 11.5491 18.3548 11.6451 18.2588C11.7411 18.1628 11.8601 18.1151 12.0021 18.1158C12.1441 18.1164 12.2627 18.1641 12.3581 18.2588C12.4534 18.3534 12.5011 18.4724 12.5011 18.6158V21.1158H16.3091V18.6158C16.3091 18.4738 16.3571 18.3548 16.4531 18.2588C16.5484 18.1634 16.6671 18.1158 16.8091 18.1158C16.9511 18.1158 17.0697 18.1634 17.1651 18.2588C17.2604 18.3541 17.3084 18.4731 17.3091 18.6158V21.1158H19.9121C20.1174 21.1158 20.2841 21.0354 20.4121 20.8748C20.5401 20.7141 20.5724 20.5378 20.5091 20.3458L19.2781 16.1158H4.72407L3.49407 20.3458C3.4294 20.5384 3.46107 20.7148 3.58907 20.8748C3.71707 21.0348 3.88374 21.1148 4.08907 21.1148M20.0671 22.1148H3.93607C3.45207 22.1148 3.0554 21.9208 2.74607 21.5328C2.4354 21.1441 2.35074 20.7101 2.49207 20.2308L3.88607 15.4418V12.9998C3.88607 12.5778 4.0304 12.2224 4.31907 11.9338C4.6084 11.6444 4.96407 11.4998 5.38607 11.4998H9.69307V4.19177C9.69307 3.5511 9.91774 3.00643 10.3671 2.55777C10.8157 2.1091 11.3604 1.88477 12.0011 1.88477C12.6417 1.88477 13.1867 2.1091 13.6361 2.55777C14.0854 3.00643 14.3097 3.5511 14.3091 4.19177V11.4998H18.6161C19.0381 11.4998 19.3937 11.6444 19.6831 11.9338C19.9717 12.2224 20.1161 12.5778 20.1161 12.9998V15.4418L21.5101 20.2688C21.6634 20.7354 21.5837 21.1598 21.2711 21.5418C20.9584 21.9238 20.5577 22.1148 20.0671 22.1148Z" />
                </svg>
              </div>
              <div className="settings-mobile__list-items">
                {sortings.map((sorting) => (
                  <SortingMob
                    key={sorting.id}
                    sorting={sorting}
                    activeSortType={activeSortType}
                    toggleSub={toggleSub}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            onClick={() => setOpenSortings(false)}
            className="settings-mobile__backdrop"
          />
        </div>
      )}
    </>
  );
};
