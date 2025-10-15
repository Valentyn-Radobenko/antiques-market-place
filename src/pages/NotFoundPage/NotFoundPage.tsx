import { Link } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useMediaQuery';

export const NotFoundPage = () => {
  const isMobile = useIsMobile();

  return (
    <div className="not-found-page">
      <div className="no-content__wrapper">
        <div className="no-content">
          <div className="no-content__block">
            <div className="no-content__block-top">
              <p className="no-content__block-top-text">йо-йо-йой</p>
              <h4 className="no-content__block-top-title">
                Схоже, ми загубили цю сторінку...
              </h4>
            </div>
            {!isMobile && (
              <>
                <p className="no-content__block-bottom">
                  Або вона втекла у невідомому напрямку, або її тут ніколи не
                  було. Не хвилюйтесь, завжди можна повернутися на головну та
                  знайти щось цікаве!
                </p>
                <Link
                  to={'/market'}
                  className="not-found-page__link"
                >
                  Перейти в Маркет
                </Link>
              </>
            )}
          </div>
          <img
            className="no-content__img"
            src="images/404.png"
            alt="no-content"
          />
        </div>
        {isMobile && (
          <>
            <p className="no-content__block-bottom">
              Або вона втекла у невідомому напрямку, або її тут ніколи не було.
              Не хвилюйтесь, завжди можна повернутися на головну та знайти щось
              цікаве!
            </p>

            <Link
              to={'/market'}
              className="not-found-page__link"
            >
              Перейти в Маркет
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
