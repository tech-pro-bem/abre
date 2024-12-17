import { EntryFields } from "contentful";

/*
 * Lista não exaustiva de content-types disponíveis
 *
 * TODO: atualizar lista ao finalizar cadastro no contentful para auxiliar
 * na tipagem da função getContentByContentType em "@/lib/contentful.ts"
 */

export const content_types = [
  "album",
  "books",
  "contacts",
  "gallery",
  "pix",
  "projects",
  "reports",
  "testimonials",
  "mockTestimonials",
  "mockFaq",
] as const;

export type CONTENT_TYPES = (typeof content_types)[number];

export type GetContentByContentTypeResponse<T> = {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: Array<{ fields: T }>;
};

/*
 * TODO: atualizar tipos com os fields de cada Content model
 * os tipos de cada field podem ser encontrados em: https://app.contentful.com/spaces/{spaceId}/content_types/{contentTypeId}/preview
 * em: fields[number].type
 */

export type Testimonials = {
  title: EntryFields.Symbol;
  quote: EntryFields.RichText;
  text: EntryFields.RichText;
  author: EntryFields.RichText;
};

export type FAQ = {
  title: EntryFields.Symbol;
  text: EntryFields.RichText;
};
