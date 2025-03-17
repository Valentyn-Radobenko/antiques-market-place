import { useEffect, useRef, useState } from 'react';

export const useResizeObserver = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    const resizeObserver = new ResizeObserver(updateWidth);
    if (ref.current) resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, []);

  return { ref, width };
};
