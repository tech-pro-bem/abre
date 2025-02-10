import type {
  CONTENT_TYPES,
  GetContentByContentTypeResponse,
  ORDERING_TYPES,
} from "@/types/contentful.types";

type GetContentByContentTypeParams = {
  contentType: CONTENT_TYPES;
  order?: ORDERING_TYPES;
  limit?: number;
  skip?: number;
};

const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const BASE_URL = "https://cdn.contentful.com";

export async function getContentByContentType<T>({
  contentType,
  order,
  limit = 800,
  skip = 0,
}: GetContentByContentTypeParams): Promise<GetContentByContentTypeResponse<T>> {
  if (!contentType) throw new Error("Missing Content Type");

  const url = new URL(`${BASE_URL}/spaces/y8iety9r124h/environments/${ENVIRONMENT}/entries/`);

  const params = {
    select: "sys,fields",
    content_type: contentType,
    limit,
    skip,
    ...(order && { order }),
  };

  Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, String(value)));

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Erro ao buscar conteúdo do tipo ${contentType}: ${response.status} - ${response.statusText}`
    );
  }

  return response.json();
}
