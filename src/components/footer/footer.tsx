import Image from "next/image";
import styles from "./styles.module.css";
import { NavBar } from "./navbar/navbar";
import { FooterSocials } from "./socials";
import { getContentByContentType } from "@/lib/contentful";
import { DONATION } from "@/types/contentful.types";
import { generatePixQrCode } from "@/utils/generate-pix-qrcode";

const fallbackPixData = {
  chavePixDetalhada: "05.469.302/0001-27",
  chavePix: "05469302000127",
  nome: "Abre",
  cidade: "SAO PAULO",
  banco: "Banco Itaú",
  agencia: "0845-1",
  contaCorrente: "21860-1",
};

export async function Footer() {
  const data = await getContentByContentType<DONATION>({
    contentType: "donationPix",
    limit: 1,
  });

  const { chavePixDetalhada, chavePix, nome, banco, agencia, contaCorrente, cidade } =
    data?.items[0].fields || fallbackPixData;

  const pixData = await generatePixQrCode({
    key: chavePix,
    city: cidade,
    name: nome,
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.logo_icons_container}>
          <Image
            className={styles.logo_abre}
            src="/logo/logo.svg"
            width={180}
            height={45}
            alt="Logo - Abre"
          />
          <FooterSocials className={styles.icons_container_desktop} />
        </div>
        <div className={styles.footer_content}>
          <div className={styles.donation_container}>
            <Image
              className={styles.donation_qr_code}
              src={pixData.qrCode}
              alt="qrcode - Abre"
              width={123}
              height={123}
            />
            <div className={styles.donation_title_text}>
              <h2 className={styles.donation_title}>Faça uma doação</h2>
              <div className={styles.donation_text}>
                <p className={styles.donation_paragraph}>Basta escanear o QR code.</p>
                <p className={styles.donation_paragraph}>
                  <strong>{banco}</strong>
                </p>
                <p className={styles.donation_paragraph}>
                  <strong>Ag:</strong> {agencia} | <strong>CC:</strong> {contaCorrente}
                </p>
                <p className={styles.donation_paragraph}>
                  <strong>Pix:</strong> {chavePixDetalhada}
                </p>
              </div>
            </div>
          </div>
          <NavBar />
          <div className={styles.lgpd_icons_container}>
            <p className={styles.content_text}>
              A ABRE valoriza sua privacidade e segue as{" "}
              <a
                href="/"
                className={styles.underline_text}
              >
                diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD)
              </a>{" "}
              para proteger suas informações. Também utilizamos cookies para melhorar sua navegação
              em nosso site.
            </p>
            <FooterSocials className={styles.icons_container_mobile} />
          </div>
        </div>
      </div>
    </footer>
  );
}
