type Props = {
  className?: string;
  onClick?: () => void;
};

export const ArrowRound: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="77"
      height="43"
      viewBox="0 0 77 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.32422 0.182129C1.32422 0.182129 1.67123 21.305 11.635 33.2537C21.5987 45.2023 38.6829 42.8175 48.8142 36.7174C61.9466 28.8103 73.4897 6.02833 73.4897 6.02833M73.4897 6.02833L58.2665 10.3853M73.4897 6.02833L75.9743 21.674"
        stroke="black"
      />
    </svg>
  );
};
