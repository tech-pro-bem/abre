"use client";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";


interface PaginationProps<T> {
  items: T[];
  itemsPerPage: number;
  pageChange: (data: T[]) => void;
}

const Pagination = <T,>({ items, itemsPerPage, pageChange }: PaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);
    pageChange(currentItems);
  }, [currentPage, items, itemsPerPage, pageChange]);

  return (
    <div className={styles.album_pagination}>
      <span className={styles.page}>
        {currentPage} - {Math.min(currentPage * itemsPerPage, items.length)} de {items.length}
      </span>
      <div className={styles.pagination_buttons}>
        <button
          className={styles.button_arrow}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <BiChevronLeft size={25} />
        </button>
        <button
          className={styles.button_arrow}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <BiChevronRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
