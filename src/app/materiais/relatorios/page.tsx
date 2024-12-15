"use client";
import { DownloadIcon, OpenNewArrowIcon, ReportsGraphism } from "@/components/icons";
import styles from "./styles.module.css";
import { formatFileName } from "@/utils/format-file-name";
import { useState } from "react";

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
  const [shouldShowAllReports, setShouldShowAllReports] = useState(false);
  const reportsToShow = shouldShowAllReports ? MOCK_REPORTS_DATA : MOCK_REPORTS_DATA.slice(0, 5);

  return (
    <section className={styles.reports_section}>
      <ol className={styles.reports_list}>
        {reportsToShow.map(({ title, url }) => (
          <li
            key={title}
            className={styles.report}
          >
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
        <button
          onClick={() => setShouldShowAllReports((prev) => !prev)}
          className={styles.show_more_reports}
        >
          {shouldShowAllReports ? "Mostrar menos..." : "Carregar todos os relatórios..."}
        </button>
      </ol>
      <div className={styles.graphism_container}>
        <ReportsGraphism className={styles.graphism} />
      </div>
    </section>
  );
}
