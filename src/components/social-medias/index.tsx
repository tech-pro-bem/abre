import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../icons";

import styles from "./styles.module.css";

const socialMedias = [
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/abre.esquizofrenia/",
    width: 24,
    height: 24,
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/abreesquizofrenia/",
    width: 24,
    height: 24,
  },
  {
    icon: YoutubeIcon,
    href: "https://www.youtube.com/@abrebrasil2014",
    width: 26,
    height: 26,
  },
];

export const SocialMedias = () => {
  return (
    <ul className={styles.social_medias__list}>
      {socialMedias.map(({ icon: Icon, href, width, height }) => (
        <li key={href}>
          <a
            className={styles.icon}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              width={width}
              height={height}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
