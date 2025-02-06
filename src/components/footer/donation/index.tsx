"use client";

import styles from "./styles.module.css";
import { copyToClipboard } from "@/utils/copy-to-clipboard";
import Image from "next/image";
import { DONATION } from "@/types/contentful.types";

type DonationProps = {
  qrCode: string;
  pixString: string;
} & Omit<DONATION, "chavePix" | "nome" | "cidade">;

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
      <Image
        className={styles.qr_code}
        onClick={async () => await copyToClipboard(pixString, "Pix")}
        src={qrCode}
        alt="qrcode - Abre"
        width={130}
        height={130}
      />
      <div className={styles.donation_title_text}>
        <h2 className={styles.donation_title}>Faça uma doação</h2>
        <div className={styles.donation_text}>
          <p>Basta escanear o QR code <br /> ou clicar na chave Pix para copiar.</p>
          
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
