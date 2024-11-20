import { LinkButton } from "@/components/buttons/link-button";
import styles from "./styles.module.css";
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

      <LinkButton
        href={option.button_href}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        size="lg"
        icon={FiArrowUpRight}
        iconPosition="right"
        className={styles.button}
      >
        {option.button_text}
      </LinkButton>
    </>
  );
}
