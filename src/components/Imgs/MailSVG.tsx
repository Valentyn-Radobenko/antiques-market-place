type Props = {
  className?: string;
  onClick?: React.MouseEventHandler | undefined;
};

export const MailSVG: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        stroke-width="1"
        fill="none"
      />
      <path
        d="M3 6L12 13L21 6"
        stroke="currentColor"
        stroke-width="1"
        fill="none"
      />
    </svg>
  );
};
