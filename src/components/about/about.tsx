import { getContentByContentType } from "@/lib/contentful";
import styles from "./styles.module.css";
import { About } from "@/types/contentful.types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const AboutAbre = async () => {
  const data = await getContentByContentType<About>({
    contentType: "about",
    order: "sys.createdAt",
    // TODO:no momento esta limitado com 100 para depois revisarmos, pois sem o limit não esta funcionando.
    limit: 100,
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
