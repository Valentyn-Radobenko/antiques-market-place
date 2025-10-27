import { Info } from '../../../components/Imgs/Info';
import { Close } from '../../../components/Imgs/Close';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useResizeObserverHieight } from '../../../utils/useResizeObserver';
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();

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
          <h3 className="photos-helper__h3">{t('photos-helper__h3')}</h3>
          <h4 className="photos-helper__h4">{t('photos-helper__h4')} </h4>
        </div>
        <ul className="photos-helper__list">
          <li className="photos-helper__item"> {t('photos-helper__item')}</li>
          <li className="photos-helper__item">{t('photos-helper__item2')}</li>
          <li className="photos-helper__item"> {t('photos-helper__item3')}</li>
        </ul>
        <p className="photos-helper__text">{t('photos-helper__text')} </p>
      </div>
    </div>
  );
};
