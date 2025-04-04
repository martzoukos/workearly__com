import airtable from "airtable";

export default async function fetchEndDates() {
  const base = airtable.base("app69jRES4jLiQ3WO");

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
