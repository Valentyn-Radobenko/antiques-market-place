// import { useSearchParams } from "react-router-dom";
import { useState } from 'react';
import { filters } from '../../../data/filters';
import { Filter } from './Filter/Filter';

export const Filters = () => {
  const [activeFilter, setActiveFilter] = useState<number | null>(null);
  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="setting">
      <div className="setting__top-bar">
        <div className="setting__title">
          <svg
            className="setting__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.84595 19.5C5.70395 19.5 5.58528 19.452 5.48995 19.356C5.39461 19.26 5.34661 19.1413 5.34595 19V12.385H3.84595C3.70461 12.385 3.58595 12.337 3.48995 12.241C3.39395 12.145 3.34595 12.026 3.34595 11.884C3.34595 11.742 3.39395 11.6233 3.48995 11.528C3.58595 11.4327 3.70461 11.3847 3.84595 11.384H7.84595C7.98795 11.384 8.10695 11.4323 8.20295 11.529C8.29895 11.6257 8.34661 11.7443 8.34595 11.885C8.34528 12.0257 8.29761 12.1443 8.20295 12.241C8.10828 12.3377 7.98928 12.3857 7.84595 12.385H6.34595V19C6.34595 19.142 6.29795 19.2607 6.20195 19.356C6.10595 19.4513 5.98728 19.4993 5.84595 19.5ZM5.84595 8.61501C5.70395 8.61501 5.58528 8.56734 5.48995 8.47201C5.39461 8.37667 5.34661 8.25767 5.34595 8.11501V5.00001C5.34595 4.85801 5.39395 4.73934 5.48995 4.64401C5.58595 4.54801 5.70495 4.50001 5.84695 4.50001C5.98895 4.50001 6.10761 4.54801 6.20295 4.64401C6.29828 4.74001 6.34595 4.85867 6.34595 5.00001V8.11601C6.34595 8.25734 6.29795 8.37601 6.20195 8.47201C6.10595 8.56801 5.98728 8.61601 5.84595 8.61601M9.99995 8.61601C9.85795 8.61601 9.73928 8.56801 9.64395 8.47201C9.54861 8.37601 9.50061 8.25701 9.49995 8.11501C9.49928 7.97301 9.54728 7.85434 9.64395 7.75901C9.74061 7.66367 9.85928 7.61567 9.99995 7.61501H11.4999V5.00001C11.4999 4.85801 11.5479 4.73934 11.6439 4.64401C11.7399 4.54867 11.8589 4.50067 12.0009 4.50001C12.1429 4.49934 12.2616 4.54734 12.3569 4.64401C12.4523 4.74067 12.4999 4.85934 12.4999 5.00001V7.61601H13.9999C14.1419 7.61601 14.2606 7.66367 14.3559 7.75901C14.4519 7.85501 14.4999 7.97401 14.4999 8.11601C14.4999 8.25801 14.4519 8.37667 14.3559 8.47201C14.2599 8.56734 14.1413 8.61534 13.9999 8.61601H9.99995ZM11.9999 19.5C11.8579 19.5 11.7389 19.452 11.6429 19.356C11.5469 19.26 11.4993 19.1413 11.4999 19V11.885C11.4999 11.743 11.5479 11.624 11.6439 11.528C11.7399 11.432 11.8589 11.3843 12.0009 11.385C12.1429 11.3857 12.2616 11.4333 12.3569 11.528C12.4523 11.6227 12.4999 11.7417 12.4999 11.885V19C12.4999 19.142 12.4519 19.2607 12.3559 19.356C12.2599 19.4513 12.1409 19.4993 11.9989 19.5M18.1529 19.5C18.0116 19.5 17.8929 19.452 17.7969 19.356C17.7016 19.26 17.6539 19.1413 17.6539 19V16.384H16.1539C16.0119 16.384 15.8929 16.3363 15.7969 16.241C15.7016 16.145 15.6539 16.026 15.6539 15.884C15.6539 15.742 15.7016 15.6233 15.7969 15.528C15.8923 15.4327 16.0113 15.3847 16.1539 15.384H20.1539C20.2953 15.384 20.4139 15.432 20.5099 15.528C20.6059 15.624 20.6539 15.743 20.6539 15.885C20.6539 16.027 20.6059 16.1457 20.5099 16.241C20.4139 16.3363 20.2953 16.3843 20.1539 16.385H18.6539V19C18.6539 19.142 18.6059 19.2607 18.5099 19.356C18.4139 19.452 18.2949 19.5 18.1529 19.5ZM18.1529 12.616C18.0109 12.616 17.8923 12.568 17.7969 12.472C17.7016 12.376 17.6539 12.2573 17.6539 12.116V5.00001C17.6539 4.85801 17.7019 4.73934 17.7979 4.64401C17.8939 4.54867 18.0126 4.50067 18.1539 4.50001C18.2953 4.49934 18.4139 4.54734 18.5099 4.64401C18.6059 4.74067 18.6539 4.85934 18.6539 5.00001V12.116C18.6539 12.2573 18.6059 12.376 18.5099 12.472C18.4139 12.568 18.2949 12.616 18.1529 12.616Z"
              fill="black"
            />
          </svg>

          <h4 className="setting__h">Фільтри</h4>
        </div>
        <button
          // onClick={() => {
          //   setSearchParams({})
          // }}
          className="setting__clear-button"
        >
          <svg
            className="setting__clear-icon"
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
      <div className="setting__options">
        {filters.map((filter) => (
          <Filter
            key={filter.id}
            filter={filter}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        ))}
      </div>
    </div>
  );
};
