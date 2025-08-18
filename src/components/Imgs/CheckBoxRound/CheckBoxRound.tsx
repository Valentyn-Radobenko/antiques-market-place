import classNames from 'classnames';

// add 'hoverable' class to a parrent in case we need hover effect on svg bellow

type Props = {
  isActive: boolean;
};

export const CheckboxRound: React.FC<Props> = ({ isActive }) => {
  return (
    <div
      className={classNames('checkbox-round', {
        isActive: isActive,
      })}
    >
      <svg
        fill="transparent"
        className="checkbox-round__base-svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="checkbox-round__circle1"
          cx="12"
          cy="12"
          r="12"
          fill="transparent"
        />
        <circle
          className={classNames('checkbox-round__circle2', {
            isActive: isActive,
          })}
          cx="12"
          cy="12"
          r="9"
          fill="transparent"
        />
      </svg>
    </div>
  );
};
