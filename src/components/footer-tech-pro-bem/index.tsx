import styles from "./styles.module.css";

export function FooterTechProBem() {
  return (
    <div className={styles.footer_tech}>
      Feito com 💜 pela{" "}
      <a
        className={styles.footer_tech_link}
        href="https://techprobem.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tech Pro Bem
      </a>
    </div>
  );
}
