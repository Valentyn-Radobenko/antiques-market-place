import classNames from 'classnames';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { Dispatch, SetStateAction } from 'react';
import { Close } from '../Imgs/Close';
import { InfoSVG } from '../Imgs/InfoSVG';

type Props = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const ModalEndingDiscussions: React.FC<Props> = ({ setOpenModal }) => {
  const isPhone = useIsMobile();
  return (
    <div className="modal-ending">
      <div className="modal-ending__header">
        <h2 className="modal-ending__title modal-ending__title--end">
          Ваша пропозиція щодо обговорення{' '}
          <span className="modal-ending__title modal-ending__title--end modal-ending__title--green modal-ending__title--underline">
            відправлена
          </span>
          !
        </h2>
        <button
          className={classNames('modal-ending__close', {
            'modal-ending__close--end': isPhone,
          })}
          onClick={() => setOpenModal(false)}
        >
          <Close />
        </button>
      </div>
      <div className="modal-ending__end-message">
        <div className="modal-ending__end-message-icon-wrapper">
          <InfoSVG className="modal-ending__end-message-icon" />
        </div>
        <p className="modal-ending__end-message-text">Очікуйте на розгляд.</p>
      </div>
    </div>
  );
};
