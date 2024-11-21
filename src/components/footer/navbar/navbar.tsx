import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

type NavBarProps = {
  className?: string;
};

export const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navbar_content}>
        <div className={styles.container_1}>
          <li className={styles.navbar_link}>
            <Link href="#conheca_a_abre">Conheça</Link>
          </li>
          <li className={styles.navbar_link}>
            <Link href="#projetos">Projetos</Link>
          </li>
        </div>
        <div className={styles.container_2}>
          <li className={styles.navbar_link}>
            <Link href="/">Contato</Link>
          </li>
          <li className={styles.navbar_link}>
            <Link href="#perguntas_sobre_esquizofrenia">Esquizofrenia</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
