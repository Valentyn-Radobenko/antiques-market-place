import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

type Props = {
  src: string;
  className: string;
};

export const ZoomableImage: React.FC<Props> = ({ src, className }) => {
  const [scale, setScale] = useState(1);

  return (
    <TransformWrapper
      doubleClick={{ mode: 'zoomIn' }}
      pinch={{ step: 0.1 }}
      wheel={{ step: 0.1 }}
      initialScale={1}
      minScale={1}
      maxScale={4}
      onTransformed={(ref) => setScale(ref.state.scale)}
      panning={{ disabled: scale <= 1 }}
      limitToBounds={true}
      disablePadding={true}
    >
      <TransformComponent
        wrapperStyle={{ width: '100%', height: '100%' }}
        contentStyle={{ width: '100%', height: '100%' }}
      >
        <img
          className={className}
          src={src}
          alt={src}
        />
      </TransformComponent>
    </TransformWrapper>
  );
};
