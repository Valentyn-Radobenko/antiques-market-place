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
      <path d="M19.646 12.752L7.131 18.022C6.86167 18.1287 6.60567 18.1057 6.363 17.953C6.121 17.7997 6 17.5783 6 17.289V6.712C6 6.422 6.12133 6.20033 6.364 6.047C6.606 5.89366 6.86167 5.871 7.131 5.979L19.646 11.248C19.9727 11.3933 20.136 11.644 20.136 12C20.136 12.356 19.9727 12.6067 19.646 12.752ZM7 17L18.85 12L7 7V10.885L11.846 12L7 13.116V17Z" />
    </svg>
  );
};
