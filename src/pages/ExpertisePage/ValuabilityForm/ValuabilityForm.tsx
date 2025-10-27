import { SetStateAction, useEffect, Dispatch, useState } from 'react';
import { Close } from '../../../components/Imgs/Close';
import { Info } from '../../../components/Imgs/Info';
import { AssessmentForm } from '../../../types/assessment';
import SimpleBar from 'simplebar-react';
import { PhotosHelper } from '../PhotosHelper/PhotosHelper';
import { FilesInput } from '../../../components/FilesInput/FilesInput';
import { PhotosList } from '../../../components/PhotosList/PhotosList';
import { useTranslation } from 'react-i18next';

type Props = {
  closeModal: Dispatch<SetStateAction<boolean>>;
  assessment: AssessmentForm;
  activeState: boolean;
};

export const ValuabilityForm: React.FC<Props> = ({
  closeModal,
  assessment,
  activeState,
}) => {
  const PHOTO_AMOUNT = 5;
  const [files, setFiles] = useState<File[]>([]);

  const [query, setQuery] = useState<string>('');
  const [photosHelper, setPhotosHelper] = useState<boolean>(false);
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  const { t } = useTranslation();

  useEffect(() => {
    if (activeState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeState]);

  let timeout: NodeJS.Timeout;

  const leaveLeave = () => {
    timeout = setTimeout(() => {
      setPhotosHelper(false);
    }, 2000);
  };

  const mouseOn = () => {
    clearTimeout(timeout);
    setPhotosHelper(true);
  };

  return (
    // <div
    //   className={classNames('valuability-form', {
    //     isActive: activeState,
    //   })}
    // >
    <SimpleBar className="valuability-form__bar ">
      <div className="valuability-form__container">
        <div className="valuability-form__header">
          <h3 className="valuability-form__h3">{assessment.title}</h3>
          <Close
            className={'valuability-form__icon'}
            onClick={() => closeModal(false)}
          />
        </div>
        <div className="valuability-form__form">
          <div className="valuability-form__info">
            <p className="valuability-form__text">{assessment.text}</p>
            {assessment.important && (
              <div className="valuability-form__important">
                <h4 className="valuability-form__h4">
                  {t('more-info__what-is-it-important-h4')}
                </h4>
                <p className="valuability-form__important-text">
                  {assessment.important}
                </p>
              </div>
            )}
          </div>
          <div className="valuability-form__underline" />
          <div
            className="valuability-form__photo"
            style={{ gap: photosHelper ? '16px' : '8px' }}
          >
            <div className="valuability-form__photo-title-text">
              <p className="valuability-form__photo-text">
                {t('valuability-form__photo-text')}
              </p>
              <Info
                className={'valuability-form__photo-icon'}
                onMouseLeave={() => leaveLeave()}
                onMouseEnter={() => mouseOn()}
                onClick={() => setPhotosHelper(true)}
              />
            </div>
            <div
              className="valuability-form__helper-wrapper"
              style={{
                height: photosHelper ? currentHeight : 0,
                overflow: 'hidden',
                opacity: photosHelper ? 100 : 0,
              }}
            >
              <PhotosHelper
                setCurrentHeight={setCurrentHeight}
                onMouseLeave={leaveLeave}
                onMouseEnter={mouseOn}
                setHelperOn={setPhotosHelper}
              />
            </div>
            <FilesInput
              files={files}
              setFiles={setFiles}
              PHOTO_AMOUNT={PHOTO_AMOUNT}
            />
          </div>
          {files.length > 0 && (
            <PhotosList
              files={files}
              setFiles={setFiles}
            />
          )}
          <div className="valuability-form__underline" />
          <div className="valuability-form__description">
            <p className="valuability-form__description-text">
              {t('valuability-form__description-text')}
            </p>
            <input
              value={query}
              placeholder={t('valuability-form__description-input-placeholder')}
              className="valuability-form__description-input"
              onChange={(e) => setQuery(e.target.value)}
              type="text"
            />
          </div>
        </div>
        <button
          className="valuability-form__button"
          // onClick={() => } // внести обробник на сервер
        >
          {t('current-discussion__add-comment-button')}
        </button>
      </div>
    </SimpleBar>

    //   <div
    //     className="valuability-form__backdrop"
    //     onClick={() => closeModal(false)}
    //   />
    // </div>
  );
};
