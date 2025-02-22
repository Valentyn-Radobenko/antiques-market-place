import React, { useState } from 'react';

interface Props {
  renderButton: () => React.ReactNode;
  renderContent: () => React.ReactNode;
  customTooltipClassName?: string;
  customContentClassName?: string;
}

export const Tooltip: React.FC<Props> = ({
  renderButton,
  renderContent,
  customTooltipClassName,
  customContentClassName,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={customTooltipClassName}
      onMouseEnter={() => setIsVisible(true)}
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
