import { IconSvgProps } from "@/types";

export function ChevronRightIcon({ size, width = 7, height = 13, ...props }: IconSvgProps) {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_644_5413)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 11.696L5.35926 6.5L0 1.304L0.827826 0.5L7 6.503L0.827826 12.5L0 11.696Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_644_5413">
          <rect
            width="7"
            height="12"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
