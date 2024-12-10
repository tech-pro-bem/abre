import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

type NavBarProps = {
  className?: string;
};

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <ul className={styles.content_container}>
            <li>
              <Link href="#conheca_a_abre">Conheça</Link>
            </li>
            <li>
              <Link href="#projetos">Projetos</Link>
            </li>
          </ul>
        </li>
        <li>
          <ul className={styles.content_container}>
            <li>
              <Link href="/">Contato</Link>
            </li>
            <li>
              <Link href="#perguntas_sobre_esquizofrenia">Esquizofrenia</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
