"use client";

import styles from "./styles.module.css";
import { useState } from "react";
import { ProjectsIcon } from "./projects-icon";
import { mock_projects_data, mock_projects_buttons } from "@/mock-data/projects";
import { ProjectsCarousel } from "../projects-carousel";

export function ProjectsSection() {
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

  return (
    <section className={styles.section}>
      <h2 className={`${styles.projects_section_title} section-title`}>Projetos</h2>
      <ul className={styles.projects_list_button}>
        {mock_projects_buttons.map((button, index) => (
          <li
            key={button.title}
            className={styles.project_button}
            title={button.title}
          >
            <button
              onClick={() => {
                setActiveProjectIndex(index);
              }}
            >
              <ProjectsIcon
                component={
                  <button.icon
                    isActive={activeProjectIndex === index}
                    size={30}
                  />
                }
                isActive={activeProjectIndex === index}
                text={button.title}
              />
            </button>
          </li>
        ))}
      </ul>
      <ProjectsCarousel
        activeProjectIndex={activeProjectIndex}
        direction={direction}
        handleNextSlide={handleNextSlide}
        handlePreviousSlide={handlePreviousSlide}
      />
    </section>
  );
}
