import classNames from 'classnames';
import { useState } from 'react';

// add 'hoverable' class to a parrent in case we need hover effect on svg bellow

export const CheckBoxInteractive: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={classNames('checkbox-square-interactive', {
        isActive: isActive,
      })}
    >
      <svg
        className={classNames('checkbox-square-interactive__arrow', {
          isActive: isActive,
        })}
        width="16"
        height="11"
        viewBox="0 0 16 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.25718 10.601C5.86666 10.9915 5.2335 10.9915 4.84297 10.601L0.937078 6.6951C0.739953 6.49797 0.740065 6.17834 0.937328 5.98135C1.1344 5.78456 1.45365 5.78467 1.65058 5.9816L4.84297 9.17399C5.2335 9.56452 5.86666 9.56452 6.25718 9.17399L14.3491 1.0821C14.5462 0.884972 14.8658 0.885084 15.0628 1.08235C15.2596 1.27942 15.2595 1.59867 15.0626 1.7956L6.25718 10.601Z"
          fill="#F7FFFD"
        />
      </svg>
    </div>
  );
};
