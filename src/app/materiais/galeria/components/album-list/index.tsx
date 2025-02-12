"use client";

import FilterButton from "@/components/filter-button";
import Pagination from "@/components/pagination";
import { ResolvedGallery } from "@/types/contentful.types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { generateSlug } from "@/utils/slug-formatter";
import styles from "./styles.module.css";

type AlbumsListProps = {
  albums: ResolvedGallery;
};
export function AlbumList({ albums }: AlbumsListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = albums.length;

  const ITEMS_PER_PAGE = 8;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const albumsToShow = albums.slice(startIndex, endIndex);

  return (
    <section className={styles.album_container}>
      <FilterButton />
      <ul className={styles.album_content}>
        {albumsToShow.map((album, index) => (
          <li key={index}>
            <Link
              className={styles.album_items}
              href={`/materiais/galeria/${generateSlug(album.fields.title)}/${album.sys.id}`}
            >
              <div className={styles.image_quantity}>
                <Image
                  src={`https://${album.fields.coverImage.fields.file?.url}`}
                  alt={album.fields.title}
                  width={280}
                  height={220}
                  className={styles.image}
                />

                <span className={styles.quantity}>{album.fields.photos.length} imagens</span>
              </div>
              <div className={styles.title_subtitle}>
                <h2 className={styles.title}>{album.fields.title}</h2>
                <p className={styles.subtitle}>{album.fields.description}</p>
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
