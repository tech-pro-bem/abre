"use client";
import styles from "./styles.module.css";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { mock_projects_buttons, mock_projects_data } from "@/mock-data/projects";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Slide } from "./slide/slide";
import { useState } from "react";
import { ProjectsIcon } from "../projects-icon";

export const ProjectsCarousel = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePreviousSlide = () => {
    setDirection("left");
    if (activeProjectIndex === 0) return setActiveProjectIndex(mock_projects_data.length - 1);

    return setActiveProjectIndex((prev) => prev - 1);
  };

  const handleNextSlide = () => {
    setDirection("right");
    if (activeProjectIndex === mock_projects_data.length - 1) {
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
    <>
      <ul className={styles.projects_list_button}>
        {mock_projects_buttons.map(({ title, icon }, index) => (
          <li
            key={title}
            title={title}
          >
            <button
              className={styles.project_button}
              onClick={() => {
                setActiveProjectIndex(index);
              }}
            >
              <ProjectsIcon
                component={icon}
                isActive={activeProjectIndex === index}
                text={title}
              />
            </button>
          </li>
        ))}
      </ul>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Carrossel de projetos da Abre"
        className={styles.carousel}
      >
        <div className={styles.carousel_projects}>
          <MotionConfig reducedMotion="user">
            <AnimatePresence mode="wait">
              <motion.ul
                key={activeProjectIndex}
                initial={motionInitial}
                animate="visible"
                exit="exit"
                variants={slideVariants}
                className={styles.carousel_projects_container}
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
    </>
  );
};
