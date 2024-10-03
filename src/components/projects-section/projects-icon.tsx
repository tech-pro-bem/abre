export function ProjectsIcon({
  children,
  isActive,
  text,
}: {
  children: React.ReactNode;
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
        {children}
      </div>
      {text && <span className="project-text">{text}</span>}
    </div>
  );
}
