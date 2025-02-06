"use client";
import { ChevronRightIcon, HouseIcon } from "@/components/icons";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { TABS } from "../materiais-tabs.tsx";
import styles from "./styles.module.css";

export function Breadcrumbs() {
  const pathName = usePathname();
  const pathsForBreadcrumbs = pathName.split("/").slice(1);

  return (
    <div className={styles.breadcrumbs}>
      <Link href={"/"}>
        <HouseIcon /> Página inicial
      </Link>{" "}
      {pathsForBreadcrumbs.map((path, index) => (
        <Fragment key={path}>
          <ChevronRightIcon />{" "}
          <Link href={index === 0 ? `/${path}` : path}>
            {TABS.find((tab) => tab.slug === path)?.title || capitalizeFirstLetter(path)}
          </Link>
        </Fragment>
      ))}
    </div>
  );
}
