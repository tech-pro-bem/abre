import { SVGProps } from "react";

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 6a6 6 0 016-6h5v6.5h-4v2h4.247L17.802 15H15v9H8v-9H4.25V8.5H8V6zm6-4a4 4 0 00-4 4v4.5H6.25V13H10v9h3v-9h3.198l.555-2.5H13v-4a2 2 0 012-2h2V2h-3z"
        fill="#177873"
      />
    </svg>
  );
};
