import { IconSvgProps } from "@/types";

export function HouseIcon({ size, width = 20, height = 21, ...props }: IconSvgProps) {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_644_5409"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={size || width}
        height={size || height}
      >
        <rect
          y="0.5"
          width={size || width}
          height={size || height}
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_644_5409)">
        <path
          d="M5.00016 16.3333H7.50016V11.3333H12.5002V16.3333H15.0002V8.83333L10.0002 5.08333L5.00016 8.83333V16.3333ZM3.3335 18V8L10.0002 3L16.6668 8V18H10.8335V13H9.16683V18H3.3335Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
