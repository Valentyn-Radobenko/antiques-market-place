type Props = {
  className?: string;
  onClick?: () => void;
};

export const EclipseGreenWhite: React.FC<Props> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="#F7FFFD"
        stroke="#1B4332"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};
