"use client";
import { Albums } from "@/mock-data/galeria";
import styles from "./styles.module.css";
import { ArrowLeftIcon } from "@/components/icons/arrow-left";
import Link from "next/link";
import Image from "next/image";
import { generateSlug } from "@/utils/generate-slug";
import { useState } from "react";
import { Modal } from "../../components/modal/modal";


export default function AlbumPage({ params }: { params: { slug: string } }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCarouselIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCarouselIndex(null);
    setModalOpen(false);
  };

  const albums = Albums.find((album) => generateSlug(album.title) === params.slug);

  if (!albums) return <div>Album não encontrado</div>;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <Link href="/materiais/galeria">
            <ArrowLeftIcon />
          </Link>
          <h2 className={styles.title}>{albums.title}</h2>
        </div>
        <div>
          <span className={styles.quantity}>{albums.quantity}</span>
        </div>
      </div>
      <div className={styles.container_subtitle}>
        <p>{albums.subtitle}</p>
      </div>
      <div className={styles.container_album}>
        {albums.images.map((image, index) => (
          <button
            key={index}
            onClick={() => openModal(index)}
          >
            <Image
              key={index}
              src={image}
              alt={albums.title}
              width={148}
              height={117}
              className={styles.image}
            />
          </button>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        photos={albums.images.map((img) => ({
          image: img,
          subtitle: albums.subtitle,
        }))}
        initialIndex={carouselIndex ?? 0}
      />
    </section>
  );
}
