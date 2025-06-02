import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
type Props = {
  children: ReactNode;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  visibility: string;
};

export const ModalWindow: React.FC<Props> = ({
  visibility,
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
      {children}
      <div
        className="modal__background"
        onClick={() => setOpenModal(false)}
      />
    </div>,
    document.body,
  );
};
