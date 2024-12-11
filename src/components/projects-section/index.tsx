import styles from "./styles.module.css";
import { ProjectsCarousel } from "./projects-carousel";

export async function ProjectsSection() {
  return (
    <section
      className={styles.section}
      id="projetos"
    >
      <h2 className={`${styles.projects_section_title} section-title`}>Projetos</h2>
      <ProjectsCarousel />
    </section>
  );
}
