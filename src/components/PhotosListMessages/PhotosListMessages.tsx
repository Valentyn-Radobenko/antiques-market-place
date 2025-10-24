import { useResizeObserver } from '../../utils/useResizeObserver';
import { useEffect, useState } from 'react';
import { FrameInspectSVG } from '../Imgs/FrameInspectSVG';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  files: File[];
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setModalContent: Dispatch<SetStateAction<File[] | undefined>>;
  // setFiles: (newFiles: File[]) => void;
};

const PHOTO_AMOUNT = 5;

export const PhotosListMessages: React.FC<Props> = ({
  files,
  setOpenModal,
  setModalContent,
}) => {
  const { ref, width } = useResizeObserver();
  const [photoWidth, setPhotoWidth] = useState<number>(0);

  // const deletePhoto = (i: number) => {
  //   const newFiles = files.filter((_, index) => index !== i);

  //   setFiles(newFiles);
  // };

  useEffect(() => {
    setPhotoWidth(width / PHOTO_AMOUNT);
  }, [width]);

  return (
    <div
      ref={ref}
      className="photos-list-messages"
    >
      <div className="photos-list-messages__list-of-photos">
        {files.map((file, index) => (
          <div
            onClick={() => {
              setOpenModal(true);
              setModalContent(files);
            }}
            style={{ width: `${photoWidth}px` }}
            key={index}
            className="photos-list-messages__photo-block"
          >
            <FrameInspectSVG className="photos-list-messages__svg" />
            <img
              className="photos-list-messages__img"
              src={URL.createObjectURL(file)}
              alt="#"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
