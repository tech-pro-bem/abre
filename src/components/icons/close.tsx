import { IconSvgProps } from "@/types";
export function CloseIcon(props: IconSvgProps) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.4 14L0 12.6 5.6 7 0 1.4 1.4 0 7 5.6 12.6 0 14 1.4 8.4 7l5.6 5.6-1.4 1.4L7 8.4 1.4 14z"
        fill="#0D4542"
      />
    </svg>
  );
}
