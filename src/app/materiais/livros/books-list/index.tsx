"use client";

import { useMemo, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
// import DownloadLink from "../../components/icon-links/download-link";
import OpenLink from "../../components/icon-links/open-link";
import Pagination from "@/components/pagination";
import { ResolvedMaterialsBooks } from "@/types/contentful.types";
import FilterButton from "@/components/filter-button";

type BookListProps = {
  books: ResolvedMaterialsBooks; 
};

export default function LivrosPage({ books }: BookListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"recent" | "old">("old");


  const sortedBooks = useMemo(() => {
    return [...books].sort((a, b) => {
      const dateA = new Date(a.fields.dataDePublicacao || 0).getTime();
      const dateB = new Date(b.fields.dataDePublicacao || 0).getTime();
  
      return (dateA - dateB) * (sortOrder === "recent" ? -1 : 1);
    });
  }, [sortOrder, books]);

  const currentBooks = useMemo(() => {
    const startIndex = (currentPage - 1) * 7;
    const endIndex = startIndex + 7;
    return sortedBooks.slice(startIndex, endIndex);
  }, [currentPage, sortedBooks]);

  return (
    <section>
      <FilterButton onToggle={setSortOrder} sortOrder={sortOrder} />
      <ul className={styles.section}>
        {currentBooks.map(({ fields: { image, title, subtitle, file } }) => {       
          return (
            <li key={title} className={styles.books_container}>
              <Image
                src={`https:${image.fields.file?.url}`} 
                alt={title}
                width={148}
                height={222}
                className={styles.image}
                priority
              />
              <div className={styles.books_content}>
                <div className={styles.title_container}>
                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.subtitle}>
                    {subtitle}
                  </p>
                </div>
                <div className={styles.container_buttons}>
                  <div className={styles.download_link}>
                    { /* <DownloadLink  
                    url={file.fields.file?.url} 
                    label="Baixar o arquivo" /> 
                    */ }
                  </div>
                  <div className={styles.open_link}>
                    <OpenLink 
                      url={`https:${file.fields.file?.url}`} 
                      label="Abrir no navegador" 
                    />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalItems={sortedBooks.length}
        itemsPerPage={7}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
