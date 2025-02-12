import { getContentByContentType } from "@/lib/contentful";
import { DonationShape, LgpdText } from "@/types/contentful.types";
import { generatePixQrCode } from "@/utils/generate-pix-qrcode";
import Image from "next/image";
import { Donation } from "./donation";
import { NavBar } from "./navbar/navbar";
import { FooterSocials } from "./socials";
import styles from "./styles.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
  const data = await getContentByContentType<DonationShape>({
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

  const dataLgpd = await getContentByContentType<LgpdText>({
    contentType: "textoLgpd",
    limit: 1,
    order: "sys.createdAt",
  });
  const lgpdText = dataLgpd.items[0].fields;
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
            <div className={styles.content_text}>{documentToReactComponents(lgpdText.text)}</div>

            <FooterSocials className={styles.icons_container_mobile} />
          </div>
        </div>
      </div>
    </footer>
  );
}
