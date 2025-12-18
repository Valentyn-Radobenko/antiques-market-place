import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setIsCartOpen } from '../../store/slices/shoppingCartSlice';
import { useNavigate } from 'react-router-dom';
type Props = {
  children: ReactNode;
  openModal: boolean;
  setOpenModal?: Dispatch<SetStateAction<boolean>>;
  visibility?: string;
  secondModal: boolean;
  mode?: 'standard' | 'account' | 'club' | 'cart';
};

export const ModalWindow: React.FC<Props> = ({
  secondModal,
  visibility,
  children,
  openModal,
  setOpenModal,
  mode = 'standard',
}) => {
  console.log(secondModal);
  // if (secondModal) {
  //   let i = 0
  //   i = 2
  // }
  //для тимчасової заглушки

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openModal]);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (mode === 'cart') {
      dispatch(setIsCartOpen(false));
    }

    if (mode === 'club' && setOpenModal) {
      navigate('/club/discussions');
      setOpenModal(false);
    }

    if (mode === 'account' && setOpenModal) {
      navigate('/me/discussions');
      setOpenModal(false);
    }

    if (mode !== 'cart' && setOpenModal) {
      setOpenModal(false);
    }
  };

  return ReactDOM.createPortal(
    <div
      className={classNames('modal', visibility, {
        isActive: openModal,
        // secondModal: secondModal,
      })}
    >
      {openModal && children}
      <div
        className={classNames('modal__background', {
          // secondModal: secondModal,
        })}
        onClick={handleOnClick}
      />
    </div>,
    document.body,
  );
};
