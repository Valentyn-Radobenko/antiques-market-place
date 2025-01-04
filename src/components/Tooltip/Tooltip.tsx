import React, { useState } from 'react';

interface TooltipProps {
  renderButton: () => React.ReactNode;
  renderContent: () => React.ReactNode;
  customClassName?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  renderButton,
  renderContent,
  customClassName,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={customClassName}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {renderButton()}
      {isVisible && renderContent()}
    </div>
  );
};
