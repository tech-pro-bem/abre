import styles from "./loading.module.css";

export default function Loading() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Carregando, por favor aguarde...</h1>
      <div className={styles.container_loading}>
        <div className={styles.loading}></div>
      </div>
    </section>
  );
}
