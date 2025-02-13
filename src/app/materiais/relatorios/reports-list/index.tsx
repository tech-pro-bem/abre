"use client";
import {
  // DownloadIcon,
  OpenNewArrowIcon,
} from "@/components/icons";
import { ResolvedMaterialsReports } from "@/types/contentful.types";
// import { formatFileName } from "@/utils/format-file-name";
import { useState } from "react";
import styles from "./styles.module.css";

type ReportsListProps = {
  reports: ResolvedMaterialsReports;
};

export function ReportsList({ reports }: ReportsListProps) {
  const [shouldShowAllReports, setShouldShowAllReports] = useState(false);
  const reportsToShow = shouldShowAllReports ? reports : reports.slice(0, 5);

  if (reports.length === 0) {
    return (
      <ol className={styles.reports_list}>
        <p className={styles.empty_reports}>Nenhum Relatório Cadastrado</p>
      </ol>
    );
  }

  return (
    <ol className={styles.reports_list}>
      {reportsToShow.map(({ fields: { title, file } }) => (
        <li
          key={title}
          className={styles.report}
        >
          <span>{title}</span>{" "}
          <div className={styles.buttons}>
            {/* TODO: find way to actually download file. Currently opens in new tab */}
            {/* <a
              href={`https:${file.fields.file?.url}`}
              download={`${formatFileName(title)}.pdf`}
            >
              <DownloadIcon />
            </a> */}
            <a
              href={`https:${file.fields.file?.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenNewArrowIcon />
            </a>
          </div>
        </li>
      ))}
      {reports.length > 5 && (
        <button
          onClick={() => setShouldShowAllReports((prev) => !prev)}
          className={styles.show_more_reports}
        >
          {shouldShowAllReports ? "Mostrar menos..." : "Carregar todos os relatórios..."}
        </button>
      )}
    </ol>
  );
}
