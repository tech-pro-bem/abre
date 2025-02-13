"use client";
import { Modal } from "@/app/materiais/components/modal/modal";
import { ArrowLeftIcon } from "@/components/icons/arrow-left";
import { ResolvedGallery } from "@/types/contentful.types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";
import Pagination from "@/components/pagination";

interface PhotosListProps {
  albumData: ResolvedGallery[number];
}

export function PhotosList({ albumData }: PhotosListProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const albumsToShow = albumData.fields.photos.slice(startIndex, endIndex);

  const openModal = (index: number) => {
    setCarouselIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCarouselIndex(null);
    setModalOpen(false);
  };

  const photos = albumsToShow.map((photo) => ({
    url: (photo.fields.file?.url as string) || "",
    description: photo.fields.title?.toString() || "",
  }));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <Link
            href="/materiais/galeria"
            className={styles.arrow_back_container}
          >
            <ArrowLeftIcon />
          </Link>
          <h2 className={styles.title}>{albumData.fields.title}</h2>
        </div>
        <div>
          <span className={styles.quantity}>{albumData.fields.photos.length} imagens</span>
        </div>
      </div>
      <div className={styles.container_subtitle}>
        <p>{albumData.fields.description}</p>
      </div>
      <div className={styles.container_album}>
        {photos.map((photo, index) => (
          <button
            key={index}
            className={styles.image_container}
            onClick={() => openModal(index)}
          >
            <Image
              src={`https:${photo.url}`}
              alt={photo.description}
              width={148}
              height={117}
              className={styles.image}
            />
          </button>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={albumData.fields.photos.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        photos={photos}
        initialIndex={carouselIndex ?? 0}
      />
    </section>
  );
}
