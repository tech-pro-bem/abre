import { forwardRef, PropsWithChildren } from "react";
import { IconType } from "react-icons";
import styles from "./styles.module.css";

type LinkButtonProps = PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>> & {
  icon?: IconType;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  isLoading?: boolean;
};

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      children,
      icon: Icon,
      iconPosition = "right",
      size = "md",
      variant = "primary",
      className,
      isLoading = false,
      href,
      ...props
    },
    ref
  ) => {
    const linkButtonClasses = [
      styles.button,
      styles[size],
      styles[variant],
      className,
      isLoading ? styles.disabled : "",
      iconPosition === "right" ? styles.iconRight : styles.iconLeft,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <a
        href={href}
        ref={ref}
        className={linkButtonClasses}
        {...props}
      >
        {isLoading && (
          <svg
            className={styles.spinner}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className={styles.spinnerCircle}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className={styles.spinnerPath}
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
        {Icon && !isLoading && <Icon className={styles.icon} />}
      </a>
    );
  }
);

LinkButton.displayName = "LinkButton";
