import { getContentByContentType } from "@/lib/contentful";
import { DONATION } from "@/types/contentful.types";
import { generatePixQrCode } from "@/utils/generate-pix-qrcode";
import Image from "next/image";
import { Donation } from "./donation";
import { NavBar } from "./navbar/navbar";
import { FooterSocials } from "./socials";
import styles from "./styles.module.css";

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
            loading="eager"
            width={180}
            height={45}
            alt="Logo - Abre"
          />
          <FooterSocials className={styles.icons_container_desktop} />
        </div>
        <div className={styles.footer_content}>
          <Donation
            agencia={agencia}
            banco={banco}
            chavePixDetalhada={chavePixDetalhada}
            contaCorrente={contaCorrente}
            pixString={pixData.pixString}
            qrCode={pixData.qrCode}
          />
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
