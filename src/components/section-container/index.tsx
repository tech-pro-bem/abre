import { ReactNode } from "react";
import styles from "./styles.module.css";

interface AlignmentContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

export function AlignmentContainer({ children, size = "md" }: AlignmentContainerProps) {
  const sizeClass = size ? size : "md";
  return <div className={`${styles.alignment_container} ${styles[sizeClass]}`}>{children}</div>;
}
