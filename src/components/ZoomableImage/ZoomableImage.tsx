import React, { useState } from 'react';
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from 'react-zoom-pan-pinch';

type Props = {
  src: string;
  className: string;
  customScale?: number;
  setCustomScale?: React.Dispatch<React.SetStateAction<number>>;
};

export const ZoomableImage: React.FC<Props> = ({
  src,
  className,
  customScale,
  setCustomScale,
}) => {
  const [scale, setScale] = useState(1);

  const handleOnTransformed = () => {
    if (!customScale || !setCustomScale) {
      return (ref: ReactZoomPanPinchRef) => setScale(ref.state.scale);
    } else {
      return (ref: ReactZoomPanPinchRef) => setCustomScale(ref.state.scale);
    }
  };

  const findIsDisabled = () => {
    if (!customScale || !setCustomScale) {
      return !!(scale <= 1);
    } else {
      return !!(customScale <= 1);
    }
  };

  const isDisabled = findIsDisabled();

  const handleDoubleClickMode = () => {
    if (scale > 1 || (customScale && customScale > 1)) {
      return 'zoomOut';
    } else {
      return 'zoomIn';
    }
  };

  const mode = handleDoubleClickMode();

  return (
    <TransformWrapper
      doubleClick={{ mode: mode }}
      pinch={{ step: 0.1 }}
      wheel={{ step: 0.1 }}
      initialScale={1}
      minScale={1}
      maxScale={4}
      onTransformed={handleOnTransformed()}
      panning={{ disabled: isDisabled }}
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
