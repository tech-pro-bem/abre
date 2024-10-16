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
      aria-label="Carousel"
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
                title={mock_projects_data[activeProjectIndex].title}
                content={mock_projects_data[activeProjectIndex].description}
                icon={mock_projects_data[activeProjectIndex].icon}
              />
            </motion.ul>
          </AnimatePresence>
        </MotionConfig>
        <nav className={styles.carousel_nav}>
          <button
            className={styles.left}
            onClick={handlePreviousSlide}
          >
            <FaChevronLeft size={26} />
          </button>
          <button
            className={styles.right}
            onClick={handleNextSlide}
          >
            <FaChevronRight size={26} />
          </button>
        </nav>
      </div>
    </div>
  );
};
