"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

const TABS = [
  { title: "Livros", slug: "livros" },
  { title: "Relatórios", slug: "relatorios" },
  { title: "Galeria", slug: "galeria" },
];

export function MateriaisTabs() {
  const pathName = usePathname();
  const isActiveTab = (slug: string) => pathName.includes(slug);
  return (
    <ul className={styles.tabs_container}>
      {TABS.map(({ title, slug }) => (
        <li
          key={slug}
          className={`${styles.tab} ${isActiveTab(slug) ? styles.active : ""}`}
        >
          <Link href={`${slug}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
