"use client"
import { useState } from "react";
import { Albums } from "@/mock-data/galeria";
import styles from "./styles.module.css";
import { ArrowLeftIcon } from "@/components/icons/arrow-left";
import Link from "next/link";
import Image from "next/image";
import { generateSlug } from "@/utils/generate-slug";
import Pagination from "@/components/pagination";

export default function AlbumPage({ params }: { params: { slug: string } }) {

  const albums = Albums.find((album) => generateSlug(album.title) === params.slug);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

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
        {currentImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={albums.title}
            width={148}
            height={117}
            className={styles.image}
          />
        ))}
      </div>
      <Pagination
        items={albums.images}
        itemsPerPage={12}
        pageChange={setCurrentImages}
      />
    </section>
  );
}
