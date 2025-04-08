type Props = {
  className?: string;
  onClick?: () => void;
};

export const SendButtonSVG: React.FC<Props> = ({ className, onClick }) => {
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
      <path d="M17.646 12.752L5.131 18.022C4.86167 18.1287 4.60567 18.1057 4.363 17.953C4.121 17.7997 4 17.5783 4 17.289V6.712C4 6.422 4.12133 6.20033 4.364 6.047C4.606 5.89366 4.86167 5.871 5.131 5.979L17.646 11.248C17.9727 11.3933 18.136 11.644 18.136 12C18.136 12.356 17.9727 12.6067 17.646 12.752ZM5 17L16.85 12L5 7V10.885L9.846 12L5 13.116V17Z" />
    </svg>
  );
};
