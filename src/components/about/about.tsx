import { getContentByContentType } from "@/lib/contentful";
import styles from "./styles.module.css";
import { ConhecaAbre } from "@/types/contentful.types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const About = async () => {
  const data = await getContentByContentType<ConhecaAbre>({
    contentType: "conhecaAbre",
    order: "sys.createdAt",
    limit: 1,
  });
  const about = data?.items || [];

  return (
    <section
      id="conheca_a_abre"
      className={styles.container}
    >
      {about.map((about, index) => (
        <div
          key={index}
          className={styles.about_content}
        >
          <div className={styles.about_buttons}>
            <button className={styles.about_button_know}>Conheça a ABRE</button>
          </div>
          <div className={styles.about_title_text_video}>
            <div className={styles.about_title_text}>
              <h2 className={styles.about_title}>{about.fields.title}</h2>

              <div className={styles.about_text}>
                {documentToReactComponents(about.fields.text)}
              </div>
            </div>
            <iframe
              className={styles.about_video}
              src="https://www.youtube.com/embed/Nn9Z-LsPK70"
              title="Escutem a Nossa Voz"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      ))}
    </section>
  );
};
