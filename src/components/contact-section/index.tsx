import { FacebookIcon, InstagramIcon } from "../icons";
import styles from "./styles.module.css";

export async function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content_wrapper}>
        <h2 className="section-title">Converse com a gente</h2>
        <p className={styles.section_paragraph}>
          Se você busca acolhimento para você ou para outra pessoa, envie uma mensagem para gente.
          Estamos presentes no Facebook e Instagram para tirar dúvidas e aconselhar pessoas com
          esquizofrenia ou familiares e amigos.
        </p>
        <div className={styles.buttons_container}>
          <a
            href="https://www.facebook.com/abre.esquizofrenia/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.anchor}
          >
            <button className={styles.button}>
              <FacebookIcon /> Conversar via Facebook
            </button>
          </a>
          <a
            href="https://www.instagram.com/abreesquizofrenia/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.anchor}
          >
            <button className={styles.button}>
              <InstagramIcon /> Conversar via Instagram
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
