import styles from "./styles.module.css";
import { Button } from "@/components/button/button";
import { mock_acolhimento_data } from "@/mock-data/acolhimento";
import { FiArrowUpRight } from "react-icons/fi";

type OptionContentProps = {
  option: (typeof mock_acolhimento_data)[0];
};

export function OptionContent({ option }: OptionContentProps) {
  return (
    <>
      <h3 className={styles.options_content_title}>{option.title}</h3>
      <p className={styles.options_content_subtitle}>{option.description}</p>
      <a
        href={option.button_href}
        className={styles.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button
          variant="secondary"
          size="lg"
          icon={FiArrowUpRight}
          className={styles.button}
        >
          {option.button_text}
        </Button>
      </a>
    </>
  );
}
