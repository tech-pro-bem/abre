import type { Testimonials } from "@/types/contentful.types";
import styles from "./styles.module.css";
import { ProjectsCarousel } from "./testemonials-carousel";
import { getContentByContentType } from "@/lib/contentful";

export async function Testimonials() {
  const data = await getContentByContentType<Testimonials>({
    contentType: "testimonials",
    order: "sys.createdAt",
  });

  const testimonials = data.items.map(item => item.fields) || [];

  return (
    <section className={styles.section_testemonials}>
      <h2 className={`${styles.testimonials__title} section-title`}>Depoimentos</h2>
      <ProjectsCarousel testimonials={testimonials} />
    </section>
  );
}
