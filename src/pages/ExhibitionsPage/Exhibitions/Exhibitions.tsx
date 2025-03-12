import React from 'react';
import { exhibition } from '../../../types/exhibition';

type Props = {
  exhibitions: exhibition[];
};

export const Exhibitions: React.FC<Props> = ({ exhibitions }) => {
  return (
    <div className="exhibitions__articles-block">
      <div className="exhibitions__offer">
        <div className="exhibitions__offer-heading">
          <div className="exhibitions__offer-title"></div>
          <div className="exhibitions__offer-icon"></div>
        </div>
        <div className="exhibitions__offer-button"></div>
      </div>
      <div className="exhibitions__articles">
        {exhibitions.map((exh) => {
          return (
            <article
              key={exh.title}
              className="exhibitions__article"
            >
              <div
                style={{ backgroundImage: `url(${exh.image})` }}
                className="exhibitions__article-img"
              >
                <p className="exhibitions__article-tag">Новий</p>
              </div>
              <div className="exhibitions__article-text">
                <div className="exhibitions__article-title">{exh.title}</div>
                <div className="exhibitions__article-buttons">
                  <div className="exhibitions__article-data">
                    <div className="exhibitions__article-status">
                      {exh.status}
                    </div>
                    <div className="exhibitions__article-date">{exh.date}</div>
                  </div>
                  <div className="exhibitions__article-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17.079 12.5H5V11.5H17.079L11.287 5.708L12 5L19 12L12 19L11.287 18.292L17.079 12.5Z"
                        fill="#1B4332"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
