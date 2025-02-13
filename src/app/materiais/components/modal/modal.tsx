"use client";
import { useRef, useEffect } from "react";
import styles from "./styles.module.css";
import { CloseIcon } from "@/components/icons";
import { ProjectsCarousel } from "./carousel";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  photos: Array<{ url: string; description: string }>;
  initialIndex: number;
};

export const Modal = ({ isOpen, onClose, photos, initialIndex }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    if (isOpen) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <dialog
      ref={modalRef}
      className={styles.dialog}
      onCancel={onClose}
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
