"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function FilterButton() {
  const [activebutton, setActiveButton] = useState("recent");

  const toggleButton = () => {
    setActiveButton((prev) => (prev === "recent" ? "old" : "recent"));
  };

  return (
    <div className={styles.button_container}>
      {activebutton === "recent" ? (
        <button
          className={styles.button}
          onClick={toggleButton}
        >
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
        <button
          className={styles.button}
          onClick={toggleButton}
        >
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
