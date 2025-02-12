"use client";
import styles from "./styles.module.css";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Image from "next/image";

type CarouselProps = {
  photos: { image: string; subtitle: string }[];
  initialIndex?: number;
};

export const ProjectsCarousel = ({ photos, initialIndex = 0 }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex]);

  const handlePreviousSlide = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const motionInitial = direction === "right" ? "hiddenRight" : "hiddenLeft";
  const slideVariants = {
    hiddenRight: { x: "100%", opacity: 0 },
    hiddenLeft: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: {
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className={styles.carousel}>
      <MotionConfig reducedMotion="user">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={motionInitial}
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className={styles.carousel_images_container}
          >
            <Image
              sizes="100vw"
              width={500}
              height={300}
              src={photos[activeIndex].image}
              alt={photos[activeIndex].subtitle}
              className={styles.carousel_image}
            />
          </motion.div>
        </AnimatePresence>
      </MotionConfig>

      <p className={styles.carousel_info}>
        <span className={styles.pagination}>
          {activeIndex + 1} de {photos.length} imagens -{" "}
        </span>
        {photos[activeIndex].subtitle}
      </p>

      <div className={styles.carousel_nav}>
        <button
          onClick={handlePreviousSlide}
          className={styles.left}
        >
          <FaChevronLeft size={26} />
        </button>
        <button
          onClick={handleNextSlide}
          className={styles.right}
        >
          <FaChevronRight size={26} />
        </button>
      </div>
    </div>
  );
};
