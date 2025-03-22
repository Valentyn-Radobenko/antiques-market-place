import { Info } from '../../../components/Imgs/Info';
import { Close } from '../../../components/Imgs/Close';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useResizeObserverHieight } from '../../../utils/useResizeObserver';
type Props = {
  onMouseLeave: () => void;
  onMouseEnter: () => void;
  setHelperOn: Dispatch<SetStateAction<boolean>>;
  setCurrentHeight: Dispatch<SetStateAction<number>>;
};

export const PhotosHelper: React.FC<Props> = ({
  setCurrentHeight,
  setHelperOn,
  onMouseLeave,
  onMouseEnter,
}) => {
  const { refH, height } = useResizeObserverHieight();

  useEffect(() => {
    if (refH.current) {
      setCurrentHeight(height);
    }
  }, [height]);

  return (
    <div
      ref={refH}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className="photos-helper"
    >
      <div className="photos-helper__icons">
        <Info className="photos-helper__info" />
        <Close
          onClick={() => setHelperOn(false)}
          className="photos-helper__close"
        />
      </div>
      <div className="photos-helper__text-block">
        <div className="photos-helper__title">
          <h3 className="photos-helper__h3">
            Фото мають бути чіткими та якісними.
          </h3>
          <h4 className="photos-helper__h4">
            Уникайте розмиття та відблисків.{' '}
          </h4>
        </div>
        <ul className="photos-helper__list">
          <li className="photos-helper__item">
            {' '}
            Зробіть знімки з різних ракурсів. Покажіть предмет спереду, ззаду, з
            боків, а також зверху та знизу.
          </li>
          <li className="photos-helper__item">
            Детально сфотографуйте всі особливості. Якщо є дефекти (подряпини,
            тріщини, потертості) – зробіть окремі знімки.
          </li>
          <li className="photos-helper__item">
            {' '}
            Добре освітлення допоможе передати всі деталі. Використовуйте
            природне світло або м'яке штучне освітлення без різких тіней.
          </li>
        </ul>
        <p className="photos-helper__text">
          Це допоможе експерту точніше оцінити предмет!{' '}
        </p>
      </div>
    </div>
  );
};
