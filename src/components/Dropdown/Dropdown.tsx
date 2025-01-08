import React, { useEffect, useRef, useState } from 'react';

interface DropdownProps {
  button?: React.ReactNode;
  renderContent: () => React.ReactNode;
  customDropdownClassName?: string;
  customContentClassName?: string;
  customButtonClassName?: string;
  customActiveButtonClassName?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  button,
  renderContent,
  customDropdownClassName,
  customContentClassName,
  customButtonClassName,
  customActiveButtonClassName = customButtonClassName,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div
      ref={dropdownRef}
      className={customDropdownClassName}
      onClick={() => setIsVisible(!isVisible)}
    >
      <div
        className={`${customButtonClassName} ${isVisible ? customActiveButtonClassName : customButtonClassName}`}
      >
        {button}
      </div>

      <div
        className={`${customContentClassName} ${isVisible ? `${customContentClassName}-visible` : `${customContentClassName}`}`}
      >
        {renderContent()}
      </div>
    </div>
  );
};
