type Props = {
  className?: string;
  rotate: string;
};

export const VerLineSVG: React.FC<Props> = ({ className, rotate }) => {
  return (
    <svg
      className={className}
      width="196"
      height="196"
      viewBox="0 0 196 196"
    >
      <circle
        cx="98"
        cy="98"
        r="90"
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="169 396"
        transform={rotate}
      />
    </svg>
  );
};
