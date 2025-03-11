import exhibitions from './../../../data/exhibitions.json';

export const AllExhibitions = () => {
  return (
    <div className="exhibitions__articles-block">
      <div className="exhibitions__offer"></div>
      <div className="exhibitions__articles">
        {exhibitions.map((exh) => {
          return (
            <article className="exhibitions__article">
              <div
                style={{ backgroundImage: exh.image }}
                className="exhibitions__article-img"
              ></div>
              <div className="exhibitions__article-text">
                <div className="exhibitions__article-title">{exh.title}</div>
                <div className="exhibitions__article-buttons">
                  <div className="exhibitions__article-status">
                    {exh.status}
                  </div>
                  <div className="exhibitions__article-date">{exh.date}</div>
                  <div className="exhibitions__article-icon"></div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
