import { forwardRef, PropsWithChildren } from "react";
import { IconType } from "react-icons";
import styles from "./styles.module.css";

type ButtonProps = PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> & {
  icon?: IconType;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  isLoading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      icon: Icon,
      iconPosition = "right",
      size = "md",
      variant = "primary",
      className,
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;
    const buttonClasses = [
      styles.button,
      styles[size],
      styles[variant],
      className,
      isDisabled ? styles.disabled : "",
      iconPosition === "right" ? styles.iconRight : styles.iconLeft,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={isDisabled}
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
      </button>
    );
  }
);

Button.displayName = "Button";
