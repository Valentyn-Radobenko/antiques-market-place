import { useState } from 'react';
import classNames from 'classnames';
import { Arrow } from '../Imgs/Arrow';

interface Props {
  buttonArea: 'all' | 'arrow';
  buttonIcon?: () => React.ReactNode;
  buttonTitle: () => React.ReactNode;
  renderContent: () => React.ReactNode;
  customClassName?: string;
}

export const Dropdown: React.FC<Props> = ({
  buttonArea,
  buttonIcon,
  buttonTitle,
  renderContent,
  customClassName = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`${customClassName} dropdown`}>
      {buttonArea === 'all' && (
        <button
          onClick={() => setIsVisible(!isVisible)}
          className={classNames(`${customClassName}-button dropdown__button`, {
            [`${customClassName}-button--active dropdown__button--active`]:
              isVisible,
            [`${customClassName}-button--inactive dropdown__button--inactive`]:
              !isVisible,
          })}
        >
          {buttonIcon && buttonIcon()}
          {buttonTitle()}
          <Arrow
            className={classNames(`${customClassName}-arrow dropdown__arrow`, {
              [`${customClassName}-arrow--active dropdown__arrow--active`]:
                isVisible,
              [`${customClassName}-arrow--inactive dropdown__arrow--inactive`]:
                !isVisible,
            })}
          />
        </button>
      )}

      {buttonArea === 'arrow' && (
        <button
          className={classNames(`${customClassName}-button dropdown__button`, {
            [`${customClassName}-button--active dropdown__button--active`]:
              isVisible,
            [`${customClassName}-button--inactive dropdown__button--inactive`]:
              !isVisible,
          })}
        >
          {buttonIcon && buttonIcon()}
          {buttonTitle()}
          <Arrow
            onClick={() => setIsVisible(!isVisible)}
            className={classNames(`${customClassName}-arrow dropdown__arrow`, {
              [`${customClassName}-arrow--active dropdown__arrow--active`]:
                isVisible,
              [`${customClassName}-arrow--inactive dropdown__arrow--inactive`]:
                !isVisible,
            })}
          />
        </button>
      )}

      <div
        className={classNames(`${customClassName}-content dropdown__content`, {
          [`${customClassName}-content--visible dropdown__content--visible`]:
            isVisible,
          [`${customClassName}-content--hidden dropdown__content--hidden`]:
            !isVisible,
        })}
      >
        {renderContent()}
      </div>
    </div>
  );
};
