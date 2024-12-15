import styles from "./styles.module.css";
import Image from "next/image";
import mandala from "/public/mandala.webp";
import { LinkButton } from "../buttons/link-button";

interface Material {
  title: string;
  text: string;
}
const material: Material = {
  title: "Nossos materiais",
  text: `Temos diversos documentos para informar sobre a esquizofrenia e vencer o estima.
  Confira uma página com relatórios de atividades da ONG, livros, livretos, manuais e guias para você saber mais sobre o diagnóstico.`,
};

export const Materials = () => {
  return (
    <section className={styles.content}>
      <div className={styles.title_text}>
        <h2 className={styles.title}>{material.title}</h2>
        <div className={styles.text}>
          {material.text.split("\n").map((paragraph, index) => (
            <p
              className={styles.paragraph}
              key={index}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <LinkButton
          href="/materiais"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="xl"
          className={styles.button}
        >
          Acessar materiais
        </LinkButton>
      </div>
      <div className={styles.container_image_mandala}>
        <Image
          className={styles.image_mandala}
          src={mandala}
          alt="Foto mandala"
          fill
        />
      </div>
    </section>
  );
};
