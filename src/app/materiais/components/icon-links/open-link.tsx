import { OpenNewArrowIcon } from "@/components/icons";

interface OpenLinkProps {
  url: string;
  label?: string;
}

export default function OpenLink({ url, label }: OpenLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {<p>{label}</p>}
      <OpenNewArrowIcon />
    </a>
  );
}
