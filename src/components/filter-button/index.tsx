import styles from "./styles.module.css";
import Image from "next/image";
import { useCallback } from "react";

interface FilterButtonProps {
  onToggle: (value: "recent" | "old") => void;
  sortOrder: "recent" | "old";
}

export default function FilterButton({ onToggle, sortOrder }: FilterButtonProps) {

  const toggleButton = useCallback(() => {
    const newValue = sortOrder === "recent" ? "old" : "recent";
    onToggle(newValue);
  }, [onToggle, sortOrder]);

  return (
    <div className={styles.button_container}>
      {sortOrder === "recent" ? (
        <button className={styles.button} onClick={toggleButton}>
          Mais recentes
          <Image
            className={styles.seta_recentes}
            src="/recentes.svg"
            width={19}
            height={18}
            alt="seta-recentes"
          />
        </button>
      ) : (
        <button className={styles.button} onClick={toggleButton}>
          Mais antigos
          <Image
            className={styles.seta_antigos}
            src="/antigos.svg"
            width={19}
            height={18}
            alt="seta-antigos"
          />
        </button>
      )}
    </div>
  );
}
