import styles from "./styles.module.css";
import { DownloadIcon, OpenNewArrowIcon } from "@/components/icons";
import { formatFileName } from "@/utils/format-file-name";
import Image from "next/image";

const mock_livros_datas = [
  {
    image: "/books/conversando_sobre_a_esquizofrenia_1.webp",
    title: "Conversando sobre a esquizofrenia 1",
    subtitle: "Entenda como ela acontece",
  },
  {
    image: "/books/conversando_sobre_a_esquizofrenia_2.webp",
    title: "Conversando sobre a esquizofrenia 2",
    subtitle: "Caminho até o diagnóstico",
  },
  {
    image: "/books/conversando_sobre_a_esquizofrenia_3.webp",
    title: "Conversando sobre a esquizofrenia 3",
    subtitle: "A importância do tratamento",
  },
  {
    image: "/books/conversando_sobre_a_esquizofrenia_4.webp",
    title: "Conversando sobre a esquizofrenia 4",
    subtitle: "Estigma - Como as pessoas se sentem?",
  },
  {
    image: "/books/conversando_sobre_a_esquizofrenia_5.webp",
    title: "Conversando sobre a esquizofrenia 5",
    subtitle: "O convívio familiar",
  },
  {
    image: "/books/conversando_sobre_a_esquizofrenia_6.webp",
    title: "Conversando sobre a esquizofrenia 6",
    subtitle: "Recuperação e novas perspectivas",
  },
  {
    image: "/books/guia_prático_sobre_psicoses.webp",
    title: "Guia prático sobre psicoses para profissionais da Atenção Básica",
    subtitle: "",
  },
];

export default function LivrosPage() {
  return (
    <section className={styles.books_section}>
      <div className={styles.books_container}>
        {mock_livros_datas.map(({ image, title, subtitle }) => (
          <div
            key={title}
            className={styles.book}
          >
            <Image
              src={image}
              alt={title}
              width={148}
              height={222}
              className={styles.book_image}
            />
            <div className={styles.book_info}>
              <h3>{title}</h3>
              <p>{subtitle}</p>
              <div className={styles.download}>
                <p>Baixar o arquivo</p>
                <a
                  href="https://abre.org/materiais/"
                  download={`${formatFileName(title)}.pdf`}
                >
                  <DownloadIcon />
                </a>
              </div>
              <div className={styles.open}>
                <p>Abrir no navegador</p>
                <a
                  href="https://abre.org/materiais/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OpenNewArrowIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
