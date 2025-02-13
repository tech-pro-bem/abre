"use client";
import styles from "./styles.module.css";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Slide } from "./slide/slide";
import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Testimonials } from "@/types/contentful.types";

interface ProjectsCarouselProps {
  testimonials: Testimonials[];
}

export const ProjectsCarousel = ({ testimonials }: ProjectsCarouselProps) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePreviousSlide = () => {
    setDirection("left");
    if (activeProjectIndex === 0) return setActiveProjectIndex(testimonials.length - 1);
    return setActiveProjectIndex((prev) => prev - 1);
  };

  const handleNextSlide = () => {
    setDirection("right");
    if (activeProjectIndex === testimonials.length - 1) {
      return setActiveProjectIndex(0);
    }
    return setActiveProjectIndex((prev) => prev + 1);
  };

  const motionInitial = direction === "right" ? "hiddenRight" : "hiddenLeft";
  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      x: direction === "right" ? "-100%" : "100%",
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Carrossel de depoimentos da Abre"
      className={styles.carousel}
    >
      <div className={styles.carousel_images}>
        <MotionConfig reducedMotion="user">
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeProjectIndex}
              initial={motionInitial}
              animate="visible"
              exit="exit"
              variants={slideVariants}
              className={styles.carousel_images_container}
            >
              <Slide
                aria-roledescription={`Slide ${activeProjectIndex + 1} de ${
                  testimonials.length
                } de depoimentos da abre`}
                quote={documentToReactComponents(testimonials[activeProjectIndex].quote)}
                content={documentToReactComponents(testimonials[activeProjectIndex].content)}
                author={documentToReactComponents(testimonials[activeProjectIndex].author)}
              />
            </motion.ul>
          </AnimatePresence>
        </MotionConfig>
      </div>
      <div
        aria-label="Controles do Carrossel"
        className={styles.carousel_nav}
      >
        <button
          aria-label="Slide anterior"
          className={styles.left}
          onClick={handlePreviousSlide}
        >
          <FaChevronLeft
            aria-hidden="true"
            size={26}
          />
        </button>
        <button
          aria-label="Próximo slide"
          className={styles.right}
          onClick={handleNextSlide}
        >
          <FaChevronRight
            aria-hidden="true"
            size={26}
          />
        </button>
        <div className={styles.pagination}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeProjectIndex ? styles.activeDot : ""}`}
              onClick={() => setActiveProjectIndex(index)}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
