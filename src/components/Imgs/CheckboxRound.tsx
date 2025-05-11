type Props = {
  className?: string;
  onClick?: () => void;
  value: 'defoult' | 'hover' | 'checked' | 'disabled';
};

export const CheckboxRound: React.FC<Props> = ({
  className,
  onClick,
  value,
}) => {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {value === 'hover' && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_4808_115137)">
            <g clip-path="url(#clip0_4808_115137)">
              <rect
                x="8"
                y="8"
                width="24"
                height="24"
                rx="12"
                fill="#95D5B2"
              />
              <g filter="url(#filter1_d_4808_115137)">
                <rect
                  x="11"
                  y="11"
                  width="18"
                  height="18"
                  rx="9"
                  fill="#95D5B2"
                />
              </g>
            </g>
            <rect
              x="8.5"
              y="8.5"
              width="23"
              height="23"
              rx="11.5"
              stroke="#1B4332"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_4808_115137"
              x="-42"
              y="-42"
              width="124"
              height="124"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
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
                result="effect1_dropShadow_4808_115137"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4808_115137"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_4808_115137"
              x="-39"
              y="-39"
              width="118"
              height="118"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
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
                result="effect1_dropShadow_4808_115137"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4808_115137"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_4808_115137">
              <rect
                x="8"
                y="8"
                width="24"
                height="24"
                rx="12"
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
          <g filter="url(#filter0_d_4808_115137)">
            <rect
              x="8"
              y="8"
              width="24"
              height="24"
              rx="12"
              fill="#B9CCC9"
            />
            <rect
              x="8.5"
              y="8.5"
              width="23"
              height="23"
              rx="11.5"
              stroke="url(#paint0_linear_4808_115137)"
              strokeOpacity="0.25"
            />
            <g filter="url(#filter1_i_4808_115137)">
              <rect
                x="9"
                y="9"
                width="22"
                height="22"
                rx="11"
                fill="#DEE6E5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_4808_115137"
              x="-42"
              y="-42"
              width="124"
              height="124"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
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
                result="effect1_dropShadow_4808_115137"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4808_115137"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i_4808_115137"
              x="9"
              y="9"
              width="22"
              height="22"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
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
                result="effect1_innerShadow_4808_115137"
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
                result="effect1_innerShadow_4808_115137"
              />
            </filter>
            <linearGradient
              id="paint0_linear_4808_115137"
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
          <g filter="url(#filter0_d_4808_115137)">
            <g clip-path="url(#clip0_4808_115137)">
              <rect
                x="8"
                y="8"
                width="24"
                height="24"
                rx="12"
                fill="#388964"
              />
              <g filter="url(#filter1_d_4808_115137)">
                <rect
                  x="11"
                  y="11"
                  width="18"
                  height="18"
                  rx="9"
                  fill="#388964"
                />
                <rect
                  x="11.5"
                  y="11.5"
                  width="17"
                  height="17"
                  rx="8.5"
                  stroke="#F7FFFD"
                />
              </g>
            </g>
            <rect
              x="8.5"
              y="8.5"
              width="23"
              height="23"
              rx="11.5"
              stroke="#CFF4E8"
              strokeOpacity="0.15"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_4808_115137"
              x="-42"
              y="-42"
              width="124"
              height="124"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
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
                result="effect1_dropShadow_4808_115137"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4808_115137"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_4808_115137"
              x="-39"
              y="-39"
              width="118"
              height="118"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
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
                result="effect1_dropShadow_4808_115137"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4808_115137"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_4808_115137">
              <rect
                x="8"
                y="8"
                width="24"
                height="24"
                rx="12"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {value === 'defoult' && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_4808_115137)">
            <rect
              x="8"
              y="8"
              width="24"
              height="24"
              rx="12"
              fill="#708080"
            />
            <rect
              x="8.5"
              y="8.5"
              width="23"
              height="23"
              rx="11.5"
              stroke="#CFF4E8"
              strokeOpacity="0.15"
            />
            <g filter="url(#filter1_i_4808_115137)">
              <rect
                x="9"
                y="9"
                width="22"
                height="22"
                rx="11"
                fill="#F7FFFD"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_4808_115137"
              x="-42"
              y="-42"
              width="124"
              height="124"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
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
                result="effect1_dropShadow_4808_115137"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4808_115137"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i_4808_115137"
              x="9"
              y="9"
              width="22"
              height="22"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
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
                result="effect1_innerShadow_4808_115137"
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
                result="effect1_innerShadow_4808_115137"
              />
            </filter>
          </defs>
        </svg>
      )}
    </div>
  );
};
