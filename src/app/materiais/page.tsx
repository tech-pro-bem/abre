import { ChevronRightIcon, HouseIcon } from "@/components/icons";
import styles from "./styles.module.css";
export default function MateriaisPage() {
  return (
    <section className={styles.section}>
      <div className={styles.content_bg}>
        <div className={styles.breadcrumbs}>
          <HouseIcon /> Página inicial <ChevronRightIcon className={styles.chevron} /> Materiais
        </div>
        <div className={styles.hero_container}>
          <h2 className={styles.hero_title}>Materiais</h2>
          <p className={styles.hero_subtitle}>
            Confira materiais que abordam o tema{" "}
            <span style={{ fontWeight: "700" }}>esquizofrenia</span> e documentos sobre a atuação da
            ABRE
          </p>
        </div>

        <ul className={styles.tabs_container}>
          <li>Livros</li>
          <li>Relatórios</li>
          <li>Galeria</li>
        </ul>
      </div>
    </section>
  );
}
