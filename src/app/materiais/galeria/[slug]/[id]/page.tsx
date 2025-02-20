import { getContentByContentType } from "@/lib/contentful";
import { Gallery, ResolvedGallery } from "@/types/contentful.types";
import resolveResponse from "contentful-resolve-response";
import { PhotosList } from "../../components/photos-list";

type PhotoAlbumPageParams = {
  params: {
    slug: string;
    id: string;
  };
  searchParams: {
    page?: number;
  };
};

export default async function PhotoAlbumPage({ params, searchParams }: PhotoAlbumPageParams) {
  const ITEMS_PER_PAGE = 3;
  const currentPage = searchParams.page || 1;
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  const data = await getContentByContentType<Gallery>({
    contentType: "gallery",
    order: "sys.createdAt",
    limit: ITEMS_PER_PAGE,
    id: params.id,
    skip: skip,
  });
  const resolvedData: ResolvedGallery = resolveResponse(data) || [];

  if (!params.id) return <div>Album não encontrado</div>;

  return (
    <PhotosList
      albumData={resolvedData[0]}
      currentPage={currentPage}
      itemsPerPage={ITEMS_PER_PAGE}
    />
  );
}
