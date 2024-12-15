"use client";
import { DownloadIcon, OpenNewArrowIcon, ReportsGraphism } from "@/components/icons";
import styles from "./styles.module.css";
import { formatFileName } from "@/utils/format-file-name";

const MOCK_REPORTS_DATA = [
  {
    title: "Relatório de atividades 2023",
    url: "https://abre.org/materiais/",
  },
  {
    title: "Relatório de atividades 2022",
    url: "https://abre.org/materiais/",
  },
  {
    title: "Relatório de atividades 2021",
    url: "https://abre.org/materiais/",
  },
  {
    title: "Relatório de atividades 2020",
    url: "https://abre.org/materiais/",
  },
  {
    title: "Relatório de atividades 2019",
    url: "https://abre.org/materiais/",
  },
  {
    title: "Relatório de atividades 2018",
    url: "https://abre.org/materiais/",
  },
  {
    title: "Relatório de atividades 2017",
    url: "https://abre.org/materiais/",
  },
];

export default function RelatoriosPage() {
  return (
    <section className={styles.reports_section}>
      <ol className={styles.reports_list}>
        {MOCK_REPORTS_DATA.map(({ title, url }) => (
          <li key={title} className={styles.report}>
            <span>{title}</span>{" "}
            <div className={styles.buttons}>
              <a
                href={url}
                download={`${formatFileName(title)}.pdf`}
              >
                <DownloadIcon />
              </a>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpenNewArrowIcon />
              </a>
            </div>
          </li>
        ))}
      </ol>
      <div className={styles.graphism_container}>
        <ReportsGraphism className={styles.graphism} />
      </div>
    </section>
  );
}
