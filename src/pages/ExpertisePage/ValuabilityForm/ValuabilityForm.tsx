import {
  ChangeEvent,
  SetStateAction,
  DragEvent,
  useEffect,
  Dispatch,
  useState,
} from 'react';
import { Close } from '../../../components/Imgs/Close';
import { Info } from '../../../components/Imgs/Info';
import { AddIMGS } from '../../../components/Imgs/AddIMGS';
import { Bin } from '../../../components/Imgs/Bin';
import { useResizeObserver } from '../../../utils/useResizeObserver';
import { AssessmentForm } from '../../../types/assessment';
import { PlusIMG } from '../../../components/Imgs/PlusIMG';
import classNames from 'classnames';
import { Important } from '../../../components/Imgs/Important';
import SimpleBar from 'simplebar-react';
import { PhotosHelper } from '../PhotosHelper/PhotosHelper';

type Props = {
  closeModal: Dispatch<SetStateAction<boolean>>;
  assessment: AssessmentForm;
};

export const ValuabilityForm: React.FC<Props> = ({
  closeModal,
  assessment,
}) => {
  const PHOTO_AMOUNT = 5;
  const [files, setFiles] = useState<File[]>([]);
  const [photoWidth, setPhotoWidth] = useState<number>(0);
  const { ref, width } = useResizeObserver();
  const [query, setQuery] = useState<string>('');
  const [dragOn, setDragOn] = useState<boolean>(false);
  const [photosHelper, setPhotosHelper] = useState<boolean>(false);
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    setPhotoWidth(width / PHOTO_AMOUNT);
  }, [width]);

  const addFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files ? Array.from(event.target.files) : [];
    setFiles((prev) => [...prev, ...newFiles].slice(0, PHOTO_AMOUNT));
  };

  const dropFiles = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();

    const newFiles =
      event.dataTransfer.files ? Array.from(event.dataTransfer.files) : [];
    setFiles((prev) => [...prev, ...newFiles].slice(0, PHOTO_AMOUNT));
    setDragOn(false);
  };

  const deletePhoto = (i: number) => {
    const newFiles = files.filter((_, index) => index !== i);

    setFiles(newFiles);
  };

  const handleDragOn = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDragOn(true);
  };

  const hadleDragLeave = () => {
    setDragOn(false);
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
    <div className="valuability-form">
      <SimpleBar
        style={{ maxHeight: '100vh' }}
        className="valuability-form__bar"
      >
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
            >
              <div className="valuability-form__photo-title-text">
                <p className="valuability-form__photo-text">Фото матеріали</p>
                <Info
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
                  helperOn={photosHelper}
                  onMouseLeave={leaveLeave}
                  onMouseEnter={mouseOn}
                  setHelperOn={setPhotosHelper}
                />
              </div>

              <label
                htmlFor="fileInput"
                className={classNames('valuability-form__photo-input', {
                  isActive: files.length !== 0,
                  disabled: files.length === 5,
                  hoverEffect: dragOn,
                })}
                onDrop={dropFiles}
                onDragOver={handleDragOn}
                onDragLeave={hadleDragLeave}
              >
                <AddIMGS
                  className={classNames('valuability-form__photo-add-img', {
                    disabled: files.length === 5,
                  })}
                />
                <div className="valuability-form__photo-text-block">
                  <p
                    className={classNames('valuability-form__photo-text-1', {
                      disabled: files.length === 5,
                    })}
                  >
                    <span
                      className={classNames('valuability-form__photo-1stword', {
                        disabled: files.length === 5,
                      })}
                    >
                      Натисніть
                    </span>{' '}
                    , щоб завантажити або перетягніть файл
                  </p>
                  <p
                    className={classNames('valuability-form__photo-text-2', {
                      disabled: files.length === 5,
                    })}
                  >
                    Ми підтримуємо PNG, JPEG та GIF розміром до 10MB
                  </p>
                </div>
                <PlusIMG
                  className={classNames('valuability-form__photo-plus-img', {
                    disabled: files.length === 5,
                  })}
                />
              </label>
              <input
                accept=".jpg, .jpeg, .png, .pdf, image/jpeg, image/png, application/pdf"
                multiple
                onChange={addFiles}
                id="fileInput"
                hidden
                type="file"
                disabled={files.length === 5}
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
                  <Important />
                  <p>{`Максимальна кількість фото: ${PHOTO_AMOUNT}`}</p>
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
