"use client";

import styles from "./styles.module.css";
import { copyToClipboard } from "@/utils/copy-to-clipboard";
import Image from "next/image";
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
  return (
    <div className={styles.donation_container}>
      <div
        onClick={async () => await copyToClipboard(pixString, "Pix")}
        className={styles.qr_code_wrapper}
      >
        <Image
          className={styles.qr_code}
          src={qrCode}
          alt="qrcode - Abre"
          width={130}
          height={130}
        />
        <span className={styles.qr_code_overlay}>
          Clique <br /> para copiar
        </span>
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
          <p
            className={styles.pix_key}
            onClick={async () => await copyToClipboard(pixString, "Pix")}
          >
            <strong>Pix:</strong> {chavePixDetalhada}
          </p>
        </div>
      </div>
    </div>
  );
}
