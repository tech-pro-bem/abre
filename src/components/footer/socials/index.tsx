import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";
import styles from "./styles.module.css";

interface FooterSocialsProps {
  className?: string;
}

export function FooterSocials({ className }: FooterSocialsProps) {
  return (
    <ul className={`${className ? className : ""}`}>
      <li>
        <a
          href="https://www.facebook.com/abre.esquizofrenia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            className={styles.icon}
            width={24}
            height={24}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/abreesquizofrenia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            className={styles.icon}
            width={23}
            height={24}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/@abrebrasil2014"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon
            className={styles.icon}
            width={26}
            height={26}
          />
        </a>
      </li>
    </ul>
  );
}
