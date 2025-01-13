import Image from "next/image";
import styles from "./styles.module.css";
import { Navbar } from "./navbar";
import { SocialMedias } from "../social-medias";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo_container}>
        <Link href={"/"} className={styles.header__logo}>
          <Image
            src="/logo/logo.svg"
            alt="logo"
            width={148}
            height={34}
          />
        </Link>
        <Link
          href="/materiais"
          className={styles.header__button}
        >
          Acessar materiais
        </Link>
      </div>

      <div className={styles.header__nav_container}>
        <Navbar />
        <Link
          href="/materiais"
          className={styles.header__button}
        >
          Acessar materiais
        </Link>
        <SocialMedias />
      </div>
    </header>
  );
};
