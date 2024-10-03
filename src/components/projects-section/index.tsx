"use client";

import { useState } from "react";
import {
  ComunidadeDeFalaIcon,
  FamiliaresIcon,
  LaccaIcon,
  PessoasComEsquizofreniaIcon,
  RecoveryIcon,
} from "../icons";
import "./style.css";
import { ProjectsIcon } from "./projects-icon";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  const [isActiveProject, setIsActiveProject] = useState(true);
  return (
    <section className="projects-section">
      <h2 className="section-title projects-section-title">Projetos</h2>
      <ul className="projects-list">
        <li
          className="project-button"
          title="Pessoas com Esquizofrenia"
        >
          <ProjectsIcon
            isActive={isActiveProject}
            text="Pessoas com Esquizofrenia"
          >
            <PessoasComEsquizofreniaIcon
              stroke={
                isActiveProject ? "var(--color-neutral-lightest)" : "var(--color-primary-dark)"
              }
              size={30}
            />
          </ProjectsIcon>
        </li>
        <li
          className="project-button"
          title="Familiares"
        >
          <ProjectsIcon
            isActive={isActiveProject}
            text="Familiares"
          >
            <FamiliaresIcon
              stroke={
                isActiveProject ? "var(--color-neutral-lightest)" : "var(--color-primary-dark)"
              }
              size={30}
            />
          </ProjectsIcon>
        </li>
        <li
          className="project-button"
          title="LACCA"
        >
          <ProjectsIcon
            isActive={isActiveProject}
            text="LACCA"
          >
            <LaccaIcon
              stroke={
                isActiveProject ? "var(--color-neutral-lightest)" : "var(--color-primary-dark)"
              }
              size={30}
            />
          </ProjectsIcon>
        </li>
        <li
          className="project-button"
          title="Recovery"
        >
          <ProjectsIcon
            isActive={isActiveProject}
            text="Recovery"
          >
            <RecoveryIcon
              stroke={
                isActiveProject ? "var(--color-neutral-lightest)" : "var(--color-primary-dark)"
              }
              size={30}
            />
          </ProjectsIcon>
        </li>
        <li
          className="project-button"
          title="Comunidade de Fala"
        >
          <ProjectsIcon
            isActive={isActiveProject}
            text="Comunidade de Fala"
          >
            <ComunidadeDeFalaIcon
              stroke={
                isActiveProject ? "var(--color-neutral-lightest)" : "var(--color-primary-dark)"
              }
              size={30}
            />
          </ProjectsIcon>
        </li>
      </ul>
      <div className="projects-description">
        <ProjectCard
          title="Acolhimento para pessoas com esquizofrenia"
          icon={
            <ProjectsIcon isActive={isActiveProject}>
              <PessoasComEsquizofreniaIcon
                stroke={
                  isActiveProject ? "var(--color-neutral-lightest)" : "var(--color-primary-dark)"
                }
                size={36}
              />
            </ProjectsIcon>
          }
          content={
            <span>
              Nosso grupo de acolhimento foi criado para incluir e apoiar pessoas com esquizofrenia
              que precisam de ajuda. No grupo, dividimos esperanças e desafios em um ambiente de
              compreensão, carinho e diálogo. Queremos garantir que todas as pessoas participantes
              do grupo de acolhimento se sintam bem e à vontade, evitando qualquer situação que
              possa causar desconforto. Além disso, os encontros estão abertos e receptivos para que
              qualquer assunto seja discutido. Se você é uma pessoa com esquizofrenia e busca por
              acolhimento, entre em contato com a gente enviando uma mensagem no Facebook ou
              Instagram da ABRE.
            </span>
          }
        />
      </div>
    </section>
  );
}
