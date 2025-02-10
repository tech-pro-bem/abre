import { IconSvgProps } from "@/types";

export function ArrowLeftIcon({ size, width = 13,  height = 23, ...props }: IconSvgProps) {
    return (
        <svg 
        width= {size || width}
        height={size || height}
        viewBox="0 0 13 23" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        >
            <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M13 21.459L3.04709 11.5L13 1.541L11.4626 0L0 11.5057L11.4626 23L13 21.459Z" 
                fill="#177873"
            />
        </svg>
    )
}