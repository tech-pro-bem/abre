import styles from "./styles.module.css";
import { Options } from "./options";

export function AcolhimentoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={`section-title ${styles.title}`}>Outras formas de acolhimento</h2>
        <p className={styles.subtitle}>
          Familiares e amigos podem conferir páginas de instituições que discutem sobre
          esquizofrenia. Se uma pessoa com esquizofrenia precisa de apoio psicossocial, acesse a
          lista de CAPS para encontrar o mais próximo da residência dessa pessoa.
        </p>
        <Options />
      </div>
    </section>
  );
}
