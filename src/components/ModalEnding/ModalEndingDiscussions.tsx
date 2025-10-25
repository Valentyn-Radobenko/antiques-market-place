import classNames from 'classnames';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { Dispatch, SetStateAction } from 'react';
import { Close } from '../Imgs/Close';
import { InfoSVG } from '../Imgs/InfoSVG';
import { useTranslation } from 'react-i18next';

type Props = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const ModalEndingDiscussions: React.FC<Props> = ({ setOpenModal }) => {
  const isPhone = useIsMobile();
  const { t } = useTranslation();

  return (
    <div className="modal-ending">
      <div className="modal-ending__header">
        <h2 className="modal-ending__title modal-ending__title--end">
          {t('modal-ending__title')}{' '}
          <span className="modal-ending__title modal-ending__title--end modal-ending__title--green modal-ending__title--underline">
            {t('modal-ending__title--green')}
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
        <p className="modal-ending__end-message-text">
          {t('modal-ending__end-message-text')}
        </p>
      </div>
    </div>
  );
};
