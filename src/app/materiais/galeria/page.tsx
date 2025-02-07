"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Pagination from "@/components/pagination";
import FilterButton from "@/components/filter-button";
import { Albums } from "@/mock-data/galeria";
import FotosComponent from "../components/fotos/fotos";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Galeria",
//   description: "Acompanhe nossos eventos",
// };


export default function GaleriaPage() {
  const [currentAlbums, setCurrentAlbums] = useState<typeof Albums>([]);
  const ITEMS_PER_PAGE = 7;

  return (
    <section className={styles.album_container}>
      <FilterButton />
      <div className={styles.album_content}>
        {currentAlbums.map((album, index) => (
          <div key={index}>
            <Link
              className={styles.album_items}
              href="/"
            >
              <div className={styles.image_quantity}>
                <Image
                  src={album.image}
                  alt={album.title}
                  width={280}
                  height={220}
                  className={styles.image}
                />
                <span className={styles.quantity}>{album.quantity}</span>
              </div>
              <div className={styles.title_subtitle}>
                <h2 className={styles.title}>{album.title}</h2>
                <p className={styles.subtitle}>{album.subtitle}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Pagination
        items={Albums}
        itemsPerPage={ITEMS_PER_PAGE}
        pageChange={setCurrentAlbums}
      />
      <FotosComponent />
    </section>
  );
}
