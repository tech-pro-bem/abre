import styles from "./styles.module.css";
import { ProjectsCarousel } from "./testemonials-carousel";

export function Testimonials() {
  return (
    <section className={styles.section_testemonials}>
      <h2 className={`${styles.testimonials__title} section-title`}>Depoimentos</h2>
      <ProjectsCarousel />
    </section>
  );
}
