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
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1273_44730)">
            <g clip-path="url(#clip0_1273_44730)">
              <rect
                x="8"
                y="8"
                width="24"
                height="24"
                rx="4"
                fill="#95D5B2"
              />
            </g>
            <rect
              x="8.5"
              y="8.5"
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
                x="8"
                y="8"
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
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1273_44728)">
            <rect
              x="8"
              y="8"
              width="24"
              height="24"
              rx="4"
              fill="#B9CCC9"
            />
            <rect
              x="8.5"
              y="8.5"
              width="23"
              height="23"
              rx="3.5"
              stroke="url(#paint0_linear_1273_44728)"
              stroke-opacity="0.25"
            />
            <g filter="url(#filter1_i_1273_44728)">
              <rect
                x="9"
                y="9"
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
              x="9"
              y="9"
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
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3854_150623)">
            <g clip-path="url(#clip0_3854_150623)">
              <rect
                x="8"
                y="8"
                width="24"
                height="24"
                rx="4"
                fill="#388964"
              />
              <path
                d="M18.2572 24.601C17.8667 24.9915 17.2335 24.9915 16.843 24.601L12.9371 20.6951C12.74 20.498 12.7401 20.1783 12.9373 19.9813C13.1344 19.7846 13.4536 19.7847 13.6506 19.9816L16.843 23.174C17.2335 23.5645 17.8667 23.5645 18.2572 23.174L26.3491 15.0821C26.5462 14.885 26.8658 14.8851 27.0628 15.0823C27.2596 15.2794 27.2595 15.5987 27.0626 15.7956L18.2572 24.601Z"
                fill="#F7FFFD"
              />
            </g>
            <rect
              x="8.5"
              y="8.5"
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
                x="8"
                y="8"
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
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1273_44726)">
            <rect
              x="9"
              y="9"
              width="24"
              height="24"
              rx="4"
              fill="#708080"
              shape-rendering="crispEdges"
            />
            <rect
              x="8.5"
              y="8.5"
              width="25"
              height="25"
              rx="4.5"
              stroke="url(#paint0_linear_1273_44726)"
              stroke-opacity="0.25"
              shape-rendering="crispEdges"
            />
            <g filter="url(#filter1_i_1273_44726)">
              <rect
                x="10"
                y="10"
                width="22"
                height="22"
                rx="3"
                fill="#F7FFFD"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_1273_44726"
              x="-42"
              y="-42"
              width="126"
              height="126"
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
                result="effect1_dropShadow_1273_44726"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1273_44726"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i_1273_44726"
              x="10"
              y="10"
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
                result="effect1_innerShadow_1273_44726"
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
                result="effect1_innerShadow_1273_44726"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1273_44726"
              x1="9"
              y1="13.4717"
              x2="33.645"
              y2="15.739"
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
