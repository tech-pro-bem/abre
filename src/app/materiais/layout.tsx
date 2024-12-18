import type { Metadata } from "next";
import { Breadcrumbs } from "./components/breadcrumbs";
import { MateriaisTabs } from "./components/materiais-tabs.tsx";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Materiais | Abre",
  description:
    "Apoiamos pessoas com esquizofrenia, seus familiares e amigos para uma jornada de inclusão e compreensão.",
};

export default function MateriaisLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={styles.section}>
      <div className={styles.content_bg}>
        <Breadcrumbs />
        <div className={styles.hero_container}>
          <h2 className={styles.hero_title}>Materiais</h2>
          <p className={styles.hero_subtitle}>
            Confira materiais que abordam o tema <strong>esquizofrenia</strong> e documentos sobre a
            atuação da ABRE
          </p>
        </div>
        <MateriaisTabs />
        {children}
      </div>
    </section>
  );
}
