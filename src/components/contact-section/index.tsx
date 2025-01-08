import { FiFacebook, FiInstagram } from "react-icons/fi";
import { LinkButton } from "../buttons/link-button";
import styles from "./styles.module.css";

export async function ContactSection() {
  return (
    <section
      id="contact"
      className={styles.section}
    >
      <div className={styles.content_wrapper}>
        <h2 className={`${styles.projects_section_title} section-title`}>Converse com a gente</h2>
        <p className={styles.projects_paragraph}>
          Se você busca acolhimento para você ou para outra pessoa, envie uma mensagem para gente.
          Estamos presentes no Facebook e Instagram para tirar dúvidas e aconselhar pessoas com
          esquizofrenia ou familiares e amigos.
        </p>
        <div className={styles.buttons_container}>
          <LinkButton
            href="https://www.facebook.com/abre.esquizofrenia/"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            icon={FiFacebook}
            iconPosition="left"
            className={styles.button}
          >
            Conversar via Facebook
          </LinkButton>
          <LinkButton
            href="https://www.instagram.com/abreesquizofrenia/"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            icon={FiInstagram}
            iconPosition="left"
            className={styles.button}
          >
            Conversar via Instagram
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
