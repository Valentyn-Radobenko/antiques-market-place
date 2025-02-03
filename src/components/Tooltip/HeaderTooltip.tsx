import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setExpHeader } from '../../store/slices/expHeaderSlice';
import { expandedModeType } from '../../types/expandedModeType';

interface TooltipProps {
  renderButton: () => React.ReactNode;
  renderContent: () => React.ReactNode;
  customTooltipClassName?: string;
  customContentClassName?: string;
  mode: expandedModeType;
}

export const HeaderTooltip: React.FC<TooltipProps> = ({
  renderButton,
  renderContent,
  customTooltipClassName,
  customContentClassName,
  mode,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      className={customTooltipClassName}
      onMouseEnter={() => {
        setIsVisible(true);
        dispatch(setExpHeader(mode));
      }}
      onMouseLeave={() => {
        setIsVisible(false);
        dispatch(setExpHeader(null));
      }}
    >
      {renderButton()}

      <div
        className={`${customContentClassName} ${isVisible ? `${customContentClassName}-visible` : ''}`}
      >
        {renderContent()}
      </div>
    </div>
  );
};
