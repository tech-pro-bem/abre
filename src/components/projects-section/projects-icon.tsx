import type { ProjectButton } from "@/types";
import styles from "./styles.module.css";

type ProjectsIconProps = {
  component: ProjectButton;
  isActive: boolean;
  text: string;
};

export function ProjectsIcon({ component: Component, isActive, text }: ProjectsIconProps) {
  const bgClassName = isActive ? "active" : "inactive";

  return (
    <div className={styles.project_icon_container}>
      <div className={`${styles.project_icon_circle} ${styles[bgClassName]}`}>
        <Component
          size={30}
          isActive={isActive}
        />
      </div>
      <span className={styles.project_title}>{text}</span>
    </div>
  );
}
