import { capitalizeFirstLetter } from "./capitalize-first-letter";

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\//g, " ")
    .replace(/[^a-z0-9 ]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function generateTitleFromSlug(slug: string): string {
  return capitalizeFirstLetter(slug.replace(/-/g, " "));
}
