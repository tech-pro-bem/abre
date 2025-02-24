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
  const ITEMS_PER_PAGE = 8;
  const currentPage = Number(searchParams.page) || 1;
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  const data = await getContentByContentType<Gallery>({
    contentType: "gallery",
    id: params.id,
    limit: 1,
  });

  const resolvedData: ResolvedGallery = resolveResponse(data) || [];

  if (!params.id || resolvedData.length === 0) return <div>Álbum não encontrado</div>;

  const album = resolvedData[0];
  const totalPhotos = album.fields.photos?.length ?? 0;
  const photos = album.fields.photos.slice(skip, skip + ITEMS_PER_PAGE);

  return (
    <PhotosList
      albumData={{ ...album, fields: { ...album.fields, photos } }}
      currentPage={currentPage}
      itemsPerPage={ITEMS_PER_PAGE}
      totalPhotos={totalPhotos}
    />
  );
}
