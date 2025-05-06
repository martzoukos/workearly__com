import airtable from "airtable";
import { mapToTranslationItem } from "./mappers";

export default async function fetchTranslations() {
  const base = airtable.base("appyKZe9JgVB0T3s4");

  const records = await base
    .table("Translations")
    .select({
      fields: ["code", "el", "en"],
    })
    .all();

  const items = records.map(mapToTranslationItem);

  return items;
}
