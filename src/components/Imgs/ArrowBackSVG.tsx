type Props = {
  className?: string;
  onClick?: React.MouseEventHandler | undefined;
};

export const ArrowBackSVG: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      width="24"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path d="M6.921 13L12.714 18.792L12 19.5L5 12.5L12 5.5L12.714 6.208L6.92 12H19V13H6.921Z" />
    </svg>
  );
};
