export function ProjectsIcon({
  component: Component,
  isActive,
  text,
}: {
  component?: React.ReactNode;
  isActive: boolean;
  text?: string;
}) {
  return (
    <div className="project-icon-container">
      <div
        className="project-icon-circle"
        style={{
          backgroundColor: isActive ? "var(--color-primary-dark)" : "var(--color-primary-lightest)",
        }}
      >
        {Component ? Component : null}
      </div>
      {text && <span className="project-title">{text}</span>}
    </div>
  );
}
