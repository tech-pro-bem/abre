import { ResolvedMaterialsBooks, MaterialsBooks } from "@/types/contentful.types";
import resolveResponse from "contentful-resolve-response";
import { getContentByContentType } from "@/lib/contentful";
import LivrosPage from "./books-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livros",
  description: "Consulte as nossas publicações",
};

export default async function Livros({searchParams}:{searchParams: {order?: string}}) {
  const order= searchParams.order === "old" ? "fields.dateEvent" : "-fields.dateEvent"

  const data = await getContentByContentType<MaterialsBooks>({
    contentType: "books",
    order,
  });
  const books: ResolvedMaterialsBooks = resolveResponse(data) || [];

  return (
      <LivrosPage books={books} />
  );
}
