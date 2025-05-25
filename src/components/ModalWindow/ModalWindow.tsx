import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { Close } from '../Imgs/Close';
type Props = {
  children: ReactNode;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  modalContent: string;
  visibility: string;
};

export const ModalWindow: React.FC<Props> = ({
  visibility,
  modalContent,
  children,
  openModal,
  setOpenModal,
}) => {
  return ReactDOM.createPortal(
    <div
      className={classNames('modal', visibility, {
        isActive: openModal,
      })}
    >
      <div className={`${modalContent} modal__content`}>
        <Close
          className="modal__close"
          onClick={() => setOpenModal(false)}
        />
        {children}
      </div>
      <div
        className="modal__background"
        onClick={() => setOpenModal(false)}
      />
    </div>,
    document.body,
  );
};
