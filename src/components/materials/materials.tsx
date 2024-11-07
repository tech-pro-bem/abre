"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import mandala from "@/mandala.webp";

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
        <h1 className={styles.title}>{material.title}</h1>
        <div className={styles.text}>
          {material.text.split("\n").map((paragraph, index) => (
            <p
              className={styles.paragraph}
              key={index}
            >
              {" "}
              {paragraph}
            </p>
          ))}
        </div>
        <button className={styles.button_materials}>Acessar materiais</button>
      </div>
      <div className={styles.container_image}>
        <Image
          className={styles.image_mandala}
          src={mandala}
          alt="Foto mandala"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </section>
  );
};
