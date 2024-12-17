import { CONTENT_TYPES, GetContentByContentTypeResponse } from "@/types/contentful.types";
import axios from "axios";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

export const contentful = axios.create({
  baseURL: "https://cdn.contentful.com/",
  headers: { Authorization: `Bearer ${TOKEN}` },
});

export async function getContentByContentType<T>(contentType: CONTENT_TYPES | string) {
  if (!contentType) throw new Error("Missing Content Type");

  try {
    const { data, status } = await contentful.get<GetContentByContentTypeResponse<T>>(
      `spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/?select=fields&content_type=${contentType}`
    );

    if (status !== 200) {
      console.error("Unexpected response status:", status);
      return null;
    }

    console.log("getContentByContentType Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching contentful data:", error);
  }
}
