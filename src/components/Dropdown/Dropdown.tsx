import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Arrow } from '../Imgs/Arrow';

interface Props {
  buttonArea: 'all' | 'arrow';
  buttonIcon?: () => React.ReactNode;
  buttonTitle: () => React.ReactNode;
  renderContent: () => React.ReactNode;
  customArrow?: () => React.ReactNode;
  customClassName?: string;
  onClick?: React.MouseEventHandler | undefined;
  customIsVisible?: boolean;
}

export const Dropdown: React.FC<Props> = ({
  buttonArea,
  buttonIcon,
  buttonTitle,
  renderContent,
  customArrow,
  customClassName = '',
  onClick,
  customIsVisible = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(customIsVisible);
  }, [customIsVisible]);

  return (
    <div
      className={classNames(`${customClassName} dropdown`, {
        [`${customClassName}--active`]: isVisible,
        [`${customClassName}--inactive`]: !isVisible,
      })}
    >
      {buttonArea === 'all' && (
        <button
          type="button"
          onClick={(e) => {
            onClick?.(e);

            if (customIsVisible) {
              setIsVisible(customIsVisible);
            } else {
              setIsVisible(!isVisible);
            }
          }}
          className={classNames(`${customClassName}-button dropdown__button`, {
            [`${customClassName}-button--active dropdown__button--active`]:
              isVisible,
            [`${customClassName}-button--inactive dropdown__button--inactive`]:
              !isVisible,
          })}
        >
          {buttonIcon && buttonIcon()}
          {buttonTitle()}
          {customArrow ?
            <div
              onClick={(e) => {
                onClick?.(e);

                if (customIsVisible) {
                  setIsVisible(customIsVisible);
                } else {
                  setIsVisible(!isVisible);
                }
              }}
              className={classNames(
                `${customClassName}-custom-arrow dropdown__custom-arrow`,
                {
                  [`${customClassName}-custom-arrow--active dropdown__custom-arrow--active`]:
                    isVisible,
                  [`${customClassName}-custom-arrow--inactive dropdown__custom-arrow--inactive`]:
                    !isVisible,
                },
              )}
            >
              {customArrow()}
            </div>
          : <Arrow
              className={classNames(
                `${customClassName}-arrow dropdown__arrow`,
                {
                  [`${customClassName}-arrow--active dropdown__arrow--active`]:
                    isVisible,
                  [`${customClassName}-arrow--inactive dropdown__arrow--inactive`]:
                    !isVisible,
                },
              )}
            />
          }
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
          {customArrow ?
            <div
              onClick={(e) => {
                onClick?.(e);

                if (customIsVisible) {
                  setIsVisible(customIsVisible);
                } else {
                  setIsVisible(!isVisible);
                }
              }}
              className={classNames(
                `${customClassName}-custom-arrow dropdown__custom-arrow`,
                {
                  [`${customClassName}-custom-arrow--active dropdown__custom-arrow--active`]:
                    isVisible,
                  [`${customClassName}-custom-arrow--inactive dropdown__custom-arrow--inactive`]:
                    !isVisible,
                },
              )}
            >
              {customArrow()}
            </div>
          : <Arrow
              onClick={(e) => {
                onClick?.(e);

                if (customIsVisible) {
                  setIsVisible(customIsVisible);
                } else {
                  setIsVisible(!isVisible);
                }
              }}
              className={classNames(
                `${customClassName}-arrow dropdown__arrow`,
                {
                  [`${customClassName}-arrow--active dropdown__arrow--active`]:
                    isVisible,
                  [`${customClassName}-arrow--inactive dropdown__arrow--inactive`]:
                    !isVisible,
                },
              )}
            />
          }
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
