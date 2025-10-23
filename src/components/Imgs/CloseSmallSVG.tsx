type Props = {
  className?: string;
  onClick?: () => void;
};

export const CloseSmallSVG: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.40197 16.3329L7.66797 15.6059L11.267 11.9999L7.66797 8.41989L8.40197 7.69189L12.001 11.2899L15.575 7.69289L16.309 8.41989L12.71 11.9999L16.309 15.6059L15.575 16.3329L12.001 12.7369L8.40197 16.3329Z" />
    </svg>
  );
};
