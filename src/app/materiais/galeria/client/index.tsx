"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import FilterButton from "@/components/filter-button";
import Pagination from "@/components/pagination";
import { ResolvedGallery } from "@/types/contentful.types";

import styles from "./styles.module.css";

type AlbumsListProps = {
  albums: ResolvedGallery;
};
export default function GaleriaClient({ albums }: AlbumsListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = albums.length;

  const ITEMS_PER_PAGE = 7;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const albumsToShow = albums.slice(startIndex, endIndex);

  return (
    <section className={styles.album_container}>
      <FilterButton />
      <ul className={styles.album_content}>
        {albumsToShow.map(({ fields: { photo, title, description } }, index) => (
          <li key={index}>
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
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
