import Image from "next/image";
import styles from "./styles.module.css";
import { NavBar } from "./navbar/navbar";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../icons";
import { FooterSocials } from "./socials";
export const footer_text = {
  title_donation: "Faça uma doação",
  text_donation: `Basta escanear o QR code.
  Banco Itaú
  Ag: 0845-1. CC: 21860-1
  Pix: 05.469.302/0001-27`,
  text_lgpd:
    "A ABRE valoriza sua privacidade e segue as diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD) para proteger suas informações. Também utilizamos cookies para melhorar sua navegação em nosso site.",
};
const wordsInBold = [" Banco Itaú", "Ag:", "CC:", "Pix:"];
const stylizeWords = (text: string) => {
  const regex = new RegExp(`(${wordsInBold.join("|")})`, "gi");
  return text.split(regex).map((words, index) =>
    wordsInBold.includes(words) ? (
      <span
        key={index}
        className={styles.donation_text_strong}
      >
        {words}
      </span>
    ) : (
      words
    )
  );
};
export const Footer = () => {
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
              src="/img_qr_code.svg"
              alt="qrcode - Abre"
              width={123}
              height={123}
            />
            <div className={styles.donation_title_text}>
              <h2 className={styles.donation_title}>{footer_text.title_donation}</h2>
              <div className={styles.donation_text}>
                {footer_text.text_donation.split("\n").map((paragraph, index) => (
                  <p
                    className={styles.donation_paragraph}
                    key={index}
                  >
                    {stylizeWords(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <NavBar />
          <div className={styles.lgpd_icons_container}>
            <p className={styles.content_text}>{footer_text.text_lgpd}</p>
            <FooterSocials className={styles.icons_container_mobile} />
          </div>
        </div>
      </div>
    </footer>
  );
};
