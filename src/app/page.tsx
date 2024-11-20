import { ProjectsSection } from "@/components/projects-section";
import { Hero } from "@/components/hero";
import { ContactSection } from "@/components/contact-section";
import { AcolhimentoSection } from "@/components/acolhimento-section";
import { Faq } from "@/components/faq/faq";
import { About } from "../components/about/about";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.gradient_background}>
        <Hero />
        <About />
      </div>
      <ProjectsSection />
      <ContactSection />
      <Faq />
      <AcolhimentoSection />
    </>
  );
}
