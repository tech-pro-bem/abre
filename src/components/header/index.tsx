import Image from "next/image";
import styles from "./styles.module.css";
import { Navbar } from "./navbar";
import { SocialMedias } from "../social-medias";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo_container}>
        <figure className={styles.header__logo}>
          <Image
            src="/logo/logo.svg"
            alt="logo"
            width={148}
            height={34}
          />
        </figure>
        <button className={styles.header__button}>Acessar materiais</button>
      </div>

      <div className={styles.header__nav_container}>
        <Navbar />
        <button className={styles.header__button}>Acessar materiais</button>
        <SocialMedias />
      </div>
    </header>
  );
};
