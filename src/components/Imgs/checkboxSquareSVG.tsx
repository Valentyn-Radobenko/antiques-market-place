type Props = {
  className?: string;
  onClick?: () => void;
  value: 'defoult' | 'hover' | 'checked' | 'disabled';
};

export const CheckboxSquareSVG: React.FC<Props> = ({
  className,
  onClick,
  value,
}) => {
  return (
    <div
      onClick={onClick}
      className={className}
    >
      {value === 'hover' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1273_44730)">
            <g clip-path="url(#clip0_1273_44730)">
              <rect
                width="24"
                height="24"
                rx="4"
                fill="#95D5B2"
              />
            </g>
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="3.5"
              stroke="#1B4332"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1273_44730"
              x="-42"
              y="-42"
              width="124"
              height="124"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                flood-opacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feGaussianBlur stdDeviation="4" />
              <feComposite
                in2="hardAlpha"
                operator="out"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.925 0 0 0 0 1 0 0 0 0 0.99 0 0 0 0.01 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1273_44730"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1273_44730"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_1273_44730">
              <rect
                width="24"
                height="24"
                rx="4"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {value === 'disabled' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1273_44728)">
            <rect
              width="24"
              height="24"
              rx="4"
              fill="#B9CCC9"
            />
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="3.5"
              stroke="url(#paint0_linear_1273_44728)"
              stroke-opacity="0.25"
            />
            <g filter="url(#filter1_i_1273_44728)">
              <rect
                x="1"
                y="1"
                width="22"
                height="22"
                rx="3"
                fill="#DEE6E5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_1273_44728"
              x="-42"
              y="-42"
              width="124"
              height="124"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                flood-opacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feGaussianBlur stdDeviation="4" />
              <feComposite
                in2="hardAlpha"
                operator="out"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.925 0 0 0 0 1 0 0 0 0 0.99 0 0 0 0.01 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1273_44728"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1273_44728"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i_1273_44728"
              x="1"
              y="1"
              width="22"
              height="22"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                flood-opacity="0"
                result="BackgroundImageFix"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="1"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_innerShadow_1273_44728"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.686088 0 0 0 0 0.769444 0 0 0 0 0.744584 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1273_44728"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1273_44728"
              x1="8"
              y1="12.4717"
              x2="32.645"
              y2="14.739"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FDF5" />
              <stop
                offset="1"
                stop-color="#86BFAE"
                stop-opacity="0.5"
              />
            </linearGradient>
          </defs>
        </svg>
      )}
      {value === 'checked' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3854_150623)">
            <g clip-path="url(#clip0_3854_150623)">
              <rect
                width="24"
                height="24"
                rx="4"
                fill="#388964"
              />
              <path
                d="M10.257 16.601C9.86653 16.9915 9.23331 16.9915 8.84281 16.601L4.93691 12.6951C4.73984 12.498 4.73988 12.1783 4.93705 11.9813C5.13417 11.7846 5.45333 11.7847 5.65036 11.9816L8.84281 15.174C9.23331 15.5645 9.86653 15.5645 10.257 15.174L18.3489 7.0821C18.546 6.88501 18.8656 6.88506 19.0626 7.08226C19.2595 7.27937 19.2594 7.59865 19.0625 7.79557L10.257 16.601Z"
                fill="#F7FFFD"
              />
            </g>
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="3.5"
              stroke="url(#paint0_linear_3854_150623)"
              stroke-opacity="0.25"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_3854_150623"
              x="-42"
              y="-42"
              width="124"
              height="124"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                flood-opacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feGaussianBlur stdDeviation="4" />
              <feComposite
                in2="hardAlpha"
                operator="out"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.925 0 0 0 0 1 0 0 0 0 0.99 0 0 0 0.01 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3854_150623"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3854_150623"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_3854_150623"
              x1="8"
              y1="12.4717"
              x2="32.645"
              y2="14.739"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FDF5" />
              <stop
                offset="1"
                stop-color="#86BFAE"
                stop-opacity="0.5"
              />
            </linearGradient>
            <clipPath id="clip0_3854_150623">
              <rect
                width="24"
                height="24"
                rx="4"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {value === 'defoult' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <rect
              x="0"
              y="0"
              width="24"
              height="24"
              rx="4"
              fill="#708080"
              shape-rendering="crispEdges"
            />
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="4.5"
              stroke="url(#paint0_linear)"
              stroke-opacity="0.25"
              shape-rendering="crispEdges"
            />
            <g filter="url(#filter1_i)">
              <rect
                x="1"
                y="1"
                width="22"
                height="22"
                rx="3"
                fill="#F7FFFD"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="-8"
              y="-8"
              width="40"
              height="40"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                flood-opacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feGaussianBlur stdDeviation="4" />
              <feComposite
                in2="hardAlpha"
                operator="out"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.925 0 0 0 0 1 0 0 0 0 0.99 0 0 0 0.01 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i"
              x="1"
              y="1"
              width="22"
              height="22"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                flood-opacity="0"
                result="BackgroundImageFix"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="1"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_innerShadow"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.686088 0 0 0 0 0.769444 0 0 0 0 0.744584 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow"
              />
            </filter>
            <linearGradient
              id="paint0_linear"
              x1="0"
              y1="4"
              x2="24"
              y2="6"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FDF5" />
              <stop
                offset="1"
                stop-color="#86BFAE"
                stop-opacity="0.5"
              />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};
