"use client";
import { useRef, useEffect } from "react";
import styles from "./styles.module.css";
import { CloseIcon } from "@/components/icons";
import { ProjectsCarousel } from "./carousel";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  photos: Array<{ image: string; subtitle: string }>;
  initialIndex: number;
};

export const Modal = ({ isOpen, onClose, photos, initialIndex }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <dialog
      ref={modalRef}
      className={styles.dialog}
      open
    >
      <div className={styles.dialog_content}>
        <div className={styles.button_container}>
          <button
            onClick={onClose}
            className={styles.close_button}
          >
            <CloseIcon className={styles.close} />
          </button>
        </div>
        <ProjectsCarousel
          photos={photos}
          initialIndex={initialIndex}
        />
      </div>
    </dialog>
  );
};
