import { getContentByContentType } from "@/lib/contentful";
import { Gallery, ResolvedGallery } from "@/types/contentful.types";
import resolveResponse from "contentful-resolve-response";
import { AlbumView } from "../../components/album-view";

export default async function PhotoAlbumPage({ params }: { params: { slug: string; id: string } }) {
  const data = await getContentByContentType<Gallery>({
    contentType: "gallery",
    order: "sys.createdAt",
    id: params.id,
  });
  const resolvedData: ResolvedGallery = resolveResponse(data) || [];

  if (!params.id) return <div>Album não encontrado</div>;

  return <AlbumView albumData={resolvedData[0]} />;
}
