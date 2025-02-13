import { ResolvedMaterialsBooks, MaterialsBooks } from "@/types/contentful.types";
import resolveResponse from "contentful-resolve-response";
import { getContentByContentType } from "@/lib/contentful";
import LivrosPage from "./books-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livros",
  description: "Consulte as nossas publicações",
};

export default async function Livros() {

  const data = await getContentByContentType<MaterialsBooks>({
    contentType: "books",
    order: "sys.createdAt",
  });
  const books: ResolvedMaterialsBooks = resolveResponse(data) || [];

  return (
    <>
      <LivrosPage books={books} />
    </>   
  );
}
