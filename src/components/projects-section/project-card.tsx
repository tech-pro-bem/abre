export function ProjectCard({
  title,
  content,
  icon,
}: {
  title: string;
  content: React.ReactElement;
  icon: React.ReactElement;
}) {
  return (
    <div
      style={{
        padding: "44px 18px 55px 30px",
        border: "1px solid var(--color-secondary-light)",
        borderRadius: "1rem",
      }}
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
