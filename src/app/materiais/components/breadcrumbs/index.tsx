"use client";
import { ChevronRightIcon, HouseIcon } from "@/components/icons";
import { generateTitleFromSlug } from "@/utils/slug-formatter";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { TABS } from "../materiais-tabs.tsx";
import styles from "./styles.module.css";

export function Breadcrumbs() {
  const pathName = usePathname();
  const pathsForBreadcrumbs = pathName.split("/").slice(1, 4);

  const getPathDisplay = (path: string) => {
    return TABS.find((tab) => tab.slug === path)?.title || generateTitleFromSlug(path);
  };

  return (
    <div className={styles.breadcrumbs}>
      <Link href={"/"}>
        <HouseIcon /> Página inicial
      </Link>{" "}
      {pathsForBreadcrumbs.map((path, index) => (
        <Fragment key={path}>
          <ChevronRightIcon />{" "}
          <Link href={`/${pathsForBreadcrumbs.slice(0, index + 1).join("/")}`}>
            {getPathDisplay(path)}
          </Link>
        </Fragment>
      ))}
    </div>
  );
}
