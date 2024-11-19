import { IconSvgProps } from "@/types";

export function FacebookIcon({ size = 25, width = 25, height = 25, ...props }: IconSvgProps) {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_753_107)">
        <path
          d="M8.5 6.67676C8.5 5.08546 9.13214 3.55934 10.2574 2.43412C11.3826 1.3089 12.9087 0.676758 14.5 0.676758L19.5 0.676758V7.17676H15.5V9.17676H19.747L18.302 15.6768H15.5V24.6768H8.5V15.6768H4.75V9.17676H8.5V6.67676ZM14.5 2.67676C13.4391 2.67676 12.4217 3.09819 11.6716 3.84833C10.9214 4.59848 10.5 5.61589 10.5 6.67676V11.1768H6.75V13.6768H10.5V22.6768H13.5V13.6768H16.698L17.253 11.1768H13.5V7.17676C13.5 6.64632 13.7107 6.13762 14.0858 5.76254C14.4609 5.38747 14.9696 5.17676 15.5 5.17676H17.5V2.67676H14.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_753_107">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5 0.676758)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
