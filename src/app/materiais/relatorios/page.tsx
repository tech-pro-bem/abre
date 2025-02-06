import { ReportsGraphism } from "@/components/icons";
import { getContentByContentType } from "@/lib/contentful";
import { MaterialsReports, ResolvedMaterialsReports } from "@/types/contentful.types";
import resolveResponse from "contentful-resolve-response";
import { ReportsList } from "./reports-list";
import styles from "./styles.module.css";

export default async function RelatoriosPage() {
  const data = await getContentByContentType<MaterialsReports>({
    contentType: "materiaisRelatoriosDeAtividades",
    order: "sys.createdAt",
  });
  const reports: ResolvedMaterialsReports = resolveResponse(data) || [];

  return (
    <section className={styles.reports_section}>
      <ReportsList reports={reports} />
      <div className={styles.graphism_container}>
        <ReportsGraphism className={styles.graphism} />
      </div>
    </section>
  );
}
