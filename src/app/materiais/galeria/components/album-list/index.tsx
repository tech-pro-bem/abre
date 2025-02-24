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
  currentPage: number;
  itemsPerPage: number;
};
export function AlbumList({ albums, currentPage, itemsPerPage }: AlbumsListProps) {
  const [currentPageState, setCurrentPageState] = useState(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPageState(page);
  };
  const totalItems = albums.length;

  return (
    <section className={styles.album_container}>
      <FilterButton defaultOrder="desc" />
      <ul className={styles.album_content}>
        {albums.map((album, index) => (
          <li key={index}>
            <Link
              className={styles.album_items}
              href={`/materiais/galeria/${generateSlug(album.fields.title)}/${album.sys.id}`}
            >
              <div className={styles.image_quantity}>
                <Image
                  src={`https:${album.fields.coverImage.fields.file?.url}`}
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
        currentPage={currentPageState}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
