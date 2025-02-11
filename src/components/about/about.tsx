import { getContentByContentType } from "@/lib/contentful";
import styles from "./styles.module.css";
import { about } from "@/types/contentful.types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const About = async () => {
  const data = await getContentByContentType<about>({
    contentType: "about",
    order: "sys.createdAt",
    limit: 3,
  });
  const about = data.items[0].fields;
  return (
    <section
      id="conheca_a_abre"
      className={styles.container}
    >
      <div className={styles.about_content}>
        <div className={styles.about_buttons}>
          <button className={styles.about_button_know}>Conheça a ABRE</button>
        </div>
        <div className={styles.about_title_text_video}>
          <div className={styles.about_title_text}>
            <h2 className={styles.about_title}>{about.title}</h2>

            <div className={styles.about_text}>{documentToReactComponents(about.text)}</div>
          </div>
          <iframe
            className={styles.about_video}
            src={`${about.urlVideo}`}
            title="Escutem a Nossa Voz"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};
