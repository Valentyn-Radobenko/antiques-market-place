import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
type Props = {
  children: ReactNode;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  visibility?: string;
  secondModal: boolean;
};

export const ModalWindow: React.FC<Props> = ({
  secondModal,
  visibility,
  children,
  openModal,
  setOpenModal,
}) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openModal]);

  return ReactDOM.createPortal(
    <div
      className={classNames('modal', visibility, {
        isActive: openModal,
      })}
    >
      {openModal && children}
      <div
        className={classNames('modal__background', {
          secondModal: secondModal,
        })}
        onClick={() => setOpenModal(false)}
      />
    </div>,
    document.body,
  );
};
