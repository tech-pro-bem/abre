import "./style.css";
import { motion } from "framer-motion";
import { mock_projects_data } from "@/mock-data/projects";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Slide } from "./slide/slide";

export const ProjectsCarousel = ({
  activeProjectIndex,
  direction,
  handlePreviousSlide,
  handleNextSlide,
}: {
  activeProjectIndex: number;
  direction: "right" | "left" | null;
  handlePreviousSlide: () => void;
  handleNextSlide: () => void;
}) => {
  const slideVariants = {
    hiddenRight: {
      x: "50%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-50%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        <motion.div
          key={activeProjectIndex}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          variants={slideVariants}
          style={{ padding: "0.2rem" }}
        >
          <Slide
            title={mock_projects_data[activeProjectIndex].title}
            content={mock_projects_data[activeProjectIndex].description}
            icon={mock_projects_data[activeProjectIndex].icon}
          />
        </motion.div>
        <div className="slide_direction">
          <div
            className="left"
            onClick={handlePreviousSlide}
          >
            <FaChevronLeft size={26} />
          </div>
          <div
            className="right"
            onClick={handleNextSlide}
          >
            <FaChevronRight size={26} />
          </div>
        </div>
      </div>
    </div>
  );
};
