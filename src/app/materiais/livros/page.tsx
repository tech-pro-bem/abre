import { getContentByContentType } from "@/lib/contentful";
import { MaterialsBooks, ResolvedMaterialsBooks } from "@/types/contentful.types";
import resolveResponse from "contentful-resolve-response";
import { Metadata } from "next";
import LivrosPage from "./books-list";

export const metadata: Metadata = {
  title: "Livros",
  description: "Consulte as nossas publicações",
};

export default async function Livros({ searchParams }: { searchParams: { order?: string } }) {
  // ascendente -> mais antiga pra mais nova
  // descendente -> mais nova pra mais antiga
  const order = searchParams.order === "desc" ? "-fields.dateEvent" : "fields.dateEvent";

  const data = await getContentByContentType<MaterialsBooks>({
    contentType: "books",
    order,
  });
  const books: ResolvedMaterialsBooks = resolveResponse(data) || [];

  return <LivrosPage books={books} />;
}
