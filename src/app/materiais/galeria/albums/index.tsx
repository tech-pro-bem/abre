"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import FilterButton from "./filter-button";
import { useState } from "react";
import Pagination from "@/components/pagination";

interface Album {
  quantity: string;
  image: string;
  title: string;
  subtitle: string;
}
const Albums: Album[] = [
  {
    quantity: "6 imagens",
    image: "/img-album/Cópia-de-Congress-On-Brain-2023-1.webp",
    title: "Congress On Brain 2023",
    subtitle: "Local, data e resumo do evento",
  },
  {
    quantity: "5 imagens",
    image: "/img-album/Cópia-de-Encontro_Catarinense_2023-3.webp",
    title: "Encontro Catarinense 2023",
    subtitle: "Local, data e resumo do evento",
  },
  {
    quantity: "3 imagens",
    image: "/img-album/Cópia-de-Dia_Nacional_Esquizofrenia_2023-1.webp",
    title: "Dia Nacional Esquizofrenia 2023",
    subtitle: "Local, data e resumo do evento",
  },
  {
    quantity: "3 imagens",
    image: "/img-album/Cópia-de-Mandala-produção-oficina-artes-2021-1.webp",
    title: "Oficinas de Arte 2021",
    subtitle: "Local, data e resumo do evento",
  },
  {
    quantity: "34 imagens",
    image: "/img-album/Cópia-de-Festa_15_anos_ABRE-2017-1.webp",
    title: "Festa de 15 anos ABRE 2017",
    subtitle: "Local, data e resumo do evento",
  },
  {
    quantity: "4 imagens",
    image: "/img-album/Cópia-de-LIvro_Entre_Razão_Ilusão_2023-3.webp",
    title: "Congress On Brain 2023",
    subtitle: "Livro entre a Razão e a Ilusão",
  },
  {
    quantity: "3 imagens",
    image: "/img-album/Cópia-de-Jorge-Assis-Palestra-sobre-esquizofrenia-2021-2.webp",
    title: "Encontros/Palestras",
    subtitle: "Local, data e resumo do evento",
  },
  {
    quantity: "6 imagens",
    image: "/img-album/Cópia-de-Congress-On-Brain-2023-1.webp",
    title: "Congress On Brain 2023",
    subtitle: "Local, data e resumo do evento",
  },
  {
    quantity: "5 imagens",
    image: "/img-album/Cópia-de-Encontro_Catarinense_2023-3.webp",
    title: "Encontro Catarinense 2023",
    subtitle: "Local, data e resumo do evento",
  },
  {
    quantity: "3 imagens",
    image: "/img-album/Cópia-de-Dia_Nacional_Esquizofrenia_2023-1.webp",
    title: "Dia Nacional Esquizofrenia 2023",
    subtitle: "Local, data e resumo do evento",
  },
  {
    quantity: "3 imagens",
    image: "/img-album/Cópia-de-Mandala-produção-oficina-artes-2021-1.webp",
    title: "Oficinas de Arte 2021",
    subtitle: "Local, data e resumo do evento",
  },
  {
    quantity: "34 imagens",
    image: "/img-album/Cópia-de-Festa_15_anos_ABRE-2017-1.webp",
    title: "Festa de 15 anos ABRE 2017",
    subtitle: "Local, data e resumo do evento",
  },
  {
    quantity: "4 imagens",
    image: "/img-album/Cópia-de-LIvro_Entre_Razão_Ilusão_2023-3.webp",
    title: "Congress On Brain 2023",
    subtitle: "Livro entre a Razão e a Ilusão",
  },
  {
    quantity: "3 imagens",
    image: "/img-album/Cópia-de-Jorge-Assis-Palestra-sobre-esquizofrenia-2021-2.webp",
    title: "Encontros/Palestras",
    subtitle: "Local, data e resumo do evento",
  },
];
const ITEMS_PER_PAGE = 7;

export const Album = () => {
  const [currentAlbums, setCurrentAlbums] = useState<Album[]>([]);
  return (
    <section className={styles.album_container}>
      <FilterButton />
      <div className={styles.album_content}>
        {currentAlbums.map((album, index) => (
          <div
            key={index}
            className={styles.album_items}
          >
            <Link href="/">
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
    </section>
  );
};
