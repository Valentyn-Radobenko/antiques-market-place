type Props = {
  className?: string;
  onClick?: () => void;
};

export const BigArrow: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M15.9999 21.3079L6.69189 11.9999L15.9999 2.69189L17.0639 3.75589L8.81889 11.9999L17.0629 20.2439L15.9999 21.3079Z" />
    </svg>
  );
};
