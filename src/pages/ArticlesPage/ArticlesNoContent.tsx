import { useIsMobile } from '../../hooks/useMediaQuery';

export const ArticlesNoContent = () => {
  const isMobile = useIsMobile();

  return (
    <div className="articles__no-content">
      <div className="no-content__wrapper">
        <div className="no-content">
          <div className="no-content__block">
            <div className="no-content__block-top">
              <p className="no-content__block-top-text">йо-йо-йой</p>
              <h4 className="no-content__block-top-title">
                Команда DIKO вже працює над цією статтею
              </h4>
            </div>
            {!isMobile && (
              <p className="no-content__block-bottom">
                Незабаром тут з’являться захопливі статті про антикваріат, його
                історію та унікальні знахідки. Ми готуємо для вас найцікавіше,
                тож слідкуйте за оновленнями!
              </p>
            )}
          </div>
          <img
            className="no-content__img"
            src="./images/exhibitions/no-content.png"
            alt="no-content"
          />
        </div>
        {isMobile && (
          <p className="no-content__block-bottom">
            Незабаром тут з’являться захопливі статті про антикваріат, його
            історію та унікальні знахідки. Ми готуємо для вас найцікавіше, тож
            слідкуйте за оновленнями!
          </p>
        )}
      </div>
    </div>
  );
};
