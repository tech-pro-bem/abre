"use client";

import "./style.css";
import { useState } from "react";
import { ProjectsIcon } from "./projects-icon";
import { ProjectCard } from "./project-card";
import { mock_projects_data, mock_projects_buttons } from "@/mock-data/projects";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export function ProjectsSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handlePreviousSlide = () => {
    if (activeProjectIndex === 0) return setActiveProjectIndex(mock_projects_data.length - 1);

    return setActiveProjectIndex((prev) => prev - 1);
  };

  const handleNextSlide = () => {
    if (activeProjectIndex === mock_projects_data.length - 1) return setActiveProjectIndex(0);

    return setActiveProjectIndex((prev) => prev + 1);
  };

  return (
    <section className="projects-section">
      <h2 className="section-title projects-section-title">Projetos</h2>
      <ul className="projects-button-list">
        {mock_projects_buttons.map((button, index) => (
          <li
            key={button.title}
            className="project-button"
            title={button.title}
            onClick={() => {
              setActiveProjectIndex(index);
            }}
          >
            <ProjectsIcon
              component={
                <button.icon
                  stroke={
                    activeProjectIndex === index
                      ? "var(--color-neutral-lightest)"
                      : "var(--color-primary-dark)"
                  }
                  size={30}
                />
              }
              isActive={activeProjectIndex === index}
              text={button.title}
            />
          </li>
        ))}
      </ul>
      <div className="projects-carousel">
        <div
          className="arrow arrow-left"
          onClick={handlePreviousSlide}
        >
          <FaChevronLeft />
        </div>
        {mock_projects_data.map((project, index) => (
          <ProjectCard
            className={activeProjectIndex === index ? "project-slide" : "slide slide-hidden"}
            key={project.title}
            title={project.title}
            icon={
              <ProjectsIcon
                component={
                  <project.icon
                    stroke={
                      activeProjectIndex === index
                        ? "var(--color-neutral-lightest)"
                        : "var(--color-primary-dark)"
                    }
                    size={36}
                  />
                }
                isActive={activeProjectIndex === index}
              />
            }
            content={project.description}
          />
        ))}
        <div
          className="arrow arrow-right"
          onClick={handleNextSlide}
        >
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
}
