import { CONTENT_TYPES, GetContentByContentTypeResponse } from "@/types/contentful.types";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const BASE_URL = "https://cdn.contentful.com";

export async function getContentByContentType<T>(
  contentType: CONTENT_TYPES | string
): Promise<GetContentByContentTypeResponse<T>> {
  if (!contentType) throw new Error("Missing Content Type");

  const response = await fetch(
    `${BASE_URL}/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/?select=fields&content_type=${contentType}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Erro ao buscar conteúdo: ${response.status}, ${response.statusText}`);
  }

  return response.json();
}
