import Image from "next/image";
import styles from "./styles.module.css";
import { NavBar } from "./navbar/navbar";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../icons";

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
              <h2 className={styles.donation_title}>Faça uma doação</h2>
              <div className={styles.donation_text}>
                <p>Basta escanear o QR code.</p>
                <strong className={styles.donation_text_strong}> Banco Itaú</strong>
                <p>
                  <strong className={styles.donation_text_strong}>Ag:</strong> 0845-1.
                  <strong className={styles.donation_text_strong}> CC:</strong> 21860-1
                </p>
                <p>
                  <strong className={styles.donation_text_strong}>Pix:</strong> 05.469.302/0001-27
                </p>
              </div>
            </div>
          </div>
          <div className={styles.footer_content_container}>
            <NavBar className={styles.content_navbar} />
            <p className={styles.content_text}>
              A ABRE valoriza sua privacidade e segue as diretrizes da Lei Geral de Proteção de
              Dados Pessoais (LGPD) para proteger suas informações. Também utilizamos cookies para
              melhorar sua navegação em nosso site.
            </p>
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
