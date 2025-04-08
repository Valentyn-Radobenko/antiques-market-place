type Props = {
  className?: string;
  onClick?: () => void;
};

export const EditSVG: React.FC<Props> = ({ className, onClick }) => {
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
      <path d="M13.5999 13.692L10.9999 11.092L6.11589 15.977C5.99989 16.0923 5.94189 16.2333 5.94189 16.4C5.94189 16.5666 5.99989 16.7076 6.11589 16.823L7.86889 18.577C7.98422 18.6923 8.12522 18.75 8.29189 18.75C8.45856 18.75 8.59989 18.6923 8.71589 18.577L13.5999 13.692ZM11.7139 10.379L14.3139 12.979L19.2499 8.04196C19.3652 7.92662 19.4229 7.77929 19.4229 7.59996C19.4229 7.42062 19.3652 7.27329 19.2499 7.15796L17.5339 5.44196C17.4192 5.32662 17.2719 5.26896 17.0919 5.26896C16.9119 5.26896 16.7646 5.32662 16.6499 5.44196L11.7139 10.379ZM10.6519 10.025L14.6669 14.041L9.42289 19.285C9.10022 19.6076 8.72356 19.769 8.29289 19.769C7.86156 19.769 7.48456 19.6076 7.16189 19.285L6.95789 19.081L6.28689 19.752C6.14156 19.8966 5.96756 20.0126 5.76489 20.1C5.56222 20.1873 5.35289 20.2306 5.13689 20.23H4.00689C3.82556 20.23 3.70289 20.1463 3.63889 19.979C3.57422 19.811 3.60622 19.663 3.73489 19.535L5.57289 17.696L5.40789 17.531C5.08456 17.2076 4.92289 16.8306 4.92289 16.4C4.92289 15.9693 5.08456 15.5926 5.40789 15.27L10.6519 10.025ZM10.6519 10.025L15.9619 4.71496C16.2846 4.39229 16.6612 4.23096 17.0919 4.23096C17.5232 4.23096 17.9002 4.39262 18.2229 4.71596L19.9769 6.46896C20.3002 6.79229 20.4619 7.16929 20.4619 7.59996C20.4619 8.03062 20.3002 8.40729 19.9769 8.72996L14.6669 14.04L10.6519 10.025Z" />
    </svg>
  );
};
