import { getContentByContentType } from "@/lib/contentful";
import Livros from "./books-list";
import { Metadata } from "next";
import { MaterialsBooks, ResolvedMaterialsBooks } from "@/types/contentful.types";
import resolveResponse from "contentful-resolve-response";


export const metadata: Metadata = {
  title: "Livros",
  description: "Consulte as nossas publicações",
};

export default async function LivrosPage({ searchParams }: { searchParams: { page?: number } }) {
  const ITEMS_PER_PAGE = 9;
  const currentPage = Number(searchParams.page) || 1;
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  const data = await getContentByContentType<MaterialsBooks>({
    contentType: "books",
    order: "sys.createdAt",
    limit: ITEMS_PER_PAGE,
    skip: skip,
  });
  const books: ResolvedMaterialsBooks = resolveResponse(data) || [];

  return (
      <Livros
        books={books}
        totalBooks={data.total}
        currentPage={currentPage}
        itemsPerPage={ITEMS_PER_PAGE}
      />
  );
}
