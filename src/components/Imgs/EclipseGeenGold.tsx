type Props = {
  className?: string;
  onClick?: () => void;
};

export const EclipseGeenGold: React.FC<Props> = () => {
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
        fill="url(#paint0_linear_4336_71119)"
        stroke="url(#paint1_linear_4336_71119)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4336_71119"
          x1="24"
          y1="-7.15256e-07"
          x2="7.15256e-07"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5A000" />
          <stop
            offset="0.0983334"
            stopColor="#FFAA00"
          />
          <stop
            offset="0.478333"
            stopColor="#FFCF00"
          />
          <stop
            offset="0.623333"
            stopColor="#FFD300"
          />
          <stop
            offset="1"
            stopColor="#FFF6C5"
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4336_71119"
          x1="0"
          y1="0"
          x2="25.6365"
          y2="1.89821"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.245"
            stopColor="#0D392C"
          />
          <stop
            offset="0.735"
            stopColor="#40916C"
          />
          <stop
            offset="0.98"
            stopColor="#95D5B2"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
