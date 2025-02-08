"use client"

import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { mock_livros_datas } from "@/mock-data/books";
import DownloadLink from "../components/icon-links/download-link";
import OpenLink from "../components/icon-links/open-link";
import FilterButton from "@/components/filter-button";
import Pagination from "@/components/pagination";

// import { Metadata } from "next";

// export const metadata: Metadata = {
  // title: "Livros",
  // description: "Consulte as nossas publicações",
// };

type Book = {
  image: string;
  title: string;
  subtitle?: string;
  url: string;
};

export default function LivrosPage() {
  const [currentBooks, setCurrentBooks] = useState<Book[]>([]);
 
  return (
    <section>
        <FilterButton />
      <ul className={styles.section}>
      {currentBooks.map(({ image, title, subtitle, url }) => (
        <li
          key={title}
          className={styles.books_container}
        >
          <Image
            src={image}
            alt={title}
            width={148}
            height={222}
            className={styles.image}
            priority
          />
          <div className={styles.books_content}>
            <div className={styles.title_container}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.container_buttons}>
              <div className={styles.download_link}>
                <DownloadLink
                  title={title}
                  url={url}
                  label="Baixar o arquivo"
                />
              </div>
              <div className={styles.open_link}>
                <OpenLink
                  url={url}
                  label="Abrir no navegador"
                />
              </div>
            </div>
          </div>
        </li>
      ))}
      </ul>
      <Pagination<Book>
        items={mock_livros_datas}
        itemsPerPage={7}
        pageChange={setCurrentBooks}
      />
    </section>
  );
}
