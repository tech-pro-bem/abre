import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../icons";

import styles from "./styles.module.css";

const socialMedias = [
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/abre.esquizofrenia/",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/abreesquizofrenia/",
  },
  {
    icon: YoutubeIcon,
    href: "https://www.youtube.com/@abrebrasil2014",
  },
];

export const SocialMedias = () => {
  return (
    <ul className={styles.social_medias__list}>
      {socialMedias.map(({ icon: Icon, href }) => (
        <li key={href}>
          <a
            className={styles.icon}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              width={24}
              height={24}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
