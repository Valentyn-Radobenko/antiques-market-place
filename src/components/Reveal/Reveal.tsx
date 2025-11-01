import React, { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Reveal: React.FC<Props> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('hidden', 'reveal');
    return () => {
      el.classList.remove('hidden', 'reveal', 'visible');
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
};
