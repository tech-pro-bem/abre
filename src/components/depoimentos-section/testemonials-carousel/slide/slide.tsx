import styles from "../styles.module.css";

type SlideProps = {
  quote: string;
  content: string;
  author: string;
};

export function Slide({ quote, content, author }: SlideProps) {
  return (
    <li>
      <article className={styles.slide}>
        <div className={styles.card_header}>
          <div className={styles.card_header_quote}>{quote}</div>
        </div>
        <div className={styles.card_content}>
          {content.split("\n\n").map((paragrafo, index) => (
            <>
              <p key={index}>{paragrafo.trim()}</p>
            </>
          ))}
        </div>
        <div>
          <p className={styles.card_content_author}>{author}</p>
        </div>
      </article>
    </li>
  );
}
