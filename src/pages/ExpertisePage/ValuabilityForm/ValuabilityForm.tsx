import { SetStateAction, useEffect, Dispatch, useState } from 'react';
import { Close } from '../../../components/Imgs/Close';
import { Info } from '../../../components/Imgs/Info';
import { Bin } from '../../../components/Imgs/Bin';
import { useResizeObserver } from '../../../utils/useResizeObserver';
import { AssessmentForm } from '../../../types/assessment';
import classNames from 'classnames';
import SimpleBar from 'simplebar-react';
import { PhotosHelper } from '../PhotosHelper/PhotosHelper';
import { FilesInput } from '../../../components/FilesInput/FilesInput';

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
  const [photoWidth, setPhotoWidth] = useState<number>(0);
  const { ref, width } = useResizeObserver();
  const [query, setQuery] = useState<string>('');
  const [photosHelper, setPhotosHelper] = useState<boolean>(false);
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  useEffect(() => {
    if (activeState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeState]);

  useEffect(() => {
    setPhotoWidth(width / PHOTO_AMOUNT);
  }, [width]);

  const deletePhoto = (i: number) => {
    const newFiles = files.filter((_, index) => index !== i);

    setFiles(newFiles);
  };

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
    <div
      className={classNames('valuability-form', {
        isActive: activeState,
      })}
    >
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
                  <h4 className="valuability-form__h4">ВАЖЛИВО!</h4>
                  <p className="valuability-form__important-text">
                    {assessment.important}
                  </p>
                </div>
              )}
            </div>
            <div className="valuability-form__underline" />
            <div
              ref={ref}
              className="valuability-form__photo"
              style={{ gap: photosHelper ? '16px' : '8px' }}
            >
              <div className="valuability-form__photo-title-text">
                <p className="valuability-form__photo-text">Фото матеріали</p>
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
              <div className="valuability-form__photos">
                <div className="valuability-form__list-of-photos">
                  {files.map((file, index) => (
                    <div
                      style={{ width: `${photoWidth}px` }}
                      key={index}
                      className="valuability-form__photo-block"
                    >
                      <Bin
                        className="valuability-form__bin"
                        onClick={() => deletePhoto(index)}
                      />
                      <img
                        className="valuability-form__img"
                        src={URL.createObjectURL(file)}
                        alt="#"
                      />
                    </div>
                  ))}
                </div>
                <div className="valuability-form__photos-text-block">
                  {`Максимальна кількість фото: ${PHOTO_AMOUNT}`}
                </div>
              </div>
            )}
            <div className="valuability-form__underline" />
            <div className="valuability-form__description">
              <p className="valuability-form__description-text">
                Опис предмету
              </p>
              <input
                value={query}
                placeholder="Монета 1560 рку, срібла"
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
            Надіслати
          </button>
        </div>
      </SimpleBar>

      <div
        className="valuability-form__backdrop"
        onClick={() => closeModal(false)}
      />
    </div>
  );
};
