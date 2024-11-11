"use client";
import styles from "./styles.module.css";
import { mock_acolhimento_data } from "@/mock-data/acolhimento";
import { OptionContent } from "../option-content/option-content";
import { useState } from "react";

export function Options() {
  const [activeOption, setActiveOption] = useState(0);
  return (
    <>
      <ul className={styles.options_list}>
        {mock_acolhimento_data.map(({ title }, index) => (
          <li key={title}>
            <button
              className={styles.option}
              onClick={() => setActiveOption(index)}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.options_content}>
        <OptionContent option={mock_acolhimento_data[activeOption]} />
      </div>
    </>
  );
}
