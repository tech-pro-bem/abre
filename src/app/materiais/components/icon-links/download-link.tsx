import { DownloadIcon } from "@/components/icons";
import { formatFileName } from "@/utils/format-file-name";

interface DownloadLinkProps {
  title: string;
  url: string;
  label?: string;
}

export default function DownloadLink({ title, url, label }: DownloadLinkProps) {
  return (
    <a
      href={url}
      download={`${formatFileName(title)}.pdf`}
    >
      {<p>{label}</p>}
      <DownloadIcon />
    </a>
  );
}
