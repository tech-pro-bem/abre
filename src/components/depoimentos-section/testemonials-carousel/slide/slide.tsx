import styles from "../styles.module.css";

type SlideProps = {
  quote: React.ReactNode;
  content: React.ReactNode;
  author: React.ReactNode;
};

export function Slide({ quote, content, author }: SlideProps) {
  return (
    <li>
      <article className={styles.slide}>
        <div className={styles.card_header}>
          <div className={styles.card_header_quote}>{quote}</div>
        </div>
        <div className={styles.card_content}>
          {content}
          <div className={styles.card_content_author}>{author}</div>
        </div>
      </article>
    </li>
  );
}
