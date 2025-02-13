import type { Asset, EntryFields, TagSys } from "contentful";

/*
 * Lista não exaustiva de content-types disponíveis
 *
 * TODO: atualizar lista ao finalizar cadastro no contentful para auxiliar
 * na tipagem da função getContentByContentType em "@/lib/contentful.ts"
 */

export type ORDERING_TYPES = "sys.createdAt" | "-sys.createdAt";

export type CONTENT_TYPES =
  | "album"
  | "books"
  | "contacts"
  | "gallery"
  | "projects"
  | "reports"
  | "testimonials"
  | "faq"
  | "donationPix"
  | "materiaisRelatoriosDeAtividades"
  | "textoLgpd"
  | "about";

export type GetContentByContentTypeResponse<T> = {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: Array<{
    sys: TagSys;
    fields: T;
  }>;
  includes?: {
    Asset: Asset[];
  };
};

/*
 * TODO: atualizar tipos com os fields de cada Content model
 * os tipos de cada field podem ser encontrados em: https://app.contentful.com/spaces/{spaceId}/content_types/{contentTypeId}/preview
 * em: fields[number].type
 */

export type Testimonials = {
  title: EntryFields.Symbol;
  quote: EntryFields.RichText;
  content: EntryFields.RichText;
  author: EntryFields.RichText;
};

export type FAQ = {
  title: EntryFields.Symbol;
  text: EntryFields.RichText;
};

export type DonationShape = {
  chavePixDetalhada: EntryFields.Symbol;
  chavePix: EntryFields.Symbol;
  nome: EntryFields.Symbol;
  cidade: EntryFields.Symbol;
  banco: EntryFields.Symbol;
  agencia: EntryFields.Symbol;
  contaCorrente: EntryFields.Symbol;
};

export type MaterialsReports = {
  title: EntryFields.Symbol;
  file: EntryFields.AssetLink;
};

export type LgpdText = {
  text: EntryFields.RichText;
};

export type About = {
  title: EntryFields.Symbol;
  text: EntryFields.RichText;
  urlVideo: EntryFields.RichText;
};

export type Gallery = {
  coverImage: EntryFields.AssetLink;
  photos: EntryFields.AssetLink[];
  title: EntryFields.Symbol;
  description: EntryFields.Symbol;
};

export type MaterialsBooks = {
  image: EntryFields.AssetLink;
  title: EntryFields.Symbol;
  subtitle: EntryFields.Text;
  file: EntryFields.AssetLink;
}

export type ResolvedMaterialsReports = GetContentByContentTypeResponse<MaterialsReports>["items"];
export type ResolvedGallery = GetContentByContentTypeResponse<Gallery>["items"];
export type ResolvedMaterialsBooks = GetContentByContentTypeResponse<MaterialsBooks>["items"];
