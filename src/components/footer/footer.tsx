import Image from "next/image";
import styles from "./styles.module.css";
import { NavBar } from "./navbar/navbar";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../icons";
export const footer_text = {
  title_donation: "Faça uma doação",
  text_donation: `Basta escanear o QR code.
  Banco Itaú
  Ag: 0845-1. CC: 21860-1
  Pix: 05.469.302/0001-27`,
  text_lgpd: ` A ABRE valoriza sua privacidade e segue as diretrizes da Lei Geral de Proteção de
  Dados Pessoais (LGPD) para proteger suas informações. Também utilizamos cookies para
  melhorar sua navegação em nosso site.`,
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
    <section className={styles.footer}>
      <footer className={styles.footer_container}>
        <div className={styles.footer_logo_icons_desktop}>
          <Image
            className={styles.logo_abre}
            src="/logo/logo.svg"
            width={500}
            height={500}
            alt="Logo - Abre"
          />
          <ul className={styles.footer_icons_desktop}>
            <li>
              <a
                href="https://www.facebook.com/abre.esquizofrenia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon
                  className={styles.icon}
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/abreesquizofrenia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon
                  className={styles.icon}
                  width={23}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@abrebrasil2014"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon
                  className={styles.icon}
                  width={26}
                  height={26}
                />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footer_donation_content}>
          <div className={styles.footer_donation_container}>
            <div className={styles.donation_qr_code_container}>
              <Image
                className={styles.donation_qr_code}
                src="/img_qr_code.svg"
                alt="qrcode - Abre"
                fill
              />
            </div>
            <div className={styles.donation_title_text}>
              <h2 className={styles.donation_title}>{footer_text.title_donation}</h2>
              <div className={styles.donation_text}>
                {footer_text.text_donation.split("\n").map((paragraph, index) => (
                  <p
                    className={styles.donation_text}
                    key={index}
                  >
                    {stylizeWords(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.footer_content_container}>
            <NavBar className={styles.content_navbar} />
            <p className={styles.content_text}>{footer_text.text_lgpd}</p>
          </div>
        </div>
        <ul className={styles.footer_icons_mobile}>
          <li>
            <a
              href="https://www.facebook.com/abre.esquizofrenia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon
                className={styles.icon}
                width={24}
                height={24}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/abreesquizofrenia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                className={styles.icon}
                width={23}
                height={24}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@abrebrasil2014"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon
                className={styles.icon}
                width={26}
                height={26}
              />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
};
