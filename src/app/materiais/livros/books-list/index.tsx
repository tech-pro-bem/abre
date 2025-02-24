"use client";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./styles.module.css";
import Image from "next/image";
// import DownloadLink from "../../components/icon-links/download-link";
import OpenLink from "../../components/icon-links/open-link";
import Pagination from "@/components/pagination";
import { ResolvedMaterialsBooks } from "@/types/contentful.types";
import FilterButton from "@/components/filter-button";

type BookListProps = {
  books: ResolvedMaterialsBooks;
  totalBooks: number;
  currentPage: number;
  itemsPerPage: number;
};

export default function Livros({ books, totalBooks, currentPage, itemsPerPage }: BookListProps) {

  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const totalPages = (totalBooks / itemsPerPage);
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (!books) return <p style={{ textAlign: "center" }}>Nenhum livro encontrado</p>;

  return (
    <section>
      <FilterButton defaultOrder="asc" />
      <ul className={styles.section}>
        {books.map(({ fields: { coverImage, title, subtitle, file } }) => {
          return (
            <li
              key={title}
              className={styles.books_container}
            >
              <Image
                src={`https:${coverImage.fields.file?.url}`}
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
                    {/* <DownloadLink  
                    url={file.fields.file?.url} 
                    label="Baixar o arquivo" /> 
                    */}
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
        totalItems={totalBooks}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
