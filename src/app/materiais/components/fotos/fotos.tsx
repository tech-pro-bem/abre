"use client";
import { useState } from "react";
import Image from "next/image";
import { Modal } from "../modal/modal";
import { mock_fotos_data } from "@/mock-data/fotos";

const FotosComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCarouselIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCarouselIndex(null);
    setModalOpen(false);
  };

  return (
    <section>
      <div>
        {mock_fotos_data.map((foto, index) => (
          <button
            key={index}
            onClick={() => openModal(index)}
          >
            <Image
              width={280}
              height={220}
              src={foto.image}
              alt={foto.subtitle}
            />
          </button>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        photos={mock_fotos_data}
        initialIndex={carouselIndex ?? 0}
      />
    </section>
  );
};

export default FotosComponent;
