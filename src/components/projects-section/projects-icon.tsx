export function ProjectsIcon({
  children,
  component: Component,
  isActive,
  text,
}: {
  children?: React.ReactNode;
  component?: React.ReactNode;
  isActive: boolean;
  text?: string;
}) {
  return (
    <div className="project-icon">
      <div
        className="project-circle"
        style={{
          backgroundColor: isActive ? "var(--color-primary-dark)" : "var(--color-primary-lightest)",
        }}
      >
        {children ? children : null}
        {Component ? Component : null}
      </div>
      {text && <span className="project-text">{text}</span>}
    </div>
  );
}
