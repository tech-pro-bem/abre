import type { ResolvedTestimonials, Testimonials } from "@/types/contentful.types";
import styles from "./styles.module.css";
import { ProjectsCarousel } from "./testemonials-carousel";
import { getContentByContentType } from "@/lib/contentful";
import resolveResponse from "contentful-resolve-response";

export async function Testimonials() {
  const data = await getContentByContentType<Testimonials>({
    contentType: "testimonials",
    order: "sys.createdAt",
  });

  const testimonials: ResolvedTestimonials = resolveResponse(data) || [];

  return (
    <section className={styles.section_testemonials}>
      <h2 className={`${styles.testimonials__title} section-title`}>Depoimentos</h2>
      <ProjectsCarousel testimonials={testimonials} />
    </section>
  );
}
