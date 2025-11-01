import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useReveal } from '../../hooks/useReveal';
import type { SavingState } from '../../store/store';

export const RevealInitializer: React.FC = () => {
  const location = useLocation();
  const isMenuOn = useSelector((state: SavingState) => state.menu.isMenuOn);

  useReveal({ root: null, rootMargin: '-20px', threshold: 0.03 }, [
    location.pathname,
    location.search,
    isMenuOn,
  ]);

  return null;
};
