type Props = {
  className?: string;
  onClick?: () => void;
};

export const EclipseMintGreen: React.FC<Props> = () => {
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
        fill="#1C2A25"
        stroke="#95D5B2"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};
