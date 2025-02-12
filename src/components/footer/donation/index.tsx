"use client";

import styles from "./styles.module.css";
import { copyToClipboard } from "@/utils/copy-to-clipboard";
import Image from "next/image";
import { useCallback } from "react";
import { DonationShape } from "@/types/contentful.types";

type DonationProps = {
  qrCode: string;
  pixString: string;
} & Omit<DonationShape, "chavePix" | "nome" | "cidade">;

export function Donation({
  agencia,
  banco,
  chavePixDetalhada,
  contaCorrente,
  pixString,
  qrCode,
}: DonationProps) {
  const copyTextToClipboard = useCallback(async () => {
    await copyToClipboard(pixString, "Pix");
  }, []);

  return (
    <div className={styles.donation_container}>
      <div className={styles.qr_code_wrapper}>
        <button
          className={styles.qr_code_overlay}
          onClick={copyTextToClipboard}
        >
          <Image
            className={styles.qr_code}
            src={qrCode}
            alt="qrcode - Abre"
            width={130}
            height={130}
          />
          <span className={styles.qr_code_overlay_text}>
            Clique <br /> para copiar
          </span>
        </button>
      </div>

      <div className={styles.donation_title_text}>
        <h2 className={styles.donation_title}>Faça uma doação</h2>
        <div className={styles.donation_text}>
          <p>
            Basta escanear o QR code <br /> ou clicar na chave Pix para copiar.
          </p>

          <p>
            <strong>{banco}</strong>
          </p>
          <p>
            <strong>Ag:</strong> {agencia} | <strong>CC:</strong> {contaCorrente}
          </p>
          <button
            className={styles.pix_key}
            onClick={copyTextToClipboard}
          >
            <strong>Pix:</strong> {chavePixDetalhada}
          </button>
        </div>
      </div>
    </div>
  );
}
