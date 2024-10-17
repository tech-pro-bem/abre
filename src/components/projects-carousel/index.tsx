import styles from "./styles.module.css";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { mock_projects_data } from "@/mock-data/projects";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Slide } from "./slide/slide";

type ProjectsCarouselProps = {
  activeProjectIndex: number;
  direction: "right" | "left" | null;
  handlePreviousSlide: () => void;
  handleNextSlide: () => void;
};

export const ProjectsCarousel = ({
  activeProjectIndex,
  direction,
  handlePreviousSlide,
  handleNextSlide,
}: ProjectsCarouselProps) => {
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
        duration: 0.5,
      },
    },
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Carrossel de projetos da Abre"
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
                  mock_projects_data.length
                } de projeto da abre`}
                title={mock_projects_data[activeProjectIndex].title}
                content={mock_projects_data[activeProjectIndex].description}
                icon={mock_projects_data[activeProjectIndex].icon}
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
      </div>
    </div>
  );
};
