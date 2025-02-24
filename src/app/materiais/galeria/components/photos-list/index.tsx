"use client";
import { Modal } from "@/app/materiais/components/modal/modal";
import { ArrowLeftIcon } from "@/components/icons/arrow-left";
import { ResolvedGallery } from "@/types/contentful.types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";
import Pagination from "@/components/pagination";
import { useRouter, useSearchParams } from "next/navigation";

interface PhotosListProps {
  albumData: ResolvedGallery[number];
  currentPage: number;
  itemsPerPage: number;
  totalPhotos: number;
}

export function PhotosList({ albumData, currentPage, itemsPerPage, totalPhotos }: PhotosListProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState<number | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();


  const handlePageChange = (page: number) => {
    const currentParams = new URLSearchParams(searchParams?.toString() || "");
    currentParams.set("page", page.toString());
    router.push(`?${currentParams.toString()}`, { scroll: false });
  };

  const openModal = (index: number) => {
    setCarouselIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCarouselIndex(null);
    setModalOpen(false);
  };

  const photos = albumData.fields.photos.map((photo) => ({
    url: (photo.fields.file?.url as string) || "",
    description: photo.fields.title?.toString() || "",
  }));
  
  if (!albumData) return <p style={{ textAlign: "center" }}>Nenhuma foto encontrada</p>;

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
        totalItems={totalPhotos}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
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
