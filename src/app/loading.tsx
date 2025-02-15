import styles from "./loading.module.css";

export default function Loading() {
  return (
    <section className={styles.container_loading}>
      <div className={styles.loading}></div>
    </section>
  );
}
