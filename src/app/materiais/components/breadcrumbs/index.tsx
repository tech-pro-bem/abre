"use client";
import { ChevronRightIcon, HouseIcon } from "@/components/icons";
import Link from "next/link";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import { TABS } from "../materiais-tabs.tsx";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";

export function Breadcrumbs() {
  const pathName = usePathname();
  const pathsForBreadcrumbs = pathName.split("/").slice(1);

  return (
    <div className={styles.breadcrumbs}>
      <Link href={"/"}>
        <HouseIcon /> Página inicial
      </Link>{" "}
      {pathsForBreadcrumbs.map((path, index) => (
        <>
          <ChevronRightIcon />{" "}
          <Link
            href={index === 0 ? `/${path}` : path}
            key={path}
          >
            {TABS.find((tab) => tab.slug === path)?.title || capitalizeFirstLetter(path)}
          </Link>
        </>
      ))}
    </div>
  );
}
