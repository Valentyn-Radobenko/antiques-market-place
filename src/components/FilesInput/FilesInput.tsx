import { AddIMGS } from '../Imgs/AddIMGS';
import { PlusIMG } from '../Imgs/PlusIMG';
import classNames from 'classnames';
import {
  useState,
  ChangeEvent,
  DragEvent,
  Dispatch,
  SetStateAction,
} from 'react';

type Props = {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  PHOTO_AMOUNT?: number;
};

export const FilesInput: React.FC<Props> = ({
  files,
  setFiles,
  PHOTO_AMOUNT,
}) => {
  const [dragOn, setDragOn] = useState<boolean>(false);

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

  const handleDragOn = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDragOn(true);
  };

  const hadleDragLeave = () => {
    setDragOn(false);
  };

  return (
    <>
      <label
        htmlFor="fileInput"
        className={classNames('file-input', {
          isActive: files.length !== 0,
          disabled: files.length === 5,
          hoverEffect: dragOn,
        })}
        onDrop={dropFiles}
        onDragOver={handleDragOn}
        onDragLeave={hadleDragLeave}
      >
        <AddIMGS
          className={classNames('file-input__add-img', {
            disabled: files.length === 5,
          })}
        />
        <div className="file-input__text-block">
          <p
            className={classNames('file-input__text-1', {
              disabled: files.length === 5,
            })}
          >
            <span
              className={classNames('file-input__1stword', {
                disabled: files.length === 5,
              })}
            >
              Натисніть
            </span>{' '}
            , щоб завантажити або перетягніть файл
          </p>
          <p
            className={classNames('file-input__text-2', {
              disabled: files.length === 5,
            })}
          >
            Ми підтримуємо PNG, JPEG та GIF розміром до 10MB
          </p>
        </div>
        <PlusIMG
          className={classNames('file-input__plus-img', {
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
    </>
  );
};
