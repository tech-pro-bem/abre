import Link from "next/link";
import styles from "./styles.module.css";

export const NavBarMobile = () => {
  return (
    <nav>
      <ul className={styles.navbar__mobile}>
        <li className={styles.navbar__link_mobile}>
          <Link href="/">Conheça</Link>
        </li>
        <li className={styles.navbar__link_mobile}>
          <Link href="/">Projetos</Link>
        </li>
        <li className={styles.navbar__link_mobile}>
          <Link href="/">Contato</Link>
        </li>
        <li className={styles.navbar__link_mobile}>
          <Link href="/">Esquizofrenia</Link>
        </li>
      </ul>
    </nav>
  );
};
