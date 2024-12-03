import Link from "next/link";
import styles from "./styles.module.css";

const navItems = [
  {
    label: "Conheça",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/",
  },
  {
    label: "Contato",
    href: "/",
  },
  {
    label: "Esquizofrenia",
    href: "/",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {navItems.map((item) => (
          <li key={item.label} className={styles.navbar__item}>
            <Link
              href={item.href}
              className={styles.navbar__link}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
