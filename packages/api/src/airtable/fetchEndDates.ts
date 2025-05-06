import airtable from "airtable";

export default async function fetchEndDates() {
  const base = airtable.base("appyKZe9JgVB0T3s4");

  const records = await base
    .table("End Dates")
    .select({
      fields: ["Name", "Date", "Gift"],
    })
    .all();

  return records.map((record) => ({
    name: record.get("Name")?.toString() || "",
    date: record.get("Date")?.toString() || "",
    gift: record.get("Gift")?.toString() || "",
  }));
}
