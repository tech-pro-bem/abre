import { getContentByContentType } from "@/lib/contentful";
import Arrow_icon from "./arrow_icon";
import styles from "./styles.module.css";
import Vector from "./vector";
import { FAQ } from "@/types/contentful.types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const Faq = async () => {
  const data = await getContentByContentType<FAQ>({
    contentType: "faq",
    order: "fields.order",
  });

  const questions = data?.items || [];

  return (
    <section
      id="perguntas_sobre_esquizofrenia"
      className={styles.questions_section}
    >
      <div className={styles.vectors}>
        <Vector className={styles.vector_top} />
        <Vector className={styles.vector_bottom} />
      </div>
      <div className={styles.questions_content}>
        <h2 className={styles.questions_title}>Perguntas sobre esquizofrenia</h2>
        <div className={styles.faq_list}>
          {questions.map((question, index) => (
            <details
              key={index}
              className={styles.faq_item}
              name="reqs"
            >
              <summary className={styles.faq_summary}>
                <div className={styles.faq_title}>{question.fields.question}</div>
                <Arrow_icon className={styles.arrow_icon} />
              </summary>
              <div className={styles.faq_text}>
                {documentToReactComponents(question.fields.answer)}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
