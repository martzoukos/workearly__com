import airtable from "airtable";
import { mapToTranslationItem } from "./mappers";

export default async function getTranslations() {
  const base = airtable.base("app69jRES4jLiQ3WO");

  const records = await base
    .table("Translations")
    .select({
      fields: ["code", "el", "en"],
    })
    .all();

  const items = records.map(mapToTranslationItem);

  return items;
}
