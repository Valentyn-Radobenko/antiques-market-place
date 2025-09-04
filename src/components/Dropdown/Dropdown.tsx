import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Arrow } from '../Imgs/Arrow';

interface Props {
  buttonArea: 'all' | 'arrow';
  buttonIcon?: () => React.ReactNode;
  buttonTitle: () => React.ReactNode;
  renderContent: () => React.ReactNode;
  customAfterTitle?: () => React.ReactNode;
  customClassName?: string;
  onClick?: React.MouseEventHandler;
  customIsVisible?: boolean;
  isAfterTitleOn?: boolean;
  subtitle?: string;
}

export const Dropdown: React.FC<Props> = ({
  buttonArea,
  buttonIcon,
  buttonTitle,
  renderContent,
  customAfterTitle,
  customClassName = '',
  onClick,
  customIsVisible = false,
  isAfterTitleOn = true,
  subtitle = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(customIsVisible);
  }, [customIsVisible]);

  const handleToggle = (e: React.MouseEvent) => {
    onClick?.(e);

    if (customIsVisible) {
      setIsVisible(customIsVisible);
    } else {
      setIsVisible(!isVisible);
    }
  };

  const afterTitleElement =
    customAfterTitle ?
      <div
        onClick={handleToggle}
        className={classNames(
          `${customClassName}-custom-after-title dropdown__custom-after-title`,
          {
            [`${customClassName}-custom-after-title--active dropdown__custom-after-title--active`]:
              isVisible,
            [`${customClassName}-custom-after-title--inactive dropdown__custom-after-title--inactive`]:
              !isVisible,
          },
        )}
      >
        {customAfterTitle()}
      </div>
    : <Arrow
        onClick={handleToggle}
        className={classNames(`${customClassName}-arrow dropdown__arrow`, {
          [`${customClassName}-arrow--active dropdown__arrow--active`]:
            isVisible,
          [`${customClassName}-arrow--inactive dropdown__arrow--inactive`]:
            !isVisible,
        })}
      />;

  const simpleButtonElement = (
    <button
      type="button"
      onClick={buttonArea === 'all' ? handleToggle : undefined}
      className={classNames(`${customClassName}-button dropdown__button`, {
        [`${customClassName}-button--active dropdown__button--active`]:
          isVisible,
        [`${customClassName}-button--inactive dropdown__button--inactive`]:
          !isVisible,
      })}
    >
      {buttonIcon?.()}
      {buttonTitle()}
      {isAfterTitleOn && afterTitleElement}
    </button>
  );

  const buttonElement =
    subtitle ?
      <div
        className={classNames(
          `${customClassName}-button-wrap dropdown__button-wrap`,
          {
            [`${customClassName}-button-wrap--active dropdown__button-wrap--active`]:
              isVisible,
            [`${customClassName}-button-wrap--inactive dropdown__button-wrap--inactive`]:
              !isVisible,
          },
        )}
      >
        {simpleButtonElement}
        <p
          className={classNames(
            `${customClassName}-button-subtitle dropdown__button-subtitle`,
            {
              [`${customClassName}-button-subtitle--active dropdown__button-subtitle--active`]:
                isVisible,
              [`${customClassName}-button-subtitle--inactive dropdown__button-subtitle--inactive`]:
                !isVisible,
            },
          )}
        >
          {subtitle}
        </p>
      </div>
    : simpleButtonElement;

  return (
    <div
      className={classNames(`${customClassName} dropdown`, {
        [`${customClassName}--active`]: isVisible,
        [`${customClassName}--inactive`]: !isVisible,
      })}
    >
      {buttonElement}

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
