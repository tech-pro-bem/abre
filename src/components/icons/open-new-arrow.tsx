import { IconSvgProps } from "@/types";

export function OpenNewArrowIcon({ size = 24, width = 24, height = 24, ...props }: IconSvgProps) {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_2174_805"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect
          width="24"
          height="24"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_2174_805)">
        <path
          d="M6.40049 18L5.00049 16.6L14.6005 7H6.00049V5H18.0005V17H16.0005V8.4L6.40049 18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
