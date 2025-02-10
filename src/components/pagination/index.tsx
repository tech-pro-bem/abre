"use client";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={styles.album_pagination}>
      <span className={styles.page}>
        {currentPage} - {Math.min(currentPage * itemsPerPage, totalItems)} de {totalItems}
      </span>
      <div className={styles.pagination_buttons}>
        <button
          className={styles.button_arrow}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <BiChevronLeft size={25} />
        </button>
        <button
          className={styles.button_arrow}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <BiChevronRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
