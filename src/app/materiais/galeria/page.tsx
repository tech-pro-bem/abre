import styles from "./styles.module.css";

import { getContentByContentType } from "@/lib/contentful";
import { gallery, Resolvedgallery } from "@/types/contentful.types";
import resolveResponse from "contentful-resolve-response";
import GaleriaClient from "./client";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Galeria",
//   description: "Acompanhe nossos eventos",
// };

export default async function GaleriaPage() {
  const data = await getContentByContentType<gallery>({
    contentType: "gallery",
    order: "sys.createdAt",
  });
  console.log("console log: ", JSON.stringify(data, null, 2));
  const reports: Resolvedgallery = resolveResponse(data) || [];

  return (
    <section className={styles.album_container}>
      <GaleriaClient albums={reports} />
    </section>
  );
}
