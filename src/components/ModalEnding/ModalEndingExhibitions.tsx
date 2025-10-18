import classNames from 'classnames';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { Dispatch, SetStateAction } from 'react';
import { Close } from '../Imgs/Close';
import { InfoSVG } from '../Imgs/InfoSVG';
import { Link } from 'react-router-dom';

type Props = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const ModalEndingExhibitions: React.FC<Props> = ({ setOpenModal }) => {
  const isPhone = useIsMobile();
  return (
    <div className="modal-ending">
      <div className="modal-ending__header">
        <h2 className="modal-ending__title modal-ending__title--end">
          Ваша пропозиція щодо виставки{' '}
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
        <p className="modal-ending__end-message-text">
          Очікуйте на відповідь.
          <br />
          Повідомлення надійде в діалог&nbsp;
          <Link
            to={
              '/me/messages?chat=%D0%9F%D1%80%D0%BE%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D1%96%D1%97+%D1%89%D0%BE%D0%B4%D0%BE+%D0%B2%D0%B8%D1%81%D1%82%D0%B0%D0%B2%D0%BE%D0%BA'
            }
            className="modal-ending__end-message-link"
          >
            «Виставки»
          </Link>
        </p>
      </div>
    </div>
  );
};
