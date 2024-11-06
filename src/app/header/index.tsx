import { NavBarMobile } from "./components/navbar/navbar-mobile";
import { NavBarDesktop } from "./components/navbar/navbar-desktop";
import { IconFacebook, IconInstagram, IconYoutube } from "./components/icons";
import styles from "./styles.module.css";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className={styles.container__header_mobile}>
        <div>
          <Image
            src="/logo/logo.svg"
            alt="logo"
            width={148}
            height={34}
          />
        </div>
        <button className={styles.button__header_mobile}>Acessar materiais</button>
      </div>
      <div className={styles.navbar__mobile}>
        <NavBarMobile />
      </div>
      <div className={styles.container__header_desktop}>
        <div className={styles.logo__desktop}>
          <a
            href="/"
            target="_self"
          >
            <Image
              src="/logo/logo.svg"
              alt="logo"
              width={176}
              height={41}
            />
          </a>
        </div>
        <NavBarDesktop />
        <div className={styles.button__container_desktop}>
          <button className={styles.button__header_desktop}>Materiais complementares</button>
        </div>
        <ul className={styles.icons__header_desktop}>
          <li>
            <a
              href="https://www.facebook.com/abre.esquizofrenia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFacebook
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
              <IconInstagram
                width={24}
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
              <IconYoutube
                width={26}
                height={26}
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
