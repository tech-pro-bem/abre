import FilterButton from "@/components/filter-button";
import { ResolvedMaterialsBooks, MaterialsBooks } from "@/types/contentful.types";
import resolveResponse from "contentful-resolve-response";
import { getContentByContentType } from "@/lib/contentful";
import Livros from "./books-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livros",
  description: "Consulte as nossas publicações",
};

export default async function LivrosPage({ searchParams }: { searchParams: { page?: number } }) {
  const ITEMS_PER_PAGE = 9;
  const currentPage = searchParams.page || 1;
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  const data = await getContentByContentType<MaterialsBooks>({
    contentType: "books",
    order: "sys.createdAt",
    limit: ITEMS_PER_PAGE,
    skip: skip,
  });
  const books: ResolvedMaterialsBooks = resolveResponse(data) || [];

  return (
    <>
      <FilterButton />
      <Livros
        books={books}
        currentPage={currentPage}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </>
  );
}
