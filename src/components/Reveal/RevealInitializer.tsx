import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useReveal } from '../../hooks/useReveal';
import type { SavingState } from '../../store/store';

export const RevealInitializer: React.FC = () => {
  const location = useLocation();
  const isMenuOn = useSelector((state: SavingState) => state.menu.isMenuOn);

  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useReveal({ root: null, rootMargin: '-20px', threshold: 0.03 }, [
    location.pathname,
    location.search,
    isMenuOn,
    width,
  ]);

  return null;
};
