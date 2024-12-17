import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

type NavBarProps = {
  className?: string;
};

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <ul className={styles.nav}>
      <li>
        <Link
          className={styles.item}
          href="#conheca_a_abre"
        >
          Conheça
        </Link>
      </li>
      <li>
        <Link
          className={styles.item}
          href="#projetos"
        >
          Projetos
        </Link>
      </li>

      <li>
        <Link
          className={styles.item}
          href="#contato"
        >
          Contato
        </Link>
      </li>
      <li>
        <Link
          className={styles.item}
          href="#perguntas_sobre_esquizofrenia"
        >
          Esquizofrenia
        </Link>
      </li>
    </ul>
  );
};
