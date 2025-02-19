import { getContentByContentType } from "@/lib/contentful";
import { Gallery, ResolvedGallery } from "@/types/contentful.types";
import resolveResponse from "contentful-resolve-response";
import { AlbumList } from "./components/album-list";
import styles from "./styles.module.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria",
  description: "Acompanhe nossos eventos",
};

export default async function GaleriaPage({ searchParams }: { searchParams: {  page?: number } }) {
  const ITEMS_PER_PAGE = 8
  const currentPage = searchParams.page || 1
  const skip = (currentPage - 1) * ITEMS_PER_PAGE
  const data = await getContentByContentType<Gallery>({
    contentType: "gallery",
    order: "sys.createdAt",
    skip: skip,
  });

  const albums: ResolvedGallery = resolveResponse(data) || [];

  return (
    <section className={styles.album_container}>
      <AlbumList albums={albums} currentPage={currentPage} itemsPerPage={ITEMS_PER_PAGE}/>
    </section>
  );
}
