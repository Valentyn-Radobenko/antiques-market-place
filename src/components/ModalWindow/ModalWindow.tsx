import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setIsOpen } from '../../store/slices/shoppingCartSlice';
type Props = {
  children: ReactNode;
  openModal: boolean;
  setOpenModal?: Dispatch<SetStateAction<boolean>>;
  visibility?: string;
  secondModal: boolean;
  isCart?: boolean;
};

export const ModalWindow: React.FC<Props> = ({
  secondModal,
  visibility,
  children,
  openModal,
  setOpenModal,
  isCart = false,
}) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openModal]);

  const dispatch = useDispatch<AppDispatch>();

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
        onClick={() =>
          isCart ?
            dispatch(setIsOpen(false))
          : setOpenModal && setOpenModal(false)
        }
      />
    </div>,
    document.body,
  );
};
