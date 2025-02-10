"use client";

import FilterButton from "@/components/filter-button";
import Pagination from "@/components/pagination";
import { Resolvedgallery } from "@/types/contentful.types";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

type albumsListProps = {
  albums: Resolvedgallery;
};
export default function GaleriaClient({ albums }: albumsListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = albums.length;

  const ITEMS_PER_PAGE = 7;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const albumsToShow = albums.slice(startIndex, endIndex);

  return (
    <section className={styles.album_container}>
      <FilterButton />
      <div className={styles.album_content}>
        {albumsToShow.map(({ fields: { photo, title, description } }, index) => (
          <div key={index}>
            <Link
              className={styles.album_items}
              // href={`/materiais/galeria/${generateSlug(album.title)}`}
              href="/"
            >
              <div className={styles.image_quantity}>
                <Image
                  src={`https://${photo.fields.file?.url}`}
                  alt={title}
                  width={280}
                  height={220}
                  className={styles.image}
                />

                <span className={styles.quantity}>{albums.length} imagens</span>
              </div>
              <div className={styles.title_subtitle}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
