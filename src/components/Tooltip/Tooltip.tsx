import React, { useState } from 'react';

interface Props {
  renderButton: () => React.ReactNode;
  renderContent: () => React.ReactNode;
  customTooltipClassName?: string;
  customContentClassName?: string;
  onMouseEnter?: React.MouseEventHandler;
}

export const Tooltip: React.FC<Props> = ({
  renderButton,
  renderContent,
  customTooltipClassName,
  customContentClassName,
  onMouseEnter,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={customTooltipClassName}
      onMouseEnter={(e) => {
        setIsVisible(true);

        onMouseEnter?.(e);
      }}
      onMouseLeave={() => setIsVisible(false)}
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
