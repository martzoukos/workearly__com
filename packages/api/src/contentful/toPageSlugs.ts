export default function toPageSlugs(slug: string): Array<string> {
  return slug === "home" ? [] : slug.split("/");
}
