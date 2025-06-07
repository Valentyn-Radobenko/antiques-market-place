import { useResizeObserver } from '../../utils/useResizeObserver';
import { Bin } from '../Imgs/Bin';
import { useEffect, useState } from 'react';

type Props = {
  files: File[];
  setFiles: (newFiles: File[]) => void;
};

const PHOTO_AMOUNT = 5;

export const PhotosList: React.FC<Props> = ({ files, setFiles }) => {
  const { ref, width } = useResizeObserver();
  const [photoWidth, setPhotoWidth] = useState<number>(0);

  const deletePhoto = (i: number) => {
    const newFiles = files.filter((_, index) => index !== i);

    setFiles(newFiles);
  };

  useEffect(() => {
    setPhotoWidth(width / PHOTO_AMOUNT);
  }, [width]);

  return (
    <div
      ref={ref}
      className="photos-list"
    >
      <div className="photos-list__list-of-photos">
        {files.map((file, index) => (
          <div
            style={{ width: `${photoWidth}px` }}
            key={index}
            className="photos-list__photo-block"
          >
            <Bin
              className="photos-list__bin"
              onClick={() => deletePhoto(index)}
            />
            <img
              className="photos-list__img"
              src={URL.createObjectURL(file)}
              alt="#"
            />
          </div>
        ))}
      </div>
      {files.length !== 0 && (
        <div className="photos-list__photos-text-block">
          {`Максимальна кількість фото: ${PHOTO_AMOUNT}`}
        </div>
      )}
    </div>
  );
};
