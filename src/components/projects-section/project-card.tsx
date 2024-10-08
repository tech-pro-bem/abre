import { CSSProperties } from "react";

export function ProjectCard({
  title,
  content,
  icon,
  style,
  className,
}: {
  title: string;
  content: React.ReactElement;
  icon: React.ReactElement;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      style={{ ...style }}
      className={className ? `project-card ${className}` : "project-card"}
    >
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "2rem" }}>
        {icon}
        <h3 style={{ fontSize: "var(--heading-3)", color: "var(--color-primary-darkest)" }}>
          {title}
        </h3>
      </div>
      {content}
    </div>
  );
}
