import { LinkButton } from "../components/buttons/link-button";
import styles from "./not-found.module.css";
import { NotFoundIcon } from "../components/icons/not-found";

export default function NotFound() {
  return (
    <section className={styles.section}>
      <article className={styles.content_wrapper}>
        <NotFoundIcon className={styles.not_found__icon} />
        <div className={styles.not_found__content}>
          <h1 className={styles.not_found__title}>Encontramos um problema</h1>
          <p className={styles.not_found__subtitle}>
            Você pode voltar à página inicial enquanto resolvemos o problema.
          </p>
          <div>
            <LinkButton
              href="/"
              variant="primary"
              className={styles.not_found__button}
            >
              Voltar
            </LinkButton>
          </div>
        </div>
      </article>
    </section>
  );
}
