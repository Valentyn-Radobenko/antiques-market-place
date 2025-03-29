type Props = {
  className?: string;
  onClick?: () => void;
};

export const ArrowTale: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path d="M17.079 12.5H5V11.5H17.079L11.287 5.708L12 5L19 12L12 19L11.287 18.292L17.079 12.5Z" />
    </svg>
  );
};
