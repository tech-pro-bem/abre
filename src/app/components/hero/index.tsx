import styles from "./hero.module.css";
import { LeftIcon } from "./icons/icon-left";
import { RightIcon } from "./icons/icon-right";

interface ContentHero {
  title: string;
  subtitle: string;
}

const contentHero: ContentHero = {
  title: "Acolhemos vidas, transformamos realidades",
  subtitle:
    "Somos a ABRE e apoiamos as pessoas com esquizofrenia e seus familiares e amigos para uma jornada de inclusão e compreensão.",
};

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <RightIcon className={styles.icons__right} />
      <LeftIcon className={styles.icons__left} />
      <h1 className={styles.hero__title}>{contentHero.title}</h1>
      <h2 className={styles.hero__subtitle}>{contentHero.subtitle}</h2>
    </section>
  );
};
