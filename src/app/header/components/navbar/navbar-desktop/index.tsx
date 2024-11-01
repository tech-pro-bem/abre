import Link from "next/link";
import styles from "./styles.module.css";

export const NavBarDesktop = () => {
  return (
    <nav>
      <ul className={styles.navbar__desktop}>
        <li className={styles.navbar__link_desktop}>
          <Link href="/">Conheça</Link>
        </li>
        <li className={styles.navbar__link_desktop}>
          <Link href="/">Projetos</Link>
        </li>
        <li className={styles.navbar__link_desktop}>
          <Link href="/">Contato</Link>
        </li>
        <li className={styles.navbar__link_desktop}>
          <Link href="/">Esquizofrenia</Link>
        </li>
      </ul>
    </nav>
  );
};
