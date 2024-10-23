import styles from "./styles.module.css";

type SlideProps = {
  title: string;
  content: React.ReactElement;
  icon: React.ReactNode;
};

export function Slide({ title, content, icon }: SlideProps) {
  return (
    <li className={styles.carousel_item}>
      <article className={styles.slide}>
        <div className={styles.card_header}>
          <div className={styles.icon_circle}>{icon}</div>
          <h3 className={styles.card_header_title}>{title}</h3>
        </div>
        <div className={styles.card_content}>{content}</div>
      </article>
    </li>
  );
}
