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

  const dropFiles = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const newFiles =
      event.dataTransfer.files ? Array.from(event.dataTransfer.files) : [];
    setFiles((prev) => [...prev, ...newFiles].slice(0, PHOTO_AMOUNT));
  };

  const deletePhoto = (i: number) => {
    const newFiles = files.filter((_, index) => index !== i);

    setFiles(newFiles);
  };

  return (
    <div className="valuability-form">
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
              <Info />
            </div>
            <div
              className="valuability-form__photo-input"
              onDrop={dropFiles}
              onDragOver={(e) => e.preventDefault()}
            >
              {files.length === 0 ?
                <label
                  className="valuability-form__photo-label"
                  htmlFor="fileInput"
                >
                  Виберіть файли
                </label>
              : <div className="valuability-form__photo-listofitems">
                  {files.map((file) => file.name).join(', ')}
                </div>
              }
              <label
                className="valuability-form__photo-addimgs"
                htmlFor="fileInput"
              >
                <AddIMGS />
              </label>
              <input
                accept=".jpg, .jpeg, .png, .pdf, image/jpeg, image/png, application/pdf"
                multiple
                onChange={addFiles}
                id="fileInput"
                hidden
                type="file"
              />
            </div>
            <p className="valuability-form__photo-text">
              Приймаються формати: JPG, PNG, PDF
            </p>
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
              <p>{`Максимальна кількість фото: ${PHOTO_AMOUNT}`}</p>
            </div>
          )}
          <div className="valuability-form__underline" />
          <div className="valuability-form__description">
            <p className="valuability-form__description-text">Опис предмету</p>
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
      <div
        className="valuability-form__backdrop"
        onClick={() => closeModal(false)}
      />
    </div>
  );
};
