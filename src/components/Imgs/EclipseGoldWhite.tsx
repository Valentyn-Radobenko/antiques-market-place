type Props = {
  className?: string;
  onClick?: () => void;
};

export const EclipseGoldWhite: React.FC<Props> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_4664_112871)">
        <circle
          cx="12"
          cy="12"
          r="8"
          fill="#F7FFFD"
          stroke="url(#paint0_linear_4664_112871)"
          strokeWidth="8"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_4664_112871"
          x="0"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite
            in2="hardAlpha"
            operator="out"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4664_112871"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4664_112871"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4664_112871"
          x1="28"
          y1="-7.15256e-07"
          x2="4"
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
      </defs>
    </svg>
  );
};
