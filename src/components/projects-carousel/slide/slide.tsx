export function Slide({
  title,
  content,
  icon,
}: {
  title: string;
  content: React.ReactElement;
  icon?: React.ReactNode;
}) {
  return (
    <div className="slide">
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "2rem" }}>
        <div className="icon-circle">{icon}</div>
        <h3 style={{ fontSize: "var(--heading-3)", color: "var(--color-primary-darkest)" }}>
          {title}
        </h3>
      </div>
      {content}
    </div>
  );
}
